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
    Target,
    ThermometerSnowflake,
    PlayCircle,
    ArrowRightCircle,
    Eye,
    Microscope,
    Waves,
    Droplets,
    FileText,
    Stethoscope
} from 'lucide-react'
import { PRICING_DATA } from '@/lib/data/pricing-data'

export default function RIRSPage() {
    const pricing = PRICING_DATA.find(p => p.id === 'p-8')

    return (
        <SubServiceTemplate
            title="Elite Laser Kidney Stone Hub (RIRS & URSL)"
            slug="kidney-stone-laser-surgery"
            parentServiceSlug="urology"
            departmentName="Indira Elite Urology Center"
            description={
                <>
                    <p>
                        Experience the gold standard in incision-less stone removal. At Indira Super Speciality Hospital, we specialized in **RIRS (Retrograde Intrarenal Surgery)** and **URSL (Ureteroscopic Lithotripsy)**. Using high-frequency 100W Holmium Lasers, we vaporize kidney stones into a fine 'dust' that passes naturally, eliminating the need for surgical cuts, reducing pain, and ensuring a same-day return to comfort.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Zero Incision. Maximum Clearance. Standardized Excellence."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Starting Price', value: pricing?.startingPrice || '₹65,000', icon: 'IndianRupee' },
                { label: 'Care Type', value: 'Incision-less', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="45-60 Minutes"
            hospitalStay="Daycare / 24 Hours"
            recoveryTime="2-3 Days"
            anesthesia="General Anesthesia"
            reviews={{
                entityType: 'service',
                entityName: 'Kidney Stone Laser Surgery',
                entitySlug: 'kidney-stone-laser-surgery'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* The Laser Physics Section */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-primary">
                            The Science of 100W Holmium Laser Lithotripsy
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Unlike traditional shockwave therapy (ESWL) which hits stones from outside the body, **RIRS** goes directly to the source. Using a flexible fiberoptic telescope, we navigate through the natural urinary passage to reach the stone inside the kidney.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md shrink-0">
                                            <Zap className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Stone 'Dusting' Technology</p>
                                            <p className="text-sm text-slate-500">High-frequency laser pulses (up to 80Hz) turn stones into micron-sized dust particles, often eliminating the need for bulky 'retrieval baskets'.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md shrink-0">
                                            <Waves className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Advanced Irrigation Management</p>
                                            <p className="text-sm text-slate-500">Constant saline flow ensures a clear view for the surgeon and keeps intra-renal pressure at safe, physiological levels.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">The RIRS Benefit Matrix</h4>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span className="text-sm"><strong>Zero Cut Suture-less</strong>: No external wounds means zero risk of wound infection.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span className="text-sm"><strong>Bilateral Clearance</strong>: Simultaneously treat both kidneys in one session.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                            <span className="text-sm"><strong>Highest Safety</strong>: Ideal for patients on blood thinners or with obesity.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Procedure Comparison Table */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Urinary Stone Modality Comparison</h3>
                            <p className="text-slate-600 dark:text-slate-400">Choosing the right path for your specific stone size and location.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                                <thead className="bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th className="p-6 text-sm font-bold">Feature</th>
                                        <th className="p-6 text-sm font-bold text-emerald-600">Laser RIRS</th>
                                        <th className="p-6 text-sm font-bold">PCNL (Keyhole)</th>
                                        <th className="p-6 text-sm font-bold">ESWL (Shockwave)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                                    {[
                                        { f: "Incision Size", rirs: "None (Natural)", pcnl: "1cm (Keyhole)", eswl: "None" },
                                        { f: "Hospital Stay", rirs: "Daycare / 24h", pcnl: "2-3 Days", eswl: "Outpatient" },
                                        { f: "Clearance Rate", rirs: "98%+ (One session)", pcnl: "99% (Large stones)", eswl: "Variable (60-70%)" },
                                        { f: "Best For", rirs: "Stones < 2cm", pcnl: "Stones > 2cm / Staghorn", eswl: "Small, Soft Stones" },
                                        { f: "JJ Stent Need", rirs: "Usually (3-5 days)", pcnl: "Always", eswl: "Rarely" }
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td className="p-6 font-medium bg-slate-50/30 dark:bg-slate-800/20">{row.f}</td>
                                            <td className="p-6 font-bold text-emerald-600">{row.rirs}</td>
                                            <td className="p-6">{row.pcnl}</td>
                                            <td className="p-6">{row.eswl}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Advanced Recovery & Stent Management */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">JJ Stent: The Internal Safety Conduit</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                After a successful laser procedure, we typically place a small, soft tube called a **Double-J (JJ) Stent**. This ensures that the kidney continues to drain perfectly while any residual 'dust' or small fragments pass through the ureter.
                            </p>
                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                    <Droplets className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm">Smooth Drainage</p>
                                        <p className="text-xs text-slate-500">Prevents post-op 'renal colic' (pain) caused by temporary swelling of the ureter.</p>
                                    </div>
                                </div>
                                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-sm">Rapid Stent Removal</p>
                                        <p className="text-xs text-slate-500">Our stents are typically removed within 7-10 days in a painless 2-minute daycare procedure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-emerald-400/20 rounded-[3rem] blur-3xl transition-all" />
                            <div className="relative p-10 bg-slate-900 rounded-[3rem] text-white border border-slate-800 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Stethoscope className="w-32 h-32" />
                                </div>
                                <h4 className="text-2xl font-bold mb-6">The "Stone-Free" Protocol</h4>
                                <p className="text-emerald-100/70 text-sm mb-8 leading-relaxed">
                                    At Indira, we don't just 'dust and discharge.' Our Elite Protocol includes:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Post-Op Ultrasound Validation
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24h Metabolic Stone Analysis
                                    </li>
                                    <li className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clinical Diet-Scaling for Prevention
                                    </li>
                                </ul>
                                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Target Success Rate</p>
                                    <p className="text-3xl font-bold mt-1">99.2%</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 relative z-10 font-primary">
                            <Info className="text-emerald-400" />
                            Elite Clinical FAQs: Kidney Stones
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            {[
                                {
                                    q: "Can I go home the same day after RIRS?",
                                    a: "Yes. RIRS is primarily a daycare procedure. However, some patients with complex stones or underlying health conditions may stay for overnight observation to ensure absolute safety."
                                },
                                {
                                    q: "Will the laser 'burn' my internal organs?",
                                    a: "No. The Holmium laser has a very specific penetration depth (less than 0.5mm) in water. It vaporizes the stone but is safely absorbed by the irrigation fluid before it can reach tissue, provided the surgeon remains focused on the stone."
                                },
                                {
                                    q: "How do I know if I'm 'Stone-Free'?",
                                    a: "We confirm stone clearance using high-resolution Ultrasound or X-ray KUB during follow-up. For very complex cases, a low-dose CT scan may be used to verify 100% clearance."
                                },
                                {
                                    q: "Is RIRS better than URSL?",
                                    a: "URSL (Ureteroscopy) is used for stones located in the ureter (the tube). RIRS is used for stones located deep inside the kidney. Both use the same laser technology but different types of endoscopes (Semi-rigid vs. Flexible)."
                                },
                                {
                                    q: "Can kidney stones come back after laser surgery?",
                                    a: "The surgery removes existing stones. However, stone formation is often metabolic. To prevent recurrence, we perform stone analysis and provide specific dietary guidelines (e.g., lower salt, higher water, specific mineral adjustments)."
                                },
                                {
                                    q: "What symptoms are normal after the procedure?",
                                    a: "Mild pink-colored urine and a slight urge to urinate frequently are normal for 24-48 hours, especially with a JJ stent in place. These symptoms resolve quickly once the stent is removed."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    <h4 className="font-bold text-emerald-400 mb-3 flex items-start gap-2 italic font-primary tracking-tight">
                                        <Zap className="w-4 h-4 mt-1 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed antialiased pl-6">
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
