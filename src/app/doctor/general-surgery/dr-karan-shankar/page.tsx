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
    AlertCircle,
    Layers,
    Waves,
    Camera
} from 'lucide-react'

export default function DrKaranShankarProfile() {
    const doctor = {
        name: "Dr. Karan Shankar",
        slug: "dr-karan-shankar",
        designation: "Clinical Lead - Indira Laser & Laparoscopy Centre | Executive Director",
        department: "General Surgery",
        image: "/images/doctors/dr-karan-shankar.png",
        experience_years: 12,
        education: [
            { degree: "MBBS", institution: "Meenakshi Medical College", year: "2017" },
            { degree: "MS (General Surgery)", institution: "Dr M.G.R Medical University", year: "2022" },
            { degree: "FIAGES", institution: "Fellowship of Indian Association of Gastrointestinal Endosurgeons", year: "2022" },
            { degree: "FMAS", institution: "Fellowship in Minimal Access Surgery" },
            { degree: "DMAS (WALS)", institution: "Diploma in Minimal Access Surgery – World Association of Laparoscopic Surgeons" }
        ],
        specialties: [
            "General Surgery",
            "Advanced Laparoscopic Surgery",
            "Colorectal Surgery",
            "Minimal Access Surgery",
            "Abdominal Wall Reconstructive Surgery",
            "Proctology"
        ],
        procedures: [
            "Laparoscopic Hernia Repair (IPOM/TEP)",
            "Gallbladder Surgery (Cholecystectomy)",
            "Laser Proctology (FiLaC/LHP/SiLaC)",
            "Stapler Hemorrhoidopexy",
            "Abdominal Wall Reconstruction",
            "Gastrointestinal Malignancy Surgery",
            "Appendix Keyhole Surgery"
        ],
        memberships: [
            "Association of Surgeons of India (ASI)",
            "Indian Association of Gastrointestinal & Endoscopic Surgeons (IAGES)",
            "Association of Colorectal Surgeons of India (ACRSI)",
            "World Association of Laparoscopic Surgeons (WALS)"
        ],
        languages: ["English", "Tamil", "Hindi", "Malayalam", "Telugu"]
    };

    return (
        <DoctorTemplate
            doctor={doctor}
            deptName="Laparoscopy & Colorectal Surgery"
            deptSlug="general-surgery"
            WHATSAPP_NUMBER="919443224213"
            fullDescription={
                <div className="space-y-16">
                    {/* Section: Minimal Access Precision */}
                    <section id="philosophy" className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-fuchsia-50/50 dark:bg-fuchsia-950/20 border border-fuchsia-100 dark:border-fuchsia-900/50 text-left">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-400/10 blur-3xl -z-10" />
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-fuchsia-500 pl-4 font-heading uppercase tracking-tighter italic">
                            Surgical Precision: The Minimal Access Revolution
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="prose prose-slate dark:prose-invert">
                                <p className="text-lg leading-relaxed antialiased font-medium uppercase italic text-slate-700 dark:text-slate-200 tracking-tight">
                                    "Excellence in surgery today is measured by the quality of recovery as much as the outcome of the procedure."
                                </p>
                                <p className="mt-4">
                                    As the **Clinical Lead of Indira Laser & Laparoscopy Centre**, Dr. Karan Shankar has brought a fellowship-driven standard of precision to Vellore. Specializing in **Minimal Access Surgery (MAS)**, he utilizes 4K UHD visualization systems to perform complex abdominal wall reconstructions and colorectal resections through tiny keyhole incisions.
                                </p>
                                <p className="mt-4">
                                    His expertise in **Advanced Proctology** involves using specialized laser energies to treat complex fistula-in-ano and pilonidal sinuses, ensuring maximum comfort and standardizing the "Elite" patient experience across all surgical touchpoints.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Monitor className="w-5 h-5 text-fuchsia-600" />
                                        <span><strong>4K Visualization</strong>: Crystal-clear imaging for sub-millimeter surgical accuracy.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-fuchsia-600" />
                                        <span><strong>Rapid Recovery</strong>: Minimizing hospital stay with keyhole techniques.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-fuchsia-100 dark:border-fuchsia-800 shadow-xl flex flex-col justify-center">
                                <Activity className="w-16 h-16 text-fuchsia-500 mb-6 font-heading uppercase tracking-widest italic" />
                                <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Clinical Excellence Benchmarks</h4>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                                        <span className="text-sm"><strong>Fellow of WALS/IAGES</strong>: Internationally recognized surgical standards.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                                        <span className="text-sm"><strong>Multidisciplinary Care</strong>: Leading teams for complex surgical solutions.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0" />
                                        <span className="text-sm"><strong>Elite Surgical Protocols</strong>: Ensuring 100% adherence to NABH safety norms.</span>
                                    </li>
                                </ul>
                                <div className="inline-flex items-center gap-2 text-fuchsia-600 font-bold text-xs uppercase tracking-widest italic">
                                    <Award className="w-4 h-4" />
                                    Director's Quality Benchmark
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Elite Surgical Modalities */}
                    <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/30 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 italic font-heading text-fuchsia-300 uppercase tracking-widest leading-none">Advanced Modality Spectrum</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-left relative z-10">
                            {[
                                { title: "4K UHD Lap-Stack", desc: "Digital mapping for complex hernia and gallbladder surgery.", icon: Monitor },
                                { title: "FiLaC Laser (1470nm)", desc: "Tissue-sparing energy for sphincter-saving fistula closure.", icon: Zap },
                                { title: "Ultrasonic Scalpel", desc: "Harmonic energy for bloodless tissue dissection.", icon: Sparkles },
                                { title: "IPOM / TEP Tech", desc: "Advanced mesh placement for hernia recurrence prevention.", icon: Layers }
                            ].map((item: any, i: number) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-fuchsia-500/50 transition-all">
                                    <item.icon className="w-8 h-8 text-fuchsia-400 mb-4" />
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
