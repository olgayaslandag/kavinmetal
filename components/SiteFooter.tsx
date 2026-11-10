"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { contactInfo } from "@/data/content";

// Alt bilgi: kurumsal linkler + adres + iletişim + yukarı dön
export default function SiteFooter() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer id="contact" role="contentinfo">
      <div className="container footer-grid">
<div className="reveal" data-reveal="up" data-delay="0">
          <h3>KURUMSAL</h3>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/hakkimizda">Vizyon & Misyon</Link>
          <Link href="/hakkimizda">Tarihçemiz</Link>
          <Link href="/projeler">Referanslar</Link>
        </div>
        <div className="reveal" data-reveal="up" data-delay="80">
          <h3>ÜRÜNLER</h3>
          <Link href="/cozumler/aluminyum-profiller">Alüminum Profiller</Link>
          <Link href="/cozumler/aksesuarlar">Aksesuarlar</Link>
          <Link href="/cozumler/kompozit-paneller">Kompozit Paneller</Link>
          <Link href="/cozumler/kupeste-profilleri">Kupeste Profilleri</Link>
        </div>
        <div className="reveal" data-reveal="up" data-delay="160">
          <h3>HİZMETLER</h3>
          <Link href="/hizmetler/yuzey-islemleri">Yüzey İşlemleri</Link>
          <Link href="/hizmetler/mekanik-islemler">Mekanik İşlemler</Link>
          <Link href="/hizmetler/izomat">İzomat</Link>
          <Link href="/hizmetler/proje-hizmetleri">Proje Hizmetleri</Link>
        </div>
        <div className="reveal" data-reveal="up" data-delay="240">
          <h3>ADRESLERİMİZ</h3>
          <p className="contact-line">
            <span>
              <strong>Merkez:</strong> Yenibosna Merkez Mah. Kavak Sk. No:4-E,
              34197 Bahçelievler / İstanbul
            </span>
          </p>
          <p className="contact-line">
            <span>
              <strong>Fabrika:</strong> Sarıcaali Küme Evler No:311/1, 39750
              Lüleburgaz / Kırklareli
            </span>
          </p>
        </div>
        <div className="reveal" data-reveal="up" data-delay="320">
          <h3>İLETİŞİM</h3>
          <p className="contact-line">
            <Mail aria-hidden="true" />{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="contact-line">
            <Phone aria-hidden="true" />{" "}
            <a
              href={contactInfo.phoneHref}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {contactInfo.phone}
            </a>
          </p>
          <p className="contact-line">
            <MessageCircle aria-hidden="true" />{" "}
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              WhatsApp Hattı
            </a>
          </p>
          <div className="socials">
            <a
              href={contactInfo.socials.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href={contactInfo.socials.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={contactInfo.socials.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label="E-posta">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2023 Kavin Metal A.Ş. Tüm hakları saklıdır.</span>
        <div>
          <a href="/kvkk">KVKK</a>
          <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
          <a href="/kullanim-sartlari">Kullanım Şartları</a>
        </div>
        <button
          className="back-top"
          aria-label="Yukarı çık"
          onClick={scrollTop}
          hidden={!showTop}
        >
          <ArrowUp />
        </button>
      </div>
    </footer>
  );
}