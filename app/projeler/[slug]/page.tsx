import { projects } from "@/data/content";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";

export default function ProjelerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre proje bul - href ile birebir eşleşme (hizmetler deseni ile aynı)
  const project = projects.find((p) => p.href === `/projeler/${slug}`);

  if (!project) {
    notFound();
  }

  // generateMetadata için description 155 karaktere kırpma
  const safeDescription =
    project.description.length > 155
      ? project.description.substring(0, 155) + "..."
      : project.description;

  return (
    <>
      <PageHero
        eyebrow="PROJE"
        title={project.title}
        lead={safeDescription}
      />
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Image
                src={project.image}
                alt={project.alt}
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <div>
              <p className="text-muted text-lg mb-6">
                {safeDescription}
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-navy mb-3">Proje Detayları</h3>
                <p className="text-muted">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
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
  const slug = params.slug;

  // Slug'a göre proje bul
  const project = projects.find((p) => p.href === `/projeler/${slug}`);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title} | Kavin Metal`,
    description:
      project.description.length > 155
        ? project.description.substring(0, 155) + "..."
        : project.description,
  };
}

// Static params for SSG - derived from project data (dynamic, new projects auto-captured)
export const generateStaticParams = async () => {
  const slugs = projects.map((p) => ({
    slug: p.href.split("/").pop()!,
  }));
  return slugs;
};