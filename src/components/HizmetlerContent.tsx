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
    name: "Omega Bioservices",
    initials: "OB",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/omega.png",
    url: "https://omegabioservices.com",
    tr: "Yeni nesil DNA/RNA dizileme (NGS) ve biyoinformatik analiz hizmetleri",
    en: "Next-generation DNA/RNA sequencing (NGS) and bioinformatics analysis services",
  },
  {
    name: "Diagenode",
    initials: "DG",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/diagen.png",
    url: "https://diagenode.com",
    tr: "Epigenetik araştırmalarda valide ve güvenilir çözümler",
    en: "Validated and reliable solutions for epigenetic research",
  },
  {
    name: "Biomers",
    initials: "BM",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/biomer.png",
    url: "https://biomers.net",
    tr: "Özel oligonükleotid, DNA ve RNA sentez hizmetleri",
    en: "Custom oligonucleotide, DNA and RNA synthesis services",
  },
  {
    name: "JPT",
    initials: "JP",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/jpt.png",
    url: "https://jpt.com",
    tr: "İmmünoloji ve proteomiks araştırmaları için peptid havuzu sentezi",
    en: "Peptide pool synthesis for immunology and proteomics research",
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

export default function HizmetlerContent() {
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
                {lang === "tr" ? "Hizmetler" : "Services"}
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl text-white">
              {lang === "tr" ? "Hizmetler" : "Services"}
            </h1>
            <p className="font-sans text-lg text-white/65 max-w-2xl leading-relaxed">
              {lang === "tr"
                ? "NGS, sentez ve biyoinformatik hizmetleri"
                : "NGS, synthesis and bioinformatics services"}
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
                transition={{ duration: 0.45, delay: i * 0.07 }}
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
