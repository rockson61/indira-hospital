'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    HeartPulse,
    Activity,
    CheckCircle2,
    Users,
    Baby
} from 'lucide-react'

export default function TonsillectomyPage() {
    return (
        <SubServiceTemplate
            title="Advanced Coblation Tonsillectomy & Adenoidectomy Guide"
            slug="coblation-tonsillectomy-and-adenoidectomy"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        **Tonsillectomy** is the surgical removal of the tonsils, typically recommended for chronic infections or obstructive sleep apnea. At Indira Super Speciality Hospital, we offer **Advanced Coblation Tonsillectomy** – a low-temperature radiofrequency technique that ensures minimal pain, near-zero bleeding, and a significantly faster recovery for both children and adults.
                    </p>
                    <p className="mt-4 text-fuchsia-600 dark:text-fuchsia-400 font-semibold italic">
                        "Painless, bloodless, and precise removals for clear airways."
                    </p>
                </>
            }
        >
            <div className="space-y-16">
                {/* Visual Section: Why Coblation? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-fuchsia-50 dark:bg-fuchsia-900/50 border border-fuchsia-100 dark:border-fuchsia-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-fuchsia-800 dark:text-fuchsia-300">The Coblation Advantage</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Low Heat Energy", text: "Operates at 40-70°C, unlike lasers (600°C) or cautery (400°C), drastically reducing tissue damage." },
                                { title: "Painless Recovery", text: "Research shows up to 50% less post-operative pain compared to traditional methods." },
                                { title: "Near-Zero Bleeding", text: "Radiofrequency energy seals blood vessels as it removes tissue, ensuring a bloodless field." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Shield className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0 mt-1" />
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
                            <Baby className="w-24 h-24 text-fuchsia-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pediatric Friendly</p>
                            <p className="text-slate-500 text-sm italic pr-4">Gentle care for tiny throats, ensuring they get back to laughing and playing faster.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Tonsil & Adenoid Care</h3>
                    <p>
                        Chronic tonsillitis and enlarged adenoids are not just causes of sore throats; they can lead to chronic mouth breathing, speech delays, hearing loss (glue ear), and obstructive sleep apnea in children. **Dr. Gayathri**, our lead ENT surgeon, utilizes a multidisciplinary approach starting with medical conservative management before suggesting surgery as a definitive solution.
                    </p>

                    <h4 className="text-[#005f73] dark:text-fuchsia-400 font-primary italic underline">Why Coblation instead of Traditional Cautery?</h4>
                    <p>
                        Traditional tonsillectomy 'burns' the tissue away, which creates a deep thermal injury in the sensitive muscles of the throat. This is why patients often cannot eat for 10-14 days. **Coblation** uses radiofrequency-activated plasma to 'dissolve' the molecular bonds of the tissue at a molecular level, leaving the underlying healthy muscle almost completely untouched. This is the difference between a painful 2-week recovery and a comfortable 3-day recovery.
                    </p>

                    <h4 className="text-[#005f73] dark:text-fuchsia-400 font-primary">Indications for Tonsillectomy:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Recurring tonsillitis (7+ episodes in 1 year)",
                            "Obstructive Sleep Apnea (OSA) or heavy snoring",
                            "Difficulty swallowing (dysphagia) due to enlarged tonsils",
                            "Recurring Peritonsillar Abscess (Quinsy)",
                            "Suspected malignancy of the tonsils"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-fuchsia-500" />
                                <span className="text-sm font-medium">{condition}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-fuchsia-500 pl-4 py-2">The Coblation Recovery Roadmap</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 relative">
                        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-b-4 border-fuchsia-500">
                            <h5 className="font-bold mb-2">Immediate (Day 0)</h5>
                            <p className="text-xs text-slate-500 italic pr-3">The user awakens without the severe 'throat-on-fire' feeling. Cold liquids and ice cream are encouraged within 2 hours of surgery.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-b-4 border-blue-500">
                            <h5 className="font-bold mb-2">Day 4 (Solid Food)</h5>
                            <p className="text-xs text-slate-500">While traditional surgery would still be on liquids, Coblation patients are often back to soft solid foods within 96 hours.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-b-4 border-emerald-500">
                            <h5 className="font-bold mb-2">Day 7 (Full Recovery)</h5>
                            <p className="text-xs text-slate-500 pr-3">Return to school or work. Almost 100% of the normal diet is resumed with minimal to zero discomfort.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-fuchsia-400" />
                        Clinical FAQs for Tonsillectomy
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Will my child's immunity decrease after tonsil removal?",
                                a: "No. The tonsils are only a small part of the immune system. The rest of the lymph nodes and the entire immune system take over. Research shows no reduction in overall immunity in children after tonsillectomy."
                            },
                            {
                                q: "What is the age limit for tonsillectomy?",
                                a: "We typically perform surgery on children aged 3 and above. However, if there is severe sleep apnea, it can be performed earlier. There is no upper age limit for adults."
                            },
                            {
                                q: "Can tonsils grow back?",
                                a: "If removed properly with Coblation, tonsils do not regrow. Adenoids have a very remote chance of partial regrowth if the surgery is performed on extremely young infants."
                            },
                            {
                                q: "How do I care for my child's throat post-surgery?",
                                a: "Focus on hydration and soft diet. Avoid hot/spicy foods and red/purple-colored liquids (which can be confused with blood). We provide a detailed diet chart upon discharge."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-fuchsia-400 mb-4 flex items-start gap-2">
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
