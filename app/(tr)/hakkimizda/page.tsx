"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  corporateFacts,
  corporateTimeline,
  visionMission,
  aboutText,
  corporateAccordion,
} from "@/data/content";
import PageHero from "@/components/PageHero";

// Hakkımızda sayfası - server component
export default function HakkimizdaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const factsRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <PageHero eyebrow="KURUMSAL" title="Hakkımızda" lead={aboutText[0]} />
      <section
        className="corporate-intro"
        id="corporate"
        aria-labelledby="corporate-title"
      >
        <div className="container corporate-intro__grid">
          <div
            className="corporate-intro__visuals reveal"
            data-reveal="left"
            aria-label="Kavin System Solutions üretim ve mimari uygulamaları"
          >
            <figure className="corporate-photo corporate-photo-main">
              <img
                src="/assets/img/services/toz-boya-2.jpg"
                alt="Kavin System Solutions elektrostatik toz boya tesisi"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="corporate-intro__statement reveal" data-reveal="right">
            <h2 id="corporate-title">Mimari çözümleriniz için</h2>
            <p className="section-desc">
              {aboutText.slice(1).join(" ")}
            </p>
            <p className="section-desc" style={{ marginTop: "1rem" }}>
              Yüksek hacimli stok, hızlı tedarik gücümüz ve{" "}
              {visionMission.vision.toLowerCase()}{" "}
              vizyonuyla yurt içi ve yurt dışında yüzlerce projede güvenilir
              çözüm ortağı olmaya devam ediyoruz.
            </p>
            <div className="corporate-intro__details">
              <div className="corporate-intro__content">
                <div className="corporate-intro__facts" ref={factsRef}>
                  {corporateFacts.map((fact) => (
                    <div key={fact.label}>
                      <strong>
                        <CountUp value={fact.value} start={true} />
                      </strong>
                      <span>{fact.label}</span>
                    </div>
                  ))}
                </div>
                <div className="corporate-accordion">
                  {corporateAccordion.map((item, i) => {
                    const open = openIndex === i;
                    return (
                      <div
                        key={item.title}
                        className={`corporate-accordion__item${
                          open ? " is-open" : ""
                        }`}
                      >
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={`corporate-panel-${i + 1}`}
                          onClick={() => setOpenIndex(open ? null : i)}
                        >
                          {item.title} <Plus size={14} />
                        </button>
                        <div
                          className="corporate-accordion__panel"
                          id={`corporate-panel-${i + 1}`}
                          aria-hidden={!open}
                        >
                          <div className="corporate-accordion__panel-inner">
                            {item.body}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Client-side CountUp component
function CountUp({ value, start }: { value: string; start: boolean }) {
  const [text, setText] = useState(value);

  useEffect(() => {
    if (!start) return;
    const parts = value.match(/^(\d+)(.*)$/);
    if (!parts) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const target = parseInt(parts[1], 10);
    const suffix = parts[2];
    const duration = 1500;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setText(`${Math.round(target * eased)}${suffix}`);
      if (p < 1) raf = window.requestAnimationFrame(step);
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [start, value]);

  return <strong>{text}</strong>;
}