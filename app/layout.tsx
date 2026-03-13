import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richcourt | Distinguished Serviced Accommodations",
  description: "Bespoke living on Justice A. Brobbey Ave, Achimota. Experience a sanctuary of privacy and refined hospitality in Accra.",
  keywords: ["Richcourt Achimota", "Luxury Suites Accra", "Serviced Apartments Ghana", "Bespoke Hospitality"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth bg-rich-black`}>
      <body className="bg-rich-black text-cream antialiased selection:bg-gold selection:text-rich-black overflow-x-hidden min-h-screen flex flex-col">
        
        {/* LUXURY GRAIN OVERLAY 
            Added pointer-events-none to ensure it never blocks clicks 
            and adjusted opacity for a subtle 'matte' texture.
        */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />

        <Navbar />
        
        <main className="relative grow">
          {children}
        </main>

        {/* The Concierge sits at the root level so it persists 
            across page transitions (Home -> Accommodations -> Reserve).
        */}
        <WhatsAppConcierge />

        <Footer />
      </body>
    </html>
  );
}