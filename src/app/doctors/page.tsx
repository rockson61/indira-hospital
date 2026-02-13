import { SectionHeader } from "@/components/ui/section-header";
import { DoctorCard } from "@/components/ui/doctor-card";
import { getDoctors } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";

import { SEED_DATA } from "@/lib/data/seed-data";

export const revalidate = 3600; // Revalidate every hour

export default async function DoctorsPage() {
    let doctors = await getDoctors().catch(() => []);

    if (!doctors || doctors.length === 0) {
        doctors = SEED_DATA.doctors as any;
    }

    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    title="Meet Our Specialists"
                    subtitle="Our Doctors"
                    description="Our team of dedicated doctors and medical professionals are here to provide you with the best possible care."
                />
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {doctors.map((doc: any) => (
                        <DoctorCard
                            key={doc.slug}
                            name={doc.name}
                            designation={doc.designation}
                            department={doc.department?.name}
                            slug={doc.slug}
                            image={getImageUrl(doc.image) || undefined}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
