// API contract types — mock ve gerçek backend için paylaşılan DTO'lar
// Backend değişirse sadece bu dosya güncellenir; component kodunda değişim gerekmez.

export interface ApiError {
  status: number;
  error: string;
  message: string;
}

export interface SolutionSummary {
  slug: string;
  title: string[];
  image: string;
  icon: string;
  alt: string;
  description: string;
}

export interface SolutionSubGroup {
  title: string;
  image: string;
  alt: string;
  pdf: string;
}

export interface Solution {
  slug: string;
  title: string[];
  image: string;
  icon: string;
  alt: string;
  description: string;
  pdf: string;
  subGroups: SolutionSubGroup[];
}

export interface ServiceSummary {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  key?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  intro: string[];
  heroLead?: string;
  gallery: { src: string; alt: string }[];
  steps: { title: string; text: string }[];
  features: { title: string; text: string }[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: "Basın" | "Duyuru" | "Etkinlik";
  publishedAt: string; // ISO date string, sıralama için
  dateLabel: string;    // tr-TR gösterim (gün ay yıl veya sadece yıl)
  excerpt: string;
  image: string;
  imageAlt: string;
  images?: { src: string; alt: string }[];
  sourceLabel?: string;
  sourceUrl?: string;
  blocks: {
    kind: "p" | "question";
    text: string;
  }[];
}

export interface Reference {
  slug: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

export interface ReferenceLogo {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  image: string;
  alt: string;
  href: string;
  description: string;
}