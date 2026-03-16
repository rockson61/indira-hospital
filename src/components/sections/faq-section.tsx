import { getFaqsByEntity } from "@/lib/api";
import { siteConfig } from "@/config/site";
import { FAQAccordionClient } from "./faq-accordion-client";

/**
 * FAQSection - Home page specific FAQ section.
 * Uses getFaqsByEntity for 'general' hospital FAQs.
 */
export async function FAQSection() {
    let faqs: { question: string; answer: string }[] = [];

    try {
        // Fetch 'general' hospital FAQs from CMS or fall back to static
        const cmsFaqs = await getFaqsByEntity('general', 'hospital');
        if (cmsFaqs && cmsFaqs.length > 0) {
            faqs = cmsFaqs.map((f: any) => ({
                question: f.question,
                answer: f.answer,
            }));
        }
    } catch {
        // Silently fail for CMS
    }

    // Ultimate fallback if no data found
    if (!faqs.length) {
        faqs = [
            { question: "What are the visiting hours at Indira Hospital?", answer: "Visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM daily. ICU visiting is restricted. Emergency is open 24/7." },
            { question: "Does Indira Hospital accept health insurance?", answer: "Yes, we accept all major health insurance providers and offer cashless treatment facility." },
            { question: "How can I book an appointment?", answer: `You can book via WhatsApp at ${siteConfig.contact.whatsapp}, by calling ${siteConfig.contact.phone}, or through our website.` },
            { question: "What emergency services are available?", answer: "Our emergency department operates 24/7 with trauma specialists, ICU, ambulance services, and rapid response teams." },
        ];
    }

    return <FAQAccordionClient faqs={faqs} />;
}
