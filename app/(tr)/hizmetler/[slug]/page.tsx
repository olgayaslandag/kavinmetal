import { contentApi } from "@/lib/api/client";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";

// Detail sayfa için revalidate süresi: 3600 saniye (ISR)
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = await contentApi.getService(params.slug);
  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Kavin System Solutions`,
    description:
      service.description.length > 155
        ? service.description.substring(0, 155) + "..."
        : service.description,
  };
}

// Static params: hizmet slug'lerini API'den al (ISR ile yenilenir)
export const generateStaticParams = async () => {
  const services = await contentApi.getServices();
  return services.map((s: any) => ({ slug: s.slug }));
};

export default async function HizmetlerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Servisi API'den çek
  const service = await contentApi.getService(params.slug);
  if (!service) notFound();

  // Sayfa başlığı (PageHero, h2, breadcrumb için)
  const title = service.title;

  return (
    <>
      <PageHero
        eyebrow="HİZMET DETAYI"
        title={title}
        lead={service.heroLead}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: title },
        ]}
      />
      <section className="section" aria-label={title}>
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
                "Başlangıç",
                "Planlama",
                "İşleme",
                "Son Kontrol",
                "Teslimat",
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
          <p className="eyebrow">İLETİŞİM</p>
          <h2>Projeye Hazır mısınız?</h2>
          <p className="section-desc">
            Alüminyum profiller, cephe sistemleri ve besleme çözümleri hakkında
            uzman ekibimizle konuşmak için iletişim formunu doldurunuz.
          </p>
          <a href="/iletisim" className="btn-primary">
            BİZE ULAŞIN
          </a>
        </div>
      </footer>
    </>
  );
}