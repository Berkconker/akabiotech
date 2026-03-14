import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import ResearchAreas from "@/components/ResearchAreas";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Çalışma Alanları — AKA Biyoteknoloji",
  description: "Hücre araştırmaları, protein araştırmaları, genetik araştırmalar ve proje çözümleri.",
};

export default function CalismaAlanlariPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        {/* Page hero to push content below fixed navbar */}
        <div className="bg-[#0a2444] pt-28 pb-0" />
        <ResearchAreas />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
