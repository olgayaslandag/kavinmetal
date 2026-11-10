import { projects } from "@/data/content";
import PageHero from "@/components/PageHero";
import CarouselControls from "@/components/CarouselControls";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjelerPage() {
  return (
    <>
      <PageHero eyebrow="REFERANSLAR" title="Projeler" lead="Müşteri memnuniyeti konusundaki hassasiyetimiz ile yaşam alanlarına değer katacak sürdürülebilir, ulaşılabilir, kaliteli ve uzun ömürlü ürünleri sunma kabiliyetimiz ile yurt içi ve yurt dışındaki birçok nitelikli projeye ürün ve hizmet sunuyoruz." />
      <section className="section projects">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">ÖRNEK</p>
              <h2 id="projects-title">PROJELER</h2>
              <p className="section-desc">
                Müşteri memnuniyeti konusundaki hassasiyetimiz ile yaşam
                alanlarına değer katacak sürdürülebilir, ulaşılabilir, kaliteli
                ve uzun ömürlü ürünleri sunma kabiliyetimiz ile yurt içi ve yurt
                dışındaki birçok nitelikli projeye ürün ve hizmet sunuyoruz.
              </p>
            </div>
            <a className="text-link" href="/projeler">
              TÜM PROJELER <ArrowRight size={16} />
            </a>
          </div>
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