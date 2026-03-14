"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

interface Brand {
  name: string;
  initials: string;
  logo: string;
  url: string;
  tr: string;
  en: string;
}

const brands: Brand[] = [
  {
    name: "Sony Biotechnology",
    initials: "SB",
    logo: "https://akabiotech.com/wp-content/uploads/2020/04/ahah.png",
    url: "https://www.sonybiotechnology.com/rmea/",
    tr: "Flow cytometry antikor ve kit panelleri ile hücre analiz çözümleri",
    en: "Flow cytometry antibody and kit panels for cell analysis solutions",
  },
  {
    name: "Omega Bio-Tek",
    initials: "OB",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/omega-bio.png",
    url: "https://www.omegabiotek.com",
    tr: "Nükleik asit izolasyonunda eksiksiz kit paneli ve sarf malzemeleri",
    en: "Complete kit panels and consumables for nucleic acid isolation",
  },
  {
    name: "Agrisera",
    initials: "AG",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/agrisera.png",
    url: "https://www.agrisera.com",
    tr: "Bitki ve alg çalışmaları için mono-poliklonal antikorlar",
    en: "Mono- and polyclonal antibodies for plant and algae research",
  },
  {
    name: "Biomers",
    initials: "BM",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/biomer.png",
    url: "https://www.biomers.net/",
    tr: "Oligonükleotid, DNA ve RNA sentez hizmetleri ve kitleri",
    en: "Oligonucleotide, DNA and RNA synthesis services and kits",
  },
  {
    name: "JPT",
    initials: "JP",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/jpt.png",
    url: "https://www.jpt.com/",
    tr: "İmmünoloji, proteomiks, enzim profillemesi için peptid havuzları",
    en: "Peptide pools for immunology, proteomics and enzyme profiling",
  },
  {
    name: "Diagenode",
    initials: "DG",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/diagen.png",
    url: "https://www.diagenode.com/en",
    tr: "Epigenetik araştırmalarda valide ve eşsiz çözümler",
    en: "Validated and unique solutions for epigenetic research",
  },
  {
    name: "Genet Bio",
    initials: "GB",
    logo: "https://akabiotech.com/wp-content/uploads/2020/04/geno.jpg",
    url: "http://www.genetbio.co.kr/en/index.html",
    tr: "DNA amplifikasyon ve revers transkripsiyon kitleri",
    en: "DNA amplification and reverse transcription kits",
  },
  {
    name: "ArcticZymes",
    initials: "AZ",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/arctic.png",
    url: "https://arcticzymes.com/",
    tr: "Soğuğa adapte ve sıcaklıkla inaktive olan enzimler",
    en: "Cold-adapted and heat-inactivatable enzymes",
  },
  {
    name: "Genovis",
    initials: "GV",
    logo: "https://akabiotech.com/wp-content/uploads/2024/03/genosis.png",
    url: "https://www.genovis.com/",
    tr: "Akıllı Enzimler ve biyofarma karakterizasyon kitleri",
    en: "SmartEnzymes and biopharma characterization kits",
  },
];

function BrandLogo({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-12 h-12 rounded-full bg-[#1a5fa5] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mx-auto">
        {brand.initials}
      </div>
    );
  }
  return (
    <img
      src={brand.logo}
      alt={brand.name}
      className="max-h-[80px] w-auto object-contain mx-auto"
      onError={() => setFailed(true)}
    />
  );
}

export default function SarfVeKitlerContent() {
  const { lang } = useLang();

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
                {lang === "tr" ? "Ana Sayfa" : "Home"}
              </a>
              <span>/</span>
              <span>{lang === "tr" ? "Temsilcilikler" : "Distributorships"}</span>
              <span>/</span>
              <span className="text-[#7ab3e0]">
                {lang === "tr" ? "Sarf ve Kitler" : "Consumables & Kits"}
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl text-white">
              {lang === "tr" ? "Sarf ve Kitler" : "Consumables & Kits"}
            </h1>
            <p className="font-sans text-lg text-white/65 max-w-2xl leading-relaxed">
              {lang === "tr"
                ? "900+ farklı kit ve sarf malzemesi"
                : "900+ different kits and consumables"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-16 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col min-h-[220px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26, 95, 165, 0.15)" }}
              >
                {/* Logo area */}
                <div className="h-[100px] bg-white border border-[#e2e8f0] rounded-xl p-4 flex items-center justify-center mb-4">
                  <BrandLogo brand={brand} />
                </div>

                {/* Name */}
                <h3 className="font-sans font-bold text-lg text-center text-[#0a2444]">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-center text-[#64748b] mt-2 flex-1 leading-relaxed">
                  {lang === "tr" ? brand.tr : brand.en}
                </p>

                {/* Website link */}
                <div className="mt-4 text-center">
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#1a5fa5] hover:text-[#0a2444] transition-colors"
                  >
                    {lang === "tr" ? "Web Sitesi" : "Website"}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
