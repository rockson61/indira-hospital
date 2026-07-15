import { Metadata } from "next";
import { getDepartments } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
 title: "Best Hospital Departments in Vellore — Same-Day Discharge...",
 description: "Explore 15+ advanced medical departments at Indira Hospital, Vellore. From cardiology to proctology, get expert care with same-day discharge options in ...",
 alternates: {
 canonical: "/departments"
 }
};

export default async function DepartmentsDirectoryPage() {
 const departments = await getDepartments().catch(() => []);

 return (
 <main className="min-h-screen bg-slate-50 dark:bg-slate-800">
 {/* Unified Semantic Knowledge & AEO Infrastructure */}
 <JsonLdSchema 
 type="itemList"
 name="Medical Departments & Specialities - Indira Hospital Vellore"
 description="Explore our advanced medical units including Cardiology, Orthopaedics, Proctology, and General Surgery at the best hospital in Vellore."
 items={[
 { name: "Home", url: "/"},
 { name: "Departments", url: "/departments"},
 ...departments.map((d: any) => ({ name: d.title || d.name, url: `/departments/${d.slug}` }))
 ]}
 />
 <PageHero
 title="Best Multispeciality Hospital Departments in Vellore"
 subtitle="Comprehensive Care Under One Roof"
 description="Experience world-class treatment across 15+ advanced specialities. From complex cardiac care to minimally invasive laparoscopic surgery, our NABH-accredited hospital in Vellore delivers precise, compassionate, and transparent healthcare."
 backgroundImage="/images/hospital/Hospital.webp"
 />

 <SectionContainer className="py-24 -mt-16 relative z-10 min-h-[50vh]">
 {departments.length > 0 ? (
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {departments.map((dept: any) => (
 <DepartmentCard key={dept.slug || dept.id} department={dept} variant="grid"/>
 ))}
 </div>
 ) : (
 <div className="text-center text-slate-500 dark:text-subtle-on-light py-12">
 <p className="text-xl">Loading departments...</p>
 </div>
 )}
 </SectionContainer>
 
 <SectionContainer className="pb-24">
 <div className="bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
 <div className="absolute inset-0 bg-[url(/images/hospital/Hospital.webp)] opacity-10 mix-blend-overlay"/>
 <div className="relative z-10 w-full max-w-2xl mx-auto">
 <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80"/>
 <h2 className="elite-section-title mb-4">Don't See Your Speciality?</h2>
 <p className="text-xl text-white/80 mb-8 font-medium">
 Our hospital houses 30+ medical departments. Chat with our clinical assistance team to find the right specialist for your condition.
 </p>
 <a 
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'm looking for a specialist at Indira Hospital.")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-3 px-10 py-5 bg-white text-fuchsia-700 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl"
 >
 <MessageCircle className="w-6 h-6"/>
 Chat with Experts
 </a>
 </div>
 </div>
 </SectionContainer>

 <HealthLibraryCard />

 <SectionContainer className="py-24 max-w-7xl mx-auto">
 <PeopleAlsoSearchCard
 keywords={[
 { text: "Best hospital departments in Vellore", href: "/departments"},
 { text: "Multispeciality hospital Tamil Nadu", href: "/departments"},
 { text: "Cardiology hospital in Vellore", href: "/departments"},
 { text: "Best proctology hospital India", href: "/departments"},
 { text: "Advanced medical centres Vellore", href: "/departments"},
 { text: "NABH accredited hospital Tamil Nadu", href: "/departments"},
 ]}
 />
 </SectionContainer>

 <EntityFAQs
 entityType="hospital"
 entityName="Indira Hospital"
 entitySlug="indira-hospital"
 className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-700"
 />

 {/* ENTITY CARD SECTIONS */}
 <EntityCardSection type="services"title="Treatments We Offer"subtitle="Our Services"limit={6} className="bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/50"/>
 <EntityCardSection type="doctors"title="Our Expert Doctors"subtitle="Meet Our Specialists"limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700"/>
 <EntityCardSection type="locations"title="Find Us Near You"subtitle="Our Locations"limit={6} className="bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/50"/>

 <InternalLinkGrid type="diagnostics"title="Department Diagnostics"subtitle="Laboratory Services"limit={12} className="bg-white dark:bg-slate-900 border-t"/>
 <InternalLinkGrid type="health-packages"title="Specialized Checkups"subtitle="Health Packages"limit={8} className="bg-slate-50 dark:bg-slate-800"/>

 {/* COMPACT SEO LINK STRIPS */}
 <InternalLinkGrid type="services"title="All Treatments A-Z"subtitle="Services Directory"limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700"/>
 <InternalLinkGrid type="doctors"title="All Doctors A-Z"subtitle="Doctors Directory"limit={12} className="bg-slate-50 dark:bg-slate-800"/>
 <InternalLinkGrid type="locations"title="All Locations"subtitle="Location Directory"limit={16} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700"/>
 </main>
 );
}
