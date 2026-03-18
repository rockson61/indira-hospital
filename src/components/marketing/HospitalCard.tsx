import Link from "next/link";
import { ShieldCheck, ArrowRight, HeartPulse, Shield, Star, Award, Clock } from "lucide-react";
import { Stethoscope } from "healthicons-react/outline";

export function HospitalCard() {
    return (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="p-8 relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-2xl mb-6 shadow-inner">
                    <Stethoscope className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                    Indira Super Speciality Hospital
                </h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">
                    Delivering world-class clinical excellence, advanced robotics, and compassionate care since 1988.
                </p>

                {/* Trust Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1 items-start">
                        <Clock className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-white font-black">24/7</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Emergency</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1 items-start">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-black">NABH</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Accredited</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1 items-start">
                        <Star className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-black">4.8/5</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Patient Rating</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1 items-start">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-black">35+</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years Trust</span>
                    </div>
                </div>

                <ul className="space-y-3 mb-8">
                    {[
                        "150+ Elite Specialists",
                        "Cashless Insurance Coverage",
                        "Advanced Robotic Surgery",
                        "International Patient Concierge"
                    ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300 font-medium">
                            <ShieldCheck className="w-4 h-4 text-fuchsia-500 mt-0.5 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link
                    href="/contact"
                    className="group/btn relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all overflow-hidden"
                >
                    <span className="relative z-10">Book Consultation</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                </Link>
            </div>
        </div>
    );
}
