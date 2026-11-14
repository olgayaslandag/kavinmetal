// Locale utilities for TR↔EN routing
// Used by SiteHeader, SiteFooter, and other chrome components
// Locale is now determined solely by URL pathname (no localStorage override)

// Check if pathname is an EN locale path
export const isEnPath = (pathname: string): boolean => {
  return pathname === '/en' || pathname.startsWith('/en/');
};

// Get the locale from pathname
export const getLocaleFromPathname = (pathname: string): 'tr' | 'en' => {
  if (isEnPath(pathname)) return 'en';
  return 'tr';
};

// Get the switch href for locale switching
// Maps a pathname to its counterpart in the target locale
export const getSwitchHref = (pathname: string, targetLocale: 'tr' | 'en'): string => {
  // Normalize pathname: ensure single leading slash, no trailing slash unless root
  const normalized = pathname === '/' ? '/' : pathname.replace(/^\/|\/$/g, '').replace(/\/$/, '') || '/';

  // Authoritative EN service hrefs from content.en.ts (paired by index with content.tr.ts services)
  const enServiceHrefs = [
    '/en/services/surface-treatment',
    '/en/services/mechanical-processing',
    '/en/services/izomat-service',
    '/en/services/project-service',
  ];

  // TR service hrefs paired by index with content.en.ts
  const trServiceHrefs = [
    '/hizmetler/yuzey-islemleri',
    '/hizmetler/mekanik-islemler',
    '/hizmetler/izomat',
    '/hizmetler/proje-hizmetleri',
  ];

  // Build reverse maps
  const enToTrServiceMap: Record<string, string> = {};
  const trToEnServiceMap: Record<string, string> = {};

  enServiceHrefs.forEach((enHref, i) => {
    trToEnServiceMap[trServiceHrefs[i]] = enHref;
    enToTrServiceMap[enHref] = trServiceHrefs[i];
  });

  // 1. Check general path map (root, contact, services, news, references, legal)
  const pathMap: Record<string, string> = {
    // Root mapping
    '/': '/en',
    '/en': '/',

    // Contact mapping
    '/iletisim': '/en/contact',
    '/en/contact': '/iletisim',

    // Services category mapping
    '/hizmetler': '/en/services',
    '/en/services': '/hizmetler',

    // News mapping
    '/haberler': '/en/news',
    '/en/news': '/haberler',

    // References/Projects mapping
    '/projeler': '/en/references',
    '/en/references': '/projeler',

    // Legal mappings
    '/hakkimizda': '/en/about',
    '/en/about': '/hakkimizda',
    '/kvkk': '/en/kvkk',
    '/en/kvkk': '/kvkk',
    '/gizlilik-politikasi': '/en/privacy',
    '/en/privacy': '/gizlilik-politikasi',
    '/kullanim-sartlari': '/en/terms',
    '/en/terms': '/kullanim-sartlari',
  };

  if (pathMap[normalized]) {
    return pathMap[normalized];
  }

  // 2. Check service routes using the index-based mapping
  if (targetLocale === 'en') {
    // From TR to EN: /hizmetler/<slug> -> check against content.en.ts service hrefs
    if (normalized.startsWith('/hizmetler/')) {
      const slug = normalized.replace('/hizmetler/', '');
      const mapped = trToEnServiceMap[`/hizmetler/${slug}`];
      if (mapped) return mapped;
    }
    // From TR to EN: /haberler/<slug> -> /en/news/<slug>
    if (normalized.startsWith('/haberler/')) {
      const slug = normalized.replace('/haberler/', '');
      const mapped = `/en/news/${slug}`;
      if (mapped) return mapped;
    }
    // From TR to EN: /projeler/<slug> -> /en/references/<slug>
    if (normalized.startsWith('/projeler/')) {
      const slug = normalized.replace('/projeler/', '');
      const mapped = `/en/references/${slug}`;
      if (mapped) return mapped;
    }
  } else {
    // From EN to TR: /en/services/<slug> -> check against content.en.ts service hrefs
    if (normalized.startsWith('/en/services/')) {
      const key = normalized.replace('/en/services/', '');
      const mapped = enToTrServiceMap[`/en/services/${key}`];
      if (mapped) return mapped;
    }
    // From EN to TR: /en/news/<slug> -> /haberler/<slug>
    if (normalized.startsWith('/en/news/')) {
      const slug = normalized.replace('/en/news/', '');
      const mapped = `/haberler/${slug}`;
      if (mapped) return mapped;
    }
    // From EN to TR: /en/references/<slug> -> /projeler/<slug>
    if (normalized.startsWith('/en/references/')) {
      const slug = normalized.replace('/en/references/', '');
      const mapped = `/projeler/${slug}`;
      if (mapped) return mapped;
    }
  }

  // 3. Fallback: target locale's home page
  if (targetLocale === 'en') return '/en';
  return '/';
};