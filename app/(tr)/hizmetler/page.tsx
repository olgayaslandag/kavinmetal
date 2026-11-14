import PageHero from "@/components/PageHero";
import Link from "next/link";
import CarouselControls from "@/components/CarouselControls";
import { contentApi } from "@/lib/api/client";

// Hizmetler sayfası: async Server Component, ISR ile revalidate 3600
export const revalidate = 3600;

export async function generateMetadata() {
  return {
    title: "Hizmetler | Kavin System Solutions",
    description:
      "Yüzey işlemleri, mekanik işlemler ve projeye özel imalat çözümleriyle güçlü projeler oluşturuyoruz.",
  };
}

export default async function HizmetlerPage() {
  const services = await contentApi.getServices();

  return (
    <>
      <PageHero
        eyebrow="YAŞAMINIZA ÖZEL"
        title="Hizmetler"
        lead="Yüzey işlemleri, mekanik işlemler ve size özel imalat çözümleriyle güçlü projeler oluşturuyoruz."
      />
      <section className="section services" id="services">
        <div className="container">
          <div className="service-wrap">
            <div className="service-grid">
              {services.map((service: any, i: number) => (
                <a
                  key={service.title}
                  className="service-card reveal"
                  data-reveal="deal"
                  data-delay={i * 140}
                  href={`/hizmetler/${service.slug}`}
                  aria-label={service.title}
                >
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="card-badge" aria-hidden="true">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <CarouselControls
            targetSelector=".service-grid"
            label="Hizmet navigasyonu"
            itemCount={services.length}
          />
        </div>
      </section>
    </>
  );
}