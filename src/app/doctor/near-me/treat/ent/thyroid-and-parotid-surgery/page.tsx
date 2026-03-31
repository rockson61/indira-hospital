'use client'

import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Info, 
    Microscope,
    Activity,
    CheckCircle2,
    Users,
    Search,
    Dna
} from 'lucide-react'

export default function ThyroidSurgeryENTPage() {
    return (
        <SubServiceTemplate
            title="Elite Thyroid & Parotid Surgery in Vellore"
            slug="thyroid-and-parotid-surgery"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        Swellings in the neck, particularly in the thyroid or salivary glands, require expert surgical evaluation by the **ENT Head & Neck team**. At Indira Super Speciality Hospital, we specialized in the surgical management of thyroid nodules and parotid tumors. Our focus is on the ultra-precise preservation of the delicate nerves that control your voice (recurrent laryngeal nerve) and facial expressions.
                    </p>
                    <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold italic">
                        "Expert nerve-sparing surgery for complex neck swellings."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'IONM Ready', icon: 'Zap' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="2-3 Hours"
            hospitalStay="48 Hours"
            recoveryTime="2 Weeks"
            anesthesia="General"
            reviews={{
                entityType: 'service',
                entityName: 'Thyroid & Parotid Surgery',
                entitySlug: 'thyroid-and-parotid-surgery'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why ENT for Neck Surgery? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 blur-2xl group-hover:bg-blue-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-blue-800 dark:text-blue-300">Nerve-Sparing Precision</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Intra-operative Nerve Monitoring (IONM)", text: "Real-time electrical mapping to safeguard the recurrent laryngeal nerve and facial nerve." },
                                { title: "Harmonic Scalpel Technology", text: "Ultrasonic energy to seal vessels and cut tissue simultaneously, minimizing bleeding and operative time." },
                                { title: "Aesthetic Skin-Crease Incisions", text: "Hidden incisions placed in the natural folds of the neck for nearly invisible scarring." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-400/20 rounded-[3rem] blur-3xl transition-all duration-700" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <Dna className="w-24 h-24 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Safe Extraction</p>
                            <p className="text-slate-500 text-sm italic">Precision-guided microscopic ablation to resolve chronic head and neck growths.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Care for Head & Neck Tumors</h3>
                    <p>
                        The Head and Neck region contains some of the most intricate anatomy in the human body. ENT surgeons spend years training specifically on these structures, giving them a unique advantage in managing pathologies of the thyroid and salivary glands. At Indira Hospital, our Head & Neck service specialized in providing surgical solutions for both benign nodules and malignant tumors.
                    </p>

                    <h4 className="text-[#005f73] dark:text-blue-400 font-primary italic border-b border-blue-100 pb-2">ENT Head & Neck Procedures:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 relative z-10">
                        {[
                            "Total & Hemi-Thyroidectomy (for nodules/cancer)",
                            "Superficial & Total Parotidectomy (salivary gland tumors)",
                            "Submandibular Gland Excision (for stones/swellings)",
                            "Branchial Cyst & Thyroglossal Duct Cyst excision",
                            "Diagnostic Neck Biopsies (FNAC & Core Biopsy)",
                            "Central & Lateral Neck Dissections (for lymph involvement)"
                        ].map((proc, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-medium">{proc}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-blue-500 pl-4 py-2 italic">Safeguarding Functional Outcomes</h3>
                    <p>
                        One of the most concerning risks of thyroid surgery is a potential change in voice due to injury of the **recurrent laryngeal nerve**. In parotid surgery, the primary risk is injury to the **facial nerve**, which could lead to facial paralysis. We use **Intra-operative Nerve Monitoring (IONM)** at Indira Hospital to mitigate these risks. This technology provides the surgeon with real-time electrical feedback, allowing them to identify and protect these microscopic nerves with absolute certainty.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-blue-400 mt-10">Diagnostic Precision:</h4>
                    <ul>
                        <li>**FNAC (Fine Needle Aspiration)**: Safe, early diagnostic step to determine if a swelling is benign or suspicious.</li>
                        <li>**High-Resolution Ultrasonography (USG)**: Real-time mapping of the tumor’s vascularity and relationship to major vessels.</li>
                        <li>**Frozen Section Biopsy**: On-table, rapid biopsy during surgery to determine the extent of surgical resection needed.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent shadow-2xl" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-blue-400" />
                        ENT Head & Neck Clinical FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Will I need lifelong medication after thyroid surgery?",
                                a: "If the entire thyroid gland is removed (Total Thyroidectomy), you will need to take a daily thyroid hormone supplement. If only half the gland is removed (Hemi-thyroidectomy), the remaining half often takes over full function."
                            },
                            {
                                q: "Is thyroid or parotid surgery very painful?",
                                a: "Most neck surgeries are 'discomforting' rather than severely painful. We use long-acting local anesthetics during the procedure to ensure you wake up without significant pain."
                            },
                            {
                                q: "When can I have a normal diet after parotid surgery?",
                                a: "You can usually have a soft diet on the same evening of the surgery. We recommend avoiding very sour foods (like citrus) for a few days to avoid stimulating the salivary glands unnecessarily."
                            },
                            {
                                q: "How long is the typical hospital stay?",
                                a: "For most thyroid and salivary gland procedures, the hospital stay is 48 hours. This allows us to monitor the surgical site and ensure the patient is comfortable before discharge."
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
