import { getDirectusClient } from "@/lib/directus"
import { readItems } from "@directus/sdk"
import { Post } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"

export const revalidate = 3600; // Revalidate every hour

export default async function BlogListingPage() {
    const client = await getDirectusClient();

    // Fetch posts with author details
    // Using try-catch to handle potential API issues during build if data is missing
    let posts: Post[] = [];
    try {
        posts = await client.request(readItems('posts', {
            filter: { status: { _eq: 'published' } },
            sort: ['-date_created'],
            fields: ['*', 'author.*'] as any
        })) as unknown as Post[];
    } catch (error) {
        console.warn("Failed to fetch blog posts:", error);
        // Fallback or empty state will be handled by UI
    }

    return (
        <main className="min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-slate-50 py-20">
                <SectionContainer>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Health Insights & News</h1>
                    <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                        Expert advice, wellness tips, and the latest updates from Indira Super Speciality Hospital.
                    </p>
                </SectionContainer>
            </div>

            <SectionContainer className="py-16">
                {posts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48 bg-slate-200">
                                    {post.image ? (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${post.image}`}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-400">No Image</div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-800">
                                        {post.category || 'Health'}
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-muted-foreground line-clamp-3 text-sm mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {format(new Date(post.date_created), "MMM d, yyyy")}
                                        </div>
                                        {/* Handle Author object or string */}
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {typeof post.author === 'object' ? post.author?.name : 'Indira Hospital'}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="ghost" className="w-full justify-between group">
                                        <Link href={`/blog/${post.slug}`}>
                                            Read Article
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed text-muted-foreground">
                        <p>No articles found. Check back soon for updates!</p>
                    </div>
                )}
            </SectionContainer>
        </main>
    )
}
