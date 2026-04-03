import React from 'react'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'
export default function HighRiskPregnancyPage() {
    return (
        <SubServiceTemplate
            title="High-Risk Pregnancy & Maternal-Fetal Hub in Vellore, Tamil Nadu"
            slug="high-risk-pregnancy-care"
            parentServiceSlug="obstetrics-gynaecology"
            departmentName="Indira Elite Women's Care"
            description={
                <article>
                    <p className="text-lg leading-relaxed">
                        <strong>High-Risk Pregnancy & Maternal-Fetal Hub</strong> is a high-precision medical procedure at Indira Super Speciality Hospital, Vellore. Our surgical team utilizes internal clinical benchmarks to ensure <strong>painless outcomes</strong> and <strong>rapid patient recovery</strong> for all procedures.
                    </p>
                </article>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Gestation Support"
            hospitalStay="2-4 Days (Delivery)"
            recoveryTime="6 Weeks"
            anesthesia="Spinal / Epidural Ready"
            reviews={{
                entityType: 'service',
                entityName: 'High-Risk Pregnancy Care',
                entitySlug: 'high-risk-pregnancy-care'
            }}
            fullDescription={
                <div className="space-y-16">
                {/* 🤖 AEO Knowledge Block: AI Extraction Node */}
                <AioKnowledgeBlock 
                    title="Quick Facts: High-Risk Pregnancy & Maternal-Fetal Hub in Vellore"
                    items={[
                        { label: 'Expert Specialist', value: 'Senior Clinical Team', icon: UserCheck },
                        { label: 'Tech Standard', value: 'Advanced Precision Tech', icon: Zap },
                        { label: 'Facility Grade', value: 'NABH Super Speciality', icon: Shield },
                        { label: 'Region Focus', value: 'Vellore Hub', icon: MapPin }
                    ]}
                />

                <article className="space-y-12">
                    {/* Mechanism: The High-Risk Security Protocol */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-rose-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Mechanism: The maternal-fetal security axis
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    High-risk pregnancies are medical scenarios that require constant physiological monitoring of two patients simultaneously. Our **Maternal-Fetal Medicine (MFM)** unit operates on a 'Zero-Compromise' framework that integrates real-time clinical vigilance with technological superiority.
                                </p>
                                <p className="mt-4">
                                    Whether managing **Preeclampsia** (high blood pressure) or **Preterm Labor**, our protocols focus on 'extending gestation' safely to allow the baby's lungs and organs to mature. We utilize **Doppler Flow Studies** and **High-Resolution 4D Ultrasonography** to track fetal health in sub-millimeter detail, identifying issues like 'Intrauterine Growth Restriction (IUGR)' before they become critical.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-rose-600" />
                                        <span><strong>Preeclampsia Vigilance</strong>: Monitoring renal and placental health to prevent eclamptic seizures and growth delays.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-rose-600" />
                                        <span><strong>Gestational Diabetes (GDM)</strong>: Precise insulin-metabolic titration to prevent neonatal hypoglycemia and 'large-for-gestation' births.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-rose-100 dark:border-rose-800 shadow-xl flex flex-col justify-center">
                                <Baby className="w-16 h-16 text-rose-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Indira" NICU Synergy</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-heading italic border-l-2 border-rose-100 pl-4">
                                    Our Level II+ Neonatal ICU is located seconds away from the labor suits. For babies born early or those with growth challenges, our senior neonatologists provide immediate 'life-first' interventions starting from the very first breath.
                                </p>
                                <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Neonatal Resilience Assurance
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conditions Grid */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 to-transparent" />
                        <h3 className="font-heading text-3xl font-bold mb-8 italic font-heading text-rose-300 uppercase tracking-widest leading-none">Maternal-Fetal Clinical Spectrum</h3>
                        <div className="grid md:grid-cols-3 gap-10 text-left relative z-10">
                            {[
                                { title: "Multifetal Gestation", desc: "Specialized monitoring for twins and triplets, focusing on weight discordance and preterm labor prevention.", icon: Users2 },
                                { title: "PIH (Hypertension)", desc: "Aggressive blood pressure management to ensure maternal renal and vascular security throughout the third trimester.", icon: Activity },
                                { title: "Fetal Medicine Hub", desc: "Advanced genetic screening (Dual/Quad markers) and anatomy scans to ensure perfect organ development.", icon: Microscope }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-rose-500/50 transition-all">
                                    <item.icon className="w-10 h-10 text-rose-400 mb-4" />
                                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Pre-natal security grid */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter italic">Why Indira Hospital for High-Risk Pregnancies?</h3>
                            <p className="text-slate-600 dark:text-slate-400">Total clinical synergy for the most sensitive journey of your life.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { title: "24/7 Obstetrician", desc: "Senior consultants are physically present on-site 24/7 for immediate emergency intervention." },
                                { title: "TIVA/Epidural", desc: "Painless delivery options with senior anesthesia support for high-risk cardiac or PIH cases." },
                                { title: "Blood Bank Support", desc: "Immediate access to rare blood groups and cross-matching for placental-abruption risks." },
                                { title: "Genetic Suite", desc: "Post-natal and pre-natal genetic counseling for couples with a history of chromosomal variations." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:bg-rose-50/10 transition-all border-b-4 border-rose-600">
                                    <h4 className="font-heading text-[10px] font-black uppercase tracking-widest text-rose-600 mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 font-medium italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-rose-500" />
                            Elite Clinical FAQs: High-Risk Pregnancy Care
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Does a high-risk pregnancy mean I should have a C-section?",
                                    a: "Not necessarily. We prioritize Normal Vaginal Birth (VBAC and routine) whenever clinically safe. However, in high-risk cases, we are prepared to perform an emergency C-section within minutes if the baby's heart tracking shows distress."
                                },
                                {
                                    q: "Why is maternal age over 35 considered 'High-Risk'?",
                                    a: "Advanced maternal age is statistically associated with higher risks of PIH, gestational diabetes, and chromosomal variations. With our 'Elite Screening' protocols, most women over 35 deliver perfectly healthy babies."
                                },
                                {
                                    q: "What is an Anatomy Scan (Level II USG)?",
                                    a: "It is a detailed ultrasound performed at 18-20 weeks to examine every organ, limb, and structure of the baby. It ensures the spine, heart chambers, and brain architecture are developing correctly."
                                },
                                {
                                    q: "Can I manage Gestational Diabetes with just diet?",
                                    a: "In many cases, yes. Our clinical nutritionist provides a GDM-specific meal plan. However, if your fasting sugars remain high, we titrate insulin to ensure the baby doesn't grow too large (macrosomia)."
                                },
                                {
                                    q: "When should I call the emergency line immediately?",
                                    a: "Call us instantly if you experience severe headaches, blurred vision, sudden swelling of the face/hands, or reduced fetal movements. These can be early signs of preeclampsia."
                                },
                                {
                                    q: "Is the NICU team present for all births?",
                                    a: "For high-risk deliveries, yes. Our senior neonatologists are physically present in the delivery suite to provide immediate 'Gold-Standard' neonatal support from the first second of birth."
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