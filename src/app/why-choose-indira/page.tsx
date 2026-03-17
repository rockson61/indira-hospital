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
        <main className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <SectionContainer className="mb-20 text-center mx-auto max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-xs font-black text-fuchsia-600 uppercase mb-8">
                    <Sparkles className="w-4 h-4" /> The Indira Difference
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8">
                    Why Patients <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Trust Us</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    Indira Hospital was founded on the principle of providing elite, super-speciality care with a compassionate heart. We combine world-class infrastructure with personalized attention.
                </p>
            </SectionContainer>

            <SectionContainer>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-950/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{value.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
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
            </SectionContainer>

            {/* Impact Section */}
            <SectionContainer className="mt-24">
                <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Empowering Health through Excellence</h2>
                            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                                With over 150+ hospital beds and a dedicated team of over 20+ specialized doctors, we are the leading healthcare hub in the Vellore region. Our surgical success rate of 99% in minimally invasive procedures is a testament to our precision.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-4xl font-black text-white">15k+</div>
                                    <div className="text-xs font-black text-fuchsia-500 uppercase tracking-widest mt-1">Surgeries</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">50k+</div>
                                    <div className="text-xs font-black text-fuchsia-500 uppercase tracking-widest mt-1">Happy Patients</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "24/7 Service", icon: <Clock className="w-6 h-6" /> },
                                { label: "Expert Care", icon: <Users className="w-6 h-6" /> },
                                { label: "Tech Driven", icon: <Zap className="w-6 h-6" /> },
                                { label: "Safe Hands", icon: <Shield className="w-6 h-6" /> }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-3">
                                    <div className="text-fuchsia-400">{item.icon}</div>
                                    <span className="text-xs font-black text-white uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
            <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-20">
                <InternalLinkGrid type="health-packages" title="Preventive Wellness" subtitle="Indira Health First" limit={8} className="bg-white dark:bg-slate-950" />
                <InternalLinkGrid type="diagnostics" title="Diagnostic Excellence" subtitle="NABL Accredited Lab" limit={12} className="bg-slate-50 dark:bg-slate-900/50" />
            </div>
        </main>
    );
}
