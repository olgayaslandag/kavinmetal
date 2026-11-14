import PageHero from "@/components/PageHero";
import { contactInfo } from "@/data/content";
import { MapPin, Phone, Facebook, Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

// MAP_EMBED_URL: koordinatlar ile statik embed URI'si
// goo.gl short link: https://maps.app.goo.gl/mfVgm2rMPvzogNaa9
// → Google Maps embed: 41.085855,28.6516306
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=41.085855,28.6516306&z=16&output=embed";

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="BİZE ULAŞIN"
        title="İletişim"
        lead="Kavin System Solutions ile iletişime geçin, projelerinizle ilgili tüm sorularınızı yanıtlamak için buradan ulaşabilirsiniz."
      />
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-block-title">İletişim Bilgileri</h2>

              {/* Adres satırı */}
              <p className="contact-line">
                <MapPin aria-hidden="true" /> {contactInfo.headquarters}
              </p>

              {/* E-posta */}
<p className="contact-line">
                  <Mail aria-hidden="true" className="contact-icon" />{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    style={{ color: "var(--navy)", textDecoration: "none" }}
                  >
                    {contactInfo.email}
                  </a>
                </p>

              {/* Telefon */}
              <p className="contact-line">
                <Phone aria-hidden="true" />{" "}
                <a
                  href={contactInfo.phoneHref}
                  style={{ color: "var(--navy)", textDecoration: "none" }}
                >
                  {contactInfo.phone}
                </a>
              </p>

              {/* Sosyal Medya */}
              <h3 className="contact-subtitle">Sosyal Medya</h3>
              <div className="socials">
                {Object.entries(contactInfo.socials).map(([key, url]) => {
                  const iconMap: Record<string, React.ComponentType> = {
                    facebook: Facebook,
                    instagram: Instagram,
                    linkedin: Linkedin,
                    whatsapp: MessageCircle,
                  };
                  const labelMap: Record<string, string> = {
                    facebook: "Facebook",
                    instagram: "Instagram",
                    linkedin: "Linkedin",
                    whatsapp: "WhatsApp",
                  };
                  const Icon = iconMap[key as keyof typeof iconMap];
                  const label = labelMap[key as keyof typeof labelMap];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="contact-form">
              <h2 className="contact-block-title">İletişim formu</h2>
              <form>
                <div className="field">
                  <label htmlFor="cf-name">Ad Soyad</label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    required
                  />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cf-email">E-posta</label>
                    <input
                      type="email"
                      id="cf-email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-phone">Telefon</label>
                    <input
                      type="tel"
                      id="cf-phone"
                      name="tel"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cf-message">Mesaj</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={3}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Lokasyon harita bölümü - tek harita */}
          <div style={{ marginTop: "2rem" }}>
            <div className="contact-maps">
              <figure>
                <iframe
                  title="Ofis Haritası"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}