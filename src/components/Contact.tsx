"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    badge: "İletişim",
    title: "Bizimle İletişime Geçin",
    infoTitle: "İletişim Bilgileri",
    address: "Merkez Mahallesi Seçkin Sokak No:3/67 DAP Bumerang Ofis, Kağıthane, İstanbul",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    linkedin: "LinkedIn'de Takip Edin",
  },
  en: {
    badge: "Contact",
    title: "Get In Touch",
    infoTitle: "Contact Information",
    address: "Merkez Mahallesi Seçkin Sokak No:3/67 DAP Bumerang Ofis, Kağıthane, Istanbul",
    addressLabel: "Address",
    phoneLabel: "Phone",
    linkedin: "Follow on LinkedIn",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="contact" className="py-24 bg-[#f7f9fc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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
            className="font-serif text-4xl sm:text-5xl text-[#0a2444]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.title}
          </motion.h2>
        </div>

        {/* Map */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-[#dce8f7] shadow-sm mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.2!2d28.9697!3d41.0936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b6e1c3f6c7%3A0x5b5b5b5b5b5b5b5b!2sDAP%20Bumerang%20Ofis!5e0!3m2!1str!2str!4v1"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Info card */}
        <motion.div
          className="bg-[#0a2444] rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-serif text-xl text-white mb-7">{t.infoTitle}</h3>

          <div className="grid sm:grid-cols-3 gap-6 mb-7">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#1a5fa5]/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-[#7ab3e0]" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                  {t.addressLabel}
                </p>
                <p className="font-sans text-sm text-white/80 leading-relaxed">{t.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#1a5fa5]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-[#7ab3e0]" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                  {t.phoneLabel}
                </p>
                <a
                  href="tel:+902123462019"
                  className="font-sans text-sm text-white/80 hover:text-[#7ab3e0] transition-colors"
                >
                  +90 (212) 346 20 19
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-[#1a5fa5]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-[#7ab3e0]" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                  E-mail
                </p>
                <a
                  href="mailto:info@akabiotech.com"
                  className="font-sans text-sm text-white/80 hover:text-[#7ab3e0] transition-colors"
                >
                  info@akabiotech.com
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/aka-biotechnology/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0077B5]/20 hover:bg-[#0077B5]/40 border border-[#0077B5]/30 hover:border-[#0077B5]/60 rounded-xl px-5 py-3 transition-all duration-300 group"
          >
            <Linkedin size={18} className="text-[#7ab3e0] flex-shrink-0" />
            <span className="font-sans text-sm font-medium text-white/80 group-hover:text-white transition-colors">
              {t.linkedin}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
