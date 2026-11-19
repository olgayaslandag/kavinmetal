"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Instagram } from "lucide-react";
import { fallbackPosts, type InstaPost } from "@/lib/instagram";

const PROFILE_URL = "https://www.instagram.com/kavinmetal/";

// Tarih etiketi: geçersiz/boş tarihlerde satır gizlenir
function formatDate(iso: string, locale: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Instagram akışı: canlı API, yoksa yedek gönderiler
export default function InstagramFeed({ locale }: { locale?: 'tr' | 'en' }) {
  const effectiveLocale = locale ?? 'tr';
  const isEn = effectiveLocale === 'en';
  const [posts, setPosts] = useState<InstaPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/instagram")
      .then((res) => (res.ok ? res.json() : null))
      .then((json: { items?: InstaPost[] } | null) => {
        if (!cancelled && json?.items?.length) setPosts(json.items);
      })
      .catch(() => {
        // Hata durumunda yedek gönderiler ekranda kalır
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [effectiveLocale]);

return (
    <section
      className="section instagram"
      id="instagram"
      aria-labelledby="instagram-title"
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-left">
            <p className="eyebrow">{isEn ? "SOCIAL MEDIA" : "SOSYAL MEDIA"}</p>
            <h2 id="instagram-title">{isEn ? "Kavin System Solutions on Instagram" : "Instagram'da Kavin System Solutions"}</h2>
            <p className="section-desc">
              {isEn
                ? "Follow us for recent snapshots from production, projects, and factory life."
                : "Üretimden, projelerden ve fabrika hayatından güncel kareler için bizi takip edin."}
            </p>
          </div>
        </div>

        <a
          className="text-link"
          href={PROFILE_URL}
          target="_blank"
          rel="noopener"
        >
          @kavinmetal <ArrowRight size={16} />
        </a>
<div className="insta-grid" aria-live="polite">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="insta-card insta-skeleton"
                aria-hidden="true"
              />
            ))
          : posts.slice(0, 6).map((post, i) => (
              <a
                key={post.id}
                className="insta-card reveal"
                data-reveal="deal"
                style={{ ["--reveal-delay" as string]: `${(i % 12) * 140}ms` }}
                href={post.permalink}
                target="_blank"
                rel="noopener"
                aria-label={`${
                  isEn ? "Instagram post:" : "Instagram gönderisi:"}
                  ${post.caption?.slice(0, 80) || ""}`}
              >
                <div className="insta-image">
                  <img
                    src={post.image}
                    alt={post.caption.slice(0, 120) || (isEn ? "Kavin System Solutions Instagram post" : "Kavin System Solutions Instagram gönderisi")}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="insta-badge" aria-hidden="true">
                    <Instagram size={18} />
                  </span>
                </div>
                <div className="insta-body">
                  <p>{post.caption || (isEn ? "@kavinmetal" : "@kavinmetal")}</p>
                  {formatDate(post.timestamp, effectiveLocale) && (
                    <time dateTime={post.timestamp}>
                      {isEn ? formatDate(post.timestamp, "en-US") : formatDate(post.timestamp, effectiveLocale)}
                    </time>
                  )}
                </div>
              </a>
            ))}
      </div>
    </div>
    </section>
  );
}