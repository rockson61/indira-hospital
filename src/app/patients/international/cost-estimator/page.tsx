"use client";
import Link from "next/link";
import {
    DollarSign, MessageCircle, Phone, ChevronRight, CheckCircle2,
    ArrowRight, TrendingDown, Calculator, Star, Shield, Clock
} from "lucide-react";
import { useState } from "react";
import { COST_COMPARISON } from "@/lib/data/international-data";

const WA_BASE = "https://wa.me/917010650063?text=";

const PROCEDURE_LIST = [
    { procedure: "Knee Replacement (Unilateral)", indira: "₹2.5 – 4 Lakh", usa: "$30,000 – $50,000", uk: "£15,000 – £25,000", uae: "AED 60,000 – 90,000", savings: "93%" },
    { procedure: "Hip Replacement", indira: "₹3 – 5 Lakh", usa: "$35,000 – $60,000", uk: "£18,000 – £30,000", uae: "AED 70,000 – 100,000", savings: "92%" },
    { procedure: "Cardiac Bypass (CABG)", indira: "₹3.5 – 6 Lakh", usa: "$80,000 – $120,000", uk: "£25,000 – £40,000", uae: "AED 90,000 – 150,000", savings: "95%" },
    { procedure: "Angioplasty (Stent)", indira: "₹1.5 – 3 Lakh", usa: "$30,000 – $50,000", uk: "£12,000 – £20,000", uae: "AED 40,000 – 70,000", savings: "90%" },
    { procedure: "Spinal Surgery (Disc)", indira: "₹2 – 4 Lakh", usa: "$50,000 – $80,000", uk: "£20,000 – £35,000", uae: "AED 60,000 – 100,000", savings: "94%" },
    { procedure: "Kidney Transplant", indira: "₹8 – 15 Lakh", usa: "$150,000 – $350,000", uk: "£80,000 – £150,000", uae: "AED 250,000 – 500,000", savings: "96%" },
    { procedure: "Laparoscopic Surgery", indira: "₹50,000 – 1.5 Lakh", usa: "$15,000 – $30,000", uk: "£10,000 – £18,000", uae: "AED 25,000 – 45,000", savings: "90%" },
    { procedure: "Laser Piles Treatment", indira: "₹30,000 – 60,000", usa: "$5,000 – $10,000", uk: "£3,000 – £6,000", uae: "AED 8,000 – 15,000", savings: "85%" },
    { procedure: "Oncology (Chemo cycle)", indira: "₹20,000 – 80,000", usa: "$10,000 – $30,000", uk: "£5,000 – £15,000", uae: "AED 15,000 – 40,000", savings: "88%" },
    { procedure: "IVF / Infertility Cycle", indira: "₹1 – 2 Lakh", usa: "$15,000 – $25,000", uk: "£5,000 – £10,000", uae: "AED 20,000 – 35,000", savings: "88%" },
    { procedure: "Cataract Surgery (per eye)", indira: "₹15,000 – 40,000", usa: "$3,000 – $6,000", uk: "£1,500 – £3,000", uae: "AED 5,000 – 10,000", savings: "82%" },
    { procedure: "Hernia Repair (Laparoscopic)", indira: "₹40,000 – 80,000", usa: "$10,000 – $15,000", uk: "£5,000 – £8,000", uae: "AED 12,000 – 20,000", savings: "85%" },
];

const WHATS_INCLUDED = [
    "Surgeon's fee and OT charges",
    "Anaesthesiologist fee",
    "Hospital room (general / private / deluxe)",
    "Nursing care and post-op monitoring",
    "Standard prescribed medicines",
    "Routine diagnostic tests & imaging",
];
const WHATS_EXTRA = [
    "International airport transfer (complimentary on request)",
    "Visa invitation letter (free)",
    "Dietary meals (Halal, vegetarian)",
    "Attendant accommodation in hospital",
    "Post-discharge follow-up consultation",
];

export default function CostEstimatorPage() {
    const [selected, setSelected] = useState<string>("");
    const procedure = PROCEDURE_LIST.find(p => p.procedure === selected);

    const waUrl = WA_BASE + encodeURIComponent(
        selected
            ? `Hi, I am an international patient. I need a cost estimate for: ${selected}. Please help.`
            : `Hi, I am an international patient seeking a cost estimate. Please help.`
    );

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* HERO */}
            <section className="relative bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 lg:pt-52 lg:pb-20 relative z-10">
                    <nav className="flex items-center text-sm text-green-300 mb-6 gap-1 flex-wrap">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/patients/international" className="hover:text-white">International</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">Cost Estimator</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-bold mb-6">
                        <Calculator className="w-4 h-4" /> Free Cost Estimate — Response in 24 Hours
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                        Treatment Cost in India<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            vs USA, UK & UAE
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mt-4">
                        At Indira Super Speciality Hospital, Vellore, you get <strong className="text-white">NABH-accredited quaternary care</strong> at 80–95% lower cost than Western countries. Browse our price guide and WhatsApp us for a <strong className="text-white">personalised cost estimate within 24 hours</strong>.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02]">
                            <MessageCircle className="w-5 h-5" /> WhatsApp for Free Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <div className="bg-green-700 text-white py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-4 text-center">
                    {[
                        { v: "80–95%", l: "Cost Savings vs USA" },
                        { v: "24 hrs", l: "Estimate Response Time" },
                        { v: "NABH", l: "Quality Accreditation" },
                        { v: "₹0", l: "Consultation to Estimate" },
                        { v: "50+", l: "Countries Served" },
                    ].map(({ v, l }) => (
                        <div key={l}>
                            <div className="text-2xl font-black">{v}</div>
                            <div className="text-green-200 text-xs font-semibold uppercase tracking-wider">{l}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-12">

                {/* QUICK ESTIMATOR */}
                <section className="bg-gradient-to-br from-slate-900 to-green-950 rounded-3xl p-8 text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <Calculator className="w-6 h-6 text-green-400" />
                        <h2 className="text-2xl font-black">Quick Cost Estimator</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2">Select Procedure</label>
                            <select
                                value={selected}
                                onChange={e => setSelected(e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-green-400 cursor-pointer"
                            >
                                <option value="" className="bg-slate-900">— Choose a procedure —</option>
                                {PROCEDURE_LIST.map(p => (
                                    <option key={p.procedure} value={p.procedure} className="bg-slate-900">{p.procedure}</option>
                                ))}
                            </select>

                            {procedure && (
                                <div className="mt-6 space-y-3">
                                    {[
                                        { label: "🇮🇳 Indira Hospital, Vellore", value: procedure.indira, highlight: true },
                                        { label: "🇺🇸 USA", value: procedure.usa, highlight: false },
                                        { label: "🇬🇧 UK", value: procedure.uk, highlight: false },
                                        { label: "🇦🇪 UAE", value: procedure.uae, highlight: false },
                                    ].map(row => (
                                        <div key={row.label} className={`flex justify-between items-center p-4 rounded-xl ${row.highlight ? "bg-green-500/20 border border-green-400/30" : "bg-white/5 border border-white/10"}`}>
                                            <span className="text-sm font-semibold">{row.label}</span>
                                            <span className={`font-black text-sm ${row.highlight ? "text-green-300" : "text-slate-300"}`}>{row.value}</span>
                                        </div>
                                    ))}
                                    <div className="text-center mt-4 p-3 bg-amber-500/20 border border-amber-400/30 rounded-xl">
                                        <span className="text-amber-300 font-black text-lg">Save up to {procedure.savings} vs Western countries</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="space-y-4">
                            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-slate-300 mb-4">Want a <strong className="text-white">personalised quote</strong> for your specific case? Send us your reports and we'll reply within 24 hours with a detailed cost breakdown.</p>
                                <a href={selected ? WA_BASE + encodeURIComponent(`Hi, I need a cost estimate for: ${selected}. Please help.`) : waUrl}
                                    target="_blank" rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all text-sm">
                                    <MessageCircle className="w-4 h-4" /> {selected ? `Get Quote for ${selected.split(" ").slice(0, 3).join(" ")}...` : "WhatsApp for Free Quote"}
                                </a>
                            </div>
                            <div className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Estimate includes</p>
                                {WHATS_INCLUDED.map(item => (
                                    <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">We also arrange (on request)</p>
                                {WHATS_EXTRA.map(item => (
                                    <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                                        <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FULL PRICING TABLE */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Procedure Cost Guide — India vs USA / UK / UAE
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                                <tr>
                                    <th className="py-3 px-5 text-left font-bold text-gray-700 dark:text-gray-300">Procedure</th>
                                    <th className="py-3 px-4 text-center font-bold text-green-600 dark:text-green-400">🇮🇳 Indira Hospital</th>
                                    <th className="py-3 px-4 text-center font-bold text-gray-500">🇺🇸 USA</th>
                                    <th className="py-3 px-4 text-center font-bold text-gray-500">🇬🇧 UK</th>
                                    <th className="py-3 px-4 text-center font-bold text-gray-500">🇦🇪 UAE</th>
                                    <th className="py-3 px-4 text-center font-bold text-amber-600 dark:text-amber-400">Savings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800 bg-white dark:bg-slate-900/50">
                                {PROCEDURE_LIST.map((row) => (
                                    <tr key={row.procedure} className="hover:bg-green-50/50 dark:hover:bg-green-950/20 transition-colors">
                                        <td className="py-3 px-5 font-semibold text-gray-900 dark:text-white">{row.procedure}</td>
                                        <td className="py-3 px-4 text-center font-bold text-green-600 dark:text-green-400">{row.indira}</td>
                                        <td className="py-3 px-4 text-center text-gray-500 dark:text-gray-400 text-xs">{row.usa}</td>
                                        <td className="py-3 px-4 text-center text-gray-500 dark:text-gray-400 text-xs">{row.uk}</td>
                                        <td className="py-3 px-4 text-center text-gray-500 dark:text-gray-400 text-xs">{row.uae}</td>
                                        <td className="py-3 px-4 text-center">
                                            <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold text-xs">
                                                <TrendingDown className="w-3.5 h-3.5" /> {row.savings}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
                        * All prices are indicative ranges in respective currencies. Actual costs vary based on complexity, implants used, and length of stay. WhatsApp us for a case-specific estimate.
                    </p>
                </section>

                {/* WHY SO AFFORDABLE */}
                <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Is Treatment So Affordable in India?</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { t: "Lower operational costs", d: "Real estate, labour, and administrative costs in India are a fraction of Western countries — not a reflection of lower quality." },
                            { t: "No insurance overhead", d: "India's healthcare system doesn't carry the massive insurance administration overhead that inflates US hospital bills." },
                            { t: "Government subsidies", d: "Government policies actively promote medical tourism in India, keeping operational taxes and import duties on medical equipment lower." },
                            { t: "Same international equipment", d: "We use Siemens, GE, Stryker, Johnson & Johnson implants and instruments — identical to what US and UK hospitals use." },
                        ].map(({ t, d }) => (
                            <div key={t} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{t}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TRUST BADGES */}
                <div className="grid sm:grid-cols-3 gap-5">
                    {[
                        { icon: Shield, title: "NABH Accredited", desc: "Same quality standard as CMC Vellore and top Indian hospitals." },
                        { icon: Clock, title: "Estimate in 24 Hours", desc: "Send reports on WhatsApp and get a detailed breakdown by our specialist." },
                        { icon: CheckCircle2, title: "No Hidden Charges", desc: "Our estimates are transparent. We detail every line item before you travel." },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center mx-auto mb-3 text-green-600">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA BAND */}
            <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-14">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black mb-4">Get Your Personalised Cost Estimate — Free</h2>
                    <p className="text-green-100 text-lg mb-8">Share your diagnosis report via WhatsApp. Our specialist will respond with a full cost breakdown within 24 hours.</p>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-black rounded-2xl shadow-lg text-lg hover:scale-[1.02] transition-all">
                        <MessageCircle className="w-5 h-5" /> WhatsApp Now — It's Free
                    </a>
                </div>
            </section>

            <div className="border-t border-slate-100 dark:border-slate-800 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center text-sm">
                    {[
                        { href: "/patients/international", label: "International Hub" },
                        { href: "/patients/cmc-vellore-alternative", label: "CMC Alternative" },
                        { href: "/patients/medical-visa-india", label: "Visa Guide" },
                        { href: "/patients/international/second-opinion", label: "Free Second Opinion" },
                    ].map(({ href, label }) => (
                        <Link key={href} href={href}
                            className="inline-flex items-center gap-1 text-fuchsia-600 hover:text-fuchsia-700 font-semibold">
                            {label} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
