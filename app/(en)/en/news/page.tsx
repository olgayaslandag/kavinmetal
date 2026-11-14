import Link from "next/link";
import { getContent } from "@/data/index";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateMetadata() {
  return {
    title: "News & Announcements | Kavin System Solutions",
    description:
      "Kavin System Solutions press releases, industry announcements and event updates.",
    alternates: {
      languages: {
        tr: '/haberler',
        en: '/en/news',
      },
    },
  };
}

export default async function NewsPage() {
  const enContent = await getContent('en');
  const articles = enContent.pressArticles;

  return (
    <>
      <PageHero
        eyebrow="NEWS • ANNOUNCEMENT • EVENT"
        title="News"
        lead="Kavin System Solutions press releases, industry announcements and event updates."
      />
      <section className="section" aria-label="News">
        <div className="container">
          <div className="press-grid" role="list">
            {articles.map((article: any, i: number) => (
              <article
                key={article.key}
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
                    <Link href={`/en/news/${article.key}`}>
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
        {/* Breadcrumb added */}
        <div className="breadcrumb" dangerouslySetInnerHTML={{ __html: 'Home > News' }} />
      </section>
    </>
  );
}