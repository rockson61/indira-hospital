export const runtime = 'edge';
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTreatmentBySlug } from "@/lib/data/treatment-data";
import { siteConfig } from "@/config/site";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { ChevronRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { UnifiedEntitySection } from "@/components/seo/UnifiedEntitySection";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { enhancedVelloreLocations } from "@/lib/data/enhanced-location-data";

const EXTRA_LOCATIONS = [
 { slug: "bangalore", name: "Bangalore"},
 { slug: "chittoor", name: "Chittoor"}
];

const GEO_LOCATIONS = [
 ...enhancedVelloreLocations.map(l => ({ slug: l.slug, name: l.name })),
 ...tamilNaduLocations.map(l => ({ slug: l.slug, name: l.name })),
 ...EXTRA_LOCATIONS
];

export const dynamicParams = true;

// export async function generateStaticParams() {
// if (process.env.VERCEL) {
// return []; // Vercel build bypass
// }
// 
// // Top treatments to statically pre-build for all locations
// const topTreatments = ["laser-piles-treatment", "laparoscopic-hernia-repair", "total-knee-replacement"];
// const params: { treatment: string; location: string }[] = [];
// 
// for (const treatment of topTreatments) {
// for (const loc of GEO_LOCATIONS) {
// params.push({ treatment, location: loc.slug });
// }
// }
// return params;
// }

export async function generateMetadata({ params }: { params: Promise<{ treatment: string; location: string }> }): Promise<Metadata> {
 const { treatment: treatmentSlug, location: locationSlug } = await params;
 
 const treatmentInfo = getTreatmentBySlug(treatmentSlug);
 if (!treatmentInfo) return { title: "Not Found"};
 
 const location = GEO_LOCATIONS.find(l => l.slug === locationSlug);
 const locationName = location ? location.name : locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
 
 const isLaser = treatmentSlug.includes("laser");
 
 const prefix = isLaser ? "Best": "Top";
 
 return {
 title: `${prefix} ${treatmentInfo.title} in ${locationName} | Indira Hospital`,
 description: `Looking for ${treatmentInfo.title} in ${locationName}? Indira Super Speciality Hospital offers advanced, NABH-accredited treatment with same-day discharge options.`,
 alternates: {
 canonical: `${siteConfig.url}/treatments/${treatmentSlug}/${locationSlug}`,
 },
 openGraph: {
 title: `${prefix} ${treatmentInfo.title} in ${locationName} | Indira Hospital`,
 description: `Looking for ${treatmentInfo.title} in ${locationName}?`,
 images: [
 {
 url: `/api/og?title=${encodeURIComponent(`${treatmentInfo.title} in ${locationName}`)}&subtitle=${encodeURIComponent('Advanced Treatment Options')}&type=${encodeURIComponent('Medical Treatment')}`,
 width: 1200,
 height: 630,
 alt: `${treatmentInfo.title} in ${locationName}`,
 }
 ]
 }
 };
}

export default async function GeoTargetedTreatmentPage({ params }: { params: Promise<{ treatment: string; location: string }> }) {
 const { treatment: treatmentSlug, location: locationSlug } = await params;
 
 const treatmentInfo = getTreatmentBySlug(treatmentSlug);
 if (!treatmentInfo) notFound();
 
 const location = GEO_LOCATIONS.find(l => l.slug === locationSlug);
 const locationName = location ? location.name : locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
 
 const whatsappText = encodeURIComponent(`Hi, I am looking for ${treatmentInfo.title} from ${locationName}. Can you share details?`);
 const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappText}`;
 
 return (
 <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-20">
 {/* Dynamic Localized Schema */}
 <JsonLdSchema 
 type="procedure"
 name={`${treatmentInfo.title} in ${locationName}`}
 description={treatmentInfo.shortDescription}
 url={`/treatments/${treatmentSlug}/${locationSlug}`}
 />
 
 {/* Hero Section */}
 <section className="bg-gradient-to-br from-fuchsia-900 to-indigo-900 text-white pt-32 pb-16 px-6">
 <div className="max-w-4xl mx-auto text-center">
 <nav className="flex items-center justify-center text-sm text-fuchsia-200/60 mb-8 overflow-x-auto whitespace-nowrap">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4 mx-2 opacity-40"/>
 <Link href="/doctor/near-me/treat"className="hover:text-white transition-colors">Treatments</Link>
 <ChevronRight className="w-4 h-4 mx-2 opacity-40"/>
 <span className="text-white font-bold">{treatmentInfo.title} in {locationName}</span>
 </nav>
 
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
 <MapPin className="w-4 h-4 text-fuchsia-300"/>
 <span className="text-sm font-semibold text-fuchsia-100">Serving Patients from {locationName}</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
 Best {treatmentInfo.title} <br className="hidden md:block"/> 
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-indigo-300">
 Near {locationName}
 </span>
 </h1>
 
 <p className="text-lg text-fuchsia-100/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
 {treatmentInfo.shortDescription} Access world-class surgeons and NABH-accredited infrastructure just a short drive from {locationName}.
 </p>
 
 <div className="flex flex-wrap justify-center gap-4">
 <a href={whatsappUrl} target="_blank"rel="noopener noreferrer"className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all shadow-clay-sm flex items-center gap-2">
 <MessageCircle className="w-5 h-5"/> WhatsApp Consultant
 </a>
 <a href={`tel:${siteConfig.contact.phone}`} className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-white dark:bg-slate-900 text-white font-bold rounded-2xl transition-all border border-slate-200 dark:border-slate-800 flex items-center gap-2">
 <Phone className="w-5 h-5"/> Call for Guidance
 </a>
 </div>
 </div>
 </section>
 
 {/* Content Section */}
 <div className="max-w-4xl mx-auto px-6 py-16">
 <Card className="p-8 border-none shadow-clay rounded-3xl bg-white dark:bg-slate-900 mb-12">
 <h2 className="text-2xl font-bold mb-4">Why choose Indira Hospital from {locationName}?</h2>
 <div className="space-y-4 text-slate-600 dark:text-subtle-on-light">
 <p>
 Patients from <strong>{locationName}</strong> consistently choose Indira Super Speciality Hospital in Vellore for <strong>{treatmentInfo.title}</strong> due to our ethical clinical protocols, advanced technology, and transparent pricing.
 </p>
 <ul className="list-disc pl-5 space-y-2">
 <li><strong>Expertise:</strong> Experienced surgical team specializing in {treatmentInfo.title}.</li>
 <li><strong>Technology:</strong> State-of-the-art facilities ensuring minimal recovery time.</li>
 <li><strong>Accessibility:</strong> Conveniently located for easy travel from {locationName}.</li>
 <li><strong>Cashless Facility:</strong> Tie-ups with major insurance providers for smooth claims.</li>
 </ul>
 </div>
 </Card>
 
 <UnifiedEntitySection type="doctors"title="Specialists"subtitle="Meet the Experts"featuredLimit={4} />
 </div>
 </div>
 );
}
