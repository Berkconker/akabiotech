import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKA Biyoteknoloji — Bilimsel Keşfin Güvenilir Ortağı",
  description:
    "2006'dan bu yana hücre biyolojisi, protein araştırmaları ve genetik alanında yenilikçi biyoteknoloji çözümleri sunuyoruz.",
  keywords: [
    "biyoteknoloji",
    "hücre araştırmaları",
    "protein araştırmaları",
    "genetik",
    "Ar-Ge",
    "biotechnology",
  ],
  openGraph: {
    title: "AKA Biyoteknoloji",
    description: "Bilimsel Keşfin Güvenilir Ortağı",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
