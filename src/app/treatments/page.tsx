import { SectionContainer } from "@/components/ui/section-container";
import { Sparkles, ArrowRight, Activity, Zap, Droplets, Target } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signature Treatments in Vellore, Tamil Nadu | Advanced Surgical Excellence",
    description: "Specialized in Laser Proctology, Laparoscopic Surgery, and Modern Interventions at Indira Hospital, Vellore. Discover our same-day discharge surgical options in India.",
    alternates: {
        canonical: "/treatments"
    }
};

import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

const treatments = [
    {
        title: "Laser Proctology",
        slug: "laser-piles-treatment-cost",
        description: "Advanced laser treatment for Piles, Fistula, and Fissure with minimal pain and rapid recovery.",
        icon: <Zap className="w-8 h-8 text-fuchsia-600" />,
        benefits: ["Single day discharge", "No cuts/stitches", "Bloodless procedure"]
    },
    {
        title: "Keyhole Surgeries",
        slug: "laparoscopic-surgeries",
        description: "Minimally invasive laparoscopic procedures for Gallbladder, Appendix, and Hernia.",
        icon: <Target className="w-8 h-8 text-fuchsia-600" />,
        benefits: ["Minimal scarring", "Reduced infection risk", "Fast return to work"]
    },
    {
        title: "Advanced Cardiology",
        slug: "cardiology",
        description: "State-of-the-art interventional cardiology including Angioplasty and Heart Failure management.",
        icon: <Activity className="w-8 h-8 text-fuchsia-600" />,
        benefits: ["Expert cardiologists", "Modern Cath Lab", "24/7 cardiac emergency"]
    },
    {
        title: "Orthopaedic Excellence",
        slug: "orthopaedics",
        description: "Joint replacements and complex trauma surgeries using advanced navigation and implants.",
        icon: <Droplets className="w-8 h-8 text-fuchsia-600" />,
        benefits: ["Physiotherapy support", "High precision implants", "Same-day mobilization"]
    }
];

export default function TreatmentsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <JsonLdSchema
                type="breadcrumb"
                items={[
                    { name: "Home", url: "/" },
                    { name: "Treatments", url: "/treatments" }
                ]}
            />
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
                        <Sparkles className="w-4 h-4" /> Surgical Excellence
                    </div>
                    <h1 className="elite-hero-title text-white mb-6">
                        Signature Treatments <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">in Vellore, TN.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Indira Hospital specialize in the latest surgical interventions that prioritize rapid healing and minimal discomfort.
                    </p>
                </div>
            </section>

            <SectionContainer>
                <div className="grid md:grid-cols-2 gap-8">
                    {treatments.map((treatment) => (
                        <div key={treatment.slug} className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-full group">
                            <div className="mb-8">{treatment.icon}</div>
                            <h2 className="elite-section-title text-slate-900 dark:text-white mb-4">{treatment.title}</h2>
                            <p className="text-slate-500 font-medium mb-8 flex-grow">{treatment.description}</p>

                            <div className="space-y-4 mb-10">
                                {treatment.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={`/doctor/near-me/treat/${treatment.slug}`}
                                className="inline-flex items-center justify-between w-full p-6 bg-slate-50 dark:bg-slate-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/30 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all font-black text-slate-900 dark:text-white"
                            >
                                View Detailed Procedure
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Why Laser? High Impact Block */}
            <SectionContainer className="mt-24">
                <div className="bg-gradient-to-br from-slate-900 to-fuchsia-950 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] will-change-transform transform-gpu" />
                    <div className="relative z-10 w-full max-w-3xl mx-auto">
                        <h2 className="elite-section-title text-white mb-8">Why Laser Surgery?</h2>
                        <p className="text-slate-300 text-lg md:text-xl font-light mb-12 leading-relaxed">
                            Laser surgery represents the pinnacle of modern proctology. By using concentrated light energy, we achieve surgical precision unreachable by traditional scalpels, leading to less tissue damage and faster recovery.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {["No General Anesthesia", "Zero Blood Loss", "Same Day Discharge"].map((tag, i) => (
                                <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-black uppercase tracking-widest">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="diagnostics" title="Advanced Diagnostics in Vellore" subtitle="Lab Services" limit={12} className="bg-white dark:bg-slate-900 border-t mt-24" />
            <InternalLinkGrid type="health-packages" title="Wellness Packages in India" subtitle="Health Checkups" limit={8} className="bg-slate-50 dark:bg-slate-800" />
            <InternalLinkGrid type="departments" title="Centres of Excellence" subtitle="Our Specialities" limit={12} className="bg-slate-50 dark:bg-slate-800 border-t" />
            <InternalLinkGrid type="doctors" title="Consult Specialists" subtitle="Expert Doctors" limit={12} className="bg-white dark:bg-slate-900 border-t" />
        </main>
    );
}
