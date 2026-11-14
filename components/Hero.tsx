"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getContent } from "@/data/index";
import { HERO_AUTOPLAY_MS } from "@/data/content";

// Hero slider: slayt başına video + metin, otomatik geçiş + oklar + gösterge
export default function Hero({ locale }: { locale?: 'tr' | 'en' }) {
  const effectiveLocale = locale ?? 'tr';
  const content = getContent(effectiveLocale);
  const heroSlides = content.heroSlides;
  const count = heroSlides.length;

  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Slayt değişiminde zemin: blur'dan nete dönüş animasyonunu yeniden tetikle
  // (HeroVideo remount edilmez, sadece kapsayıcıda animasyon restart yapılır)
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.remove("is-switching");
    // Animasyonu yeniden başlatmak için reflow şart
    void el.offsetWidth;
    el.classList.add("is-switching");
  }, [active]);

  const goTo = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Otomatik geçiş: hover/odakta durur, hareket azaltmada kapalıdır
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!pausedRef.current && !document.hidden) {
        setActive((i) => (i + 1) % count);
      }
    }, HERO_AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [count]);

  const slide = heroSlides[active];

  // Locale-specific CTA text
  const ctaText = effectiveLocale === 'en' ? "OUR SOLUTIONS" : "ÇÖZÜMLERİMİZ";
  const ctaLinkText = effectiveLocale === 'en' ? "Discover" : "KEŞFET";
  const ctaHref = effectiveLocale === 'en' ? `/en/solutions` : "/cozumler";
  // Locale-specific scroll text
  const scrollAriaLabel = effectiveLocale === 'en' ? "Scroll down" : "Aşağı kaydır";

  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <div ref={bgRef} className="hero-media is-switching" aria-hidden="true">
        {heroSlides.map((s, i) => (
          <img key={s.index} src={s.image} alt={s.alt} className={i === active ? "is-active" : ""}
               loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        {/* Kademeli giriş: başlık → yazı → buton ayrı ayrı fadeInUp ile gelir */}
        <div className="hero-copy" key={slide.index}>
          <p className="eyebrow hero-anim" style={{ ["--d" as string]: "0.05s" }}>
            {slide.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-anim" style={{ ["--d" as string]: "0.18s" }}>
            {slide.title.map((line, i) => (
              <span key={line}>
                {line}
                {i < slide.title.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <span className="rule hero-anim" aria-hidden="true" style={{ ["--d" as string]: "0.34s" }} />
          <p className="lead hero-anim" style={{ ["--d" as string]: "0.46s" }}>{slide.lead}</p>
          <span className="hero-anim hero-cta" style={{ ["--d" as string]: "0.6s" }}>
            <Link className="btn btn-sm btn-primary" href={ctaHref}>
              {ctaText} <ArrowRight size={16} />
            </Link>
          </span>
        </div>
        <div className="hero-side hero-anim" style={{ ["--d" as string]: "0.7s" }}>
          <div
            className="slide-index"
            aria-label="Hero slides"
            role="tablist"
          >
            {heroSlides.map((s, i) =>
              i === active ? (
                <strong key={s.index} role="tab" aria-selected="true">
                  {s.index}
                </strong>
              ) : (
                <button
                  key={s.index}
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-label={`Slide ${s.index}`}
                  onClick={() => goTo(i)}
                >
                  {s.index}
                </button>
              )
            )}
          </div>
          <div className="hero-arrows">
            <button type="button" aria-label="Previous slide" onClick={prev}>
              <ChevronLeft size={18} />
            </button>
            <button type="button" aria-label="Next slide" onClick={next}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Otomatik geçiş ilerleme çizgisi + kaydır işareti */}
      <div className="hero-progress" aria-hidden="true">
        <span key={active} className="hero-progress__bar" style={{ ["--hero-ms" as string]: `${HERO_AUTOPLAY_MS}ms` }} />
      </div>
      <a className="hero-scroll" href={effectiveLocale === 'en' ? `/en/solutions` : `/cozumler`} aria-label={scrollAriaLabel}>
        <span className="hero-scroll__mouse"><span className="hero-scroll__wheel" /></span>
        <span className="hero-scroll__text">{ctaLinkText}</span>
      </a>
    </section>
  );
}