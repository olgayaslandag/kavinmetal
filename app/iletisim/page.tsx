import PageHero from "@/components/PageHero";
import { contactInfo } from "@/data/content";

export default function IletisimPage() {
  return (
    <>
      <PageHero eyebrow="BİZE ULAŞIN" title="İletişim" lead="Kavin Metal A.Ş. ile iletişime geçin, projelerinizle ilgili tüm sorularınızı yanıtlamak için buradan ulaşabilirsiniz." />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Merkezi Ofis</h2>
              <p className="text-muted mb-4">
                {contactInfo.headquarters}
              </p>
              <p className="text-muted mb-4">
                {contactInfo.factory}
              </p>
              <p className="text-muted">
                <strong>E-posta:</strong> {contactInfo.email}
              </p>
              <p className="text-muted">
                <strong>Telefon:</strong> {contactInfo.phone}
              </p>
              <div className="mt-6">
                <h3 className="font-bold mb-3">Sosyal Medya</h3>
                <div className="flex gap-3">
                  {Object.entries(contactInfo.socials).map(([key, url]) => {
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-2 px-3 py-1 border rounded hover:bg-blue-100"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3m1 4h6l1 4h4v11H7v4h4v11H7l1 4h15v-4h-3v-8z" />
                        </svg>
                        {key}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Proje Yaz Formu</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}