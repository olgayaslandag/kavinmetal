import { getContent } from "@/data/index";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";

// Href bazlı hizmet detayı (TR hizmetler/[slug] yapısı aynısı)
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  const service = enContent.services.find(
    (s: any) => s.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Kavin System Solutions`,
    description: service.description,
    alternates: {
      languages: {
        tr: '/hizmetler/' + service.slug,
        en: `/en/services/${service.slug}`,
      },
    },
  };
}
export const generateStaticParams = async () => {
  const { getContent } = await import('@/data/index');
  const enContent = getContent('en');
  return enContent.services.map((s: any) => ({
    slug: s.slug,
  }));
};

// TR hizmetler/[slug] detay sayfası birebir kopyalanır
export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  const service = enContent.services.find(
    (s: any) => s.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  // Breadcrumb
  const breadcrumbs = [
    { label: "Home", href: "/en" },
    { label: "Services", href: "/en/services" },
    { label: service.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="SERVICE DETAIL"
        title={service.title}
        lead={service.heroLead}
        breadcrumbs={breadcrumbs}
      />
      <section className="section" aria-label={service.title}>
        <div className="container">
          <div className="service-detail-wrapper">
            <div className="service-detail-media">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="service-detail-image"
                />
              ) : null}
              <div className="service-detail-intro">
                {service.intro ? service.intro.map((line: string, i: number) => (
                  <p key={i} className="service-detail-intro-line">
                    {line}
                  </p>
                )) : null}
              </div>
            </div>
            <div className="service-steps">
              {[
                "Start",
                "Planning",
                "Processing",
                "Final Check",
                "Delivery",
              ].map((label, i) => (
                <div key={i} className="service-step">
                  <p className="service-step__num">{i + 1}</p>
                  <p className="service-step__label">{label}</p>
                </div>
              ))}
            </div>
            <div className="service-features">
              {service.features.map((f: { title: string; text: string }, i: number) => (
                <div key={i} className="service-feature">
                  <span className="service-feature__icon" aria-hidden="true">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="service-cta">
        <div className="container">
          <p className="eyebrow">CONTACT</p>
          <h2>Ready for a project?</h2>
          <p className="section-desc">
            Talk to our expert team about aluminium profiles, facade systems, and installation solutions. Fill out the contact form to get in touch.
          </p>
          <a href="/en/contact" className="btn-primary">
            CONTACT US
          </a>
        </div>
      </footer>
    </>
  );
}