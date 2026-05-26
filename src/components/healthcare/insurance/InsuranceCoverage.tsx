import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { insurancePlans as insurancePlansData } from "@/lib/data/clinic-config"

const insurancePlans = insurancePlansData;

export function InsuranceCoverage() {
 return (
 <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
 <div className="container mx-auto px-4">
 <h2 className="elite-section-title text-center mb-12">Insurance Coverage</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 {insurancePlans.map((plan, index) => (
 <article 
 key={index} 
 className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/50 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:shadow-fuchsia-500/10 transition-all duration-500 overflow-hidden"
 >
 {/* Decorative Subtle Glow */}
 <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none -mr-10 -mt-10" />

 <div className="flex justify-between items-start mb-6 relative z-10">
 <h3 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight leading-tight max-w-[70%]">{plan.provider}</h3>
 <div className="bg-fuchsia-50 dark:bg-fuchsia-950/50 px-3 py-1 rounded-full border border-fuchsia-100 dark:border-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-400 font-bold text-[11px] uppercase tracking-wider whitespace-nowrap">
 {plan.coverage}
 </div>
 </div>

 <div className="flex-grow mb-6 relative z-10">
 <p className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Covered Treatments</p>
 <div className="flex flex-wrap gap-1.5">
 {plan.treatments.map((treatment, idx) => (
 <span
 key={idx}
 className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
 >
 {treatment}
 </span>
 ))}
 </div>
 </div>

 <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-auto relative z-10 flex items-center justify-between">
 <span className="text-[13px] font-bold text-slate-500 dark:text-slate-400">Cashless Facility</span>
 {plan.cashless === "Yes" ? (
 <span className="inline-flex items-center justify-center bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-500 font-black text-[12px] px-3 py-1 rounded-xl border border-green-200/50 dark:border-green-900/50">Available</span>
 ) : (
 <span className="inline-flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold text-[12px] px-3 py-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50">Partial/No</span>
 )}
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 )
}
