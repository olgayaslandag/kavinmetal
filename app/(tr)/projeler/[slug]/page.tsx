import { contentApi } from "@/lib/api/client";
import PageHero from "@/components/PageHero";
import CarouselControls from "@/components/CarouselControls";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export default async function ProjelerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre proje bul - href ile birebir eşleşme (hizmetler deseni ile aynı)
  const project = await contentApi.getProject(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await contentApi.getProjects();

  return (
    <>
      <PageHero
        eyebrow="PROJE"
        title={project.title}
        lead={project.description}
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Referanslar", href: "/projeler" },
          { label: project.title },
        ]}
      />
      <section className="section" aria-label={project.title}>
        <div className="container">
          <figure className="press-figure reveal" data-reveal="up">
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

<section className="section projects" aria-labelledby="related-projects-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">REFERANSLAR</p>
            <h2 id="related-projects-title">Diğer Projeler</h2>
          </div>
          <div className="project-wrap">
            <div
              className="project-viewport"
              role="region"
              aria-roledescription="carousel"
              aria-label="Diğer projeler"
              tabIndex={0}
            >
              <div className="project-grid">
                {allProjects
                  .filter((p) => p.href !== project.href)
                  .map((project, i) => (
                    <a
                      key={project.title}
                      href={project.href}
                      className="project-card reveal"
                      data-reveal="deal"
                      data-delay={(i % 4) * 140}
                      aria-label={project.title}
                    >
                      <div>
                        <img
                          src={project.image}
                          alt={project.alt}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="card-badge" aria-hidden="true">
                          <span />
                        </span>
                      </div>
                      <strong>{project.title}</strong>
                    </a>
                  ))}
              </div>
            </div>
            <CarouselControls
              targetSelector=".project-grid"
              label="Proje navigasyonu"
              showDots
              itemCount={allProjects.length - 1}
            />
          </div>
        </div>
      </section>

      <section className="section service-cta" aria-labelledby="project-cta-title">
        <div className="container">
          <p className="eyebrow">BİRLİKTE ÇALIŞALIM</p>
          <h2 id="project-cta-title">
            Projeniz için tek muhatap: Kavin System Solutions
          </h2>
          <p className="section-desc">
            Müşteri memnuniyetimizle yaşam alanlarına değer katacak sürdürülebilir,
            ulaşılabilir, kaliteli ve uzun ömürlü ürünleri sunma kabiliyetimiz ile
            yurt içi ve yurt dışındaki birçok nitelikli projeye ürün ve hizmet sunuyoruz.
          </p>
          <a
            href="/iletisim"
            className="btn-primary"
          >
            TEKLİF AL
          </a>
        </div>
      </section>
    </>
  );
}

// Generate SEO metadata for the project detail page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { getProject } = await import("@/lib/api/client");
  const slug = params.slug;

  // Slug'a göre proje bul
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title} | Kavin System Solutions`,
    description:
      project.description.length > 155
        ? project.description.substring(0, 155) + "..."
        : project.description,
  };
}

// Static params for SSG - derived from project data (dynamic, new projects auto-captured)
export const generateStaticParams = async () => {
  const { getProjects } = await import("@/lib/api/client");
  const projects = await getProjects();

  const slugs = projects.map((p) => ({
    slug: p.href.split("/").pop()!,
  }));
  return slugs;
};