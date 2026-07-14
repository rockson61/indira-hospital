import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { defaultSeo } from "@/config/seo";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));
const StickyCTA = dynamic(() => import("@/components/layout/StickyCTA").then(mod => mod.StickyCTA));
const FloatingWhatsApp = dynamic(() => import("@/components/layout/FloatingWhatsApp").then(mod => mod.FloatingWhatsApp));
const DynamicSEOKeywordBlock = dynamic(() => import("@/components/DynamicSEOKeywordBlock"));
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";


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

import Script from "next/script";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" className="bg-background" suppressHydrationWarning>
 <body
 className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans relative`}
 >
 <div id="google_translate_element" style={{ display: "none" }} />
 <Script id="google-translate-config" strategy="beforeInteractive">
 {`
 function googleTranslateElementInit() {
 new window.google.translate.TranslateElement({
 pageLanguage: 'en',
 includedLanguages: 'en,ta,hi,te',
 autoDisplay: false
 }, 'google_translate_element');
 }
 `}
 </Script>
 <Script
 src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
 strategy="afterInteractive"
 />
 <JsonLdSchema auto />
 <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
 <Header />
 <main className="flex-1">
 {children}
 </main>
 <Footer />
 <StickyCTA />
 <FloatingWhatsApp />
 <DynamicSEOKeywordBlock />
 <Script
 id="seorce-analytics"
 src="https://scripts.seorce.com/api?projectId=6a2e65413f9dac8c30e24143"
 strategy="lazyOnload"
 data-uuid="6a2e65413f9dac8c30e24143"
 />
 </ThemeProvider>
 </body>
 </html>
 );
}
