"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";


// Üst menü: scroll'da .scrolled, mobilde açılır menü
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`site-header${scrolled ? " scrolled" : ""}`}
    >
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="KAVIN ana sayfa">
          <Image
            className="brand-logo brand-logo-dark"
            src="/assets/img/logo_original.png"
            alt="KAVIN"
            width={180}
            height={48}
            priority
          />
           <Image
             className="brand-logo brand-logo-light"
             src="/assets/img/logo_white.png"
             alt="Kayra Metal"
             width={180}
             height={48}
             priority
           />
        </a>

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
          aria-label="Ana menü"
          className={`main-nav${open ? " open" : ""}`}
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <button className="language" aria-label="Dil seçimi" type="button">
            TR <ChevronDown size={14} />
          </button>
        </nav>
      </div>
    </header>
  );
}
