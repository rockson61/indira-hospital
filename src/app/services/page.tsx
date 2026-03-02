import { Metadata } from "next";
import { getServices } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";
import { HealthLibraryCard } from "@/components/sections/HealthLibraryCard";

export const metadata: Metadata = {
    title: "150+ Treatments with Same-Day Discharge | Indira Hospital Vellore",
    description: "Laser piles, laparoscopic hernia, kidney stone removal & more — at half the metro cost. 15,000+ successful surgeries. Get a free cost estimate today.",
};

export default async function ServicesDirectoryPage() {
    const services = await getServices().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800">
            <JsonLdSchema
                type="itemList"
                name="Medical Treatments & Services at Indira Hospital"
                items={services.map((s: any) => ({ name: s.title || s.name, url: `/doctor/near-me/treat/${s.slug}` }))}
            />
            <PageHero
                title="Surgeries That Get You Home Tonight"
                subtitle="150+ Same-Day Procedures"
                description="Why spend a week recovering when you could be home tonight? Laser & laparoscopic procedures at half the metro cost — with 50+ cashless insurance options."
                backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
            />

            <SectionContainer className="py-24 -mt-16 relative z-10 min-h-[50vh]">
                {services.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service: any) => (
                            <ServiceCard key={service.slug || service.id} service={service} variant="detail" />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-500 dark:text-slate-400 py-12">
                        <p className="text-xl">Loading healthcare services...</p>
                    </div>
                )}
            </SectionContainer>

            <HealthLibraryCard />

            <EntityFAQs
                entityType="hospital"
                entityName="Indira Hospital"
                entitySlug="indira-hospital"
                className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-700"
            />

            <Testimonials />

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <EntityCardSection type="departments" title="Browse by Department" subtitle="Centres of Excellence" limit={6} className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50" />
            <EntityCardSection type="locations" title="Available Near You" subtitle="Our Locations" limit={6} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="doctors" title="All Doctors A-Z" subtitle="Doctors Directory" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
            <InternalLinkGrid type="departments" title="All Departments" subtitle="Department Directory" limit={12} className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700" />
            <InternalLinkGrid type="locations" title="All Locations" subtitle="Location Directory" limit={16} className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50" />
        </main>
    );
}
