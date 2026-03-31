'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { getTreatmentBySlug } from '@/lib/data/treatment-data'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Search,
    Activity,
    CheckCircle2,
    Target
} from 'lucide-react'

export default function GastroscopyPage() {
    const data = getTreatmentBySlug('endoscopy-procedure-guide');
    if (!data) return null;

    return (
        <SubServiceTemplate
            title={data.title}
            slug={data.slug}
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology & Hepatology"
            departmentSlug="gastroenterology"
            description={
                <div dangerouslySetInnerHTML={{ __html: data.shortDescription }} />
            }
            quickFacts={[
                { label: 'Procedure Time', value: '10-15 Mins', icon: 'Clock' },
                { label: 'Visualization', value: '4K Ultra-HD', icon: 'Activity' },
                { label: 'Painless', value: 'Sedation Ready', icon: 'Shield' }
            ]}
        >
            <div className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-blue-50 dark:bg-slate-900/50 border border-blue-100 dark:border-slate-800">
                        <h4 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 font-primary">Advanced Mucosal Imaging</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Olympus 190 Series", text: "The highest global standard in endoscopic visualization for early cancer detection." },
                                { title: "Narrow Band Imaging (NBI)", text: "Specialized light spectra that highlight abnormal blood vessel patterns in ulcers." },
                                { title: "Therapeutic Ready", text: "Instant biopsy or bleeding control (APC) during the same session." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-200/20 rounded-[3rem] blur-3xl group-hover:bg-blue-200/30 transition-all" />
                        <div className="relative p-8 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-blue-100 dark:border-slate-800 shadow-2xl">
                            <Activity className="w-20 h-20 text-blue-500 mx-auto mb-6" />
                            <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">High-Definition Diagnostics</p>
                            <p className="text-slate-500 text-sm antialiased">Conclusive results for acid reflux and stomach pain.</p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <div dangerouslySetInnerHTML={{ __html: data.fullDescription }} />
                </div>

                <div className="bg-blue-50/50 dark:bg-white/5 rounded-[2.5rem] p-10 md:p-16 border border-blue-100">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3 font-primary">
                        <Search className="text-blue-500" />
                        Clinical FAQs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {data.faq?.map((faq, idx) => (
                            <div key={idx} className="space-y-3">
                                <h4 className="font-bold text-slate-900 dark:text-white flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                    {faq.question}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed antialiased pl-7">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    );
}
