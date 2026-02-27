import { notFound } from "next/navigation";
import { BLOG_CONFIGURATION } from "@/config/constants";

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
        </div>
    );
}
