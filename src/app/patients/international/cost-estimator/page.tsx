import { Metadata } from "next";
import Link from "next/link";
import {
 MessageCircle, ChevronRight, ArrowRight,
 TrendingDown, Shield, Clock, CheckCircle2, Sparkles, Phone, Calculator
} from "lucide-react";
import { EstimatorWidget } from "./EstimatorWidget";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
 title: "Treatment Cost in India vs USA, UK & UAE | Free Estimate ...",
 description: "Get a free personalised medical treatment cost estimate from Indira Super Speciality Hospital, Vellore. Compare costs for knee replacement, bypass surge...",
 keywords: [
 "medical treatment cost India",
 "hospital cost India vs USA",
 "best value medical treatment India",
 "cost of knee replacement India",
 "cost of bypass surgery India",
 "medical tourism cost India",
 "Indira Hospital Vellore prices",
 ],
 openGraph: {
 title: "Treatment Cost in India vs USA, UK & UAE — Indira Hospital Vellore",
 description: "80–95% cost savings vs the West. Get a free personalised cost estimate within 24 hours. Compare 12 major procedures vs USA, UK and UAE costs.",
 },
};

const PROCEDURE_TABLE = [
 { procedure: "Knee Replacement (Unilateral)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+"},
 { procedure: "Hip Replacement", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+"},
 { procedure: "Cardiac Bypass (CABG)", indira: "Transparent Pricing", usa: "Very High Cost", uk: "Premium", uae: "Premium Plus", savings: "95%+"},
 { procedure: "Angioplasty (Stent)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+"},
 { procedure: "Spinal Surgery (Disc)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+"},
 { procedure: "Kidney Transplant", indira: "Transparent Pricing", usa: "Very High Cost", uk: "Premium", uae: "Premium Plus", savings: "95%+"},
 { procedure: "Laparoscopic Surgery", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+"},
 { procedure: "Laser Piles Treatment", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "85%+"},
 { procedure: "Oncology (Chemo cycle)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "85%+"},
 { procedure: "IVF / Infertility Cycle", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "85%+"},
 { procedure: "Cataract Surgery (per eye)", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "80%+"},
 { procedure: "Hernia Repair (Laparoscopic)", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "85%+"},
];

const WHY_AFFORDABLE = [
 { t: "Lower operational costs", d: "Real estate, labour, and admin costs in India are a fraction of Western countries — not a reflection of lower quality."},
 { t: "No insurance overhead", d: "India's healthcare system doesn't carry the massive insurance administration overhead that inflates US hospital bills."},
 { t: "Government subsidies", d: "Government policies actively promote medical tourism — keeping taxes and import duties on medical equipment lower."},
 { t: "Same international equipment", d: "We use Siemens, GE, Stryker, J&J implants and instruments — identical to what US and UK hospitals use."},
];

const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I am an international patient seeking a cost estimate. Please help.")}`;

export default function CostEstimatorPage() {
 return (
 <main className="min-h-screen bg-white dark:bg-slate-950">
 {/* ELITE GLOBAL HERO (GREEN THEME) */}
 <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"/>
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse"/>
 
 <SectionContainer className="relative z-10">
 <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
 <nav className="flex items-center justify-center lg:justify-start text-sm text-subtle-on-light mb-8 gap-1 flex-wrap">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/patients"className="hover:text-white transition-colors">Patients</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/patients/international"className="hover:text-white transition-colors">International</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-emerald-400 font-medium">Cost Estimator</span>
 </nav>

 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-300 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg shadow-emerald-500/20">
 🧮 Free Cost Estimate — Response in 24 Hours
 </span>
 
 <h1 className="elite-hero-title mb-8">
 Treatment Cost in India <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">vs USA, UK & UAE</span>
 </h1>
 
 <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light mb-10">
 NABH-accredited quaternary care with 80–95% institutional cost savings vs the West. Get your personalised estimate today.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <a href={waUrl} target="_blank"rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20">
 <MessageCircle className="w-5 h-5"/> WhatsApp for Free Estimate
 </a>
 <Link href="/patients/international/second-opinion"
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-bold rounded-2xl hover:bg-white dark:bg-slate-900 transition-all">
 Get Second Opinion <ArrowRight className="w-4 h-4 text-emerald-400"/>
 </Link>
 </div>
 </div>
 </SectionContainer>
 </section>

 {/* QUICK STATS BAR */}
 <div className="bg-emerald-700 text-white py-6 border-b border-emerald-800">
 <SectionContainer className="flex flex-wrap justify-between gap-8 text-center sm:text-left">
 {[
 { v: "80–95%", l: "Cost Savings vs USA"},
 { v: "24 hrs", l: "Typical Response Time"},
 { v: "NABH", l: "Quality Accreditation"},
 { v: "Free", l: "Detailed Estimate"},
 ].map((stat, i) => (
 <div key={i} className="flex-1 min-w-[150px]">
 <div className="text-3xl font-black tracking-tight">{stat.v}</div>
 <div className="text-xs font-bold text-emerald-200 uppercase tracking-widest">{stat.l}</div>
 </div>
 ))}
 </SectionContainer>
 </div>

 <SectionContainer className="py-24 max-w-7xl mx-auto space-y-24">
 
 {/* WIDGET SECTION */}
 <div className="relative">
 <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"/>
 <EstimatorWidget />
 </div>

 {/* PRICING TABLE ELITE */}
 <section>
 <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
 <div className="max-w-2xl">
 <h2 className="elite-section-title text-slate-900 dark:text-white uppercase">Procedure <br /><span className="text-emerald-600">Cost Comparison</span></h2>
 <p className="text-slate-500 dark:text-subtle-on-light mt-4 text-lg font-medium">Indicative ranges showing how much you can save without compromising on clinical quality.</p>
 </div>
 <div className="flex gap-2">
 <span className="w-3 h-3 rounded-full bg-emerald-500"/>
 <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800"/>
 <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800"/>
 </div>
 </div>

 <div className="overflow-hidden rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
 <div className="overflow-x-auto">
 <table className="w-full text-left">
 <thead className="bg-slate-900 text-white">
 <tr>
 <th className="py-6 px-8 font-black uppercase tracking-widest text-xs">Procedure Name</th>
 <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-emerald-400">🇮🇳 Indira Hospital</th>
 <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-subtle-on-light">🇺🇸 USA</th>
 <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-subtle-on-light">🇬🇧 UK</th>
 <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-subtle-on-light">🇦🇪 UAE</th>
 <th className="py-6 px-8 font-black uppercase tracking-widest text-xs text-center text-amber-400">Est. Savings</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
 {PROCEDURE_TABLE.map((row) => (
 <tr key={row.procedure} className="hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors group">
 <td className="py-5 px-8 font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight text-sm group-hover:text-emerald-600 transition-colors">{row.procedure}</td>
 <td className="py-5 px-8 text-center text-emerald-600 font-black text-sm">{row.indira}</td>
 <td className="py-5 px-8 text-center text-subtle-on-light text-sm font-bold">{row.usa}</td>
 <td className="py-5 px-8 text-center text-subtle-on-light text-sm font-bold">{row.uk}</td>
 <td className="py-5 px-8 text-center text-subtle-on-light text-sm font-bold">{row.uae}</td>
 <td className="py-5 px-8 text-center">
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-widest border border-amber-100 dark:border-amber-900/30">
 <TrendingDown className="w-3 h-3"/> {row.savings}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* BENTO WHY AFFORDABLE */}
 <section>
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-8 uppercase">The Physics <br /><span className="text-emerald-600">of Value</span></h2>
 <p className="text-slate-500 dark:text-subtle-on-light font-medium text-lg leading-relaxed mb-10">Optimized pricing in India is driven by operational efficiency and high patient volumes, ensuring elite clinical outcomes without the Western administrative overhead.</p>
 
 <div className="grid sm:grid-cols-2 gap-6">
 {WHY_AFFORDABLE.map((item, i) => (
 <div key={i} className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-200 transition-all">
 <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-emerald-600 shadow-sm border border-slate-100 dark:border-slate-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
 <CheckCircle2 className="w-5 h-5"/>
 </div>
 <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-tight mb-2">{item.t}</h3>
 <p className="text-slate-500 dark:text-subtle-on-light text-sm font-medium leading-relaxed">{item.d}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"/>
 <div className="w-20 h-20 rounded-[2rem] bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 mx-auto shadow-inner border border-emerald-500/30">
 <Shield className="w-10 h-10"/>
 </div>
 <h3 className="elite-section-title mb-6 uppercase">NABH Quality Standards</h3>
 <p className="text-subtle-on-light font-medium mb-10">Indira Hospital is NABH-accredited, ensuring the same surgical safety protocols and technology standards as elite hospitals in the US and Europe.</p>
 
 <div className="space-y-4 mb-10 text-left max-w-xs mx-auto">
 <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-emerald-400">
 <CheckCircle2 className="w-4 h-4"/> International Implants (J&J, Stryker)
 </div>
 <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-emerald-400">
 <CheckCircle2 className="w-4 h-4"/> Siemens & GE Diagnostics
 </div>
 <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-emerald-400">
 <CheckCircle2 className="w-4 h-4"/> US-Trained Lead Surgeons
 </div>
 </div>

 <a href={waUrl} target="_blank"rel="noopener noreferrer"className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl shadow-emerald-900/50">
 <MessageCircle className="w-6 h-6"/> WhatsApp Reports for Quote
 </a>
 </div>
 </div>
 </section>

 {/* TRUST SIGNALS */}
 <section className="pt-24 border-t border-slate-100 dark:border-slate-800">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="cost-estimator"
 title="Pricing & Billing FAQs"
 description="Transparent answers about international billing and currency."
 />
 <EntityReviews 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="cost-estimator"
 title="Value Success Stories"
 description="How patients achieved elite care at a fraction of the cost."
 />
 </div>
 </section>
 </SectionContainer>

 {/* CTA BAND ELITE */}
 <section className="bg-slate-900 rounded-t-[5rem] py-24 sm:py-32 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"/>
 <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
 <h2 className="elite-section-title text-white mb-10 uppercase">Your Health <br /><span className="text-emerald-500">Institutional Excellence.</span></h2>
 <p className="text-xl text-subtle-on-light font-light mb-16 max-w-2xl mx-auto leading-relaxed">Achieve up to 90% cost savings on world-class quaternary care. Get your free personalized cost estimate within 24 hours.</p>
 
 <div className="flex flex-wrap justify-center gap-6">
 <a href={waUrl} target="_blank"rel="noopener noreferrer"
 className="inline-flex items-center gap-4 px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 text-xl transition-all hover:scale-105">
 <MessageCircle className="w-6 h-6"/> Get My Free Quote
 </a>
 <Link href="/patients/international/testimonials"
 className="inline-flex items-center gap-4 px-12 py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-black rounded-[2.5rem] hover:bg-white dark:bg-slate-900 text-xl transition-all">
 View Lab & Scans
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
