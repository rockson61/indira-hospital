

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
    Baby,
    Target,
    ThermometerSnowflake,
    PlayCircle,
    ArrowRightCircle,
    Flame,
    Droplets,
    Utensils,
    Microscope,
    Radiation,
    Navigation,
    MapPin,
    UserCheck,
    Ear,
    Wind,
    Thermometer
} from 'lucide-react'

export default function TonsillectomyPage() {
    return (
        <SubServiceTemplate
            title="Elite Coblation Tonsillectomy & Adenoidectomy"
            slug="coblation-tele-tonsillectomy-and-adenoidectomy"
            parentServiceSlug="ent"
            departmentName="Indira Elite ENT"
            description={
                <>
                    <p>
                        Chronic tonsillitis and adenoid enlargement can lead to persistent throat pain, obstructed breathing, and pediatric developmental delays. At Indira Super Speciality Hospital, we utilize **Elite Coblation Technology**. Unlike traditional surgery that uses extreme heat to burn tissue, Coblation uses low-temperature **Plasma Ablation** to gently dissolve tissue, resulting in 70% less post-operative pain and near-zero surgical bleeding.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "The bloodless evolution: Precision plasma-assisted airway restoration."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Plasma-Ablation', icon: 'Zap' },
                { label: 'Focus', value: 'Pediatric Safe', icon: 'Baby' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="20-30 Minutes"
            hospitalStay="Daycare (6-8 Hours)"
            recoveryTime="3-7 Days"
            anesthesia="General (TIVA Support)"
            reviews={{
                entityType: 'service',
                entityName: 'Coblation Tonsillectomy',
                entitySlug: 'coblation-tonsillectomy-and-adenoidectomy'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: Plasma vs Cautery */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: Plasma-Layer Dissolution
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    In traditional tonsillectomy, electro-cautery or 'cold steel' dissection causes traumatic thermal damage or raw tissue edges, leading to the intense post-op pain associated with swallowing.
                                </p>
                                <p className="mt-4">
                                    **Coblation (Cool Ablation)** is fundamentally different. It uses bipolar radiofrequency energy to excite electrolytes in a saline medium, forming a focused **Plasma Field**. This field breaks down molecular bonds within the tissue at temperatures of only **40°C to 70°C**. As the tissue is dissolved, the saline medium simultaneously coagulates blood vessels, ensuring a dry, bloodless surgical field and a significantly smoother healing surface.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ThermometerSnowflake className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Zero Burn-Edge</strong>: Protecting the sensitive pharyngeal muscles from heat trauma.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Precision Adenoidectomy</strong>: Reaching the 'Naso-Pharynx' with micro-curved plasma wands.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Flame className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Indira" Cold Standard</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-heading italic border-l-2 border-emerald-100 pl-4">
                                    By eliminating the 400°C+ heat of traditional cautery, we reduce the secondary inflammatory response. This is why our patients can enjoy cold liquids and soft foods almost immediately after surgery.
                                </p>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Airway Integrity Assured
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pediatric Specialization */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h3 className="font-heading text-3xl font-bold mb-8 italic font-heading text-emerald-300">Pediatric "Airway First" Strategy</h3>
                        <div className="grid md:grid-cols-3 gap-10 text-left relative z-10">
                            {[
                                { title: "Sleep Apnea Support", desc: "For children who snore or gasp during sleep, removing enlarged adenoids restores 100% airflow instantly.", icon: Wind },
                                { title: "Ear Health (Glue Ear)", desc: "Enlarged adenoids block the Eustachian tube. Concurrent Grommet insertion stops recurrent ear infections.", icon: Ear },
                                { title: "TIVA Anesthesia", desc: "Total Intravenous Anesthesia (TIVA) minimizes the 'hangover' and nausea often associated with traditional gas.", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-all">
                                    <item.icon className="w-10 h-10 text-emerald-400 mb-4" />
                                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Surgical Precision Grid */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter italic">Why Indira Hospital for Coblation?</h3>
                            <p className="text-slate-600 dark:text-slate-400">Our ENT surgical suites are optimized for micro-precision outcome tracking.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { title: "HD Visualization", desc: "Using high-definition endoscopes to ensure 100% clear surgical margins near the carotids." },
                                { title: "Micro-Wand Tech", desc: "Disposable, single-use plasma wands to eliminate any risk of cross-infection." },
                                { title: "Daycare Safety", desc: "Most children are discharged the same evening, recovering in their own home environment." },
                                { title: "Voice Protection", desc: "Precision tissue removal ensures the underlying vocal muscle architecture is left untouched." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:bg-emerald-50/10 transition-all border-b-4 border-emerald-600">
                                    <h4 className="font-heading text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 font-medium italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: Coblation ENT Surgery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can my child eat after tonsillectomy?",
                                    a: "Yes! In fact, we encourage it. Unlike traditional surgery where the throat is too painful to swallow for days, Coblation allows for cold liquids, soft jellies, and even ice cream within a few hours of the procedure."
                                },
                                {
                                    q: "What are the common signs of enlarged adenoids?",
                                    a: "The most common signs are mouth-breathing, habitual snoring, nasal-sounding voice (hyponasality), and recurrent middle ear fluid (Glue Ear) that can lead to hearing loss."
                                },
                                {
                                    q: "Is Coblation safer than the 'Laser' method?",
                                    a: "Lasers use intense light energy that still generates high heat (800°C+). Coblation is generally considered superior for tonsillectomy because it operates at a much lower temperature (60°C), minimizing collateral tissue damage."
                                },
                                {
                                    q: "Do the tonsils grow back?",
                                    a: "With a total extra-capsular tonsillectomy using Coblation, the tonsillar tissue is removed completely and does not regrow. Adenoid tissue can occasionally regrow in very young infants, but it is extremely rare."
                                },
                                {
                                    q: "When can my child return to school?",
                                    a: "Most children are ready to return to school within 5-7 days. However, they should avoid contact sports or heavy exertion for at least 10-14 days to ensure the surgical site is fully healed."
                                },
                                {
                                    q: "Why do we remove both tonsils and adenoids?",
                                    a: "They are part of the same lymphoid ring (Waldeyer's ring). If both are chronically infected or enlarged, removing both ensures the child's obstructive sleep apnea and recurrent infections are permanently cured."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic text-left">
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
