import { SectionContainer } from "@/components/ui/section-container";
import { Sparkles, CheckCircle2, Layout, Clock, UserCheck, ShieldCheck, Heart, Activity, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patient Care Process | Your Journey at Indira Hospital",
    description: "Learn about our seamless patient care process, from initial consultation and pre-auth to advanced surgical intervention and our signature HomeCareFlow recovery.",
};

const steps = [
    {
        title: "Digital Consultation",
        description: "Begin with a specialized consultation where our experts use advanced diagnostics to map your health needs.",
        icon: <UserCheck className="w-8 h-8 text-fuchsia-600" />,
        details: "Detailed review of medical history and initial physical examination."
    },
    {
        title: "Precision Intervention",
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
        <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-950">
            <SectionContainer className="mb-20">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-xs font-black text-fuchsia-600 uppercase mb-8">
                        <Layout className="w-4 h-4" /> Seamless Patient Journey
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8">
                        Our Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Care Process</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        From the moment you walk through our doors to your final recovery at home, every step is optimized for precision, comfort, and clinical excellence.
                    </p>
                </div>
            </SectionContainer>

            {/* Step-by-Step Breakdown */}
            <SectionContainer>
                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-12 items-center group">
                            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="w-20 h-20 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:bg-fuchsia-50 dark:group-hover:bg-fuchsia-950 transition-colors">
                                    {step.icon}
                                </div>
                                <div className="text-sm font-black text-fuchsia-500 uppercase tracking-widest mb-2">Step {i + 1}</div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white">{step.title}</h2>
                            </div>
                            <div className="md:w-2/3 p-8 lg:p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-100 dark:border-slate-800 group-hover:border-fuchsia-200 dark:group-hover:border-fuchsia-900 transition-all">
                                <p className="text-xl text-slate-700 dark:text-slate-300 font-bold mb-4 leading-relaxed">{step.description}</p>
                                <p className="text-slate-500 font-medium italic">{step.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Same Day Discharge Highlight */}
            <SectionContainer className="mt-24">
                <div className="bg-slate-900 text-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                <Clock className="w-8 h-8 text-fuchsia-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Same-Day Discharge Philosophy</h2>
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
        </main>
    );
}

