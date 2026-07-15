"use client";
import React, { useState, useEffect } from "react";
import { Circle, Sparkles, Calendar, ArrowRight, Zap, MapPin, Phone } from "lucide-react";

interface KeywordTickerState {
  keyword: string;
  specialty: string;
  status: string;
  highlight: string;
}

const TICKER_KEYWORDS: KeywordTickerState[] = [
  { keyword: "Best Hospital in Vellore", specialty: "Multi-Speciality Care", status: "NABH Accredited", highlight: "15,000+ Successful Surgeries" },
  { keyword: "Laser Piles Treatment in Vellore", specialty: "Laser Proctology", status: "Same-Day Discharge", highlight: "Painless & Sphincter-Saving" },
  { keyword: "Laparoscopic Hernia Surgery in Vellore", specialty: "General Surgery", status: "Minimally Invasive", highlight: "Rapid Recovery & Tiny Scars" }
];

export function AvailabilityTicker() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Live Clock (starts after mount to stay hydration-safe)
  useEffect(() => {
    const update = () => setCurrentTime(new Date());
    const frame = requestAnimationFrame(update);
    const timer = setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, []);

  const timeString = currentTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime?.toLocaleDateString([], { day: 'numeric', month: 'short' });

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
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{currentTime ? `${dateString} | ${timeString}` : "..."}</span>
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

        {/* Top 3 Money Keywords */}
        {TICKER_KEYWORDS.map((item, i) => (
          <div key={`keyword-${i}`} className="flex items-center gap-6 px-6 border-r border-slate-200 dark:border-slate-800 last:border-none">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Circle className="w-3 h-3 fill-current text-emerald-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping bg-emerald-400 opacity-40" />
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.keyword}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase">{item.specialty}</span>
              <span className="px-2 py-0.5 bg-white dark:bg-slate-900 rounded text-[9px] font-black text-fuchsia-400 border border-fuchsia-500/30 uppercase">
                {item.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span className="text-[9px] font-black text-slate-400 uppercase">{item.highlight}</span>
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
          <h4 className="text-white font-black text-lg tracking-tight">Real-Time Booking</h4>
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
