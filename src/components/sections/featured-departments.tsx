import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { getDepartments } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { Stethoscope } from "lucide-react";

import { SEED_DATA } from "@/lib/data/seed-data";

export async function FeaturedDepartments() {
    let departments = await getDepartments().catch(() => []);

    if (!departments.length) {
        departments = SEED_DATA.services.map(s => ({
            name: s.title,
            slug: s.slug,
            icon: s.icon,
            description: s.short_description
        })) as any;
    }
    // Limit to 6 for homepage
    const featuredOnly = departments.slice(0, 6);

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Centers of Excellence"
                    subtitle="Our Specialties"
                    description="World-class medical care across a wide range of specialties."
                />
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {featuredOnly.map((dept: any) => (
                        <ServiceCard
                            key={dept.slug}
                            title={dept.name}
                            description={dept.description?.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." || ""}
                            slug={dept.slug}
                            icon={dept.icon ? <img src={getImageUrl(dept.icon) as string} alt={dept.name} className="h-6 w-6 object-contain" /> : <Stethoscope className="h-6 w-6" />}
                            className="bg-gray-50 border-none shadow-none hover:bg-white hover:shadow-xl hover:-translate-y-1"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
