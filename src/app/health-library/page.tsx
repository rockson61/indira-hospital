import { SectionContainer } from "@/components/ui/section-container";
import { BookOpen, Search, ArrowRight, PlayCircle, FileText, Activity, Microscope, Brain } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
 title: "Health Library & Medical Resource Hub in Vellore, India |...",
 description: "Explore the Indira Health Library for expert-backed medical blogs, patient education guides, and the latest health updates from our super-speciality doc...",
};

const categories = [
 { title: "Surgical Insights", count: "24 Articles", icon: <Microscope className="w-5 h-5 text-fuchsia-600"/> },
 { title: "Heart Health", count: "18 Articles", icon: <Activity className="w-5 h-5 text-fuchsia-600"/> },
 { title: "Women's Wellness", count: "32 Articles", icon: <Brain className="w-5 h-5 text-fuchsia-600"/> },
 { title: "Patient Guides", count: "12 Manuals", icon: <FileText className="w-5 h-5 text-fuchsia-600"/> }
];

export default function HealthLibraryPage() {
 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
 {/* Cinematic Hero */}
 <section className="relative pt-48 pb-32 lg:pt-60 lg:pb-56 overflow-hidden bg-slate-900 rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"/>
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full hidden md:block blur-[120px] will-change-transform transform-gpu opacity-70 pointer-events-none animate-pulse"/>

 <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
 <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-sm font-bold tracking-[0.2em] uppercase mb-10">
 <BookOpen className="w-4 h-4"/> Medical Education Hub
 </div>
 <h1 className="elite-hero-title text-white mb-6">
 Empowering You with <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Knowledge.</span>
 </h1>
 <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
 Access our curated library of medical insights, patient success stories, and evidence-based guides written by our super-speciality experts.
 </p>
 </div>
 </section>

 {/* Featured Categories */}
 <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-20">
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
 {categories.map((cat, i) => (
 <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-fuchsia-200 transition-all group">
 <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
 {cat.icon}
 </div>
 <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{cat.title}</h3>
 <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{cat.count}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Main Library List */}
 <SectionContainer>
 <div className="grid lg:grid-cols-3 gap-12">
 <div className="lg:col-span-2 space-y-12">
 <h2 className="elite-section-title text-slate-900 dark:text-white mb-8">Latest Insights</h2>
 {[
 { title: "Understanding Laser Proctology: Benefits and Recovery", date: "Jan 12, 2024", cat: "Surgery", slug: "laser-proctology-benefits"},
 { title: "How to Manage PCOS through Lifestyle Integration", date: "Feb 05, 2024", cat: "Women's Health", slug: "pcos-lifestyle-management"},
 { title: "The Future of Cardiology: Minimally Invasive Stenting", date: "Dec 20, 2023", cat: "Cardiac", slug: "future-of-cardiology"}
 ].map((post, i) => (
 <Link key={i} href={`/blog/${post.slug}`} className="block group">
 <div className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b border-slate-100 dark:border-slate-800">
 <div className="flex-grow">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-950 text-xs font-black text-fuchsia-600 uppercase tracking-widest rounded-full">{post.cat}</span>
 <span className="text-xs font-bold text-subtle-on-light uppercase tracking-widest">{post.date}</span>
 </div>
 <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-fuchsia-600 transition-colors mb-4">{post.title}</h3>
 <p className="text-slate-500 font-medium line-clamp-2">Learn about the advanced medical approaches our specialists are taking to ensure better patient outcomes and faster recovery times.</p>
 </div>
 <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:text-white transition-all transform group-hover:translate-x-2">
 <ArrowRight className="w-5 h-5"/>
 </div>
 </div>
 </Link>
 ))}
 </div>

 {/* Sidebar Resources */}
 <div className="space-y-8">
 <div className="bg-slate-900 text-white rounded-[3rem] p-10 relative overflow-hidden">
 <div className="relative z-10">
 <PlayCircle className="w-10 h-10 text-fuchsia-400 mb-6"/>
 <h3 className="text-2xl font-black mb-4">Video Guides</h3>
 <p className="text-subtle-on-light text-sm font-medium mb-8">Watch our specialists explain complex medical procedures in simple, easy-to-understand videos.</p>
 <button className="w-full py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white dark:bg-slate-900 transition-all">Browse Videos</button>
 </div>
 </div>

 <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800">
 <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Patient Handbooks</h3>
 <div className="space-y-4">
 {["Post-Op Recovery Guide", "Maternity Pathway", "Cardiac Care Manual"].map((item, i) => (
 <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-fuchsia-200 transition-all cursor-pointer group">
 <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-fuchsia-600">{item}</span>
 <FileText className="w-4 h-4 text-subtle-on-light group-hover:text-fuchsia-600"/>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </SectionContainer>
 <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-20">
 <InternalLinkGrid type="services"title="A-Z Medical Procedures"subtitle="Clinical Excellence"limit={12} className="bg-white dark:bg-slate-950"/>
 <InternalLinkGrid type="diagnostics"title="Diagnostic & Lab Services"subtitle="NABL Accredited"limit={8} className="bg-slate-50 dark:bg-slate-900"/>
 <InternalLinkGrid type="health-packages"title="Preventive Health Packages"subtitle="Wellness First"limit={8} className="bg-white dark:bg-slate-950"/>
 </div>
 </main>
 );
}
