import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

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

const PARENT_SLUG = "laparoscopic-surgeries";

const WA_DEFAULT = "https://wa.me/917010650063?text=" + encodeURIComponent("Hi, I want to know more about Proctology (Piles/Fistula) or Laparoscopic surgery at Indira Hospital. Please help.");

export function ProctologyLaparoscopyHighlight({ cityName, countryName, waUrl, className = "" }: Props) {
    const locationLabel = countryName
        ? `for Patients from ${countryName}`
        : cityName
            ? `near ${cityName}`
            : "at Indira Hospital, Vellore";

    const waLink = waUrl || WA_DEFAULT;

    return (
        <section className={`${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-fuchsia-700 dark:text-fuchsia-300 text-xs font-bold uppercase tracking-wider mb-3">
                        ⭐ Most Requested Surgeries
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                        Proctology &amp; Laparoscopic Surgery<br />
                        <span className="text-fuchsia-600 font-semibold text-xl">{locationLabel}</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-xl">
                        Indira Hospital is a pioneer in laser proctology and minimally invasive laparoscopic surgery — offering same-day discharge, stitchless procedures, and 60–80% cost savings vs metro hospitals.
                    </p>
                </div>
                <Link href={`/doctor/near-me/treat/${PARENT_SLUG}`}
                    className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-fuchsia-600 hover:text-fuchsia-700 font-bold transition-colors whitespace-nowrap">
                    View all surgeries <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* PROCTOLOGY CARD */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-500 text-sm font-black">✚</div>
                    <div>
                        <h3 className="font-black text-gray-900 dark:text-white text-base">Laser Proctology — Piles, Fistula &amp; Fissure</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Painless · Bloodless · Stitchless · Same-Day Discharge</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {PROCTOLOGY_TREATMENTS.map((t) => (
                        <Link key={t.slug}
                            href={`/doctor/near-me/treat/${PARENT_SLUG}/${t.slug}`}
                            className="group relative flex flex-col gap-2 p-4 bg-white dark:bg-slate-900 border border-red-100 dark:border-red-900/30 rounded-2xl shadow-sm hover:shadow-md hover:border-red-300 dark:hover:border-red-700 transition-all overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent dark:from-red-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xl">{t.icon}</span>
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-full">{t.tag}</span>
                                </div>
                                <p className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-1 group-hover:text-red-700">{t.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{t.benefit}</p>
                                <div className="flex items-center gap-1 mt-2 text-xs text-red-600 dark:text-red-400 font-semibold">
                                    Learn more <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* LAPAROSCOPY CARD */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-500 text-sm font-black">🔬</div>
                    <div>
                        <h3 className="font-black text-gray-900 dark:text-white text-base">Laparoscopic &amp; Minimally Invasive Surgery</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Keyhole technique · Less pain · Faster recovery · Smaller scars</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {LAPAROSCOPY_TREATMENTS.map((t) => (
                        <Link key={t.slug}
                            href={`/doctor/near-me/treat/${PARENT_SLUG}/${t.slug}`}
                            className="group relative flex flex-col gap-2 p-4 bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/30 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xl">{t.icon}</span>
                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full">{t.tag}</span>
                                </div>
                                <p className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-1 group-hover:text-blue-700">{t.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{t.benefit}</p>
                                <div className="flex items-center gap-1 mt-2 text-xs text-blue-600 dark:text-blue-400 font-semibold">
                                    Learn more <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* USP Strip */}
            <div className="bg-gradient-to-r from-fuchsia-50 to-red-50/50 dark:from-fuchsia-950/40 dark:to-red-950/30 rounded-2xl p-5 border border-fuchsia-100 dark:border-fuchsia-900/30">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
                        {[
                            "Same-day discharge for most proctology cases",
                            "HD Laparoscopy — 4K vision, precise cuts",
                            "Diode laser technology — minimal bleeding",
                            "60–80% cheaper than metro hospitals",
                        ].map((pt) => (
                            <div key={pt} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">{pt}</p>
                            </div>
                        ))}
                    </div>
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-sm text-sm whitespace-nowrap">
                        <MessageCircle className="w-4 h-4" /> Book Now
                    </a>
                </div>
            </div>
        </section>
    );
}
