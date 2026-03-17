import { Metadata } from "next";
import { PatientResources } from "@/components/sections/patient-resources";
import { PageHero } from "@/components/ui/page-hero";
import { CTASection } from "@/components/sections/cta";
import { SectionContainer } from "@/components/ui/section-container";
import { CheckCircle2 } from "lucide-react";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { EntityCardSection } from "@/components/seo/EntityCardSection";

export const metadata: Metadata = {
    title: "Patient Resources | Indira Super Speciality Hospital",
    description: "Access important information, billing details, travel assistance, and comprehensive resources for patients visiting Indira Super Speciality Hospital.",
};

const guidePoints = [
    "Comprehensive guides on preparing for your first visit or admission.",
    "Seamless billing and insurance claim assistance with detailed FAQs.",
    "Travel, lodging, and transport information for outstation patients.",
    "Access your medical records and track your scheduled appointments."
];

export default function PatientsHubPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PageHero
                title="Patient Resources in Vellore"
                subtitle="Everything you need for a smooth, stress-free healthcare experience at Indira Super Speciality Hospital, Tamil Nadu."
            />

            {/* Introduction Section */}
            <SectionContainer className="py-16">
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                        Your Care Journey Starts Here
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        At Indira Super Speciality Hospital, we believe that informed patients make the best decisions about their health.
                        We&apos;ve consolidated all the necessary tools and information you need into one convenient hub to help you focus on what truly matters—your healing.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {guidePoints.map((point, idx) => (
                            <div key={idx} className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400 flex-shrink-0" />
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>

            {/* Resources Grid */}
            <div className="-mt-12">
                <PatientResources hideViewAll={true} />
            </div>

            {/* ENTITY CARD SECTIONS */}
            <EntityCardSection type="doctors" title="Our Expert Doctors" subtitle="Meet Our Specialists" limit={6} className="bg-white dark:bg-slate-900 border-t" />

            {/* COMPACT SEO LINK STRIPS */}
            <InternalLinkGrid type="services" title="Treatments & Procedures" subtitle="Clinical Services" limit={12} className="bg-slate-50 dark:bg-slate-900/50 border-t" />
            <InternalLinkGrid type="diagnostics" title="Diagnostic Tests" subtitle="Lab & Imaging" limit={12} className="bg-white dark:bg-slate-900 border-t" />
            <InternalLinkGrid type="health-packages" title="Health Checkups" subtitle="Preventive Care" limit={8} className="bg-slate-50 dark:bg-slate-900/50 border-t" />

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
