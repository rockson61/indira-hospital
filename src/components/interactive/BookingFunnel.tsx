"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
 Search, ChevronRight, MessageCircle, Shield, 
 TrendingUp, Clock, ArrowLeft, Sparkles, 
 Zap, Info, CheckCircle2, DollarSign
} from "lucide-react";
import { servicesData } from "@/lib/data/services-data";
import { PRICING_DATA } from "@/lib/data/pricing-data";
import { TREATMENT_DATA } from "@/lib/data/treatment-data";
import { siteConfig } from "@/config/site";

type Step = "selection" | "valuation" | "handoff";

export default function BookingFunnel() {
 const [step, setStep] = useState<Step>("selection");
 const [search, setSearch] = useState("");
 const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
 const [selectedPricing, setSelectedPricing] = useState<any>(null);

 // Combine services and treatments for selection
 const options = useMemo(() => {
 const treatments = TREATMENT_DATA.map(t => ({
 id: t.id,
 title: t.title,
 type: "treatment",
 slug: t.slug,
 category: t.parentServiceSlug
 }));
 
 const services = servicesData.map(s => ({
 id: s.id,
 title: s.title,
 type: "service",
 slug: s.id,
 category: s.id
 }));

 return [...treatments, ...services].filter(opt => 
 opt.title.toLowerCase().includes(search.toLowerCase())
 );
 }, [search]);

 const handleSelection = (option: any) => {
 setSelectedTreatment(option);
 const pricing = PRICING_DATA.find(p => 
 p.id === option.id || 
 option.title.toLowerCase().includes(p.treatmentName.toLowerCase())
 );
 setSelectedPricing(pricing || null);
 setStep("valuation");
 };

 const generateWhatsAppLink = () => {
 const baseMessage = `Hi Indira Elite Desk, I&apos;m interested in an Elite consultation for ${selectedTreatment.title}.`;
 const pricingContext = selectedPricing ? ` I saw the estimate starting from ${selectedPricing.startingPrice}.` : "";
 return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(baseMessage + pricingContext)}`;
 };

 return (
 <div className="w-full bg-slate-900 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-clay-dark relative overflow-hidden min-h-[500px] flex flex-col">
 {/* Background Accents */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

 {/* Progress Header */}
 <div className="p-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
 <div className="flex gap-2">
 {["selection", "valuation", "handoff"].map((s, i) => (
 <div 
 key={s} 
 className={`h-1 rounded-full transition-all duration-500 ${
 step === s ? "w-8 bg-emerald-400" : i < ["selection", "valuation", "handoff"].indexOf(step) ? "w-4 bg-emerald-400/40" : "w-4 bg-white dark:bg-slate-900"
 }`} 
 />
 ))}
 </div>
 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">
 Elite Conversion Tunnel
 </span>
 </div>

 <div className="flex-1 p-8 md:p-12 relative z-10">
 <AnimatePresence mode="wait">
 {step === "selection" && (
 <motion.div
 key="selection"
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 className="space-y-8"
 >
 <div className="space-y-2">
 <h3 className="text-3xl font-black text-white tracking-widest uppercase italic">Select Excellence.</h3>
 <p className="text-slate-400 text-sm font-medium">Search for a specialized department or surgical procedure.</p>
 </div>

 <div className="relative group">
 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
 <input 
 type="text" 
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 placeholder="e.g. Knee Replacement, Cardiology, Laser Piles..."
 className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-6 pl-16 pr-6 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-slate-900 transition-all font-medium italic"
 />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
 {options.length > 0 ? (
 options.slice(0, 10).map((opt) => (
 <button
 key={`${opt.type}-${opt.id}`}
 onClick={() => handleSelection(opt)}
 className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 hover:bg-white dark:bg-slate-900 transition-all group group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
 >
 <div className="flex flex-col items-start">
 <span className="text-xs font-black text-white uppercase tracking-widest">{opt.title}</span>
 <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">{opt.type}</span>
 </div>
 <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
 </button>
 ))
 ) : (
 <div className="col-span-2 py-10 text-center text-slate-600 italic text-sm">No matching specialties found. Try searching for 'Surgery'.</div>
 )}
 </div>
 </motion.div>
 )}

 {step === "valuation" && (
 <motion.div
 key="valuation"
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 className="space-y-10"
 >
 <button 
 onClick={() => setStep("selection")}
 className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
 >
 <ArrowLeft className="w-4 h-4" /> Back to selection
 </button>

 <div className="flex flex-col md:flex-row gap-10 items-start">
 <div className="flex-1 space-y-6">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-widest uppercase">
 <Sparkles className="w-3.5 h-3.5" /> Elite Value Insights
 </div>
 <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight italic">
 {selectedTreatment.title}
 </h3>
 <div className="space-y-4">
 <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
 <Shield className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
 <div>
 <p className="text-xs font-black text-white uppercase tracking-wider mb-1">NABH Accredited Safety</p>
 <p className="text-[11px] text-slate-400 leading-relaxed font-medium">World-class protocols ensuring zero-error clinical precision for your recovery.</p>
 </div>
 </div>
 <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
 <Zap className="w-5 h-5 text-fuchsia-400 shrink-0 mt-1" />
 <div>
 <p className="text-xs font-black text-white uppercase tracking-wider mb-1">Direct Surgical Path</p>
 <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Skip the waitlists with direct priority access to our Chief Specialists.</p>
 </div>
 </div>
 </div>
 </div>

 <div className="w-full md:w-[340px] space-y-6">
 {selectedPricing ? (
 <div className="p-8 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 border border-slate-200 dark:border-slate-800 shadow-clay-dark relative group overflow-hidden">
 <div className="absolute inset-0 bg-white dark:bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" />
 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Elite Cost Estimation</p>
 <div className="space-y-1 mb-8">
 <p className="text-sm font-bold text-slate-400 line-through decoration-slate-600 italic">Common Price: {selectedPricing.metroPrice}</p>
 <p className="text-5xl font-black text-white tracking-tighter">{selectedPricing.startingPrice}</p>
 <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 mt-2">
 <TrendingUp className="w-3.5 h-3.5" /> {selectedPricing.valueProp}
 </p>
 </div>
 <div className="space-y-3">
 {selectedPricing.includes.map((inc: string, i: number) => (
 <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
 <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {inc}
 </div>
 ))}
 </div>
 </div>
 ) : (
 <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center min-h-[200px]">
 <Info className="w-8 h-8 text-slate-600 mb-4" />
 <p className="text-xs font-black text-slate-500 uppercase tracking-widest leading-relaxed">
 Pricing for this specific <br /> speciality is customized <br /> per clinical diagnosis.
 </p>
 </div>
 )}
 <button
 onClick={() => setStep("handoff")}
 className="w-full py-6 bg-white text-slate-950 font-black rounded-2xl hover:bg-emerald-400 transition-all uppercase tracking-[0.2em] text-[11px] shadow-clay-dark shadow-emerald-500/10"
 >
 Proceed to Priority Booking
 </button>
 </div>
 </div>
 </motion.div>
 )}

 {step === "handoff" && (
 <motion.div
 key="handoff"
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 className="flex flex-col items-center text-center space-y-10 py-12"
 >
 <div className="w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
 <MessageCircle className="w-12 h-12" />
 </div>
 
 <div className="space-y-4 max-w-lg">
 <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic leading-none">
 Consultation <br /> Ready.
 </h3>
 <p className="text-slate-400 text-sm font-medium leading-relaxed">
 Our Senior Surgical Coordinator is notified. Connect via WhatsApp to share details and confirm your <span className="text-white">Elite Clinical Priority</span> status.
 </p>
 </div>

 <div className="w-full max-w-md p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-left">
 <div className="flex items-center justify-between">
 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Case Profile</span>
 <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Encrypted Transmit</span>
 </div>
 <div className="space-y-2">
 <div className="flex justify-between items-center text-[10px] font-bold text-white uppercase tracking-widest">
 <span>Selection:</span>
 <span>{selectedTreatment.title}</span>
 </div>
 {selectedPricing && (
 <div className="flex justify-between items-center text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
 <span>Value Prop:</span>
 <span>Institutional Excellence</span>
 </div>
 )}
 </div>
 </div>

 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
 <a
 href={generateWhatsAppLink()}
 target="_blank"
 rel="noopener noreferrer"
 className="px-12 py-7 bg-emerald-500 text-slate-950 font-black rounded-3xl hover:bg-emerald-400 transition-all uppercase tracking-[0.2em] text-[11px] shadow-clay-dark flex items-center justify-center gap-3"
 >
 Confirm on WhatsApp <ChevronRight className="w-5 h-5" />
 </a>
 <button
 onClick={() => setStep("valuation")}
 className="px-8 py-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-3xl hover:bg-white dark:bg-slate-900 transition-colors uppercase tracking-widest text-[9px]"
 >
 Review Details
 </button>
 </div>

 <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
 <div className="flex items-center gap-2">
 <Clock className="w-4 h-4" />
 <span className="text-[8px] font-black uppercase tracking-widest text-white">4 Min Response</span>
 </div>
 <div className="flex items-center gap-2">
 <Shield className="w-4 h-4" />
 <span className="text-[8px] font-black uppercase tracking-widest text-white">Encrypted Direct</span>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 );
}
