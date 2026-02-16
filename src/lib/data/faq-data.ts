export interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

export const generalFaqs: FAQItem[] = [
    {
        question: "What are the hospital visiting hours?",
        answer: "Our standard visiting hours are from 10:00 AM to 1:00 PM and 4:00 PM to 7:00 PM. However, for critical care units, visiting is restricted to specific times provided by the nursing station.",
        category: "General"
    },
    {
        question: "How do I book an appointment at Indira Hospital?",
        answer: "You can book an appointment by calling our 24/7 helpline at 098423 24425, visiting our website's booking portal, or simply sending us a message on WhatsApp. We offer both physical and tele-consultation options.",
        category: "Appointments"
    },
    {
        question: "Do you offer emergency services 24/7?",
        answer: "Yes, our Emergency and Trauma Care department is fully functional 24/7 with a dedicated team of doctors, nurses, and advanced life-support ambulances.",
        category: "Emergency"
    },
    {
        question: "What insurance plans and TPAs do you accept?",
        answer: "We are empanelled with major insurance providers including Star Health, Aditya Birla, HDFC Ergo, and ICICI Lombard. We also support various government health schemes. Please check with our insurance desk for cashless eligibility.",
        category: "Insurance"
    },
    {
        question: "Is there an in-house pharmacy and lab?",
        answer: "Yes, we have a 24/7 in-house pharmacy and a fully automated diagnostic laboratory providing rapid and accurate test results.",
        category: "Facilities"
    },
    {
        question: "What is the process for international patients?",
        answer: "We have a dedicated International Patient Services desk that assists with visa invitations, airport transfers, local accommodation, and language interpretation to ensure a seamless healthcare journey.",
        category: "International"
    }
];

export const cardiologyFaqs: FAQItem[] = [
    {
        question: "What are the signs of a heart attack?",
        answer: "Common signs include chest pain or pressure, shortness of breath, pain in the jaw, neck or back, and feeling weak or lightheaded. If you experience these, seek emergency medical care immediately.",
        category: "Cardiology"
    },
    {
        question: "What is an Angioplasty?",
        answer: "Angioplasty is a minimally invasive procedure used to open blocked coronary arteries and restore blood flow to the heart muscle. It often involves the placement of a stent.",
        category: "Cardiology"
    }
];

export const surgeryFaqs: FAQItem[] = [
    {
        question: "Is laparoscopic surgery better than open surgery?",
        answer: "Laparoscopic (minimally invasive) surgery generally offers faster recovery, less pain, and smaller scars compared to traditional open surgery. However, the choice depends on the specific medical condition.",
        category: "Surgery"
    },
    {
        question: "How long is the recovery after laser piles treatment?",
        answer: "Laser piles treatment is a day-care procedure. Most patients can return to light activities within 24-48 hours and resume full work in 3-5 days.",
        category: "Surgery"
    }
];

export const nephrologyFaqs: FAQItem[] = [
    {
        question: "How often do I need dialysis if I have kidney failure?",
        answer: "Most patients with end-stage renal disease require dialysis three times a week, with each session lasting about 4 hours, though this is tailored to individual needs.",
        category: "Nephrology"
    }
];

export const comprehensiveFaqs: FAQItem[] = [
    ...generalFaqs,
    ...cardiologyFaqs,
    ...surgeryFaqs,
    ...nephrologyFaqs
];
