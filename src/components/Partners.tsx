"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    badge: "İş Birliklerimiz",
    title: "Güvenilir Ortaklarımız",
    sub: "Akademi ve sanayi dünyasının önde gelen kuruluşlarıyla güçlü iş birlikleri kuruyoruz.",
  },
  en: {
    badge: "Our Collaborations",
    title: "Our Trusted Partners",
    sub: "We build strong collaborations with leading organizations from academia and industry.",
  },
};

const partners = [
  { name: "TÜBITAK", type: "research" },
  { name: "İTÜ", type: "university" },
  { name: "Boğaziçi Üniversitesi", type: "university" },
  { name: "Hacettepe Üniversitesi", type: "university" },
  { name: "ODTÜ", type: "university" },
  { name: "Ege Üniversitesi", type: "university" },
  { name: "Thermo Fisher", type: "industry" },
  { name: "Merck Life Science", type: "industry" },
];

export default function Partners() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-20 bg-white border-y border-[#e8e6e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            className="inline-block font-sans text-sm font-semibold tracking-widest text-[#2d7a4f] uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.badge}
          </motion.span>
          <motion.h2
            className="font-serif text-4xl text-[#1a3a2a] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            className="font-sans text-base text-[#1a3a2a]/60 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Partner logos / names */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="group bg-[#f8f7f4] border border-[#e8e6e0] rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-[#2d7a4f]/40 hover:bg-[#2d7a4f]/5 transition-all duration-300 min-h-[90px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
            >
              {/* Abstract logo icon */}
              <div className="w-8 h-8 rounded-lg bg-[#1a3a2a]/8 flex items-center justify-center group-hover:bg-[#2d7a4f]/15 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="opacity-50 group-hover:opacity-80 transition-opacity"
                >
                  {partner.type === "university" ? (
                    <>
                      <rect x="2" y="10" width="12" height="4" rx="1" fill="#1a3a2a" />
                      <polygon points="8,1 14,6 2,6" fill="#2d7a4f" />
                      <rect x="6" y="6" width="4" height="4" fill="#1a3a2a" opacity="0.6" />
                    </>
                  ) : partner.type === "research" ? (
                    <>
                      <circle cx="8" cy="8" r="5" fill="none" stroke="#2d7a4f" strokeWidth="2" />
                      <circle cx="8" cy="8" r="2" fill="#1a3a2a" />
                      <line x1="8" y1="1" x2="8" y2="3" stroke="#2d7a4f" strokeWidth="1.5" />
                      <line x1="8" y1="13" x2="8" y2="15" stroke="#2d7a4f" strokeWidth="1.5" />
                      <line x1="1" y1="8" x2="3" y2="8" stroke="#2d7a4f" strokeWidth="1.5" />
                      <line x1="13" y1="8" x2="15" y2="8" stroke="#2d7a4f" strokeWidth="1.5" />
                    </>
                  ) : (
                    <>
                      <rect x="1" y="4" width="14" height="8" rx="2" fill="none" stroke="#2d7a4f" strokeWidth="1.5" />
                      <line x1="5" y1="4" x2="5" y2="12" stroke="#1a3a2a" strokeWidth="1" opacity="0.5" />
                      <line x1="11" y1="4" x2="11" y2="12" stroke="#1a3a2a" strokeWidth="1" opacity="0.5" />
                    </>
                  )}
                </svg>
              </div>
              <span className="font-sans text-sm font-semibold text-[#1a3a2a]/70 group-hover:text-[#1a3a2a] transition-colors text-center leading-tight">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
