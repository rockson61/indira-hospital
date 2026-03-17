import { notFound } from "next/navigation";
import { BLOG_CONFIGURATION } from "@/config/constants";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="max-w-4xl mx-auto px-4 pt-44 pb-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 capitalize">{slug.replace(/-/g, ' ')}</h1>
            <div className="prose prose-blue max-w-none">
                <p>{BLOG_CONFIGURATION.DYNAMIC_CONTENT_PLACEHOLDER}</p>
            </div>
            <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
                <InternalLinkGrid type="services" title="Related Treatments" subtitle="Clinical Services" limit={8} className="bg-white dark:bg-slate-950" />
                <InternalLinkGrid type="diagnostics" title="Recommended Screenings" subtitle="NABL Accredited" limit={8} className="bg-slate-50 dark:bg-slate-900/50" />
            </div>
        </div>
    );
}
