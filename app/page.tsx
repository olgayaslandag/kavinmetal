"use client";

import Hero from "@/components/Hero";
import CorporateIntro from "@/components/CorporateIntro";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import InstagramFeed from "@/components/InstagramFeed";
import ReferencesCarousel from "@/components/ReferencesCarousel";

// Ana sayfa: orijinal index.html bölüm sırasının birebir karşılığı
export default function HomePage() {
  return (
    <div>
      <Hero />
      <CorporateIntro />
      <Solutions />
      <Services />
      <Projects />
      <InstagramFeed />
      <ReferencesCarousel />
    </div>
  );
}