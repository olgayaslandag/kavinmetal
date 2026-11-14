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
  title: "Kavin System Solutions | Architectural solutions for your projects",
  description:
    "Kavin System Solutions provides aluminium profiles, joint system solutions, composite panels and accessories with surface treatment, mechanical processing and project services. A reliable solution partner.",
  alternates: {
    languages: {
      tr: '/',
      en: '/en',
    },
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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