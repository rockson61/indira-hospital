import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
