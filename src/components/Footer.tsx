"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    tagline: "Bilimsel Keşfin Güvenilir Ortağı",
    columns: [
      {
        title: "Şirket",
        links: [
          { label: "Ana Sayfa", href: "#" },
          { label: "Hakkımızda", href: "#about" },
          { label: "Ekibimiz", href: "#about" },
          { label: "Kariyer", href: "#contact" },
        ],
      },
      {
        title: "Hizmetler",
        links: [
          { label: "Hücre Araştırmaları", href: "#research" },
          { label: "Protein Araştırmaları", href: "#research" },
          { label: "Genetik Araştırmalar", href: "#research" },
          { label: "Proje Çözümleri", href: "#research" },
        ],
      },
      {
        title: "İletişim",
        links: [
          { label: "+90 216 555 12 34", href: "tel:+902165551234" },
          { label: "info@akabiyoteknoloji.com", href: "mailto:info@akabiyoteknoloji.com" },
          { label: "Teknopark İstanbul", href: "#contact" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ],
      },
    ],
    copyright: "Tüm hakları saklıdır.",
  },
  en: {
    tagline: "Your Trusted Partner in Scientific Discovery",
    columns: [
      {
        title: "Company",
        links: [
          { label: "Home", href: "#" },
          { label: "About Us", href: "#about" },
          { label: "Our Team", href: "#about" },
          { label: "Careers", href: "#contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Cell Research", href: "#research" },
          { label: "Protein Research", href: "#research" },
          { label: "Genetic Research", href: "#research" },
          { label: "Project Solutions", href: "#research" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "+90 216 555 12 34", href: "tel:+902165551234" },
          { label: "info@akabiotechnology.com", href: "mailto:info@akabiotechnology.com" },
          { label: "Technopark Istanbul", href: "#contact" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ],
      },
    ],
    copyright: "All rights reserved.",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a2a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-[#2d7a4f] rounded-lg flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="5" r="2.5" fill="white" />
                  <circle cx="5" cy="14" r="2.5" fill="white" opacity="0.7" />
                  <circle cx="15" cy="14" r="2.5" fill="white" opacity="0.7" />
                  <line
                    x1="10" y1="5" x2="5" y2="14"
                    stroke="white" strokeWidth="1.5" opacity="0.5"
                  />
                  <line
                    x1="10" y1="5" x2="15" y2="14"
                    stroke="white" strokeWidth="1.5" opacity="0.5"
                  />
                  <line
                    x1="5" y1="14" x2="15" y2="14"
                    stroke="white" strokeWidth="1.5" opacity="0.5"
                  />
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white leading-tight block">
                  AKA
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-[#7dd4a8] leading-tight block">
                  Biyoteknoloji
                </span>
              </div>
            </a>

            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              {t.tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 hover:bg-[#2d7a4f] rounded-lg flex items-center justify-center transition-all duration-200 text-white/50 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:info@akabiyoteknoloji.com"
                className="w-9 h-9 bg-white/8 hover:bg-[#2d7a4f] rounded-lg flex items-center justify-center transition-all duration-200 text-white/50 hover:text-white"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="tel:+902165551234"
                className="w-9 h-9 bg-white/8 hover:bg-[#2d7a4f] rounded-lg flex items-center justify-center transition-all duration-200 text-white/50 hover:text-white"
                aria-label="Phone"
              >
                <Phone size={15} />
              </a>
            </div>
          </motion.div>

          {/* Link columns */}
          {t.columns.map((col, colIdx) => (
            <motion.div
              key={col.title}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + colIdx * 0.08 }}
            >
              <h4 className="font-sans text-xs font-semibold tracking-widest text-[#7dd4a8] uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1 group/link"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <span className="truncate">{link.label}</span>
                      {link.href.startsWith("http") && (
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/35">
            © {year} AKA Biyoteknoloji. {t.copyright}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="font-sans text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              {lang === "tr" ? "Gizlilik Politikası" : "Privacy Policy"}
            </a>
            <a
              href="#"
              className="font-sans text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              {lang === "tr" ? "Kullanım Koşulları" : "Terms of Use"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
