import PageHero from "@/components/PageHero";
import CarouselControls from "@/components/CarouselControls";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 3600;

export default async function ReferencesPage() {
  const enContent = await import('@/data/index');
  const projects = enContent.getContent('en').projects;

  return (
    <>
      <PageHero
        eyebrow="REFERENCES"
        title="References"
        lead="Selected project references featuring aluminium facade systems."
      />
      <section className="section projects">
        <div className="container">
          <div className="project-wrap">
            <div
              className="project-viewport"
              role="region"
              aria-roledescription="carousel"
              aria-label="Project navigation"
              tabIndex={0}
            >
              <div className="project-grid">
                {projects.map((project: any, i: number) => (
                  <a
                    key={project.key}
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
            label="Project navigation"
            showDots
            itemCount={projects.length}
          />
        </div>
      </section>
    </>
  );
}