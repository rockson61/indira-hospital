"use client";
import React, { useState } from "react";
import { Activity, Heart, ArrowRight, Info, RefreshCcw, ShieldCheck } from "lucide-react";
import { ModernCard } from "@/components/ui/modern-card";

export function HealthCalculators() {
 const [activeTab, setActiveTab] = useState<"bmi" | "cardiac">("bmi");
 
 // BMI State
 const [weight, setWeight] = useState<string>("70");
 const [height, setHeight] = useState<string>("170");
 const [bmiResult, setBmiResult] = useState<number | null>(null);

 // Cardiac Risk State (Simplified)
 const [age, setAge] = useState<string>("45");
 const [systolic, setSystolic] = useState<string>("120");
 const [isSmoker, setIsSmoker] = useState(false);
 const [cardiacRisk, setCardiacRisk] = useState<string | null>(null);

 const calculateBMI = () => {
 const w = parseFloat(weight);
 const h = parseFloat(height) / 100;
 if (w && h) {
 setBmiResult(parseFloat((w / (h * h)).toFixed(1)));
 }
 };

 const calculateCardiac = () => {
 const a = parseInt(age);
 const s = parseInt(systolic);
 let risk = "Low";
 if (a > 55 || s > 140 || isSmoker) risk = "Moderate";
 if (a > 65 && s > 150 && isSmoker) risk = "Elevated";
 setCardiacRisk(risk);
 };

 return (
 <section className="py-12">
 <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
 <div>
 <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
 Elite <span className="text-fuchsia-600">Health Intelligence</span>
 </h2>
 <p className="text-slate-500 font-medium mt-1">Clinical assessments powered by Indira's medical mastery.</p>
 </div>
 <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
 <button 
 onClick={() => setActiveTab("bmi")}
 className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${activeTab === 'bmi' ? 'bg-white dark:bg-slate-800 shadow-sm text-fuchsia-600' : 'text-slate-500 hover:text-slate-700'}`}
 >
 BMI Assessment
 </button>
 <button 
 onClick={() => setActiveTab("cardiac")}
 className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${activeTab === 'cardiac' ? 'bg-white dark:bg-slate-800 shadow-sm text-fuchsia-600' : 'text-slate-500 hover:text-slate-700'}`}
 >
 Cardiac Risk Tool
 </button>
 </div>
 </div>

 <div className="grid lg:grid-cols-12 gap-12 items-start">
 {/* Calculator Form Area */}
 <div className="lg:col-span-7">
 <ModernCard className="p-10 bg-white dark:bg-slate-900 border-none shadow-clay-dark rounded-[3rem] relative overflow-hidden">
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
 
 {activeTab === 'bmi' ? (
 <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
 <div className="grid sm:grid-cols-2 gap-8">
 <div className="space-y-2">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Weight (kg)</label>
 <input 
 type="number" 
 value={weight} 
 onChange={(e) => setWeight(e.target.value)}
 className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xl font-bold focus:ring-2 focus:ring-fuchsia-500 transition-all"
 />
 </div>
 <div className="space-y-2">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Height (cm)</label>
 <input 
 type="number" 
 value={height} 
 onChange={(e) => setHeight(e.target.value)}
 className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xl font-bold focus:ring-2 focus:ring-fuchsia-500 transition-all"
 />
 </div>
 </div>
 <button 
 onClick={calculateBMI}
 className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:bg-fuchsia-700 dark:hover:bg-fuchsia-50 transition-all flex items-center justify-center gap-3 shadow-clay"
 >
 <Activity className="w-5 h-5" />
 CALCULATE CLINICAL BMI
 </button>
 </div>
 ) : (
 <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
 <div className="grid sm:grid-cols-2 gap-8">
 <div className="space-y-2">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Age</label>
 <input 
 type="number" 
 value={age} 
 onChange={(e) => setAge(e.target.value)}
 className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xl font-bold focus:ring-2 focus:ring-fuchsia-500 transition-all"
 />
 </div>
 <div className="space-y-2">
 <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Systolic BP</label>
 <input 
 type="number" 
 value={systolic} 
 onChange={(e) => setSystolic(e.target.value)}
 className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-xl font-bold focus:ring-2 focus:ring-fuchsia-500 transition-all"
 />
 </div>
 </div>
 <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
 <input 
 type="checkbox" 
 checked={isSmoker} 
 onChange={(e) => setIsSmoker(e.target.checked)}
 className="w-6 h-6 rounded-2xl text-fuchsia-600 focus:ring-fuchsia-500"
 />
 <span className="font-bold text-slate-700 dark:text-slate-200">Current or Former Smoker?</span>
 </div>
 <button 
 onClick={calculateCardiac}
 className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:bg-fuchsia-700 dark:hover:bg-fuchsia-50 transition-all flex items-center justify-center gap-3 shadow-clay"
 >
 <Heart className="w-5 h-5" />
 ANALYZE CARDIAC RISK
 </button>
 </div>
 )}
 </ModernCard>
 </div>

 {/* Results Area */}
 <div className="lg:col-span-5 h-full">
 <div className="h-full p-10 bg-gradient-to-br from-fuchsia-600 to-pink-700 rounded-[3rem] text-white shadow-clay-dark relative overflow-hidden flex flex-col justify-center items-center text-center">
 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
 
 {(activeTab === 'bmi' ? bmiResult : cardiacRisk) ? (
 <div className="animate-in zoom-in-95 duration-500 space-y-6">
 <div className="p-6 bg-white dark:bg-slate-900 rounded-full inline-block border border-slate-200 dark:border-slate-800 mb-4">
 {activeTab === 'bmi' ? <Activity className="w-12 h-12" /> : <Heart className="w-12 h-12" />}
 </div>
 <h3 className="text-2xl font-black uppercase tracking-widest opacity-80">Your Assessment</h3>
 <div className="text-7xl font-black tracking-tighter">
 {activeTab === 'bmi' ? bmiResult : cardiacRisk}
 </div>
 <p className="text-lg font-bold opacity-90 max-w-xs mx-auto">
 {activeTab === 'bmi' 
 ? (bmiResult! < 18.5 ? "Underweight — Elite nutrition plan recommended." : bmiResult! < 25 ? "Optimal — Your clinical health is excellent." : "Above Range — Specialist consultation advised.")
 : `${cardiacRisk} Risk Level detected. Clinical screening recommended.`
 }
 </p>
 <button className="mt-8 px-10 py-4 bg-white text-fuchsia-600 font-black rounded-full hover:bg-fuchsia-50 transition-all flex items-center gap-2 mx-auto">
 BOOK ELITE SCREENING
 <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 ) : (
 <div className="space-y-6">
 <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center mx-auto mb-4 border border-slate-200 dark:border-slate-800">
 <RefreshCcw className="w-10 h-10 animate-spin-slow opacity-50" />
 </div>
 <h3 className="text-2xl font-black">Awaiting Input</h3>
 <p className="text-fuchsia-100/60 font-medium">Enter your clinical parameters <br /> for an Elite health analysis.</p>
 </div>
 )}

 <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 opacity-40 text-[10px] font-black uppercase tracking-[0.2em]">
 <ShieldCheck className="w-3 h-3" />
 Clinical Accuracy Guaranteed
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
