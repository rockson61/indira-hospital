import { constructMetadata } from '@/lib/seo-utils';
import { getDirectusClient } from "@/lib/directus"
import { getImageUrl } from "@/lib/utils"
import { readItems } from "@directus/sdk"
import { Post } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { BLOG_CONFIGURATION } from "@/config/constants"
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid"
import { Metadata } from "next"

import { FALLBACK_BLOG_POSTS } from "@/lib/data/fallback-blog-data"

export const metadata: Metadata = constructMetadata({
    title: "Medical Blog & Surgical Insights in Vellore | Indira Hospital",
    description: "Expert medical articles, surgical insights, and health tips from the specialists at Indira Hospital, Vellore. Leading healthcare blog in Tamil Nadu, India.",
    path: "/blog",
})

export const revalidate = 604800; // Revalidate every hour

export default async function BlogListingPage() {
    const client = await getDirectusClient();

    // Fetch posts with author details
    // Using try-catch to handle potential API issues during build if data is missing
    let posts: Post[] = [];
    try {
        posts = await client.request(readItems('posts', {
            filter: { status: { _eq: 'published' } },
            sort: ['-date_created'],
            fields: ['*', 'author.*'] as never[]
        })) as unknown as Post[];
    } catch (error) {
        console.warn("Failed to fetch blog posts:", error);
    }

    // Use fallback if CMS is empty or failed
    if (posts.length === 0) {
        posts = FALLBACK_BLOG_POSTS;
    }

    return (
        <main className="min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-slate-50 dark:bg-slate-800 pt-44 pb-20">
                <SectionContainer>
                    <h1 className="elite-hero-title font-bold mb-6 text-center">{BLOG_CONFIGURATION.TITLE}</h1>
                    <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                        {BLOG_CONFIGURATION.SUBTITLE}
                    </p>
                </SectionContainer>
            </div>

            <SectionContainer className="py-16">
                {posts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48 bg-slate-200 dark:bg-slate-700">
                                    {post.image ? (
                                        <Image
                                            src={getImageUrl(post.image as string) || BLOG_CONFIGURATION.PLACEHOLDER_IMAGE_PATH}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-400">{BLOG_CONFIGURATION.NO_IMAGE_PLACEHOLDER}</div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-800">
                                        {post.category || BLOG_CONFIGURATION.DEFAULT_CATEGORY}
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-fuchsia-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-muted-foreground line-clamp-3 text-sm mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {format(new Date(post.date_created), "MMM d, yyyy")}
                                        </div>
                                        {/* Handle Author object or string */}
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {typeof post.author === 'object' && post.author !== null && 'name' in post.author ? String(post.author.name) : BLOG_CONFIGURATION.DEFAULT_AUTHOR}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="ghost" className="w-full justify-between group">
                                        <Link href={`/blog/${post.slug}`}>
                                            {BLOG_CONFIGURATION.READ_ARTICLE_BUTTON}
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed text-muted-foreground">
                        <p>{BLOG_CONFIGURATION.NO_ARTICLES_MESSAGE}</p>
                    </div>
                )}
            </SectionContainer>
            <InternalLinkGrid type="services" title="Expert Surgical Procedures" subtitle="Clinical Services" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
            <InternalLinkGrid type="diagnostics" title="Advanced Diagnostic Tests" subtitle="NABL Accredited" limit={8} className="bg-white dark:bg-slate-950 border-t" />
        </main>
    )
}
