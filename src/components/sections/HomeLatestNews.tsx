import Link from "next/link";
import { ArrowRight, Calendar, User, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";

const DUMMY_NEWS = [
    {
        id: 1,
        title: "Pioneering Robotic Surgeon Joins Our Urology Department",
        excerpt: "Indira Hospital welcomes Dr. Ramana, bringing state-of-the-art robotic-assisted techniques to complex urological procedures.",
        date: "March 12, 2026",
        author: "Media Desk",
        category: "Hospital News",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "New Advanced Cardiac Cath Lab Inaugurated",
        excerpt: "Our new facility aims to reduce intervention times during heart attacks, offering 24/7 primary angioplasty services.",
        date: "March 05, 2026",
        author: "Cardiology Dept",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Recognizing Signs of a Mini-Stroke (TIA)",
        excerpt: "Early intervention is key. Learn the critical warning signs that require immediate medical attention.",
        date: "February 28, 2026",
        author: "Dr. Lokesh Kumar",
        category: "Health Tips",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export function HomeLatestNews() {
    return (
        <section className="py-16 bg-white dark:bg-slate-950">
            <SectionContainer>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400 mb-3 block">
                            Stay Informed
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                            Latest News
                        </h2>
                    </div>
                    <Link href="/blog" className="inline-flex items-center text-slate-600 dark:text-slate-300 font-bold hover:text-pink-600 dark:hover:text-pink-400 transition-colors group">
                        View All News
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DUMMY_NEWS.map((news) => (
                        <Link href={`/blog/${news.id}`} key={news.id} className="group flex flex-col h-full">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                                        Read Article <ArrowUpRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow px-2">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">
                                    <span className="text-pink-600 dark:text-pink-400">{news.category}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{news.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-grow">
                                    {news.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
