import { Metadata } from "next";
import { AIAssistant } from "@/components/healthcare/AIAssistant";
import { ChevronRight, ShieldCheck, Clock, Activity } from "lucide-react";
import Link from "next/link";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
 title: "AI Symptom & Cost Assistant | Indira Super Speciality Hospital",
 description: "Use our advanced AI assistant to check symptoms, get estimated surgery costs, and seamlessly book priority appointments at Indira Hospital, Vellore.",
};

export default function AIAssistantPage() {
 return (
 <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
 {/* Minimal Schema for the Assistant Page */}
 <JsonLdSchema 
 type="symptom"
 name="Indira AI Healthcare Assistant"
 description="Interactive AI for symptom checking and treatment cost estimation."
 url="/ai-assistant"
 />
 
 {/* Hero Section */}
 <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white pt-32 pb-24 px-6 relative overflow-hidden">
 <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />
 
 <div className="max-w-5xl mx-auto text-center relative z-10">
 <nav className="flex items-center justify-center text-sm text-indigo-200/60 mb-8">
 <Link href="/" className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4 mx-2 opacity-40" />
 <span className="text-white font-bold">AI Assistant</span>
 </nav>
 
 <h1 className="text-4xl md:text-5xl font-black mb-6">
 Indira <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">AI Care Assistant</span>
 </h1>
 <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
 Describe your symptoms or ask about treatment costs. Our intelligent system will guide you to the right specialist instantly.
 </p>
 </div>
 </section>
 
 {/* Interactive Layout */}
 <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
 <div className="grid lg:grid-cols-3 gap-8 items-start">
 
 {/* Left Sidebar Info */}
 <div className="lg:col-span-1 space-y-6 hidden lg:block">
 <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-clay border border-slate-100 dark:border-slate-800">
 <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
 <Activity className="w-5 h-5 text-fuchsia-500" />
 What can I do?
 </h3>
 <div className="space-y-6">
 <div className="flex gap-4">
 <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center shrink-0">
 <ShieldCheck className="w-5 h-5 text-indigo-500" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Check Symptoms</h4>
 <p className="text-xs text-slate-500 leading-relaxed">Describe what you're feeling to get initial guidance.</p>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="w-10 h-10 bg-green-50 dark:bg-green-950/50 rounded-xl flex items-center justify-center shrink-0">
 <span className="text-green-600 font-bold">₹</span>
 </div>
 <div>
 <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Cost Estimates</h4>
 <p className="text-xs text-slate-500 leading-relaxed">Ask about standard pricing for surgeries like Laser Piles or Hernia.</p>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="w-10 h-10 bg-amber-50 dark:bg-amber-950/50 rounded-xl flex items-center justify-center shrink-0">
 <Clock className="w-5 h-5 text-amber-500" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Priority Booking</h4>
 <p className="text-xs text-slate-500 leading-relaxed">Skip the queue and let the AI connect you to a live booking agent.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 
 {/* Center AI Component */}
 <div className="lg:col-span-2">
 <AIAssistant />
 </div>
 
 </div>
 </div>
 </div>
 );
}
