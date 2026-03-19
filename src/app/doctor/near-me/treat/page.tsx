import HealthLibraryClient from "./HealthLibraryClient";
import EntityFAQs from "@/components/trust/EntityFAQs";
import EntityReviews from "@/components/trust/EntityReviews";

export default function HealthLibraryPage() {
    return (
        <>
            <HealthLibraryClient />
            
            {/* TRUST SIGNALS */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pb-32">
                <div className="grid lg:grid-cols-2 gap-16">
                    <EntityFAQs
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="diagnostics"
                        title="Treatment & Procedure FAQs"
                        description="Expert insights on recovery times, surgical prep, and clinical safety at Indira Hospital."
                    />
                    <EntityReviews
                        entityType="hospital"
                        entityName="Indira Hospital"
                        entitySlug="indira-hospital"
                        title="Patient Success Stories"
                        description="Hear from patients who underwent life-changing treatments at our super-speciality centers."
                    />
                </div>
            </section>
        </>
    );
}
