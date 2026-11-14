export const revalidate = 3600;

import { contentApi } from "@/lib/api/client";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await contentApi.getNewsDetail(params.slug);
  if (!article) {
    notFound();
  }

  return {
    title: `${article.title} | Kavin System Solutions`,
    description: article.excerpt,
  };
}

// Static params: tüm haber makalelerini generate eder (ISR ile yenilenir)
export const generateStaticParams = async () => {
  const articles = await contentApi.getNews();
  return articles.map((article) => ({ slug: article.slug }));
};

export default async function BasindaBizDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Makaleyi API'den çek
  const article = await contentApi.getNewsDetail(params.slug);
  if (!article) notFound();

  // Diğer haberler (current hariç)
  const allArticles = await contentApi.getNews();
  const otherArticles = allArticles
    .filter((a: any) => a.slug !== article.slug)
    .slice(0, 2);

  // Helper: conditional no-image class
  const cardClass = (a: any) =>
    `press-card reveal ${a.image ? "" : "press-card--noimage"}`;

  return (
    <>
      <PageHero
        eyebrow="HABER DETAYI"
        title={article.title}
        lead={article.excerpt}
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Haberler", href: "/haberler" },
          { label: article.title },
        ]}
      />
      <section className="section" aria-label={article.title}>
        <article className="press-article" id="press-article-title">
          <figure className="press-figure">
            {article.image ? (
              <img
                src={article.image}
                alt={article.imageAlt}
                loading="lazy"
              />
            ) : null}
          </figure>
          <div className="press-meta">
            <time>{article.dateLabel}</time>
            <span className="press-card__badge">
              {article.category}
            </span>
          </div>
          {article.blocks.map((block: any, i: number) => {
            if (block.kind === "question") {
              return (
                <h3 className="press-q" key={i}>
                  {block.text}
                </h3>
              );
            }
            return (
              <p className="press-body" key={i}>
                {block.text}
              </p>
            );
          })}
          {article.sourceUrl && (
            <aside className="press-source">
              Kaynak{" "}
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.sourceLabel || "TeknoTalk"}
              </a>
            </aside>
          )}
        </article>
      </section>

      {/* Section 2: Related news grid with container */}
      <section className="section" aria-labelledby="press-related-title">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">ARŞİVE DEVAM</p>
              <h2 id="press-related-title">Diğer Haberler</h2>
            </div>
          </div>
          <div className="press-grid press-grid--2" role="list">
            {otherArticles.map((other: any, i: number) => (
              <article
                key={other.slug}
                className={cardClass(other)}
                data-reveal="up"
                data-delay={i * 90}
              >
                <div className="press-card__image">
                  <img
                    src={other.image}
                    alt={other.imageAlt}
                    loading="lazy"
                  />
                  <span className="press-card__badge">
                    {other.category}
                  </span>
                </div>
                <div className="press-card__body">
                  <div className="press-card__meta">
                    <span>{other.dateLabel}</span>
                  </div>
                  <h3>
                    <Link href={`/haberler/${other.slug}`}>
                      {other.title}
                    </Link>
                  </h3>
                  <p className="press-card__excerpt">
                    {other.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: CTA with container */}
      <section className="section service-cta" aria-labelledby="press-cta-title">
        <div className="container">
          <p className="eyebrow">MEDYA İLİŞKİLERİ</p>
          <h2 id="press-cta-title">Bassa yer almak ister misiniz?</h2>
          <p className="section-desc">
            Projeleriniz ve kurumsal haberleriniz için basın ekibimizle iletişime geçin.
          </p>
          <a href="/iletisim" className="btn-primary">BİZE ULAŞIN</a>
        </div>
      </section>
    </>
  );
}