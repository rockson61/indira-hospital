import { Metadata } from "next";
import Link from "next/link";
import {
    ChevronRight, Zap, ShieldCheck,
    ArrowRight, Sparkles, Monitor, Activity
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { getAllTechnologies } from "@/lib/data/technology-data";

export const metadata: Metadata = {
    title: "Advanced Medical Technology | Indira Super Speciality Hospital",
    description: "Discover the cutting-edge medical infrastructure at Indira Hospital. From Robotic Surgery to 3T MRI, we use the world's best technology for your care.",
};

export default function TechnologyHubPage() {
    const technologies = getAllTechnologies();

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-24">
            {/* ELITE TECH HERO */}
            <section className="bg-slate-900 pt-48 pb-40 lg:pt-60 lg:pb-48 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                <SectionContainer className="relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-fuchsia-500/30">
                            <Activity className="w-4 h-4" /> Next-Gen Infrastructure
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
                            Technology that <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">Saves Lives.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                            At Indira Hospital, we invest in the world's most advanced diagnostic and surgical systems to provide our patients with safer, faster, and more precise treatments.
                        </p>
                    </div>
                </SectionContainer>
            </section>

            {/* TRUST BAR (BENTO FLOATING) */}
            <SectionContainer className="relative z-20 -mt-20 max-w-6xl mx-auto px-4">
                <div className="bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 mx-auto md:mx-0 group-hover:bg-fuchsia-50 group-hover:border-fuchsia-200 group-hover:scale-110 transition-all duration-300">
                                <ShieldCheck className="w-7 h-7 text-fuchsia-600" />
                            </div>
                            <h4 className="font-black text-xl mb-3 text-slate-800">Safety First</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">All equipment undergoes daily calibration and follows international safety protocols.</p>
                        </div>
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 mx-auto md:mx-0 group-hover:bg-fuchsia-50 group-hover:border-fuchsia-200 group-hover:scale-110 transition-all duration-300">
                                <Zap className="w-7 h-7 text-fuchsia-600" />
                            </div>
                            <h4 className="font-black text-xl mb-3 text-slate-800">Zero Waiting</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">In-house blood bank and modular OTs ensure no delay in life-saving procedures.</p>
                        </div>
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 mx-auto md:mx-0 group-hover:bg-fuchsia-50 group-hover:border-fuchsia-200 group-hover:scale-110 transition-all duration-300">
                                <Monitor className="w-7 h-7 text-fuchsia-600" />
                            </div>
                            <h4 className="font-black text-xl mb-3 text-slate-800">Expert Hand</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">Technicians and surgeons specially trained at world-class OEM facilities.</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* DARK TECH BENTO GRID */}
            <section className="py-24 relative overflow-hidden bg-slate-900 mt-24 mb-24 skew-y-3">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -skew-y-3" />

                <SectionContainer className="relative z-10 -skew-y-3 max-w-7xl mx-auto py-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">Advanced Medical Systems</h2>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">Explore the cutting-edge robotic, imaging, and surgical technology housed within our facility.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech) => (
                            <Link key={tech.slug} href={`/technology/${tech.slug}`} className="group relative h-full flex flex-col bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 hover:bg-slate-800 hover:border-fuchsia-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                                    <Sparkles className="w-24 h-24 text-fuchsia-400" />
                                </div>

                                <div className="relative z-10 flex-grow pr-8">
                                    <div className="mb-6 flex w-16 h-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-fuchsia-500 group-hover:border-fuchsia-400 transition-all duration-500 shadow-lg">
                                        <Monitor className="w-8 h-8 text-fuchsia-300 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-colors">
                                        {tech.title}
                                    </h3>

                                    <p className="text-slate-400 font-light leading-relaxed mb-8 line-clamp-3 group-hover:text-slate-300 transition-colors">
                                        {tech.shortDescription}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-auto flex items-center justify-between pt-6 border-t border-white/10">
                                    <span className="text-sm font-bold text-slate-500 group-hover:text-fuchsia-400 uppercase tracking-widest transition-colors">Discover</span>
                                    <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:text-white transition-all shadow-md">
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* CTA BENTO */}
            <SectionContainer className="pb-24 max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-fuchsia-950 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl relative group/cta flex flex-col items-center text-center p-12 sm:p-20">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[80px] group-hover/cta:bg-fuchsia-500/20 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 w-full max-w-4xl">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                            <Sparkles className="w-8 h-8 text-fuchsia-300" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            Experience Digital <br /> <span className="text-fuchsia-400">Healthcare.</span>
                        </h2>
                        <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our facilities? Contact our administrative team for a guided tour or specific information about our medical systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto">
                            <Link href="/contact" className="group/btn relative flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-fuchsia-500 text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-fuchsia-500/25 overflow-hidden">
                                <span className="relative z-10">Contact Facility Manager</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
                            </Link>

                            <Link href="/doctors" className="flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                                Meet the Specialists
                                <ChevronRight className="w-5 h-5 ml-2 text-fuchsia-400" />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
