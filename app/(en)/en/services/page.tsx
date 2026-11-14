import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CarouselControls from "@/components/CarouselControls";
import { notFound } from "next/navigation";

// EN Services page: content.en.ts verileriyle hizmet kartları
export const revalidate = 3600;

export async function generateMetadata() {
  return {
    title: "Services | Kavin System Solutions",
    description:
      "Surface treatment, mechanical processing, Izomat and project services with high-quality aluminium solutions.",
    alternates: {
      languages: {
        tr: '/hizmetler',
        en: '/en/services',
      },
    },
  };
}

export async function generateStaticParams() {
  // Generate static params from content.en.ts service data
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  const services = enContent.services;

  return services.map((service: any) => ({
    slug: service.slug,
  }));
}

export default async function ServicesPage({ params }: { params: { slug?: string } }) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  const services = enContent.services;

  // If a specific slug is provided, show that service detail
  if (params?.slug) {
    const service = services.find((s: any) => s.slug === params.slug);

    if (!service) {
      notFound();
    }

    return (
      <>
        <PageHero
          eyebrow="OUR SOLUTIONS"
          title="Services"
          lead="Surface treatments, mechanical processing and custom manufacturing solutions with high-quality aluminium solutions."
        />
        <section className="section services" id="services">
          <div className="container">
            <div className="service-wrap">
              <div className="service-grid">
                {service.steps.map((step: any, i: number) => (
                  <div
                    key={step.title}
                    className="service-step"
                    data-reveal="deal"
                    data-delay={i * 140}
                  >
                    <div className="service-step__num">{step.title}</div>
                    <h3>{step.text}</h3>
                  </div>
                ))}
                {service.features.map((feature: any, i: number) => (
                  <div
                    key={feature.title}
                    className="service-feature"
                    data-reveal="deal"
                    data-delay={i * 140 + 100}
                  >
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
              <CarouselControls
                targetSelector=".service-grid"
                label="Service navigation"
                itemCount={1}
              />
            </div>
          </div>
        </section>
      </>
    );
  }

  // Root page: list all services with links to detail pages - TR markup mirrored
  return (
    <>
      <PageHero
        eyebrow="OUR SOLUTIONS"
        title="Services"
        lead="Surface treatments, mechanical processing and custom manufacturing solutions with high-quality aluminium solutions."
      />
      <section className="section services" id="services">
        <div className="container">
          <div className="service-wrap">
            <div className="service-grid">
              {services.map((service: any, i: number) => (
                <a
                  key={service.key}
                  href={`/en/services/${service.slug}`}
                  className="service-card reveal"
                  data-reveal="deal"
                  data-delay={i * 140}
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
                    <p>{service.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <CarouselControls
            targetSelector=".service-grid"
            label="Service navigation"
            itemCount={services.length}
          />
        </div>
      </section>
    </>
  );
}