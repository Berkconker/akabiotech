import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda — AKA Biyoteknoloji",
  description: "2006'dan bu yana biyoteknoloji alanında araştırmacıların güvenilir çözüm ortağı.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
