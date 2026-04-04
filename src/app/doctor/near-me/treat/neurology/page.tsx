import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Neurosciences & Stroke Hub in Vellore, Tam in Vellore | I...",
    description: "Advanced Neurosciences & Stroke Hub in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited car...",
    path: "/doctor/near-me/treat/neurology"
});

export default function NeurologyDepartmentPage() {
    const neuroDoctors = [
        {
            name: "Dr. P. Shankar",
            specialty: "Chairman - Surgical & Clinical Support",
            image: "/images/doctors/dr-shankar.jpg",
            slug: "dr-p-shankar"
        }
    ]

    const quickFacts = [
        { label: 'Technology', value: '4K Neuro-Imaging', icon: 'Microscope' },
        { label: 'Emergency', value: '24/7 Stroke Unit', icon: 'Siren' },
        { label: 'Care Focus', value: 'Function Recovery', icon: 'Activity' },
        { label: 'Safety', value: 'Level 3 Neuro-ICU', icon: 'Shield' },
    ]

    return (
        <DepartmentTemplate
            title="Neurosciences & Stroke Hub in Vellore, Tamil Nadu"
            slug="neurology"
            shortDescription="Advanced Brain & Nervous System care in Vellore. We specialize in Hyper-Acute Stroke Thrombolysis, Epilepsy control, and complex Neuro-Critical care."
            fullDescription={(
                <div className="neurology-pillar-content space-y-20 text-left">
                    {/* ── 1. The Command Center of the Body ─────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-indigo-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            The Neuro Authority: Excellence in Brain & Spine Sciences
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <p>
                                The brain is the body's most complex organ, and in neurology, every second counts. The <strong>Department of Neurosciences</strong> at Indira Super Speciality Hospital is a regional center of excellence for the diagnosis and management of brain, spine, and peripheral nerve disorders. We operate on a clinical principle of <strong>"Neural Preservation"</strong>—utilizing hyper-fast response protocols to save brain tissue during acute events.
                            </p>
                            <p className="mt-4">
                                Our facility features a dedicated <strong>24/7 Stroke Unit</strong> capable of performing IV Thrombolysis (clot-busting) during the critical "Golden Hour." Backed by advanced <strong>Digital EEG and EMG</strong> diagnostics, we deliver a multi-disciplinary approach to complex conditions like Refractory Epilepsy, Parkinson’s Disease, and Chronic Migraine.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2 italic">
                                    Stroke: The Golden Hour
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    "Time is Brain." Every minute a stroke goes untreated, 1.9 million neurons die. Our <strong>Rapid-Fire Thrombolysis</strong> protocol ensures that life-saving medication is initiated within minutes of hospital arrival.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-indigo-100 dark:border-indigo-700 shadow-sm">IV Thrombolysis</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-indigo-100 dark:border-indigo-700 shadow-sm">24/7 MRI/CT Access</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-indigo-300 mb-4 italic uppercase tracking-tighter text-left">Epilepsy Excellence Hub</h4>
                                <p className="text-indigo-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Achieving Seizure-Freedom. We utilize <strong>Video-EEG Monitoring</strong> to pinpoint seizure foci, allowing for precision pharmacological control and evaluation for epilepsy surgery.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-indigo-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Pediatric Neuropathy</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-indigo-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> Refractory Case Management</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialized Neurology Verticals ────────────────── */}
                    <section className="neuro-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Neuroscience Excellence Domains</h2>
                            <div className="h-1 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Stroke & Vascular */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Vascular Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Hyper-acute management of Ischemic and Hemorrhagic strokes using modern thrombolytic agents.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Stroke Thrombolysis (IVT)", "Carotid Doppler Scans", "Stroke Physical Rehab", "TIA (Mini-Stroke) Clinic"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Movement Disorders */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between border-b-4 border-indigo-600">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Movement Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Precision management of tremors, Parkinsonism, and dystonias using pharmacological and botulinum therapies.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Parkinson’s Med-Optimize", "Tremor Analysis Lab", "Botox for Dystonia", "Gat & Balance Rehab"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Neuro-Diagnostics */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Diagnostic Lab</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Advanced mapping of electrical activity in the brain and peripheral nerves for objective diagnosis.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Digital EEG (Brain Waves)", "EMG (Muscle Testing)", "NCS (Nerve Velocity)", "Evoked Potential Study"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Recognizing Stroke ────────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-indigo-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-indigo-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-indigo-900 dark:text-indigo-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic text-left">Clinical Insight: The B.E. F.A.S.T. Protocol</h3>
                        <p>
                            A stroke is a "Brain Attack." It occurs when blood flow to the brain is blocked or a blood vessel ruptures. Recognizing the signs early is the only way to save a life and ensure neurological recovery.
                        </p>
                        <p className="mt-4 text-center font-bold text-red-600 dark:text-red-400">If you notice any of these, call 24/7 Emergency immediately:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "B", v: "Balance Loss" },
                                { k: "E", v: "Eye Blur" },
                                { k: "F", v: "Face Droop" },
                                { k: "A", v: "Arm Weakness" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-indigo-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-indigo-600">
                                    <p className="text-4xl font-black text-indigo-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            At Indira Hospital, our <strong>Stroke-Ready MRI</strong> is active 24/7, allowing our neurologists to differentiate between Clot (Ischemic) and Bleed (Hemorrhagic) within minutes—ensuring the correct life-saving treatment is started instantly.
                        </p>
                    </section>

                    {/* ── 4. Neurology FAQs: The Clinical Deep-Dive ─────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl text-left">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-indigo-400 text-left">
                           Neurosciences: Specialist Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Can a stroke be completely cured?",
                                    a: "If a patient reaches our emergency unit within the 'Golden Hour' (typically under 4.5 hours for medication), we can perform thrombolysis to dissolve the clot. If successful, many patients experience a complete reversal of symptoms with no long-term disability."
                                },
                                {
                                    q: "What is the difference between a Seizure and Epilepsy?",
                                    a: "A single seizure can be caused by fever, dehydration, or injury. <strong>Epilepsy</strong> is a neurological condition characterized by *recurrent*, unprovoked seizures. We use Digital EEG to confirm the pattern of brain waves before starting long-term medication."
                                },
                                {
                                    q: "Are migraines just 'bad' headaches?",
                                    a: "No. A migraine is a complex neurological event. It often includes extreme sensitivity to light/sound, nausea, and 'auras' (visual disturbances). Chronic migraines require specialized preventive treatment beyond simple over-the-counter painkillers."
                                },
                                {
                                    q: "Why do I need an EMG test for back pain?",
                                    a: "An EMG (Electromyography) measures the electrical health of your muscles and the nerves that control them. If you have back pain with leg numbness, the EMG tells us exactly which nerve root is pinched and how much damage it has sustained."
                                },
                                {
                                    q: "What is 'Mini-Stroke' or TIA?",
                                    a: "A TIA (Transient Ischemic Attack) features stroke-like symptoms that subside within minutes. Do NOT ignore it—a TIA is a 'Warning Shot' indicating that a major, permanent stroke is highly likely in the following 48 hours."
                                },
                                {
                                    q: "Is Parkinson’s disease hereditary?",
                                    a: "The majority of Parkinson's cases (approx. 85-90%) are 'Sporadic' and not directly inherited. However, early-onset Parkinson's may have a genetic link. Management focuses on optimizing Dopamine levels to restore movement fluidity."
                                },
                                {
                                    q: "Can dementia be prevented?",
                                    a: "While age and genetics are factors, managing 'Vascular Risks' (Blood Pressure, Diabetes, Cholesterol) significantly reduces the risk of Vascular Dementia. Cognitive engagement and a heart-healthy diet also play protective roles."
                                },
                                {
                                    q: "What is Bell's Palsy, and is it a stroke?",
                                    a: "Bell's Palsy is a sudden weakness in the facial muscles caused by inflammation of the 7th cranial nerve. It is NOT a stroke. While it looks scary (facial droop), most patients recover fully within weeks with steroid therapy."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-indigo-400 transition-colors text-lg text-left">
                                        <span className="text-indigo-500 text-2xl font-serif">Q.</span>
                                        <span>{faq.q}</span>
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed antialiased pl-8 font-medium font-heading">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
            procedures={[
                { name: "Rapid Stroke Thrombolysis", link: "/doctor/near-me/treat/neurology" },
                { name: "Digital EEG Brain Mapping", link: "/doctor/near-me/treat/neurology" },
                { name: "EMG/NCS Nerve Testing", link: "/doctor/near-me/treat/neurology" },
                { name: "Epilepsy Clinic Unit", link: "/doctor/near-me/treat/neurology" },
                { name: "Chronic Migraine Care", link: "/doctor/near-me/treat/neurology" },
                { name: "Movement Disorder Rehab", link: "/doctor/near-me/treat/neurology" }
            ]}
            relatedDoctors={neuroDoctors}
            quickFacts={quickFacts}
        />
    )
}