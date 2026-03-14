import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim — AKA Biyoteknoloji",
  description:
    "AKA Biyoteknoloji ile iletişime geçin. Teknopark İstanbul ofisimiz ve iletişim bilgilerimiz.",
};

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[#0a2444] pt-24" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
