import PageHero from "@/components/PageHero";

export async function generateMetadata() {
  return {
    title: "KVKK Compliance | Kavin System Solutions",
    description:
      "Kavin System Solutions KVKK compliance page - personal data protection law compliance and required information.",
    alternates: {
      languages: {
        tr: "/kvkk",
        en: "/en/kvkk",
      },
    },
  };
}

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="DATA PROTECTION"
        title="KVKK Compliance"
      />
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p>
              Kavin System Solutions ("Company"), processes personal data in accordance with the 6698 Personal Data Protection Law (KVKK) and related regulations.
            </p>
            <p>
              The following notice explains how your personal data is collected, used and protected.
            </p>

            <h2>Personal Data Collection</h2>
            <p>
              The Company collects personal data through the following channels:
            </p>
            <ul>
              <li>Via contact forms</li>
              <li>E-mail correspondence</li>
              <li>Phone conversations</li>
              <li>Visit records</li>
            </ul>

            <h2>Data Usage</h2>
            <p>
              Collected personal data is processed for the following purposes:
            </p>
            <ul>
              <li>Providing inquiry and response services</li>
              <li>Managing customer relations</li>
              <li>Presenting product and service information</li>
              <li>Complying with legal requirements</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>
              Personal data may be shared with third parties pursuant to mandatory provisions or with customer consent:
            </p>
            <ul>
              <li>Legal obligations</li>
              <li>Customer consent</li>
              <li>Agreements with service providers</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              The Company takes necessary technical and administrative precautions against unauthorized access, revelation, alteration or deletion of personal data.
            </p>

            <h2>Rights</h2>
            <p>
              You have the following rights regarding your personal data:
            </p>
            <ul>
              <li>Request for inquiry and copying</li>
              <li>Request for correction</li>
              <li>Request for deletion</li>
              <li>Request for processing restriction</li>
              <li>Objection right against automated decisions</li>
            </ul>

            <p className="mt-6">
              For more information, please contact info@kavinmetal.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}