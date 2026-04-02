

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
    Flame,
    Target,
    ArrowRightCircle,
    Utensils,
    Microscope,
    Radiation,
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    Eye,
    MapPin,
    UserCheck,
    Dna,
    Layers,
    Waves,
    Users,
    Users2,
    Stethoscope,
    HeartPulse,
    Sparkles,
    Wind,
    Star
} from 'lucide-react'

export default function ProstateSurgeryPage() {
    return (
        <SubServiceTemplate
            title="Elite Laser Prostate Surgery (HoLEP & TURP)"
            slug="laser-prostate-surgery"
            parentServiceSlug="urology"
            departmentName="Indira Elite Urology Center"
            description={
                <>
                    <p>
                        Benign Prostatic Hyperplasia (BPH) is not a condition that has to be lived with—it is a fixable barrier to urinary freedom. At Indira Super Speciality Hospital, we offer **Elite Laser Prostate Surgery (HoLEP)** and advanced Bipolar TURP. Using precision laser enucleation, we selectively remove the obstructive core of the prostate while preserving the delicate outer capsule and urinary sphincter—ensuring a rapid return to normal flow, zero blood loss, and the highest standard of safety for cardiac and elderly patients.
                    </p>
                    <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold italic border-l-4 border-blue-500 pl-4 uppercase tracking-tighter">
                        "Holmium Power: The gold standard for prostate health."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Senior Urologist', icon: 'UserCheck' },
                { label: 'Tech Level', value: '100W Holmium Laser', icon: 'Zap' },
                { label: 'Care Type', value: 'Bloodless Enucleation', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="60-90 Minutes"
            hospitalStay="24-48 Hours"
            recoveryTime="5-7 Days"
            anesthesia="Spinal or General"
            reviews={{
                entityType: 'service',
                entityName: 'Laser Prostate Surgery',
                entitySlug: 'laser-prostate-surgery'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: HoLEP Enucleation vs Resection */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: HoLEP (Holmium Laser Enucleation)
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Traditional prostate surgery (TURP) uses an electric loop to 'chip away' at the prostate tissue. While effective for small glands, it carries a 10% risk of recurrence because it doesn't remove the entire enlargement.
                                </p>
                                <p className="mt-4">
                                    Our **Elite Urology Unit** utilizes **Holmium Laser Enucleation (HoLEP)**. Instead of chipping, the laser fiber is used to "peel" the entire obstructive part of the prostate away from its shell, much like removing the fruit from an orange peel. This ensures that the entire channel is wide open, recurrence is near-zero (less than 1%), and the laser instantly cauterizes micro-vessels, making the procedure virtually bloodless and safe for patients on blood thinners.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-blue-600" />
                                        <span><strong>100W Fiber-Edge Precision</strong>: Sub-millimeter accuracy to protect the urinary sphincter.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-blue-600" />
                                        <span><strong>Single-Stage Management</strong>: Simultaneously remove bladder stones if present during the same procedure.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-xl flex flex-col justify-center">
                                <Wind className="w-16 h-16 text-blue-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Uro-Rapid" Disconnect</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-sm"><strong>Zero Blood Loss</strong>: Ideal for cardiac and diabetic elderly patients.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-sm"><strong>Rapid Catheter Removal</strong>: Catheter is often removed within 24-48 hours.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    BPH Recurrence Warranty
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Surgical Precision Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent" />
                        <h3 className="font-heading text-3xl font-bold mb-8 italic font-heading text-blue-300 uppercase tracking-widest leading-none">Clinical Men's Health Matrix</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "BPH Hub", desc: "For benign enlargements of any size (even >100 grams) where HoLEP is superior.", icon: Star },
                                { title: "Cardiac Men's Care", desc: "Specialized urological protocols for patients on anticoagulants or with pacemakers.", icon: HeartPulse },
                                { title: "Bladder Calculus", desc: "Laser fragmentation for stones formed due to chronic prostate obstruction.", icon: Zap },
                                { title: "Uro-Oncology", desc: "Screening and biopsy for prostate cancer using MRI-TRUS fusion protocols.", icon: Microscope }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-blue-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trust Infrastructure Section */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter uppercase uppercase">Why Choose Indira for Prostate Care?</h3>
                            <p className="text-slate-600 dark:text-slate-400">Restoring dignity and urinary flow with precision laser science.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "99% Success Rate", desc: "Proven clinical success in over 500+ HoLEP enucleation procedures." },
                                { title: "High-Power Laser Bank", desc: "Access to 100W Holmium and Thulium systems for dense tissue." },
                                { title: "Zero Incontinence Tech", desc: "Sphincter-protective visualization for guaranteed post-op control." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-blue-500">
                                    <h4 className="font-heading text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-blue-500" />
                            Elite Clinical FAQs: Laser Prostate Surgery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "What are the common symptoms of an enlarged prostate?",
                                    a: "The most common symptoms include frequent urges to urinate (especially at night), a weak urinary stream, difficulty starting or stopping urination, and the feeling that the bladder hasn't fully emptied. If untreated, this can lead to UTIs, bladder stones, and kidney damage."
                                },
                                {
                                    q: "Is HoLEP better than traditional 'Open' surgery or TURP?",
                                    a: "Yes. For very large prostates (above 100 grams), HoLEP is far superior to open surgery as it avoids large abdominal incisions. Compared to TURP, it has lower blood loss, shorter hospital stays, and a much lower risk of needing a second surgery later in life."
                                },
                                {
                                    q: "Does prostate surgery affect sexual function?",
                                    a: "Laparoscopic/Laser prostate enucleation is designed to protect the nerves responsible for erectile function. While most patients experience 'Retrograde Ejaculation' after surgery, erectile function and sensation are typically preserved."
                                },
                                {
                                    q: "How soon can I stop my prostate medications after surgery?",
                                    a: "In most cases, patients can stop all prostate medicines (like Alpha-blockers or 5-ARIs) the very day after surgery, as the physical obstruction has been removed."
                                },
                                {
                                    q: "Will I need to wear a catheter home?",
                                    a: "Usually, no. After HoLEP at Indira, we typically remove the catheter within 24-48 hours. Most patients pass the 'voiding trial' comfortably and go home catheter-free."
                                },
                                {
                                    q: "What is the age limit for this surgery?",
                                    a: "Because laser surgery is so safe and bloodless, we have successfully performed it on patients in their late 80s and 90s who were previously considered too high-risk for traditional surgery."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic">
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
