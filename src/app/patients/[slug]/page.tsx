import { Metadata } from "next";
import { PATIENT_RESOURCES } from "@/lib/data/patient-resources";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { ChevronRight, Sparkles, MessageCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { siteConfig } from "@/config/site";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";

export const dynamicParams = false;

export async function generateStaticParams() {
 return PATIENT_RESOURCES.map((resource) => ({
 slug: resource.slug,
 }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 const resource = PATIENT_RESOURCES.find((r) => r.slug === slug);

 if (!resource) return { title: "Resource Not Found" };

 return {
 title: `${resource.title} | Patient Guide | Indira Hospital`,
 description: "${resource.short_description} Learn about ${resource.title.toLowerCase()} at Indira Super Speciality Hospital, Vellore. Find details on ${resource.categ...",
 keywords: [resource.title, resource.category, "Patient Resources", "Indira Hospital", "Vellore", "India"],
 openGraph: {
 title: `${resource.title} | Indira Hospital`,
 description: resource.short_description,
 type: "article",
 },
 };
}


export default async function PatientResourcePage({ params }: { params: Promise<{ slug: string }> }) {
 const resolvedParams = await params;
 const resource = PATIENT_RESOURCES.find((r) => r.slug === resolvedParams.slug);

 if (!resource) {
 notFound();
 }

 const Icon = resource.icon;
 const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi, I am reading about ${resource.title} and have some questions.`)}`;

 return (
 <main className="min-h-screen bg-white dark:bg-slate-950">
 {/* ELITE CINEMATIC HERO */}
 <section className="bg-slate-900 pt-48 pb-32 lg:pt-60 lg:pb-40 text-white relative overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem]">
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full hidden md:block blur-[120px] opacity-40 animate-pulse pointer-events-none" />
 
 <SectionContainer className="relative z-10">
 <div className="max-w-4xl">
 <nav className="flex items-center text-sm text-slate-400 mb-8 gap-1 flex-wrap">
 <Link href="/" className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4" />
 <Link href="/patients" className="hover:text-white transition-colors">Patient Resources</Link>
 <ChevronRight className="w-4 h-4" />
 <span className="text-fuchsia-400 font-medium">{resource.title}</span>
 </nav>

 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6">
 <Sparkles className="w-4 h-4" /> Comprehensive Guide
 </span>
 
 <h1 className="elite-hero-title mb-8">
 {resource.title}
 </h1>
 
 <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light mb-10">
 {resource.short_description}
 </p>

 <div className="flex flex-wrap gap-4">
 <a href={waUrl} target="_blank" rel="noopener noreferrer"
 className="elite-button-primary">
 <MessageCircle className="w-5 h-5" /> Enquire via WhatsApp
 </a>
 <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-white font-bold rounded-2xl hover:bg-white dark:bg-slate-900 transition-all">
 <Phone className="w-5 h-5" /> Call Help Desk
 </a>
 </div>
 </div>
 </SectionContainer>
 </section>

 <SectionContainer className="py-24 max-w-7xl mx-auto">
 <div className="grid lg:grid-cols-3 gap-16">
 {/* Main Content */}
 <div className="lg:col-span-2">
 <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden mb-16">
 <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-50 dark:bg-fuchsia-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
 
 <div className="relative z-10 flex items-center gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
 <div className="w-20 h-20 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center flex-shrink-0 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-200 dark:border-fuchsia-800">
 <Icon className="w-10 h-10" />
 </div>
 <div>
 <div className="text-xs font-black text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest mb-2">
 Resource Category: {resource.category}
 </div>
 <h2 className="elite-section-title text-slate-900 dark:text-white">
 Overview
 </h2>
 </div>
 </div>

 <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-h2:text-3xl prose-h2:mb-6 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-a:text-fuchsia-600 dark:prose-a:text-fuchsia-400 font-medium relative z-10">
 <ReactMarkdown>{resource.full_content}</ReactMarkdown>
 </div>
 </div>

 {/* Trust Signals */}
 <div className="grid sm:grid-cols-2 gap-8">
 <EntityFAQs 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug={resource.slug}
 title={`${resource.title} FAQs`}
 />
 <EntityReviews 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug={resource.slug}
 title="Patient Feedback"
 />
 </div>
 </div>

 {/* Sidebar / Related */}
 <div className="space-y-8">
 <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[40px] pointer-events-none" />
 <h3 className="text-2xl font-black mb-6 tracking-tight uppercase leading-tight">Need Urgent Assistance?</h3>
 <p className="text-slate-400 text-sm mb-8 leading-relaxed">Our Help Desk is available 24/7 to assist with your journey, billing, and clinical inquiries.</p>
 <a href={waUrl} className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-fuchsia-50 transition-all uppercase tracking-widest text-xs">
 Contact Help Desk <ArrowRight className="w-4 h-4 text-fuchsia-600" />
 </a>
 </div>

 <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800">
 <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Quick Links</h3>
 <div className="space-y-4">
 {[
 { text: "Visit Hub", href: "/patients" },
 { text: "Find a Doctor", href: "/doctors" },
 { text: "Book Online", href: "/book-appointment" },
 { text: "Contact Us", href: "/contact" }
 ].map((link, i) => (
 <Link key={i} href={link.href} className="flex items-center justify-between text-slate-500 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 font-bold transition-colors group">
 <span>{link.text}</span>
 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 ))}
 </div>
 </div>
 </div>
 </div>
 </SectionContainer>

 <InternalLinkGrid type="health-packages" title="Wellness Screening" subtitle="Master Health Checkups" limit={8} className="bg-slate-50 dark:bg-slate-900 border-y" />
 <InternalLinkGrid type="diagnostics" title="Diagnostics & Scans" subtitle="NABL Accredited" limit={12} className="bg-white dark:bg-slate-950 border-b" />
 </main>
 );
}
