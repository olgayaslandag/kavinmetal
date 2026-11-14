import PageHero from "@/components/PageHero";
import CarouselControls from "@/components/CarouselControls";
import { notFound } from "next/navigation";

export const revalidate = 3600;

// Static params: EN projects slug'leri content.en.ts'den türetilir
export const generateStaticParams = async () => {
  const { getContent } = await import('@/data/index');
  const enContent = getContent('en');
  const projects = enContent.projects;

  return projects.map((p: any) => ({
    slug: p.key,
  }));
};

export default async function ReferencesDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Key üzerinden proje bul - slug parametresi EN projenin key'i
  const { getContent } = await import('@/data/index');
  const enContent = getContent('en');
  const project = enContent.projects.find(
    (p: any) => p.key === params.slug
  );

  if (!project) {
    notFound();
  }

  const allProjects = enContent.projects;

  // Breadcrumb
  const breadcrumbs = [
    { label: "Home", href: "/en" },
    { label: "References", href: "/en/references" },
    { label: project.title },
  ];

  return (
    <>
      <PageHero
        eyebrow="PROJE"
        title={project.title}
        lead={project.description}
        breadcrumbs={breadcrumbs}
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
            <p className="eyebrow">REFERENCES</p>
            <h2 id="related-projects-title">Other Projects</h2>
          </div>
          <div className="project-wrap">
            <div
              className="project-viewport"
              role="region"
              aria-roledescription="carousel"
              aria-label="Other projects"
              tabIndex={0}
            >
              <div className="project-grid">
                {allProjects
                  .filter((p) => p.key !== project.key)
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
              label="Project navigation"
              showDots
              itemCount={allProjects.length - 1}
            />
          </div>
        </div>
      </section>

      <section className="section service-cta" aria-labelledby="project-cta-title">
        <div className="container">
          <p className="eyebrow">COLLABORATION</p>
          <h2 id="project-cta-title">
            Your project with Kavin System Solutions
          </h2>
          <p className="section-desc">
            Aluminium profiles, facade systems and installation solutions. Our expert team is ready to assist with your project.
          </p>
          <a href="/en/contact" className="btn-primary">
            CONTACT US
          </a>
        </div>
      </section>
    </>
  );
}

// Generate SEO metadata for the reference detail page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { getContent } = await import('@/data/index');
  const enContent = getContent('en');
  const project = enContent.projects.find(
    (p: any) => p.key === params.slug
  );

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