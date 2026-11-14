import Link from "next/link";
import { getContent } from "@/data/index";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";

// Href bazlı haber detayı - key üzerinden arama yapılır
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  // slug parametresi URL segmentidir, article.key ile eşleştirilir
  const article = enContent.pressArticles.find(
    (s: any) => s.key === params.slug
  );

  if (!article) {
    notFound();
  }

  return {
    title: `${article.title} | Kavin System Solutions`,
    description: article.excerpt,
    alternates: {
      languages: {
        tr: '/haberler/' + article.key,
        en: `/en/news/${article.key}`,
      },
    },
  };
}

// Key üzerinden haber detayı render edilir
export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await import('@/data/index');
  const enContent = content.getContent('en');
  // slug parametresi URL segmentidir, article.key ile eşleştirilir
  const article = enContent.pressArticles.find(
    (s: any) => s.key === params.slug
  );

  if (!article) {
    notFound();
  }

  // Diğer haberler (current hariç)
  const allArticles = enContent.pressArticles.filter(
    (a: any) => a.key !== article.key
  ).slice(0, 2);

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
          { label: "Home", href: "/" },
          { label: "News", href: "/en/news" },
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
              Source{" "}
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
              <p className="eyebrow">ARCHIVE CONTINUES</p>
              <h2 id="press-related-title">Other News</h2>
            </div>
          </div>
          <div className="press-grid press-grid--2" role="list">
            {allArticles.map((other: any, i: number) => (
              <article
                key={other.key}
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
                    <Link href={`/en/news/${other.key}`}>
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
          <p className="eyebrow">MEDIA CONTACTS</p>
          <h2 id="press-cta-title">Get in touch with our press team</h2>
          <p className="section-desc">
            For media inquiries and press materials, please contact our press team.
          </p>
          <a href="/en/contact" className="btn-primary">CONTACT US</a>
        </div>
      </section>
    </>
  );
}