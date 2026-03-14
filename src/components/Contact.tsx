"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const content = {
  tr: {
    badge: "İletişim",
    title: "Bizimle İletişime Geçin",
    sub: "Sorularınız, iş birliği teklifleriniz veya proje talepleriniz için aşağıdaki formu doldurun.",
    fields: {
      name: "Ad Soyad",
      email: "E-posta Adresi",
      phone: "Telefon (isteğe bağlı)",
      message: "Mesajınız",
      messagePlaceholder: "Projeniz veya sorunuz hakkında kısaca bilgi verin...",
      submit: "Gönder",
      submitting: "Gönderiliyor...",
    },
    success: "Mesajınız iletildi! En kısa sürede sizinle iletişime geçeceğiz.",
    info: {
      title: "İletişim Bilgileri",
      address: "Teknopark İstanbul, Pendik, İstanbul, Türkiye",
      phone: "+90 (212) 346 20 19",
      email: "info@akabiyoteknoloji.com",
      linkedin: "LinkedIn'de Takip Edin",
    },
  },
  en: {
    badge: "Contact",
    title: "Get In Touch",
    sub: "Fill out the form below for your questions, collaboration proposals, or project requests.",
    fields: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone (optional)",
      message: "Your Message",
      messagePlaceholder: "Briefly describe your project or question...",
      submit: "Send Message",
      submitting: "Sending...",
    },
    success: "Your message has been sent! We will contact you as soon as possible.",
    info: {
      title: "Contact Information",
      address: "Technopark Istanbul, Pendik, Istanbul, Turkey",
      phone: "+90 (212) 346 20 19",
      email: "info@akabiotechnology.com",
      linkedin: "Follow on LinkedIn",
    },
  },
};

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full font-sans text-sm text-[#0a2444] bg-[#f7f9fc] border border-[#c8d8ef] rounded-xl px-4 py-3 placeholder:text-[#0a2444]/40 focus:outline-none focus:border-[#1a5fa5] focus:ring-2 focus:ring-[#1a5fa5]/15 transition-all duration-200";

  return (
    <section id="contact" className="py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
            className="font-serif text-4xl sm:text-5xl text-[#0a2444] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            className="font-sans text-base text-[#0a2444]/60 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {t.sub}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* LEFT — Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#dce8f7] shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 h-full min-h-[320px] text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                >
                  <CheckCircle size={56} className="text-[#1a5fa5]" />
                </motion.div>
                <p className="font-sans text-base text-[#0a2444]/70 max-w-xs">{t.success}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-sans text-sm text-[#1a5fa5] underline underline-offset-4 hover:text-[#0a2444] transition-colors"
                >
                  {lang === "tr" ? "Yeni mesaj gönder" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-[#0a2444]/60 uppercase tracking-wider mb-1.5">
                      {t.fields.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Adınız Soyadınız"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-[#0a2444]/60 uppercase tracking-wider mb-1.5">
                      {t.fields.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="ornek@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-[#0a2444]/60 uppercase tracking-wider mb-1.5">
                    {t.fields.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+90 5xx xxx xx xx"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-[#0a2444]/60 uppercase tracking-wider mb-1.5">
                    {t.fields.message}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={t.fields.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1a5fa5] hover:bg-[#0a2444] disabled:opacity-60 text-white font-sans font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 group"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.fields.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      {t.fields.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#0a2444] rounded-2xl p-8 text-white flex flex-col gap-7">
              <h3 className="font-serif text-xl text-white">{t.info.title}</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1a5fa5]/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-[#7ab3e0]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                      {lang === "tr" ? "Adres" : "Address"}
                    </p>
                    <p className="font-sans text-sm text-white/80 leading-relaxed">{t.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1a5fa5]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#7ab3e0]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                      {lang === "tr" ? "Telefon" : "Phone"}
                    </p>
                    <a
                      href="tel:+902123462019"
                      className="font-sans text-sm text-white/80 hover:text-[#7ab3e0] transition-colors"
                    >
                      {t.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1a5fa5]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#7ab3e0]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">E-mail</p>
                    <a
                      href={`mailto:${t.info.email}`}
                      className="font-sans text-sm text-white/80 hover:text-[#7ab3e0] transition-colors break-all"
                    >
                      {t.info.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/aka-biotechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0077B5]/20 hover:bg-[#0077B5]/40 border border-[#0077B5]/30 hover:border-[#0077B5]/60 rounded-xl px-5 py-3 transition-all duration-300 group"
              >
                <Linkedin size={18} className="text-[#7ab3e0] flex-shrink-0" />
                <span className="font-sans text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {t.info.linkedin}
                </span>
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#dce8f7] h-40 bg-[#dce8f7] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-[#0a2444]/30">
                <MapPin size={24} />
                <span className="font-sans text-xs">
                  {lang === "tr" ? "Harita Yükleniyor..." : "Map Loading..."}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
