import { Metadata } from "next";
import Link from "next/link";
import {
 FileText, CheckCircle2, Clock, Globe2, MessageCircle, Phone,
 ChevronRight, ArrowRight, Shield, AlertCircle, Sparkles
} from "lucide-react";

import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";

import { siteConfig } from "@/config/site";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
 title: "Medical Visa for India — Complete Guide for International...",
 description: "Complete guide to getting an Indian Medical Visa (M-Visa) for treatment in Vellore. Indira Hospital issues official invitation letters within 24 hours. ...",
 keywords: [
 "medical visa India", "M-Visa India", "Indian medical visa", "visa for treatment India",
 "hospital invitation letter India", "medical visa Vellore", "international patients India visa",
 ],
};

const STEPS = [
 { icon: "📋", title: "Hospital Invitation Letter", desc: "Request the official invitation letter from Indira Hospital via WhatsApp or email. We issue it within 24 hours of your appointment confirmation. This is a mandatory document for the visa."},
 { icon: "📄", title: "Document Preparation", desc: "Gather: valid passport (6+ months), passport-size photos, completed visa application form, hospital invitation letter, medical records, and proof of financial means (bank statement)."},
 { icon: "🌐", title: "Online Application", desc: "Apply via the Indian Visa Online portal (indianvisaonline.gov.in) for an e-Medical Visa (available for 150+ countries), or visit the nearest Indian Embassy in your country."},
 { icon: "✅", title: "Visa Issuance", desc: "M-Visa is typically issued within 3–7 business days. The e-Medical Visa is valid for 60 days with double entry. Extensions in India are possible via FRRO with our support."},
 { icon: "✈️", title: "Arrival & Pickup", desc: "Fly to Chennai International Airport (MAA). Indira Hospital arranges complimentary pickup for international guests — the hospital is just a 2.5-hour drive from the terminal."},
];

const DOCS_CHECKLIST = [
 "Valid passport (at least 6 months remaining)",
 "Completed Indian Medical Visa (M-Visa) Application Form",
 "2 recent passport-size photographs (white background)",
 "Official Hospital Invitation Letter from Indira Hospital (provided within 24 hrs)",
 "Comprehensive medical reports, scans, and diagnosis documents",
 "Proof of financial capacity (recent bank statement / sponsor letter)",
 "Travel insurance documents (strongly recommended)",
 "Confirmed return flight ticket and accommodation confirmation",
];

const WA = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I need a hospital invitation letter for my Indian Medical Visa. Please help.")}`;

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 name: "How to Get a Medical Visa for India",
 description: "Step-by-step guide for international patients applying for an Indian Medical Visa (M-Visa) to receive treatment at Indira Hospital, Vellore.",
 step: STEPS.map((s, i) => ({
 "@type": "HowToStep",
 position: i + 1,
 name: s.title,
 text: s.desc,
 })),
};

export default function MedicalVisaIndiaPage() {
 return (
 <main className="min-h-screen bg-white dark:bg-slate-950">
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 {/* ELITE GLOBAL HERO */}
 <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"/>
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none"/>
 <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none"/>

 <SectionContainer className="relative z-10">
 <div className="max-w-4xl">
 <nav className="flex items-center text-sm text-subtle-on-light mb-8 gap-1 flex-wrap">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/patients/international"className="hover:text-white transition-colors">International</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-blue-400 font-medium">Medical Visa Guide</span>
 </nav>

 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-300 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg shadow-blue-500/20">
 <FileText className="w-4 h-4"/> Official M-Visa Support
 </span>
 
 <h1 className="elite-hero-title mb-8">
 Indian Medical <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400 font-black">Visa — Complete Guide.</span>
 </h1>
 
 <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
 We issue official hospital invitation letters within <strong className="text-white">24 hours</strong>. This guide explains how to secure your M-Visa safely and efficiently for treatment in Vellore.
 </p>

 <div className="flex flex-col sm:flex-row gap-4">
 <a href={WA} target="_blank"rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/25">
 <FileText className="w-4 h-4"/> Request Invitation Letter
 </a>
 <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-bold rounded-2xl hover:bg-white dark:bg-slate-900 transition-all">
 <Phone className="w-4 h-4 text-fuchsia-400"/> WhatsApp Coordinator
 </a>
 </div>
 </div>
 </SectionContainer>
 </section>

 <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
 <div className="grid lg:grid-cols-3 gap-16">
 <div className="lg:col-span-2 space-y-16">
 
 {/* WARNING BLOCK */}
 <div className="relative group overflow-hidden bg-amber-500/10 rounded-[2.5rem] p-10 border border-amber-500/20 shadow-lg">
 <div className="relative z-10 flex items-start gap-6">
 <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
 <AlertCircle className="w-8 h-8"/>
 </div>
 <div>
 <h2 className="text-2xl font-black text-amber-900 dark:text-amber-200 mb-3 tracking-tight uppercase">Critical: Apply for M-Visa ONLY</h2>
 <p className="text-amber-800 dark:text-amber-300/80 font-medium leading-relaxed">
 Do not apply for a Tourist Visa for medical treatment. The Indian Medical Visa (M-Visa) is specific for healthcare, allows longer stays, and covers all hospital procedures. Tourist Visas may be rejected if medical purpose is discovered at immigration.
 </p>
 </div>
 </div>
 </div>

 {/* STEP BY STEP BENTO */}
 <section>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-10 uppercase">Visa Process <br /><span className="text-blue-600">Step-by-Step</span></h2>
 <div className="grid gap-6">
 {STEPS.map((step, i) => (
 <div key={i} className="group flex flex-col md:flex-row gap-8 p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
 <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl shadow-inner group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
 {step.icon}
 </div>
 <div>
 <div className="flex items-center gap-3 mb-3">
 <span className="text-xs font-black px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800 uppercase tracking-widest">Phase 0{i+1}</span>
 <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">{step.title}</h3>
 </div>
 <p className="text-slate-500 dark:text-subtle-on-light font-medium leading-relaxed">{step.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* DOCUMENT CHECKLIST BENTO */}
 <section className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 border border-slate-200 dark:border-slate-800 relative overflow-hidden text-white">
 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"/>
 <div className="relative z-10">
 <h2 className="elite-section-title mb-10 uppercase">M-Visa <br /><span className="text-blue-400">Document Checklist</span></h2>
 <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
 {DOCS_CHECKLIST.map((doc, i) => (
 <div key={i} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl hover:bg-white dark:bg-slate-900 transition-colors border border-slate-200 dark:border-slate-800">
 <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0 mt-0.5">
 <CheckCircle2 className="w-4 h-4"/>
 </div>
 <span className="text-slate-300 font-medium text-sm leading-relaxed">{doc}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* COUNTRY LINKS */}
 <section>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-10 uppercase">Country-Specific <br /><span className="text-fuchsia-600">Visa Information</span></h2>
 <div className="grid sm:grid-cols-2 gap-4">
 {INTERNATIONAL_COUNTRIES.filter(c => c.flag).slice(0, 16).map((c) => (
 <Link key={c.slug} href={`/patients/international/${c.slug}`}
 className="group flex items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
 <div className="flex items-center gap-4">
 <span className="text-3xl group-hover:scale-125 transition-transform duration-500">{c.flag}</span>
 <div>
 <p className="font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-1 group-hover:text-blue-600 transition-colors">{c.name}</p>
 <p className="text-xs font-black text-subtle-on-light uppercase tracking-widest leading-none">Visa Guide</p>
 </div>
 </div>
 <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-subtle-on-light group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
 <ArrowRight className="w-5 h-5"/>
 </div>
 </Link>
 ))}
 </div>
 <div className="mt-12 text-center">
 <Link href="/patients/international"className="inline-flex items-center gap-3 px-10 py-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black rounded-2xl hover:bg-slate-200 transition-all uppercase tracking-widest text-sm">
 Browse All 45+ Countries <ArrowRight className="w-5 h-5 text-blue-500"/>
 </Link>
 </div>
 </section>
 </div>

 {/* SIDEBAR BENTO */}
 <div className="lg:col-span-1 space-y-8">
 <div className="lg:sticky lg:top-24 space-y-8">
 
 {/* CALL TO ACTION CARD */}
 <div className="relative group overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 text-white border border-slate-200 dark:border-slate-800 shadow-2xl">
 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"/>
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-blue-400 mb-8 border border-slate-200 dark:border-slate-800">
 <Sparkles className="w-8 h-8"/>
 </div>
 <h3 className="text-2xl font-black mb-4 tracking-tight uppercase leading-tight">Instant Invitation Letter</h3>
 <p className="text-subtle-on-light font-medium mb-10 leading-relaxed text-sm">We provide the official hospital invitation letter required for your M-Visa within 24 hours. Free of cost.</p>
 
 <a href={WA} target="_blank"rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-3 w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 text-lg">
 <MessageCircle className="w-5 h-5 text-green-400"/> WhatsApp Our Desk
 </a>
 </div>
 </div>

 {/* QUICK FACTS BENTO */}
 <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 hover:shadow-xl group">
 <div className="flex items-center gap-4 mb-8">
 <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 border border-indigo-100 dark:border-indigo-800 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
 <Globe2 className="w-6 h-6"/>
 </div>
 <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Visa Quick Facts</h3>
 </div>
 <div className="space-y-4">
 {[
 { l: "Visa Type", v: "Medical Visa (M-Visa)"},
 { l: "Timeline", v: "3–7 Business Days"},
 { l: "Validity", v: "60 Days (Double Entry)"},
 { l: "Invitation", v: "Issued in 24 Hours"},
 { l: "Official Portal", v: "indianvisaonline.gov.in"},
 { l: "Attendant", v: "Attendant Visa (MX)"},
 ].map(({ l, v }) => (
 <div key={l} className="flex flex-col py-3 border-b border-slate-50 dark:border-slate-800 last:border-0 group/row">
 <span className="text-xs font-black text-subtle-on-light dark:text-slate-500 uppercase tracking-widest mb-1 group-hover/row:text-blue-500 transition-colors">{l}</span>
 <span className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{v}</span>
 </div>
 ))}
 </div>
 </div>

 </div>
 </div>
 </div>

 {/* TRUST SIGNALS */}
 <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="medical-visa"
 title="Medical Visa FAQs"
 description="Common questions regarding M-Visa, e-Visas, and FRRO registration."
 />
 <EntityReviews 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="medical-visa"
 title="Visa Support Feedback"
 description="Real stories from patients who used our visa assistance service."
 />
 </div>
 </section>
 </SectionContainer>

 <EntityCardSection type="doctors"title="Specialists for International Care"subtitle="Clinical Excellence"limit={6} className="bg-white dark:bg-slate-950 border-t"/>
 <InternalLinkGrid type="health-packages"title="Wellness Screning Packages"subtitle="Preventive Health"limit={8} className="bg-slate-50 dark:bg-slate-900 border-y"/>
 <InternalLinkGrid type="diagnostics"title="Lab & Imaging Services"subtitle="NABL Accredited"limit={12} className="bg-white dark:bg-slate-950 border-b"/>
 </main>
 );
}
