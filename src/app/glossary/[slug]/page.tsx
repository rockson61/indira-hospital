import { GLOSSARY_DATA } from "@/lib/data/glossary-data";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { PageHeader } from "@/components/ui/page-header";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();

export async function generateStaticParams() {
    return GLOSSARY_DATA.map((item) => ({
        slug: slugify(item.term),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const glossaryItem = GLOSSARY_DATA.find(item => slugify(item.term) === params.slug);

    if (!glossaryItem) {
        return { title: 'Term Not Found' }
    }

    return {
        title: `${glossaryItem.term} | Medical Glossary | Indira Hospital`,
        description: glossaryItem.definition.substring(0, 160) + '...',
    }
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
    const glossaryItem = GLOSSARY_DATA.find(item => slugify(item.term) === params.slug);

    if (!glossaryItem) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <PageHeader
                title={glossaryItem.term}
                description={`${glossaryItem.category} Glossary Term`}
            />
            <SectionContainer>
                <div className="max-w-4xl mx-auto">
                    <Link href="/glossary" className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-medium mb-8 hover:underline">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Glossary
                    </Link>

                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Definition</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                            {glossaryItem.definition}
                        </p>

                        {glossaryItem.relatedService && (
                            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Related Department / Service</h3>
                                <Link
                                    href={`/services/${glossaryItem.relatedService}`}
                                    className="inline-flex items-center px-6 py-3 bg-fuchsia-50 hover:bg-fuchsia-100 dark:bg-fuchsia-900/20 dark:hover:bg-fuchsia-900/40 text-fuchsia-600 dark:text-fuchsia-400 font-medium rounded-xl transition-colors"
                                >
                                    {glossaryItem.relatedServiceTitle || glossaryItem.relatedService}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
