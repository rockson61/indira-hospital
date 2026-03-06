import { SectionContainer } from "@/components/ui/section-container";
import { BookOpen, Search, ArrowRight, PlayCircle, FileText, Activity, Microscope, Brain } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Health Library | Medical Education & Patient Guides at Indira Hospital",
    description: "Explore the Indira Health Library for expert-backed medical blogs, patient education guides, and the latest health updates from our super-speciality doctors.",
};

const categories = [
    { title: "Surgical Insights", count: "24 Articles", icon: <Microscope className="w-5 h-5 text-fuchsia-600" /> },
    { title: "Heart Health", count: "18 Articles", icon: <Activity className="w-5 h-5 text-fuchsia-600" /> },
    { title: "Women's Wellness", count: "32 Articles", icon: <Brain className="w-5 h-5 text-fuchsia-600" /> },
    { title: "Patient Guides", count: "12 Manuals", icon: <FileText className="w-5 h-5 text-fuchsia-600" /> }
];

export default function HealthLibraryPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-slate-950">
            <SectionContainer className="mb-20">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 dark:bg-fuchsia-950 rounded-full text-xs font-black text-fuchsia-600 uppercase mb-8">
                        <BookOpen className="w-4 h-4" /> Medical Education Hub
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8">
                        Empowering You with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Knowledge</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
                        Access our curated library of medical insights, patient success stories, and evidence-based guides written by our super-speciality experts.
                    </p>
                </div>
            </SectionContainer>

            {/* Featured Categories */}
            <SectionContainer>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {categories.map((cat, i) => (
                        <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{cat.count}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Main Library List */}
            <SectionContainer>
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Latest Insights</h2>
                        {[
                            { title: "Understanding Laser Proctology: Benefits and Recovery", date: "Jan 12, 2024", cat: "Surgery", slug: "laser-proctology-benefits" },
                            { title: "How to Manage PCOS through Lifestyle Integration", date: "Feb 05, 2024", cat: "Women's Health", slug: "pcos-lifestyle-management" },
                            { title: "The Future of Cardiology: Minimally Invasive Stenting", date: "Dec 20, 2023", cat: "Cardiac", slug: "future-of-cardiology" }
                        ].map((post, i) => (
                            <Link key={i} href={`/blog/${post.slug}`} className="block group">
                                <div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-slate-100 dark:border-slate-800">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-[10px] font-black text-fuchsia-600 uppercase tracking-widest rounded-full">{post.cat}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-fuchsia-600 transition-colors mb-4">{post.title}</h3>
                                        <p className="text-slate-500 font-medium line-clamp-2">Learn about the advanced medical approaches our specialists are taking to ensure better patient outcomes and faster recovery times.</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:text-white transition-all transform group-hover:translate-x-2">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Sidebar Resources */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 text-white rounded-[3rem] p-10 relative overflow-hidden">
                            <div className="relative z-10">
                                <PlayCircle className="w-10 h-10 text-fuchsia-400 mb-6" />
                                <h3 className="text-2xl font-black mb-4">Video Guides</h3>
                                <p className="text-slate-400 text-sm font-medium mb-8">Watch our specialists explain complex medical procedures in simple, easy-to-understand videos.</p>
                                <button className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Browse Videos</button>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Patient Handbooks</h3>
                            <div className="space-y-4">
                                {["Post-Op Recovery Guide", "Maternity Pathway", "Cardiac Care Manual"].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 transition-all cursor-pointer group">
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600">{item}</span>
                                        <FileText className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-600" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    );
}
