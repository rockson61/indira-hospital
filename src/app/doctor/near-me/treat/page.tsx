import React from 'react'
import { Metadata } from "next"
import HealthLibraryClient from "./HealthLibraryClient";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
 title: "Signature Treatments & Health Library | Indira Hospital V...",
 description: "Explore advanced surgical excellence in Vellore. From Laser Proctology and Keyhole Surgeries to Cardiology and Orthopaedics. Complete medical guide to t...",
 alternates: {
 canonical: "/doctor/near-me/treat"
 }
}

export default function HealthLibraryPage() {
 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
 <HealthLibraryClient />
 
 {/* TRUST SIGNALS */}
 <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pb-32">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="diagnostics"
 title="Treatment & Procedure FAQs"
 description="Expert insights on recovery times, surgical prep, and clinical safety at Indira Hospital."
 />
 <EntityReviews
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="indira-hospital"
 title="Patient Success Stories"
 description="Hear from patients who underwent life-changing treatments at our super-speciality centers."
 />
 </div>
 </section>
 
 {/* SEO INTEGRITY ENFORCEMENT */}
 <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
 <InternalLinkGrid type="locations" title="Visit our Elite Centers" subtitle="Nearest to You" limit={12} className="bg-slate-50 dark:bg-slate-900 border-y" />
 <InternalLinkGrid type="diagnostics" title="NABL Accredited Diagnostics" subtitle="Lab & Imaging" limit={12} className="bg-white dark:bg-slate-950 border-b" />
 </main>
 );
}