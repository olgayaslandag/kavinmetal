import PageHero from "@/components/PageHero";

export async function generateMetadata() {
  return {
    title: "Privacy Policy | Kavin System Solutions",
    description:
      "Kavin System Solutions privacy policy - how we collect, use, and protect personal data in accordance with KVKK.",
    alternates: {
      languages: {
        tr: "/gizlilik-politikasi",
        en: "/en/privacy",
      },
    },
  };
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="CORPORATE"
        title="Privacy Policy"
      />
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p>
              Kavin System Solutions applies the following policy in the services it provides to its customers and visitors, regarding the protection of personal data.
            </p>

            <h2>General Information</h2>
            <p>
              This policy is applied regarding the protection of personal data in accordance with Article 10 of the KVKK.
            </p>

            <h2>Data Collected</h2>
            <p>
              The Company collects the following categories of data for service provision and communication purposes:
            </p>
            <ul>
              <li>Contact information (name, surname, email, phone)</li>
              <li>Application and registration information</li>
              <li>Technical data IP addresses, cookie information</li>
            </ul>

            <h2>Data Usage</h2>
            <p>
              Collected data is processed for the following purposes:
            </p>
            <ul>
              <li>Customer service and support</li>
              <li>Product and service presentation</li>
              <li>Legal and numerical records</li>
              <li>Statistical analyses</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>
              Personal data may be revealed to third parties in the following circumstances:
            </p>
            <ul>
              <li>Legal obligations</li>
              <li>Customer consented situations</li>
              <li>Service contract obligations</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              Personal data is stored for the required period and in accordance with the provisions stipulated by KVKK.
            </p>

            <h2>Children's Data</h2>
            <p>
              The Company does not knowingly collect or process personal data of known children under the age of 18 without valid consent from their authorized representative.
            </p>

            <h2>Updates</h2>
            <p>
              Our privacy policy may be periodically updated due to legal changes or changes in our business processes. Updates will be published on this page.
            </p>

            <p className="mt-6">
              For information about changes to the privacy policy, please contact us at info@kavinmetal.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}