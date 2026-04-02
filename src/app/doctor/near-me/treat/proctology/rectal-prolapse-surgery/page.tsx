

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
    Microscope,
    Target,
    Navigation,
    ThermometerSnowflake,
    PlayCircle,
    ArrowRightCircle,
    Eye,
    Move,
    Scissors,
    HeartPulse,
    IndianRupee,
    ShieldCheck,
    Droplets,
    UserCheck,
    MapPin
} from 'lucide-react'

export default function RectalProlapsePage() {
    return (
        <SubServiceTemplate
            title="Elite Rectal Prolapse Surgery (LVMR)"
            slug="rectal-prolapse-surgery"
            parentServiceSlug="proctology"
            departmentName="Indira Elite Proctology"
            description={
                <>
                    <p>
                        Rectal Prolapse is a structural failure where the rectum loses its internal support and protrudes through the anal opening. At Indira Super Speciality Hospital, we specialized in **Laparoscopic Ventral Mesh Rectopexy (LVMR)**—the global gold standard for permanent repair. Our nerve-sparing keyhole approach ensures high success rates (98%+), minimal recurrence, and a rapid return to pelvic health.
                    </p>
                    <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold italic">
                        "Structural restoration: Permanent relief through advanced laparoscopy."
                    </p>
                </>
            }
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Success Rate', value: '98%+', icon: 'Award' },
                { label: 'Approach', value: 'Laparoscopic', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
            duration="90-120 Minutes"
            hospitalStay="2-3 Days"
            recoveryTime="2-3 Weeks"
            anesthesia="General Anesthesia"
            reviews={{
                entityType: 'service',
                entityName: 'Rectal Prolapse Surgery',
                entitySlug: 'rectal-prolapse-surgery'
            }}
            fullDescription={
                <div className="space-y-16">
                    {/* The LVMR Advantage Section */}
                    <section className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-3xl -z-10" />
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-emerald-500 pl-4 font-heading">
                            Mechanism: Laparoscopic Ventral Mesh Rectopexy (LVMR)
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed">
                                    Unlike traditional perineal surgery done from below (which has high recurrence), **LVMR** is performed through three tiny 5-10mm keyhole incisions in the abdomen. We use a biocompatible mesh to anchor the rectum back to the sacral promontory (the base of the spine).
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md shrink-0">
                                            <HeartPulse className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Nerve-Sparing Precision</p>
                                            <p className="text-xs text-slate-500">We isolate and preserve the autonomic nerves responsible for bowel, bladder, and sexual function—a critical step often missed in conventional surgery.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md shrink-0">
                                            <Move className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Ventral Suspension</p>
                                            <p className="text-xs text-slate-500">Only the front part of the rectum is mobilized, ensuring the posterior attachments remain intact for maximum stability.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 shadow-xl flex flex-col justify-center">
                                <Microscope className="w-16 h-16 text-emerald-500 mb-6" />
                                <h4 className="text-xl font-bold mb-2">Diagnosis: Mapping the Descent</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    Misdiagnosis as 'Piles' is common. At Indira, we use **Video Defecography** and MR Defecography to differentiate between Mucosal and Full-Thickness Prolapse before surgery.
                                </p>
                                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                                    <ShieldCheck className="w-4 h-4" />
                                    Diagnostic Accuracy Protocol
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Symptoms & Identifying Prolapse */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4">Identifying Rectal Prolapse Symptoms</h3>
                            <p className="text-slate-600 dark:text-slate-400">If you experience a mass protruding through the anus, it is critical to determine the stage of descent.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Manual Reduction", icon: Target, desc: "A mass that pokes out during bowel movements and may need to be pushed back." },
                                { title: "Incontinence", icon: Activity, desc: "Loss of control over bowel movements as the sphincter muscles are stretched." },
                                { title: "Mucus Discharge", icon: Droplets, desc: "Irritated rectal tissue causing constant discharge and skin irritation." },
                                { title: "Incomplete Emptying", icon: Zap, desc: "The sensation that you cannot fully empty your bowels (Obstructed Defecation)." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-center group hover:bg-emerald-50/20 transition-all">
                                    <item.icon className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                                    <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Recovery Timeline */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-transparent" />
                        <h3 className="font-heading text-3xl font-bold mb-4 font-heading italic">The Pelvic Restoration Roadmap</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
                            Our recovery path focuses on restoring both the structural anatomy and the physiological function of the bowel.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                            {[
                                { day: "Day 2", title: "Early Activation", text: "Patients are encouraged to walk within 24 hours of laparoscopic surgery to prevent clots." },
                                { day: "Day 4", title: "Dietary Phase", text: "Transition to high-fiber soft diets to ensure smooth bowel activation without straining." },
                                { day: "Week 3", title: "Soft Tissue Healing", text: "Resume light professional work. Nerve-recovery check and pelvic floor coordination review." },
                                { day: "Month 2", title: "Full Restoration", text: "Resume all activities. Pelvic floor tone assessment and long-term motility mapping." }
                            ].map((step, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-emerald-400 font-bold mb-2 uppercase tracking-widest text-[10px]">{step.day}</p>
                                    <h5 className="font-bold text-sm mb-2">{step.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed font-medium italic">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Specialist Section */}
                    <section className="flex flex-col md:flex-row gap-10 items-center bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-50 dark:border-slate-800 shadow-soft">
                        <div className="w-56 h-56 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shrink-0">
                            <div className="w-full h-full bg-gradient-to-tr from-emerald-100 to-slate-200" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Expert Colorectal Care: Dr. Karan Shankar</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic">
                                Rectal Prolapse surgery requires an intimate understanding of the pelvic spaces. <strong>Dr. Karan Shankar</strong> specialized in nerve-sparing laparoscopic rectopexy, ensuring that the rectum is anchored with precision while preserving all functional nerves for bowel and sexual health.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <span className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-[10px] font-black uppercase text-emerald-600 flex items-center gap-2 tracking-widest">
                                    <Award className="w-4 h-4" /> LVMR Specialist
                                </span>
                                <span className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-[10px] font-black uppercase text-emerald-600 flex items-center gap-2 tracking-widest">
                                    <ShieldCheck className="w-4 h-4" /> 2000+ Pelvic Repairs
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Clinical FAQ Hub */}
                    <section className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-16 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
                            <Info className="text-emerald-500" />
                            Elite Clinical FAQs: Rectal Prolapse
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    q: "Can Rectal Prolapse be cured without surgery?",
                                    a: "No. Rectal Prolapse is a structural mechanical failure. While pelvic floor exercises (Kegels) can help with mild cases or after surgery, they cannot 'pull' a full-thickness prolapsed rectum back into its permanent internal position. Surgery is the only definitive cure."
                                },
                                {
                                    q: "Is the mesh used safe?",
                                    a: "At Indira, we use high-grade biocompatible mesh (Ventral Mesh) that is specifically designed for pelvic floor restoration. It integrates with your own tissue over time to create a reinforced support system."
                                },
                                {
                                    q: "Will I have a permanent scar from the surgery?",
                                    a: "The laparoscopic approach uses three or four 5mm incisions. These are tiny and usually heal within months to become almost invisible. There are no large abdominal cuts."
                                },
                                {
                                    q: "Can I fall pregnant after a Rectopexy?",
                                    a: "Yes. However, if you are planning future pregnancies, please discuss this with our surgeon. We may choose specific nerve-sparing and mesh-fixation techniques to ensure no interference with future obstetric care."
                                },
                                {
                                    q: "Will my bowel movements return to normal after surgery?",
                                    a: "In 90% of cases, patients see a dramatic improvement in both their incontinence (leaking) and constipation. LVMR effectively 'widens' the internal canal and restores the rectum to its physiological angle."
                                },
                                {
                                    q: "What is the Tamil name for this condition?",
                                    a: "It is often referred to as 'ஆசனவாய் வெளியே தள்ளுதல்' (Aasanavaai veliye thalluthal), which simple means 'the anal opening has pushed out.'"
                                }
                            ].map((faq, i) => (
                                <div key={i} className="pb-6 border-b border-slate-200 dark:border-slate-800 group">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-start gap-2">
                                        <Zap className="w-4 h-4 mt-1 text-emerald-500 shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6 italic">
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
