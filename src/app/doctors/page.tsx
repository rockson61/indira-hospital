import { Metadata } from "next";
import { getDoctors } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";
import { PeopleAlsoSearchCard } from "@/components/seo/PeopleAlsoSearchCard";

export const metadata: Metadata = {
    title: "Best Doctors in Vellore — Book Appointment with Top Specialist Surgeons | Indira Hospital",
    description: "Consult with 25+ board-certified surgeons and specialists at Indira Hospital, Vellore. Leading experts in laser & laparoscopic surgery in Tamil Nadu, India. Book your appointment today.",
    alternates: {
        canonical: "/doctors"
    }
};

export default async function DoctorsDirectoryPage() {
    const doctors = await getDoctors().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800">
            <JsonLdSchema
                type="itemList"
                name="Expert Doctors at Indira Hospital"
                items={doctors.map((d: any) => {
                    const dept = typeof d.department === 'string' ? d.department : d.department?.name || d.specialty || 'specialist';
                    const specialtySlug = dept.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return { name: d.name, url: `/doctor/${specialtySlug}/${d.slug}` };
                })}
            />
            <JsonLdSchema
                type="breadcrumb"
                items={[
                    { name: "Home", url: "/" },
                    { name: "Doctors", url: "/doctors" }
                ]}
            />
            <PageHero
                title="Best Doctors & Specialist Surgeons in Vellore"
                subtitle="Expert Care You Can Trust"
                description="Don't leave your health to chance. Our elite team of board-certified specialists and surgeons at Indira Hospital have successfully performed thousands of advanced procedures. Experience precise, ethical, and world-class healthcare."
                backgroundImage="/images/hospital/Consultation.webp"
            />

            <SectionContainer className="py-24 -mt-16 relative z-10 min-h-[50vh]">
                {doctors.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctors.map((doctor: any) => (
                            <DoctorCard key={doctor.slug || doctor.name} doctor={doctor} variant="grid" />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 dark:text-slate-400 py-12">
                        <p className="text-xl">Loading doctor profiles...</p>
                    </div>
                )}
            </SectionContainer>

            <HealthLibraryCard />

            <SectionContainer className="py-24 max-w-7xl mx-auto">
                <PeopleAlsoSearchCard
                    keywords={[
                        { text: "Best surgeons in Vellore", href: "/doctors" },
                        { text: "Top specialists in Tamil Nadu", href: "/doctors" },
                        { text: "Indira Hospital doctors list", href: "/doctors" },
                        { text: "Doctor consultation in Vellore", href: "/doctors" },
                        { text: "Same-day surgery specialists", href: "/doctors" },
                        { text: "Laparoscopic surgery experts", href: "/doctors" },
                    ]}
                />
            </SectionContainer>

            <EntityFAQs
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-700"
            />

            <EntityReviews
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                title="Verified Patient Experiences"
                description="Real stories from patients treated by our expert medical team."
                className="bg-slate-50 dark:bg-slate-900/50 py-24 border-t border-slate-100 dark:border-slate-700"
            />

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="services" title="Treatments We Offer" subtitle="Our Services" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <EntityCardSection type="departments" title="Browse by Department" subtitle="Centres of Excellence" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />
            <EntityCardSection type="locations" title="Find Us Near You" subtitle="Our Locations" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="All Treatments A-Z" subtitle="Services Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="departments" title="All Departments" subtitle="Department Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={16} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
        </main>
    );
}
