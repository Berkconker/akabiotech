"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    headline: "Bilimsel Keşfin",
    headlineAccent: "Güvenilir Ortağı",
    sub: "2006'dan bu yana hücre biyolojisi, protein araştırmaları ve genetik alanında öncü biyoteknoloji çözümleri sunuyoruz.",
    cta1: "Çalışma Alanlarımız",
    cta2: "Bize Ulaşın",
    stats: [
      { value: "18+", label: "Yıllık Deneyim" },
      { value: "40+", label: "Araştırma Ortağı" },
      { value: "500+", label: "Tamamlanan Proje" },
    ],
  },
  en: {
    headline: "Your Trusted Partner",
    headlineAccent: "in Scientific Discovery",
    sub: "Since 2006, we have been delivering pioneering biotechnology solutions in cell biology, protein research, and genetics.",
    cta1: "Our Research Areas",
    cta2: "Contact Us",
    stats: [
      { value: "18+", label: "Years of Experience" },
      { value: "40+", label: "Research Partners" },
      { value: "500+", label: "Completed Projects" },
    ],
  },
};

/* ── DNA SVG animation ── */
const DNAAnimation = () => {
  const numPairs = 22;
  const svgH = 520;
  const svgW = 180;
  const cx = svgW / 2;
  const amplitude = 62;

  const points = Array.from({ length: numPairs }, (_, i) => {
    const t = i / (numPairs - 1);
    const y = t * svgH;
    const angle = t * Math.PI * 5.5;
    return {
      x1: cx + amplitude * Math.sin(angle),
      x2: cx - amplitude * Math.sin(angle),
      y,
      depth: (Math.cos(angle) + 1) / 2,
    };
  });

  const strand1 = points
    .map((p, i) => (i === 0 ? `M ${p.x1} ${p.y}` : `L ${p.x1} ${p.y}`))
    .join(" ");
  const strand2 = points
    .map((p, i) => (i === 0 ? `M ${p.x2} ${p.y}` : `L ${p.x2} ${p.y}`))
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 30px rgba(26,95,165,0.25))" }}
    >
      <defs>
        <linearGradient id="strand-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d7fc5" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#1a5fa5" stopOpacity="1" />
          <stop offset="100%" stopColor="#0a2444" stopOpacity="0.7" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Backbone strands */}
      <motion.path
        d={strand1}
        fill="none"
        stroke="url(#strand-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d={strand2}
        fill="none"
        stroke="url(#strand-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Base pairs + nucleotide circles */}
      {points.map((p, i) => {
        const opacity = 0.35 + p.depth * 0.65;
        const r1 = 4.5 + p.depth * 2;
        const r2 = 4 + (1 - p.depth) * 2;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * i + 0.5, duration: 0.4 }}
          >
            <line
              x1={p.x1} y1={p.y} x2={p.x2} y2={p.y}
              stroke="#1a5fa5"
              strokeWidth="1.5"
              opacity={opacity * 0.6}
            />
            <motion.circle
              cx={p.x1} cy={p.y} r={r1}
              fill={p.depth > 0.5 ? "#1a5fa5" : "#2d7fc5"}
              filter="url(#glow)"
              animate={{ r: [r1, r1 + 1.5, r1], opacity: [opacity, 1, opacity] }}
              transition={{ duration: 3, delay: i * 0.12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx={p.x2} cy={p.y} r={r2}
              fill={p.depth > 0.5 ? "#0a2444" : "#1a5fa5"}
              filter="url(#glow)"
              animate={{ r: [r2, r2 + 1.5, r2], opacity: [opacity, 1, opacity] }}
              transition={{ duration: 3, delay: i * 0.12 + 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        );
      })}

      {/* Floating molecules */}
      {[
        { cx: 20, cy: 80, r: 6 },
        { cx: 160, cy: 150, r: 4 },
        { cx: 15, cy: 320, r: 5 },
        { cx: 165, cy: 400, r: 7 },
        { cx: 25, cy: 460, r: 4 },
      ].map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx} cy={dot.cy} r={dot.r}
          fill="#1a5fa5"
          opacity={0.2}
          animate={{ y: [-6, 6, -6], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4 + i, delay: i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
};

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a2444] overflow-hidden flex items-center"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue gradient blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a5fa5]/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a5fa5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#1a5fa5]/20 border border-[#1a5fa5]/40 rounded-full px-4 py-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FlaskConical size={14} className="text-[#7ab3e0]" />
              <span className="font-sans text-sm text-[#7ab3e0] font-medium tracking-wide">
                {lang === "tr" ? "Biyoteknoloji Ar-Ge Merkezi" : "Biotechnology R&D Center"}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t.headline}
              <br />
              <span className="text-[#7ab3e0]">{t.headlineAccent}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-sans text-lg text-white/70 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2 bg-[#1a5fa5] hover:bg-[#2d7fc5] text-white font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:gap-3 group"
              >
                {t.cta1}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                {t.cta2}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-serif text-3xl sm:text-4xl text-[#7ab3e0] font-bold">
                    {stat.value}
                  </span>
                  <span className="font-sans text-sm text-white/60">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — DNA Animation */}
          <motion.div
            className="hidden lg:flex items-center justify-center h-[520px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-[200px] h-full">
              <DNAAnimation />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
