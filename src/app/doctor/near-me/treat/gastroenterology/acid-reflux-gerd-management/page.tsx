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
    MapPin,
    UserCheck
} from 'lucide-react'

export default function GERDManagementPage() {
    return (
        <SubServiceTemplate
            title="Elite Acid Reflux & GERD Management"
            slug="acid-reflux-gerd-management"
            parentServiceSlug="gastroenterology"
            departmentName="Indira Elite Gastroenterology"
            description={
                <>
                    <p>
                        Acid reflux is more than just "heartburn"—it is a chronic failure of the gastro-esophageal junction (LES). At Indira Super Speciality Hospital, we offer **Elite GERD Management**. By combining advanced 24-hour pH monitoring with clinical "Metabolic-Motility" protocols and the gold-standard **Laparoscopic Fundoplication** surgical cure, we ensure your relief is permanent and your esophagus is protected from long-term malignancy risks.
                    </p>
                    <p className="mt-4 text-[#005f73] dark:text-cyan-400 font-semibold italic">
                        "Precision motility care: Restoring the gateway to your digestive health."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Diagnostic', value: '24hr pH-Metry', icon: 'Activity' },
                { label: 'Care Type', value: 'Comprehensive', icon: 'Shield' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="Permanent Cure focus"
            hospitalStay="Outpatient / 48hr Surgical"
            recoveryTime="Rapid Relief"
            anesthesia="Not Required / General (for surgery)"
            reviews={{
                entityType: 'service',
                entityName: 'GERD Management',
                entitySlug: 'acid-reflux-gerd-management'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* Mechanism: The LES Failure */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-cyan-500 pl-4 font-primary uppercase tracking-tighter italic">
                            Mechanism: Lower Esophageal Sphincter (LES) Dysfunction
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    The esophagus and stomach are separated by a high-pressure muscular valve (LES). Gastroesophageal Reflux Disease (GERD) occurs when this valve fails to close tightly or opens inappropriately. This allows acidic stomach contents to flow back into the esophagus, causing chemical burns on the mucosal lining.
                                </p>
                                <p className="mt-4">
                                    Chronic reflux is not just a symptom of 'too much acid'; it is a structural and motility failure often accompanied by a **Hiatal Hernia**. At Indira hospital, we use **High-Resolution Manometry** to measure the exact pressure of your LES and determine if you require medical management or a structural surgical repair.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-cyan-600" />
                                        <span><strong>Barrett’s Tracking</strong>: Monitoring mucosal changes to prevent early-stage esophageal cancer.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-cyan-600" />
                                        <span><strong>Extra-Esophageal Reflux</strong>: Managing silent symptoms like chronic cough, hoarseness, and dental erosion.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-cyan-100 dark:border-cyan-800 shadow-xl flex flex-col justify-center">
                                <Flame className="w-16 h-16 text-cyan-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">The "Indira" Reflux Audit</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-primary italic border-l-2 border-cyan-100 pl-4">
                                    Why do antacids only work temporarily? Because they neutralize acid without fixing the 'leaky valve.' Our audits identify 'Non-Acid Reflux' and 'Hypersensitive Esophagus' which traditional meds often miss.
                                </p>
                                <div className="inline-flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-widest">
                                    <Shield className="w-4 h-4" />
                                    Mucosal Protection Security
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Surgical Precision: Nissen Fundoplication */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-primary text-cyan-300 uppercase tracking-widest leading-none">The Golden Standard Surgical Cure</h3>
                        <div className="grid md:grid-cols-2 gap-10 text-left relative z-10">
                            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
                                <h4 className="font-bold text-2xl mb-4 text-cyan-400">Laparoscopic Nissen Fundoplication</h4>
                                <p className="text-sm text-slate-400 leading-relaxed italic mb-6">
                                    For patients who are medication-dependent or have large Hiatal Hernias, we perform a 360-degree 'wrap' of the stomach around the weak LES. This surgically recreates the high-pressure valve, permanently stopping acid from entering the esophagus.
                                </p>
                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-tighter">
                                    <span className="px-3 py-1 bg-white/10 rounded-full">48hr Recovery</span>
                                    <span className="px-3 py-1 bg-white/10 rounded-full">Pill-Free Life</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold italic">Why choose the surgical pathway?</h4>
                                <ul className="space-y-4">
                                    {[
                                        { title: "No Medication Dependency", text: "End the need for daily PPIs and antacids for life." },
                                        { title: "Malignancy Prevention", text: "Stopping reflux is the only way to halt the progression of Barrett's into cancer." },
                                        { title: "Night-time Relief", text: "Zero sleep disruption after the very first recovery night." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-[10px] shrink-0">✓</div>
                                            <div>
                                                <p className="font-bold text-sm text-cyan-200">{item.title}</p>
                                                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Diagnostic Grid */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic font-primary tracking-tighter italic">Precision Physiological Diagnostics</h3>
                            <p className="text-slate-600 dark:text-slate-400">Objective data, not guesswork. We measure exactly what your esophagus is doing over 24 hours.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {[
                                { title: "24-Hour pH Monitor", desc: "A micro-probe tracks acidity levels in real-time, correlating your pain with reflux events for a definitive GERD diagnosis.", icon: Activity },
                                { title: "Impedance Testing", desc: "Detecting 'non-acid' (alkaline) reflux that traditional medication cannot fix but which still causes burning symptoms.", icon: Zap },
                                { title: "NBI Scoping", desc: "Using Narrow Band Imaging (NBI) to visualize early-stage tissue damage and mucosal erosion with high-definition clarity.", icon: Microscope }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-xl transition-all border-b-4 border-cyan-600">
                                    <item.icon className="w-10 h-10 text-cyan-500 mb-4 mx-auto" />
                                    <h5 className="font-bold text-sm mb-2">{item.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed font-medium italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-cyan-500" />
                            Elite Clinical FAQs: Acid Reflux & GERD Management
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can I take antacids every day for years?",
                                    a: "Chronic use of PPIs (Proton Pump Inhibitors) for more than 5 years is associated with bone density loss and mineral deficiencies. We prioritize identifying a permanent motility or surgical fix to avoid lifelong dependency."
                                },
                                {
                                    q: "What is a 'Hiatal Hernia' and does it cause Reflux?",
                                    a: "Yes. A hiatal hernia occurs when the upper part of the stomach pushes into the chest. This completely destroys the LES valve's ability to stay closed. In these cases, reflux can only be cured by surgically repairing the hernia."
                                },
                                {
                                    q: "Is surgery for Reflux dangerous for the elderly?",
                                    a: "No. Keyhole (laparoscopic) reflux surgery is a low-impact procedure with very low complication rates. For elderly patients, it is often life-saving as it prevents 'Aspiration Pneumonia'—where acid enters the lungs during sleep."
                                },
                                {
                                    q: "How do I know if my cough is caused by GERD?",
                                    a: "If your cough occurs after a heavy meal or while lying down, and if specialized asthma or lung treatments have failed, it is likely 'Silent Reflux.' We confirm this using a 24-hour pH impedance study."
                                },
                                {
                                    q: "Can Barrett's Esophagus be reversed?",
                                    a: "The tissue changes in Barrett's are often permanent, but stopping the acid reflux through surgery or high-dose therapy prevents further cell changes and drastically lowers the risk of esophageal cancer."
                                },
                                {
                                    q: "Does stress trigger acid reflux?",
                                    a: "Stress increases 'visceral sensitivity,' making your esophagus more sensitive to normal amounts of acid. It also slows digestion, increasing 'intra-abdominal pressure' which forces the LES valve open more frequently."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-cyan-500 shrink-0" />
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
