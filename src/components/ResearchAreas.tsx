"use client";

import { motion } from "framer-motion";
import { ArrowRight, Microscope, Atom, Dna, FolderKanban } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    badge: "Uzmanlık Alanlarımız",
    title: "Çalışma Alanları",
    sub: "Bilimsel araştırmanın temel disiplinlerinde uzman ekiplerimizle kapsamlı çözümler sunuyoruz.",
    link: "Detaylı Bilgi",
    areas: [
      {
        icon: Microscope,
        title: "Hücre Araştırmaları",
        desc: "Hücre kültürü, proliferasyon ve farklılaşma süreçleri üzerine ileri düzey araştırmalar yürütüyoruz. Modern laboratuvar altyapımızla in vitro çalışmaları destekliyoruz.",
        color: "#2d7a4f",
      },
      {
        icon: Atom,
        title: "Protein Araştırmaları",
        desc: "Rekombinant protein üretimi, saflaştırma ve karakterizasyon hizmetleri. Yapısal biyoloji ve proteomik analizlerle ilaç geliştirme süreçlerine katkı sağlıyoruz.",
        color: "#3d9a6a",
      },
      {
        icon: Dna,
        title: "Genetik Araştırmalar",
        desc: "Gen klonlama, ekspresyon analizi ve CRISPR tabanlı gen düzenleme teknolojileri. Genomik çalışmalar için kapsamlı teknik destek sunuyoruz.",
        color: "#1a3a2a",
      },
      {
        icon: FolderKanban,
        title: "Proje Çözümleri",
        desc: "Akademi ve sanayi iş birlikleri için özel Ar-Ge proje yönetimi. Fikir aşamasından ticarileşmeye kadar tüm süreçlerde güvenilir ortağınızız.",
        color: "#2d7a4f",
      },
    ],
  },
  en: {
    badge: "Our Expertise",
    title: "Research Areas",
    sub: "We provide comprehensive solutions across the core disciplines of scientific research with our expert teams.",
    link: "Learn More",
    areas: [
      {
        icon: Microscope,
        title: "Cell Research",
        desc: "Advanced studies on cell culture, proliferation, and differentiation. We support in vitro work with our modern laboratory infrastructure.",
        color: "#2d7a4f",
      },
      {
        icon: Atom,
        title: "Protein Research",
        desc: "Recombinant protein production, purification, and characterization services. Supporting drug development through structural biology and proteomic analyses.",
        color: "#3d9a6a",
      },
      {
        icon: Dna,
        title: "Genetic Research",
        desc: "Gene cloning, expression analysis, and CRISPR-based gene editing technologies. Comprehensive technical support for genomic studies.",
        color: "#1a3a2a",
      },
      {
        icon: FolderKanban,
        title: "Project Solutions",
        desc: "Custom R&D project management for academia-industry collaborations. Your reliable partner from ideation to commercialization.",
        color: "#2d7a4f",
      },
    ],
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ResearchAreas() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="research" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block font-sans text-sm font-semibold tracking-widest text-[#2d7a4f] uppercase mb-4"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            {t.badge}
          </motion.span>
          <motion.h2
            className="font-serif text-4xl sm:text-5xl text-[#1a3a2a] mb-5"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            className="font-sans text-lg text-[#1a3a2a]/60 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-[#e8e6e0] hover:border-[#2d7a4f]/30 hover:shadow-xl transition-all duration-300 flex flex-col gap-5 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${area.color}15` }}
                >
                  <Icon size={22} style={{ color: area.color }} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#1a3a2a] leading-tight">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#1a3a2a]/60 leading-relaxed flex-1">
                  {area.desc}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#2d7a4f] hover:gap-3 transition-all duration-200 group/link"
                >
                  {t.link}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
