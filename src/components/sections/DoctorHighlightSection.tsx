import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDoctors } from "@/lib/api";
import { DoctorCard } from "@/components/entities/DoctorCard";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";

export async function DoctorHighlightSection() {
    const allDoctors = await getDoctors().catch(() => []);

    // Show first 8 doctors on homepage hero
    const featuredDoctors = allDoctors.slice(0, 8);

    if (!featuredDoctors.length) return null;

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-800 border-y border-slate-100 dark:border-slate-700">
            <SectionContainer>
                <SectionHeader
                    subtitle="Our Experts"
                    title="Meet Our Top Specialists"
                    description="Dedicated professionals with decades of experience committed to your well-being."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
                    {featuredDoctors.map((doctor: any) => (
                        <DoctorCard key={doctor.slug || doctor.id} doctor={doctor} variant="grid" />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/doctors"
                        className="elite-button-primary text-base px-8 py-4 w-full sm:w-auto mt-4"
                    >
                        Browse All Doctors
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                </div>
            </SectionContainer>
        </section>
    );
}
