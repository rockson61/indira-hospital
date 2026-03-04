import Link from "next/link"
import { SectionContainer } from "@/components/ui/section-container"
import { Pill, Scan, Clock, Zap, ArrowRight, Activity, ShieldCheck } from "lucide-react"

export function FacilitiesShowcase() {
    return (
        <SectionContainer className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
                    <Activity className="w-3.5 h-3.5 text-fuchsia-500" /> Advanced Support Facilities
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                    Beyond Consultations
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium">
                    Comprehensive healthcare requires uninterrupted support. Explore our state-of-the-art diagnostic imaging and round-the-clock pharmacy services.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">

                {/* 24/7 Pharmacy Card */}
                <div className="group relative bg-white dark:bg-slate-800/50 rounded-[3rem] p-10 lg:p-12 border border-emerald-100 dark:border-emerald-900/30 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-500 flex flex-col">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-emerald-100 dark:border-emerald-900">
                            <Pill className="w-10 h-10 text-emerald-500" />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5">
                                <Clock className="w-3 h-3" /> 24x7 Open
                            </div>
                            <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5">
                                <ShieldCheck className="w-3 h-3" /> 100% Genuine
                            </div>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            The Indira Pharmacy
                        </h3>

                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10 flex-grow">
                            Never worry about medication availability. We stock critical, life-saving, and rare medications with verified cold-chain integrity and offer ultra-fast home delivery across Vellore.
                        </p>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <Link href="/pharmacy" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-500 text-emerald-700 hover:text-white font-bold rounded-2xl transition-all duration-300 border border-emerald-200 dark:border-emerald-800/50 overflow-hidden w-full sm:w-auto justify-center">
                            <span className="relative z-10">Visit Pharmacy Hub</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Scans & Imaging Card */}
                <div className="group relative bg-white dark:bg-slate-800/50 rounded-[3rem] p-10 lg:p-12 border border-blue-100 dark:border-blue-900/30 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-blue-100 dark:border-blue-900">
                            <Scan className="w-10 h-10 text-blue-500" />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5">
                                <Zap className="w-3 h-3" /> Advanced Tech
                            </div>
                            <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5">
                                <Clock className="w-3 h-3" /> Fast Reports
                            </div>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            Scans & Imaging Center
                        </h3>

                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10 flex-grow">
                            Equipped with a silent 3T MRI, 128-Slice CT, and 4D Ultrasound arrays. We provide the highest resolution diagnostic clarity, allowing our specialists to treat with absolute precision.
                        </p>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <Link href="/scans" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-500 text-blue-700 hover:text-white font-bold rounded-2xl transition-all duration-300 border border-blue-200 dark:border-blue-800/50 overflow-hidden w-full sm:w-auto justify-center">
                            <span className="relative z-10">View Scan Details</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </SectionContainer>
    )
}
