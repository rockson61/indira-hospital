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
    CheckCircle2,
    Microscope,
    Target,
    ThermometerSnowflake,
    PlayCircle,
    ArrowRightCircle,
    Eye
} from 'lucide-react'

export default function FESSSurgicalPage() {
    return (
        <SubServiceTemplate
            title="Elite Functional Endoscopic Sinus Surgery (FESS)"
            slug="functional-endoscopic-sinus-surgery-fess"
            parentServiceSlug="ent"
            departmentName="ENT (Otolaryngology)"
            description={
                <>
                    <p>
                        **Functional Endoscopic Sinus Surgery (FESS)** is the clinical gold standard for treating chronic sinusitis and nasal polyps that do not respond to medical management. At Indira Super Speciality Hospital, we utilize the latest **4K High-Definition Endoscopy** to perform this minimally invasive procedure, ensuring maximum drainage restoration with zero external incisions.
                    </p>
                    <p className="mt-4 text-[#005f73] dark:text-emerald-400 font-semibold italic">
                        "Physiological restoration: Breathing easy through 4K precision."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Visualization', value: '4K Ultra-HD', icon: 'Eye' },
                { label: 'Care Type', value: 'Min. Invasive', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="45-90 Minutes"
            hospitalStay="Daycare / 1 night"
            recoveryTime="5-10 Days"
            anesthesia="General Anesthesia"
            reviews={{
                entityType: 'service',
                entityName: 'FESS Surgery',
                entitySlug: 'functional-endoscopic-sinus-surgery-fess'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: Restoring Physiology */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-primary">
                            Mechanism of FESS: Restoring the OSTIO-MEATAL Complex
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    The human sinuses are lined with cilia (microscopic hairs) that move mucus in a specific, natural direction toward the back of the throat. When the **Ostio-Meatal Complex (OMC)**—the natural drainage 'bottleneck'—becomes blocked, the entire system fails, leading to chronic infection.
                                </p>
                                <p className="mt-4">
                                    Traditional surgery was destructive, removing large amounts of healthy bone. **Elite FESS** is *functional*. Using 4K endoscopes, we only remove the specific thin plates of bone or polyps blocking the natural drainage pathway.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Micro-debrider Controlled</strong>: Precision shaving of polyps while sparing healthy mucosa.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Mucociliary Preservation</strong>: Keeping the natural 'cleaning' mechanism of the nose intact.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Microscope className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">4K Ultra-HD Visualization</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    At Indira, we utilize the Stryker 4K camera system. This allows our surgeons to see sub-millimeter anatomical landmarks with extreme clarity, drastically reducing the risk of injury to the nearby eyes or brain.
                                </p>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Advanced Surgical Security Protocol
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pre-Op Diagnostics */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Precision Pre-Surgical Audit</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                A successful FESS starts before the operating room. We use advanced radiology to map your unique sinus anatomy.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "CT-PNS (Thin Section)",
                                    desc: "High-resolution CT scans of the Paranasal Sinuses to identify anatomical variations like Onodi cells or Haller cells.",
                                    icon: Search
                                },
                                {
                                    title: "Diagnostic Endoscopy",
                                    desc: "In-office fiberoptic evaluation to identify the exact location of pus or polyps prior to surgery planning.",
                                    icon: Target
                                },
                                {
                                    title: "Allergy Profiling",
                                    desc: "Identifying underlying triggers that cause sinus swelling to ensure the surgery offers long-term relief.",
                                    icon: Activity
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
                                    <item.icon className="w-12 h-12 text-emerald-600 mb-6" />
                                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Surgical & Recovery Roadmap */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-4">The Precision Recovery Roadmap</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
                            Our "No-Pack" or "Absorbable Packing" protocol minimizes the discomfort traditionally associated with sinus surgery.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { day: "Day 0", title: "Daycare Delivery", text: "Discharge within 6-8 hours. Minimal pain, breathing through the nose often possible immediately." },
                                { day: "Day 3", title: "Soft Return", text: "Return to sedentary work. Nasal saline irrigation begins to clear debris and crusting." },
                                { day: "Day 10", title: "Clinical Cleaning", text: "Endoscopic 'debridement' in the office to ensure the drainage pathways are healing open." },
                                { day: "Week 3", title: "Full Clearance", text: "Return to swimming/flying. Sense of smell and facial pressure improvements peaked." }
                            ].map((step, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
                                    <p className="text-emerald-400 font-bold mb-2">{step.day}</p>
                                    <h5 className="font-bold text-sm mb-2">{step.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: FESS & Sinusitis
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Will FESS change the shape of my nose?",
                                    a: "No. FESS is a functional surgery performed entirely inside the nasal cavity. It focuses on the internal drainage pathways and does not alter the external cosmetics of the nose."
                                },
                                {
                                    q: "Can polyps return after FESS?",
                                    a: "FESS has a very high success rate (90%+). However, for patients with severe allergies or asthma (Samter's Triad), we provide a long-term 'Indira Maintenance Plan' using nasal sprays and rinses to keep the sinuses healthy and prevent regrowth."
                                },
                                {
                                    q: "How long until my sense of smell returns?",
                                    a: "If the loss of smell was caused by physical obstruction (polyps), many patients report a dramatic improvement within 1-2 weeks as the swelling goes down and the blockage is removed."
                                },
                                {
                                    q: "Is the surgery performed under General Anesthesia?",
                                    a: "Yes. To ensure absolute surgical precision and patient comfort, FESS is performed under GA with controlled hypotension to minimize bleeding and provide the surgeon with a 'dry' operating field."
                                },
                                {
                                    q: "What is Nasal Debridement?",
                                    a: "It is a vital follow-up step where the surgeon uses an endoscope in the office to gently clean out dry crusts and blood after surgery. This ensures the openings we created do not scar shut."
                                },
                                {
                                    q: "Does FESS cure chronic headaches?",
                                    a: "If your headaches are definitively caused by sinus vacuum pressure or inflammation (Rhinogenic Headaches), FESS can offer life-changing relief."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
        />
    )
}
