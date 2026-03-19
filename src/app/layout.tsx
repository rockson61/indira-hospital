import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SpecialtyNav } from "@/components/layout/SpecialtyNav";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ThemeProvider } from "@/components/theme-provider";
import { defaultSeo } from "@/config/seo";
import DynamicSEOKeywordBlock from "@/components/DynamicSEOKeywordBlock";
import { getHospitalSchema, getWebsiteSchema } from "@/lib/schema";

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
    canonical: siteConfig.url,
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
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        {/* Hospital / MedicalOrganization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getHospitalSchema()) }}
        />
        {/* Website Schema with Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <SpecialtyNav />
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
