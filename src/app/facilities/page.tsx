import { SectionContainer } from "@/components/ui/section-container";
import { clinicFacilities, clinicEquipment } from "@/lib/data/clinic-config";
import { Sparkles, CheckCircle2, Building2, Beaker, Zap, Activity, Microscope } from "lucide-react";
import { Metadata } from "next";
import { injectInternalLinks } from "@/lib/html-linkify";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";

export const metadata: Metadata = {
    title: "World-Class Infrastructure | Facilities at Indira Hospital",
    description: "Explore the advanced medical facilities at Indira Super Speciality Hospital, featuring modular OTs, 24/7 ICU, advanced diagnostics, and state-of-the-art...",
};

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="elite-tag mb-10">
                        <Sparkles className="w-4 h-4" /> Advanced Infrastructure
                    </div>
                    <h1 className="elite-hero-title mb-10">
                        Where <br className="hidden sm:block" />
                        <span className="elite-gradient-text">Technology</span> <br className="hidden sm:block"/>Meets Compassion.
                    </h1>
                    <p 
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: injectInternalLinks("Indira Hospital is equipped with the latest medical technology and premium infrastructure designed to provide superior patient outcomes and absolute safety.") }}
                    />
                </div>
            </section>

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
                            <p 
                                className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: injectInternalLinks(item.description) }}
                            />
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Comprehensive Checklist Section */}
            <SectionContainer>
                <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] will-change-transform transform-gpu" />
                    <div className="relative z-10">
                        <h2 className="elite-section-title text-white mb-12">Infrastructure Excellence</h2>
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
            <SectionContainer className="mt-24 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Beds Available", value: "150+" },
                        { label: "Modular OTs", value: "05" },
                        { label: "Laboratory", value: "24/7" },
                        { label: "Successful Surgeries", value: "15k+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase italic">{stat.value}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            <SectionContainer className="mb-32 max-w-7xl mx-auto px-6 lg:px-8">
                <PeopleAlsoSearchCard 
                    keywords={[
                        { text: "Best Hospital in Vellore Facilities", href: "/facilities" },
                        { text: "Modular OT hospitals near me", href: "/facilities" },
                        { text: "24/7 ICU hospital Vellore", href: "/facilities" },
                        { text: "Digital X-Ray cost Vellore", href: "/facilities" },
                        { text: "128 slice CT scan hospital", href: "/facilities" },
                        { text: "NABH accredited care Vellore", href: "/quality-accreditations" }
                    ]}
                />
            </SectionContainer>

            <div className="space-y-12">
                <InternalLinkGrid type="services" title="Clinical Excellence" subtitle="Our Treatments" limit={12} className="bg-white dark:bg-slate-950 rounded-[4rem] border" />
                <InternalLinkGrid type="departments" title="Indira Elite Medical Units" subtitle="Hospital Infrastructure" limit={8} className="bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border mt-12" />
            </div>
        </main>
    );
}
