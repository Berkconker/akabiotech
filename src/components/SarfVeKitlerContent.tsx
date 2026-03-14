"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

interface Brand {
  name: string;
  initials: string;
  url: string;
  color: string;
  tr: string;
  en: string;
}

const brands: Brand[] = [
  {
    name: "Sony Biotechnology",
    initials: "SB",
    url: "https://sonybiotechnology.com",
    color: "#0a2444",
    tr: "Flow cytometry antikor ve kit panelleri ile hücre analiz çözümleri",
    en: "Flow cytometry antibody and kit panels for cell analysis solutions",
  },
  {
    name: "Omega Bio-Tek",
    initials: "OB",
    url: "https://omegabiotek.com",
    color: "#1a5fa5",
    tr: "Nükleik asit izolasyonunda eksiksiz kit paneli ve sarf malzemeleri",
    en: "Complete kit panels and consumables for nucleic acid isolation",
  },
  {
    name: "Agrisera",
    initials: "AG",
    url: "https://agrisera.com",
    color: "#2d7fc5",
    tr: "Bitki ve alg araştırmaları için mono ve poliklonal antikorlar",
    en: "Mono- and polyclonal antibodies for plant and algae research",
  },
  {
    name: "Biomers",
    initials: "BM",
    url: "https://biomers.net",
    color: "#0a2444",
    tr: "Oligonükleotid, DNA ve RNA sentez hizmetleri ve kitleri",
    en: "Oligonucleotide, DNA and RNA synthesis services and kits",
  },
  {
    name: "JPT",
    initials: "JP",
    url: "https://jpt.com",
    color: "#1a5fa5",
    tr: "İmmünoloji ve proteomiks araştırmaları için peptid havuzları",
    en: "Peptide pools for immunology and proteomics research",
  },
  {
    name: "Diagenode",
    initials: "DG",
    url: "https://diagenode.com",
    color: "#2d7fc5",
    tr: "Epigenetik araştırmalarda valide antibody ve kit çözümleri",
    en: "Validated antibody and kit solutions for epigenetic research",
  },
];

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
              <span>{lang === "tr" ? "Çözüm Ortakları" : "Solution Partners"}</span>
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
                ? "Flow cytometry'den epigenomiğe, nükleik asit izolasyonundan peptid sentezine kadar geniş bir yelpazede güvenilir sarf malzemeleri ve kit panelleri."
                : "From flow cytometry to epigenomics, from nucleic acid isolation to peptide synthesis — reliable consumables and kit panels across a wide range."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-16 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                className="group bg-white rounded-2xl border border-[#dce8f7] hover:border-[#1a5fa5]/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <div className="h-1 w-full" style={{ backgroundColor: brand.color }} />

                <div className="p-7 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-serif text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: brand.color }}
                    >
                      {brand.initials}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#0a2444] leading-tight">
                        {brand.name}
                      </h3>
                      <span className="font-sans text-xs text-[#1a5fa5]/70">
                        {brand.url.replace("https://", "")}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-[#0a2444]/65 leading-relaxed flex-1">
                    {lang === "tr" ? brand.tr : brand.en}
                  </p>

                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#1a5fa5] hover:text-[#0a2444] transition-colors group/link"
                  >
                    {lang === "tr" ? "Web Sitesi" : "Website"}
                    <ExternalLink
                      size={13}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
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
