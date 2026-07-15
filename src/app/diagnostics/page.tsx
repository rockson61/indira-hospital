import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import React from "react";
import { getDiagnostics } from "@/lib/api"
import { siteConfig } from "@/config/site"
import { Diagnostic } from "@/lib/schema"
import { SectionContainer } from "@/components/ui/section-container"
import { Clock, ArrowRight, FileText, CheckCircle2, Sparkles, Beaker, Shield, MessageCircle } from "lucide-react"
import { TestTubes, UltrasoundScanner, HeartCardiogram, Electricity } from "healthicons-react/outline";
import { DiagnosticCard } from "@/components/entities/DiagnosticCard"
import Link from "next/link"
import { EntityCardSection } from "@/components/seo/EntityCardSection"
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid"
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = constructMetadata({
 title: "Best Diagnostics & Lab Tests in Vellore | Indira Hospital",
 description: "Book 500+ diagnostic tests at Indira Hospital, Vellore. NABL accredited labs, home sample collection, and reports under 12 hours. Advanced MRI, CT, and Blood Pathology.",
 path: "/diagnostics"
});


// Category icons and colors with Elite UI mappings
const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string; glow: string }> = {
 radiology: { icon: UltrasoundScanner, color: 'text-fuchsia-400', bgColor: 'bg-fuchsia-500/10 border-fuchsia-500/20', label: 'Radiology & Imaging', glow: 'group-hover:bg-fuchsia-400/20 shadow-fuchsia-500/30 text-fuchsia-300' },
 pathology: { icon: TestTubes, color: 'text-pink-400', bgColor: 'bg-pink-500/10 border-pink-500/20', label: 'Pathology & Lab', glow: 'group-hover:bg-pink-400/20 shadow-pink-500/30 text-pink-300' },
 cardiology: { icon: HeartCardiogram, color: 'text-rose-400', bgColor: 'bg-rose-500/10 border-rose-500/20', label: 'Cardiology', glow: 'group-hover:bg-rose-400/20 shadow-rose-500/30 text-rose-300' },
 other: { icon: Electricity, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10 border-indigo-500/20', label: 'Other Tests', glow: 'group-hover:bg-indigo-400/20 shadow-indigo-500/30 text-indigo-300' },
}

export default async function DiagnosticsPage() {
 let diagnostics: Diagnostic[] = [];

 try {
 diagnostics = (await getDiagnostics()) as Diagnostic[];
 } catch {
 diagnostics = [];
 }

 // Group by category
 const grouped = diagnostics.reduce((acc: Record<string, Diagnostic[]>, test: Diagnostic) => {
 const cat = test.category || 'other';
 if (!acc[cat]) acc[cat] = [];
 acc[cat].push(test);
 return acc;
 }, {} as Record<string, Diagnostic[]>);

 const categoryOrder = ['radiology', 'pathology', 'cardiology', 'other'];

 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
 <PageHero
 title="Best Diagnostics & NABL Lab Tests in Vellore"
 subtitle="Same-Day Digital Reports"
 description="Book 500+ diagnostic tests at Indira Hospital, Vellore. NABL accredited labs, home sample collection, and reports under 12 hours. Advanced MRI, CT, and Blood Pathology in Tamil Nadu."
 descriptionClassName="clinical-insight direct-answer"
 backgroundImage="/images/hospital/Consultation.webp"
 />

 <div className="space-y-24 py-24">
 {categoryOrder.map(catKey => {
 const tests = grouped[catKey] || [];
 if (tests.length === 0) return null;
 const config = categoryConfig[catKey] || categoryConfig.other;
 const Icon = config.icon;

 return (
 <SectionContainer key={catKey}>
 <div className="flex items-center gap-4 mb-12">
 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${config.bgColor}`}>
 <Icon className={`w-7 h-7 ${config.color}`} />
 </div>
 <div>
 <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
 {config.label}
 </h2>
 <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{tests.length} Verified Tests Available</p>
 </div>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 {tests.map((test) => (
 <DiagnosticCard key={test.slug} test={test} />
 ))}
 </div>
 </SectionContainer>
 );
 })}
 </div>

 <SectionContainer className="py-24 border-t border-slate-100 dark:border-slate-800">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs 
 entityType="hospital"
 entityName="Indira Diagnostics"
 entitySlug="diagnostics"
 className="bg-transparent"
 />
 <EntityReviews 
 entityType="hospital"
 entityName="Indira Diagnostics"
 entitySlug="indira-hospital"
 title="Patient Lab Stories"
 description="Verified experiences from our diagnostic center."
 />
 </div>
 </SectionContainer>

 {/* RELATED SECTIONS */}
 <EntityCardSection type="doctors"title="Consult the Experts"subtitle="Specialist Panel"limit={6} className="bg-white dark:bg-slate-900 border-t"/>
 <InternalLinkGrid type="health-packages"title="Comprehensive Wellness"subtitle="Checkup Packages"limit={8} className="bg-slate-50 dark:bg-slate-900 border-t"/>
 <InternalLinkGrid type="services"title="A-Z Treatment Directory"subtitle="Clinical Services"limit={12} className="bg-white dark:bg-slate-900 border-t"/>
 </main>
 )
}
