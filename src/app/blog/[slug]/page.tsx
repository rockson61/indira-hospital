import { Metadata } from "next";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { BLOG_CONFIGURATION } from "@/config/constants";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { AuthorCard } from "@/components/marketing/AuthorCard";
import { HospitalCard } from "@/components/marketing/HospitalCard";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";
import { ComparisonCard } from "@/components/marketing/ComparisonCard";
import { InsuranceCard } from "@/components/marketing/InsuranceCard";
import { InternationalPatientCard } from "@/components/marketing/InternationalPatientCard";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const seoTitle = `${title} | Clinical Guide & Expert Medical Advice | Indira Hospital`;
    const description = `Read our comprehensive guide on ${title} at Indira Super Speciality Hospital. Expert clinical insights, treatment options, and patient care from top specialists in Vellore.`;
    
    return {
        title: seoTitle,
        description,
        alternates: {
            canonical: `/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    
    const formattedTitle = slug.replace(/-/g, ' ');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <JsonLdSchema
                type="article"
                name={formattedTitle}
                description="Learn about the latest advancements, risks, and post-operative care involved in this clinical procedure."
                url={`/blog/${slug}`}
            />
            <JsonLdSchema
                type="breadcrumb"
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Blog', url: '/blog' },
                    { name: formattedTitle, url: `/blog/${slug}` },
                ]}
            />
            {/* ELITE CINEMATIC HEADER */}
            <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-40 overflow-hidden bg-slate-900 rounded-b-[4rem] sm:rounded-b-[6rem]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[120px] will-change-transform transform-gpu opacity-60" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] will-change-transform transform-gpu opacity-40" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-fuchsia-500/10 backdrop-blur-md border border-fuchsia-500/20 text-fuchsia-300 text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_40px_-5px_rgba(232,121,249,0.3)]">
                        Clinical Guide & Research
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] mb-8 uppercase italic">
                        {formattedTitle}
                    </h1>
                    
                    <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed italic opacity-80">
                        Expert medical insights and advanced treatment protocols from Indira Super Speciality Hospital specialists.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Primary Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-12">
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
