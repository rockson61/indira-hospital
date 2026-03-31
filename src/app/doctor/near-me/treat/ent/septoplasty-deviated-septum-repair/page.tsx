'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Wind,
    Activity,
    CheckCircle2,
    Users
} from 'lucide-react'

export default function SeptoplastyPage() {
    return (
        <SubServiceTemplate
            title="Septoplasty: Deviated Septum Repair Guide"
            slug="septoplasty-deviated-septum-repair"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        A **Deviated Nasal Septum (DNS)** can significantly obstruct your breathing, leading to chronic mouth-breathing, snoring, and recurring sinus infections. **Septoplasty** is the surgical correction of this internal nasal wall to restore a balanced and clear airway. At Indira Super Speciality Hospital, we perform endoscopic-assisted septoplasty for maximum precision and minimal tissue trauma.
                    </p>
                    <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold italic">
                        "Correcting the foundation of nasal breathing for better health."
                    </p>
                </>
            }
        >
            <div className="space-y-16">
                {/* Visual Section: Why Septoplasty? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-blue-800 dark:text-blue-300">Functional Airway Restoration</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Endoscopic Accuracy", text: "Endoscopes look deep into the nasal cavity to address posterior deviations missed by conventional surgery." },
                                { title: "Turbinate Reduction", text: "Simultaneous reduction of enlarged turbinates (concha) for extra airway volume." },
                                { title: "Internal Splinting", text: "Using silicone splints to maintain alignment without the need for traditional painful packing." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#005f73]/20 rounded-[3rem] blur-3xl" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Wind className="w-24 h-24 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Breathe Free</p>
                            <p className="text-slate-500 text-sm">Correcting anatomical blocks to restore 100% nasal throughput.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Understanding the Deviated Septum</h3>
                    <p>
                        The nasal septum is the wall of bone and cartilage that divides your nose into two separate nostrils. When this wall is crooked (deviated), it can obstruct one or both sides of the nose. This rarely resolves with medication alone, as it is a structural mechanical block. **Dr. Gayathri**, our lead ENT surgeon, specializes in correcting these deviations using advanced microsurgical tools that preserve the strength of the nasal support while maximizing the internal space.
                    </p>

                    <h4 className="text-[#005f73] dark:text-fuchsia-400 font-primary">Symptoms That Require Septoplasty:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Difficulty breathing through one or both nostrils",
                            "Recurring nosebleeds (Epistaxis)",
                            "Facial pain or chronic headaches",
                            "Noisy breathing or loud snoring during sleep",
                            "Preferential sleeping on one side for better breathing"
                        ].map((symptom, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-medium">{symptom}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-blue-500 pl-4 italic">The Surgical Process: Precision & Comfort</h3>
                    <p>
                        Septoplasty is performed entirely through the nostrils, meaning there are **no external scars**. Our procedure is meticulously planned using pre-operative diagnostic imaging (CT Scans if necessary) to map out every anatomical variation. During the 45-60 minute surgery, only the obstructing parts of the bone and cartilage are straightened or removed, ensuring the tip of the nose remains stable and aesthetically pleasing.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-fuchsia-400 mt-10">Advanced Surgical Advantages:</h4>
                    <ul>
                        <li>**Endoscopic Precision**: Visualizing the 'high' and 'posterior' deviations often missed by conventional head-mirrors.</li>
                        <li>**Minimal Bleeding**: Use of bipolar cautery to precisely seal blood vessels on-the-fly.</li>
                        <li>**No Painful Packing**: We use modern 'Internal Septal Splints' that have small built-in tubes, allowing you to breathe through your nose immediately after surgery.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-blue-400" />
                        Septoplasty: Clearing Potential Doubts
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Will a septoplasty change my outer appearance?",
                                a: "No, septoplasty is a functional internal surgery. It does not change the shape or aesthetics of your nose. If you desire cosmetic changes as well, it can be combined with Rhinoplasty (Septo-rhinoplasty)."
                            },
                            {
                                q: "Is it a day-care procedure?",
                                a: "Most septoplasties at Indira Hospital are day-care or require a single overnight stay of 24 hours."
                            },
                            {
                                q: "When can I return to heavy exercise or the gym?",
                                a: "You should avoid strenuous activities and weightlifting for at least 3 weeks to prevent increases in blood pressure that could cause nosebleeds."
                            },
                            {
                                q: "How long until I see the final results?",
                                a: "You will notice an immediate improvement in airflow once the internal splints are removed (usually 1 week). Breathing continues to improve as internal swelling subsides over the following month."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-blue-400 mb-4 flex items-start gap-2">
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
