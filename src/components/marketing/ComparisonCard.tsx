import { XCircle, CheckCircle } from "lucide-react";

interface ComparisonCardProps {
    title: string;
    targetTreatment: {
        name: string;
        benefits: string[];
    };
    alternativeTreatment: {
        name: string;
        drawbacks: string[];
    };
}

export function ComparisonCard({ title, targetTreatment, alternativeTreatment }: ComparisonCardProps) {
    return (
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 relative">
            {/* VS Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center font-black text-xs text-slate-400 border-4 border-slate-50 dark:border-slate-900/80 shadow-sm shadow-slate-200/50 dark:shadow-none">
                VS
            </div>

            <h3 className="text-center font-bold text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-6">
                {title}
            </h3>

            <div className="space-y-6">
                {/* Target Treatment (The 'Winner') */}
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border-2 border-fuchsia-100 dark:border-fuchsia-900/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-full blur-xl pointer-events-none" />
                    
                    <h4 className="font-black text-fuchsia-700 dark:text-fuchsia-400 text-lg mb-4 leading-tight">
                        {targetTreatment.name}
                    </h4>
                    <ul className="space-y-2.5">
                        {targetTreatment.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Alternative Treatment */}
                <div className="bg-slate-100 dark:bg-slate-950/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-800/50">
                    <h4 className="font-black text-slate-500 dark:text-slate-500 text-lg mb-4 leading-tight">
                        {alternativeTreatment.name}
                    </h4>
                    <ul className="space-y-2.5">
                        {alternativeTreatment.drawbacks.map((drawback, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                                <XCircle className="w-5 h-5 text-rose-400/70 shrink-0" />
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-snug">{drawback}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
