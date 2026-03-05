"use client";
import { useState } from "react";
import { MessageCircle, CheckCircle2, Star, TrendingDown } from "lucide-react";

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
                        <p className="text-sm text-slate-300 mb-4">Want a <strong className="text-white">personalised quote</strong> for your specific case? Send us your reports and we'll reply within 24 hours.</p>
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
