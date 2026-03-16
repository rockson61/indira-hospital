import { SectionContainer } from "@/components/ui/section-container";
import { clinicFacilities, clinicEquipment } from "@/lib/data/clinic-config";
import { Sparkles, CheckCircle2, Building2, Beaker, Zap, Activity, Microscope } from "lucide-react";
import { Metadata } from "next";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
    title: "World-Class Infrastructure | Facilities at Indira Hospital",
    description: "Explore the advanced medical facilities at Indira Super Speciality Hospital, featuring modular OTs, 24/7 ICU, advanced diagnostics, and state-of-the-art laboratory services.",
};

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-950">
            {/* Elite Hero Section */}
            <SectionContainer className="mb-20">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-xs font-black text-fuchsia-600 uppercase tracking-[0.2em] mb-8">
                        <Sparkles className="w-4 h-4" /> Advanced Healthcare Infrastructure
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.05]">
                        Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Technology</span> Meets Compassion
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
                        Indira Hospital is equipped with the latest medical technology and premium infrastructure designed to provide superior patient outcomes and absolute safety.
                    </p>
                </div>
            </SectionContainer>

            {/* Core Facilities Grid */}
            <SectionContainer className="mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clinicEquipment.map((item) => (
                        <div key={item.id} className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 dark:hover:border-fuchsia-900 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.id === 'xray' && <Microscope className="w-7 h-7 text-fuchsia-600" />}
                                {item.id === 'ct-scan' && <Activity className="w-7 h-7 text-fuchsia-600" />}
                                {item.id === 'dialysis' && <Zap className="w-7 h-7 text-fuchsia-600" />}
                                {item.id === 'ot' && <Building2 className="w-7 h-7 text-fuchsia-600" />}
                                {item.id === 'icu' && <Beaker className="w-7 h-7 text-fuchsia-600" />}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Comprehensive Checklist Section */}
            <SectionContainer>
                <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-12">Infrastructure Excellence</h2>
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
                            {clinicFacilities.map((facility, i) => (
                                <div key={i} className="flex items-center gap-4 py-4 border-b border-white/10 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-fuchsia-400" />
                                    </div>
                                    <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{facility}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer className="py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Facilities"
                        entitySlug="facilities"
                        title="Infrastructure & Facility FAQs"
                        description="Questions about our visiting hours, emergency services, and patient infrastructure."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Facilities"
                        entitySlug="hospital"
                        title="Facility Feedback"
                        description="What our patients say about our hospitality and infrastructure."
                    />
                </div>
            </SectionContainer>

            {/* High-Impact Stat Strip */}
            <SectionContainer className="mt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Beds Available", value: "150+" },
                        { label: "Modular OTs", value: "05" },
                        { label: "Laboratory", value: "24/7" },
                        { label: "Successful Surgeries", value: "15k+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</div>
                            <div className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </main>
    );
}
