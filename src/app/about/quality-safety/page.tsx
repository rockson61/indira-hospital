import { Metadata } from "next";
import {
    ShieldCheck, Award, Microscope,
    HandMetal, Sparkles, HeartPulse,
    CheckCircle2, AlertCircle, FileText
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Quality & Patient Safety | Clinical Protocols | Indira Hospital",
    description: "Learn about our rigorous patient safety protocols, infection control measures, and international quality standards at Indira Super Speciality Hospital.",
};

const PROTOCOLS = [
    {
        title: "Infection Control",
        desc: "Strict adherence to WHO hand hygiene guidelines and modular OTs with HEPA filters for 100% sterile surgery.",
        icon: <HandMetal className="w-8 h-8 text-teal-600" />
    },
    {
        title: "Medication Safety",
        desc: "Double-check protocols for drug administration and automated barcode tracking to prevent errors.",
        icon: <Microscope className="w-8 h-8 text-teal-600" />
    },
    {
        title: "Surgical Safety",
        desc: "Use of the WHO Surgical Safety Checklist for every procedure to ensure the right patient and right site.",
        icon: <ShieldCheck className="w-8 h-8 text-teal-600" />
    },
    {
        title: "Constant Monitoring",
        desc: "24/7 clinical audits and patient feedback loops to continuously improve healthcare delivery.",
        icon: <Activity className="w-8 h-8 text-teal-600" />
    }
];

import { Activity } from "lucide-react";

export default function QualitySafetyPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* HERO */}
            <section className="bg-slate-900 pt-20 pb-32 text-white relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px]" />
                </div>
                <SectionContainer>
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 mb-6">
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400 font-medium text-sm tracking-wide">Patient Safety First</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Quality You Can <span className="text-blue-400">Trust.</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            At Indira Hospital, quality is not just a checkbox; it's our clinical
                            foundation. We follow global benchmarks to ensure every patient
                            receives safe, error-free medical care.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* STANDARDS GRID */}
            <SectionContainer className="py-24 -mt-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {PROTOCOLS.map((item, i) => (
                        <Card key={i} className="p-10 bg-white dark:bg-slate-900 border-none shadow-xl rounded-[3rem] hover:shadow-2xl transition-all">
                            <div className="mb-6 p-4 bg-teal-50 dark:bg-blue-900/20 rounded-2xl inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                                {item.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </SectionContainer>

            {/* CLINICAL GOVERNANCE */}
            <section className="bg-white dark:bg-slate-900 py-24">
                <SectionContainer>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Our Commitment to <span className="text-teal-600">Clinical Excellence</span></h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Evidence-Based Medicine", d: "Treatments based on the latest global clinical research and peer-reviewed studies." },
                                    { t: "Multidisciplinary Care", d: "Complicated cases are reviewed by a tumor board or a panel of cross-functional experts." },
                                    { t: "Patient-Centered Approach", d: "Explicit focus on dignity, compassion, and transparent communication with families." },
                                    { t: "Continuous Innovation", d: "Adopting advanced technologies like Laser and Robotic surgery to minimize patient risk." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 dark:bg-blue-900/40 flex items-center justify-center text-teal-600 mt-1">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-slate-900 dark:text-white">{step.t}</h4>
                                            <p className="text-slate-500">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                                    alt="Clinical Excellence" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-teal-600 text-white p-10 rounded-3xl shadow-2xl max-w-xs">
                                <Award className="w-12 h-12 mb-4" />
                                <h4 className="text-xl font-bold mb-2">NABH Standard</h4>
                                <p className="text-blue-100 text-sm italic">Committed to maintaining the highest benchmarks in Indian healthcare administration.</p>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* AUDIT SECTION */}
            <SectionContainer className="py-24">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div>
                            <p className="text-5xl font-black text-blue-400 mb-2">0%</p>
                            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Post-Surgical Infection Goal</p>
                        </div>
                        <div>
                            <p className="text-5xl font-black text-blue-400 mb-2">100%</p>
                            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Standard Operating Protocol Compliance</p>
                        </div>
                        <div>
                            <p className="text-5xl font-black text-blue-400 mb-2">24/7</p>
                            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Quality Monitoring & Audits</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
