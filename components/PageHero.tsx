export default function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="container">
        <div className="page-hero__inner">
          {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
          <h1 id="page-hero-title" className="page-hero__title">{title}</h1>
          {lead ? <p className="page-hero__lead">{lead}</p> : null}
        </div>
      </div>
    </section>
  );
}