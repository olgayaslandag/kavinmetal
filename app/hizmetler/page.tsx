import { services } from "@/data/content";
import PageHero from "@/components/PageHero";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CarouselControls from "@/components/CarouselControls";

export default function HizmetlerPage() {
  return (
    <>
      <PageHero eyebrow="HİZMETLER" title="Hizmetler" lead="Yüzey işlemleri, mekanik işlemler ve projeye özel imalat çözümleriyle güçlü projeler oluşturuyoruz." />
      <section className="section services">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">YAŞAMINIZA ÖZEL</p>
              <h2 id="services-title">Hizmetler</h2>
              <p className="section-desc">
                Yüzey işlemleri, mekanik işlemler ve size özel imalat çözümleri
                ile güçlü projeler oluşturuyoruz.
              </p>
            </div>
            <a className="text-link" href="/iletisim">
              TÜM HİZMETLER <ArrowRight size={16} />
            </a>
          </div>
          <div className="service-grid">
            {services.map((service, i) => (
              <a
                key={service.href}
                href={`/hizmetler/${service.href.split("/").pop()}`}
                className="group service-card reveal"
                data-reveal="deal"
                data-delay={i * 140}
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
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p className="text-muted">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
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