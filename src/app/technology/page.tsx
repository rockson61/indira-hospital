import { Metadata } from "next";
import Link from "next/link";
import {
    ChevronRight, Zap, ShieldCheck,
    ArrowRight, Sparkles, Monitor
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { getAllTechnologies } from "@/lib/data/technology-data";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
    title: "Advanced Medical Technology | Indira Super Speciality Hospital",
    description: "Discover the cutting-edge medical infrastructure at Indira Hospital. From Robotic Surgery to 3T MRI, we use the world's best technology for your care.",
};

export default function TechnologyHubPage() {
    const technologies = getAllTechnologies();

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* HERO SECTION */}
            <PageHero
                title="Technology that Saves Lives"
                subtitle="Next-Gen Infrastructure"
                description="At Indira Hospital, we invest in the world's most advanced diagnostic and surgical systems to provide our patients with safer, faster, and more precise treatments."
            />

            {/* TECH GRID */}
            <SectionContainer className="py-24 -mt-20 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech) => (
                        <Link key={tech.slug} href={`/technology/${tech.slug}`}>
                            <Card className="group h-full p-8 bg-white dark:bg-slate-900 border-none shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all rounded-[2rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <Sparkles className="w-16 h-16 text-purple-600" />
                                </div>

                                <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl inline-block group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <Monitor className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                                    {tech.title}
                                </h3>

                                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
                                    {tech.shortDescription}
                                </p>

                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-purple-600 uppercase tracking-widest">Discover</span>
                                    <span className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </SectionContainer>

            {/* TRUST BAR */}
            <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 py-16">
                <SectionContainer>
                    <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                        <div>
                            <ShieldCheck className="w-10 h-10 text-purple-600 mb-4 mx-auto md:mx-0" />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">Safety First</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">All equipment undergoes daily calibration and follows international safety protocols.</p>
                        </div>
                        <div>
                            <Sparkles className="w-10 h-10 text-purple-600 mb-4 mx-auto md:mx-0" />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">Zero Waiting</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">In-house blood bank and modular OTs ensure no delay in life-saving procedures.</p>
                        </div>
                        <div>
                            <Monitor className="w-10 h-10 text-purple-600 mb-4 mx-auto md:mx-0" />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">Expert Hand</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Technicians and surgeons specially trained at world-class OEM facilities.</p>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* CTA */}
            <SectionContainer className="py-24">
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="max-w-2xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Experience Digital Healthcare</h2>
                        <p className="text-lg text-purple-100 mb-10 leading-relaxed">
                            Have questions about our facilities? Contact our administrative
                            team for a guided tour or specific information about our medical systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-lg">
                                Contact Facility Manager
                            </Link>
                            <Link href="/doctors" className="px-10 py-4 bg-indigo-700/50 text-white font-bold rounded-2xl border border-white/20 hover:bg-indigo-700 transition-all">
                                Meet the Specialists
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
