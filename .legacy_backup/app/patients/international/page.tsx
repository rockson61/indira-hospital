import { Metadata } from "next";
import Link from "next/link";
import {
    Plane, Globe2, ShieldCheck, HeartPulse,
    ArrowRight, MessageCircle, FileText,
    Clock, MapPin, CheckCircle2, Languages,
    Sparkles
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
    title: "International Patients | Medical Tourism in India | Indira Super Speciality Hospital",
    description: "Indira Super Speciality Hospital welcomes patients from around the world. High-quality medical care, dedicated international desk, and seamless travel support.",
};

const PROCESS_STEPS = [
    {
        title: "Online Consultation",
        desc: "Send your reports and get a free medical opinion from our experts via video call.",
        icon: <MessageCircle className="w-6 h-6 text-purple-600" />
    },
    {
        title: "Visa Assistance",
        desc: "We provide official medical invitation letters for fast-track M-Visa processing.",
        icon: <FileText className="w-6 h-6 text-purple-600" />
    },
    {
        title: "Travel Support",
        desc: "Dedicated pickup from Chennai (MAA) airport and local transport in Vellore.",
        icon: <Plane className="w-6 h-6 text-purple-600" />
    },
    {
        title: "Care & Recovery",
        desc: "World-class surgery followed by personalized rehabilitation and follow-up.",
        icon: <HeartPulse className="w-6 h-6 text-purple-600" />
    }
];

export default function InternationalPatientsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* HERO SECTION */}
            <PageHero
                title="World-Class Healthcare, Without Borders"
                subtitle="Global Medical Tourism Hub"
                description="Indira Super Speciality Hospital provides advanced medical treatments to patients from over 50 countries with dedicated support for travel, accommodation, and translation."
                backgroundImage="/images/international-care.jpg"
            />

            {/* QUICK STATS */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-20 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "Countries Served", val: "50+" },
                        { label: "Expert Doctors", val: "15+" },
                        { label: "Cost Savings", val: "Up to 70%" },
                        { label: "Waiting Time", val: "Zero" }
                    ].map((stat, i) => (
                        <Card key={i} className="p-6 text-center border-none shadow-xl rounded-[2rem] bg-white dark:bg-slate-900">
                            <p className="text-3xl font-extrabold text-purple-600 mb-1">{stat.val}</p>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* WHY CHOOSE INDIA */}
            <SectionContainer id="why-india" className="py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                            Why Choose <span className="text-purple-600">Health Tourism in India?</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { t: "Superior Quality", d: "Surgeons trained at top global institutions with decades of specialized experience." },
                                { t: "Affordable Tertiary Care", d: "High-end surgeries at 60-80% lower cost than UK, USA, or Singapore." },
                                { t: "Advanced Logistics", d: "Easy e-medical visas and dedicated airport-to-hospital support chains." },
                                { t: "No Language Barrier", d: "English is widely spoken, and we provide dedicated translators for Arabic, French, and local dialects." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.t}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Patient Care" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <Sparkles className="w-5 h-5 text-amber-500" />
                                <span className="font-bold text-slate-900 dark:text-white">JCI Standards</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">We follow international safety protocols and hygiene standards for global surgery.</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* OUR PROCESS */}
            <section id="process" className="bg-slate-100 dark:bg-slate-900/50 py-24">
                <SectionContainer>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Seamless Process</h2>
                        <p className="text-slate-600 dark:text-slate-400">Step-by-step support from your first inquiry to your final recovery.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative group">
                                <div className="absolute top-4 right-8 text-4xl font-black text-slate-100 dark:text-slate-800 group-hover:text-purple-500/10 transition-colors">0{i + 1}</div>
                                <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl inline-block group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* COUNTRY SELECTOR */}
            <SectionContainer className="py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Find Your Country Hub</h2>
                    <p className="text-slate-600 dark:text-slate-400">Travel details and dedicated welcome guides for patients from around the globe.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {INTERNATIONAL_COUNTRIES.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/patients/international/${c.slug}`}
                            className="flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-purple-500 hover:shadow-xl transition-all text-center group"
                        >
                            <span className="text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-purple-600">{c.name}</span>
                            <span className="text-xs text-slate-400 mt-1">{c.region}</span>
                        </Link>
                    ))}
                </div>
            </SectionContainer>

            {/* CTA */}
            <SectionContainer className="pb-24">
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Globe2 className="w-64 h-64" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Free Cost Estimate?</h2>
                        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                            Share your medical reports on WhatsApp or via email. Our specialists
                            will review them and provide a comprehensive treatment plan within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/917010650063?text=Hi, I am an international patient. Can I get a cost estimate?"
                                className="bg-white text-purple-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
                                WhatsApp Us
                            </a>
                            <a href="mailto:international@indira-hospital.com" className="bg-purple-700/50 text-white px-10 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-purple-700 transition-all">
                                Email Reports
                            </a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
