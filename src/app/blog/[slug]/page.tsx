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
import { getPostBySlug } from "@/lib/api"
import { Card } from "@/components/ui/card" // Added Card
import { getImageUrl } from "@/lib/utils" // Added getImageUrl
import { Stethoscope, User, ArrowRight } from "lucide-react" // Added icons

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

    // const client = await getDirectusClient(); // No longer needed
    let post = await getPostBySlug(slug).catch(() => null);

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

                {/* ========== M2M: RELATED DOCTORS & SERVICES ========== */}
                {((post?.related_doctors && post.related_doctors.length > 0) || (post?.related_services && post.related_services.length > 0)) && (
                    <div className="mt-16 pt-10 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Related Medical Resources</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Related Doctors */}
                            {(post.related_doctors as any[])?.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <User className="w-4 h-4" /> Reviewed By / Experts
                                    </h4>
                                    <div className="flex flex-col gap-4">
                                        {(post.related_doctors as any[]).map((doc: any) => (
                                            <Link key={doc.slug} href={`/doctors/${doc.slug}`} className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md border border-slate-100 transition-all">
                                                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                                                    {doc.image && getImageUrl(doc.image) ? (
                                                        <img src={getImageUrl(doc.image)!} alt={doc.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                                                            {doc.name?.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{doc.name}</p>
                                                    <p className="text-xs text-slate-500">{doc.designation}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 ml-auto" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Related Services */}
                            {(post.related_services as any[])?.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Stethoscope className="w-4 h-4" /> Related Treatments
                                    </h4>
                                    <div className="flex flex-col gap-4">
                                        {(post.related_services as any[]).map((svc: any) => (
                                            <Link key={svc.slug} href={`/services/${svc.slug}`} className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md border border-slate-100 transition-all">
                                                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                                    {svc.icon && getImageUrl(svc.icon) ? (
                                                        <img src={getImageUrl(svc.icon)!} className="w-5 h-5" alt="" />
                                                    ) : (
                                                        <Stethoscope className="w-5 h-5" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{svc.title}</p>
                                                    <p className="text-xs text-slate-500 line-clamp-1">{svc.short_description}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-500 ml-auto" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </SectionContainer>
        </main>
    )
}
