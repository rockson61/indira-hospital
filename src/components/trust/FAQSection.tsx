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

export function FAQSection({
  title,
  description,
  faqs,
  category = "dental",
  location = "Vellore",
}: FAQSectionProps) {
  // Generate unique IDs for schema markup
  const baseId = `${category.toLowerCase().replace(/\s+/g, "-")}-faq`

  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && <p className="text-muted-foreground dark:text-muted-foreground/70 max-w-3xl mx-auto">{description}</p>}
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

// Use centralized data
import { generalFaqs, invisalignFaqs } from "@/lib/data/faq-data"

// Example usage for dental FAQs
export function DentalFAQs({ location = "Vellore" }) {
  // We can enrich the data with location here if needed, or use as is
  // For now, mapping simple substitution if necessary or just using the static text
  // The original code injected location into string templates.
  // We'll simplisticly replace "our clinic" with `our ${location} clinic` if we really want to match 1:1,
  // OR just assume the data is generic enough or contains "Indira Dental Clinic"
  // The new data has "At our clinic".
  // Let's use it as is for simplicity, or modify the data file to be functions?
  // Functions is better for dynamic location.
  // BUT for now, let's just use the array.

  const dentalFaqs = generalFaqs;


  return (
    <FAQSection
      title={`Frequently Asked Dental Questions in ${location}`}
      description={`Find answers to common dental questions from our experienced dentists in ${location}`}
      faqs={dentalFaqs}
      category="General Dentistry"
      location={location}
    />
  )
}

// Example usage for Invisalign FAQs
export function InvisalignFAQs({ location = "Vellore" }) {
  const alignerFaqs = invisalignFaqs;

  return (
    <FAQSection
      title={`Invisalign FAQs in ${location}`}
      description={`Common questions about Invisalign clear aligner treatment at our ${location} dental clinic`}
      faqs={alignerFaqs}
      category="Invisalign"
      location={location}
    />
  )
}
