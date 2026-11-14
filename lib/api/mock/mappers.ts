import {
  products,
  productSubGroups,
  services,
  projects,
  pressArticles,
  type PressArticle,
  type Service as ServiceType,
  type Product,
  type ProductSubGroup,
} from "@/data/content";
import { referenceLogos } from "@/data/references";
import type {
  SolutionSummary,
  ServiceSummary,
  NewsArticle,
  Reference,
  ReferenceLogo,
  SolutionSubGroup as SolutionSubGroupType,
  Solution,
  Service,
} from "@/lib/api/types";

// ============================
// Solution (Çözümler) mapper
// ============================

export function mapProductToSolutionSummary(p: any): Solution {
  return {
    slug: p.href.split("/").pop()!,
    title: p.title,
    image: p.image,
    icon: p.icon,
    alt: p.alt,
    description: p.description,
    pdf: p.pdf,
    subGroups: [],
  };
}

export function mapProductSubGroupToSolutionSubGroup(
  sg: any
): SolutionSubGroupType {
  return {
    title: sg.title,
    image: sg.image,
    alt: sg.alt,
    pdf: sg.pdf,
  };
}

export function mapSolutionsList(): { solutions: SolutionSummary[] } {
  const results: SolutionSummary[] = [];
  for (const p of products) {
    results.push({
      slug: p.href.split("/").pop()!,
      title: p.title,
      image: p.image,
      icon: p.icon,
      alt: p.alt,
      description: p.description,
    });
  }
  return { solutions: results };
}

// ============================
// Service (Hizmetler) mapper
// ============================

export function mapServiceToServiceSummary(s: any): ServiceSummary {
  return {
    slug: s.href.split("/").pop()!,
    title: s.title,
    description: s.description,
    image: s.image,
    alt: s.alt,
    href: s.href,
  };
}

export function mapServicesList(): { services: ServiceSummary[] } {
  const results: ServiceSummary[] = [];
  for (const s of services) {
    results.push({
      slug: s.href.split("/").pop()!,
      title: s.title,
      description: s.description,
      image: s.image,
      alt: s.alt,
      href: s.href,
    });
  }
  return { services: results };
}

// ============================
// News (Haberler) mapper
// ============================

function mapPressArticleToNewsArticle(a: any): NewsArticle {
  const publishedAtMap: Record<string, string> = {
    pukabBaskaniArticle: "2023-04-28",
    sahaExpoSolarCarportArticle: "2023-03-23",
    luleburgazFabrikaArticle: "2023-01-01",
    fortyNineUlkeArticle: "2022-01-01",
    bauMuenichArticle: "2017-01-01",
  };

  let iso: string;
  if (a.slug && publishedAtMap[a.slug]) {
    iso = publishedAtMap[a.slug];
  } else if (a.dateLabel) {
    // Deterministic fallback: parse dateLabel (Turkish format like "28 Nisan 2023" or "2023")
    // Convert to ISO format - handle both "28 Nisan 2023" and "2023" formats
    if (a.dateLabel.includes(" ")) {
      // Format: "28 Nisan 2023"
      const parts = a.dateLabel.split(" ");
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      
      const monthMap: Record<string, string> = {
        "Ocak": "01", "Şubat": "02", "Mart": "03", "Nisan": "04",
        "Mayıs": "05", "Haziran": "06", "Temmuz": "07", "Ağustos": "08",
        "Eylül": "09", "Ekim": "10", "Kasım": "11", "Aralık": "12"
      };
      
      const monthNum = monthMap[month] || "01";
      iso = `${year}-${monthNum}-${day.padStart(2, "0")}`;
    } else {
      // Format: "2023" - use start of year
      iso = `${a.dateLabel}-01-01`;
    }
  } else {
    // Final deterministic fallback: use a fixed date for unknown slugs
    iso = "2023-01-01";
  }

  return {
    slug: a.slug,
    title: a.title,
    category: a.category,
    publishedAt: iso,
    dateLabel: a.dateLabel,
    excerpt: a.excerpt,
    image: a.image,
    imageAlt: a.imageAlt,
    images: a.images,
    sourceLabel: a.sourceLabel,
    sourceUrl: a.sourceUrl,
    blocks: a.blocks,
  };
}

export function mapNewsList(slug?: any): { articles: NewsArticle[] } {
  const results: NewsArticle[] = [];
  if (slug) {
    const article = pressArticles.find((a: any) => a.slug === slug);
    if (article) results.push(mapPressArticleToNewsArticle(article));
  } else {
    for (const a of pressArticles) {
      results.push(mapPressArticleToNewsArticle(a));
    }
    // Sort by publishedAt descending
    results.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }
  return { articles: results };
}

// ============================
// Reference (Referanslar) mapper
// ============================

// ============================
// Reference (Referanslar) mapper
// ============================

export function mapReferenceLogos(): ReferenceLogo[] {
  return referenceLogos;
}

export function mapReferencesList(): { references: Reference[] } {
  const results: Reference[] = [];
  for (const project of projects) {
    results.push({
      slug: project.href.split("/").pop()!,
      title: project.title,
      image: project.image,
      alt: project.alt,
      description: project.description,
    });
  }
  return { references: results };
}

// ============================
// Helper: complete mapping for detail pages
// ============================

export function mapSolutionDetail(slug: any): { solution: Solution } | null {
  const product = products.find((p: any) => p.href.split("/").pop() === slug);
  if (!product) return null;

  const subGroups: SolutionSubGroupType[] = [];
  for (const sg of productSubGroups) {
    if (sg.parentHref === product.href) {
      subGroups.push({
        title: sg.title,
        image: sg.image,
        alt: sg.alt,
        pdf: sg.pdf,
      });
    }
  }

  return {
    solution: {
      ...mapProductToSolutionSummary(product),
      subGroups: subGroups.length > 0 ? subGroups : [],
    },
  };
}

export function mapServiceDetail(slug: any): Service | null {
  const service = services.find(
    (s: any) => s.href.split("/").pop() === slug
  );
  if (!service) return null;

  const result: Service = {
    slug: service.href.split("/").pop()!,
    title: service.title,
    description: service.description,
    image: service.image,
    alt: service.alt,
    intro: service.intro,
    gallery: service.gallery,
    steps: service.steps,
    features: service.features,
  };
  return result;
}