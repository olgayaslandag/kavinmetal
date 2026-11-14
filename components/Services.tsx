import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ServiceSummary } from "@/lib/api/types";
import CarouselControls from "./CarouselControls";
import { getSwitchHref } from "@/lib/i18n/locale";

// Hizmetler: 4 kart + başlık + navigasyon
interface ServicesProps {
  data: ServiceSummary[];
  locale?: 'tr' | 'en';
}
export default function Services({ data, locale }: ServicesProps) {
  const effectiveLocale = locale ?? 'tr';
  const isEn = effectiveLocale === 'en';

  return (
    <section
      className="section services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-left">
            <p className="eyebrow">{isEn ? "DISCOVER" : "YAŞAMINIZA ÖZEL"}</p>
            <h2 id="services-title">{isEn ? "Services" : "Hizmetler"}</h2>
            <p className="section-desc">
              {isEn
                ? "Surface treatments, mechanical processing and custom manufacturing solutions for strong projects."
                : "Yüzey işlemleri, mekanik işlemler ve size özel imalat çözümleri ile güçlü projeler oluşturuyoruz."}
            </p>
          </div>
          <a className="text-link" href={isEn ? "/en/contact" : "/iletisim"}>
            {isEn ? "ALL SERVICES" : "TÜM HİZMETLER"} <ArrowRight size={16} />
          </a>
        </div>
        <div className="service-wrap">
          <div className="service-grid">
            {data.map((service, i) => (
              <Link
                key={service.key ?? service.slug ?? service.href}
                className="service-card reveal"
                data-reveal="deal"
                data-delay={i * 140}
                href={service.href ?? `/${isEn ? 'en/services' : 'hizmetler'}/${service.slug}`}
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
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <CarouselControls
            targetSelector=".service-grid"
            label={isEn ? "Service navigation" : "Hizmet navigasyonu"}
            itemCount={data.length}
          />
        </div>
      </div>
    </section>
  );
}