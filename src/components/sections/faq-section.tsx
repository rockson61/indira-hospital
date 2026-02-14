import { getFAQs } from "@/lib/api";
import { generalFaqs } from "@/lib/data/faq-data";
import { FAQAccordionClient } from "./faq-accordion-client";

export async function FAQSection() {
    let faqs: { question: string; answer: string }[] = [];

    try {
        const cmsFaqs = await getFAQs().catch(() => []);
        if (cmsFaqs.length > 0) {
            faqs = cmsFaqs.map((f: any) => ({
                question: f.question,
                answer: f.answer,
            }));
        }
    } catch {
        // CMS unavailable
    }

    // Fallback to local FAQ data
    if (!faqs.length && generalFaqs?.length) {
        faqs = generalFaqs.slice(0, 8).map((f) => ({
            question: f.question,
            answer: f.answer,
        }));
    }

    // Ultimate fallback
    if (!faqs.length) {
        faqs = [
            { question: "What are the visiting hours at Indira Hospital?", answer: "Visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM daily. ICU visiting is restricted. Emergency is open 24/7." },
            { question: "Does Indira Hospital accept health insurance?", answer: "Yes, we accept all major health insurance providers and offer cashless treatment facility." },
            { question: "How can I book an appointment?", answer: "You can book via WhatsApp at +91 70106 50063, by calling +91 98423 42525, or through our website." },
            { question: "What emergency services are available?", answer: "Our emergency department operates 24/7 with trauma specialists, ICU, ambulance services, and rapid response teams." },
        ];
    }

    return <FAQAccordionClient faqs={faqs} />;
}
