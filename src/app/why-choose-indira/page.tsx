import { SectionContainer } from "@/components/ui/section-container";
import { Sparkles, Heart, Zap, Shield, Users, Clock, Target } from "lucide-react";
import { Metadata } from "next";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export const metadata: Metadata = {
    title: "Why Choose Indira Hospital | Our Values & Mission",
    description: "Discover why Indira Super Speciality Hospital is the preferred choice for healthcare in Vellore. Explore our patient-centric values, mission, and commitment to clinical excellence.",
};

const values = [
    {
        title: "Patient First",
        description: "Every decision we make is centered around the well-being and comfort of our patients.",
        icon: <Heart className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Clinical Excellence",
        description: "We employ the highest standards of medical practice and continuous clinical audits.",
        icon: <Target className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Innovation",
        description: "Embracing the latest medical technology and minimally invasive surgical techniques.",
        icon: <Zap className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Integrity",
        description: "Transparent communication and ethical medical practices are our core foundations.",
        icon: <Shield className="w-8 h-8 text-fuchsia-600" />
    }
];

export default function WhyChoosePage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Cinematic Minimal Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-70 pointer-events-none animate-pulse" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                        <Sparkles className="w-4 h-4 animate-pulse" /> The Indira Difference
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black text-white tracking-tight leading-[0.95] mb-8 max-w-5xl mx-auto">
                        Why Patients <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Trust Us.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Founded on the principle of elite, super-speciality care with a compassionate heart. We combine world-class infrastructure with personalized attention that puts you first.
                    </p>
                </div>
            </section>

            {/* Values Grid — Dense Glassmorphic Style */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 sm:-mt-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <div key={i} className="group relative bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl p-10 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
                            
                            <div className="w-20 h-20 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-500">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-fuchsia-600 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact & Performance Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="relative bg-slate-900 rounded-[5rem] p-12 lg:p-24 overflow-hidden group/impact">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] opacity-50" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-fuchsia-300 text-xs font-black tracking-widest uppercase mb-8">
                                <Zap className="w-3.5 h-3.5" /> Clinical Impact
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                                Empowering Health <br /> through Excellence
                            </h2>
                            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-xl">
                                With over 150+ hospital beds and a dedicated team of over 20+ specialized doctors, we are the leading healthcare hub in the Vellore region. Our surgical success rate of 99% in minimally invasive procedures is a testament to our precision.
                            </p>
                            
                            <div className="flex flex-wrap gap-12">
                                <div>
                                    <div className="text-6xl font-black text-white hover:text-fuchsia-400 transition-colors cursor-default">15k+</div>
                                    <div className="text-sm font-black text-fuchsia-500 uppercase tracking-[0.3em] mt-2">Surgeries</div>
                                </div>
                                <div className="h-16 w-px bg-white/10 hidden sm:block mt-2" />
                                <div>
                                    <div className="text-6xl font-black text-white hover:text-fuchsia-400 transition-colors cursor-default">50k+</div>
                                    <div className="text-sm font-black text-fuchsia-500 uppercase tracking-[0.3em] mt-2">Happy Patients</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "24/7 Service", icon: <Clock className="w-8 h-8" />, color: "text-amber-400" },
                                { label: "Expert Care", icon: <Users className="w-8 h-8" />, color: "text-blue-400" },
                                { label: "Tech Driven", icon: <Zap className="w-8 h-8" />, color: "text-fuchsia-400" },
                                { label: "Safe Hands", icon: <Shield className="w-8 h-8" />, color: "text-rose-400" }
                            ].map((item, i) => (
                                <div key={i} className="aspect-square p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:scale-105 transition-all duration-500 group/item">
                                    <div className={`${item.color} group-hover/item:scale-110 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-black text-white uppercase tracking-[0.2em] text-center">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SIGNALS */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32 border-t border-slate-200 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-20">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="why-choose-indira"
                        title="The Indira Advantage"
                        description="Answers to why Indira Hospital is the preferred choice for super-speciality care."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="indira-hospital"
                        title="What Our Patients Say"
                        description="Verified patient experiences showcasing our commitment to excellence."
                    />
                </div>
            </section>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-32">
                <InternalLinkGrid type="health-packages" title="Preventive Wellness" subtitle="Indira Health First" limit={8} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
                <InternalLinkGrid type="diagnostics" title="Diagnostic Excellence" subtitle="NABL Accredited Lab" limit={12} className="mt-16 bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border" />
            </div>
        </main>
    );
}
