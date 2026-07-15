import { Hero } from "@/components/sections/Hero";
import { LeadershipMessage } from "@/components/sections/LeadershipMessage";
import { StatsBanner } from "@/components/sections/stats-banner";
import { TrustStrip } from "@/components/sections/trust-strip";
import { DepartmentGridSection } from "@/components/sections/DepartmentGridSection";
import { DoctorHighlightSection } from "@/components/sections/DoctorHighlightSection";
import { SignatureTreatments } from "@/components/sections/signature-treatments";
import { Testimonials } from "@/components/sections/testimonials";
import { QuickLinks } from "@/components/sections/quick-links";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { HomeCareFlow } from "@/components/sections/HomeCareFlow";
import { HomePromoLinks } from "@/components/sections/HomePromoLinks";
import { FacilitiesShowcase } from "@/components/sections/FacilitiesShowcase";
import { HomeUpcomingEvents } from "@/components/sections/HomeUpcomingEvents";
import { HomeLatestNews } from "@/components/sections/HomeLatestNews";
import { InsuranceMarquee } from "@/components/sections/InsuranceMarquee";
import { HOME_PAGE_CONTENT } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { MessageCircle, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Electricity } from "healthicons-react/outline";
import { SectionContainer } from "@/components/ui/section-container";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { PatientResources } from "@/components/sections/patient-resources";
import { ProviderResources } from "@/components/sections/provider-resources";
import { UnifiedEntitySection } from "@/components/seo/UnifiedEntitySection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import React from "react";
import HospitalSEOBlock from "@/components/HospitalSEOBlock";
import AioKnowledgeBlock from "@/components/seo/AioKnowledgeBlock";
import { ShieldCheck, Award, Users, Globe } from "lucide-react";

import { constructMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = constructMetadata({
 title: "Best Hospital in Vellore | Top Specialists & Same-Day Recovery",
 description: "Experience world-class surgical care at Indira Super Speciality Hospital in Vellore. 15,000+ successful procedures by board-certified doctors. Book your consultation today!",
 path: "/",
 keywords: [
 "best hospital in Vellore",
 "super speciality hospital Tamil Nadu",
 "laser surgery hospital India",
 "laparoscopic surgery Vellore",
 "NABH accredited hospital Vellore",
 "top doctors in Vellore Tamil Nadu",
 "cashless insurance hospital Vellore",
 "medical tourism India",
 "affordable surgery India",
 "same-day discharge surgery Vellore"
 ]
});


const SemanticLinkBlock = () => (
 <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
 <h2 className="text-sm font-bold text-subtle-on-light dark:text-slate-500 uppercase tracking-wider">Explore the Best Hospital in Vellore</h2>
 <div className="flex gap-4 text-sm font-bold uppercase tracking-widest text-fuchsia-600">
 <a href="https://www.nabh.co/"target="_blank"rel="noopener noreferrer"className="hover:text-fuchsia-700 underline">NABH Accredited</a>
 <a href="https://main.mohfw.gov.in/"target="_blank"rel="noopener noreferrer"className="hover:text-fuchsia-700 underline">Govt Healthcare India</a>
 </div>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
 <div>
 <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Top Specialties</h3>
 <ul className="space-y-2">
 <li><Link href="/departments/cardiology"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Cardiology at Best Hospital in Vellore</Link></li>
 <li><Link href="/departments/orthopaedics"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Orthopaedics in Vellore</Link></li>
 <li><Link href="/departments/general-surgery"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">General Surgery Specialists</Link></li>
 <li><Link href="/departments/obstetrics-gynecology-reproductive-medicine"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Maternity & Gynaecology</Link></li>
 <li><Link href="/departments/neurology"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Neurology Care</Link></li>
 </ul>
 </div>
 <div>
 <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Featured Treatments</h3>
 <ul className="space-y-2">
 <li><Link href="/doctor/near-me/treat/orthopaedics/robotic-knee-replacement"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Knee Replacement</Link></li>
 <li><Link href="/doctor/near-me/treat/cardiology/angioplasty"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Heart Angioplasty</Link></li>
 <li><Link href="/doctor/near-me/treat/proctology/laser-piles-treatment"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Laser Piles Surgery</Link></li>
 <li><Link href="/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair-surgery"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Laparoscopic Hernia</Link></li>
 <li><Link href="/doctor/near-me/treat/urology/laser-kidney-stone-surgery"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Laser Kidney Stone</Link></li>
 </ul>
 </div>
 <div>
 <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Patient Care</h3>
 <ul className="space-y-2">
 <li><Link href="/doctor/near-me"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Find Doctors Near You</Link></li>
 <li><Link href="/patients/international"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">International Patients</Link></li>
 <li><Link href="/patients/insurance"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Cashless Insurance</Link></li>
 <li><Link href="/patients/visiting-our-main-campus"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Visiting Campus</Link></li>
 <li><Link href="/health-packages"prefetch={false} className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Health Checkup Packages</Link></li>
 </ul>
 </div>
 <div>
 <h3 className="font-semibold text-slate-900 dark:text-white mb-3">International Tools</h3>
 <ul className="space-y-2">
 <li><Link href="/patients/international/cost-estimator"className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Treatment Cost Estimator</Link></li>
 <li><Link href="/patients/international/second-opinion"className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Free Second Opinion</Link></li>
 <li><Link href="/patients/international/testimonials"className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Patient Testimonials</Link></li>
 <li><Link href="/patients/medical-visa-india"className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">Medical Visa Assistance</Link></li>
 <li><Link href="/patients/cmc-vellore-alternative"className="text-slate-600 dark:text-subtle-on-light hover:text-fuchsia-600">CMC Vellore Alternative</Link></li>
 </ul>
 </div>
 </div>
 </div>
 </section>
);
export default function Home() {
 return (
 <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900">
 <Hero />
 <React.Suspense fallback={<div className="min-h-64 bg-background"aria-hidden="true"/>}>
 <LeadershipMessage />
 <StatsBanner />

 {/* REFINED TRUST BAR */}
 <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-700 py-16 relative z-10 -mt-12 mb-12 rounded-[3rem] mx-4 sm:mx-8 shadow-xl shadow-slate-200/50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <p className="text-center font-black text-subtle-on-light tracking-[0.3em] uppercase mb-10 text-sm flex items-center justify-center gap-4">
 <span className="h-px w-12 bg-slate-200 dark:bg-slate-700"/>
 {HOME_PAGE_CONTENT.ACCREDITATION_TITLE}
 <span className="h-px w-12 bg-slate-200 dark:bg-slate-700"/>
 </p>
 <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
 {HOME_PAGE_CONTENT.ACCREDITATION_BADGES.map((badge, index) => (
 <div key={index} className="group flex items-center gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 hover:bg-fuchsia-50 dark:bg-fuchsia-950 transition-all duration-300 transform hover:-translate-y-1">
 <div className="w-2 h-2 rounded-full bg-fuchsia-500 opacity-40 group-hover:opacity-100 transition-opacity"/>
 <span className="text-sm font-black text-slate-500 dark:text-subtle-on-light group-hover:text-fuchsia-700 tracking-wider">
 {badge}
 </span>
 </div>
 ))}
 </div>
 </div>
 </section>

 <div className="space-y-20 pb-32">
 <div className="relative">
 <HomeCareFlow />
 <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12 flex justify-end">
 <Link href="/process"className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase tracking-widest text-sm hover:text-fuchsia-700 transition-colors">
 Understand Our Full Process
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>
 <HomePromoLinks />
 <SemanticLinkBlock />
 <HomeLatestNews />
 <HomeUpcomingEvents />

 <div className="relative">
 <TrustStrip />
 <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12 flex justify-end tracking-tighter">
 <Link href="/quality-accreditations"className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase tracking-widest text-sm hover:text-fuchsia-700 transition-colors">
 Our Safety Standards & NABH
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>
 <div className="relative">
 <FacilitiesShowcase />
 <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12 flex justify-end">
 <Link href="/facilities"className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase tracking-widest text-sm hover:text-fuchsia-700 transition-colors">
 Explore All Facilities
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>
 <DepartmentGridSection />
 <SignatureTreatments />
 <div className="relative">
 <WhyChooseUs />
 <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12 flex justify-end">
 <Link href="/why-choose-indira"className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase tracking-widest text-sm hover:text-fuchsia-700 transition-colors">
 Our Values & Mission
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>
 <div className="relative">
 <InsuranceMarquee />
 <div className="max-w-7xl mx-auto px-6 mt-4 mb-8 flex justify-center">
 <Link href="/patients/insurance"className="group flex items-center gap-3 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-subtle-on-light font-bold hover:text-fuchsia-600">
 View All 30+ Insurance Partners
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>
 <DoctorHighlightSection />
 <Testimonials />
 <div className="relative">
 <HealthLibraryCard />
 <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12 flex justify-end">
 <Link href="/health-library"prefetch={false} className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase tracking-widest text-sm hover:text-fuchsia-700 transition-colors">
 Access Full Health Library
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>
 <QuickLinks />
 </div>

 <PatientResources />
 <div className="relative">
 <ProviderResources />
 <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12 flex justify-end">
 <Link href="/provider-resources"className="group flex items-center gap-2 text-fuchsia-600 font-black uppercase tracking-widest text-sm hover:text-fuchsia-700 transition-colors">
 For Referring Physicians
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </Link>
 </div>
 </div>

 {/* UNIFIED ENTITY/SEO SECTIONS */}
 <UnifiedEntitySection type="services"title="Popular Treatments"subtitle="Browse Services"featuredLimit={6} linkLimit={16} className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-700"/>
 <UnifiedEntitySection type="locations"title="Hospital Near You"subtitle="Our Coverage"featuredLimit={6} linkLimit={16} className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50"/>

 {/* ELITE SIGNATURE HOME CTA */}
 <SectionContainer className="pb-32 px-4">
 <div className="bg-gradient-to-br from-slate-900 via-pink-950 to-fuchsia-950 rounded-[4rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-24">
 {/* Ambient Background Lights */}
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu group-hover/cta:bg-fuchsia-500/20 transition-colors duration-1000 opacity-50"/>
 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] will-change-transform transform-gpu opacity-40"/>
 <div className="absolute inset-0 bg-[url(/images/hospital/Hospital.webp)] opacity-[0.03] mix-blend-overlay pointer-events-none"/>

 <div className="relative z-10 w-full max-w-4xl">
 <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-10 shadow-[0_0_40px_rgba(20,184,166,0.3)] group-hover/cta:scale-110 transition-transform duration-500">
 <Sparkles className="w-10 h-10 text-fuchsia-300"/>
 </div>

 <h2 className="elite-hero-title mb-10 group-hover/cta:grayscale-0 transition-all duration-1000">
 {HOME_PAGE_CONTENT.CTA_HEADING.split(' ').slice(0, -1).join(' ')} <br className="hidden sm:block"/>
 <span className="elite-gradient-text">
 {HOME_PAGE_CONTENT.CTA_HEADING.split(' ').pop()}
 </span>
 </h2>

 <p className="text-xl sm:text-2xl text-slate-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
 {HOME_PAGE_CONTENT.CTA_SUBTEXT}
 </p>

 <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-4xl mx-auto">
 <a
 href="/book-appointment"
 className="elite-button-primary w-full sm:w-auto text-base"
 >
 <span className="relative z-10">{HOME_PAGE_CONTENT.CTA_BUTTON_BOOK}</span>
 <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform"/>
 </a>

 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}`}
 target="_blank"
 rel="noopener noreferrer"
 className="elite-button-secondary w-full sm:w-auto bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-100 border-fuchsia-500/30 text-base"
 >
 <MessageCircle className="w-5 h-5 mr-3 text-fuchsia-400 group-hover/whatsapp:scale-110 transition-transform"/>
 WhatsApp Us
 </a>

 <a
 href="/contact"
 className="elite-button-secondary w-full sm:w-auto text-base"
 >
 <Phone className="w-5 h-5 mr-3 text-subtle-on-light"/>
 {HOME_PAGE_CONTENT.CTA_BUTTON_CONTACT}
 </a>
 </div>

 <div className="mt-16 flex items-center justify-center gap-8 opacity-40 grayscale group-hover/cta:grayscale-0 group-hover/cta:opacity-70 transition-all duration-700">
 <div className="flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase">
 <Electricity className="w-4 h-4 text-fuchsia-400"/> Professional
 </div>
 <div className="flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase">
 <Electricity className="w-4 h-4 text-fuchsia-400"/> Precise
 </div>
 <div className="flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase">
 <Electricity className="w-4 h-4 text-fuchsia-400"/> Patient-First
 </div>
 </div>
 </div>
 </div>
 </SectionContainer>
 
 <SectionContainer className="pb-24">
 <AioKnowledgeBlock 
 title="Best Hospital in Vellore: Clinical Trust & Facts"
 items={[
 { label: "NABH Accreditation", value: "Fully Verified Patient Safety Protocols", icon: ShieldCheck },
 { label: "Surgical Success", value: "15,000+ Procedures by Board-Certified Surgeons", icon: Award },
 { label: "Patient Care", value: "Specialized Same-Day Discharge Options", icon: Users },
 { label: "Global Reach", value: "Dedicated International Medical Tourism Hub", icon: Globe },
 ]}
 />
 </SectionContainer>

 <HospitalSEOBlock />
 </React.Suspense>
 </main>
 );
}

// trigger hmr
