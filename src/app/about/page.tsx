import { Metadata } from "next";
import AboutClient from "./AboutClient";
import { SectionContainer } from "@/components/ui/section-container"
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
    title: "Best Multi-Speciality Hospital in Vellore — 35 Years of Trust | Indira Hospital",
    description: "Established in 1988, Indira Super Speciality Hospital is the most trusted healthcare destination in Vellore, Tamil Nadu. Delivering advanced, ethical, and compassionate quaternary care.",
    keywords: ["best hospital in Vellore", "Indira Hospital history", "top multi-speciality hospital Tamil Nadu", "NABH accredited hospital Vellore"],
    openGraph: {
        title: "About Us | Indira Super Speciality Hospital",
        description: "35 Years of Trust and Clinical Mastery in Vellore.",
        type: "website",
    },
    alternates: {
        canonical: "/about"
    }
};

export default function AboutPage() {
    return (
        <>
            <AboutClient />
            
            {/* TRUST SIGNALS */}
            <section className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16 px-6 lg:px-8">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="about"
                        title="Common Questions about Indira"
                        description="Learn more about our legacy, clinical standards, and 35-year history in Vellore."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="indira-hospital"
                        title="35 Years of Patient Stories"
                        description="Hear from some of the 50,000+ patients who have trusted us with their health."
                    />
                </div>
            </section>

            <SectionContainer className="pb-32">
                <InternalLinkGrid type="departments" title="Our Specialties" subtitle="Advanced Clinical Care" limit={8} className="bg-white dark:bg-slate-950 border rounded-[4rem]" />
                <InternalLinkGrid type="services" title="A-Z Procedures" subtitle="Surgical Excellence" limit={12} className="mt-12 bg-slate-50 dark:bg-slate-900/50 border rounded-[4rem]" />
            </SectionContainer>
        </>
    );
}
