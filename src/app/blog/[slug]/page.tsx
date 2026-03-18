import { notFound } from "next/navigation";
import { BLOG_CONFIGURATION } from "@/config/constants";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { AuthorCard } from "@/components/marketing/AuthorCard";
import { HospitalCard } from "@/components/marketing/HospitalCard";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";
import { ComparisonCard } from "@/components/marketing/ComparisonCard";
import { InsuranceCard } from "@/components/marketing/InsuranceCard";
import { InternationalPatientCard } from "@/components/marketing/InternationalPatientCard";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    
    const formattedTitle = slug.replace(/-/g, ' ');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Header Spacer */}
            <div className="pt-44" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Primary Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        <header className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-black tracking-widest uppercase">
                                Clinical Guide
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight capitalize">
                                {formattedTitle}
                            </h1>
                            <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                Learn about the latest advancements, risks, and post-operative care involved in this clinical procedure.
                            </p>
                        </header>
                        
                        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                            <p>{BLOG_CONFIGURATION.DYNAMIC_CONTENT_PLACEHOLDER}</p>
                            
                            {/* Injected Content Example */}
                            <p>This is a placeholder for dynamically fetched CMS content. In production, rich text blocks, imagery, and medical schemas will render within this domain.</p>
                            
                            <h2>Understanding the Procedure</h2>
                            <p>Patients undergoing this specific methodology can expect a significantly reduced recovery time compared to traditional interventions, allowing for rapid rehabilitation.</p>
                        </article>

                        {/* Mid-Article Comparison Card Breakout */}
                        <div className="my-16">
                            <ComparisonCard 
                                title="Treatment Methodology Compare"
                                targetTreatment={{
                                    name: "Robotic-Assisted Procedure",
                                    benefits: [
                                        "Sub-millimeter precision capability",
                                        "Minimal blood loss and smaller incisions",
                                        "2x faster post-operative recovery",
                                        "Reduced incidence of infection"
                                    ]
                                }}
                                alternativeTreatment={{
                                    name: "Traditional Open Surgery",
                                    drawbacks: [
                                        "Requires large physical incisions",
                                        "Extended hospitalization duration",
                                        "Higher risk of surrounding tissue damage"
                                    ]
                                }}
                            />
                        </div>
                    </div>

                    {/* Sidebar / Marketing Rail (4 Cols) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Sticky Container */}
                        <div className="sticky top-32 space-y-8">
                            
                            {/* Author Review Trust Widget */}
                            <AuthorCard 
                                author={{
                                    name: "Dr. Rockson Samuel",
                                    role: "Chief Medical Officer",
                                    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
                                    bio: "Dr. Samuel is a universally acclaimed specialist renowned for pioneering highly advanced micro-surgical techniques in complex critical care scenarios.",
                                    credentials: ["MBBS", "MS (Gen)", "FRCS", "FACS"],
                                    profileUrl: "/doctor/chief-medical-officer/dr-rockson-samuel"
                                }}
                                dateUpdated="Mar 18, 2026"
                            />

                            {/* SEO Keyword Cluster Widget */}
                            <PeopleAlsoSearchCard 
                                keywords={[
                                    { text: "Recovery Time", href: "#recovery" },
                                    { text: "Cost in India", href: "#cost" },
                                    { text: "Best Surgeries Near Me", href: "/doctor/near-me" },
                                    { text: "Side Effects", href: "#risks" },
                                    { text: "Alternative Therapies", href: "/departments" }
                                ]}
                            />

                            {/* Facility Trust Component */}
                            <HospitalCard />

                            {/* TPA & Insurance Financial Trust Component */}
                            <InsuranceCard />

                            {/* Global Medical Tourism Component */}
                            <InternationalPatientCard />

                        </div>
                    </aside>

                </div>

                <div className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800 space-y-10">
                    <InternalLinkGrid type="services" title="Related Treatments" subtitle="Clinical Services" limit={8} className="bg-white dark:bg-slate-900 rounded-[3rem]" />
                    <InternalLinkGrid type="diagnostics" title="Recommended Screenings" subtitle="NABL Accredited" limit={8} className="bg-slate-100 dark:bg-slate-900/50 rounded-[3rem]" />
                </div>
            </div>
        </div>
    );
}
