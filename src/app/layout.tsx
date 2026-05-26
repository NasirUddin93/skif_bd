import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKIF-BD | Shotokan Karate International Federation Bangladesh",
  description: "The official body of Shotokan Karate-Do International Federation in Bangladesh. Empowering youth through discipline, respect, and the art of Shotokan Karate.",
  keywords: "Karate, Shotokan, SKIF, Bangladesh, Martial Arts, Dojo, Kumite, Kata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface overflow-x-hidden">
        <UtilityBar />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
