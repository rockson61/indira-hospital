import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { getDepartments } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { Stethoscope } from "lucide-react";

import { SEED_DATA } from "@/lib/data/seed-data";

export const revalidate = 3600; // Revalidate every hour

export default async function DepartmentsPage() {
    let departments = await getDepartments().catch(() => []);

    if (!departments || departments.length === 0) {
        // Map seed services to departments format if needed, or just use services as departments for now
        departments = SEED_DATA.services.map(s => ({
            name: s.title,
            slug: s.slug,
            icon: s.icon,
            description: s.short_description
        })) as any;
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Centers of Excellence"
                    subtitle="Departments"
                    description="Our hospital offers a wide range of specialized medical departments, each led by experienced professionals dedicated to your health."
                />
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {departments.map((dept: any) => (
                        <ServiceCard
                            key={dept.slug}
                            title={dept.name}
                            description={dept.description?.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." || ""}
                            slug={dept.slug}
                            icon={dept.icon ? <img src={getImageUrl(dept.icon) as string} alt={dept.name} className="h-6 w-6 object-contain" /> : <Stethoscope className="h-6 w-6" />}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
