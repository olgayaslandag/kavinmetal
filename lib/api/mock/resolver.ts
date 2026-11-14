// Mock API resolver: seed verilerini (content.ts + references.ts) API DTO'larına çevirir.
// Gerçek backend ortamında çağrılır; mock modda client doğrudan bu fonksiyonları çağırır.

import {
  mapSolutionsList,
  mapServicesList,
  mapNewsList,
  mapReferenceLogos,
  mapReferencesList,
  mapSolutionDetail,
  mapServiceDetail,
} from "@/lib/api/mock/mappers";
import { referenceLogos } from "@/data/references";
import {
  products,
  productSubGroups,
  services,
  projects,
  pressArticles,
} from "@/data/content";
import type {
  SolutionSummary,
  ServiceSummary,
  Solution,
  Service,
  NewsArticle as NewsArticleType,
  Reference,
  ReferenceLogo,
} from "@/lib/api/types";

// ---------------------------------------------------------------------------
// Liste resolveleri (summary listesi)
// ---------------------------------------------------------------------------

export function resolveSolutionList(): Solution[] {
  const summaries = mapSolutionsList().solutions;
  return summaries.map((summary: SolutionSummary) => ({
    slug: summary.slug,
    title: summary.title,
    image: summary.image,
    icon: summary.icon,
    alt: summary.alt,
    description: summary.description,
    pdf: "",
    subGroups: [],
  }));
}

export function resolveServicesList(): ServiceSummary[] {
  const summaries = mapServicesList().services;
  return summaries.map((summary: ServiceSummary) => ({
    slug: summary.slug,
    title: summary.title,
    description: summary.description,
    image: summary.image,
    alt: summary.alt,
    intro: [],
    gallery: [],
    steps: [],
    features: [],
    href: summary.href,
  }));
}

// News resolveleri

export function resolveNewsList(slug?: string): NewsArticleType[] {
  // resolver içinden mapNewsList çağrılıyor; tipi yönlendirme burada yapılıyor
  const { articles } = mapNewsList(slug);
  return articles;
}

export function resolveReferenceLogos(): ReferenceLogo[] {
  return referenceLogos;
}

export function resolveReferencesList(): Reference[] {
  return mapReferencesList().references;
}

// ---------------------------------------------------------------------------
// Detay resolveleri (tek obje)
// ---------------------------------------------------------------------------

export function resolveSolutionDetail(slug: string): Solution | null {
  const mapped = mapSolutionDetail(slug);
  if (!mapped || !mapped.solution) return null;
  return mapped.solution;
}

export function resolveServiceDetail(slug: string): Service | null {
  const service = mapServiceDetail(slug);
  return service || null;
}

// News detail resolver

export function resolveNewsDetail(slug: string): NewsArticleType | null {
  const articles = resolveNewsList(slug);
  return articles.length > 0 ? articles[0] : null;
}