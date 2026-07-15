import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Plane, Shield, Clock, MessageCircle, Phone, ArrowRight, CheckCircle2, ChevronRight, Globe, HelpCircle, Globe2, FileText, Sparkles, Activity } from "lucide-react";
import { HeartCardiogram, Stethoscope } from "healthicons-react/outline";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui/section-container";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import Image from "next/image";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

import { constructMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = constructMetadata({
 title: "Medical Tourism India | Best Affordable Hospital for International Patients",
 description: "Indira Super Speciality Hospital welcomes patients from around the world. High-quality medical care, dedicated international desk, and seamless travel support in Vellore, India.",
 path: "/patients/international"
});


const PROCESS_STEPS = [
 {
 title: "Online Consultation",
 desc: "Send your reports and get a free medical opinion from our experts via high-definition video link.",
 icon: <MessageCircle className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
 },
 {
 title: "Visa Assistance",
 desc: "We provide official medical invitation letters for fast-track M-Visa processing and documentation.",
 icon: <FileText className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
 },
 {
 title: "Travel Support",
 desc: "Dedicated VIP pickup from Chennai (MAA) airport and seamless local transport in Vellore.",
 icon: <Plane className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
 },
 {
 title: "Care & Recovery",
 desc: "World-class surgery followed by personalized rehabilitation, private suite recovery, and medical follow-up.",
 icon: <HeartCardiogram className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
 }
];

export default function InternationalPatientsPage() {
 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-800 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
 {/* ELITE GLOBAL HERO */}
 <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none" />
 <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] will-change-transform transform-gpu opacity-50 pointer-events-none" />

 <SectionContainer className="relative z-10 text-center">
 <div className="max-w-4xl mx-auto">
 <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
 <Globe2 className="w-4 h-4" /> Global Tourism Hub
 </span>
  <h1 className="elite-hero-title text-white mb-10 text-center">
  Leading Medical Tourism <br />
  <span className="elite-gradient-text text-3xl sm:text-4xl">Hospital in India.</span>
  </h1>
 <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
 Indira Super Speciality Hospital provides advanced medical treatments to patients from over 50 countries with dedicated 1-on-1 support for travel, accommodation, and translation.
 </p>
 </div>
 </SectionContainer>
 </section>

 {/* FLOATING QUICK STATS */}
 <SectionContainer className="relative z-20 -mt-20 max-w-6xl mx-auto px-4">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 sm:p-4 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
 {[
 { label: "Countries Served", val: "50+" },
 { label: "Expert Doctors", val: "15+" },
 { label: "Cost Savings", val: "Up to 70%" },
 { label: "Waiting Time", val: "Zero" }
 ].map((stat, i) => (
 <div key={i} className="group bg-white dark:bg-slate-900 rounded-2xl p-6 text-center shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-fuchsia-200 transition-all duration-300">
 <div className="text-3xl font-black text-slate-800 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500 transition-colors mb-1">{stat.val}</div>
 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
 </div>
 ))}
 </div>
 </SectionContainer>

 {/* WHY CHOOSE INDIA (PREMIUM E-COMMERCE LAYOUT) */}
 <SectionContainer id="why-india" className="py-24 max-w-7xl mx-auto">
 <div className="grid lg:grid-cols-2 gap-16 items-center">
 <div className="order-2 lg:order-1 relative group">
 <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 relative z-10">
 <div className="absolute inset-0 bg-slate-900 dark:bg-slate-900 group-hover:bg-transparent transition-colors duration-700 z-10" />
 <Image src="/images/hospital/Hospital view.webp"
 alt="Patient Care at Indira Hospital" fill className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
 </div>

 {/* Floating JCI Badge */}
 <div className="absolute -bottom-8 -right-8 lg:-left-8 lg:right-auto bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-2xl border border-white max-w-xs z-20 hover:-translate-y-2 transition-transform duration-500">
 <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition opacity duration-500"></div>
 <div className="relative bg-white dark:bg-slate-900 rounded-[1.5rem] p-5">
 <div className="flex items-center gap-3 mb-3">
 <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
 <Sparkles className="w-5 h-5 text-amber-500" />
 </div>
 <span className="font-black text-slate-900 dark:text-white text-lg">JCI Standards</span>
 </div>
 <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">We enforce strict international safety protocols and surgical hygiene standards for every global patient.</p>
 </div>
 </div>
 </div>

 <div className="order-1 lg:order-2">
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs font-bold tracking-widest uppercase mb-6 border border-fuchsia-100">
 <Stethoscope className="w-4 h-4" /> Global Hub
 </div>
 <h2 className="elite-section-title mb-10 text-slate-900 dark:text-white">
 Why Choose <br /> <span className="text-fuchsia-600">Health Tourism in India?</span>
 </h2>
 <div className="space-y-6">
 {[
 { t: "Superior Quality", d: "Surgeons trained at top global institutions with decades of specialized, complex case experience." },
 { t: "Affordable Tertiary Care", d: "Access high-end robotic surgeries at 60-80% lower cost compared to the UK, USA, or Singapore." },
 { t: "Advanced Logistics", d: "Seamless e-medical visas (M-Visa) and dedicated airport-to-hospital support chains." },
 { t: "Zero Language Barriers", d: "Fluent English medical staff, plus dedicated translators available for Arabic, French, and Russian." }
 ].map((item, i) => (
 <div key={i} className="group flex gap-5 items-start">
 <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
 <CheckCircle2 className="w-6 h-6 text-fuchsia-500 group-hover:text-white transition-colors" />
 </div>
 <div className="pt-1">
 <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-fuchsia-700 transition-colors">{item.t}</h3>
 <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.d}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </SectionContainer>

 {/* SEAMLESS PROCESS BENTO */}
 <section id="process" className="py-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-slate-900 -skew-y-3 origin-bottom-right scale-110 z-0"></div>
 <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu z-0" />

 <SectionContainer className="relative z-10 max-w-7xl mx-auto">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <h2 className="elite-section-title mb-6 text-white">Our Seamless Process</h2>
 <p className="text-xl text-slate-400 font-light leading-relaxed">Continuous, step-by-step concierge support from your first global inquiry to your final localized recovery.</p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {PROCESS_STEPS.map((step, i) => (
 <div key={i} className="group bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:bg-slate-800 hover:border-fuchsia-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
 <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-fuchsia-500/10 transition-colors duration-500">0{i + 1}</div>
 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

 <div className="relative z-10">
 <div className="mb-8 flex w-16 h-16 items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 transition-all duration-500 shadow-lg">
 {step.icon}
 </div>
 <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
 <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">{step.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </SectionContainer>
 </section>

 {/* RECOMMENDED TREATMENTS FOR GLOBAL PATIENTS */}
 <SectionContainer className="py-24 bg-slate-900 overflow-hidden relative rounded-[3rem] sm:rounded-[5rem]">
 <div className="grid lg:grid-cols-2 gap-16 items-center">

 <div>
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-xs font-bold uppercase tracking-widest mb-10">
 <Activity className="w-4 h-4" /> Specialized Care
 </span>
 <h2 className="elite-section-title text-white mb-10">
 High-Impact Treatments <br />
 <span className="text-fuchsia-400">for Global Patients.</span>
 </h2>
 <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
 Our hospital is a world-renowned center for minimally invasive surgeries. International patients choose us for precision engineering and rapid recovery protocols.
 </p>

 <div className="grid sm:grid-cols-2 gap-6">
 {[
 { t: "Cardiology", d: "USFDA Drug-Eluting Stents", url: "/doctor/near-me/treat/cardiology/heart-angioplasty" },
 { t: "Orthopaedics", d: "Computer Navigated TKR", url: "/doctor/near-me/treat/orthopaedics/total-knee-replacement" },
 { t: "Proctology", d: "German Diode Laser Tech", url: "/doctor/near-me/treat/general-surgery/laser-piles-treatment" },
 { t: "Urology", d: "RIRS Incisionless Laser", url: "/doctor/near-me/treat/urology/laser-kidney-stone-surgery" }
 ].map((item, i) => (
 <Link key={i} href={item.url} className="group/item p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:bg-slate-900 hover:border-fuchsia-500/50 transition-all duration-300">
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover/item:scale-110 transition-transform">
 <Shield className="w-5 h-5" />
 </div>
 <ArrowRight className="w-4 h-4 text-slate-600 group-hover/item:text-fuchsia-400 group-hover/item:translate-x-1 transition-all" />
 </div>
 <h3 className="font-bold text-white text-lg mb-1">{item.t}</h3>
 <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">{item.d}</p>
 </Link>
 ))}
 </div>
 </div>

 <div className="relative">
 <div className="absolute -inset-4 bg-fuchsia-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
 <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 lg:p-12 relative overflow-hidden">
 <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
 <Globe className="w-6 h-6 text-fuchsia-400" /> Patient Origin
 </h3>
 <div className="space-y-6">
 {[
 { country: "Nigeria", major: "Cardiology & Ortho", traffic: "High" },
 { country: "UAE / Oman", major: "Laser Proctology", traffic: "Steadily Rising" },
 { country: "USA / UK", major: "Dental & General Surgery", traffic: "Surgical Tourism" },
 { country: "Ethiopia", major: "Urology & Oncology", traffic: "Govt. Referred" }
 ].map((row, i) => (
 <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:border-slate-800 transition-all">
 <div>
 <div className="font-black text-white">{row.country}</div>
 <div className="text-[10px] text-fuchsia-400 uppercase font-bold tracking-widest">{row.major}</div>
 </div>
 <div className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-black rounded-full uppercase tracking-tighter">
 {row.traffic}
 </div>
 </div>
 ))}
 </div>
 <div className="mt-12 p-6 bg-fuchsia-600 rounded-2xl text-center">
 <div className="text-white font-black text-lg mb-1">Save up to 70%</div>
 <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Global Medical Standards</div>
 </div>
 </div>
 </div>
 </div>
 </SectionContainer>

 {/* GLOBAL OUTREACH HUB: COUNTRY-SPECIFIC PATHWAYS */}
 <SectionContainer id="global-locations" className="py-24 max-w-7xl mx-auto">
 <div className="text-center mb-16">
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
 <Globe className="w-4 h-4" /> Global Presence
 </span>
 <h2 className="elite-section-title text-slate-900 dark:text-white">
 Specialized Care for <br />
 <span className="text-indigo-600">Your Home Country.</span>
 </h2>
 <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium text-lg lg:text-xl font-light">
 Explore dedicated resources, cost estimates, and visa assistance tailored to your specific region and the common clinical needs of your community.
 </p>
 </div>

 {/* Primary Flagship Countries (Top 8) */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
 {INTERNATIONAL_COUNTRIES.slice(0, 8).map((country) => (
 <Link 
 key={country.slug}
 href={`/patients/international/${country.slug}`}
 className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
 >
 <div className="absolute top-0 right-0 p-8 text-5xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0 pointer-events-none">
 {country.flag}
 </div>
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 pr-12">{country.name}</h3>
 <p className="text-[10px] text-indigo-600 font-black uppercase tracking-[0.2em] mb-6">{country.region}</p>
 
 <div className="space-y-3 mb-8 flex-grow">
 {country.common_treatments.slice(0, 3).map((t, index) => (
 <div key={index} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
 <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600">
 <CheckCircle2 className="w-3.5 h-3.5" />
 </div>
 {t}
 </div>
 ))}
 </div>

 <div className="pt-6 border-t border-slate-50 dark:border-slate-800">
 <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Clinical Access</div>
 <div className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
 <Plane className="w-4 h-4 text-indigo-400" /> {country.flight_duration.split('(')[0]}
 </div>
 </div>

 <div className="mt-8 flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
 Country Guide <ArrowRight className="w-4 h-4" />
 </div>
 </Link>
 ))}
 </div>

 {/* Secondary Discovery Grid (Remaining Countries) */}
 <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-3">
 <Globe2 className="w-6 h-6 text-indigo-600" /> All Countries We Serve
 </h3>
 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
 {INTERNATIONAL_COUNTRIES.slice(8).map((country) => (
 <Link 
 key={country.slug}
 href={`/patients/international/${country.slug}`}
 className="flex items-center gap-3 p-4 bg-slate-50/50 dark:bg-slate-950 rounded-2xl border border-transparent hover:border-indigo-400/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
 >
 <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{country.flag}</span>
 <span className="text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 truncate tracking-tight">{country.name}</span>
 </Link>
 ))}
 </div>
 </div>
 </SectionContainer>

 {/* ASSISTANCE CTA BENTO */}
 <SectionContainer className="pb-24 max-w-7xl mx-auto px-4">
 <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-20">
 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] will-change-transform transform-gpu group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] will-change-transform transform-gpu" />
 <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
 <Globe2 className="w-96 h-96" />
 </div>

 <div className="relative z-10 w-full max-w-4xl">
 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
 <Plane className="w-8 h-8 text-fuchsia-300" />
 </div>
 <h2 className="elite-section-title text-white mb-8">
 Ready for a Free <br /> <span className="text-fuchsia-400">Cost Estimate?</span>
 </h2>
 <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
 Share your medical reports via secure WhatsApp or Email. Our senior specialists will review your case and construct a comprehensive treatment plan within 24 hours.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto">
 <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Global Patient Enquiry: I am an international patient seeking a cost estimate and visa assistance at Indira Super Speciality Hospital, India.")}`} target="_blank" rel="noopener noreferrer" className="group/btn relative flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
 <span className="relative z-10">WhatsApp Global Desk</span>
 <MessageCircle className="w-5 h-5 ml-3 relative z-10 group-hover/btn:rotate-12 transition-transform" />
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
 </a>

 <a href="mailto:international@indira-hospital.com" className="flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 text-white border border-slate-200 dark:border-slate-800 font-bold rounded-2xl hover:bg-white dark:bg-slate-900 transition-colors">
 <FileText className="w-5 h-5 mr-3 text-fuchsia-400" />
 Email Reports
 </a>
 </div>
 </div>
 </div>
 </SectionContainer>

 {/* TRUST SIGNALS */}
 <SectionContainer className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="international"
 title="Global Patient Services FAQs"
 description="Important information for patients traveling to India for surgery."
 />
 <EntityReviews
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="international"
 title="Global Patient Success Stories"
 description="Real experiences from international patients treated at Indira Hospital."
 />
 </div>
 </SectionContainer>

 <EntityCardSection type="services" title="Elite Medical Units" subtitle="Our Specialities" limit={6} className="bg-white dark:bg-slate-950 border-t" />
 <InternalLinkGrid type="treatments" title="Heroic Procedures in India" subtitle="Clinical Excellence" limit={8} className="bg-slate-50 dark:bg-slate-900 border-y" />
 <InternalLinkGrid type="locations" title="Our Network Across Tamil Nadu" subtitle="Regional Presence" limit={12} className="bg-white dark:bg-slate-950 border-b" />
 <InternalLinkGrid type="health-packages" title="Master Health Checkups" subtitle="Wellness Screening" limit={8} className="bg-slate-50 dark:bg-slate-900 border-b" />
 <InternalLinkGrid type="diagnostics" title="NABL Accredited Diagnostics" subtitle="Lab & Imaging" limit={12} className="bg-white dark:bg-slate-950 border-b" />
 </main>
 );
}
