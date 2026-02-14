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
import { getHospitalSettings } from "@/lib/api";

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
    url: "https://www.indirasuperspecialityhospital.com",
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
    canonical: "https://www.indirasuperspecialityhospital.com",
  },
};

function buildJsonLd(h: any) {
  // Parse JSON fields safely
  const openingHours = typeof h.opening_hours === 'string' ? JSON.parse(h.opening_hours) : (h.opening_hours || []);
  const areasServed = typeof h.areas_served === 'string' ? JSON.parse(h.areas_served) : (h.areas_served || []);
  const sameAs = [h.social_facebook, h.social_instagram, h.social_youtube, h.social_linkedin, h.social_twitter]
    .filter(Boolean);

  const hospitalJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: h.hospital_name || "Indira Super Speciality Hospital",
    alternateName: "Indira Hospital Vellore",
    url: h.website || "https://www.indirasuperspecialityhospital.com",
    logo: "https://www.indirasuperspecialityhospital.com/logo.png",
    image: "https://www.indirasuperspecialityhospital.com/hero-hospital.png",
    description: h.description || "Indira Super Speciality Hospital is a leading multi-speciality hospital in Vellore, Tamil Nadu.",
    ...(h.legal_name && { legalName: h.legal_name }),
    ...(h.tagline && { slogan: h.tagline }),
    ...(h.founded_year && { foundingDate: String(h.founded_year) }),
    ...(h.bed_count && { numberOfBeds: h.bed_count }),
    telephone: [h.phone || "+919842342525", h.emergency_phone || "+917010650063"].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: h.address_street || "Katpadi Road",
      addressLocality: h.address_city || "Vellore",
      addressRegion: h.address_state || "Tamil Nadu",
      postalCode: h.address_pincode || "632004",
      addressCountry: h.address_country || "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: h.geo_lat || 12.9344,
      longitude: h.geo_lng || 79.1422,
    },
    ...(openingHours.length > 0 && { openingHoursSpecification: openingHours }),
    medicalSpecialty: [
      "GeneralSurgery", "Cardiology", "Orthopedics", "Gastroenterology",
      "Urology", "Gynecology", "SpineSurgery", "Oncology", "Nephrology", "EmergencyMedicine",
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
    ...(sameAs.length > 0 && { sameAs }),
    ...(h.google_maps_url && { hasMap: h.google_maps_url }),
    priceRange: h.price_range || "₹₹",
    ...(h.aggregate_rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(h.aggregate_rating),
        bestRating: "5",
        ratingCount: String(h.review_count || 850),
      },
    }),
    ...(areasServed.length > 0 && {
      areaServed: areasServed.map((a: string) => ({ "@type": "Place", name: a })),
    }),
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: h.hospital_name || "Indira Super Speciality Hospital",
    url: h.website || "https://www.indirasuperspecialityhospital.com",
    telephone: h.phone || "+919842342525",
    ...(h.email && { email: h.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: h.address_street || "Katpadi Road",
      addressLocality: h.address_city || "Vellore",
      addressRegion: h.address_state || "Tamil Nadu",
      postalCode: h.address_pincode || "632004",
      addressCountry: h.address_country || "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: h.geo_lat || 12.9344,
      longitude: h.geo_lng || 79.1422,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: h.phone || "+919842342525",
        contactType: "Appointments",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
      ...(h.whatsapp ? [{
        "@type": "ContactPoint",
        telephone: h.whatsapp,
        contactType: "WhatsApp Booking",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      }] : []),
    ],
  };

  return { hospitalJsonLd, localBusinessJsonLd };
}

export default async function Home() {
  // Fetch hospital settings from CMS
  let hospitalSettings: any = {};
  try { hospitalSettings = await getHospitalSettings(); } catch { /* fallback to defaults */ }

  const { hospitalJsonLd, localBusinessJsonLd } = buildJsonLd(hospitalSettings);

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
