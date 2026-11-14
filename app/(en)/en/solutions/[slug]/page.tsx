import Link from "next/link";
import { getContent } from "@/data/index";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  // Look up product by key, not full-path slug
  const product = enContent.products.find(
    (s: any) => s.key === params.slug
  );

  if (!product) {
    notFound();
  }

  return {
    title: product.title.join(" "),
    description: product.description,
    alternates: {
      languages: {
        tr: '/cozumler/' + (product.key === 'aluminium-profiles' ? 'aluminyum-profiller' : product.key === 'suspension-systems' ? 'kupeste-profilleri' : product.key === 'composite-panels' ? 'kompozit-paneller' : 'aksesuarlar'),
        en: `/en/solutions/${product.key}`,
      },
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  // Look up product by key, not full-path slug
  const product = enContent.products.find(
    (s: any) => s.key === params.slug
  );

  if (!product) {
    notFound();
  }

  // Subgroups filtered by parentKey matching product key
  const subGroups = enContent.productSubGroups.filter(
    (sg: any) => sg.parentKey === product.key
  );

  // Breadcrumb
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/en/solutions" },
    { label: product.title[0] },
  ];

  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS PORTFOLIO"
        title={product.title.join(" ")}
        lead={product.description}
        breadcrumbs={breadcrumbs}
      />
      <section className="section solutions" aria-label="Sub Groups">
        <div className="container">
          <div className="sub-groups">
            <div className="sub-grid">
              {subGroups.map((sg: any, i: number) => (
                <a
                  key={sg.key}
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
                    <small>Catalog PDF</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}