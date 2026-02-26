import { Metadata } from "next";
import { getDepartments } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { DepartmentCard } from "@/components/entities/DepartmentCard";
import EntityFAQs from "@/components/trust/EntityFAQs";

export const metadata: Metadata = {
    title: "Centres of Excellence & Departments | Indira Super Speciality Hospital",
    description: "Explore the advanced medical departments and tertiary care centres of excellence at Indira Hospital.",
};

export default async function DepartmentsDirectoryPage() {
    const departments = await getDepartments().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50">
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
        </main>
    );
}
