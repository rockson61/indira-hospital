import { Metadata } from "next";
import {
    Briefcase, GraduationCap, Sparkles,
    CheckCircle2, ArrowRight, Mail,
    Globe, HeartHandshake, ShieldPlus
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Careers | Join Our Team | Indira Super Speciality Hospital",
    description: "Join the team at Indira Hospital, Vellore. Find job openings for doctors, nurses, paramedics, and healthcare professionals in a world-class infrastructure.",
};

const BENEFITS = [
    {
        title: "World-Class Tech",
        desc: "Work with the latest robotic surgical systems, 3T MRI, and fully modular OTs.",
        icon: <ShieldPlus className="w-6 h-6 text-purple-600" />
    },
    {
        title: "Growth Opportunities",
        desc: "Regular CPD programs, workshops, and support for clinical research papers.",
        icon: <GraduationCap className="w-6 h-6 text-purple-600" />
    },
    {
        title: "Work-Life Balance",
        desc: "Structured shifts, competitive compensation, and a supportive medical community.",
        icon: <Sparkles className="w-6 h-6 text-purple-600" />
    }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* HERO */}
            <section className="bg-slate-900 pt-24 pb-40 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[150px]" />
                </div>

                <SectionContainer className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-5 py-2 mb-8 text-purple-400 font-bold text-sm tracking-widest uppercase">
                            <Briefcase className="w-4 h-4" /> Join our Clinical Legacy
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                            Build Your Career in <br />
                            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Excellence.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            We are looking for passionate healthcare professionals who want to
                            shape the future of patient care in Tamil Nadu.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* WHY JOIN US */}
            <SectionContainer className="py-24 -mt-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {BENEFITS.map((item, i) => (
                        <Card key={i} className="p-10 bg-white dark:bg-slate-900 border-none shadow-2xl rounded-[3rem] hover:-translate-y-2 transition-all">
                            <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </SectionContainer>

            {/* OPEN POSITIONS PREVIEW */}
            <section className="bg-white dark:bg-slate-900 py-32">
                <SectionContainer>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Current <span className="text-purple-600 font-black">Opportunities</span></h2>
                            <p className="text-lg text-slate-500">
                                We are actively hiring for the following departments. Even if you don't see your
                                role, we'd love to hear from you.
                            </p>
                        </div>
                        <Link href="mailto:careers@indirahospitals.com" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                            Send General Application <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        {[
                            { title: "Consultant Cardiologist", dept: "Interventional Cardiology", type: "Full-Time" },
                            { title: "OT Staff Nurse", dept: "Surgery / Pre-Op", type: "Shift-Based" },
                            { title: "Radiology Technician", dept: "Diagnostics / MRI", type: "Full-Time" },
                            { title: "Patient Relation Executive", dept: "Administration", type: "Regular" }
                        ].map((job, i) => (
                            <div key={i} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-purple-200 transition-all cursor-pointer">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 transition-colors">{job.title}</h4>
                                    <div className="flex gap-4 text-sm text-slate-500 font-medium tracking-wide pb-2">
                                        <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> {job.dept}</span>
                                        <span className="flex items-center gap-1.5"><HeartHandshake className="w-4 h-4" /> {job.type}</span>
                                    </div>
                                </div>
                                <Link href="mailto:careers@indirahospitals.com" className="mt-4 md:mt-0 px-6 py-2.5 bg-purple-100 text-purple-700 rounded-xl font-bold text-sm hover:bg-purple-600 hover:text-white transition-all">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* CTA */}
            <SectionContainer className="py-24">
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="max-w-2xl mx-auto relative z-10">
                        <Mail className="w-16 h-16 mx-auto mb-8 text-purple-400 opacity-50" />
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Ready to join the <br /> best team in Vellore?</h2>
                        <p className="text-xl text-purple-200 mb-12">
                            Send your CV and a brief cover letter to our HR department.
                            We review applications on a rolling basis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="mailto:careers@indirahospitals.com" className="px-12 py-5 bg-white text-indigo-900 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl text-lg">
                                careers@indirahospitals.com
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
