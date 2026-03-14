"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Globe } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    breadcrumb: ["Ana Sayfa", "Ar-Ge"],
    title: "Ar-Ge",
    subtitle:
      "TÜBİTAK ve Avrupa Birliği destekli araştırma projeleriyle biyoteknoloji alanında bilimsel ilerlemeye katkı sağlıyoruz.",
    cards: [
      {
        icon: "flask",
        title: "TÜBİTAK Projeleri",
        body:
          "Türkiye Bilimsel ve Teknolojik Araştırma Kurumu destekli projelerle hücre biyolojisi, genomik ve biyoinformatik alanlarında ulusal ölçekte araştırma yürütüyoruz.",
        tags: ["1501", "1507", "TEYDEB"],
      },
      {
        icon: "globe",
        title: "AB Projeleri",
        body:
          "Horizon Europe ve diğer AB fonlama mekanizmaları kapsamında uluslararası konsorsiyumlarla birlikte yenilikçi biyoteknoloji çözümleri geliştiriyoruz.",
        tags: ["Horizon Europe", "H2020", "Eurostars"],
      },
    ],
    cta: "Proje İşbirliği İçin Bize Ulaşın",
  },
  en: {
    breadcrumb: ["Home", "R&D"],
    title: "R&D",
    subtitle:
      "We contribute to scientific progress in biotechnology through research projects supported by TÜBİTAK and the European Union.",
    cards: [
      {
        icon: "flask",
        title: "TÜBİTAK Projects",
        body:
          "Through projects supported by the Scientific and Technological Research Council of Turkey, we conduct national-scale research in cell biology, genomics, and bioinformatics.",
        tags: ["1501", "1507", "TEYDEB"],
      },
      {
        icon: "globe",
        title: "EU Projects",
        body:
          "Under Horizon Europe and other EU funding mechanisms, we develop innovative biotechnology solutions together with international consortia.",
        tags: ["Horizon Europe", "H2020", "Eurostars"],
      },
    ],
    cta: "Contact Us for Project Collaboration",
  },
};

export default function ArgeContent() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#0a2444] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 font-sans text-sm text-white/50">
              <a href="/" className="hover:text-white/80 transition-colors">
                {t.breadcrumb[0]}
              </a>
              <span>/</span>
              <span className="text-[#7ab3e0]">{t.breadcrumb[1]}</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl text-white">{t.title}</h1>
            <p className="font-sans text-lg text-white/65 max-w-2xl leading-relaxed">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.cards.map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-white rounded-2xl border border-[#dce8f7] hover:border-[#1a5fa5]/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="h-1 w-full bg-[#1a5fa5]" />
                <div className="p-7 flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1a5fa5]/10 flex items-center justify-center text-[#1a5fa5]">
                    {card.icon === "flask" ? <FlaskConical size={22} /> : <Globe size={22} />}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#0a2444] mb-2">{card.title}</h3>
                    <p className="font-sans text-sm text-[#0a2444]/65 leading-relaxed">{card.body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs font-medium bg-[#e8f1fb] text-[#1a5fa5] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-[#1a5fa5] hover:bg-[#0a2444] text-white font-sans font-medium px-8 py-3.5 rounded-full transition-colors duration-300 group"
            >
              {t.cta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
