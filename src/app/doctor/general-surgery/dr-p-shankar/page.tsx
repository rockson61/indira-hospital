'use client'

import React from 'react'
import { DoctorTemplate } from '@/components/healthcare/DoctorTemplate'
import { 
    Zap, 
    Shield, 
    Clock, 
    Award, 
    Activity,
    HeartPulse,
    Search,
    Microscope,
    Target,
    CheckCircle2,
    ArrowRightCircle,
    Star,
    Monitor,
    ZapOff,
    Wind,
    Sparkles,
    Scale,
    AlertCircle
} from 'lucide-react'

export default function DrPShankarProfile() {
    const doctor = {
        name: "Dr. P. Shankar",
        slug: "dr-p-shankar",
        designation: "Chairman & HOD - General Surgery | Top Proctologist in India & Tamil Nadu",
        department: "General Surgery",
        image: "/images/doctors/dr-shankar.jpg",
        experience_years: 30,
        education: [
            { degree: "MBBS", institution: "Stanley Medical College", year: "1988" },
            { degree: "MS - General Surgery", institution: "Madras Medical College", year: "1993" }
        ],
        specialties: ["General Surgery", "Proctology", "Laparoscopic Surgery", "Surgical Gastroenterology", "Diabetic Foot Care"],
        procedures: [
            "Laser Piles Treatment (LHP)",
            "Laser Fistula Closure (FiLaC)",
            "Laser Fissure Surgery (LIS)",
            "Advanced Laparoscopic Hernia Repair",
            "Complex Thyroidectomy",
            "Surgical Gastroenterology",
            "Diabetic Foot Salvage Surgery"
        ],
        memberships: [
            "Association of Surgeons of India (ASI)",
            "Indian Medical Association (IMA)",
            "Association of Colon & Rectal Surgeons of India (ACRSI)"
        ],
        languages: ["English", "Tamil", "Hindi"]
    };

    return (
        <DoctorTemplate
            doctor={doctor}
            deptName="General Surgery & Proctology"
            deptSlug="general-surgery"
            WHATSAPP_NUMBER="919443224213"
            fullDescription={
                <div className="space-y-16">
                    {/* Section: Philosophy of Laser Preservation */}
                    <section id="philosophy" className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-indigo-500 pl-4 font-primary uppercase tracking-tighter italic">
                            Surgical Philosophy: The Principle of Preservation
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed antialiased font-medium uppercase italic text-slate-700 dark:text-slate-200 tracking-tight">
                                    "Surgery should not just be about removal; it should be about restoring the patient to their natural state of comfort with zero compromise on function."
                                </p>
                                <p className="mt-4">
                                    As a pioneer in **Laser Proctology in Tamil Nadu**, Dr. P. Shankar has dedicated over three decades to refining minimally invasive techniques. His approach to conditions like Piles and Fistula focuses on **Sphincter Preservation**. 
                                </p>
                                <p className="mt-4">
                                    Unlike traditional open surgeries that involve painful cuts and risk of incontinence, Dr. Shankar utilizes the **1470nm Diode Laser**. This technology allows for the controlled shrinkage of hemorrhoidal tissue and the precise closure of fistula tracts without damaging the surrounding muscle architecture.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Target className="w-5 h-5 text-indigo-600" />
                                        <span><strong>Zero-Cut Precision</strong>: Minimizing surgical trauma to accelerate same-day recovery.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-indigo-600" />
                                        <span><strong>Infection Control</strong>: Laser-ablated surfaces are naturally sterile, reducing post-op antibiotic needs.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800 shadow-xl flex flex-col justify-center">
                                <Activity className="w-16 h-16 text-indigo-500 mb-6 font-primary uppercase tracking-widest italic" />
                                <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Surgical Excellence Markers</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                                        <span className="text-sm"><strong>10,000+ Satisfied Patients</strong> managed over a 30-year career.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                                        <span className="text-sm"><strong>Master of FiLaC</strong>: Specialized in Fistula-tract Laser Closure.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                                        <span className="text-sm"><strong>Complication Mitigation</strong>: Record-low recurrence rates for Inguinal Hernia.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest italic">
                                    <Award className="w-4 h-4" />
                                    Chairman's Quality Guarantee
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical Toolkit Row */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-primary text-indigo-300 uppercase tracking-widest leading-none">The Chairman's Surgical Toolkit</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-left relative z-10">
                            {[
                                { title: "1470nm Diode Laser", desc: "Gold-standard for bloodless proctological procedures.", icon: Zap },
                                { title: "4K Laparoscopy", desc: "Crystal-clear visualization for complex abdominal repairs.", icon: Monitor },
                                { title: "Harmonic Scalpel", desc: "Ultrasonic technology for bloodless tissue sealing.", icon: Sparkles }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-indigo-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 leading-relaxed italic antialiased">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
        />
    )
}
