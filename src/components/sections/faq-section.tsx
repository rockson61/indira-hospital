"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What are the visiting hours at Indira Super Speciality Hospital?",
        answer: "Visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM daily. ICU visiting is restricted to specific time slots. Emergency department is open 24/7.",
    },
    {
        question: "Does Indira Hospital accept health insurance?",
        answer: "Yes, we accept all major health insurance providers and offer cashless treatment facility. Our insurance desk helps patients with claim processing and documentation.",
    },
    {
        question: "How can I book an appointment at Indira Hospital?",
        answer: "You can book an appointment via WhatsApp at +91 70106 50063, by calling +91 98423 42525, or through our website. Walk-in appointments are also available.",
    },
    {
        question: "What emergency services are available?",
        answer: "Our emergency department operates 24/7 with trauma specialists, a fully-equipped ICU, ambulance services, and rapid response teams. We handle all types of medical emergencies including cardiac, trauma, and surgical emergencies.",
    },
    {
        question: "Where is Indira Super Speciality Hospital located?",
        answer: "Indira Super Speciality Hospital is located at Katpadi Road, Vellore, Tamil Nadu 632004. We are easily accessible from Chennai (135 km), Bengaluru (200 km), and surrounding districts.",
    },
    {
        question: "What specialities does Indira Hospital offer?",
        answer: "We offer 10+ specialities including General Surgery (Laser Piles, Laparoscopic), Cardiology (Cath Lab), Orthopaedics, Spine Surgery, Gastroenterology, Urology, Gynecology, Oncology, Nephrology, and ICU & Emergency services.",
    },
    {
        question: "Is laser treatment for piles available at Indira Hospital?",
        answer: "Yes, we offer advanced Laser Piles Treatment — a painless, minimally invasive day-care procedure. Patients can walk in and walk out the same day with minimal recovery time.",
    },
    {
        question: "Does Indira Hospital have a Cath Lab for cardiac procedures?",
        answer: "Yes, we have an advanced Cath Lab facility for cardiac procedures including coronary angiography, angioplasty, pacemaker implantation, and other interventional cardiology procedures.",
    },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "shadow-lg shadow-brand-100/50 border-brand-200" : "hover:border-gray-300"}`}>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                aria-expanded={isOpen}
            >
                <span className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-brand-700" : "text-gray-900"}`}>
                    {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-600" : "text-gray-400"}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white relative">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-4">
                        <HelpCircle className="w-4 h-4" />
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Have Questions? We Have Answers
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
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

                {/* Trust note */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        Still have questions?{" "}
                        <a
                            href="https://wa.me/917010650063?text=Hi%2C%20I%20have%20a%20question%20about%20Indira%20Hospital."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 font-semibold hover:text-green-700"
                        >
                            Chat with us on WhatsApp →
                        </a>
                    </p>
                </div>
            </div>

            {/* FAQ JSON-LD — rendered inline */}
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
