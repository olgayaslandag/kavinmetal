"use client";

import { getContent } from "@/data/index";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function SiteFooter() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const effectiveLocale = isEn ? "en" : "tr";
  const content = getContent(effectiveLocale);

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  // Links to hide from main navigation (content sections, not primary nav)
  const hiddenLabels = isEn ? ['News'] : ['Haberler'];

  // Navigation links based on locale
  // For EN: show EN navLinks, but fallback to TR hrefs for sections without EN equivalents
  // For TR: show TR navLinks
  const footerNavLinks = isEn
    ? content.navLinks
        .filter((link) => link.href.startsWith("/en/"))
        : content.navLinks;
  const filteredFooterNavLinks = footerNavLinks.filter(
    (link) => !hiddenLabels.includes(link.label)
  );

  // Bottom quick links: KVKK, Privacy Policy, Terms of Use
  // Show locale-appropriate links
  const kvkklink = isEn ? (
    <Link href="/en/kvkk">KVKK</Link>
  ) : (
    <Link href="/kvkk">KVKK</Link>
  );
  const privacyLink = isEn ? (
    <Link href="/en/privacy">Privacy Policy</Link>
  ) : (
    <Link href="/gizlilik-politikasi">Privacy Policy</Link>
  );
  const termsLink = isEn ? (
    <Link href="/en/terms">Terms of Use</Link>
  ) : (
    <Link href="/kullanim-sartlari">Terms of Use</Link>
  );

  return (
    <footer id="contact" role="contentinfo">
      <div className="container footer-grid">
        <div className="reveal" data-reveal="up" data-delay="0">
          <h3>{isEn ? "About" : "Hakkımızda"}</h3>
          <Link href={isEn ? "/en/about" : "/hakkimizda"}>
            {isEn ? "About" : "Hakkımızda"}
          </Link>
          <Link href={isEn ? "/en/about" : "/hakkimizda"}>
            {isEn ? "Vision & Mission" : "Vizyon & Misyon"}
          </Link>
          <Link href={isEn ? "/en/about" : "/hakkimizda"}>
            {isEn ? "History" : "Tarihçe"}
          </Link>
        </div>
        <div className="reveal" data-reveal="up" data-delay="80">
          <h3>{isEn ? "PRODUCTS" : "ÜRÜNLER"}</h3>
          {content.products.map((product) => (
            <Link key={product.key} href={product.href}>
              {product.title[0]}
            </Link>
          ))}
        </div>
        <div className="reveal" data-reveal="up" data-delay="160">
          <h3>{isEn ? "SERVICES" : "HİZMETLER"}</h3>
          {content.services.map((service) => (
            <Link
              key={service.key}
              href={service.href}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="reveal" data-reveal="up" data-delay="240">
          <h3>{isEn ? "ADDRESSES" : "ADRESLERİMİZ"}</h3>
          <div className="footer-address">
            <span className="footer-address-text">{content.contactInfo.headquarters}</span>
          </div>
        </div>
        <div className="reveal" data-reveal="up" data-delay="320">
          <h3>{isEn ? "CONTACT" : "İLETİŞİM"}</h3>
          <p className="contact-line">
            <Mail aria-hidden="true" />{" "}
            <a
              href={`mailto:${content.contactInfo.email}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {content.contactInfo.email}
            </a>
          </p>
          <p className="contact-line">
            <Phone aria-hidden="true" />{" "}
            <a
              href={content.contactInfo.phoneHref}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {content.contactInfo.phone}
            </a>
          </p>
          <p className="contact-line">
            <MessageCircle aria-hidden="true" />{" "}
            <a
              href={content.contactInfo.whatsapp}
              target="_blank"
              rel="noopener"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              WhatsApp Line
            </a>
          </p>
          <div className="socials">
            <a
              href={content.contactInfo.socials.linkedin}
              target="_blank"
              rel="noopener"
              aria-label={isEn ? "LinkedIn" : "LinkedIn"}
            >
              <Linkedin />
            </a>
            <a
              href={content.contactInfo.socials.instagram}
              target="_blank"
              rel="noopener"
              aria-label={isEn ? "Instagram" : "Instagram"}
            >
              <Instagram />
            </a>
            <a
              href={content.contactInfo.socials.facebook}
              target="_blank"
              rel="noopener"
              aria-label={isEn ? "Facebook" : "Facebook"}
            >
              <Facebook />
            </a>
            <a href={`mailto:${content.contactInfo.email}`} aria-label={isEn ? "Email" : "E-posta"}>
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Kavin System Solutions All rights reserved.</span>
        <div>
          {kvkklink}
          {privacyLink}
          {termsLink}
        </div>
        <button
          className="back-top"
          aria-label={isEn ? "Back to top" : "Yukarı çık"}
          onClick={scrollTop}
          hidden={!showTop}
        >
          <ArrowUp />
        </button>
      </div>
    </footer>
  );
}