"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
 Camera, Sparkles, Map, ArrowLeft, ArrowRight, 
 MessageCircle, Shield, Info, Maximize2, 
 HeartPulse, Activity, Zap, Bed, BriefcaseMedical
} from "lucide-react";
import { siteConfig } from "@/config/site";

const SCENES = [
 {
 id: "exterior",
 title: "The Elite Hub",
 subtitle: "Architectural Excellence",
 image: "/images/hospital/Hospital view 2.webp",
 description: "Welcome to Indira Super Speciality Hospital, a 100+ bed quaternary care landmark in Vellore, India.",
 facts: [
 { icon: Shield, text: "NABH Accredited Safety" },
 { icon: Zap, text: "24/7 Tertiary Emergency" }
 ]
 },
 {
 id: "reception",
 title: "Global Welcome",
 subtitle: "Institutional Hospitality",
 image: "/images/hospital/Reception.webp",
 description: "Our dedicated International Patient Desk ensures seamless coordination from check-in to recovery.",
 facts: [
 { icon: BriefcaseMedical, text: "Direct TPA/Insurance Desk" },
 { icon: HeartPulse, text: "Multilingual Coordinators" }
 ]
 },
 {
 id: "ot",
 title: "Modular OT Complex",
 subtitle: "Surgical Precision",
 image: "/images/hospital/OT.webp",
 description: "State-of-the-art modular operating theatres with HEPA filtration and robotic surgery alignment.",
 facts: [
 { icon: Activity, text: "Zero Bacteria Environment" },
 { icon: Maximize2, text: "Precision Tech-Integrated" }
 ]
 },
 {
 id: "suite",
 title: "Elite Patient Suite",
 subtitle: "Premium Recovery",
 image: "/images/hospital/Private room.webp",
 description: "Spacious, private suites designed for comfort and privacy during your post-operative stay.",
 facts: [
 { icon: Bed, text: "Attendant-Inclusive Suites" },
 { icon: Zap, text: "24/7 Nursing Call Hub" }
 ]
 },
 {
 id: "diagnostics",
 title: "Diagnostic Power",
 subtitle: "Precision Imaging",
 image: "/images/hospital/Diagnostic.webp",
 description: "NABL accredited labs and 1.5 Tesla MRI/CT facilities for absolute diagnostic accuracy.",
 facts: [
 { icon: Info, text: "Fast-Track Lab Results" },
 { icon: Shield, text: "Radiation Safe Protocols" }
 ]
 }
];

export default function VirtualTourClient() {
 const [activeScene, setActiveScene] = useState(SCENES[0]);
 const [isRotating, setIsRotating] = useState(false);

 const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
 "Hi, I am taking the Virtual Tour of Indira Hospital. I would like to enquire about your facilities and treatment options."
 )}`;

 return (
 <div className="relative min-h-screen bg-slate-950 overflow-hidden font-sans">
 {/* IMMERSIVE SCENE VIEWER */}
 <div className="absolute inset-0 z-0">
 <div key={activeScene.id} className="relative w-full h-full animate-in fade-in duration-1000">
 <Image
 src={activeScene.image}
 alt={activeScene.title}
 fill
 className="object-cover opacity-60 scale-105"
 priority
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
 <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
 </div>
 </div>

 {/* OVERLAY UI */}
 <div className="relative z-10 flex flex-col min-h-screen">
 {/* Top Header */}
 <header className="p-8 flex items-center justify-between">
 <Link href="/gallery" className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-white dark:bg-slate-900 transition-all shadow-2xl">
 <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
 <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Gallery</span>
 </Link>
 
 <div className="flex items-center gap-4">
 <div className="hidden md:flex flex-col items-end">
 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Atmosphere</span>
 <span className="text-xs text-white/60 font-medium italic">High Definition Elite Tour</span>
 </div>
 <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-white dark:bg-slate-900">
 <Camera className="w-5 h-5 text-fuchsia-400 animate-pulse" />
 </div>
 </div>
 </header>

 {/* Main Info Hub */}
 <main className="flex-1 flex flex-col justify-end p-8 md:p-16">
 <div className="max-w-4xl w-full">
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] font-black tracking-widest uppercase mb-6 animate-in slide-in-from-left duration-700">
 <Sparkles className="w-4 h-4" /> {activeScene.subtitle}
 </div>
 
 <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
 {activeScene.title.split(' ').map((word, i) => (
 <span key={i} className={i % 2 === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 block" : "block"}>
 {word}
 </span>
 ))}
 </h2>

 <p className="text-xl text-slate-300 font-light italic leading-relaxed max-w-2xl mb-12">
 {activeScene.description}
 </p>

 <div className="grid sm:grid-cols-2 gap-4 mb-12">
 {activeScene.facts.map((fact, i) => (
 <div key={i} className="flex items-center gap-4 p-5 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-indigo-500/30 transition-all">
 <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
 <fact.icon className="w-5 h-5" />
 </div>
 <span className="text-xs font-bold text-white uppercase tracking-widest italic">{fact.text}</span>
 </div>
 ))}
 </div>

 <div className="flex flex-col sm:flex-row gap-6">
 <a href={waUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-10 py-6 bg-green-600 text-white font-black rounded-3xl hover:bg-green-500 shadow-2xl transition-all">
 <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
 <span className="text-sm uppercase tracking-widest italic">Enquire via WhatsApp</span>
 </a>
 <Link href="/contact" className="flex items-center justify-center gap-4 px-10 py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-3xl hover:bg-white dark:bg-slate-900 transition-colors uppercase tracking-widest text-[11px]">
 Arrange Site Visit
 </Link>
 </div>
 </div>
 </main>

 {/* Scene Navigator Bar */}
 <footer className="p-8 overflow-x-auto">
 <div className="flex gap-4 min-w-max pb-4">
 {SCENES.map((scene) => (
 <button
 key={scene.id}
 onClick={() => setActiveScene(scene)}
 className={`group relative w-24 md:w-48 aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-500 focus:outline-none ${
 activeScene.id === scene.id ? "border-indigo-500 scale-105 shadow-[0_0_30px_rgba(99,102,241,0.3)]" : "border-transparent opacity-40 hover:opacity-100"
 }`}
 >
 <Image src={scene.image} alt={scene.title} fill className="object-cover" />
 <div className="absolute inset-0 bg-slate-900 dark:bg-slate-900 group-hover:bg-transparent transition-colors" />
 <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 to-transparent">
 <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest block truncate">{scene.title}</span>
 </div>
 </button>
 ))}
 </div>
 </footer>
 </div>

 {/* Perspective Background Element */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none uppercase">
 {activeScene.id}
 </div>
 </div>
 );
}
