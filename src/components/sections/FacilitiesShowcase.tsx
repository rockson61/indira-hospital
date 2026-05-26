import Link from "next/link"
import { SectionContainer } from "@/components/ui/section-container"
import { Scan, Clock, ArrowRight, Shield, Microscope, Activity, Baby, ShieldCheck, Ambulance, Heart, Zap, Compass, UserCheck } from "lucide-react"

import { Pills2, Electricity, HeartCardiogram } from "healthicons-react/outline";
import { clinicFacilities } from "@/lib/data/clinic-config";

export function FacilitiesShowcase() {
 return (
 <SectionContainer className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
 <HeartCardiogram className="w-3.5 h-3.5 text-fuchsia-500" /> Advanced Support Facilities
 </span>
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-6">
 Beyond Consultations
 </h2>
 <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium">
 Comprehensive healthcare requires uninterrupted support. Explore our state-of-the-art diagnostic imaging and round-the-clock hospital services.
 </p>
 </div>

 <div className="max-w-7xl mx-auto px-4">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {clinicFacilities.map((facility, index) => (
 <div
 key={index}
 className="group bg-white dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 dark:hover:border-fuchsia-900 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4"
 >
 <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950 flex items-center justify-center group-hover:scale-110 transition-transform">
 {index === 0 && <Microscope className="w-6 h-6 text-fuchsia-600" />}
 {index === 1 && <Zap className="w-6 h-6 text-fuchsia-600" />}
 {index === 2 && <HeartCardiogram className="w-6 h-6 text-fuchsia-600" />}
 {index === 3 && <Activity className="w-6 h-6 text-fuchsia-600" />}
 {index === 4 && <Scan className="w-6 h-6 text-fuchsia-600" />}
 {index === 5 && <Pills2 className="w-6 h-6 text-fuchsia-600" />}
 {index === 6 && <Compass className="w-6 h-6 text-fuchsia-600" />}
 {index === 7 && <Activity className="w-6 h-6 text-fuchsia-600" />}
 {index === 8 && <UserCheck className="w-6 h-6 text-fuchsia-600" />}
 {index === 9 && <Ambulance className="w-6 h-6 text-fuchsia-600" />}
 {index === 10 && <ShieldCheck className="w-6 h-6 text-fuchsia-600" />}
 {!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(index)) && <Shield className="w-6 h-6 text-fuchsia-600" />}
 </div>
 <span className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-tight">
 {facility}
 </span>
 </div>
 ))}
 </div>
 </div>

 <div className="mt-16 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4">
 {/* 24/7 Pharmacy Card (Keep as Highlight) */}
 <div className="flex-1 group relative bg-white dark:bg-slate-800/50 rounded-[3rem] p-10 border border-emerald-100 dark:border-emerald-900/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center mb-6 border border-emerald-100 dark:border-emerald-900">
 <Pills2 className="w-8 h-8 text-emerald-500" />
 </div>
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">The Indira Pharmacy</h3>
 <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
 24x7 stock of critical, life-saving medications with verified cold-chain integrity.
 </p>
 <Link href="/pharmacy" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
 Visit Pharmacy <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>

 {/* Scans & Imaging Card (Keep as Highlight) */}
 <div className="flex-1 group relative bg-white dark:bg-slate-800/50 rounded-[3rem] p-10 border border-blue-100 dark:border-blue-900/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-900">
 <Scan className="w-8 h-8 text-blue-500" />
 </div>
 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Scans & Imaging</h3>
 <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
 High-precision diagnostics including MRI, 128-Slice CT, and 4D Ultrasound arrays.
 </p>
 <Link href="/scans" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
 View Scan Details <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </div>
 </SectionContainer>
 )
}

