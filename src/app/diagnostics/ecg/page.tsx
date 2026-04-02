'use client'

import React from 'react'
import { DiagnosticTemplate } from '@/components/healthcare/DiagnosticTemplate'
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
    Star,
    Monitor,
    ZapOff,
    Beaker,
    Droplets,
    PieChart,
    Scale,
    LineChart
} from 'lucide-react'

export default function ECGPage() {
    return (
        <DiagnosticTemplate
            title="Elite 12-Lead Digital ECG"
            slug="ecg"
            category="Cardiology & Electrophysiology"
            description={
                <>
                    <p>
                        An Electrocardiogram (ECG) is the primary diagnostic tool for assessing the heart's electrical rhythm. At Indira Super Speciality Hospital, we provide **Elite 12-Lead Digital ECG Diagnostics**. Using high-fidelity **GE MAC-2000 Acquisition Systems**, we capture the heart's electrical vectors from multiple perspectives, allowing for the instantaneous detection of arrhythmias, ischemic changes (ST-elevation), and structural heart strain.
                    </p>
                    <p className="mt-4 text-rose-600 dark:text-rose-400 font-semibold italic border-l-4 border-rose-500 pl-4 uppercase tracking-tighter">
                        "12-Lead Precision: Capturing the heart's electrical signature in real-time."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Technology', value: '12-Lead Digital', icon: LineChart },
                { label: 'Sample', value: 'Non-Invasive', icon: UserCheck },
                { label: 'Result Time', value: 'Instant', icon: Clock },
                { label: 'Vellore Hub', value: 'Indira', icon: MapPin }
            ]}
            reportTime="Instant"
            homeCollection={false}
            fastingRequired={false}
            price="Elite Standard"
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: The 12-Lead Electrical Vector */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-rose-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: The Cardiac Electrical Map
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Every beat of your heart is triggered by an electrical impulse that travels through specialized muscle fibers. An ECG records this activity from the surface of your skin. While basic 3-lead or 5-lead monitors are used for general tracking, they can miss subtle electrical changes in specific zones of the heart.
                                </p>
                                <p className="mt-4">
                                    Our **Elite Digital ECG** utilizes 10 electrodes placed strategically on the chest and limbs to create **12 distinct viewpoints (Leads)**. This global perspective allows our cardiologists to "see" around the heart, identifying specific areas of low blood flow (Ischemia), old scarring (Infarction), or abnormal pathways (Arrhythmias) that could lead to heart failure or stroke.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-rose-600" />
                                        <span><strong>ST-Segment Analysis</strong>: Immediate identification of life-threatening heart attacks (STEMI).</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-rose-600" />
                                        <span><strong>QT Interval Mapping</strong>: High-precision measurement to detect electrolyte imbalances or drug-related cardiac risks.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-rose-100 dark:border-rose-800 shadow-xl flex flex-col justify-center">
                                <HeartPulse className="w-16 h-16 text-rose-500 mb-6 font-heading uppercase tracking-widest italic" />
                                <h4 className="text-xl font-bold mb-2">Electrophysiology Benchmarks</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 uppercase" />
                                        <span className="text-sm"><strong>Zero-Latency Capture</strong>: Instant digital filtering for crystal-clear wave tracings.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 italic" />
                                        <span className="text-sm font-semibold italic antialiased leading-relaxed tracking-normal text-slate-800 dark:text-slate-200"><strong>Automatic Interpretation</strong>: AI-assisted rhythm analysis for rapid triage decisions.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Cardiac Safety Verified
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diagnostic Spectrum Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-heading text-rose-300 uppercase tracking-widest leading-none">Specialized Cardiac Rhythms</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "Atrial Fibrillation", desc: "Expert detection of irregular 'fluttering' associated with stroke risk.", icon: Zap },
                                { title: "Ventricular Strain", desc: "Identifying heart muscle thickening (Hypertrophy) from chronic hypertension.", icon: Activity },
                                { title: "Conduction Blocks", desc: "Detecting 'Heart Blocks' that may require pacemaker intervention.", icon: Search },
                                { title: "Electrolyte Mapping", desc: "Subtle T-wave changes indicating potassium or calcium imbalances in the blood.", icon: Droplets }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-rose-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-rose-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ECG Comfort & Accuracy Section */}
                    <section className="text-left">
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter uppercase uppercase uppercase">ECG Preparation & Procedure</h3>
                            <p className="text-slate-600 dark:text-slate-400 italic font-medium antialiased text-sm uppercase italic">Ensuring a clean, noise-free electrical signal.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Skin Contact Hub", desc: "To ensure maximum electrical conductivity, some body hair on the chest may need to be trimmed before electrode placement." },
                                { title: "The 'Still' Constraint", desc: "You must remain completely motionless for 30 seconds. Even a deep breath or a muscle twitch can create 'noise' in the tracing." },
                                { title: "Medication Audit", desc: "Inform the technician if you are on Beta-Blockers or Digoxin, which naturally slow the heart's electrical rhythm." }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-2xl transition-all border-b-4 border-rose-500">
                                    <h4 className="font-heading text-xl font-bold mb-3 italic">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-left">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-rose-500" />
                            Elite Clinical FAQs: 12-Lead ECG
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can a normal ECG miss a heart problem?",
                                    a: "Yes. An ECG is a 'snapshot' in time. If you have symptoms like chest pain that come and go, your heart rhythm may be normal during the test but abnormal during the pain. In such cases, we recommend a TMT (Treadmill Test) or a 24-hour Holter Monitor."
                                },
                                {
                                    q: "Does an ECG deliver an electrical shock?",
                                    a: "No. An ECG only 'records' the electricity naturally produced by your own heart. No electricity is sent into your body from the machine. It is a completely passive and safe procedure."
                                },
                                {
                                    q: "Why do I need to remove my upper clothing?",
                                    a: "Electrodes must be placed directly on the skin of your chest, arms, and legs to capture the faint electrical signals. We provide absolute privacy and specialized gowns to ensure you are comfortable during the procedure."
                                },
                                {
                                    q: "Is an ECG the same as an Echo?",
                                    a: "No. An ECG looks at the heart's 'electricity' (rhythm). An Echocardiogram (Echo) is an ultrasound that looks at the heart's 'plumbing' (valves, chambers, and blood flow)."
                                },
                                {
                                    q: "What does 'ST-Segment Elevation' mean on a report?",
                                    a: "This is a critical finding that often suggests a major coronary artery is completely blocked (a heart attack). If our digital system flags this, our emergency cardiology team is notified immediately for rapid intervention."
                                },
                                {
                                    q: "Can children have an ECG?",
                                    a: "Yes. ECG is safe for all ages, from newborns to the elderly. We use smaller, specialized electrodes for pediatric patients to ensure a comfortable fit and accurate signal."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2 italic">
                                        <Zap className="w-4 h-4 mt-1 text-rose-500 shrink-0 italic" />
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
