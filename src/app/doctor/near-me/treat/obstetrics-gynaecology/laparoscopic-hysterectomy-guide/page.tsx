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
    Dna,
    Target,
    Layers
} from 'lucide-react'

export default function LaparoscopicHysterectomyPage() {
    return (
        <SubServiceTemplate
            title="Elite Laparoscopic Hysterectomy (TLH)"
            slug="laparoscopic-hysterectomy-guide"
            parentServiceSlug="obstetrics-gynaecology"
            departmentName="Indira Elite Women's Care"
            description={
                <>
                    <p>
                        A hysterectomy (removal of the uterus) no longer requires large abdominal incisions and weeks of painful recovery. At Indira Super Speciality Hospital, we specialized in **Total Laparoscopic Hysterectomy (TLH)**. Using 4K high-definition cameras and precision surgical energy, we perform the entire procedure through three or four tiny 5mm incisions. This "AIIMS-Standard" approach ensures minimal blood loss, almost no visible scarring, and a return to home within 24 hours.
                    </p>
                    <p className="mt-4 text-rose-600 dark:text-rose-400 font-semibold italic">
                        "Advanced keyhole surgery for a faster, safer return to your life."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: '4K Laparoscopy', icon: 'Zap' },
                { label: 'Care Type', value: 'Surgical', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="60-90 Mins"
            hospitalStay="24 Hours"
            recoveryTime="7-10 Days"
            anesthesia="General"
            reviews={{
                entityType: 'service',
                entityName: 'Laparoscopic Hysterectomy',
                entitySlug: 'laparoscopic-hysterectomy-guide'
            }}
        >
            <div className="space-y-16">
                {/* Visual Section: Why Specialized Laparoscopy? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="p-8 rounded-3xl bg-rose-50 dark:bg-rose-900/50 border border-rose-100 dark:border-rose-800 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 blur-2xl group-hover:bg-rose-300/30 transition-all opacity-50" />
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-primary text-rose-800 dark:text-rose-300">The Surgical Edge</h4>
                        <ul className="space-y-4">
                            {[
                                { title: "Nerve-Sparing Precision", text: "Guided by 4K visualization to preserve pelvic nerve function, ensuring bladder and bowel health remain intact post-surgery." },
                                { title: "Vessel-Sealing Technology", text: "Advanced bipolar and ultrasonic energy to seal blood vessels instantly, leading to near-zero blood loss and no need for transfusions." },
                                { title: "Microsurgical Suturing", text: "Intra-corporeal (inside the body) suturing techniques that provide the strongest possible closure of the vaginal vault." }
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
                            <Layers className="w-24 h-24 text-rose-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Zero In-cision Look</p>
                            <p className="text-slate-500 text-sm italic pr-4">Precision keyhole techniques that leave virtually no visible trace on the abdominal skin within months.</p>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="prose prose-lg max-w-none prose-slate dark:prose-invert">
                    <h3 className="text-slate-900 dark:text-white font-primary font-bold">The Hysterectomy Evolution</h3>
                    <p>
                        A Laparoscopic Hysterectomy is the modern alternative to traditional open surgery. By using a laparoscope (a thin telescope with a camera), the surgeon can view the internal organs on a high-definition monitor in 4K resolution. This magnification allows for much finer dissection than is possible with the naked eye in open surgery.
                    </p>
                    <p>
                        At Indira Hospital, our gynaecological endoscopy service focuses on **Elite Outcomes**. We specialized in managing complex cases—including large fibroids or previous multiple C-sections—through the laparoscopic route, consistently delivering the benefits of 'minimal access' even in the most challenging scenarios.
                    </p>

                    <h4 className="text-[#005f73] dark:text-rose-400 font-primary">Common Indications for TLH:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[
                            "Multiple or large Uterine Fibroids (Myomas)",
                            "Endometriosis and Adenomyosis causing severe pain",
                            "Abnormal Uterine Bleeding unresponsive to medicine",
                            "Uterine Prolapse with associated pathology",
                            "Persistent Pelvic Pain related to uterine disease",
                            "Endometrial hyperplasia or early-stage cancers"
                        ].map((condition, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-rose-500" />
                                <span className="text-sm font-medium">{condition}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-primary font-bold text-2xl mt-12 mb-6 border-l-4 border-rose-500 pl-4 py-2 italic font-serif">Rapid Recovery Protocol</h3>
                    <p>
                        Traditional hysterectomies required 5-7 days in the hospital and 6 weeks of rest. Our **Elite Laparoscopic Protocol** changes that. Most patients are encouraged to walk within 6-8 hours of surgery. You will likely be discharged within 24 hours. Most women find they can resume light desk work or household activities within 7-10 days, feeling a massive improvement in their energy and quality of life.
                    </p>

                    <h4 className="font-primary text-[#005f73] dark:text-rose-400 mt-10">The Indira Surgical Advantage:</h4>
                    <ul>
                        <li>**4K Olympus Imaging**: Providing the highest possible clarity for safe tissue identification.</li>
                        <li>**Ligasure & Harmonic Scalpels**: Specialized instruments that seal and cut tissue without the need for large clamps or multiple stitches.</li>
                        <li>**Dedicated Women’s OT**: A sterile, specialized environment focused exclusively on gynaecological surgical excellence.</li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-10 md:p-16 text-white border border-slate-800 relative shadow-2xl overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent shadow-2xl" />
                    
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 font-primary relative z-10">
                        <Info className="text-rose-400" />
                        Laparoscopic Hysterectomy: Essential FAQs
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {[
                            {
                                q: "Are the ovaries also removed during a hysterectomy?",
                                a: "Not necessarily. If your ovaries are healthy and you are pre-menopausal, we often keep them to maintain your natural hormones. The decision is made individually based on your age and health history."
                            },
                            {
                                q: "Will I enter menopause immediately after surgery?",
                                a: "If we keep your ovaries, you will not enter menopause. You will stop having periods, but your hormones will remain naturally balanced until your body's normal age for menopause."
                            },
                            {
                                q: "Is the surgery very risky?",
                                a: "While every surgery has risks, a laparoscopic hysterectomy is considered very safe at high-volume centers. The risks of infection and bleeding are significantly lower compared to traditional open surgery."
                            },
                            {
                                q: "How small are the scars?",
                                a: "The scars are typically 5mm to 10mm in size (about the width of a pencil). They are placed strategically and usually become almost invisible within a few months."
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
