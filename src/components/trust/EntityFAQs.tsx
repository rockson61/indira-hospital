import { getFaqsByEntity } from "@/lib/api";
import { FAQSection } from "./FAQSection";

interface EntityFAQsProps {
    entityType: string;
    entityName: string;
    entitySlug?: string;
    title?: string;
    description?: string;
}

/**
 * EntityFAQs - A universal server component to fetch and display 
 * SEO-optimized FAQs for any entity (Doctor, Service, Department, etc.)
 */
export default async function EntityFAQs({
    entityType,
    entityName,
    entitySlug,
    title,
    description
}: EntityFAQsProps) {
    const faqs = await getFaqsByEntity(entityType, entityName);

    if (!faqs || faqs.length === 0) {
        return null; // Don't render if no FAQs available
    }

    return (
        <section className="bg-slate-50/50 dark:bg-slate-900/50 py-16 px-6 lg:px-8 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto">
                <FAQSection
                    title={title || `Frequently Asked Questions about ${entityName}`}
                    description={description || `Find answers to common questions about ${entityName} at Indira Super Speciality Hospital.`}
                    faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))}
                    category={entityType}
                />
            </div>
        </section>
    );
}
