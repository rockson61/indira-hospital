import { SectionContainer } from "@/components/ui/section-container";
import { Sparkles, ArrowRight, Activity, Zap, Droplets, Target } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signature Treatments | Advanced Surgical Excellence at Indira Hospital",
    description: "Specialized in Laser Proctology, Laparoscopic Surgery, and Modern Interventions. Discover our same-day discharge surgical options and signature treatments.",
};

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
        <main className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <SectionContainer className="mb-16">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-xs font-black text-fuchsia-600 uppercase mb-8">
                        <Sparkles className="w-4 h-4" /> Surgical Excellence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8">
                        Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Treatments</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        Indira Hospital specialize in the latest surgical interventions that prioritize rapid healing and minimal discomfort.
                    </p>
                </div>
            </SectionContainer>

            <SectionContainer>
                <div className="grid md:grid-cols-2 gap-8">
                    {treatments.map((treatment) => (
                        <div key={treatment.slug} className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-full group">
                            <div className="mb-8">{treatment.icon}</div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{treatment.title}</h2>
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
                                href={`/service/${treatment.slug}`}
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
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
                    <div className="relative z-10 w-full max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Why Laser Surgery?</h2>
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
        </main>
    );
}
