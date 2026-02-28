import { Metadata } from "next";
import { getDoctors } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { DoctorCard } from "@/components/entities/DoctorCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "25+ Surgeons with 10,000+ Surgeries Each | Indira Hospital Vellore",
    description: "Don't risk your surgery with an inexperienced doctor. Our surgeons have performed 10,000+ procedures each. Book a free consultation today.",
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
            <PageHero
                title="Your Surgery Deserves a Surgeon Who's Done It 1,000+ Times"
                subtitle="25+ Verified Specialists"
                description="Every doctor at Indira has 10+ years of specialised experience. Your procedure isn't their first — it's their thousandth."
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
                    <div className="text-center text-slate-500 dark:text-slate-400 py-12">
                        <p className="text-xl">Loading doctor profiles...</p>
                    </div>
                )}
            </SectionContainer>

            <EntityFAQs
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-700"
            />

            <Testimonials />

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
