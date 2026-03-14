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
    name: "Sciex",
    initials: "SX",
    url: "https://sciex.com",
    color: "#0a2444",
    tr: "Biyofarma ve genetik analizlerde kapiler elektroforez sistemleri",
    en: "Capillary electrophoresis systems for biopharma and genetic analysis",
  },
  {
    name: "Sony Biotechnology",
    initials: "SB",
    url: "https://sonybiotechnology.com",
    color: "#1a5fa5",
    tr: "Yeni nesil flow cytometry ve hücre ayırma çözümleri",
    en: "Next-generation flow cytometry and cell sorting solutions",
  },
  {
    name: "Berthold Technologies",
    initials: "BT",
    url: "https://berthold.com",
    color: "#2d7fc5",
    tr: "Mikroplak okuyucu ve in vivo görüntüleme sistemleri",
    en: "Microplate readers and in vivo imaging systems",
  },
  {
    name: "Revvity",
    initials: "RV",
    url: "https://revvity.com",
    color: "#0a2444",
    tr: "Otomatik hücre sayım ve imaj sitometri sistemleri",
    en: "Automated cell counting and image cytometry systems",
  },
  {
    name: "Liconic Instruments",
    initials: "LI",
    url: "https://liconic.com",
    color: "#1a5fa5",
    tr: "Tam otomatik biyobanka ve depolama platformları",
    en: "Fully automated biobank and storage platforms",
  },
  {
    name: "Applied BioPhysics",
    initials: "AB",
    url: "https://biophysics.com",
    color: "#2d7fc5",
    tr: "Nobel ödüllü empedans temelli hücre algılama teknolojisi",
    en: "Nobel Prize-recognized impedance-based cell sensing technology",
  },
  {
    name: "Applied Photophysics",
    initials: "AP",
    url: "https://photophysics.com",
    color: "#0a2444",
    tr: "Biyomoleküllerin biyofiziksel karakterizasyonu için sistemler",
    en: "Systems for biophysical characterization of biomolecules",
  },
  {
    name: "Bertin Instruments",
    initials: "BI",
    url: "https://bertin-instruments.com",
    color: "#1a5fa5",
    tr: "Biyolojik örnek homojenizasyon ve işleme sistemleri",
    en: "Biological sample homogenization and processing systems",
  },
  {
    name: "Diagenode",
    initials: "DG",
    url: "https://diagenode.com",
    color: "#2d7fc5",
    tr: "Epigenetik araştırmalarda kapsamlı cihaz çözümleri",
    en: "Comprehensive instrument solutions for epigenetic research",
  },
];

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
              <span>{lang === "tr" ? "Çözüm Ortakları" : "Solution Partners"}</span>
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
                ? "Alanında lider 9 uluslararası markayla kurduğumuz iş birlikleriyle en ileri analitik sistemleri araştırmacılarımıza sunuyoruz."
                : "Through partnerships with 9 world-leading international brands, we bring the most advanced analytical systems to researchers."}
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
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ backgroundColor: brand.color }} />

                <div className="p-7 flex flex-col gap-5">
                  {/* Logo + name row */}
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
                      <a
                        href={`https://${brand.url.replace("https://", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs text-[#1a5fa5]/70 hover:text-[#1a5fa5] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {brand.url.replace("https://", "")}
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#0a2444]/65 leading-relaxed flex-1">
                    {lang === "tr" ? brand.tr : brand.en}
                  </p>

                  {/* Website link */}
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
