import PageHero from "@/components/PageHero";
import Link from "next/link";
import { getContent } from "@/data/index";
import Accordion from "@/components/Accordion";

// About page - server component with metadata
export const metadata = {
  title: "About | Kavin System Solutions",
  description:
    "Kavin System Solutions about page - learn about our corporate history, vision, mission, and experience in the aluminium sector.",
  alternates: {
    languages: {
      tr: "/hakkimizda",
      en: "/en/about",
    },
  },
};

export default async function AboutPage() {
  const enContent = await getContent('en');
  const corporateFacts = enContent.corporateFacts;
  const corporateTimeline = enContent.corporateTimeline;
  const visionMission = enContent.visionMission;
  const aboutText = enContent.aboutText;
  const corporateAccordion = enContent.corporateAccordion;

  return (
    <>
      <PageHero
        eyebrow="CORPORATE"
        title="About"
        lead={aboutText[0]}
      />
      <section
        className="corporate-intro"
        id="corporate"
        aria-labelledby="corporate-title"
      >
        <div className="container corporate-intro__grid">
          <div
            className="corporate-intro__visuals reveal"
            data-reveal="left"
            aria-label="Kavin System Solutions production and architectural applications"
          >
            <figure className="corporate-photo corporate-photo-main">
              <img
                src="/assets/img/services/toz-boya-2.jpg"
                alt="Kavin System Solutions electrostatic coating facility"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="corporate-intro__statement reveal" data-reveal="right">
            <h2 id="corporate-title">For architectural solutions</h2>
            <p className="section-desc">
              {aboutText.slice(1).join(" ")}
            </p>
            <p className="section-desc" style={{ marginTop: "1rem" }}>
              Our high stock capacity, fast supply power and
              {visionMission.vision.toLowerCase()}{" "}
              vision continue to be reliable solution partners for hundreds of
              projects both domestically and internationally.
            </p>
            <div className="corporate-intro__details">
              <div className="corporate-intro__content">
                <div className="corporate-intro__facts">
                  {corporateFacts.map((fact) => (
                    <div key={fact.label}>
                      <strong>{fact.value}</strong>
                      <span>{fact.label}</span>
                    </div>
                  ))}
                </div>
                <Accordion items={corporateAccordion} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}