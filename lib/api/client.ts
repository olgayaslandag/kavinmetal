// API istemcisi: CONTENT_API_BASE_URL tanımlıysa gerçeği backend'e fetch,
// tanımsızsa (mock mod) aynı domain'deki resolver'ları doğrudan import eder.
// Her metod, [next: { revalidate: 3600 }] ile ISR uyumlu fetch seçenekleri içerir.

import {
  resolveSolutionList,
  resolveServicesList,
  resolveNewsList,
  resolveReferenceLogos,
  resolveReferencesList,
  resolveSolutionDetail,
  resolveServiceDetail,
} from "@/lib/api/mock/resolver";
import {
  projects,
  type Project,
} from "@/data/content";
import type {
  Solution,
  ServiceSummary,
  NewsArticle,
  Reference,
  ReferenceLogo,
  Project as ProjectType,
  Service,
} from "@/lib/api/types";

const BASE = process.env.CONTENT_API_BASE_URL?.trim();

export const getSolutions = async (): Promise<Solution[]> => {
  if (!BASE) return resolveSolutionList();
  const res = await fetch(`${BASE}/api/v1/solutions`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
};

export const getSolution = async (slug: string): Promise<Solution | null> => {
  if (!BASE) {
    const solution = resolveSolutionDetail(slug);
    return solution ?? null;
  }
  const res = await fetch(`${BASE}/api/v1/solutions/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};

export const getServices = async (): Promise<ServiceSummary[]> => {
  if (!BASE) return resolveServicesList();
  const res = await fetch(`${BASE}/api/v1/services`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
};

export const getService = async (slug: string): Promise<Service | null> => {
  if (!BASE) {
    const service = resolveServiceDetail(slug);
    return service ?? null;
  }
  const res = await fetch(`${BASE}/api/v1/services/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};

export const getNews = async (): Promise<NewsArticle[]> => {
  if (!BASE) return resolveNewsList();
  const res = await fetch(`${BASE}/api/v1/news`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
};

export const getNewsDetail = async (slug: string): Promise<NewsArticle | null> => {
  if (!BASE) {
    const articles = resolveNewsList(slug);
    return articles.length > 0 ? articles[0] : null;
  }
  const res = await fetch(`${BASE}/api/v1/news/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};

export const getReferences = async (): Promise<Reference[]> => {
  if (!BASE) return resolveReferencesList();
  const res = await fetch(`${BASE}/api/v1/references`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
};

export const getReferenceLogos = async (): Promise<ReferenceLogo[]> => {
  if (!BASE) return resolveReferenceLogos();
  const res = await fetch(`${BASE}/api/v1/reference-logos`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
};

export const getReference = async (slug: string): Promise<Reference | null> => {
  if (!BASE) {
    const refs = resolveReferencesList();
    const ref = refs.find((r) => r.slug === slug);
    return ref ?? null;
  }
  const res = await fetch(`${BASE}/api/v1/references/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};

export const getProjects = async (): Promise<ProjectType[]> => {
  if (!BASE) return projects;
  const res = await fetch(`${BASE}/api/v1/projects`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
};

export const getProject = async (slug: string): Promise<ProjectType | null> => {
  if (!BASE) {
    const project = projects.find(
      (p: ProjectType) => p.href.split("/").pop() === slug
    );
    return project ?? null;
  }
  const res = await fetch(`${BASE}/api/v1/projects/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};

export const contentApi = {
  getSolutions,
  getSolution,
  getServices,
  getService,
  getNews,
  getNewsDetail,
  getReferences,
  getReferenceLogos,
  getReference,
  getProjects,
  getProject,
};