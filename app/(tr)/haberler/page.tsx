export const revalidate = 3600;

import { contentApi } from "@/lib/api/client";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Haberler ve Duyurular | Kavin System Solutions",
    description:
      "Kavin System Solutions'in güncel haberleri, duyuruları, sektör Röportajları ve etkinlik gelişmeleri.",
  };
}

export default async function HaberlerPage() {
  const articles = await contentApi.getNews();

  return (
    <>
      <PageHero
        eyebrow="BASIN • DUYURU • ETKİNLİK"
        title="Haberler"
        lead="Kavin System Solutions'in güncel haberleri, duyuruları, sektör Röportajları ve etkinlik gelişmeleri."
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Haberler" },
        ]}
      />
      <section className="section" aria-label="Haberler">
        <div className="container">
          <div className="press-grid" role="list">
            {articles.map((article: any, i: number) => (
              <article
                key={article.slug}
                className="press-card reveal"
                data-reveal="up"
                data-delay={i * 90}
              >
                <div className="press-card__image">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                  />
                  <span className="press-card__badge">
                    {article.category}
                  </span>
                </div>
                <div className="press-card__body">
                  <div className="press-card__meta">
                    <span>{article.dateLabel}</span>
                  </div>
                  <h3>
                    <Link href={`/haberler/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="press-card__excerpt">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}