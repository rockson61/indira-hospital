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
    Search as Eye,
    HandHeart,
    Microscope
} from 'lucide-react'

export default function HysteroscopyPage() {
    return (
        <SubServiceTemplate
            title="Elite Hysteroscopy & Uterine Care"
            slug="hysteroscopy"
            parentServiceSlug="obstetrics-gynaecology"
            departmentName="Indira Elite Women's Care"
            description={
                <>
                    <p>
                        Abnormal bleeding, repeated miscarriages, or difficulty conceiving often requires a direct look inside the uterus. At Indira Super Speciality Hospital, we offer **Elite Diagnostic & Operative Hysteroscopy**. Using ultra-thin, high-definition 4K endoscopes, we can visualize the uterine cavity with extreme clarity—often allowing us to diagnose and treat conditions like polyps or fibroids in a single, painless daydream-sedation session.
                    </p>
                    <p className="mt-4 text-rose-600 dark:text-rose-400 font-semibold italic">
                        "Precision visualization: The gold standard for uterine health and fertility."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: '4K HD Scope', icon: 'Zap' },
                { label: 'Care Type', value: 'Daycare', icon: 'Clock' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="15-30 Mins"
            hospitalStay="6-8 Hours"
            recoveryTime="24 Hours"
            anesthesia="Sedation"
            reviews={{
                entityType: 'service',
                entityName: 'Hysteroscopy',
                entitySlug: 'hysteroscopy'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized Hysteroscopy? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-900/50 border border-rose-100 dark:border-rose-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 blur-2xl group-hover:bg-rose-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-rose-800 dark:text-rose-300">The Endoscopic Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "See & Treat Approach", text: "We specialized in diagnostic-to-operative transitions. If we find a polyp or small fibroid during the diagnostic check, we can remove it immediately without a second procedure." },
                                { title: "Ultra-Thin Office Hysteroscopes", text: "Our specialized thin-caliber scopes significantly reduce discomfort, often allowing for diagnostic checks with minimal or even no anesthesia in suitable cases." },
                                { title: "4K Video Documentation", text: "Every procedure is recorded in ultra-high definition, providing you and your referring doctor with a clear visual record of your uterine health." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Activity className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-rose-400/20 rounded-[3rem] blur-3xl transition-all" />
                        <div className="relative p-10 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-rose-100 dark:border-slate-800 shadow-2xl">
                            <Microscope className="w-24 h-24 text-rose-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Internal Clarity</p>
                            <p className="text-slate-500 text-sm italic pr-4">Identifying and correcting uterine factors with surgical precision and zero external incisions.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">Comprehensive Uterine Evaluation</h3>
                    <p>
                        A hysteroscopy involves inserting a thin, lighted telescope (hysterscope) through the natural opening of the cervix into the uterus. Unlike an ultrasound, which sees 'through' the tissue, a hysteroscopy allows the doctor to see the actual lining of the uterus and identify any growths, adhesions, or inflammatory changes that could be causing symptoms.
                    </p>
                    <p>
                        At Indira Hospital, our gynaecological endoscopy team, led by senior specialists, focuses on **Function-Preserving Surgery**. Whether we are removing a polyp or correcting a uterine septum, our goal is to maintain the integrity of the uterine lining, which is critical for future fertility and normal menstrual health.
                    </p>

                    <h4 className="text-[#005f73] dark:text-rose-400 font-primary">Conditions Treated via Hysteroscopy:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Abnormal or heavy menstrual bleeding",
                            "Uterine Polyps (Endometrial polyps)",
                            "Bands of scar tissue (Adhesions/Asherman’s Syndrome)",
                            "Submucosal Fibroids (Growths inside the cavity)",
                            "Uterine Septum (Congenital dividing wall)",
                            "Retrieving displaced intrauterine devices (IUCD)"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-rose-500" />
                                <span className="text-sm font-medium">{condition}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-rose-500 pl-4 py-2 italic font-serif">Painless Procedure & Rapid Recovery</h3>
                    <p>
                        At Indira Hospital, we prioritize **"Pain-Free Daycare"**. Most operative hysteroscopies are performed under light intravenous sedation, ensuring you are in a comfortable 'dream-state' during the 15-30 minute procedure. Because there are no external incisions, recovery is nearly immediate. Most patients relax in our daycare suite for a few hours and are back home for dinner, resuming light activities by the next morning.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-rose-400 mt-10">The Indira Standard of Care:</h4>
                    <ul>
                        <li>**Advanced Resectoscopes**: Specialized energy devices that allow for precise removal of fibroids without damaging the surrounding tissue.</li>
                        <li>**Fluid Management Systems**: Precision automated pumps that ensure the uterus is safely and comfortably distended for clear visualization.</li>
                        <li>**Expert Pathologists**: Same-day processing for biopsies to ensure rapid clinical decision-making.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent shadow-2xl" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-rose-400" />
                        Hysteroscopy: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Is hysteroscopy a major surgery?",
                                a: "No. It is considered a 'minimally invasive' or 'endoscopic' procedure. There are no cuts made on the abdomen; the scope enters through the natural cervical opening."
                            },
                            {
                                q: "Will I have much pain after the procedure?",
                                a: "Most patients experience minor, period-like cramping for a few hours. Over-the-counter pain relievers are usually sufficient, and most women feel completely back to normal within 24 hours."
                            },
                            {
                                q: "When is the best time in the cycle for this test?",
                                a: "The best time is typically right after your period has finished (between day 6 and day 12 of your cycle), as the uterine lining is thinnest, allowing for the clearest visualization."
                            },
                            {
                                q: "How long after a hysteroscopy can I try to conceive?",
                                a: "For a simple diagnostic check, you can often try in the very next cycle. If a polyp or fibroid was removed, we may recommend resting for 1-2 months to allow the lining to heal perfectly."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-rose-400 mb-4 flex items-start gap-2">
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
