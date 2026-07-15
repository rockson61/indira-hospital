export const runtime = 'edge';
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
 Plane, Globe2, Clock, MapPin, CheckCircle2, Languages, MessageCircle,
 Shield, Phone, Star, Award, ArrowRight, ChevronRight, TrendingDown,
 Building, Stethoscope as StethoscopeIcon, Users, Calendar, FileText
} from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";
import {
 INTERNATIONAL_COUNTRIES, HOSPITAL_AMENITIES, COST_COMPARISON,
 JOURNEY_STEPS, CMC_VS_INDIRA, TOP_TREATMENTS_INTL
} from "@/lib/data/international-data";
import { getDoctors } from "@/lib/api";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { getImageUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ProctologyLaparoscopyHighlight } from "@/components/specialties/ProctologyLaparoscopyHighlight";
import { SectionContainer } from "@/components/ui/section-container";

const HOSPITAL_NAME = "Indira Super Speciality Hospital";
const HOSPITAL_ADDRESS = "54, Katpadi Road, Gandhi Nagar, Vellore — 632006";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
 const { country: slug } = await params;
 const country = INTERNATIONAL_COUNTRIES.find((c) => c.slug === slug);
 if (!country) return { title: "Country Not Found" };

 return {
 title: country.seoTitle || `Best Medical Treatment in India for Patients from ${country.name} | Indira Hospital`,
 description: country.seoDescription || `Indira Super Speciality Hospital is the #1 choice for patients from ${country.name}. Specialized in Laparoscopic, Cardiac, and Orthopaedic surgeries in Vellore, India.`,
 keywords: [
 `hospital in India for ${country.name} patients`,
 `medical tourism India ${country.name}`,
 `best cancer hospital India for ${country.name}`,
 `surgery cost in India for ${country.name}`,
 "Indira Hospital Vellore",
 "Medical Visa India"
 ],
 openGraph: {
 title: country.seoTitle || `Best Medical Treatment in India for Patients from ${country.name} | Indira Hospital`,
 description: country.seoDescription || `Indira Super Speciality Hospital is the #1 choice for patients from ${country.name}.`,
 images: [
 {
 url: `/api/og?title=${encodeURIComponent(`Medical Care for ${country.name} Patients`)}&subtitle=${encodeURIComponent('International Patient Centre')}&type=${encodeURIComponent('Global Healthcare')}`,
 width: 1200,
 height: 630,
 alt: `Medical Care for ${country.name} Patients`,
 }
 ]
 }
 };
}

export default async function InternationalCountryPage({ params }: { params: Promise<{ country: string }> }) {
 const { country: slug } = await params;
 const country = INTERNATIONAL_COUNTRIES.find((c) => c.slug === slug);
 if (!country) notFound();

 const allDoctors: any[] = await getDoctors().catch(() => []);
 const featuredDoctors = allDoctors.slice(0, 4);

 const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
 `Hi, I am a patient from ${country.name} and I need medical treatment at Indira Hospital. Please help.`
 )}`;

 return (
 <main className="min-h-screen bg-white dark:bg-slate-950">
 {/* ELITE CINEMATIC HERO */}
 <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
 
 <SectionContainer className="relative z-10">
 <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
 <nav className="flex items-center justify-center lg:justify-start text-sm text-slate-400 mb-8 gap-1 flex-wrap">
 <Link href="/" className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4" />
 <Link href="/patients/international" className="hover:text-white transition-colors">International</Link>
 <ChevronRight className="w-4 h-4" />
 <span className="text-fuchsia-400 font-medium">{country.name} Care</span>
 </nav>

 <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
 {country.flag && <span className="text-6xl drop-shadow-2xl">{country.flag}</span>}
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-xs font-bold tracking-widest uppercase shadow-lg shadow-fuchsia-500/20">
 <Globe2 className="w-4 h-4" /> {country.region} · Trusted Center
 </span>
 </div>
 
 <h1 className="elite-hero-title text-white mb-10 text-center lg:text-left">
 The Best Care in India <br />
 <span className="elite-gradient-text text-3xl sm:text-4xl">for {country.name}.</span>
 </h1>
 
 <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light mb-10">
 Indira Super Speciality Hospital, Vellore — India's leading quaternary care choice for patients from {country.name}. {country.cost_savings || "Save 60–80%"} compared to home country costs.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <a href={waUrl} target="_blank" rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-500/20">
 <MessageCircle className="w-5 h-5" /> WhatsApp — Free Plan
 </a>
 <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-bold rounded-2xl hover:bg-white dark:bg-slate-900 transition-all">
 <Phone className="w-5 h-5 text-fuchsia-400" /> {siteConfig.contact.phone}
 </a>
 </div>
 </div>
 </SectionContainer>
 </section>

 {/* QUICK STATS BAR */}
 <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
 <SectionContainer className="py-8 flex flex-wrap justify-between gap-8 text-center sm:text-left">
 {[
 { v: "15,000+", l: "Global Surgeries" },
 { v: "24 hrs", l: "Visa Letter turnaround" },
 { v: "60-85%", l: "Cost Savings" },
 { v: "NABH", l: "Accredited Safety" },
 ].map((stat, i) => (
 <div key={i} className="flex-1 min-w-[150px]">
 <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.v}</div>
 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</div>
 </div>
 ))}
 </SectionContainer>
 </div>

 <SectionContainer className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
 <div className="grid lg:grid-cols-3 gap-16">
 {/* MAIN CONTENT */}
 <div className="lg:col-span-2 space-y-24">
 
 {/* TRAVEL INFO */}
 <section>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-10 uppercase">Travel & <span className="text-fuchsia-600">Visa Guide</span></h2>
 <div className="grid sm:grid-cols-2 gap-6">
 {[
 { icon: Clock, title: "Flight Duration", value: country.flight_duration, color: "blue" },
 { icon: MapPin, title: "Nearest Airport", value: country.nearest_airport || "Chennai Intl (MAA) — 2.5 hrs to Vellore", color: "green" },
 { icon: FileText, title: "Visa Requirements", value: country.visa_info, color: "amber" },
 { icon: Calendar, title: "Invitation Letter", value: "Issued within 24 hours of confirmation.", color: "fuchsia" },
 ].map((item, i) => (
 <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600`}>
 <item.icon className="w-6 h-6" />
 </div>
 <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-tight mb-2">{item.title}</h3>
 <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{item.value}</p>
 </div>
 ))}
 </div>
 </section>

 {/* TREATMENT HIGHLIGHTS */}
 <section>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-10 uppercase">Most <span className="text-fuchsia-600">Requested Care</span></h2>
 <div className="grid sm:grid-cols-2 gap-4">
 {TOP_TREATMENTS_INTL.map((t) => (
 <Link href={`/doctor/near-me/treat/${t.slug}`} key={t.slug}
 className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-fuchsia-300 hover:shadow-xl transition-all group">
 <div className="flex items-center gap-4">
 <span className="text-3xl group-hover:scale-110 transition-transform">{t.icon}</span>
 <div>
 <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{t.name}</p>
 <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">{t.savings}</p>
 </div>
 </div>
 <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-fuchsia-600 group-hover:translate-x-1 transition-all" />
 </Link>
 ))}
 </div>
 </section>

 {/* CMC COMPARISON BOX ELITE */}
 <section className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white border border-slate-200 dark:border-slate-800 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(232,121,249,0.1),transparent_50%)] pointer-events-none" />
 <div className="relative z-10">
 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-black tracking-widest uppercase mb-6">
 🔥 Same-Week Appointments
 </span>
 <h2 className="elite-section-title mb-4 uppercase er">Why {country.name} Chooses <br /><span className="text-fuchsia-400">Indira Over CMC Vellore</span></h2>
 <p className="text-slate-400 text-sm mb-10 font-light leading-relaxed max-w-xl">
 Avoid the 3–6 month waitlists. Indira Hospital offers equivalent quaternary care with immediate access and dedicated international coordination.
 </p>
 
 <div className="grid gap-4">
 {CMC_VS_INDIRA.slice(0, 4).map((row, i) => (
 <div key={i} className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-800 text-xs font-medium uppercase tracking-widest">
 <span className="text-slate-500">{row.factor}</span>
 <span className="text-white font-black">{row.indira}</span>
 </div>
 ))}
 </div>
 
 <a href={waUrl} target="_blank" rel="noopener noreferrer"
 className="elite-button-primary mt-10">
 <MessageCircle className="w-4 h-4" /> Skip the Waitlist
 </a>
 </div>
 </section>

 {/* COST TABLE */}
 <section>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-4 uppercase text-center lg:text-left">Transparent <span className="text-fuchsia-600">Pricing</span></h2>
 <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 font-medium text-center lg:text-left">Save up to 85% compared to home country costs.</p>
 
 <div className="overflow-x-auto rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
 <table className="w-full text-xs text-left">
 <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
 <tr>
 <th className="py-6 px-8 font-black text-slate-900 dark:text-white uppercase tracking-widest">Procedure</th>
 <th className="py-6 px-8 font-black text-fuchsia-600 dark:text-fuchsia-400 text-center uppercase tracking-widest">Indira (India)</th>
 <th className="py-6 px-8 font-black text-slate-400 text-center uppercase tracking-widest">USA / UK / UAE</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-50 dark:divide-slate-800 bg-white dark:bg-slate-900 uppercase tracking-tight font-bold">
 {COST_COMPARISON.slice(0, 6).map((row) => (
 <tr key={row.procedure} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
 <td className="py-5 px-8 text-slate-900 dark:text-white">{row.procedure}</td>
 <td className="py-5 px-8 text-center text-green-600 dark:text-green-400">{row.indira}</td>
 <td className="py-5 px-8 text-center text-slate-400">{row.usa}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 {/* TRUST SIGNALS */}
 <section className="space-y-16 pt-8">
 <EntityFAQs
 entityType="hospital"
 entityName={`Indira Hospital (${country.name})`}
 entitySlug="international"
 title={`Travel & Visa FAQs — ${country.name}`}
 description="Answers to your clinical and logistical queries."
 />
 <EntityReviews
 entityType="hospital"
 entityName={`Indira Hospital (${country.name})`}
 entitySlug="international"
 title={`Country Success Stories`}
 description={`Verified experiences from patients across ${country.region}.`}
 />
 </section>

 </div>

 {/* SIDEBAR CONCIERGE */}
 <aside className="lg:col-span-1">
 <div className="lg:sticky lg:top-24 space-y-8">
 
 {/* BOOKING CARD */}
 <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-[40px] pointer-events-none" />
 <h3 className="font-black text-2xl uppercase tracking-tighter mb-2">Free <br /><span className="text-fuchsia-400">Consultation</span></h3>
 <p className="text-slate-400 text-xs mb-8 font-medium leading-relaxed">
 Receive a detailed treatment plan and cost estimate within hours. No commitment.
 </p>
 <a href={waUrl} target="_blank" rel="noopener noreferrer"
 className="w-full flex items-center justify-center gap-3 px-6 py-5 bg-green-500 hover:bg-green-400 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-900/40 uppercase tracking-widest text-[10px] mb-4">
 <MessageCircle className="w-5 h-5" /> WhatsApp Desk
 </a>
 <div className="text-center pt-2">
 <p className="text-[10px] font-black text-fuchsia-300 uppercase tracking-widest animate-pulse">Average response: 45 mins</p>
 </div>
 </div>

 {/* DOCTORS MINI SECTION */}
 <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
 <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-widest mb-6">Expert Panel</h3>
 <div className="space-y-4">
 {featuredDoctors.map((doc: any) => (
 <Link href={`/doctor/${doc.department?.slug || "specialist"}/${doc.slug}`} key={doc.slug}
 className="flex items-center gap-4 group">
 {doc.image && (
 <Image src={getImageUrl(doc.image)} alt={doc.name} width={48} height={48}
 className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all border border-slate-100 dark:border-slate-800" />
 )}
 <div className="min-w-0">
 <p className="font-black text-slate-900 dark:text-white text-[11px] uppercase tracking-tight group-hover:text-fuchsia-600 transition-colors truncate">{doc.name}</p>
 <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest truncate">{doc.designation}</p>
 </div>
 </Link>
 ))}
 </div>
 <Link href="/doctors" className="flex items-center justify-center gap-2 mt-8 text-[10px] font-black text-fuchsia-600 uppercase tracking-widest hover:translate-x-1 transition-all">
 View Full Team <ArrowRight className="w-3 h-3" />
 </Link>
 </div>

 {/* QUICK LINKS */}
 <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800">
 <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-widest mb-6">Resources</h3>
 <div className="space-y-2">
 {[
 { href: "/patients/international/cost-estimator", label: "Cost Estimator" },
 { href: "/patients/insurance", label: "Insurance Guide" },
 { href: "/patients/visiting-our-main-campus", label: "Campus Guide" },
 { href: "/patients/lodging", label: "Accommodations" },
 ].map((link, i) => (
 <Link key={i} href={link.href} className="flex items-center justify-between p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-fuchsia-600">{link.label}</span>
 <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-fuchsia-600" />
 </Link>
 ))}
 </div>
 </div>

 </div>
 </aside>
 </div>
 </SectionContainer>

 {/* FINAL CTA ENTRANCE */}
 <section className="bg-slate-900 py-32 relative overflow-hidden text-center rounded-t-[5rem]">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.1),transparent_70%)] pointer-events-none" />
 <div className="max-w-4xl mx-auto px-6 relative z-10">
 <h2 className="elite-section-title text-white mb-10 uppercase">Indira <br /><span className="text-fuchsia-500">Global Care.</span></h2>
 <p className="text-xl text-slate-400 font-light mb-16 leading-relaxed">Join 15,000+ international patients who transformed their lives at Indira Hospital.</p>
 <a href={waUrl} target="_blank" rel="noopener noreferrer"
 className="inline-flex items-center gap-4 px-12 py-6 bg-green-600 hover:bg-green-500 text-white font-black rounded-[2.5rem] shadow-2xl shadow-green-900/40 text-xl transition-all hover:scale-105">
 <MessageCircle className="w-6 h-6" /> WhatsApp Enquire
 </a>
 </div>
 </section>
 </main>
 );
}
