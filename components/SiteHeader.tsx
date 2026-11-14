"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { getSwitchHref, isEnPath } from "@/lib/i18n/locale";
import { navLinks as trNavLinks } from "../data/content";
import { navLinks as enNavLinks } from "../data/content.en";

// Mobile nav open state: scroll'da .scrolled, mobilde açılır menü
export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Initialize scrolled state on mount
  useEffect(() => {
    setScrolled(window.scrollY > 300);
  }, [pathname]);

  // Determine if current page is EN locale based on pathname
  const isEn = isEnPath(pathname);

  // Links to hide from main navigation (content sections, not primary nav)
  const hiddenLabels = isEn ? ['News'] : ['Haberler'];

  // Filter nav links based on locale
  // EN'de: EN href'leri göster, yoksa TR href'leri (chrome EN kalması için)
  // TR'de: TR href'leri göster
  const currentNavLinks = isEn ? enNavLinks : trNavLinks;
  const filteredNavLinks = isEn
    ? currentNavLinks
        .filter((link) => link.href.startsWith('/en/'))
        : currentNavLinks;
  const finalNavLinks = filteredNavLinks.filter(
    (link) => !hiddenLabels.includes(link.label)
  );

  return (
    <header
      id="site-header"
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      <div className="container header-inner">
        <Link
          className="brand"
          href={isEn ? '/en' : '/'}
          aria-label={isEn ? 'Kavin System Solutions home page' : 'Kavin System Solutions ana sayfa'}
        >
          <Image
            className="brand-logo brand-logo-dark"
            src="/assets/img/logo_original.png"
            alt="Kavin System Solutions"
            width={180}
            height={48}
            priority
          />
          <Image
            className="brand-logo brand-logo-light"
            src="/assets/img/logo_white.png"
            alt="Kavin System Solutions"
            width={180}
            height={48}
            priority
          />
        </Link>

        <button
          className="menu-toggle d-lg-none"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="main-nav"
          aria-label={isEn ? "Main menu" : "Ana menü"}
          className={`main-nav${open ? " open" : ""}`}
        >
          {finalNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="lang-switch" role="group" aria-label="Language selection">
            <a
              className={`lang-switch__item${isEn ? "" : " active"}`}
              href={getSwitchHref(pathname, 'tr')}
              aria-current={isEn ? "true" : undefined}
              onClick={() => {
                // Switch to TR: navigate to TR equivalent
                window.location.href = getSwitchHref(pathname, 'tr');
              }}
            >
              TR
            </a>
            <Link
              className={`lang-switch__item${isEn ? " active" : ""}`}
              href={getSwitchHref(pathname, "en")}
              lang="en"
              onClick={() => {
                // Switch to EN: navigate to EN equivalent
                window.location.href = getSwitchHref(pathname, "en");
              }}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}