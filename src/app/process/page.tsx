import { SectionContainer } from "@/components/ui/section-container";
import { Sparkles, CheckCircle2, Layout, Clock, UserCheck, ShieldCheck, Heart, Activity, Zap } from "lucide-react";
import { Metadata } from "next";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";

export const metadata: Metadata = {
    title: "Patient Care Process | Your Journey at Indira Hospital",
    description: "Learn about our seamless patient care process, from initial consultation and pre-auth to advanced surgical intervention and our signature HomeCareFlow r...",
};

const steps = [
    {
        title: "Digital Consultation",
        description: "Begin with a specialized consultation where our experts use advanced diagnostics to map your health needs.",
        icon: <UserCheck className="w-8 h-8 text-fuchsia-600" />,
        details: "Detailed review of medical history and initial physical examination."
    },
    {
        title: "Advanced Intervention",
        description: "Execution of surgical plans using state-of-the-art modular OTs and minimally invasive techniques.",
        icon: <Activity className="w-8 h-8 text-fuchsia-600" />,
        details: "Emphasis on tissue preservation and minimal blood loss."
    },
    {
        title: "Rapid Recovery",
        description: "Our dedicated post-op care ensures you are mobilized within hours of the procedure.",
        icon: <Zap className="w-8 h-8 text-fuchsia-600" />,
        details: "Constant monitoring by specialized nursing staff."
    },
    {
        title: "HomeCareFlow",
        description: "Exclusive post-discharge digital monitoring to ensure your recovery is smooth and complication-free.",
        icon: <Heart className="w-8 h-8 text-fuchsia-600" />,
        details: "Tele-medicine follow-ups and personalized rehabilitation plans."
    }
];

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="elite-tag mb-10">
                        <Layout className="w-4 h-4" /> Seamless Patient Journey
                    </div>
                    <h1 className="elite-hero-title mb-10">
                        Our Patient <br className="hidden sm:block" />
                        <span className="elite-gradient-text">Care Process.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        From the moment you walk through our doors to your final recovery at home, every step is optimized for precision, comfort, and clinical excellence.
                    </p>
                </div>
            </section>

            {/* Step-by-Step Breakdown */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-20">
                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-12 items-center group">
                            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-20 h-20 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-950 transition-colors">
                                    {step.icon}
                                </div>
                                <div className="text-sm font-black text-fuchsia-500 uppercase tracking-widest mb-2">Step {i + 1}</div>
                                <h2 className="elite-section-title text-slate-900 dark:text-white">{step.title}</h2>
                            </div>
                            <div className="md:w-2/3 p-8 lg:p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 group-hover:border-fuchsia-200 dark:group-hover:border-fuchsia-900 transition-all">
                                <p className="text-xl text-slate-700 dark:text-slate-300 font-bold mb-4 leading-relaxed">{step.description}</p>
                                <p className="text-slate-500 font-medium italic">{step.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Same Day Discharge Highlight */}
            <SectionContainer className="mt-24">
                <div className="bg-slate-900 text-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px] will-change-transform transform-gpu" />
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                <Clock className="w-8 h-8 text-fuchsia-400" />
                            </div>
                            <h2 className="elite-section-title mb-8">Same-Day Discharge Philosophy</h2>
                            <p className="text-slate-300 text-xl font-light leading-relaxed">
                                Our surgical precision and advanced anaesthesia allow a high percentage of our patients to return home the very same day, significantly reducing hospital stays.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { icon: <ShieldCheck className="w-5 h-5" />, label: "Safety First" },
                                { icon: <Activity className="w-5 h-5" />, label: "Early Mobility" },
                                { icon: <Heart className="w-5 h-5" />, label: "Comfort Care" },
                                { icon: <Layout className="w-5 h-5" />, label: "Seamless Ops" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center text-center">
                                    <div className="text-fuchsia-400 mb-4">{item.icon}</div>
                                    <span className="font-bold text-sm tracking-wider uppercase">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer className="mb-32 max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                <PeopleAlsoSearchCard 
                    keywords={[
                        { text: "Patient care journey Indira Hospital", href: "/process" },
                        { text: "HomeCareFlow recovery system", href: "/process" },
                        { text: "Same-day discharge surgeries Vellore", href: "/process" },
                        { text: "Pre-auth and insurance process", href: "/patients/insurance" },
                        { text: "Digital follow-up healthcare", href: "/process" },
                        { text: "Clinical excellence standards India", href: "/why-choose-indira" }
                    ]}
                />
            </SectionContainer>

            <div className="space-y-12">
                <InternalLinkGrid type="diagnostics" title="Advanced Diagnostics" subtitle="Advanced Imaging & Lab" limit={12} className="bg-white dark:bg-slate-900 border-t rounded-[4rem] border" />
                <InternalLinkGrid type="departments" title="Elite Medical Units" subtitle="Hospital Infrastructure" limit={8} className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border mt-12" />
            </div>
        </main>
    );
}
