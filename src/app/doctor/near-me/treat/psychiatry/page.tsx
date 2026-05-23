import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Psychiatry & Mental Wellness Center in Vel in Vellore | I...",
    description: "Advanced Psychiatry & Mental Wellness Center in Vellore, Tamil Nadu surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accre...",
    path: "/doctor/near-me/treat/psychiatry"
});

export default function PsychiatryDepartmentPage() {
    return (
        <DepartmentTemplate
            title="Psychiatry & Mental Wellness Center in Vellore, Tamil Nadu"
            slug="psychiatry"
            shortDescription="Comprehensive Clinical Psychiatry, Psychotherapy, and De-addiction services led by senior mental health consultants."
            fullDescription={(
                <div className="psychiatry-pillar-content space-y-20">
                    {/* ── 1. The Clinical Mental Health Vision ──────────────────── */}
                    <section className="intro prose prose-lg max-w-none prose-slate dark:prose-invert">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading italic border-l-8 border-blue-600 pl-6 mb-8 uppercase tracking-tight text-left">
                            Mind & Wellness: Excellence in Psychiatry
                        </h2>
                        <div className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 text-left">
                            <p>
                                The <strong>Department of Psychiatry & Behavioral Sciences</strong> at Indira Super Speciality Hospital is a dedicated Regional Center for the diagnosis and management of mental health conditions. We believe that <strong>Mental Health is Total Health.</strong> Our clinical approach combines evidence-based pharmacotherapy with specialized psychotherapy (CBT, DBT) to treat the root causes of distress and restore psychological resilience.
                            </p>
                            <p className="mt-4">
                                Our facility features specialized <strong>Adolescent Counseling Hubs</strong>, <strong>De-addiction Programs</strong>, and <strong>Geriatric Psychiatry</strong> services designed to provide a safe, confidential environment for healing.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-12 not-prose text-left">
                            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2.5rem] border border-blue-100 dark:border-blue-800 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                                <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2">
                                    Clinical Psychiatry
                                </h4>
                                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed italic mb-4">
                                    "Biology meets Psychology." We specialize in managing complex conditions like Treatment-Resistant Depression, Bipolar Disorder, and Schizophrenia, using targeted medication management and neuro-rehabilitation.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700 shadow-sm">Bipolar Management</span>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-blue-100 dark:border-blue-700 shadow-sm">Pharmacotherapy</span>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 rotate-12 group-hover:rotate-0 transition-transform"></div>
                                <h4 className="text-2xl font-bold text-blue-300 mb-4 italic">De-addiction & Rehab</h4>
                                <p className="text-blue-100/60 text-sm leading-relaxed mb-6 italic font-medium">
                                    Trusted, confidential paths to recovery. From <strong>Alcohol Withdrawal Management</strong> to <strong>Substance Abuse Counseling</strong>, we focus on long-term sobriety and social reintegration.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Withdrawal Stabilization</li>
                                    <li className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest leading-none"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Relapse Prevention</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── 2. Specialist Mental Health Hubs ──────────────────────── */}
                    <section className="psych-verticals space-y-16">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Total Mind Wellness Pillars</h2>
                            <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {/* Vertical 1: Mood & Anxiety Disorders */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Mood Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Specialized care for Clinical Depression, Panic Disorder, OCD, and Social Anxiety using multi-modal approaches.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Anxiety & Panic Relief", "Major Depressive Hub", "OCD Exposure Therapy", "Phobia Desensitization"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 2: Child & Adolescent Psychiatry */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Child Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Managing developmental challenges, ADHD, Autism Spectrum Disorders, and academic performance anxiety.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["ADHD Diagnostic Center", "Autism Support Hub", "Academic Stress Relief", "Behavioral Modification"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical 3: Counseling & Therapy */}
                            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic uppercase tracking-tighter">Wellness Hub</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium italic">Holistic counseling for Marriage/Relationship issues, Grief, and Workplace burnout management.</p>
                                        <ul className="space-y-3 mb-8">
                                            {["Marital & Family Therapy", "Grief Recovery Program", "Burnout Mitigation Hub", "Sleep Hygiene Education"].map(i => (
                                                <li key={i} className="flex items-start gap-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div> {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── 3. Educational Deep-Dive: Mental Health ───────────────── */}
                    <section className="prose prose-lg max-w-none prose-slate dark:prose-invert bg-blue-50 dark:bg-slate-950 p-12 md:p-20 rounded-[4rem] border border-blue-100 dark:border-slate-800 font-serif italic shadow-inner relative overflow-hidden text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32"></div>
                        <h3 className="text-blue-900 dark:text-blue-400 font-black uppercase text-3xl tracking-tighter not-italic font-heading italic text-left">Mental Health First Aid: Breaking the Silence</h3>
                        <p>
                            Physical pain has a clear signal; emotional pain often hides behind a smile. Mental health conditions are not "character flaws"—they are manageable clinical events involving neurotransmitter balances and psychological stressors. At Indira Hospital, our <strong>Psychological Shield Program</strong> aims to destigmatize mental wellness and provide actionable "First Aid" tools for individuals and caregivers.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
                            {[
                                { k: "Listen", v: "Non-Judgmental Ears" },
                                { k: "Support", v: "Caregiver Empathy" },
                                { k: "Detect", v: "Early Symptom Tracking" },
                                { k: "Protect", v: "Safety Net Protocols" }
                            ].map(item => (
                                <div key={item.k} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-blue-100 dark:border-slate-800 text-center shadow-md group border-b-4 border-b-blue-600">
                                    <p className="text-4xl font-black text-blue-600 mb-2 font-heading italic uppercase tracking-tighter">{item.k}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">{item.v}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 italic">
                            Absolute mental wellness is 30% pharmacotherapy and 70% psychological resilience building. Our psychologists provide <strong>CBT-Based Toolkits</strong> for managing stress and anxiety in real-world scenarios.
                        </p>
                    </section>

                    {/* ── 4. Advanced Psychiatry FAQs ─────────────────────────────── */}
                    <section className="bg-slate-900 dark:bg-black rounded-[4rem] p-12 md:p-24 border border-slate-800 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[150px] -ml-48 -mb-48"></div>
                        
                        <h3 className="text-4xl font-black italic mb-16 flex items-center gap-3 font-heading uppercase tracking-tighter text-blue-400 text-left">
                           Psychiatry: Comprehensive Clinical FAQs
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 text-left">
                            {[
                                {
                                    q: "Do psychiatric medications cause addiction or sedation?",
                                    a: "Modern psychiatric medications (SSRIs, Mood Stabilizers) are non-addictive and designed to restore balance, not sedate. While some initial sleepiness may occur, we focus on doses that allow you to function at your absolute best in school or work."
                                },
                                {
                                    q: "What is Cognitive Behavioral Therapy (CBT)?",
                                    a: "CBT is a high-authority psychological tool that helps you identify and change negative thought patterns as they happen. It is as effective as medication for mild-to-moderate depression and anxiety, and provides long-term relapse prevention."
                                },
                                {
                                    q: "Can Bipolar Disorder be completely managed?",
                                    a: "Yes. With consistent mood stabilizers and specialized psycho-education, individuals with Bipolar Disorder can lead extremely productive, successful lives. Our goal is to achieve 'Euthymia'—a stable, balanced mood state."
                                },
                                {
                                    q: "How do I recognize early signs of ADHD in my child?",
                                    a: "ADHD isn&apos;t just about 'being hyper.' Signs include persistent difficulty in following instructions, frequent losing of items, and an inability to maintain focus even on tasks they enjoy. Early diagnosis prevents secondary academic and self-esteem issues."
                                },
                                {
                                    q: "Is de-addiction possible at home?",
                                    a: "Medical detoxification (withdrawal management) should always be supervised by a clinician due to the risk of seizures or cardiac issues. Once stabilized, long-term rehab can be managed through outpatient counseling and support groups."
                                },
                                {
                                    q: "What is the role of Clinical Psychology vs. Psychiatry?",
                                    a: "Psychiatrists are medical doctors who primarily manage the biological/medication side of mental health. Clinical Psychologists specialize in psychotherapy, diagnostic testing, and behavioral modification. At Indira, both work as a unified clinical team for every patient."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                    <h4 className="font-black text-white mb-6 flex items-start gap-4 italic group-hover:text-blue-400 transition-colors text-lg">
                                        <span className="text-blue-500 text-2xl font-serif">Q.</span>
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
                { name: "Clinical Psychiatry", link: "/doctor/near-me/treat/psychiatry" },
                { name: "CBT/DBT Psychotherapy", link: "/doctor/near-me/treat/psychiatry" },
                { name: "De-addiction Program", link: "/doctor/near-me/treat/psychiatry" },
                { name: "Child & Adolescent Therapy", link: "/doctor/near-me/treat/psychiatry" },
                { name: "Geriatric Mental Health", link: "/doctor/near-me/treat/psychiatry" },
                { name: "Marriage & Family Therapy", link: "/doctor/near-me/treat/psychiatry" }
            ]}
            technology={[
                {
                    name: "Digitized Mood Tracking",
                    description: "Advanced clinical analysis of mood cycles to optimize pharmacotherapy precision.",
                    icon: "Activity"
                },
                {
                    name: "Diagnostic Psychological Testing",
                    description: "Comprehensive psychometric evaluation for ADHD, Autism, and Personality profiles.",
                    icon: "Microscope"
                }
            ]}
            relatedServices={[
                {
                    title: "Neurology Center",
                    description: "Coordinated management of neuro-psychiatric conditions.",
                    slug: "neurology"
                },
                {
                    title: "Paediatrics Center",
                    description: "Developmental childhood mental health synergy.",
                    slug: "paediatrics"
                }
            ]}
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
        />
    )
}