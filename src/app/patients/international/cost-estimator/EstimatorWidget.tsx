"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, CheckCircle2, Star, TrendingDown } from "lucide-react";

import { elitePricingBank } from "@/data/pricing-elite";

const WA_BASE = `https://wa.me/${siteConfig.contact.whatsapp}?text=`;

const WHATS_INCLUDED = [
 "Elite Surgeon's fee and OT charges",
 "Anaesthesiologist & Care team fee",
 "Elite Institutional Room (Private / Deluxe)",
 "Personalized Nursing Care & Monitoring",
 "Premium Prescribed Medications",
 "Advanced Diagnostic Tests & Imaging",
];
const WHATS_EXTRA = [
 "Elite Airport Concierge (Complimentary)",
 "Priority Visa Invitation Support",
 "Gourmet Dietary Meals (Customized)",
 "Attendant Elite Accommodation",
 "Post-Discharge Specialist Follow-ups",
];

export function EstimatorWidget() {
 const [selected, setSelected] = useState<string>("");
 const procedure = elitePricingBank.find(p => p.procedure === selected);
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
 className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-green-400 cursor-pointer"
 >
 <option value=""className="bg-slate-900">— Choose a procedure —</option>
 {elitePricingBank.map(p => (
 <option key={p.procedure} value={p.procedure} className="bg-slate-900">{p.procedure}</option>
 ))}
 </select>

 {procedure && (
 <div className="mt-6 space-y-3">
 {[
 { label: "🇮🇳 Indira Hospital, Vellore", value: procedure.range, highlight: true },
 { label: "🇺🇸 USA", value: procedure.usaCost, highlight: false },
 { label: "🇬🇧 UK", value: procedure.ukCost || "N/A", highlight: false },
 { label: "🇦🇪 UAE", value: procedure.uaeCost || "N/A", highlight: false },
 ].map(row => (
 <div key={row.label} className={`flex justify-between items-center p-4 rounded-xl ${row.highlight ? "bg-green-500/20 border border-green-400/30": "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"}`}>
 <span className="text-sm font-semibold">{row.label}</span>
 <span className={`font-black text-sm ${row.highlight ? "text-green-300": "text-slate-300"}`}>{row.value}</span>
 </div>
 ))}
 <div className="text-center mt-4 p-3 bg-amber-500/20 border border-amber-400/30 rounded-xl flex items-center justify-center gap-2">
 <TrendingDown className="w-4 h-4 text-amber-400"/>
 <span className="text-amber-300 font-black">Save up to {procedure.savings} vs Western countries</span>
 </div>
 </div>
 )}
 </div>

 <div className="space-y-4">
 <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
 <p className="text-sm text-slate-300 mb-4">Want a <strong className="text-white">personalised quote</strong> for your specific case? Send us your reports and we'll reply within 24 hours.</p>
 <a href={waUrl} target="_blank"rel="noopener noreferrer"
 className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all text-sm">
 <MessageCircle className="w-4 h-4"/>
 {selected ? `Get Quote for ${selected.split("").slice(0, 3).join("")}...` : "WhatsApp for Free Quote"}
 </a>
 </div>
 <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
 <p className="text-sm font-bold text-subtle-on-light uppercase tracking-wider mb-3">Estimate includes</p>
 {WHATS_INCLUDED.map(item => (
 <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
 <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"/>
 {item}
 </div>
 ))}
 </div>
 <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
 <p className="text-sm font-bold text-subtle-on-light uppercase tracking-wider mb-3">We also arrange (on request)</p>
 {WHATS_EXTRA.map(item => (
 <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
 <Star className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"/>
 {item}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
