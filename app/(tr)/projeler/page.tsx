import { contentApi } from "@/lib/api/client";
import PageHero from "@/components/PageHero";
import CarouselControls from "@/components/CarouselControls";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 3600;

export default async function ProjelerPage() {
  const projects = await contentApi.getProjects();

  return (
    <>
      <PageHero
        eyebrow="REFERANSLAR"
        title="Projeler"
        lead="Müşteri memnuniyetimizle yaşam alanlarına değer katacak sürdürülebilir, ulaşılabilir, kaliteli ve uzun ömürlü ürünleri sunma kabiliyetimiz ile yurt içi ve yurt dışındaki birçok nitelikli projeye ürün ve hizmet sunuyoruz."
      />
      <section className="section projects">
        <div className="container">
          <div className="project-wrap">
            <div
              className="project-viewport"
              role="region"
              aria-roledescription="carousel"
              aria-label="Projeler"
              tabIndex={0}
            >
              <div className="project-grid">
                {projects.map((project, i) => (
                  <a
                    key={project.href}
                    href={project.href}
                    className="project-card reveal"
                    data-reveal="deal"
                    data-delay={i * 140}
                    aria-label={project.alt}
                  >
                    <div>
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="card-badge" aria-hidden="true">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                    <strong>{project.title}</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <CarouselControls
            targetSelector=".project-grid"
            label="Proje navigasyonu"
            showDots
            itemCount={projects.length}
          />
        </div>
      </section>
    </>
  );
}