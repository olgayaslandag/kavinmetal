import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kavinsystem.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/en/services/surface-treatment`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services/mechanical-processing`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services/izomat-service`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services/project-service`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/contact`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/kvkk`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/gizlilik-politikasi`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/kullanim-sartlari`, lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  // Service pages (TR + EN pairs)
  const serviceSitemap: MetadataRoute.Sitemap = [
    // TR service pages
    { url: `${baseUrl}/hizmetler/yuzey-islemleri`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/hizmetler/mekanik-islemler`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/hizmetler/izomat`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/hizmetler/proje-hizmetleri`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    // EN service pages
    { url: `${baseUrl}/en/services/surface-treatment`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services/mechanical-processing`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services/izomat-service`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/en/services/project-service`, lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return [...staticPages, ...serviceSitemap];
}