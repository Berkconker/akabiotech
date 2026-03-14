import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchAreas from "@/components/ResearchAreas";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <ResearchAreas />
        <About />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
