import { services } from "@/data/content";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

export default function HizmetlerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre hizmet bul - href ile birebir eşleşme (cozumler deseni ile aynı)
  const service = services.find((s) => s.href === `/hizmetler/${slug}`);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="HİZMET"
        title={service.title}
        lead={service.description}
      />
      <section className="section">
        <div className="container">
          <div className="service-grid">
            <div>
              <Image
                src={service.image}
                alt={service.alt}
                width={800}
                height={600}
                loading="lazy"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <div>
              <p className="text-muted">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate SEO metadata for the service detail page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre hizmet bul
  const service = services.find((s) => s.href === `/hizmetler/${slug}`);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Kavin Metal`,
    description:
      service.description.length > 155
        ? service.description.substring(0, 155) + "..."
        : service.description,
  };
}

// Static params for static export - 4 service slugs
export const generateStaticParams = async () => {
  const slugs = [
    "yuzey-islemleri",
    "mekanik-islemler",
    "izomat",
    "proje-hizmetleri",
  ];
  return slugs.map((slug) => ({ slug }));
};