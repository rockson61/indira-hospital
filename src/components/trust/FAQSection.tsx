import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQSectionProps {
  title: string
  description?: string
  faqs: FAQItem[]
  category?: string
  location?: string
}

/**
 * FAQSection - Standardized UI component for displaying FAQs with SEO Schema.
 */
export function FAQSection({
  title,
  description,
  faqs,
  category = "general",
  location = "Vellore",
}: FAQSectionProps) {
  // Generate unique IDs for schema markup
  const baseId = `${category.toLowerCase().replace(/\s+/g, "-")}-faq`

  return (
    <div className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading font-black text-slate-900 tracking-tight mb-3">{title}</h2>
        {description && <p className="text-slate-500 font-medium max-w-3xl mx-auto">{description}</p>}
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent>
              {typeof faq.answer === "string" ? (
                <p className="text-muted-foreground dark:text-muted-foreground/70">{faq.answer}</p>
              ) : (
                faq.answer
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq, index) => ({
              "@type": "Question",
              name: faq.question,
              id: `${baseId}-question-${index}`,
              acceptedAnswer: {
                "@type": "Answer",
                text: typeof faq.answer === "string" ? faq.answer : "Please visit our website for the detailed answer.",
                id: `${baseId}-answer-${index}`,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
