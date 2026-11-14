// Data types with stable key and locale-specific slug fields
export type Product = {
  key: string;           // stable canonical slug (e.g., "aluminium-profiles")
  slug: string;          // locale-specific slug (e.g., "aluminyum-profiller")
  title: string[];
  image: string;
  icon: string;
  alt: string;
  href: string;
  description: string;
  pdf: string;
  parentTitle?: string;
};

export type ProductSubGroup = {
  key: string;           // parent group key (e.g., "aluminium-profiles")
  slug: string;          // locale-specific slug
  parentKey: string;     // parent group key (same as key for consistency)
  parentSlug: string;    // parent locale-specific slug
  title: string;
  image: string;
  alt: string;
  pdf: string;
};

export type ServiceStep = { title: string; text: string };
export type ServiceFeature = { title: string; text: string };

export type Service = {
  key: string;           // stable canonical slug
  slug: string;          // locale-specific slug
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  heroLead: string;
  intro: string[];
  gallery: { src: string; alt: string }[];
  steps: ServiceStep[];
  features: ServiceFeature[];
};

export type HeroSlide = {
  index: string;
  image: string;
  eyebrow: string;
  title: string[];
  lead: string;
  alt: string;
};

export type Project = {
  key: string;           // stable canonical slug
  slug: string;          // locale-specific slug
  title: string;
  image: string;
  alt: string;
  href: string;
  description: string;
};

export type PressArticle = {
  key: string;           // stable canonical slug
  slug: string;          // locale-specific slug
  title: string;
  category: "Basın" | "Duyuru" | "Etkinlik";
  dateLabel: string;        // "28 Nisan 2023"
  excerpt: string;          // kart + hero lead
  image: string;            // /assets/img/press/... veya mevcut asset
  imageAlt: string;
  images?: { src: string; alt: string }[];  // detay ek görselleri (PÜKAB'ta 2'li)
  sourceLabel?: string;     // "TeknoTalk"
  sourceUrl?: string;       // dış link
  blocks: { kind: "p" | "question"; text: string }[];     // intro paragrafları + röportaj Q&A
};

export type CorporateFact = {
  value: string;
  label: string;
};

export type CorporateTimelineEntry = {
  year: string;
  text: string;
};

export type VisionMission = {
  vision: string;
  mission: string;
};

export type CorporateAccordionItem = {
  title: string;
  body: string;
};

export type ContactInfo = {
  headquarters: string;
  factory?: string;
  email: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  mapsUrl: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
};

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceStepLocalized = { title: string; text: string };
export type ServiceFeatureLocalized = { title: string; text: string };

export type LegalContent = {
  kvkk: string;
  privacy: string;
  terms: string;
};
