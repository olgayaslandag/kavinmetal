import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import RevealEffects from "@/components/RevealEffects";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Preloader from "@/components/Preloader";
import "../globals.css";

// Google font: orijinal HTML'deki Rubik + ağırlıklar birebir taşındı
const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavin System Solutions | Mimari çözümleriniz için",
  description:
    "Kavin System Solutions, alüminyum profiller, küpeşte sistemleri, kompozit paneller ve aksesuarlarla mimari çözümler sunar. Yüzey işlemleri, mekanik işlemler ve proje hizmetleriyle güvenilir çözüm ortağı.",
  alternates: {
    languages: {
      tr: '/',
      en: '/en',
    },
  },
};

export default async function TrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={rubik.className}>
        <SiteHeader />
        <main id="top">
          {children}
        </main>
        <SiteFooter />
        <RevealEffects />
      </body>
    </html>
  );
}