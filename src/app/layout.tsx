import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { defaultSeo } from "@/config/seo";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));
const StickyCTA = dynamic(() => import("@/components/layout/StickyCTA").then(mod => mod.StickyCTA));
const DynamicSEOKeywordBlock = dynamic(() => import("@/components/DynamicSEOKeywordBlock"));
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";


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

export const metadata: Metadata = {
  ...defaultSeo,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <JsonLdSchema auto />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyCTA />
          <DynamicSEOKeywordBlock />
        </ThemeProvider>
      </body>
    </html>
  );
}
