import { Metadata } from "next";
import { PATIENT_RESOURCES } from "@/lib/data/patient-resources";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { PageHero } from "@/components/ui/page-hero";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    return PATIENT_RESOURCES.map((resource) => ({
        slug: resource.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const resource = PATIENT_RESOURCES.find((r) => r.slug === slug);

    if (!resource) return { title: "Resource Not Found" };

    return {
        title: `${resource.title} | Patient Guide | Indira Hospital`,
        description: `${resource.short_description} Learn about ${resource.title.toLowerCase()} at Indira Super Speciality Hospital, Vellore. Find details on ${resource.category.toLowerCase()} and more.`,
        keywords: [resource.title, resource.category, "Patient Resources", "Indira Hospital", "Vellore", "India"],
        openGraph: {
            title: `${resource.title} | Indira Hospital`,
            description: resource.short_description,
            type: "article",
        },
    };
}


export default async function PatientResourcePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const resource = PATIENT_RESOURCES.find((r) => r.slug === resolvedParams.slug);

    if (!resource) {
        notFound();
    }

    const Icon = resource.icon;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero
                title={resource.title}
                subtitle={resource.short_description}
            />
            <SectionContainer className="py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-slate-500 mb-10 font-medium whitespace-nowrap overflow-x-auto pb-2">
                        <Link href="/" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-400 flex-shrink-0" />
                        <span className="text-slate-900 dark:text-slate-200">{resource.title}</span>
                    </nav>

                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                        {/* Decorative Icon */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-50 dark:bg-fuchsia-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 flex items-center gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                            <div className="w-20 h-20 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center flex-shrink-0 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-200 dark:border-fuchsia-800 shadow-sm">
                                <Icon className="w-10 h-10" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest mb-2">
                                    {resource.category}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                                    {resource.title}
                                </h2>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-h2:text-3xl prose-h2:text-slate-900 dark:prose-h2:text-white prose-a:text-fuchsia-600 dark:prose-a:text-fuchsia-400 hover:prose-a:text-fuchsia-700 prose-li:marker:text-fuchsia-500 relative z-10">
                            <ReactMarkdown>{resource.full_content}</ReactMarkdown>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
                        >
                            Need more help? Contact Us
                        </Link>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
