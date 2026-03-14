import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import CihazlarContent from "@/components/CihazlarContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cihazlar — AKA Biyoteknoloji",
  description:
    "Sciex, Sony Biotechnology, Berthold, Revvity, Liconic ve daha fazlasıyla alanında lider analitik sistemler.",
};

export default function CihazlarPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <CihazlarContent />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
