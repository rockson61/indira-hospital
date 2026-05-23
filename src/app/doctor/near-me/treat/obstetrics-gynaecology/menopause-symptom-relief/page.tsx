import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Elite Menopause & Bio-Identical Hormone Ca in Vellore | I...",
    description: "Advanced Elite Menopause & Bio-Identical Hormone Care surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, an...",
    path: "/doctor/near-me/treat/obstetrics-gynaecology/menopause-symptom-relief"
});

export default function MenopauseCarePage() {
    return (
        <SubServiceTemplate
            title="Elite Menopause & Bio-Identical Hormone Care"
            slug="menopause-symptom-relief"
            parentServiceSlug="obstetrics-gynaecology"
            departmentName="Indira Elite Women&apos;s Care"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Elite Menopause & Bio-Identical Hormone Care</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Lifecycle Management"
            hospitalStay="Outpatient"
            recoveryTime="Immediate Relief focus"
            anesthesia="Not Required"
            reviews={{
                entityType: 'service',
                entityName: 'Menopause Symptom Relief',
                entitySlug: 'menopause-symptom-relief'
            }}
            fullDescription={
                <div className="space-y-16">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: Elite Menopause & Bio-Identical Hormone Care in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                    {/* Mechanism: The Estrogen Axis */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-rose-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: The Neuro-Endocrine Shift
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    The decline in estrogen levels during perimenopause and menopause leads to systemic physiological changes. Receptors for estrogen are found in the brain (impacting mood and 'brain fog'), the blood vessels (impacting hot flashes), and the bone-building cells.
                                </p>
                                <p className="mt-4">
                                    Our **Elite Hormone Audit** identifies the exact deficit. We move beyond managing "symptoms" to treating the **Genitourinary Syndrome of Menopause (GSM)** and the "Metabolic Slowdown." By utilizing low-dose, transdermal (skin) hormone replacement, we avoid the side effects of traditional oral pills, providing a much safer profile for heart and liver health.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ThermometerSnowflake className="w-5 h-5 text-rose-600" />
                                        <span><strong>Thermoregulation Fix</strong>: Stabilizing the 'hypothalamic thermostat' to stop night sweats instantly.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Heart className="w-5 h-5 text-rose-600" />
                                        <span><strong>Cardio-Protection Audit</strong>: Monitoring lipid profiles as estrogen&apos;s heart-protective effect diminishes.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-rose-100 dark:border-rose-800 shadow-xl flex flex-col justify-center">
                                <Activity className="w-16 h-16 text-rose-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Indira" DEXA Bone Security</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-heading italic border-l-2 border-rose-100 pl-4">
                                    Women can lose 20% of their bone density in just 5 years post-menopause. We use high-precision **DEXA Scanning** and Vitamin D/Calcium titration to stop **Osteoporosis** before a fracture ever occurs.
                                </p>
                                <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Osteo-Resilience Assurance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Holistic Wellness Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 to-transparent" />
                        <h3 className="font-heading text-3xl font-bold mb-8 italic font-heading text-rose-300 uppercase tracking-widest leading-none">The Golden Years Lifestyle Matrix</h3>
                        <div className="grid md:grid-cols-3 gap-10 text-left relative z-10">
                            {[
                                { title: "Metabolic Support", desc: "addressing the 'Menopausal Weight Gain' through personalized clinical dietetics and muscle-mass preservation.", icon: Apple },
                                { title: "Cognitive Harmony", desc: "Scientific management of memory 'Brain Fog' and irritability using neuro-supportive nutrients.", icon: Activity },
                                { title: "Vaginal Restoration", desc: "Non-hormonal and hormonal solutions for dryness and recurrent UTIs (GSM Syndrome).", icon: Shield }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-rose-500/50 transition-all">
                                    <item.icon className="w-10 h-10 text-rose-400 mb-4" />
                                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-rose-500" />
                            Elite Clinical FAQs: Menopause & Hormone Therapy
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Is Hormone Replacement Therapy (HRT) safe?",
                                    a: "Yes. Modern medicine has evolved towards 'transdermal' low-dose hormones which have a significantly higher safety profile than the older oral pills. We perform an annual 'Safety Audit' (Mammogram + Blood work) for 100% peace of mind."
                                },
                                {
                                    q: "What is the 'Window of Opportunity' for HRT?",
                                    a: "Hormone therapy is most effective and safest when started within 10 years of your final period or before age 60. This is when it offers the most 'Cardio-Protective' and 'Neuro-Protective' benefits."
                                },
                                {
                                    q: "Why do I feel 'Brain Fog' since my periods stopped?",
                                    a: "Estrogen receptors are located throughout the brain. A drop in levels can slow down neural signaling. While it feels like memory loss, it&apos;s often reversible once hormonal and metabolic balance is restored."
                                },
                                {
                                    q: "Can natural herbs like Soy replacement HRT?",
                                    a: "Phytoestrogens (from plants) may help with very mild hot flashes. However, for bone protection and severe night sweats, they are generally not as effective. We offer a 'Blended' approach if you prefer natural support."
                                },
                                {
                                    q: "Is menopause related to increased heart risk?",
                                    a: "Yes. Estrogen keeps blood vessels flexible and manages 'good' cholesterol. Once levels drop, women&apos;s risk of heart disease increases to match men&apos;s. This is why we include a 'Cardiac Lipid Audit' in all menopause consultations."
                                },
                                {
                                    q: "How do I manage menopause-related weight gain?",
                                    a: "The drop in hormones slows your resting metabolic rate and shifts fat storage to the abdomen. We focus on 'High-Protein' dietary restoration and 'Muscle-Building' to force your metabolism back into gear."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-rose-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic text-left">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
                </div>
            }
        />
    )
}