import { Metadata } from "next";
import { PatientsHubClient } from "./PatientsHubClient";
import { SectionContainer } from "@/components/ui/section-container";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
 title: "Patient Resources & Support | Indira Super Speciality Hos...",
 description: "Your complete guide to care at Indira Hospital. Access travel assistance, international patient support, insurance billing, and campus amenities in one ...",
};

export default function PatientsHubPage() {
 return (
 <main className="min-h-screen bg-white dark:bg-slate-950">
 <PatientsHubClient />

 {/* TRUST SIGNALS */}
 <SectionContainer className="py-24 border-t border-slate-100 dark:border-slate-800">
 <div className="grid lg:grid-cols-2 gap-16">
 <EntityFAQs 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="patients"
 title="Patient Support FAQs"
 description="Common questions about visiting, records, and patient rights at Indira Hospital."
 />
 <EntityReviews 
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="patients"
 title="Patient Experience Stories"
 description="Real feedback from patients and families who navigated their care journey with us."
 />
 </div>
 </SectionContainer>

 {/* ENTITY CARD SECTIONS */}
 <EntityCardSection type="doctors"title="Our Expert Doctors"subtitle="Meet Our Specialists"limit={6} className="bg-white dark:bg-slate-900 border-t"/>

 {/* COMPACT SEO LINK STRIPS */}
 <InternalLinkGrid type="services"title="Treatments & Procedures"subtitle="Clinical Services"limit={12} className="bg-slate-50 dark:bg-slate-900 border-t"/>
 <InternalLinkGrid type="diagnostics"title="Diagnostic Tests"subtitle="Lab & Imaging"limit={12} className="bg-white dark:bg-slate-900 border-t"/>
 <InternalLinkGrid type="health-packages"title="Health Checkups"subtitle="Preventive Care"limit={8} className="bg-slate-50 dark:bg-slate-900 border-y"/>

 {/* CTA Section */}
 <CTASection />
 </main>
 );
}
