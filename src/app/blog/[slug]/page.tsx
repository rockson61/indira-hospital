import { notFound } from "next/navigation"
import { getDirectusClient } from "@/lib/directus"
import { readItems } from "@directus/sdk"
import { Post } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = await getDirectusClient();
    try {
        const posts = await client.request(readItems('posts', {
            filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
            limit: 1,
            fields: ['seo_title', 'seo_description', 'title', 'excerpt']
        })) as unknown as Post[];

        const post = posts[0];
        if (!post) return {};

        return {
            title: post.seo_title || post.title,
            description: post.seo_description || post.excerpt,
        }
    } catch (e) {
        return {}
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = await getDirectusClient();
    let post: Post | undefined;

    try {
        const posts = await client.request(readItems('posts', {
            filter: {
                slug: { _eq: slug },
                status: { _eq: 'published' }
            },
            limit: 1,
            fields: ['*', 'author.*'] as any
        })) as unknown as Post[];

        post = posts[0];
    } catch (error) {
        // API unavailable — fall through to notFound
    }

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pb-20">
            {/* Header / Meta */}
            <div className="bg-slate-50 py-12 border-b">
                <SectionContainer className="max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>

                    <div className="flex gap-4 mb-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                            {post.category || 'Health Update'}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

                    <div className="flex items-center justify-between border-t pt-6 mt-6">
                        <div className="flex items-center gap-4">
                            {typeof post.author === 'object' && post.author?.avatar ? (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${post.author.avatar}`}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                    IH
                                </div>
                            )}
                            <div>
                                <p className="font-bold text-slate-900">
                                    {typeof post.author === 'object' ? post.author?.name : 'Indira Editorial Team'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {format(new Date(post.date_created), "MMMM d, yyyy")}
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>
                </SectionContainer>
            </div>

            {/* Featured Image */}
            <SectionContainer className="max-w-5xl -mt-8 mb-12 relative z-10">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    {post.image ? (
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${post.image}`}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white/20 text-4xl font-bold">
                            Indira Super Speciality Hospital
                        </div>
                    )}
                </div>
            </SectionContainer>

            {/* Content Body */}
            <SectionContainer className="max-w-3xl">
                <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase mb-4">Related Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </SectionContainer>
        </main>
    )
}
