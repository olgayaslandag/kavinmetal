import Hero from "@/components/Hero";
import CorporateIntro from "@/components/CorporateIntro";
import Services from "@/components/Services";
import InstagramFeed from "@/components/InstagramFeed";
import ReferencesCarousel from "@/components/ReferencesCarousel";
import { getContent } from "@/data/index";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";

// EN home: Hero(EN) + CorporateIntro(EN) + Solutions(EN) + Services(EN) + Projects(EN) + Instagram + References
export const revalidate = 3600;

export async function generateMetadata() {
  return {
    title: "Kavin System Solutions | Complete Project Solutions",
    description:
      "We offer complete project solutions including surface treatment, mechanical processing, Izomat services, and custom project management. Reliable partner for aluminium facade and system solutions.",
    alternates: {
      languages: {
        tr: '/',
        en: '/en',
      },
    },
  };
}

export default async function HomePage() {
  // Get EN content directly from content.en.ts via getContent
  const content = await import('@/data/index');
  const enContent = content.getContent('en');

  // Map EN products to Solution shape for Solutions component
  const solutionsData = enContent.products.map((product: any) => ({
    key: product.key,
    slug: product.key,
    title: product.title,
    image: product.image,
    icon: product.icon,
    alt: product.alt,
    description: product.description,
    pdf: product.pdf,
    subGroups: [],  // EN products have separate productSubGroups structure
  }));
  const projectsData = enContent.projects;
  const servicesData = enContent.services;
  const logosData = enContent.projects.map((p: any) => ({ src: p.image, alt: p.alt }));

  return (
    <div>
      <Hero locale="en" />
      <CorporateIntro locale="en" />
      <Solutions
        solutions={solutionsData}
        baseHref="/en/solutions"
        showHeading={false}
        locale="en"
      />
      <Services data={servicesData} locale="en" />
      <Projects data={projectsData} locale="en" />
      <InstagramFeed locale="en" />
      <ReferencesCarousel data={logosData} locale="en" />
    </div>
  );
}