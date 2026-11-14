import Hero from "@/components/Hero";
import CorporateIntro from "@/components/CorporateIntro";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import InstagramFeed from "@/components/InstagramFeed";
import ReferencesCarousel from "@/components/ReferencesCarousel";

// Ana sayfa: server component, tüm içerikleri API'den çekiyor
export const revalidate = 3600;

export default async function HomePage() {
  // Get data from API
  const { getSolutions, getServices, getProjects, getReferenceLogos } = await import('@/lib/api/client');
  
  const [solutions, services, projects, referenceLogos] = await Promise.all([
    getSolutions(),
    getServices(),
    getProjects(),
    getReferenceLogos(),
  ]);

  return (
    <div>
      <Hero />
      <CorporateIntro />
      <Solutions solutions={solutions} />
      <Services data={services} />
      <Projects data={projects} />
      <InstagramFeed />
      <ReferencesCarousel data={referenceLogos} />
    </div>
  );
}