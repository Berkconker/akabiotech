import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import ArgeContent from "@/components/ArgeContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ar-Ge — AKA Biyoteknoloji",
  description:
    "TÜBİTAK ve AB destekli Ar-Ge projeleriyle biyoteknoloji alanında bilimsel ilerlemeye katkı sağlıyoruz.",
};

export default function ArgePage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <ArgeContent />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
