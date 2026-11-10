import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { corporateTimeline, visionMission, aboutText } from "@/data/content";

// Basinda Biz sayfası - server component
export default function BasindaBizPage() {
  return (
    <>
      <PageHero eyebrow="BASINDA BİZ" title="Bandas Biz" lead="Kavin Metal'den en güncel haberler, fuar participationları ve projelerimizle ilgili gelişmeler." />
      <section
        className="section corporate-intro"
        id="basinda-biz"
        aria-labelledby="basinda-biz-title"
      >
        <div className="container corporate-intro__grid">
          <div
            className="corporate-intro__statement reveal"
            data-reveal="right"
          >
            <p className="eyebrow">BAŞINDA BIZ</p>
            <h2 id="basinda-biz-title">Güncel Haberler ve Güncellemeler</h2>
            <p className="section-desc">
              Kavin Metal'den en güncel haberler, fuar participationları ve projelerimizle ilgili gelişmeler.
            </p>
          </div>
          <div
            className="corporate-intro__visuals reveal"
            data-reveal="left"
          >
            <div className="timeline">
              {corporateTimeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`timeline-item${
                    i === corporateTimeline.length - 1 ? " timeline-item--last" : ""
                  }`}
                >
                  <span className="timeline-dot" />
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Static params for news detail pages
export const generateStaticParams = async () => {
  const slugs = ["pukab-baskani", "saha-expo-solar-carport"];
  return slugs.map((slug) => ({ slug }));
};