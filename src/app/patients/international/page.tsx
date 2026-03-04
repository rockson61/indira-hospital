import { Metadata } from "next";
import Link from "next/link";
import {
    Plane, Globe2, ShieldCheck, HeartPulse,
    ArrowRight, MessageCircle, FileText,
    Clock, MapPin, CheckCircle2, Languages,
    Sparkles, Stethoscope
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import Image from "next/image";

export const metadata: Metadata = {
    title: "International Patients | Medical Tourism in India | Indira Super Speciality Hospital",
    description: "Indira Super Speciality Hospital welcomes patients from around the world. High-quality medical care, dedicated international desk, and seamless travel support.",
};

const PROCESS_STEPS = [
    {
        title: "Online Consultation",
        desc: "Send your reports and get a free medical opinion from our experts via high-definition video link.",
        icon: <MessageCircle className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
    },
    {
        title: "Visa Assistance",
        desc: "We provide official medical invitation letters for fast-track M-Visa processing and documentation.",
        icon: <FileText className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
    },
    {
        title: "Travel Support",
        desc: "Dedicated VIP pickup from Chennai (MAA) airport and seamless local transport in Vellore.",
        icon: <Plane className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
    },
    {
        title: "Care & Recovery",
        desc: "World-class surgery followed by personalized rehabilitation, private suite recovery, and medical follow-up.",
        icon: <HeartPulse className="w-6 h-6 text-fuchsia-300 group-hover:text-white transition-colors" />
    }
];

export default function InternationalPatientsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* ELITE GLOBAL HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full hidden md:block blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <Globe2 className="w-4 h-4" /> Global Tourism Hub
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                            World-Class Care, <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Without Borders.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                            Indira Super Speciality Hospital provides advanced medical treatments to patients from over 50 countries with dedicated 1-on-1 support for travel, accommodation, and translation.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* FLOATING QUICK STATS */}
            <SectionContainer className="relative z-20 -mt-20 max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 sm:p-4 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                    {[
                        { label: "Countries Served", val: "50+" },
                        { label: "Expert Doctors", val: "15+" },
                        { label: "Cost Savings", val: "Up to 70%" },
                        { label: "Waiting Time", val: "Zero" }
                    ].map((stat, i) => (
                        <div key={i} className="group bg-white dark:bg-slate-900 rounded-2xl p-6 text-center shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-fuchsia-200 transition-all duration-300">
                            <div className="text-3xl font-black text-slate-800 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500 transition-colors mb-1">{stat.val}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* WHY CHOOSE INDIA (PREMIUM E-COMMERCE LAYOUT) */}
            <SectionContainer id="why-india" className="py-24 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 relative z-10">
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                            <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                                alt="Patient Care at Indira Hospital" fill className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
                        </div>

                        {/* Floating JCI Badge */}
                        <div className="absolute -bottom-8 -right-8 lg:-left-8 lg:right-auto bg-white/90 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl border border-white max-w-xs z-20 hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition opacity duration-500"></div>
                            <div className="relative bg-white dark:bg-slate-900 rounded-[1.5rem] p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <span className="font-black text-slate-900 dark:text-white text-lg">JCI Standards</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">We enforce strict international safety protocols and surgical hygiene standards for every global patient.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 text-xs font-bold tracking-widest uppercase mb-6 border border-fuchsia-100">
                            <Stethoscope className="w-4 h-4" /> Global Hub
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                            Why Choose <br /> <span className="text-fuchsia-600">Health Tourism in India?</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { t: "Superior Quality", d: "Surgeons trained at top global institutions with decades of specialized, complex case experience." },
                                { t: "Affordable Tertiary Care", d: "Access high-end robotic surgeries at 60-80% lower cost compared to the UK, USA, or Singapore." },
                                { t: "Advanced Logistics", d: "Seamless e-medical visas (M-Visa) and dedicated airport-to-hospital support chains." },
                                { t: "Zero Language Barriers", d: "Fluent English medical staff, plus dedicated translators available for Arabic, French, and Russian." }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-5 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300">
                                        <CheckCircle2 className="w-6 h-6 text-fuchsia-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-fuchsia-700 transition-colors">{item.t}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* SEAMLESS PROCESS BENTO */}
            <section id="process" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 -skew-y-3 origin-bottom-right scale-110 z-0"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] z-0" />

                <SectionContainer className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">Our Seamless Process</h2>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">Continuous, step-by-step concierge support from your first global inquiry to your final localized recovery.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="group bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 hover:bg-slate-800 hover:border-fuchsia-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-fuchsia-500/10 transition-colors duration-500">0{i + 1}</div>
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-8 flex w-16 h-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 transition-all duration-500 shadow-lg">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* INTERACTIVE COUNTRY HUB PILLS */}
            <SectionContainer className="py-24 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">Find Your Country Hub</h2>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">Explore specific travel itineraries, visa requirements, and dedicated welcome guides structured for your home nation.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {INTERNATIONAL_COUNTRIES.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/patients/international/${c.slug}`}
                            className="group flex flex-col items-center justify-center min-w-[160px] p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-fuchsia-400 hover:shadow-[0_10px_30px_rgba(20,184,166,0.15)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="text-xl font-black text-slate-800 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500 transition-colors">{c.name}</span>
                            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase mt-2 group-hover:text-fuchsia-600/60 transition-colors">{c.region}</span>
                        </Link>
                    ))}
                </div>
            </SectionContainer>

            {/* ASSISTANCE CTA BENTO */}
            <SectionContainer className="pb-24 max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-20">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />
                    <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
                        <Globe2 className="w-96 h-96" />
                    </div>

                    <div className="relative z-10 w-full max-w-4xl">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                            <Plane className="w-8 h-8 text-fuchsia-300" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            Ready for a Free <br /> <span className="text-fuchsia-400">Cost Estimate?</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Share your medical reports via secure WhatsApp or Email. Our senior specialists will review your case and construct a comprehensive treatment plan within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto">
                            <a href="https://wa.me/917010650063?text=Hi, I am an international patient. Can I get a cost estimate?" target="_blank" rel="noopener noreferrer" className="group/btn relative flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
                                <span className="relative z-10">WhatsApp Us</span>
                                <MessageCircle className="w-5 h-5 ml-3 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </a>

                            <a href="mailto:international@indira-hospital.com" className="flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                                <FileText className="w-5 h-5 mr-3 text-fuchsia-400" />
                                Email Reports
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
