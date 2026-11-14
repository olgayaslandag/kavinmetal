export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="container">
        <div className="page-hero__inner">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="breadcrumb" className="breadcrumb">
              {breadcrumbs.map((item, i) => {
                if (i === breadcrumbs.length - 1) {
                  return (
                    <span aria-current="page" key={i}>
                      {item.label}
                    </span>
                  );
                }
                return (
                  <a href={item.href ?? "#"} key={i} className="breadcrumb__link">
                    {item.label}
                  </a>
                );
              })}
            </nav>
          )}
          {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
          <h1 id="page-hero-title" className="page-hero__title">{title}</h1>
          {lead ? <p className="page-hero__lead">{lead}</p> : null}
        </div>
      </div>
    </section>
  );
}