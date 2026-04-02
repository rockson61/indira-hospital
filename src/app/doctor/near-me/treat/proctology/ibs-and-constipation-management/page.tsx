

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
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    ArrowRightCircle,
    Eye,
    Star,
    Move,
    UserCheck,
    MapPin,
    Scissors,
    History,
    Anchor,
    Scale,
    Layers,
    Radiation,
    Droplets,
    Wind,
    Microscope,
    Flame,
    Brain,
    Utensils,
    HeartPulse
} from 'lucide-react'

export default function IBSConstipationPage() {
    return (
        <SubServiceTemplate
            title="Elite IBS & Chronic Constipation Management"
            slug="ibs-and-constipation-management"
            parentServiceSlug="proctology"
            departmentName="Indira Elite Proctology"
            description={
                <>
                    <p>
                        Irritable Bowel Syndrome (IBS) and Chronic Constipation are not just "digestive issues"—they are functional disorders that impact your neuro-gastric axis. At Indira Super Speciality Hospital, we bridge the gap between proctology and motility science. Led by **Dr. Karan Shankar**, our team provides comprehensive diagnostics including **Anorectal Manometry** and **Biofeedback Therapy** to restore your natural digestive rhythm.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Holistic motility care: Reclaiming your quality of life through gut-brain optimization."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Tech Level', value: 'Motility Lab', icon: 'Zap' },
                { label: 'Care Type', value: 'Rehabilitative', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="30-60 Minutes"
            hospitalStay="Daycare / OPD"
            recoveryTime="Ongoing Therapy"
            anesthesia="Not Required"
            reviews={{
                entityType: 'service',
                entityName: 'IBS & Constipation Management',
                entitySlug: 'ibs-and-constipation-management'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: The Gut-Brain Axis */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading uppercase tracking-tighter">
                            Mechanism: The Gut-Brain Axis & Motility
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    IBS is a functional gastrointestinal disorder. This means that while your gut may look normal during a colonoscopy, it isn't "functioning" correctly. It's often caused by communication issues between the brain and the enteric nervous system, leading to abnormal muscle contractions.
                                </p>
                                <p className="mt-4">
                                    In **Chronic Constipation**, the issue is often structural or behavioral. "Slow Transit" occurs when the colon muscles move too slowly, while "Dyssynergic Defecation" happens when the pelvic floor muscles fail to relax during a bowel movement. Our **Elite Motility Lab** identifies these specific failures to build a targeted recovery plan.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Anorectal Manometry</strong>: Assessing muscle pressure and coordination with precision sensors.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-emerald-600" />
                                        <span><strong>Biofeedback Therapy</strong>: Retraining the brain-muscle connection for easy, effortless digestion.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Brain className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Indira" Microbiome Audit</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-heading italic border-l-2 border-emerald-100 pl-4">
                                    We don't just prescribe laxatives. We audit your diet, stress levels, and bacterial balance to eliminate SIBO (Small Intestinal Bacterial Overgrowth) and restore your "Gut Rhythms."
                                </p>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Neuro-Gastric Resilience
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Regional Factors - Vellore Residents */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h2 className="font-heading text-3xl font-bold mb-8 text-center italic font-heading text-emerald-300">Why Digestive Disorders are Prevalent in Vellore</h2>
                        <div className="grid md:grid-cols-3 gap-10 text-left relative z-10">
                            {[
                                { title: "South Indian Diet", desc: "Highly refined rice and spicy condiments can irritate the bowel lining, triggering IBS in sensitive individuals.", icon: Utensils },
                                { title: "Dehydration (Heat)", desc: "Vellore's intense heat causes rapid moisture loss, leading to harder stools and chronic constipation.", icon: Droplets },
                                { title: "Workplace Stress", desc: "Long sedentary hours and high-pressure roles impact the enteric nervous system, leading to motility failures.", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-emerald-500/50 transition-all">
                                    <item.icon className="w-10 h-10 text-emerald-400 mb-4" />
                                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Management Roadmap */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-heading tracking-tighter italic">Motility Restoration Timeline</h3>
                            <p className="text-slate-600 dark:text-slate-400">Reclaiming your digestive health is a structured journey, not a quick fix.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                            {[
                                { day: "Day 1", title: "Diagnostic Audit", text: "Stroboscopy or Manometry to identify the root motility failure." },
                                { day: "Day 7", title: "FODMAP Start", text: "Personalized dietary elimination to reduce inflammation and gas." },
                                { day: "Week 4", title: "Bio-Feedback", text: "Retraining the pelvic floor muscles for natural coordination." },
                                { day: "Day 90", title: "Rhythm Return", text: "Sustainable, pill-free bowel cycles and improved energy levels." }
                            ].map((step, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-xl transition-all border-b-4 border-emerald-600">
                                    <p className="text-emerald-500 font-black mb-2 uppercase tracking-widest text-[10px]">{step.day}</p>
                                    <h5 className="font-bold text-sm mb-2">{step.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed font-medium italic">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: IBS & Chronic Constipation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can IBS be cured permanently?",
                                    a: "IBS is a chronic functional condition, but it can be managed so effectively that you can live a 100% symptom-free life. Our goal at Indira Hospital is to identify your neuro-triggers and teach your gut to function normally again."
                                },
                                {
                                    q: "Is constipation the same as IBS-C?",
                                    a: "No. IBS-C (IBS with Constipation) involves significant abdominal pain and cramping along with irregular bowel habits, whereas simple chronic constipation may present just as difficulty passing stool without severe pain."
                                },
                                {
                                    q: "Are laxatives safe for long-term use?",
                                    a: "Many over-the-counter laxatives can lead to a 'lazy bowel' syndrome if used for years. We focus on natural motility restoration and pelvic floor therapy instead of creating chronic laxative dependence."
                                },
                                {
                                    q: "What is Biofeedback Therapy?",
                                    a: "It is a non-invasive treatment where high-sensitivity sensors help you visualize and learn to coordinate your anal and pelvic floor muscles during bowel movements. It is highly effective for 'dyssynergic' constipation."
                                },
                                {
                                    q: "When should I consult a doctor for bloating?",
                                    a: "If bloating persists for more than two weeks, is accompanied by weight loss, or occurs immediately after every meal, it may indicate SIBO or IBS and requires a professional motility audit."
                                },
                                {
                                    q: "How does stress impact my IBS?",
                                    a: "The gut has its own nervous system (Enteric Nervous System) which is directly connected to the brain. High stress triggers 'fight or flight' signals that can either speed up or stop your gut motility instantly."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group text-left">
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
                </div>
            }
        />
    )
}
