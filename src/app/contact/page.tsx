import { SectionContainer } from "@/components/ui/section-container"
import React from "react";
import EntityReviews from "@/components/trust/EntityReviews";
import EntityFAQs from "@/components/trust/EntityFAQs";
import { ContactFormClient } from "@/components/forms/ContactFormClient";
import { Metadata } from "next";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
    title: "Contact Us | Multi-Speciality Care in Vellore | Indira Hospital",
    description: "Get in touch with Indira Super Speciality Hospital, Vellore. Available 24/7 for appointments, emergency trauma care, and healthcare inquiries. Contact our expert team today.",
    alternates: {
        canonical: "/contact"
    }
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-800 selection:bg-fuchsia-200 selection:text-fuchsia-900 pb-20">
            <JsonLdSchema
                type="breadcrumb"
                items={[
                    { name: "Home", url: "/" },
                    { name: "Contact", url: "/contact" }
                ]}
            />
            <ContactFormClient />

            {/* TRUST SIGNALS */}
            <SectionContainer className="max-w-7xl mx-auto py-24 border-t border-slate-100 dark:border-slate-800">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="insurance"
                        title="Logistical & Billing FAQs"
                        description="Questions about appointments, insurance desks, and visiting hours at Indira Hospital."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="indira-hospital"
                        title="Patient Feedback"
                        description="Real patient experiences with our support and administration."
                    />
                </div>
            </SectionContainer>
        </main>
    );
}
