import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CozumOrtaklari from "@/components/CozumOrtaklari";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <CozumOrtaklari />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
