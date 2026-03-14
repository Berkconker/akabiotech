import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SarfVeKitlerContent from "@/components/SarfVeKitlerContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sarf ve Kitler — AKA Biyoteknoloji",
  description:
    "Flow cytometry kit panellerinden nükleik asit izolasyonuna, oligonükleotid sentezinden epigenetik araştırma setlerine geniş sarf ürün yelpazesi.",
};

export default function SarfVeKitlerPage() {
  return (
    <>
      <Navbar />
      <main>
        <SarfVeKitlerContent />
      </main>
      <Footer />
    </>
  );
}
