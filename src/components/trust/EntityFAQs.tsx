import { FAQSection } from "./FAQSection";
import { cn } from "@/lib/utils";
import { comprehensiveFaqs } from "@/lib/data/faq-data";
import { SEED_DATA } from "@/lib/data/seed-data";

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

function getFaqsByEntitySync(type: string, name: string, slug?: string) {
  let finalFaqs: any[] = [];
  
  // 1. Try Slug Matches
  if (slug) {
    const slugMatches = (comprehensiveFaqs as any[]).filter(f => f.relatedSlugs?.includes(slug));
    if (slugMatches.length > 0) finalFaqs = [...slugMatches];

    if (type === 'doctor') {
      const doc = SEED_DATA.doctors.find((d: any) => d.slug === slug);
      if (doc?.faqs && doc.faqs.length > 0) {
        finalFaqs = [...finalFaqs, ...doc.faqs];
      }
    }
  }

  // 2. Try Category Matches
  const typeMatches = (comprehensiveFaqs as any[]).filter(f => 
    f.category?.toLowerCase() === type.toLowerCase() || 
    f.category?.toLowerCase() === name.toLowerCase()
  );
  finalFaqs = [...finalFaqs, ...typeMatches];

  // 3. De-duplicate by question
  const uniqueFaqs = Array.from(new Map(finalFaqs.map(item => [item.question, item])).values());

  // 4. Fill up to 8 with General FAQs
  if (uniqueFaqs.length < 8) {
    const general = comprehensiveFaqs.filter(f => f.category === "General");
    const combined = [...uniqueFaqs, ...general];
    const finalUnique = Array.from(new Map(combined.map(item => [item.question, item])).values());
    return finalUnique.slice(0, 8);
  }

  return uniqueFaqs.slice(0, 8);
}

/**
 * EntityFAQs - A universal synchronous component to display 
 * SEO-optimized FAQs for any entity (Doctor, Service, Department, etc.)
 * Supports manual 'items' injection to override/supplement data.
 * Synchronous execution ensures Client Component compatibility in Next.js 16/React 19.
 */
export default function EntityFAQs({
  entityType,
  entityName,
  entitySlug,
  title,
  description,
  className,
  id,
  items
}: EntityFAQsProps) {
  const faqs = items && items.length > 0 ? items : getFaqsByEntitySync(entityType, entityName, entitySlug);

  if (!faqs || faqs.length === 0) {
    return null; // Don't render if no FAQs available
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
