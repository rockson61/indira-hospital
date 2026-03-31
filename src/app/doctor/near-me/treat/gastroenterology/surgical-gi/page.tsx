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
    Microscope,
    History
} from 'lucide-react'

export default function SurgicalGastroPage() {
    return (
        <SubServiceTemplate
            title="Elite Surgical Gastroenterology & GI Oncology"
            slug="surgical-gi"
            parentServiceSlug="gastroenterology"
            departmentName="Gastroenterology"
            description={
                <>
                    <p>
                        Complex conditions of the digestive tract—from esophageal cancers to chronic pancreatitis and complex hernias—require a surgeon who combines technical mastery with an innate understanding of GI physiology. At Indira Super Speciality Hospital, our **Surgical GI Department** specializes in advanced laparoscopic and open surgeries, utilizing 4K visualization and precision energy devices to ensure optimal outcomes even in the most challenging cases.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Precision surgical solutions for complex digestive disorders."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: '4K Lap', icon: 'Zap' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Varies"
            hospitalStay="Case-Dependent"
            recoveryTime="Fast-Track"
            anesthesia="General"
            reviews={{
                entityType: 'service',
                entityName: 'Surgical GI',
                entitySlug: 'surgical-gi'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized GI Surgery? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-100 dark:border-emerald-800 shadow-lg">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-emerald-800 dark:text-emerald-300">The Surgical GI Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "4K Laparoscopic Precision", text: "We perform 90% of our GI surgeries laparoscopically, using ultra-HD 4K imaging to navigate the complex anatomy of the abdomen with minimal trauma." },
                                { title: "Multidisciplinary GI Oncology", text: "Complex GI cancers are treated with a combined approach involving surgical oncologists, medical oncologists, and specialized GI radiotherapists." },
                                { title: "ERAS Protocols", text: "Enhanced Recovery After Surgery (ERAS) protocols ensure that you are eating and walking sooner, significantly reducing hospital stay and complications." }
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
                            <Microscope className="w-24 h-24 text-emerald-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Diagnostic Depth</p>
                            <p className="text-slate-500 text-sm">Combining surgical expertise with advanced endoscopy and imaging for inconclusive cases.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Digestive Surgery</h3>
                    <p>
                        The field of Surgical Gastroenterology covers everything from the esophagus to the rectum. These procedures often involve removing tumors, repairing structural defects like hiatal hernias, or managing chronic inflammatory conditions. Because the GI tract is a non-stop functioning system, the surgery must be performed with extreme care to maintain proper digestion and absorption.
                    </p>
                    <p>
                        At Indira Hospital, our surgical team utilizes a **"Function-Preserving"** approach. Whether we are performing a distal gastrectomy or a complex Whipple's procedure, our goal is to eliminate the disease while ensuring you can return to a normal, high-quality diet and lifestyle as quickly as possible.
                    </p>

                    <h4 className="text-[#005f73] dark:text-emerald-400 font-primary">Advanced Procedures Performed:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Laparoscopic Esophagectomy & Gastrectomy",
                            "Hepato-Pancreatico-Biliary (HPB) Surgeries",
                            "Colorectal Cancer Resections",
                            "Complex Abdominal Wall & Ventral Hernia Repair",
                            "Surgery for Ulcerative Colitis & Crohn's Disease"
                        ].map((procedure, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm font-medium">{procedure}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-emerald-500 pl-4 italic">Post-Operative GI Rehab</h3>
                    <p>
                        Following major GI surgery, the role of our clinical dietitians is as important as the surgery itself. We provide a **Structured Nutritional Roadmap**, guiding you from liquids to solids while ensuring your body gets the specific micro-nutrients it needs during the healing phase. Our surgeons maintain strict follow-up schedules to monitor your progress and ensure long-term clinical success.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-emerald-400 mt-10">The Surgical GI Standard:</h4>
                    <ul>
                        <li>**Stapler Technology**: We use premium internal stapling devices that ensure leak-proof connections (anastomosis) in the digestive tract.</li>
                        <li>**In-House Pathology**: Rapid results for biopsies and tumor staging to plan the next steps in your recovery journey.</li>
                        <li>**Advanced ICU**: Dedicated critical care support for elderly or high-risk patients undergoing major abdominal operations.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-transparent" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-emerald-400" />
                        Surgical GI: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "What is the benefit of Laparoscopic GI surgery over open surgery?",
                                a: "Laparoscopic (keyhole) surgery involves smaller incisions, which means significantly less pain, a lower risk of wound infection, and a much faster return to normal activity and work."
                            },
                            {
                                q: "How long is the recovery from a major abdominal surgery?",
                                a: "For laparoscopic procedures, most patients go home in 3-5 days. For major open surgeries, it may take 7-10 days. Full recovery usually takes 4-6 weeks."
                            },
                            {
                                q: "Will I need a permanent bag (stoma) after colorectal surgery?",
                                a: "In modern GI surgery, the need for a permanent stoma is rare. We use advanced techniques to preserve natural bowel function whenever oncologically safe."
                            },
                            {
                                q: "Can advanced GI surgery treat severe acid reflux?",
                                a: "Yes. For patients who don't respond to medications, we perform Laparoscopic Fundoplication, which is a definitive surgical cure for severe GERD and hiatal hernias."
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
