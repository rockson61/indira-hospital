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

export const metadata: Metadata = {
    title: "15+ Surgical Specialities Under One Roof | Indira Hospital Vellore",
    description: "From cardiology to proctology — every speciality you need, in one hospital. No referrals, no waiting, no runaround. Get treated today.",
};

export default async function DepartmentsDirectoryPage() {
    const departments = await getDepartments().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800">
            <JsonLdSchema
                type="itemList"
                name="Departments & Centres of Excellence at Indira Hospital"
                items={departments.map((d: any) => ({ name: d.title || d.name, url: `/departments/${d.slug}` }))}
            />
            <PageHero
                title="Best Multispeciality Hospital Departments in Vellore"
                subtitle="Comprehensive Care Under One Roof"
                description="Experience world-class treatment across 15+ advanced specialities. From complex cardiac care to minimally invasive laparoscopic surgery, our NABH-accredited hospital in Vellore delivers precise, compassionate, and transparent healthcare."
                backgroundImage="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200"
            />

            <SectionContainer className="py-24 -mt-16 relative z-10 min-h-[50vh]">
                {departments.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {departments.map((dept: any) => (
                            <DepartmentCard key={dept.slug || dept.id} department={dept} variant="grid" />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 dark:text-slate-400 py-12">
                        <p className="text-xl">Loading departments...</p>
                    </div>
                )}
            </SectionContainer>

            <HealthLibraryCard />

            <EntityFAQs
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-700"
            />

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments We Offer" subtitle="Our Services" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <EntityCardSection type="locations" title="Find Us Near You" subtitle="Our Locations" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-slate-50 dark:bg-slate-800" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={16} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
        </main>
    );
}
