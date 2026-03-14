"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const links = {
  tr: [
    { label: "Ana Sayfa", href: "#" },
    { label: "Kurumsal", href: "#about" },
    { label: "Çalışma Alanları", href: "#research" },
    { label: "Ar-Ge", href: "#research" },
    { label: "İletişim", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#" },
    { label: "Corporate", href: "#about" },
    { label: "Research Areas", href: "#research" },
    { label: "R&D", href: "#research" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = links[lang];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8e6e0]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-9 h-9 bg-[#2d7a4f] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="5" r="2.5" fill="white" />
                <circle cx="5" cy="14" r="2.5" fill="white" opacity="0.7" />
                <circle cx="15" cy="14" r="2.5" fill="white" opacity="0.7" />
                <line
                  x1="10"
                  y1="5"
                  x2="5"
                  y2="14"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <line
                  x1="10"
                  y1="5"
                  x2="15"
                  y2="14"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <line
                  x1="5"
                  y1="14"
                  x2="15"
                  y2="14"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </svg>
            </div>
            <div>
              <span
                className={`font-serif text-lg font-bold leading-tight block transition-colors ${
                  scrolled ? "text-[#1a3a2a]" : "text-white"
                }`}
              >
                AKA
              </span>
              <span
                className={`font-sans text-xs tracking-widest uppercase leading-tight block transition-colors ${
                  scrolled ? "text-[#2d7a4f]" : "text-[#7dd4a8]"
                }`}
              >
                Biyoteknoloji
              </span>
            </div>
          </motion.a>

          {/* Desktop links */}
          <motion.ul
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors hover:text-[#2d7a4f] relative group ${
                    scrolled ? "text-[#1a3a2a]" : "text-white/90"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2d7a4f] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              </li>
            ))}
          </motion.ul>

          {/* Right controls */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={`hidden sm:flex items-center gap-1.5 font-sans text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
                scrolled
                  ? "border-[#1a3a2a]/20 text-[#1a3a2a] hover:bg-[#1a3a2a] hover:text-white"
                  : "border-white/40 text-white hover:bg-white/20"
              }`}
            >
              <span className={lang === "tr" ? "font-bold" : "opacity-50"}>
                TR
              </span>
              <span className="opacity-30">/</span>
              <span className={lang === "en" ? "font-bold" : "opacity-50"}>
                EN
              </span>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#2d7a4f] text-white font-sans text-sm font-medium px-4 py-2 rounded-full hover:bg-[#1a3a2a] transition-colors duration-200"
            >
              {lang === "tr" ? "Bize Ulaşın" : "Contact Us"}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-[#1a3a2a] hover:bg-[#1a3a2a]/10"
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
            className="lg:hidden bg-white border-t border-[#e8e6e0] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-base font-medium text-[#1a3a2a] hover:text-[#2d7a4f] transition-colors py-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-[#e8e6e0]">
                <button
                  onClick={toggleLang}
                  className="font-sans text-sm font-medium text-[#2d7a4f] border border-[#2d7a4f] px-3 py-1.5 rounded-full"
                >
                  {lang === "tr" ? "EN" : "TR"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#2d7a4f] text-white font-sans text-sm font-medium px-4 py-2 rounded-full hover:bg-[#1a3a2a] transition-colors"
                >
                  {lang === "tr" ? "Bize Ulaşın" : "Contact Us"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
