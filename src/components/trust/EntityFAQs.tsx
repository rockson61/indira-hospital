import { getFaqsByEntity } from "@/lib/api";
import { FAQSection } from "./FAQSection";
import { cn } from "@/lib/utils";

interface EntityFAQsProps {
 entityType: string;
 entityName: string;
 entitySlug?: string;
 title?: string;
 description?: string;
 className?: string;
 id?: string;
 items?: { question: string; answer: string }[];
}

/**
 * EntityFAQs - A universal server component to fetch and display 
 * SEO-optimized FAQs for any entity (Doctor, Service, Department, etc.)
 * Supports manual 'items' injection to override/supplement CMS data.
 */
export default async function EntityFAQs({
 entityType,
 entityName,
 entitySlug,
 title,
 description,
 className,
 id,
 items
}: EntityFAQsProps) {
 const fetchedFaqs = !items || items.length === 0 ? await getFaqsByEntity(entityType, entityName, entitySlug) : [];
 const faqs = items && items.length > 0 ? items : fetchedFaqs;

 if (!faqs || faqs.length === 0) {
 return null; // Don&apos;t render if no FAQs available
 }

 return (
 <>
 {/* FAQ SCHEMAS for Rich Result Snippets */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map((f: any) => ({
 "@type": "Question",
 "name": f.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": f.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for schema
 }
 }))
 })
 }}
 />
 <section id={id} className={cn("bg-[#FAFAFA] dark:bg-slate-950 py-16 px-6 lg:px-8 border-t border-slate-100 dark:border-slate-700", className)}>
 <div className="max-w-7xl mx-auto">
 <FAQSection
 title={title || `Frequently Asked Questions about ${entityName}`}
 description={description || `Find answers to common questions about ${entityName} at Indira Super Speciality Hospital.`}
 faqs={faqs.map((f: any) => ({ question: f.question, answer: f.answer }))}
 category={entityType}
 />
 </div>
 </section>
 </>
 );
}
