// SEO utilities for i18n metadata generation
// Note: getHref moved to lib/i18n/locale; this module is kept for backward compatibility

export interface BuildMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

export const buildMetadata = (
  locale: 'tr' | 'en',
  key: string,
  props?: BuildMetadataProps
): {
  title: string;
  description: string;
  keywords?: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    locale: string;
    type: 'website';
    images: string[];
  };
  alternates: {
    canonical: string;
    languages: {
      [lang in 'tr' | 'en']: string;
    };
  };
} => {
  // Use direct URL construction instead of deprecated getHref
  const baseUrls: Record<'tr' | 'en', string> = {
    tr: '/hizmetler/yuzey-islemleri', // Would need service key mapping
    en: '/en/services/surface-treatment', // Would need service key mapping
  };
  
  const href = baseUrls[locale] || '/';
  const canonicalUrl = `https://kavinsystem.com${href}`;
  
  const baseMetadata = {
    tr: {
      title: props?.title || 'Kavin System Solutions | Mimari çözümleriniz için',
      description: props?.description || 'Kavin System Solutions, alüminyum profiller, küpeşte sistemleri, kompozit paneller ve aksesuarlarla mimari çözümler sunar.',
      keywords: props?.keywords || ['alüminyum', 'mimarlık', 'cephe', 'proje', 'çözüm'],
    },
    en: {
      title: props?.title || 'Kavin System Solutions | Your Architectural Solution Provider',
      description: props?.description || 'Kavin System Solutions offers architectural solutions with aluminum profiles, railing systems, composite panels, and accessories. Reliable solution partner for your projects.',
      keywords: props?.keywords || ['aluminum', 'architecture', 'facade', 'project', 'solution'],
    },
  };

  const metadata = baseMetadata[locale];

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
      locale: locale,
      type: 'website' as const,
      images: [props?.image || 'https://kavinsystem.com/assets/img/og-image.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        tr: `https://kavinsystem.com/${key === 'home' ? '' : key}/tr`,
        en: `https://kavinsystem.com/${key === 'home' ? '' : key}/en`,
      },
    },
  };
};