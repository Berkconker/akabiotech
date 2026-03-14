import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda — AKA Biyoteknoloji",
  description: "2006'dan bu yana biyoteknoloji alanında araştırmacıların güvenilir çözüm ortağı.",
};

export default function HakkimizdaPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
