"use client";
import React, { useState } from "react";
import { Maximize2, Move, Info, MapPin, Play, Box } from "lucide-react";
import { ModernCard } from "@/components/ui/modern-card";

interface TourPoint {
 id: string;
 title: string;
 description: string;
 coords: { x: number; y: number };
}

const TOUR_POINTS: TourPoint[] = [
 { id: "ot-1", title: "Robotic OT Suite", description: "State-of-the-art operative suite equipped with laser precision platforms.", coords: { x: 45, y: 35 } },
 { id: "icu-1", title: "Elite Cardiac ICU", description: "Dedicated 24/7 monitoring for post-surgical cardiac patients.", coords: { x: 75, y: 55 } },
 { id: "suite-1", title: "Premium Recovery Suite", description: "Cinematic healing environment with luxury-tier amenities.", coords: { x: 25, y: 70 } }
];

export function VirtualTour() {
 const [activePoint, setActivePoint] = useState<TourPoint | null>(null);

 return (
 <section className="relative w-full aspect-video rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl group">
 {/* Background "Tour" Placeholder - In real world, this would be a 360 renderer like Three.js or Pannellum */}
 <div className="absolute inset-0 bg-[url('/images/hospital/Hospital%20view%202.webp')] bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100">
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
 </div>

 {/* Glassmorphic Interface */}
 <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
 <div className="flex justify-between items-start pointer-events-auto">
 <div className="p-4 bg-slate-900 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
 <h2 className="text-white font-black text-xl flex items-center gap-2 uppercase tracking-tighter">
 <Box className="w-5 h-5 text-fuchsia-400" />
 Indira Elite 360° Walkthrough
 </h2>
 <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-widest">Experience Clinical Mastery Virtually</p>
 </div>
 <div className="flex gap-2">
 <button className="p-3 bg-white dark:bg-slate-900 rounded-full text-white hover:bg-white dark:bg-slate-900 transition-all">
 <Move className="w-5 h-5" />
 </button>
 <button className="p-3 bg-white dark:bg-slate-900 rounded-full text-white hover:bg-white dark:bg-slate-900 transition-all">
 <Maximize2 className="w-5 h-5" />
 </button>
 </div>
 </div>

 <div className="flex justify-center pointer-events-auto">
 <button className="group/btn flex items-center gap-4 px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black rounded-full transition-all shadow-float -translate-y-4">
 <Play className="w-5 h-5 fill-current" />
 START CINEMATIC TOUR
 </button>
 </div>
 </div>

 {/* Interactive Hotspots */}
 <div className="absolute inset-0">
 {TOUR_POINTS.map(point => (
 <div 
 key={point.id}
 className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
 style={{ left: `${point.coords.x}%`, top: `${point.coords.y}%` }}
 onClick={() => setActivePoint(point)}
 >
 <div className="relative">
 <div className="absolute inset-0 w-8 h-8 bg-fuchsia-500 rounded-full animate-ping opacity-20" />
 <div className="relative w-8 h-8 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border-2 border-fuchsia-500 shadow-lg group/point hover:scale-110 transition-all">
 <Info className="w-4 h-4 text-fuchsia-600" />
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Hotspot Detail Overlay */}
 {activePoint && (
 <div className="absolute bottom-12 left-12 right-12 md:left-auto md:w-80 p-6 bg-slate-900 dark:bg-slate-900 border border-fuchsia-500/30 rounded-3xl animate-in fade-in slide-in-from-bottom-4">
 <button 
 onClick={() => setActivePoint(null)}
 className="absolute top-4 right-4 text-slate-400 hover:text-white"
 >
 ✕
 </button>
 <div className="flex items-center gap-2 mb-3">
 <MapPin className="w-4 h-4 text-fuchsia-400" />
 <span className="text-xs font-black text-fuchsia-400 uppercase tracking-widest">{activePoint.title}</span>
 </div>
 <h3 className="text-white font-bold mb-2">{activePoint.title}</h3>
 <p className="text-slate-400 text-sm leading-relaxed">{activePoint.description}</p>
 <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-white dark:bg-slate-900 hover:bg-white dark:bg-slate-900 text-white text-xs font-bold rounded-xl transition-all">
 VIEW IN DEPTH
 <ChevronRight className="w-3 h-3" />
 </button>
 </div>
 )}
 </section>
 );
}

function ChevronRight(props: any) {
 return (
 <svg
 {...props}
 xmlns="http://www.w3.org/2000/svg"
 width="24"
 height="24"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 >
 <path d="m9 18 6-6-6-6" />
 </svg>
 );
}
