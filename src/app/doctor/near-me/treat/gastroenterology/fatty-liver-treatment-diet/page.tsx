'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Activity,
    CheckCircle2,
    Search,
    History,
    Beef,
    Salad
} from 'lucide-react'

export default function FattyLiverPage() {
    return (
        <SubServiceTemplate
            title="Elite Fatty Liver Treatment & Reversal"
            slug="fatty-liver-treatment-diet"
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology"
            description={
                <>
                    <p>
                        Fatty liver disease (NAFLD) is a silent epidemic that can progress to irreversible cirrhosis if left untreated. At Indira Super Speciality Hospital, we offer **Advanced Hepatology Protocols** focused on early detection and complete reversal. By combining high-resolution FibroScan technology with clinical nutritional therapy and metabolic monitoring, we help you shed liver fat, reduce inflammation, and restore your liver's vital functions.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Holistic liver restoration through metabolic science and nutrition."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Evaluation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Scans', value: 'FibroScan', icon: 'Activity' },
                { label: 'Focus', value: 'Reversal', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Ongoing"
            hospitalStay="Outpatient"
            recoveryTime="Chronic Mgmt"
            anesthesia="N/A"
            reviews={{
                entityType: 'service',
                entityName: 'Fatty Liver Treatment',
                entitySlug: 'fatty-liver-treatment-diet'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Early Intervention? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-100 dark:border-emerald-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-emerald-800 dark:text-emerald-300">The Liver Reversal Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "FibroScan Technology", text: "We use non-invasive vibration-controlled transient elastography (FibroScan) to measure liver stiffness and fat content without the need for a painful biopsy." },
                                { title: "Metabolic Profiling", text: "Fatty liver is often a part of metabolic syndrome. We provide comprehensive screening for insulin resistance, lipid disorders, and internal inflammation." },
                                { title: "Clinical Diet Management", text: "Work with hepatology-trained dietitians who build customized 'Liver-Healing' meal plans designed to oxidize stored fat and reduce liver load." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Salad className="w-24 h-24 text-emerald-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Nutritional Cure</p>
                            <p className="text-slate-500 text-sm">Targeting the root cause of fat accumulation through science-backed diet and exercise protocols.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Understanding Fatty Liver Disease</h3>
                    <p>
                        Fatty liver, or Non-Alcoholic Fatty Liver Disease (NAFLD), occurs when more than 5-10% of your liver's weight is fat. While it starts as "simple fatty liver," it can progress to Non-Alcoholic Steatohepatitis (NASH), where the liver becomes inflamed and develops scar tissue (Fibrosis).
                    </p>
                    <p>
                        At Indira Hospital, our hepatology unit focuses on **Active Reversal**. The liver is the only organ capable of regenerating and healing itself entirely, provided the toxic cycle of insulin resistance and poor nutrition is broken. We provide the clinical tools and the constant monitoring needed to turn back the clock on liver damage.
                    </p>

                    <h4 className="text-[#005f73] dark:text-emerald-400 font-primary">Who Needs a Liver Screening?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Individuals with Diabetes or Pre-diabetes",
                            "Patients with high BMI (Overweight or Obesity)",
                            "Persistent fatigue or mild pain in the upper right abdomen",
                            "Individuals with high cholesterol or triglycerides",
                            "Known cases of polycystic ovary syndrome (PCOS)"
                        ].map((risk, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm font-medium">{risk}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-emerald-500 pl-4 italic">The Path to Liver Regeneration</h3>
                    <p>
                        Our treatment roadmap doesn't rely solely on medications. We utilize a **Three-Phase Recovery Protocol**: 1. Detoxification & Inflammation Control, 2. Metabolic Re-balancing, and 3. Long-term Maintenance. By tracking your progress through serial FibroScans and Liver Function Tests (LFT), we provide objective proof of your liver's journey back to health.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-emerald-400 mt-10">Why Choose Indira for Liver Care?</h4>
                    <ul>
                        <li>**Advanced FibroScan**: Painless, 10-minute scan that replaces the need for liver biopsy in most cases.</li>
                        <li>**Integrated Endocrine Hub**: Coordinating with endocrinologists to manage the underlying diabetes that often drives fatty liver.</li>
                        <li>**Specialized Hepatology Nurses**: Dedicated support for education on lifestyle and medication adherence.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-emerald-400" />
                        Liver Health: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Is fatty liver really dangerous if I feel fine?",
                                a: "Yes. Fatty liver is often symptomless until it reaches advanced stages like cirrhosis or liver cancer. Early intervention is the only way to prevent permanent liver failure."
                            },
                            {
                                q: "Can fatty liver be completely reversed?",
                                a: "In most cases of NAFLD and early-stage NASH, the liver is capable of complete regeneration if the underlying metabolic and nutritional issues are corrected."
                            },
                            {
                                q: "How long does it take to see improvements?",
                                a: "With strict adherence to our metabolic and dietary protocols, significant reductions in liver fat and enzymes can often be seen within 3 to 6 months."
                            },
                            {
                                q: "Do I need a liver biopsy for diagnosis?",
                                a: "With modern FibroScan technology, we can accurately grade fat and fibrosis levels without a biopsy in the majority of patients."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-emerald-400 mb-4 flex items-start gap-2">
                                    <Zap className="w-5 h-5 mt-1 shrink-0" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed antialiased pl-7">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SubServiceTemplate>
    );
}
