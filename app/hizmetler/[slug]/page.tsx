import { services } from "@/data/content";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";

export default function HizmetlerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre hizmet bul - href ile birebir eşleşme (cozumler deseni ile aynı)
  const service = services.find((s) => s.href === `/hizmetler/${slug}`);

  if (!service) {
    notFound();
  }

  // Breadcrumbs: ana sayfa → hizmetler → hizmet (son krabın href yok)
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: service.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="HİZMET"
        title={service.title}
        lead={service.description}
        breadcrumbs={breadcrumbs}
      />
      <section className="corporate-intro" aria-labelledby="service-about-title">
        <div className="container corporate-intro__grid">
          <div
            className="corporate-intro__visuals reveal"
            data-reveal="left"
            aria-label={service.title + " fotosgaleri"}
          >
            <figure className="corporate-photo">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
            {service.gallery.map((g, i) => (
              <figure key={i} className="corporate-photo">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
          <div className="corporate-intro__statement reveal" data-reveal="right">
            <p className="eyebrow">HİZMET HAKKINDA</p>
            <h2 id="service-about-title">{service.title}</h2>
            <p className="section-desc">{service.intro[0]}</p>
            <p className="section-desc" style={{ marginTop: "1rem" }}>
              {service.intro[1]}
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">NASIL ÇALIŞIYORUZ</p>
              <h2 id="steps-title">{service.title} Süreci</h2>
            </div>
          </div>
          {/* Süreç: 4 adım */}
          <div className="service-steps">
            {service.steps.map((step, i) => (
              <div
                key={i}
                className="service-step reveal"
                data-delay={i * 120}
              >
                <span className="service-step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-cta" aria-labelledby="cta-title">
        <div className="container">
          <p className="eyebrow">BİRLİKTE ÇALIŞALIM</p>
          <h2 id="cta-title">Projeniz için tek muhatap: Kavin Metal</h2>
<p className="section-desc">
      Ürün ve hizmetlerimiz hakkında teknik detay, fiyatlandırma seçenekleri ve proje ihtiyaçlarınız için ekibimize ulaşın.
</p>
<a className="btn-primary" href="/iletisim">
            TEKLİF AL
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">NEDEN KAVİN</p>
              <h2 id="features-title">Öne Çıkanlar</h2>
            </div>
          </div>
          {/* Özellikler: 4 kart */}
          <div className="service-features">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="service-feature reveal"
                data-delay={i * 120}
              >
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Generate SEO metadata for the service detail page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre hizmet bul
  const service = services.find((s) => s.href === `/hizmetler/${slug}`);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Kavin Metal`,
    description:
      service.description.length > 155
        ? service.description.substring(0, 155) + "..."
        : service.description,
  };
}

// Static params for static export - 4 service slugs
export const generateStaticParams = async () => {
  const slugs = [
    "yuzey-islemleri",
    "mekanik-islemler",
    "izomat",
    "proje-hizmetleri",
  ];
  return slugs.map((slug) => ({ slug }));
};