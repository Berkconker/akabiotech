"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Award } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    badge: "Hakkımızda",
    title: "2006'dan Bu Yana\nBilime Adanmış",
    story: [
      "AKA Biyoteknoloji, 2006 yılında Türkiye'deki biyoteknoloji sektörüne özgün bir bakış açısı getirme misyonuyla kuruldu. Kurucu ekibimizin akademik birikimi ve sektörel deneyimini bir araya getirerek, araştırmacıların ihtiyaç duyduğu güvenilir çözüm ortağını oluşturduk.",
      "Bugün, 40'tan fazla araştırma kurumu ve sanayi kuruluşuyla iş birliği yapıyor; 500'ü aşkın projeyi başarıyla tamamlamış bir ekiple bilimsel ilerlemenin itici gücü olmayı sürdürüyoruz.",
    ],
    pillars: [
      {
        icon: Eye,
        title: "Vizyon",
        desc: "Biyoteknoloji alanında Türkiye'nin öncü araştırma ve geliştirme merkezi olmak.",
      },
      {
        icon: Target,
        title: "Misyon",
        desc: "Bilimsel araştırmaları hızlandıran, güvenilir ve yenilikçi biyoteknoloji çözümleri sunmak.",
      },
      {
        icon: Heart,
        title: "Değerler",
        desc: "Bilimsel dürüstlük, sürekli öğrenme, iş birliği ve çevresel sorumluluk.",
      },
      {
        icon: Award,
        title: "Deneyim",
        desc: "18 yılı aşkın Ar-Ge deneyimi ve 500+ tamamlanan proje ile kanıtlanmış uzmanlık.",
      },
    ],
  },
  en: {
    badge: "About Us",
    title: "Dedicated to Science\nSince 2006",
    story: [
      "AKA Biotechnology was founded in 2006 with the mission to bring a unique perspective to Turkey's biotechnology sector. Combining our founding team's academic knowledge and industry experience, we built the reliable solution partner that researchers need.",
      "Today, collaborating with over 40 research institutions and industrial organizations, we continue to be a driving force in scientific progress with a team that has successfully completed more than 500 projects.",
    ],
    pillars: [
      {
        icon: Eye,
        title: "Vision",
        desc: "To become Turkey's leading research and development center in the field of biotechnology.",
      },
      {
        icon: Target,
        title: "Mission",
        desc: "To provide reliable and innovative biotechnology solutions that accelerate scientific research.",
      },
      {
        icon: Heart,
        title: "Values",
        desc: "Scientific integrity, continuous learning, collaboration, and environmental responsibility.",
      },
      {
        icon: Award,
        title: "Experience",
        desc: "Proven expertise with over 18 years of R&D experience and 500+ completed projects.",
      },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];
  const titleLines = t.title.split("\n");

  return (
    <section id="about" className="py-24 bg-[#0a2444] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Story */}
          <div className="flex flex-col gap-8">
            <div>
              <motion.span
                className="inline-block font-sans text-sm font-semibold tracking-widest text-[#7ab3e0] uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.badge}
              </motion.span>
              <motion.h2
                className="font-serif text-4xl sm:text-5xl text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {i === 0 ? line : <span className="text-[#7ab3e0]">{line}</span>}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </motion.h2>
            </div>

            <div className="flex flex-col gap-5">
              {t.story.map((para, i) => (
                <motion.p
                  key={i}
                  className="font-sans text-base text-white/65 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Year marker */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-[#1a5fa5] to-transparent" />
              <span className="font-serif text-5xl text-[#1a5fa5] font-bold">
                2006
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Pillars 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {t.pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#1a5fa5]/40 transition-all duration-300 flex flex-col gap-4 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-[#1a5fa5]/20 rounded-lg flex items-center justify-center group-hover:bg-[#1a5fa5]/40 transition-colors">
                    <Icon size={18} className="text-[#7ab3e0]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white mb-2">{pillar.title}</h3>
                    <p className="font-sans text-sm text-white/55 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
