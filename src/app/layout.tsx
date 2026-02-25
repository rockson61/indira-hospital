import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SpecialtyNav } from "@/components/layout/SpecialtyNav";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { defaultSeo } from "@/config/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultSeo;

export const viewport: Viewport = {
  themeColor: "#841F74",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <SpecialtyNav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
