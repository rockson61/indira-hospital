import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google"; // Brand fonts
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileQuickActions } from "@/components/layout/MobileQuickActions";
import FloatingActionBar from "@/components/widgets/FloatingActionBar";

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
  metadataBase: new URL('https://www.indirasuperspecialityhospital.com'),
  title: {
    default: "Indira Super Speciality Hospital | Best Hospital in Vellore",
    template: "%s | Indira Hospital"
  },
  description: "Indira Super Speciality Hospital in Vellore offers world-class medical care with advanced technology and expert doctors. 24/7 Emergency, Trauma Care & Multi-speciality services.",
  keywords: ["Hospital in Vellore", "Best Doctor in Vellore", "Emergency Care", "Multi Speciality Hospital", "Trauma Care", "Indira Hospital"],
  authors: [{ name: "Indira Hospital" }],
  creator: "Indira Hospital",
  publisher: "Indira Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Indira Super Speciality Hospital | Vellore",
    description: "Advanced medical care and super speciality services in Vellore.",
    url: "https://www.indirasuperspecialityhospital.com",
    siteName: "Indira Hospital",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public
        width: 1200,
        height: 630,
        alt: "Indira Hospital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indira Hospital",
    description: "Leading Multi-Speciality Hospital in Vellore",
    images: ["/og-image.jpg"],
  },
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
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileQuickActions />
        <div className="hidden md:block">
          <FloatingActionBar />
        </div>
      </body>
    </html>
  );
}
