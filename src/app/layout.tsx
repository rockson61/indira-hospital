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
import { LocalBusinessJsonLd, OrganizationJsonLd } from 'next-seo';

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
        className={`${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LocalBusinessJsonLd
            type="Hospital"
            name={siteConfig.name}
            description={siteConfig.description}
            url={siteConfig.url}
            telephone={siteConfig.contact.phone}
            address={{
              streetAddress: '54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar',
              addressLocality: 'Vellore',
              addressRegion: 'Tamil Nadu',
              postalCode: '632006',
              addressCountry: 'IN',
            }}
            geo={{
              latitude: 12.9344,
              longitude: 79.1293,
            }}
            image={`${siteConfig.url}${siteConfig.ogImage}`}
            openingHoursSpecification={[
              {
                opens: '09:00',
                closes: '21:00',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              },
              {
                opens: '10:00',
                closes: '14:00',
                dayOfWeek: 'Sunday',
              },
            ]}
          />
          <OrganizationJsonLd
            url={siteConfig.url}
            logo={`${siteConfig.url}/logo.png`}
            contactPoint={[
              {
                telephone: siteConfig.contact.phone,
                contactType: 'customer service',
              },
              {
                telephone: siteConfig.contact.emergencyPhone,
                contactType: 'emergency',
              },
            ]}
          />
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
