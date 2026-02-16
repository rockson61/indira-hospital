import { PageHero } from "@/components/ui/page-hero";
import { ServiceCard } from "@/components/entities/ServiceCard";
import { getDepartments } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { getEffectiveDepartments } from "@/lib/utils/department-utils";
import { Stethoscope } from "lucide-react";

import { SEED_DATA } from "@/lib/data/seed-data";

export const revalidate = 3600; // Revalidate every hour

export default async function DepartmentsPage() {
    let departments = await getDepartments().catch(() => []);

    if (!departments || departments.length === 0) {
        // Use seed data as fallback via utility
        departments = getEffectiveDepartments() as any;
    }

    return (
        <main>
            <PageHero
                title="Centers of Excellence"
                subtitle="Departments"
                description="Our hospital offers a wide range of specialized medical departments, each led by experienced professionals dedicated to your health."
                backgroundImage="/images/departments-hero.jpg"
            />
            <div className="bg-slate-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {departments.map((dept: any) => (
                            <ServiceCard
                                key={dept.slug}
                                service={{
                                    title: dept.name,
                                    slug: dept.slug,
                                    short_description: dept.description?.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." || "",
                                    icon: dept.icon_choice || "Stethoscope"
                                }}
                                variant="detail"
                                theme="blue"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
