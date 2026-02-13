import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogPost {
    slug: string
    title: string
    excerpt: string
    date: string
    image?: string
    category?: string
    readTime: string
}

// In a real server component, we would import data.
// Since this is a client/shared component example, we'll accept posts as props or fetch them.
// For now, I'll structure it to accept a list of posts.

interface LatestDentalTourismGuidesProps {
    posts: BlogPost[]
}

export function LatestDentalTourismGuides({ posts }: LatestDentalTourismGuidesProps) {
    if (!posts || posts.length === 0) return null

    // Take top 3 for display
    const featuredPosts = posts.slice(0, 3)

    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                        Latest Dental Tourism Guides
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Everything you need to know about visiting Vellore for your dental treatment.
                        Travel tips, cost comparisons, and destination guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredPosts.map((post) => (
                        <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                            {/* Image Placeholder or Actual Image */}
                            <div className="h-48 w-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden rounded-t-lg">
                                {/* Optimization: use Next.js Image in real implementation */}
                                <img
                                    src={post.image || '/images/dental-tourism-placeholder.jpg'}
                                    alt={post.title}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.date}>{post.date}</time>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>

                            <CardFooter className="mt-auto pt-0">
                                <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary">
                                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                                        Read Guide <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/blog?category=Dental%20Tourism">View All 50+ Guides</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
