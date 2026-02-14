import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBanner } from "@/components/sections/stats-banner";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FeaturedDepartments } from "@/components/sections/featured-departments";
import { SignatureTreatments } from "@/components/sections/signature-treatments";
import { FeaturedDoctors } from "@/components/sections/featured-doctors";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { LocationStrip } from "@/components/sections/location-strip";
import { CTASection } from "@/components/sections/cta";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Indira Super Speciality Hospital Vellore | Best Multi-Speciality Hospital",
  description:
    "Indira Super Speciality Hospital in Vellore offers world-class medical care — 25+ expert doctors, advanced Cath Lab, Laser Piles Treatment, Laparoscopic Surgery, Cardiology, Orthopaedics, 24/7 Emergency. Book on WhatsApp.",
  keywords: [
    "best hospital in Vellore",
    "super speciality hospital Vellore",
    "Indira Hospital",
    "laser piles treatment Vellore",
    "laparoscopic surgery Vellore",
    "cardiologist Vellore",
    "orthopaedic surgeon Vellore",
    "emergency hospital Vellore",
    "best doctor Vellore",
    "hospital near me Vellore",
    "cath lab Vellore",
    "heart treatment Vellore",
  ],
  openGraph: {
    title: "Indira Super Speciality Hospital | Best Hospital in Vellore",
    description:
      "25+ expert doctors, 10+ departments, advanced Cath Lab, 24/7 Emergency. Trusted healthcare in Vellore, Tamil Nadu.",
    url: "https://indirahospital.com",
    siteName: "Indira Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indira Super Speciality Hospital Vellore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indira Super Speciality Hospital Vellore",
    description: "World-class multi-speciality healthcare. 24/7 Emergency, Advanced Cath Lab, Expert Surgeons.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://indirahospital.com",
  },
};

// Hospital JSON-LD structured data
const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Indira Super Speciality Hospital",
  alternateName: "Indira Hospital Vellore",
  url: "https://indirahospital.com",
  logo: "https://indirahospital.com/logo.png",
  image: "https://indirahospital.com/hero-hospital.png",
  description:
    "Indira Super Speciality Hospital is a leading multi-speciality hospital in Vellore, Tamil Nadu offering advanced Cath Lab, Laser Piles Treatment, Laparoscopic Surgery, and 24/7 Emergency services.",
  telephone: ["+919842342525", "+917010650063"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Katpadi Road",
    addressLocality: "Vellore",
    addressRegion: "Tamil Nadu",
    postalCode: "632004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9165,
    longitude: 79.1325,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  medicalSpecialty: [
    "GeneralSurgery",
    "Cardiology",
    "Orthopedics",
    "Gastroenterology",
    "Urology",
    "Gynecology",
    "SpineSurgery",
    "Oncology",
    "Nephrology",
    "EmergencyMedicine",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Laser Piles Treatment" },
    { "@type": "MedicalProcedure", name: "Laparoscopic Surgery" },
    { "@type": "MedicalProcedure", name: "Coronary Angiography" },
    { "@type": "MedicalProcedure", name: "Angioplasty" },
    { "@type": "MedicalProcedure", name: "Joint Replacement" },
    { "@type": "MedicalProcedure", name: "Spine Surgery" },
    { "@type": "MedicalProcedure", name: "Endoscopy" },
    { "@type": "MedicalProcedure", name: "Kidney Stone Treatment" },
  ],
  sameAs: [],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    ratingCount: "1250",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Indira Super Speciality Hospital",
  url: "https://indirahospital.com",
  telephone: "+919842342525",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Katpadi Road",
    addressLocality: "Vellore",
    addressRegion: "Tamil Nadu",
    postalCode: "632004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9165,
    longitude: 79.1325,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919842342525",
      contactType: "Appointments",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+917010650063",
      contactType: "WhatsApp Booking",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Sections */}
      <Hero />
      <StatsBanner />
      <WhyChooseUs />
      <FeaturedDepartments />
      <SignatureTreatments />
      <FeaturedDoctors />
      <Testimonials />
      <FAQSection />
      <LocationStrip />
      <CTASection />
    </main>
  );
}
