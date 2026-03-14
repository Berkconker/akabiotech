"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const dropdownLinks = {
  tr: [
    { label: "Cihazlar", href: "/cozum-ortaklari/cihazlar" },
    { label: "Sarf ve Kitler", href: "/cozum-ortaklari/sarf-ve-kitler" },
    { label: "Hizmetler", href: "/cozum-ortaklari/hizmetler" },
  ],
  en: [
    { label: "Instruments", href: "/cozum-ortaklari/cihazlar" },
    { label: "Consumables & Kits", href: "/cozum-ortaklari/sarf-ve-kitler" },
    { label: "Services", href: "/cozum-ortaklari/hizmetler" },
  ],
};

const navLinks = {
  tr: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Çalışma Alanları", href: "/calisma-alanlari" },
    { label: "Ar-Ge", href: "/ar-ge" },
    // "Çözüm Ortakları" handled separately as dropdown
    { label: "İletişim", href: "/iletisim" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/hakkimizda" },
    { label: "Research Areas", href: "/calisma-alanlari" },
    { label: "R&D", href: "/ar-ge" },
    { label: "Contact", href: "/iletisim" },
  ],
};

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const links = navLinks[lang];
  const drops = dropdownLinks[lang];
  const dropLabel = lang === "tr" ? "Distribütörler" : "Distributors";

  const isDropActive = pathname.startsWith("/cozum-ortaklari");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#dce8f7]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#1a5fa5] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="5" r="2.5" fill="white" />
                  <circle cx="5" cy="14" r="2.5" fill="white" opacity="0.7" />
                  <circle cx="15" cy="14" r="2.5" fill="white" opacity="0.7" />
                  <line x1="10" y1="5" x2="5" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="10" y1="5" x2="15" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5" />
                  <line x1="5" y1="14" x2="15" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5" />
                </svg>
              </div>
              <div>
                <span className={`font-serif text-lg font-bold leading-tight block transition-colors ${scrolled ? "text-[#0a2444]" : "text-white"}`}>
                  AKA
                </span>
                <span className={`font-sans text-xs tracking-widest uppercase leading-tight block transition-colors ${scrolled ? "text-[#1a5fa5]" : "text-[#7ab3e0]"}`}>
                  Biyoteknoloji
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop links */}
          <motion.ul
            className="hidden lg:flex items-center gap-7"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Regular links before dropdown */}
            {links.slice(0, 4).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors hover:text-[#1a5fa5] relative group ${
                    scrolled ? "text-[#0a2444]" : "text-white/90"
                  } ${pathname === link.href ? "text-[#1a5fa5]" : ""}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a5fa5] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}

            {/* Çözüm Ortakları dropdown */}
            <li
              ref={dropRef}
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-[#1a5fa5] ${
                  scrolled ? "text-[#0a2444]" : "text-white/90"
                } ${isDropActive ? "text-[#1a5fa5]" : ""}`}
              >
                {dropLabel}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-xl border border-[#dce8f7] overflow-hidden"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {drops.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className={`block px-4 py-3 font-sans text-sm transition-colors hover:bg-[#e8f1fb] hover:text-[#1a5fa5] ${
                          pathname === d.href
                            ? "text-[#1a5fa5] bg-[#e8f1fb]"
                            : "text-[#0a2444]"
                        }`}
                        onClick={() => setDropOpen(false)}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* İletişim */}
            <li>
              <Link
                href="/iletisim"
                className={`font-sans text-sm font-medium transition-colors hover:text-[#1a5fa5] relative group ${
                  scrolled ? "text-[#0a2444]" : "text-white/90"
                } ${pathname === "/iletisim" ? "text-[#1a5fa5]" : ""}`}
              >
                {lang === "tr" ? "İletişim" : "Contact"}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a5fa5] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          </motion.ul>

          {/* Right controls */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={toggleLang}
              className={`hidden sm:flex items-center gap-1.5 font-sans text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
                scrolled
                  ? "border-[#0a2444]/20 text-[#0a2444] hover:bg-[#0a2444] hover:text-white"
                  : "border-white/40 text-white hover:bg-white/20"
              }`}
            >
              <span className={lang === "tr" ? "font-bold" : "opacity-50"}>TR</span>
              <span className="opacity-30">/</span>
              <span className={lang === "en" ? "font-bold" : "opacity-50"}>EN</span>
            </button>

            <Link
              href="/iletisim"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1a5fa5] text-white font-sans text-sm font-medium px-4 py-2 rounded-full hover:bg-[#0a2444] transition-colors duration-200"
            >
              {lang === "tr" ? "Bize Ulaşın" : "Contact Us"}
            </Link>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-[#0a2444] hover:bg-[#0a2444]/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[#dce8f7] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {links.slice(0, 4).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-base font-medium text-[#0a2444] hover:text-[#1a5fa5] transition-colors py-2.5 border-b border-[#f0f5ff] last:border-0"
                >
                  {link.label}
                </Link>
              ))}

              {/* Çözüm Ortakları mobile */}
              <div className="border-b border-[#f0f5ff]">
                <button
                  onClick={() => setMobileDropOpen((o) => !o)}
                  className="w-full flex items-center justify-between font-sans text-base font-medium text-[#0a2444] hover:text-[#1a5fa5] transition-colors py-2.5"
                >
                  {dropLabel}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileDropOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {drops.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          onClick={() => { setMenuOpen(false); setMobileDropOpen(false); }}
                          className="block pl-4 py-2 font-sans text-sm text-[#1a5fa5] hover:text-[#0a2444] transition-colors"
                        >
                          → {d.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* İletişim */}
              <Link
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-base font-medium text-[#0a2444] hover:text-[#1a5fa5] transition-colors py-2.5"
              >
                {lang === "tr" ? "İletişim" : "Contact"}
              </Link>

              <div className="flex items-center gap-3 pt-3 mt-1 border-t border-[#dce8f7]">
                <button
                  onClick={toggleLang}
                  className="font-sans text-sm font-medium text-[#1a5fa5] border border-[#1a5fa5] px-3 py-1.5 rounded-full"
                >
                  {lang === "tr" ? "EN" : "TR"}
                </button>
                <Link
                  href="/iletisim"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#1a5fa5] text-white font-sans text-sm font-medium px-4 py-2 rounded-full hover:bg-[#0a2444] transition-colors"
                >
                  {lang === "tr" ? "Bize Ulaşın" : "Contact Us"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
