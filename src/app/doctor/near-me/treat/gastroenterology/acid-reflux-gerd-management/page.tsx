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
    Flame
} from 'lucide-react'

export default function GERDManagementPage() {
    return (
        <SubServiceTemplate
            title="Elite Acid Reflux & GERD Management"
            slug="acid-reflux-gerd-management"
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology"
            description={
                <>
                    <p>
                        Acid reflux is more than just "heartburn"—it's a chronic condition where stomach acid frequently flows back into the esophagus, potentially leading to tissue damage (Barrett's Esophagus) and severe discomfort. At Indira Super Speciality Hospital, we offer **Elite GERD Protocols**. By combining advanced diagnostic pH monitoring with tailored medical therapy and minimally invasive surgical cures, we provide long-term relief from reflux and its complications.
                    </p>
                    <p className="mt-4 text-orange-600 dark:text-orange-400 font-semibold italic">
                        "Extinguishing the fire of reflux with precision diagnostics."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Diagnostic', value: 'pH-Metry', icon: 'Activity' },
                { label: 'Care Type', value: 'Comprehensive', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Varies"
            hospitalStay="Outpatient"
            recoveryTime="Rapid Relief"
            anesthesia="N/A"
            reviews={{
                entityType: 'service',
                entityName: 'GERD Management',
                entitySlug: 'acid-reflux-gerd-management'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized Reflux Care? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/50 border border-orange-100 dark:border-orange-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-orange-800 dark:text-orange-300">The Reflux Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "24-Hour pH Monitoring", text: "The gold standard for diagnosing GERD. We use a tiny sensor to measure exactly how much acid is entering your esophagus over a 24-hour period." },
                                { title: "Endoscopic Evaluation", text: "High-definition endoscopy with Narrow Band Imaging (NBI) to check for inflammation, ulcers, or pre-cancerous changes (Barrett's)." },
                                { title: "Tailored Lifestyle Rehab", text: "We don't just give pills. Our team provides custom dietary and postural plans designed to reduce reflux triggers naturally." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-orange-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-orange-100 dark:border-orange-800 shadow-2xl">
                            <Flame className="w-24 h-24 text-orange-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Cooling Relief</p>
                            <p className="text-slate-500 text-sm">Stopping the corrosive burn of stomach acid at its source through systemic medical care.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Understanding GERD & Acid Reflux</h3>
                    <p>
                        Gastroesophageal Reflux Disease (GERD) occurs when the Lower Esophageal Sphincter (LES)—the muscle 'valve' at the bottom of your food pipe—weakens or relaxes inappropriately. This allows stomach acid and enzymes to splash back up, causing significant pain and tissue damage over time.
                    </p>
                    <p>
                        At Indira Hospital, our gastroenterology team, led by senior specialists, focuses on **Conclusive Diagnostics**. While many patients try over-the-counter antacids for years, we identify the root cause—such as a Hiatal Hernia or LES dysfunction—and provide medical or surgical solutions that offer permanent relief.
                    </p>

                    <h4 className="text-[#005f73] dark:text-orange-400 font-primary">Common & Atypical GERD Symptoms:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Frequent heartburn (burning sensation in the chest)",
                            "Regurgitation of food or sour liquid",
                            "Chronic dry cough or frequent throat clearing",
                            "Difficulty swallowing or a 'lump in the throat' feeling",
                            "Worsening of asthma or sleep disturbances"
                        ].map((symptom, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                <span className="text-sm font-medium">{symptom}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-orange-500 pl-4 italic">The Path to Permanent Relief</h3>
                    <p>
                        Most cases of acid reflux can be managed with professional-grade medications (PPIs) and strict lifestyle modifications. However, for those who are medication-dependent or have large hiatal hernias, we offer **Laparoscopic Fundoplication**—a keyhole surgical procedure that strengthens the LES valve, providing a definitive cure.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-orange-400 mt-10">Why Choose Our Reflux Unit?</h4>
                    <ul>
                        <li>**Advanced Manometry**: Measuring the muscle strength and coordination of your esophagus for precise surgical planning.</li>
                        <li>**NBI Endoscopy**: Ultra-precise mucosal imaging to identify Barrett's Esophagus (pre-cancerous changes) early.</li>
                        <li>**Integrated Nutrition**: Work with our clinical dietitians to identify 'trigger foods' and build a reflux-free diet plan.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-950 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-orange-400" />
                        GERD & Reflux: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Is taking antacids every day dangerous?",
                                a: "Long-term use of daily proton pump inhibitors (PPIs) can lead to vitamin malabsorption and other issues. Our goal is to find the minimum effective dose or provide a surgical cure to reduce medication dependence."
                            },
                            {
                                q: "Can acid reflux cause a chronic cough?",
                                a: "Yes. 'Silent Reflux' often doesn't cause heartburn but causes acid vapors to irritate the throat and lungs, leading to a persistent dry cough and asthma-like symptoms."
                            },
                            {
                                q: "What lifestyle changes help the most?",
                                a: "Losing weight, avoiding meals three hours before bedtime, and sleeping with the head of the bed slightly elevated are the most effective non-medical interventions."
                            },
                            {
                                q: "When should I consider surgery for Reflux?",
                                a: "Surgery is considered if medications no longer work, if you have severe complications like Barrett's Esophagus, or if you simply wish to stop taking daily pills for the rest of your life."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-orange-400 mb-4 flex items-start gap-2">
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
