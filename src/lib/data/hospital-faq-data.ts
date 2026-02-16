export interface FAQItem {
    question: string;
    answer: string;
    category: string;
}



import { clinicConfig } from "./clinic-config";

export const hospitalFaqs: FAQItem[] = [
    {
        category: "General & Appointments",
        question: "How can I book an appointment?",
        answer: `You can book via WhatsApp at +91 70106 50063, by calling ${clinicConfig.phone}, or through our website. We also accept walk-in consultations during OPD hours.`
    },
    {
        category: "General & Appointments",
        question: "What are the hospital's visiting hours?",
        answer: "General visiting hours are daily from 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM. Only one visitor is allowed per patient in special wards. ICU visiting is strictly restricted."
    },
    {
        category: "Emergency",
        question: "Do you have 24/7 Emergency and Pharmacy services?",
        answer: "Yes, our Emergency Department, Trauma Center, Diagnostic Lab, and Pharmacy operate 24 hours a day, 7 days a week, including public holidays."
    },
    {
        category: "Billing & Insurance",
        question: "Which insurance providers do you work with?",
        answer: "We are empanelled with all major TPA and private insurance providers. We also support government health schemes like TNCMCHIS. Please visit our Insurance Desk in the lobby for more details."
    },
    {
        category: "Billing & Insurance",
        question: "Do you offer cashless treatment facilities?",
        answer: "Yes, cashless treatment is available for patients with valid insurance policies from our partner providers, subject to authorization from the TPA."
    },
    {
        category: "International Patients",
        question: "Do you provide support for international patients?",
        answer: "Absolutely. We have a dedicated International Patient Care team that assists with visa invitations, airport transfers, local accommodation, and language translation."
    },
    {
        category: "Specialties & Surgery",
        question: "What is your expertise in Laser surgery?",
        answer: "Indira Hospital is a pioneer in proctology and laparoscopic surgeries. We specialize in Laser Piles, Fistula, and Fissure treatments which offer faster recovery and minimal pain."
    },
    {
        category: "Specialties & Surgery",
        question: "Do you have a cardiac Cath Lab?",
        answer: "Yes, we have a state-of-the-art Flat Panel Digital Cath Lab for performing Angiography, Angioplasty, and Pacemaker implantations 24/7."
    },
    {
        category: "Diagnostics",
        question: "How long does it take to get scan reports?",
        answer: "Most routine Blood/Urine reports are available within 3-4 hours. MRI, CT, and Biopsy reports may take 24-48 hours depending on the complexity of the study."
    }
];
