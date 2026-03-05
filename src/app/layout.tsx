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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@id": siteConfig.url,
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "Vellore",
    "addressRegion": "IN",
    "postalCode": "632006",
    "streetAddress": "54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "ratingCount": "296",
    "ratingValue": "4.1"
  },
  "description": "Premium State of the Art High level Quaternary care Superspeciality Hospital at the heart of Gandhinagar, Vellore.",
  "hasMap": "https://maps.google.com/maps?cid=9667111072695054632",
  "image": "https://lh3.googleusercontent.com/La0fYC-XT-E8lRPk31cNfPmEgsfyWxy9VdOaX9wB81jgu-LOVYZVFeWqi4CcbxW_tOiyiECskDHNbb4vQQ=s0",
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Hospital"
    },
    {
      "@type": "Offer",
      "name": "Gastrointestinal surgeon"
    }
  ],
  "name": "Indira Superspeciality Hospital",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "SUNDAY",
      "opens": "00:00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "MONDAY",
      "opens": "00:00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "TUESDAY",
      "opens": "00:00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "WEDNESDAY",
      "opens": "00:00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "THURSDAY",
      "opens": "00:00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "FRIDAY",
      "opens": "00:00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "closes": "23:59:59",
      "dayOfWeek": "SATURDAY",
      "opens": "00:00:00"
    }
  ],
  "sameAs": [
    "https://indirasuperspecialityhospital.com/",
    "https://www.mappls.com/9w6owz",
    "https://www.justdial.com/Vellore/Indira-Superspeciality-Hospital-Gandhi-Nagar-East/9999PX416-X416-220613215915-A1A6_BZDET",
    "https://www.bajajfinservhealth.in/hospitals/vellore/indira-super-speciality-hospital-gandhi-nagar",
    "https://www.instagram.com/indirasuperspecialityhospitals/?hl=en",
    "https://www.facebook.com/indirasuperspecialityhospitals/",
    "https://promoteyourads.com/author/indira-super-speciality-hospital/"
  ],
  "telephone": "+91 98423 24425",
  "url": siteConfig.url
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <SpecialtyNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
