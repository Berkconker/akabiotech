import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import HizmetlerContent from "@/components/HizmetlerContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hizmetler — AKA Biyoteknoloji",
  description:
    "NGS, oligonükleotid sentezi, biyoinformatik analiz ve epigenetik araştırma hizmetleri.",
};

export default function HizmetlerPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HizmetlerContent />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
