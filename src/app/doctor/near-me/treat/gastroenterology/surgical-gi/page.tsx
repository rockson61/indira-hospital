import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'

export const metadata: Metadata = constructMetadata({
    title: "Elite Surgical Gastroenterology & GI Oncol in Vellore | I...",
    description: "Advanced Elite Surgical Gastroenterology & GI Oncology surgery at Indira Super Speciality Hospital, Vellore. Expert specialists, NABH accredited care, a...",
    path: "/doctor/near-me/treat/gastroenterology/surgical-gi"
});

export default function SurgicalGastroPage() {
    return (
        <SubServiceTemplate
            title="Elite Surgical Gastroenterology & GI Oncology"
            slug="surgical-gi"
            parentServiceSlug="gastroenterology"
            departmentName="Indira Elite Gastro Hub"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>Elite Surgical Gastroenterology & GI Oncology</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Varies by Case"
            hospitalStay="3-7 Days (Avg)"
            recoveryTime="4-6 Weeks"
            anesthesia="General Anesthesia"
            reviews={{
                entityType: 'service',
                entityName: 'Surgical GI',
                entitySlug: 'surgical-gi'
            }}
            fullDescription={
                <div className="space-y-16">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: Elite Surgical Gastroenterology & GI Oncology in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                    {/* Mechanism: The ERAS Protocol */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading">
                            Mechanism: ERAS (Enhanced Recovery After Surgery)
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Traditional major GI surgery involved long fasting periods and slow mobilization. At Indira, we implement the **Elite ERAS Framework**. By using multi-modal pain relief and early liquid nutrition, we prevent "Bowel Paralysis" (Ileus) and ensure you are walking within 12 hours of major abdominal surgery.
                                </p>
                                <p className="mt-4">
                                    Our surgical team utilizes **4K High-Definition Laparoscopy**. Through three or four 5-12mm incisions, we can perform complex organ resections (like distal gastrectomy or sigmoidectomy) with minimal blood loss and zero need for large abdominal "scar-prone" cuts.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Stapler Technology</strong>: High-grade internal stapling devices for leak-proof bowel connections.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Tumor Margin Mapping</strong>: Intra-operative visualization to ensure 100% removal of cancerous tissue.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Scale className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">Nutritional Hub Integration</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                    Following major GI resection, the body&apos;s absorption mechanics change. We provide a **30-Day Post-Op Nutrition Blueprint** tailored to your new digestive anatomy.
                                </p>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Metabolic Health Assurance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Specialized GI Verticals */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter">Advanced Surgical GI Domains</h3>
                            <p className="text-slate-600 dark:text-slate-400">From oncology to complex hernias, we manage the most challenging abdominal pathology.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "GI Oncology Hub",
                                    desc: "Surgical management of cancers in the Esophagus, Stomach, Colon, and Pancreas using radical R0 resection protocols.",
                                    icon: Target
                                },
                                {
                                    title: "HPB Surgery",
                                    desc: "Hepato-Pancreatico-Biliary specialized unit for Liver tumors, Gallbladder cancer, and Chronic Pancreatitis.",
                                    icon: Activity
                                },
                                {
                                    title: "Complex Hernia Unit",
                                    desc: "Abdominal wall reconstruction for large ventral and incisional hernias using advanced component separation techniques.",
                                    icon: Layers
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all border-b-4 border-emerald-500">
                                    <item.icon className="w-12 h-12 text-emerald-600 mb-6" />
                                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-heading italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trust Infrastructure Section */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h3 className="font-heading text-3xl font-bold mb-4 font-serif italic">Why Indira for Surgical GI?</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
                            GI surgery is about more than just "removing a mass"—it is about ensuring the long-term metabolic health of the patient.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                            {[
                                { day: "Day 0", title: "4K Mapping", text: "High-definition pre-surgical mapping for sub-millimeter accuracy." },
                                { day: "Day 2", title: "Early Feeding", text: "Transitioning to oral liquids to ensure the bowel restarts immediately." },
                                { day: "Day 5", title: "Discharge Ready", text: "Most laparoscopic GI patients are mobile and eating before going home." },
                                { day: "Long-Term", title: "Quality of Life", text: "Focus on maintaining normal diet and preventing nutritional deficiencies." }
                            ].map((step, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-emerald-400 font-bold mb-2">{step.day}</p>
                                    <h5 className="font-bold text-sm mb-2">{step.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed antialiased italic">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: Surgical Gastroenterology
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can cancer surgery be performed laparoscopically?",
                                    a: "Yes. For many GI cancers, like Colon and Esophageal cancer, laparoscopic (keyhole) surgery is now the gold standard. It provides similar oncological outcomes with much faster recovery."
                                },
                                {
                                    q: "What is a Whipple&apos;s Procedure?",
                                    a: "It is one of the most complex GI surgeries, involving removal of the pancreas head and parts of the small intestine. This is performed by our senior HPB specialists for pancreatic cancers."
                                },
                                {
                                    q: "What is a 'Stapled' Anastomosis?",
                                    a: "When we remove a part of the bowel, we must reconnect it. We use high-grade internal stapling devices which are often more precise and leak-proof than traditional hand-suturing."
                                },
                                {
                                    q: "Will I need a 'Bag' after colon surgery?",
                                    a: "Not necessarily. Modern surgical GI focuses on 'Sphincter Preservation.' We aim to avoid temporary or permanent colostomy (stoma) bags whenever safely possible."
                                },
                                {
                                    q: "How long after GI surgery can I eat normally?",
                                    a: "Under our ERAS protocol, you&apos;ll start sips of liquids within 24 hours. A return to a fully solid diet usually happens over 10-14 days as the bowel recovers."
                                },
                                {
                                    q: "Is Surgical GI different from Medical Gastroenterology?",
                                    a: "Yes. Medical Gastro handles condition like IBS or Acid Reflux through medicines and endoscopy. Surgical GI (Gastro Surgery) handles conditions that require structural physical intervention or tumor removal."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 antialiased italic">
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