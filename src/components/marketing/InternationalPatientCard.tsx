import Link from "next/link";
import { Plane, ArrowRight, HeartPulse, Globe2 } from "lucide-react";

export function InternationalPatientCard() {
    return (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
            
            {/* World Map Overlay Graphic (Abstract) */}
            <div className="absolute top-10 right-0 w-48 h-48 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none text-white">
                <Globe2 className="w-full h-full" />
            </div>

            <div className="p-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm">
                    <Plane className="w-3.5 h-3.5" /> International Patients
                </div>

                <h3 className="text-2xl font-black text-white leading-tight mb-3">
                    Global Care Excellence
                </h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                    Traveling to India? Our dedicated international desk handles everything from medical visas and airport pickups to multi-cuisine dining.
                </p>

                <ul className="space-y-4 mb-8">
                    {[
                        "Medical Visa Assistance",
                        "Complimentary Airport Transfers",
                        "Dedicated Language Translators",
                        "Priority Appointments"
                    ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <span className="text-sm font-bold text-slate-300">{feature}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/patients/international"
                    className="group/btn relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.3)] shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                    <span className="relative z-10">Get Treatment Estimate</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                </Link>
            </div>
        </div>
    );
}
