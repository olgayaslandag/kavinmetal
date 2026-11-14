import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CarouselControls from "./CarouselControls";

// Projeler: carousel (kayar pencere + sayfa noktaları + oklar)
interface ProjectsProps {
  data: any[];
  locale?: "tr" | "en";
}

export default function Projects({ data, locale = "tr" }: ProjectsProps) {
  const effectiveLocale = locale ?? "tr";

  // TR: Örnek veri yapıları (gerçek veri content.tr.ts'de tutuluyor)
  // EN copy based on locale
  const eyebrowText = effectiveLocale === "en" ? "PROJECTS" : "ÖRNEK";
  const titleText = effectiveLocale === "en" ? "PROJELER" : "PROJELER";
  const sectionDesc = effectiveLocale === "en"
      ? "With our high stock capacity, fast supply power and durability, we deliver products and services to many qualified projects both domestically and internationally."
      : "Müşteri memnuniyetimiz ile yaşam alanlarına değer katacak sürdürülebilir, ulaşılabilir, kaliteli ve uzun ömürlü ürünleri sunma kabiliyetimiz ile yurt içi ve yurt dışındaki birçok nitelikli projeye ürün ve hizmet sunuyoruz.";
  const viewAllText = effectiveLocale === "en" ? "ALL PROJECTS" : "TÜM PROJELER";

  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-left">
            <p className="eyebrow">{eyebrowText}</p>
            <h2 id="projects-title">{titleText}</h2>
            <p className="section-desc">{sectionDesc}</p>
          </div>
          <a className="text-link" href={`/projeler`}>
            {viewAllText}<ArrowRight size={16} />
          </a>
        </div>
        <div className="project-wrap">
          <div
            className="project-viewport"
            role="region"
            aria-roledescription="carousel"
            aria-label={effectiveLocale === "en" ? "Projects" : "Projeler"}
            tabIndex={0}
          >
            <div className="project-grid">
              {data.map((project, i) => (
                <Link
                  key={project.title}
                  className="project-card reveal"
                  data-reveal="deal"
                  data-delay={(i % 4) * 140}
                  href={project.href}
                  aria-label={project.title}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="card-badge" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                  <strong>{project.title}</strong>
                </Link>
              ))}
            </div>
          </div>
          <CarouselControls
            targetSelector=".project-grid"
            label={effectiveLocale === "en" ? "Project navigation" : "Proje navigasyonu"}
            showDots
            itemCount={data.length}
          />
        </div>
      </div>
    </section>
  );
}