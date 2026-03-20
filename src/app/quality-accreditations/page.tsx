import { SectionContainer } from "@/components/ui/section-container";
import { ShieldCheck, Award, CheckCircle2, Star, Sparkles, Building2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NABH Accredited Hospital in Vellore — Quality & Patient Safety | Indira Hospital",
    description: "Indira Super Speciality Hospital is committed to high standards of patient safety and clinical excellence. Learn about our NABH accreditation and quality benchmarks.",
};

const certifications = [
    {
        title: "NABH Accredited",
        description: "National Accreditation Board for Hospitals & Healthcare Providers certification for excellence in patient care.",
        icon: <Award className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "NABH Nursing",
        description: "Specialized certification for nursing excellence and standardized patient care protocols.",
        icon: <ShieldCheck className="w-8 h-8 text-fuchsia-600" />
    },
    {
        title: "Quality Standards",
        description: "Adherence to international clinical protocols and rigorous safety benchmarks.",
        icon: <CheckCircle2 className="w-8 h-8 text-fuchsia-600" />
    }
];

import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";

export default function QualityPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            {/* Cinematic Minimal Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="elite-tag mb-10">
                        <ShieldCheck className="w-4 h-4 animate-pulse" /> Excellence in Healthcare
                    </div>
                    <h1 className="elite-hero-title mb-10 max-w-6xl mx-auto">
                        Commitment to <br className="hidden sm:block" />
                        <span className="elite-gradient-text">Quality.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        At Indira Hospital, quality is not just a certification—it&apos;s a culture. We continuously monitor and improve our processes to ensure absolute patient safety and clinical success.
                    </p>
                </div>
            </section>

            {/* Certifications Grid — Dense Glassmorphic Style */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 sm:-mt-32">
                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert, i) => (
                        <div key={i} className="elite-card p-10 group hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent skew-x-[-30deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
                            
                            <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                                {cert.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quality Pillars Bento */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="relative bg-slate-900 rounded-[5rem] p-12 lg:p-24 overflow-hidden group/pillars">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] will-change-transform transform-gpu opacity-50" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-emerald-300 text-xs font-black tracking-widest uppercase mb-8">
                                    <Award className="w-3.5 h-3.5" /> Benchmarks
                                </span>
                                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                                    Our Quality Pillars
                                </h2>
                            </div>
                            <div className="max-w-md">
                                <p className="text-slate-400 text-lg font-light leading-relaxed">
                                    Rigorous international standards applied unconditionally to every patient interaction and clinical outcome.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Patient Safety", desc: "Rigorous protocols to prevent infections and ensure medication safety.", icon: <ShieldCheck className="w-6 h-6" /> },
                                { title: "Clinical Success", desc: "Evidence-based medical practices guided by international standards.", icon: <Star className="w-6 h-6" /> },
                                { title: "Regular Audits", desc: "Continuous feedback loops to enhance hospital operations and care.", icon: <Building2 className="w-6 h-6" /> },
                                { title: "透明 Care", desc: "Clear communication with patients regarding treatments and outcomes.", icon: <CheckCircle2 className="w-6 h-6" /> }
                            ].map((pillar, i) => (
                                <div key={i} className="group/item p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover/item:scale-110 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-500">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-4 group-hover/item:text-emerald-400 transition-colors uppercase tracking-tight">{pillar.title}</h4>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionContainer className="mb-32 max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                <PeopleAlsoSearchCard 
                    keywords={[
                        { text: "NABH accredited hospital Vellore", href: "/quality-accreditations" },
                        { text: "NABL certified lab near me", href: "/quality-accreditations" },
                        { text: "Hospital clinical success rates India", href: "/quality-accreditations" },
                        { text: "Patient safety standards Tamil Nadu", href: "/quality-accreditations" },
                        { text: "Best multi-speciality hospital awards", href: "/quality-accreditations" },
                        { text: "NABH nursing standards guide", href: "/quality-accreditations" }
                    ]}
                />
            </SectionContainer>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-32 space-y-12">
                <InternalLinkGrid type="diagnostics" title="Diagnostic Quality" subtitle="NABL Accredited Lab" limit={12} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
                <InternalLinkGrid type="departments" title="Clinical Specialities" subtitle="NABH Standards" limit={8} className="mt-16 bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border" />
            </div>
        </main>
    );
}
