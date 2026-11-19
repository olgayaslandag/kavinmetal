import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CarouselControls from "./CarouselControls";
import type { Solution } from "@/lib/api/types";

// Solutions component: server-safe, props ile veri alır
// Solution verisi API'den gelir (Solution tipi)

// Note: title dizi olarak gelir, her biri bir satırdır
export default function Solutions({
  solutions,
  showHeading = true,
  baseHref = "/cozumler",
  locale = "tr",
}: {
  solutions: Solution[];
  showHeading?: boolean;
  baseHref?: string;
  locale?: "tr" | "en";
}) {
  const effectiveLocale = locale ?? "tr";

  // Effective text based on locale
  const eyebrowText = effectiveLocale === "en" ? "SOLUTIONS PORTFOLIO" : "ÇÖZÜM PORTFÖYÜ";
  const titleText = effectiveLocale === "en" ? "Fonksiyonel ve kaliteli çözümler" : "Fonksiyonel ve kaliteli çözümler";
  const descText = effectiveLocale === "en"
    ? "Kavin System Solutions as changing customer needs functional and quality products, we continue to be a reliable solution partner."
    : "Kavin System Solutions olarak değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli ürünler sunuyor, güvenilir çözüm ortağı olmaya devam ediyoruz.";

  return (
    <section
      className="section solutions"
      id="solutions"
      aria-labelledby={showHeading ? "solutions-title" : "solutions-label"}
    >
      <div className="container">
        {showHeading && (
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">{eyebrowText}</p>
              <h2 id="solutions-title">{titleText}</h2>
              <p className="section-desc">{descText}</p>
            </div>
          </div>
        )}
        <div className="product-wrap">
          <div className="product-grid">
            {solutions.map((product, i) => (
              <Link
                key={product.alt}
                className="product-card reveal"
                data-reveal="deal"
                data-delay={i * 140}
                href={`${baseHref}/${product.slug}`}
                aria-label={product.alt}
              >
                <div className="card-image">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="card-badge" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="card-body">
                  <h3>
                    {product.title.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < product.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <CarouselControls
            targetSelector=".product-grid"
            label={effectiveLocale === "en" ? "Solutions navigation" : "Çözüm navigasyonu"}
            itemCount={solutions.length}
          />
        </div>
      </div>
    </section>
  );
}