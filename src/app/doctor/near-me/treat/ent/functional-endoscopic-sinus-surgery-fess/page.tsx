'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Search,
    Wind,
    Activity,
    CheckCircle2
} from 'lucide-react'

export default function FESSSurgicalPage() {
    return (
        <SubServiceTemplate
            title="Functional Endoscopic Sinus Surgery (FESS) Guide"
            slug="functional-endoscopic-sinus-surgery-fess"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        **Functional Endoscopic Sinus Surgery (FESS)** is the clinical gold standard for treating chronic sinusitis and nasal polyps that do not respond to medical management. At Indira Super Speciality Hospital, we utilize the latest **4K High-Definition Endoscopy** to perform this minimally invasive procedure, ensuring maximum drainage restoration with zero external incisions.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Precision-guided drainage restoration for long-term respiratory clarity."
                    </p>
                </>
            }
        >
            <div className="space-y-16">
                {/* Visual Section: Why FESS? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary">The 4K Endoscopic Difference</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Ultra-HD Visualization", text: "4K resolution identifies sub-millimeter anatomical structures, preventing complication risks." },
                                { title: "Micro-debrider Assisted", text: "Rapid removal of diseased tissue while sparing healthy mucosa to speed up healing." },
                                { title: "Preservation of Anatomy", text: "Focuses on the 'Ostio-Meatal Complex' to restore natural drainage physiology." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#005f73]/20 rounded-[3rem] blur-3xl group-hover:bg-[#005f73]/30 transition-all" />
                        <div className="relative p-8 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Wind className="w-20 h-20 text-[#005f73] mx-auto mb-6" />
                            <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">Restore Your Airway</p>
                            <p className="text-slate-500 text-sm antialiased">Targeted ablation of blocks for permanent sinusitis relief.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Understanding of Sinusitis & FESS</h3>
                    <p>
                        Chronic Sinusitis is more than just a stuffy nose; it is a life-impairing condition characterized by facial pain, chronic fatigue, loss of smell, and recurring headaches. When the thin, boney architecture of the sinuses becomes chronically inflamed or blocked by nasal polyps, the mucus becomes trapped, creating a breeding ground for infections.
                    </p>
                    <p>
                        Unlike traditional sinus surgeries that required large external cuts and resulted in significant trauma, **FESS (Functional Endoscopic Sinus Surgery)** uses the natural openings of the nose. By inserting specialized, thin telescopes (endoscopes), our senior ENT surgeon, **Dr. Gayathri**, can navigate the intricate maze of the ethmoid, maxillary, frontal, and sphenoid sinuses.
                    </p>

                    <h4 className="text-[#005f73] dark:text-fuchsia-400 font-primary">Indications for FESS Surgery:</h4>
                    <ul>
                        <li>**Chronic Rhinosinusitis**: Inflammation persisting for more than 12 weeks despite medical therapy.</li>
                        <li>**Nasal Polyps**: Benign growths that obstruct the airway and drainage pathways.</li>
                        <li>**Recurrent Acute Sinusitis**: Multiple severe infections per year.</li>
                        <li>**Mucoceles**: Mucus-filled cysts that can exert pressure on the eyes or brain.</li>
                        <li>**CSF Rhinorrhoea Repair**: Sealing leaks of brain fluid through the skull base.</li>
                    </ul>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold mt-12 mb-6 text-2xl border-l-4 border-emerald-500 pl-4">The Precision Recovery Roadmap</h3>
                    <p>
                        One of the greatest advantages of FESS at Indira Hospital is the rapid recovery phase. Because we utilize **Micro-debriders** (power tools that precisely shave away polyps without tearing tissue), there is virtually no bleeding or bruising.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-t-4 border-blue-500">
                            <h5 className="font-bold mb-2">Day 0 (Surgery)</h5>
                            <p className="text-xs text-slate-500">Day-care procedure under general anesthesia. Discharge within 6-8 hours with minimal nasal packing.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-t-4 border-emerald-500">
                            <h5 className="font-bold mb-2">Days 3-5</h5>
                            <p className="text-xs text-slate-500">Removal of soft packing (if any). Return to desk work. Saline rinses begin to clear debris.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-t-4 border-fuchsia-500">
                            <h5 className="font-bold mb-2">Week 2</h5>
                            <p className="text-xs text-slate-500">First follow-up 'cleaning' (Endoscopic debridement). Sense of smell begins to return dramatically.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-[#005f73]/5 dark:bg-white/5 rounded-[2.5rem] p-10 md:p-16 border border-[#005f73]/10">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3 font-primary">
                        <Search className="text-[#005f73]" />
                        FESS Clinical FAQs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {[
                            {
                                q: "Will FESS change the shape of my nose?",
                                a: "No. FESS is a functional surgery performed entirely inside the nasal cavity. It focuses on the drainage pathways and does not alter the external cosmetics of the nose."
                            },
                            {
                                q: "Can polyps return after FESS?",
                                a: "FESS has a very high success rate. However, for patients with severe allergies or aspirin-exacerbated respiratory disease, we provide a long-term medical management plan to prevent polyp regrowth."
                            },
                            {
                                q: "How long until I can fly or swim?",
                                a: "We recommend avoiding air travel for at least 2 weeks and swimming for 4 weeks post-surgery to ensure the mucosal lining has stabilized against pressure changes."
                            },
                            {
                                q: "Is the procedure safe for seniors?",
                                a: "Yes, FESS is highly safe for older adults. We perform comprehensive cardiac and pre-anesthetic clearances to ensure the safety of our senior patients."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="space-y-3">
                                <h4 className="font-bold text-slate-900 dark:text-white flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed antialiased pl-7">
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
