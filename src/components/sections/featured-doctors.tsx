import { SectionHeader } from "@/components/ui/section-header";
import { DoctorCard } from "@/components/ui/doctor-card";
import { getDoctors } from "@/lib/api";
import { getImageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SEED_DATA } from "@/lib/data/seed-data";

export async function FeaturedDoctors() {
    let doctors = await getDoctors().catch(() => []);
    if (!doctors.length) doctors = SEED_DATA.doctors as any;

    // Limit to 4 for homepage
    const featuredOnly = doctors.slice(0, 4);

    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <SectionHeader
                        title="Our Medical Experts"
                        subtitle="Doctors"
                        description="Meet our team of experienced consultants and surgeons."
                        className="mb-0 text-left items-start"
                        align="left"
                    />
                    <Button variant="outline" className="hidden sm:inline-flex" asChild>
                        <Link href="/doctors">View All Doctors <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {featuredOnly.map((doc: any) => (
                        <DoctorCard
                            key={doc.slug}
                            name={doc.name}
                            designation={doc.designation}
                            department={doc.department?.name}
                            slug={doc.slug}
                            image={getImageUrl(doc.image) || undefined}
                            className="bg-white"
                        />
                    ))}
                </div>

                <div className="mt-12 text-center sm:hidden">
                    <Button variant="outline" asChild>
                        <Link href="/doctors">View All Doctors <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
