"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Microscope, FlaskConical, Settings, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    badge: "Temsilciliklerimiz",
    title: "Ürün & Hizmet Portfolyomuz",
    sub: "Alanında lider uluslararası markalarla kurduğumuz iş birlikleriyle araştırmalarınıza eksiksiz destek sağlıyoruz.",
    cards: [
      {
        icon: Microscope,
        title: "Cihazlar",
        tag: "9 uluslararası marka",
        desc: "Alanında öncü global markalarla iş birliğiyle sunduğumuz ileri teknoloji analitik sistemler.",
        href: "/cozum-ortaklari/cihazlar",
        accent: "#1a5fa5",
      },
      {
        icon: FlaskConical,
        title: "Sarf ve Kitler",
        tag: "Flow cytometry'den epigenomiğe",
        desc: "Güvenilir ve valide kit panelleriyle araştırmanızın her aşamasını destekleyen sarf malzemeleri.",
        href: "/cozum-ortaklari/sarf-ve-kitler",
        accent: "#2d7fc5",
      },
      {
        icon: Settings,
        title: "Hizmetler",
        tag: "NGS, sentez ve biyoinformatik",
        desc: "Yeni nesil dizileme, oligonükleotid sentezi ve biyoinformatik analiz hizmetleriyle komple çözümler.",
        href: "/cozum-ortaklari/hizmetler",
        accent: "#0a2444",
      },
    ],
  },
  en: {
    badge: "Our Distributorships",
    title: "Product & Service Portfolio",
    sub: "Through partnerships with world-leading international brands, we provide comprehensive support for your research.",
    cards: [
      {
        icon: Microscope,
        title: "Instruments",
        tag: "9 international brands",
        desc: "Advanced analytical systems offered in collaboration with pioneering global brands in the field.",
        href: "/cozum-ortaklari/cihazlar",
        accent: "#1a5fa5",
      },
      {
        icon: FlaskConical,
        title: "Consumables & Kits",
        tag: "From flow cytometry to epigenomics",
        desc: "Reliable and validated kit panels and consumables supporting every stage of your research.",
        href: "/cozum-ortaklari/sarf-ve-kitler",
        accent: "#2d7fc5",
      },
      {
        icon: Settings,
        title: "Services",
        tag: "NGS, synthesis & bioinformatics",
        desc: "Complete solutions with next-generation sequencing, oligonucleotide synthesis, and bioinformatics analysis.",
        href: "/cozum-ortaklari/hizmetler",
        accent: "#0a2444",
      },
    ],
  },
};

export default function CozumOrtaklari() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            className="inline-block font-sans text-sm font-semibold tracking-widest text-[#1a5fa5] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.badge}
          </motion.span>
          <motion.h2
            className="font-serif text-4xl sm:text-5xl text-[#0a2444] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            className="font-sans text-lg text-[#0a2444]/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            {t.sub}
          </motion.p>
        </div>

        {/* 3 Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {t.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={card.href}
                  className="group flex flex-col gap-6 bg-[#f7f9fc] border border-[#dce8f7] rounded-2xl p-8 hover:border-[#1a5fa5]/40 hover:shadow-xl hover:bg-white transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${card.accent}15` }}
                  >
                    <Icon size={26} style={{ color: card.accent }} />
                  </div>

                  {/* Tag */}
                  <div
                    className="inline-flex items-center w-fit font-sans text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${card.accent}12`,
                      color: card.accent,
                    }}
                  >
                    {card.tag}
                  </div>

                  {/* Title + desc */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-serif text-2xl text-[#0a2444] group-hover:text-[#1a5fa5] transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-[#0a2444]/60 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 font-sans text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                    style={{ color: card.accent }}
                  >
                    {lang === "tr" ? "Keşfet" : "Explore"}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
