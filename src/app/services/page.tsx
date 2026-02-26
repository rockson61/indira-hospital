import { Metadata } from "next";
import { getServices } from "@/lib/api";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { ServiceCard } from "@/components/entities/ServiceCard";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
    title: "All Medical Treatments & Services | Indira Super Speciality Hospital",
    description: "Explore over 150+ advanced medical treatments and surgical procedures offered by our expert doctors at Indira Super Speciality Hospital.",
};

export default async function ServicesDirectoryPage() {
    const services = await getServices().catch(() => []);

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Advanced Medical Treatments"
                subtitle="Comprehensive Care"
                description="Discover our extensive range of specialized treatments, cutting-edge procedures, and holistic healthcare services."
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
                    <div className="text-center text-slate-500 py-12">
                        <p className="text-xl">Loading healthcare services...</p>
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
