import Link from "next/link";
import { ShieldCheck, ArrowRight, Wallet } from "lucide-react";

export function InsuranceCard() {
 const popularInsurances = [
 "Star Health",
 "HDFC Ergo",
 "Care Health",
 "Niva Bupa",
 "Aditya Birla",
 "SBI General"
 ];

 return (
 <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 relative overflow-hidden shadow-clay-dark group border border-emerald-400/50">
 {/* Background elements */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-slate-900 rounded-full blur-[60px] pointer-events-none" />
 
 <div className="relative z-10">
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm">
 <Wallet className="w-3.5 h-3.5" /> Cashless Facility
 </div>

 <h3 className="text-2xl font-black text-white leading-tight mb-3">
 Worry-Free Healing.
 </h3>
 <p className="text-emerald-100/90 text-sm font-medium leading-relaxed mb-8">
 We accept all major national & international insurances with dedicated TPA desks for zero-deposit admissions.
 </p>

 <div className="grid grid-cols-2 gap-3 mb-8">
 {popularInsurances.map((ins, idx) => (
 <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white text-center flex items-center justify-center shadow-inner">
 {ins}
 </div>
 ))}
 </div>

 <Link 
 href="/patients/insurance"
 className="group/btn relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-emerald-900 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all overflow-hidden"
 >
 <span className="relative z-10">View All Providers</span>
 <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
 </Link>
 </div>
 </div>
 );
}
