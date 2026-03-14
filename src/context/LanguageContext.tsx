"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "tr",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "tr" || saved === "en") setLang(saved);
  }, []);

  const toggleLang = () =>
    setLang((l) => {
      const next = l === "tr" ? "en" : "tr";
      localStorage.setItem("lang", next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
