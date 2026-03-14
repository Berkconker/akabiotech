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
    name: "Sciex",
    initials: "SX",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/sciex.png",
    url: "https://sciex.com",
    tr: "Kapiler Elektroforez ürünleri Türkiye yetkili temsilcisi — biyofarma ve genetik analizlerde güvenilir çözümler",
    en: "Authorized representative for Capillary Electrophoresis products in Turkey — reliable solutions for biopharma and genetic analysis",
  },
  {
    name: "Sony Biotechnology",
    initials: "SB",
    logo: "https://akabiotech.com/wp-content/uploads/2020/04/ahah.png",
    url: "https://sonybiotechnology.com",
    tr: "Yeni nesil flow cytometry ve hücre ayırma çözümleri",
    en: "Next-generation flow cytometry and cell sorting solutions",
  },
  {
    name: "Berthold Technologies",
    initials: "BT",
    logo: "https://akabiotech.com/wp-content/uploads/2020/05/denemeler.jpg",
    url: "https://berthold.com",
    tr: "Mikroplak okuyucu ve in vivo görüntüleme sistemleri",
    en: "Microplate readers and in vivo imaging systems",
  },
  {
    name: "Revvity",
    initials: "RV",
    logo: "https://akabiotech.com/wp-content/uploads/2024/03/logo-revinity.png",
    url: "https://revvity.com",
    tr: "Otomatik hücre sayım ve imaj sitometri sistemleri",
    en: "Automated cell counting and image cytometry systems",
  },
  {
    name: "Liconic Instruments",
    initials: "LI",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/liconic.png",
    url: "https://liconic.com",
    tr: "Tam otomatik biyobanka ve depolama platformları",
    en: "Fully automated biobank and storage platforms",
  },
  {
    name: "Applied BioPhysics",
    initials: "AB",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/applied.png",
    url: "https://biophysics.com",
    tr: "Nobel ödüllü empedans temelli hücre algılama teknolojisi",
    en: "Nobel Prize-recognized impedance-based cell sensing technology",
  },
  {
    name: "Applied Photophysics",
    initials: "AP",
    logo: "https://akabiotech.com/wp-content/uploads/2020/05/app-son.jpg",
    url: "https://photophysics.com",
    tr: "Biyomoleküllerin biyofiziksel karakterizasyonu için sistemler",
    en: "Systems for biophysical characterization of biomolecules",
  },
  {
    name: "Bertin Instruments",
    initials: "BI",
    logo: "https://akabiotech.com/wp-content/uploads/2024/03/bertin-logo.png",
    url: "https://bertin-instruments.com",
    tr: "Biyolojik örnek homojenizasyon ve işleme sistemleri",
    en: "Biological sample homogenization and processing systems",
  },
  {
    name: "Diagenode",
    initials: "DG",
    logo: "https://akabiotech.com/wp-content/uploads/2020/03/diagen.png",
    url: "https://diagenode.com",
    tr: "Epigenetik araştırmalarda kapsamlı cihaz çözümleri",
    en: "Comprehensive instrument solutions for epigenetic research",
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

export default function CihazlarContent() {
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
                {lang === "tr" ? "Cihazlar" : "Instruments"}
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl text-white">
              {lang === "tr" ? "Cihazlar" : "Instruments"}
            </h1>
            <p className="font-sans text-lg text-white/65 max-w-2xl leading-relaxed">
              {lang === "tr"
                ? "Türkiye yetkili temsilcisi olduğumuz markalar"
                : "Brands for which we are the authorized representative in Turkey"}
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
