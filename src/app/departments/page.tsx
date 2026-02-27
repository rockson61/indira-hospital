import { Metadata } from "next";
import { getDepartments } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "Centres of Excellence & Departments | Indira Super Speciality Hospital",
    description: "Explore the advanced medical departments and tertiary care centres of excellence at Indira Hospital.",
};

export default async function DepartmentsDirectoryPage() {
    const departments = await getDepartments().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50">
            <JsonLdSchema
                type="itemList"
                name="Departments & Centres of Excellence at Indira Hospital"
                items={departments.map((d: any) => ({ name: d.title || d.name, url: `/departments/${d.slug}` }))}
            />
            <PageHero
                title="Centres of Excellence"
                subtitle="Expert Departments"
                description="Explore our specialized medical and surgical departments, equipped with state-of-the-art technology and leading healthcare professionals."
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
                    <div className="text-center text-slate-500 py-12">
                        <p className="text-xl">Loading departments...</p>
                    </div>
                )}
            </SectionContainer>

            <EntityFAQs
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                className="bg-white py-24 border-t border-slate-100"
            />

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments We Offer" subtitle="Our Services" limit={6} className="bg-slate-50" />
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white border-t border-slate-100" />
            <EntityCardSection type="locations" title="Find Us Near You" subtitle="Our Locations" limit={6} className="bg-slate-50" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-white border-t border-slate-100" />
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-slate-50" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={16} className="bg-white border-t border-slate-100" />
        </main>
    );
}
