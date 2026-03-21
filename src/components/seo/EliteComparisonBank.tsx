import React from 'react';
import { Check, X, ShieldCheck, Zap, HeartPulse, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonRowProps {
    feature: string;
    traditional: string;
    elite: string;
    isPositive?: boolean;
}

const ComparisonRow = ({ feature, traditional, elite, isPositive = true }: ComparisonRowProps) => (
    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 dark:border-slate-800/50 py-4 items-center gap-4">
        <div className="font-bold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">{feature}</div>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm italic">
            <X className="w-4 h-4 text-slate-400 shrink-0" />
            {traditional}
        </div>
        <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 text-sm font-black">
            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
            {elite}
        </div>
    </div>
);

export const EliteComparisonBank = ({ type = 'laser' }: { type?: 'laser' | 'laparoscopy' | 'general' }) => {
    return (
        <div className="my-16">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-100 dark:bg-fuchsia-900/20 blur-[100px] rounded-full -mr-32 -mt-32" />
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">The Indira Elite Comparison</h3>
                            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Surgical Technology Standards</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {/* Header Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-6">
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Clinical Metric</div>
                            <div className="text-xs font-black text-slate-400 uppercase tracking-widest hidden md:block">Traditional Surgery</div>
                            <div className="text-xs font-black text-fuchsia-600 uppercase tracking-widest hidden md:block italic underline decoration-2 underline-offset-4">Indira Elite Standards</div>
                        </div>

                        {type === 'laser' && (
                            <>
                                <ComparisonRow feature="Cuts & Stitches" traditional="Large Incisions / Sutures" elite="No Cuts / Stitch-less Scan" />
                                <ComparisonRow feature="Hospital Stay" traditional="3–5 Days Admission" elite="Same-Day Discharge (24h)" />
                                <ComparisonRow feature="Blood Loss" traditional="Significant / Requires Packs" elite="Practically Bloodless" />
                                <ComparisonRow feature="Recovery Time" traditional="2–4 Weeks Bed Rest" elite="Resume Work in 48 Hours" />
                                <ComparisonRow feature="Recurrence Risk" traditional="Higher (Up to 15%)" elite="Ultra-Low (<1%)" />
                                <ComparisonRow feature="Pain Level" traditional="High (Opioid Meds)" elite="Minimal to Nil" />
                            </>
                        )}
                        
                        {type === 'laparoscopy' && (
                            <>
                                <ComparisonRow feature="Incision Size" traditional="6–10 Inch Open Cut" elite="3–5mm Pencil Hole" />
                                <ComparisonRow feature="Pain Score" traditional="Intense Post-Op Pain" elite="Minimal Discomfort" />
                                <ComparisonRow feature="Internal Scarring" traditional="Risk of Adhesions" elite="Near-Zero Scarring" />
                                <ComparisonRow feature="Food/Activity" traditional="Restricted for Weeks" elite="Diet Resumed Same Day" />
                            </>
                        )}
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <Clock className="w-8 h-8 text-blue-500 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Rapid Results</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Pioneering 1-hour laser procedures for Proctology and Gynaecology.</p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Safety Standards</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">NABH Protocols & disposable SiLaC laser fibers for 100% sterility.</p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-slate-800/30 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <HeartPulse className="w-8 h-8 text-fuchsia-600 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Patient First</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Empathetic nursing and 24/7 post-op WhatsApp support desk.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* SEO Trust Signal Text */}
            <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-6 text-center italic uppercase tracking-widest font-bold">
                * Comparison based on clinical internal audits (2025-26) at Indira Super Speciality Hospital. Results may vary based on individual medical history.
            </p>
        </div>
    );
};
