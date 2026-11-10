import Link from "next/link";
import { products, productSubGroups } from "@/data/content";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";

// Dynamic product page: [slug] sayfası - server component
export default function CozumlerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Slug'a göre ürün grubunu bul
  const product = products.find(
    (p) => p.href === `/cozumler/${slug}`
  );

  if (!product) {
    notFound();
  }

  // Slug'a göre title (PageHero, h2, breadcrumb için)
  const title = product.title.join(" ");

  // Slug'a göre alt grupları bul
  const subGroups = productSubGroups.filter(
    (sg) => sg.parentHref === `/cozumler/${slug}`
  );

  // Diğer ürünler (mevcut hariç)
  const otherProducts = products.filter(
    (p) => p.href !== `/cozumler/${slug}`
  );

  return (
    <>
      <PageHero
        eyebrow="ÇÖZÜM PORTFÖYÜ"
        title={title}
        lead={product.description}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Çözümler", href: "/cozumler" },
          { label: title },
        ]}
      />
      <section className="section solutions" aria-labelledby="subgroups-title">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <p className="eyebrow">ALT GRUPLAR</p>
              <h2 id="subgroups-title">
                {title} Alt Grupları
              </h2>
            </div>
          </div>
          <div className="sub-groups">
            <div className="sub-grid">
              {subGroups.map((sg, i) => (
                <a
                  key={sg.title}
                  href={`/assets/pdf/${sg.pdf}`}
                  target="_blank"
                  rel="noopener"
                  className="product-card reveal"
                  data-reveal="deal"
                  data-delay={i * 140}
                  aria-label={sg.title}
                >
                  <div className="card-image">
                    <img
                      src={sg.image}
                      alt={sg.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{sg.title}</h3>
                    <small>Katalog PDF</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="other-solutions-title">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading-left">
              <h2 id="other-solutions-title">Diğer Çözüm Grupları</h2>
            </div>
          </div>
          <div className="product-grid">
            {otherProducts.map((p, i) => (
              <Link
                key={p.alt}
                href={p.href}
                className="product-card reveal"
                data-reveal="deal"
                data-delay={i * 140}
                aria-label={p.alt}
              >
                <div className="card-image">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="card-badge" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-up-right-icon h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="card-body">
                  <h3>
                    {p.title.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < p.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Generate SEO metadata for the detail page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // Slug'a göre ürün grubunu bul
  const product = products.find(
    (p) => p.href === `/cozumler/${params.slug}`
  );

  if (!product) {
    notFound();
  }

  const title = product.title.join(" ");

  return {
    title: `${title} | Kavin Metal`,
    description:
      product.description.length > 155
        ? product.description.substring(0, 155) + "..."
        : product.description,
  };
}

// Static params for static export - slugs from products
export const generateStaticParams = async () => {
  const slugs = products.map((p) => p.href.split("/").pop());
  return slugs.map((slug) => ({ slug }));
};