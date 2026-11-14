export const revalidate = 3600;

import { contentApi } from "@/lib/api/client";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const solution = await contentApi.getSolution(params.slug);
  if (!solution) {
    notFound();
  }

  const title = solution.title.join(" ");

  return {
    title: `${title} | Kavin System Solutions`,
    description:
      solution.description.length > 155
        ? solution.description.substring(0, 155) + "..."
        : solution.description,
  };
}

// Static params: ürün slug'lerini API'den al (ISR ile yenilenir)
// Static params: ürün slug'lerini API'den al (ISR ile yenilenir)
export const generateStaticParams = async () => {
  const solutions = await contentApi.getSolutions();
  return solutions.map((s: any) => ({ slug: s.slug }));
};

export default async function CozumlerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Çözümü API'den çek
  const solution = await contentApi.getSolution(params.slug);
  if (!solution) notFound();

  // Diğer ürünler (current hariç)
  const allSolutions = await contentApi.getSolutions();
  const otherProducts = allSolutions.filter(
    (p: any) => p.slug !== solution.slug
  ).slice(0, 4);

  // Başlık (PageHero, h2, breadcrumb için)
  const title = solution.title.join(" ");

  return (
    <>
      <PageHero
        eyebrow="ÇÖZÜM PORTFÖYÜ"
        title={title}
        lead={solution.description}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Çözümler", href: "/cozumler" },
          { label: title },
        ]}
      />
      <section className="section solutions" aria-label="Alt Gruplar">
        <div className="container">
          <div className="sub-groups">
            <div className="sub-grid">
              {solution.subGroups.map((sg: any, i: number) => (
                <a
                  key={sg.title}
                  href="#"
                  className="product-card reveal"
                  data-reveal="deal"
                  data-delay={i * 140}
                  aria-label={sg.title}
                >
                  <div className="card-image">
                    <img
                      src={sg.image}
                      alt={sg.alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{sg.title}</h3>
                    <small>Katalog PDF</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="other-solutions-title">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <h2 id="other-solutions-title">Diğer Çözüm Grupları</h2>
            </div>
          </div>
          <div className="product-grid">
            {otherProducts.map((p: any, i: number) => (
              <Link
                key={p.slug}
                href={`/cozumler/${p.slug}`}
                className="product-card reveal"
                data-reveal="deal"
                data-delay={i * 140}
                aria-label={p.alt}
              >
                <div className="card-image">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                  />
                  <span className="card-badge" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-up-right-icon h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="card-body">
                  <h3>
                    {p.title.map((line: any, i: number) => (
                      <span key={line}>
                        {line}
                        {i < p.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}