import PageHero from "@/components/PageHero";

export async function generateMetadata() {
  return {
    title: "Terms of Use | Kavin System Solutions",
    description:
      "Kavin System Solutions terms of use - governing the use of this website in accordance with applicable laws and regulations.",
    alternates: {
      languages: {
        tr: "/kullanim-sartlari",
        en: "/en/terms",
      },
    },
  };
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="CORPORATE"
        title="Terms of Use"
      />
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p>
              Kavin System Solutions ("Company"), provides these Terms of Use to users ("User") of the web site in accordance with the Termination of Contract Law, in order to ensure that terms are applied through the use of the web site.
            </p>

            <h2>1. Definitions</h2>
            <p>
              As used in these terms: 1. Company: Kavin System Solutions 2. User: Natural or legal persons using the web site 3. Web Site: pages accessible under the kavinmetal.com domain.
            </p>

            <h2>2. Account Creation</h2>
            <p>
              Those who wish to create an account via the web site are required to provide accurate and complete information. The Company reserves the right to refrain from providing services if the provided information is incomplete or inaccurate.
            </p>

            <h2>3. Use of Service</h2>
            <p>
              The User is required to use the web site for lawful purposes in accordance with these terms. The User is solely responsible for the following actions:
            </p>
            <ul>
              <li>Modification, copying or distribution of the web site</li>
              <li>Attempts of unauthorized access</li>
              <li>Causing system damage</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on the web site, are the property of the Company and within the scope of idea, art, brand and patent protections. Users may not copy, modify or transfer content to third parties without permission.
            </p>

            <h2>5. Liability Limitations</h2>
            <p>
              The Company is not directly or indirectly liable for any damage or loss arising from the accuracy or incompleteness of information on the web site. The Company is not liable for the contents of third-party sites to which it provides links.
            </p>

            <h2>6. Amendments to Terms</h2>
            <p>
              The Company may amend these terms at any time. Amendments shall become effective upon publication. It is the responsibility of Users to comply with changes to the terms.
            </p>

            <p className="mt-6">
              For information about amendments to the terms, please contact us at info@kavinmetal.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}