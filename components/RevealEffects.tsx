"use client";

import { useRevealDocument, useSmoothAnchors } from "@/hooks/useSiteEffects";

// Sayfa arası geçişlerinde ve route'larda .reveal / .section-heading
// animasyonlarının globale scope (document.body) üzerinden çalışmasını sağlar.
// Root layout'taki MutationObserver subtree takibiyle dinamik içerik insertions'u
// de yakalar. Sadece observer efektini başlatır; render Output'u yok.
export default function RevealEffects() {
  useRevealDocument();
  useSmoothAnchors();
  return null;
}