import PageHero from "@/components/PageHero";
import { getContent } from "@/data/index";
import Solutions from "@/components/Solutions";

export const revalidate = 3600;

export async function generateMetadata() {
  return {
    title: "Solutions | Kavin System Solutions",
    description:
      "Aluminium profiles, suspension systems, composite panels and accessories for architectural projects.",
    alternates: {
      languages: {
        tr: '/cozumler',
        en: '/en/solutions',
      },
    },
  };
}

export default async function SolutionsPage() {
  const enContent = await getContent('en');
  // Map EN products to Solution shape: use key as slug for link generation
  // EN product key: "aluminium-profiles" → link becomes /en/solutions/aluminium-profiles
  const enProducts = enContent.products.map((product: any) => ({
    key: product.key,
    slug: product.key,  // short form for link: /en/solutions/${key}
    title: product.title,
    image: product.image,
    icon: product.icon,
    alt: product.alt,
    description: product.description,
    pdf: product.pdf,
    subGroups: [],  // EN products have separate productSubGroups structure
  }));

  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS PORTFOLIO"
        title="Solutions"
        lead="Aluminium profiles, suspension systems, composite panels and accessories for architectural projects."
      />
      <section className="section solutions" aria-label="Solutions">
        <div className="container">
          <Solutions
            solutions={enProducts}
            baseHref="/en/solutions"
            showHeading={false}
            locale="en"
          />
        </div>
      </section>
    </>
  );
}