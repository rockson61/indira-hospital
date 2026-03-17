"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, CheckCircle2, Star, TrendingDown } from "lucide-react";

const WA_BASE = `https://wa.me/${siteConfig.contact.whatsapp}?text=`;

const PROCEDURE_LIST = [
    { procedure: "Knee Replacement (Unilateral)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+" },
    { procedure: "Hip Replacement", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+" },
    { procedure: "Cardiac Bypass (CABG)", indira: "Transparent Pricing", usa: "Very High Cost", uk: "Premium", uae: "Premium Plus", savings: "95%+" },
    { procedure: "Angioplasty (Stent)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+" },
    { procedure: "Spinal Surgery (Disc)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+" },
    { procedure: "Kidney Transplant", indira: "Transparent Pricing", usa: "Very High Cost", uk: "Premium", uae: "Premium Plus", savings: "95%+" },
    { procedure: "Laparoscopic Surgery", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "90%+" },
    { procedure: "Laser Piles Treatment", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "85%+" },
    { procedure: "Oncology (Chemo cycle)", indira: "Transparent Pricing", usa: "High Cost", uk: "Premium", uae: "Premium Plus", savings: "85%+" },
    { procedure: "IVF / Infertility Cycle", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "85%+" },
    { procedure: "Cataract Surgery (per eye)", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "80%+" },
    { procedure: "Hernia Repair (Laparoscopic)", indira: "Transparent Pricing", usa: "Premium", uk: "Standard", uae: "Premium", savings: "85%+" },
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

export function EstimatorWidget() {
    const [selected, setSelected] = useState<string>("");
    const procedure = PROCEDURE_LIST.find(p => p.procedure === selected);
    const waUrl = WA_BASE + encodeURIComponent(
        selected
            ? `Hi, I am an international patient. I need a cost estimate for: ${selected}. Please help.`
            : `Hi, I am an international patient seeking a cost estimate. Please help.`
    );

    return (
        <section className="bg-gradient-to-br from-slate-900 to-green-950 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🧮</span>
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
                            <div className="text-center mt-4 p-3 bg-amber-500/20 border border-amber-400/30 rounded-xl flex items-center justify-center gap-2">
                                <TrendingDown className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 font-black">Save up to {procedure.savings} vs Western countries</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-sm text-slate-300 mb-4">Want a <strong className="text-white">personalised quote</strong> for your specific case? Send us your reports and we&apos;ll reply within 24 hours.</p>
                        <a href={waUrl} target="_blank" rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all text-sm">
                            <MessageCircle className="w-4 h-4" />
                            {selected ? `Get Quote for ${selected.split(" ").slice(0, 3).join(" ")}...` : "WhatsApp for Free Quote"}
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
    );
}
