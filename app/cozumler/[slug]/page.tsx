import Link from "next/link";
import Image from "next/image";
import { products, productSubGroups } from "@/data/content";
import CarouselControls from "@/components/CarouselControls";
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
    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">Ürün Bulunamadı</h1>
        <p className="text-muted">İstenilen ürün grubu mevcut değil.</p>
        <a href="/cozumler" className="btn btn-primary mt-4">Ürün Gruplarına Dön</a>
      </div>
    );
  }

  // Slug'a göre alt grupları bul
  const subGroups = productSubGroups.filter(
    (sg) => sg.parentHref === `/cozumler/${slug}`
  );

  return (
    <section
      className="section solutions"
      id="solutions"
      aria-labelledby="solutions-title"
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-left">
            <p className="eyebrow">ÇÖZÜMLER</p>
            <h2 id="solutions-title">
              {product.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="section-desc">
              {product.description}
            </p>
            <a className="text-link" href="/iletisim">
              TÜM ÇÖZÜMLER <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-right-icon h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="product-wrap">
          <div className="product-grid">
            {products.map((product, i) => (
              <Link
                key={product.alt}
                href={product.href}
                className="product-card reveal"
                data-reveal="deal"
                data-delay={i * 140}
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

          {/* Alt grup kartları */}
          {subGroups.length > 0 && (
            <div className="sub-groups reveal" data-reveal="deal" data-delay="200">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {product.parentTitle || product.title.map((t) => t)[0]} Alt Grupları
              </h3>
              <div className="sub-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subGroups.map((sg, i) => (
                  <div
                    key={sg.title}
                    className="sub-card group-border rounded overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={sg.image}
                      alt={sg.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 line-clamp-2">
                        {sg.title}
                      </h4>
                      <p className="text-sm text-muted line-clamp-2">
                        {sg.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <CarouselControls
            targetSelector=".product-grid"
            label="Çözüm navigasyonu"
            itemCount={products.length}
          />
        </div>
      </div>
    </section>
  );
}

// Static params for dynamic route - 4 solution slugs
export const generateStaticParams = async () => {
  const slugs = [
    "aluminyum-profiller",
    "kupeste-profilleri",
    "kompozit-paneller",
    "aksesuarlar",
  ];
  return slugs.map((slug) => ({ slug }));
};