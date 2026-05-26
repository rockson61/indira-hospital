"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FAQAccordionClientProps {
 faqs: { question: string; answer: string }[];
}

function FAQItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
 return (
 <div className={`border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "shadow-lg shadow-primary-100/50 border-primary-200" : "hover:border-gray-300"}`}>
 <button
 onClick={onToggle}
 className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
 aria-expanded={isOpen}
 >
 <h3 className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-primary-700" : "text-gray-900 dark:text-white"}`}>
 {faq.question}
 </h3>
 <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-600" : "text-gray-400"}`} />
 </button>
 <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
 <div className="overflow-hidden">
 <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
 {faq.answer}
 </p>
 </div>
 </div>
 </div>
 );
}

export function FAQAccordionClient({ faqs }: FAQAccordionClientProps) {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="py-24 bg-white dark:bg-slate-900 relative">
 <div className="mx-auto max-w-4xl px-6 lg:px-8">
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
 <HelpCircle className="w-4 h-4" />
 Frequently Asked Questions
 </div>
 <h2 className="elite-section-title text-gray-900 dark:text-white">
 Have Questions? We Have Answers
 </h2>
 <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
 Get quick answers about our services, treatments, and hospital facilities.
 </p>
 </div>

 <div className="space-y-3">
 {faqs.map((faq, index) => (
 <FAQItem
 key={index}
 faq={faq}
 isOpen={openIndex === index}
 onToggle={() => setOpenIndex(openIndex === index ? null : index)}
 />
 ))}
 </div>

 <div className="mt-10 text-center">
 <p className="text-sm text-gray-500 dark:text-gray-400">
 Still have questions?{" "}
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I have a question about Indira Hospital.")}`}
 target="_blank"
 rel="noopener noreferrer"
 className="text-green-600 font-semibold hover:text-green-700"
 >
 Chat with us on WhatsApp →
 </a>
 </p>
 </div>
 </div>

 {/* FAQ JSON-LD */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((faq) => ({
 "@type": "Question",
 name: faq.question,
 acceptedAnswer: {
 "@type": "Answer",
 text: faq.answer,
 },
 })),
 }),
 }}
 />
 </section>
 );
}
