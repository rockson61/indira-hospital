import { Metadata } from "next";
import { getDoctors } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
    title: "Best Doctors & Surgeons in Tamil Nadu | Indira Super Speciality Hospital",
    description: "Find top laparoscopic surgeons, urologists, proctologists, and multi-speciality doctors at Indira Hospital. Book your priority appointment today.",
};

export default async function DoctorsDirectoryPage() {
    const doctors = await getDoctors().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Our Medical Experts"
                subtitle="Trusted Specialists"
                description="Meet our team of highly qualified and experienced doctors dedicated to providing world-class healthcare."
                backgroundImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
            />

            <SectionContainer className="py-24 -mt-16 relative z-10 min-h-[50vh]">
                {doctors.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctors.map((doctor: any) => (
                            <DoctorCard key={doctor.slug || doctor.name} doctor={doctor} variant="grid" />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 py-12">
                        <p className="text-xl">Loading doctor profiles...</p>
                    </div>
                )}
            </SectionContainer>

            <EntityFAQs
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                className="bg-white py-24 border-t border-slate-100"
            />

            <Testimonials />
        </main>
    );
}
