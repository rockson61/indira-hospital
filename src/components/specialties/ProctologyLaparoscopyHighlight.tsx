import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface Props {
 /** City name for localised copy, e.g. "Vellore" */
 cityName?: string;
 /** Country name for international copy, e.g. "Bangladesh" */
 countryName?: string;
 /** WhatsApp URL pre-populated with relevant context */
 waUrl?: string;
 className?: string;
}

const PROCTOLOGY_TREATMENTS = [
 { name: "Laser Piles (Hemorrhoids)", slug: "laser-piles-treatment", icon: "🔴", tag: "Same-Day Discharge", benefit: "Painless · No stitches · 15-min procedure" },
 { name: "Fistula Treatment (Laser)", slug: "fistula-laser-treatment", icon: "🟠", tag: "Minimal Recurrence", benefit: "Laser precision · Faster healing · Scarless" },
 { name: "Fissure Treatment", slug: "anal-fissure-treatment", icon: "🟡", tag: "Non-Surgical Option", benefit: "Botox / Surgery · Rapid relief · Pain-free" },
 { name: "Pilonidal Sinus", slug: "pilonidal-sinus", icon: "🟣", tag: "Laser Cure", benefit: "One-time procedure · Low recurrence" },
];

const LAPAROSCOPY_TREATMENTS = [
 { name: "Laparoscopic Hernia Repair", slug: "laparoscopic-hernia-repair", icon: "🔬", tag: "3D Mesh Repair", benefit: "Keyhole · Strong reinforcement · Back in 3 days" },
 { name: "Gallbladder Removal (Laparoscopic)", slug: "laparoscopic-gallbladder-removal", icon: "💚", tag: "Day-Care Surgery", benefit: "3 tiny cuts · Home by evening · Painless" },
 { name: "Appendix Surgery (Laparoscopic)", slug: "laparoscopic-appendix-surgery", icon: "🔵", tag: "24/7 Emergency", benefit: "Emergency ready · Keyhole technique · Infection safe" },
 { name: "Laparoscopic Hysterectomy", slug: "laparoscopic-hysterectomy-guide", icon: "🌸", tag: "Minimally Invasive", benefit: "Minimal blood loss · Uterine preservation option" },
];

const PARENT_SLUG = "general-surgery";

const WA_DEFAULT = "https://wa.me/" + siteConfig.contact.whatsapp + "?text=" + encodeURIComponent("Hi, I want to know more about Proctology (Piles/Fistula) or Laparoscopic surgery at Indira Hospital. Please help.");

export function ProctologyLaparoscopyHighlight({ cityName, countryName, waUrl, className = "" }: Props) {
 const locationLabel = countryName
 ? `for Patients from ${countryName}`
 : cityName
 ? `near ${cityName}`
 : "at Indira Hospital, Vellore";

 const waLink = waUrl || WA_DEFAULT;

 return (
 <section className={`${className} relative`}>
 {/* Header */}
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
 <div>
 <div className="inline-flex items-center gap-3 px-5 py-2 bg-fuchsia-50 dark:bg-white dark:bg-slate-900 rounded-full border border-fuchsia-100 dark:border-slate-200 dark:border-slate-800 text-fuchsia-600 dark:text-fuchsia-300 text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm animate-pulse">
 ⭐ Most Requested Elite Surgeries
 </div>
 <h2 className="elite-section-title text-slate-900 dark:text-white uppercase italic er">
 Proctology & Laparoscopic<br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600 dark:from-fuchsia-400 dark:to-indigo-300">{locationLabel}</span>
 </h2>
 <p className="text-slate-500 dark:text-slate-400 text-base mt-4 max-w-2xl font-light italic">
 Indira Hospital is a pioneer in laser proctology and minimally invasive laparoscopic surgery — offering same-day discharge, stitchless procedures, and world-class care at half the metro cost.
 </p>
 </div>
 <Link href={`/doctor/near-me/treat/${PARENT_SLUG}`}
 className="elite-button-secondary">
 View all surgeries <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="grid lg:grid-cols-2 gap-8">
 {/* PROCTOLOGY CARD */}
 <div className="bg-white dark:bg-slate-900 dark:bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group/procto">
 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px]" />
 <div className="flex items-center gap-5 mb-8 relative z-10">
 <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 flex items-center justify-center text-red-500 shadow-inner group-hover/procto:scale-110 transition-transform">
 <span className="text-2xl font-black">✚</span>
 </div>
 <div>
 <h3 className="font-black text-slate-900 dark:text-white text-xl uppercase italic tracking-tight mb-1">Laser Proctology</h3>
 <p className="text-xs text-red-600 dark:text-red-400 font-bold tracking-widest uppercase">Piles • Fistula • Fissure • Sinus</p>
 </div>
 </div>
 <div className="grid sm:grid-cols-2 gap-4 relative z-10">
 {PROCTOLOGY_TREATMENTS.map((t) => (
 <Link key={t.slug}
 href={`/doctor/near-me/treat/${PARENT_SLUG}/${t.slug}`}
 className="group/item relative flex flex-col gap-3 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:border-red-200 dark:hover:border-red-900/50 transition-all overflow-hidden h-full">
 <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent dark:from-red-950/10 opacity-0 group-hover/item:opacity-100 transition-opacity" />
 <div className="relative z-10">
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white dark:bg-slate-900 flex items-center justify-center text-xl shadow-inner group-hover/item:bg-red-500 group-hover/item:text-white transition-all">
 {t.icon}
 </div>
 <span className="text-[8px] font-black px-3 py-1 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-full uppercase tracking-tighter">{t.tag}</span>
 </div>
 <p className="font-black text-slate-900 dark:text-white text-sm leading-tight mb-2 group-hover/item:text-red-700 dark:group-hover/item:text-red-400 transition-colors uppercase italic tracking-tight">{t.name}</p>
 <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium italic opacity-80">{t.benefit}</p>
 </div>
 </Link>
 ))}
 </div>
 </div>

 {/* LAPAROSCOPY CARD */}
 <div className="bg-white dark:bg-slate-900 dark:bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group/laparo">
 <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px]" />
 <div className="flex items-center gap-5 mb-8 relative z-10">
 <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-500 shadow-inner group-hover/laparo:scale-110 transition-transform">
 <span className="text-2xl font-black">🔬</span>
 </div>
 <div>
 <h3 className="font-black text-slate-900 dark:text-white text-xl uppercase italic tracking-tight mb-1">Laparoscopic Surgery</h3>
 <p className="text-xs text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase">Keyhole • Scarless • Rapid Recovery</p>
 </div>
 </div>
 <div className="grid sm:grid-cols-2 gap-4 relative z-10">
 {LAPAROSCOPY_TREATMENTS.map((t) => (
 <Link key={t.slug}
 href={`/doctor/near-me/treat/${PARENT_SLUG}/${t.slug}`}
 className="group/item relative flex flex-col gap-3 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all overflow-hidden h-full">
 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/10 opacity-0 group-hover/item:opacity-100 transition-opacity" />
 <div className="relative z-10">
 <div className="flex items-center justify-between mb-4">
 <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white dark:bg-slate-900 flex items-center justify-center text-xl shadow-inner group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
 {t.icon}
 </div>
 <span className="text-[8px] font-black px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full uppercase tracking-tighter">{t.tag}</span>
 </div>
 <p className="font-black text-slate-900 dark:text-white text-sm leading-tight mb-2 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-400 transition-colors uppercase italic tracking-tight">{t.name}</p>
 <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium italic opacity-80">{t.benefit}</p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </div>

 {/* USP Strip */}
 <div className="mt-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group/usp">
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-[60px]" />
 <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
 {[
 "Same-day discharge for most proctology cases",
 "HD Laparoscopy — 4K vision, precise cuts",
 "Diode laser technology — minimal bleeding",
 "60–80% cost-optimized vs metro hospitals",
 ].map((pt) => (
 <div key={pt} className="flex items-start gap-3 group/pt">
 <div className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover/pt:bg-fuchsia-500 transition-all">
 <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 group-hover:text-white transition-colors" />
 </div>
 <p className="text-xs text-indigo-100 font-bold uppercase tracking-tight leading-relaxed italic opacity-80">{pt}</p>
 </div>
 ))}
 </div>
 <a href={waLink} target="_blank" rel="noopener noreferrer"
 className="group/wa flex-shrink-0 inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-green-500/25 text-sm uppercase tracking-widest group-hover/wa:scale-105 active:scale-95">
 <MessageCircle className="w-6 h-6 group-hover/wa:rotate-12 transition-transform" /> 
 Claim Free Consultation
 </a>
 </div>
 </div>
 </section>
 );
}
