export const revalidate = 3600;

import { contentApi } from "@/lib/api/client";
import Solutions from "@/components/Solutions";
import PageHero from "@/components/PageHero";

export async function generateMetadata() {
  return {
    title: "Çözümler | Kavin System Solutions",
    description:
      "Değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli ürünler sunuyor, güvenilir çözüm ortağı olmaya devam ediyoruz.",
  };
}

export default async function CozumlerPage() {
  const solutions = await contentApi.getSolutions();

  return (
    <>
      <PageHero
        eyebrow="ÇÖZÜM PORTFÖYÜ"
        title="Çözümler"
        lead=
          "Kavin System Solutions olarak değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli ürünler sunuyor, güvenilir çözüm ortağı olmaya devam ediyoruz."
      />
      <Solutions solutions={solutions} showHeading={false} />
    </>
  );
}