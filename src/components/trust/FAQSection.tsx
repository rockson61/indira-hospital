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
 <div className="text-center mb-12">
 <h2 className="elite-section-title mb-4">{title}</h2>
 {description && <p className="text-slate-500 dark:text-slate-400 font-light italic max-w-3xl mx-auto text-lg">{description}</p>}
 </div>

 <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem 
 key={index} 
 value={`item-${index}`} 
 className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-900 dark:bg-slate-900"
 >
 <AccordionTrigger className="text-left font-bold text-[15px] sm:text-base text-slate-900 dark:text-white px-5 sm:px-6 py-5 hover:no-underline hover:text-fuchsia-600 dark:hover:text-fuchsia-400">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="px-5 sm:px-6 pb-6 pt-0">
 {typeof faq.answer === "string" ? (
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{faq.answer}</p>
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
