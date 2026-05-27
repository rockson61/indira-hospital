"use client";
import React, { useState, useEffect } from "react";
import { Circle, Users, Calendar, ArrowRight, Zap, MapPin, Phone } from "lucide-react";

interface AvailabilityState {
 name: string;
 specialty: string;
 status: "Available Now" | "Next Slot: 10m" | "Next Slot: 20m";
 activePatients: number;
}

const INITIAL_AVAILABILITY: AvailabilityState[] = [
 { name: "Dr. Srinivasan Karbar", specialty: "Proctology", status: "Available Now", activePatients: 4 },
 { name: "Dr. Jackson P John", specialty: "Orthopaedics", status: "Next Slot: 10m", activePatients: 12 },
 { name: "Dr. K. Arulmurugan", specialty: "General Surgery", status: "Available Now", activePatients: 8 }
];

export function AvailabilityTicker() {
 const [currentTime, setCurrentTime] = useState(new Date());
 const [availability, setAvailability] = useState<AvailabilityState[]>(INITIAL_AVAILABILITY);

 const [mounted, setMounted] = useState(false);

 // Live Clock
 useEffect(() => {
 setMounted(true);
 const timer = setInterval(() => setCurrentTime(new Date()), 1000);
 return () => clearInterval(timer);
 }, []);

 // Simulate "Real-Time" changes
 useEffect(() => {
 const interval = setInterval(() => {
 setAvailability(prev => prev.map(doc => ({
 ...doc,
 activePatients: Math.max(0, doc.activePatients + (Math.random() > 0.5 ? 1 : -1))
 })));
 }, 5000);
 return () => clearInterval(interval);
 }, []);

 const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 const dateString = currentTime.toLocaleDateString([], { day: 'numeric', month: 'short' });

 return (
 <div className="w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-2">
 <div className="flex animate-marquee whitespace-nowrap items-center gap-12">
 {/* Welcome Message */}
 <div className="flex items-center gap-3 px-6 border-r border-slate-200 dark:border-slate-800">
 <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.2em]">Welcome to Indira Super Speciality Hospital</span>
 </div>

 {/* Weather & Time */}
 <div className="flex items-center gap-6 px-6 border-r border-slate-200 dark:border-slate-800">
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Vellore: 31°C</span>
 <span className="text-sm">☀️</span>
 </div>
 <div className="flex items-center gap-2">
 <Calendar className="w-3 h-3 text-slate-500" />
 <span className="text-[10px] font-bold text-white uppercase tracking-widest">{mounted ? `${dateString} | ${timeString}` : "..."}</span>
 </div>
 </div>

 {/* Address & Contact */}
 <div className="flex items-center gap-6 px-6 border-r border-slate-200 dark:border-slate-800">
 <div className="flex items-center gap-2">
 <MapPin className="w-3 h-3 text-fuchsia-500" />
 <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">54, Katpadi Main Rd, Vellore</span>
 </div>
 <div className="flex items-center gap-2">
 <Phone className="w-3 h-3 text-emerald-500" />
 <span className="text-[10px] font-bold text-white uppercase tracking-widest">Emergency: +91 98423 24425</span>
 </div>
 </div>

 {/* Original Doctor Availability */}
 {availability.map((doc, i) => (
 <div key={`doc-${i}`} className="flex items-center gap-6 px-6 border-r border-slate-200 dark:border-slate-800 last:border-none">
 <div className="flex items-center gap-3">
 <div className="relative">
 <Circle className={`w-3 h-3 fill-current ${doc.status === 'Available Now' ? 'text-emerald-400' : 'text-amber-400'}`} />
 <div className={`absolute inset-0 w-3 h-3 rounded-full animate-ping ${doc.status === 'Available Now' ? 'bg-emerald-400' : 'bg-amber-400'} opacity-40`} />
 </div>
 <span className="text-[10px] font-black text-white uppercase tracking-widest">{doc.name}</span>
 </div>
 <div className="flex items-center gap-4">
 <span className="text-[10px] font-bold text-slate-400 uppercase">{doc.specialty}</span>
 <span className="px-2 py-0.5 bg-white dark:bg-slate-900 rounded text-[9px] font-black text-fuchsia-400 border border-fuchsia-500/30 uppercase">
 {doc.status}
 </span>
 </div>
 <div className="flex items-center gap-2">
 <Users className="w-3 h-3 text-slate-500" />
 <span className="text-[9px] font-black text-slate-500 uppercase">{doc.activePatients} In-Queue</span>
 </div>
 </div>
 ))}

 {/* Duplicate for Seamless Loop */}
 <div className="flex items-center gap-3 px-6 border-r border-slate-200 dark:border-slate-800">
 <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.2em]">Welcome to Indira Super Speciality Hospital</span>
 </div>
 </div>
 </div>
 );
}

export function AvailabilityCTA() {
 return (
 <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-clay-dark flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-fuchsia-500/30 transition-all">
 <div className="flex items-center gap-6">
 <div className="w-16 h-16 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center border border-fuchsia-500/20">
 <Zap className="w-8 h-8 text-fuchsia-500 animate-pulse" />
 </div>
 <div>
 <h4 className="text-white font-black text-lg tracking-tight">Elite Real-Time Booking</h4>
 <p className="text-slate-400 text-xs font-medium">Skip the wait. Secure your clinical slot with our senior specialists instantly.</p>
 </div>
 </div>
 <button className="flex items-center gap-3 px-8 py-3 bg-fuchsia-600 text-white font-black rounded-full hover:bg-fuchsia-500 transition-all shadow-float active:scale-95 group-hover:px-10">
 CHECK LIVE SLOTS
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>
 );
}
