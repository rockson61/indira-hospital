export interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

export const generalFaqs: FAQItem[] = [
    {
        question: "How often should I visit the dentist?",
        answer: "Most dental professionals recommend visiting the dentist every six months for a check-up and professional cleaning. However, patients with specific dental conditions may need more frequent visits. At our clinic, we create personalized care plans based on your individual needs."
    },
    {
        question: "What should I do in case of a dental emergency?",
        answer: "For dental emergencies, contact our clinic immediately. For severe tooth pain, broken teeth, knocked-out teeth, or oral injuries, rinse with warm water, apply cold compress for swelling, and seek immediate dental care. Our clinic offers same-day emergency appointments whenever possible."
    },
    {
        question: "How can I improve my oral hygiene at home?",
        answer: "To maintain good oral hygiene: brush twice daily with fluoride toothpaste, floss daily, use an antimicrobial mouthwash, replace your toothbrush every 3-4 months, maintain a balanced diet low in sugary foods and drinks, and avoid tobacco products."
    },
    {
        question: "Are dental X-rays safe?",
        answer: "Modern dental X-rays are very safe, with minimal radiation exposure. Digital X-rays used at our clinic reduce radiation by up to 90% compared to traditional X-rays. We also use protective equipment like lead aprons."
    },
    {
        question: "What causes tooth sensitivity and how can it be treated?",
        answer: "Tooth sensitivity can be caused by enamel erosion, gum recession, tooth decay, cracked teeth, or teeth grinding. Treatments include desensitizing toothpaste, fluoride treatments, dental bonding, gum grafts, or root canal therapy depending on the cause."
    },
    {
        question: "What payment options do you offer?",
        answer: "Our dental clinic accepts various payment methods including cash, credit/debit cards, and major insurance plans. We also offer flexible payment plans and financing options to make dental care more affordable."
    },
    {
        question: "How long do dental implants last?",
        answer: "With proper care and maintenance, dental implants can last a lifetime. The implant itself (titanium post) has a success rate of over 95% at 10 years. The crown attached to the implant typically lasts 10-15 years before needing replacement."
    }
];

export const invisalignFaqs: FAQItem[] = [
    {
        question: "How does Invisalign work?",
        answer: "Invisalign uses a series of clear, custom-made aligners that gradually shift your teeth into the desired position. Each set of aligners is worn for about 1-2 weeks before moving to the next set in the series."
    },
    {
        question: "How long does Invisalign treatment take?",
        answer: "The average Invisalign treatment takes about 12-18 months, but this varies depending on the complexity of your case. Simple cases may be completed in as little as 6 months, while more complex cases might take up to 24 months."
    },
    {
        question: "Is Invisalign painful?",
        answer: "Invisalign is generally less painful than traditional braces. You may experience some discomfort or pressure for a few days when you start wearing a new set of aligners, which is a sign that they're working to move your teeth."
    },
    {
        question: "Can I eat and drink with Invisalign aligners?",
        answer: "You should remove your Invisalign aligners before eating or drinking anything other than water. This prevents staining of the aligners and damage from chewing."
    },
    {
        question: "How do I clean my Invisalign aligners?",
        answer: "Clean your aligners by brushing them gently with a soft toothbrush and lukewarm water. Avoid hot water, colored or scented soaps, and toothpaste, as these can damage or discolor the aligners."
    },
    {
        question: "How much does Invisalign cost?",
        answer: "Invisalign treatment typically costs between ₹50,000 and ₹1,50,000, depending on the complexity of your case. This is often 30-40% less expensive than in metropolitan cities."
    },
    {
        question: "What happens after Invisalign treatment is completed?",
        answer: "After completing Invisalign treatment, you'll need to wear retainers to maintain your new smile. Initially, you may need to wear retainers full-time, gradually transitioning to nighttime only."
    }
];

export const marketingFaqs: FAQItem[] = [
    {
        question: 'How quickly can I get an appointment?',
        answer: 'We reserve daily express slots for emergency cases and offer extended evening appointments for working professionals. Book online or call us, and our team will confirm within minutes.',
    },
    {
        question: 'Do you provide customised treatment plans for complex cases?',
        answer: 'Yes. Our multi-disciplinary board reviews implant, orthodontic, and smile design cases to align medical, functional, and aesthetic needs, then shares digital previews before we begin.',
    },
    {
        question: 'What precautions do you take for painless dentistry?',
        answer: 'We combine topical numbing gels, computer-aided local anaesthesia, conscious sedation options, and calming ambience to ensure a gentle experience from start to finish.',
    },
];

export const comprehensiveFaqs: FAQItem[] = [
    {
        question: "How often should I visit the dentist?",
        answer: "Most dental professionals recommend visiting the dentist every six months for a checkup and cleaning. However, some patients may need more frequent visits depending on their oral health needs. At Indira Dental Clinic, we customize your visit frequency based on your individual dental health requirements.",
        category: "General Care"
    },
    {
        question: "What should I do in case of a dental emergency?",
        answer: "If you experience a dental emergency such as severe pain, a broken tooth, or an infection, contact Indira Dental Clinic immediately at 7010650063. We offer emergency dental services to address urgent dental issues and provide prompt relief for dental emergencies in Vellore.",
        category: "Emergency Care"
    },
    {
        question: "How long does a dental implant procedure take?",
        answer: "The dental implant process typically takes several months from start to finish. This includes the initial consultation, implant placement surgery, healing period, and final restoration. The exact timeline varies based on individual factors. Dr. Rockson Samuel will provide a detailed timeline during your consultation.",
        category: "Dental Implants"
    },
    {
        question: "Is root canal treatment painful?",
        answer: "Modern root canal procedures are much more comfortable than their reputation suggests. With local anesthesia and advanced techniques, most patients experience little to no pain during the procedure. At Indira Dental Clinic, we use the latest pain management techniques to ensure your comfort.",
        category: "Root Canal Treatment"
    },
    {
        question: "How can I improve my smile?",
        answer: "There are many options for enhancing your smile, including teeth whitening, veneers, bonding, and orthodontic treatments. During a consultation at Indira Dental Clinic, Dr. Rockson Samuel will assess your needs and recommend the most appropriate treatments to achieve your desired smile.",
        category: "Cosmetic Dentistry"
    },
    {
        question: "What are the best dental clinics in Vellore?",
        answer: "Indira Dental Clinic is recognized as one of the best dental clinics in Vellore, offering top-notch services for patients seeking quality dental care. Dr. Rockson Samuel provides comprehensive dental services including root canal treatment, braces, implants, and dental fillings with state-of-the-art facilities.",
        category: "About Our Clinic"
    },
    {
        question: "How much do dental treatments cost in Vellore?",
        answer: "The cost of dental procedures at Indira Dental Clinic varies based on treatment type: Dental Implants (₹30,000 - ₹60,000), Root Canal Treatment (₹5,000 - ₹12,000), Braces (₹25,000 - ₹80,000), and Teeth Whitening (₹5,000 - ₹15,000). We offer competitive pricing and 50% savings compared to other cities.",
        category: "Pricing"
    },
    {
        question: "What services does Indira Dental Clinic offer?",
        answer: "We provide a comprehensive range of dental services including General Dentistry (checkups, fillings, preventive care), Cosmetic Dentistry (teeth whitening, veneers, crowns), Restorative Dentistry (implants, bridges, root canal treatment), and Emergency Dental Care for urgent issues like toothaches or broken teeth.",
        category: "Services"
    },
    {
        question: "Where is Indira Dental Clinic located?",
        answer: "Indira Dental Clinic is conveniently located at 3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006. Our central location makes us accessible to patients from all areas of Vellore, and we're easily reachable by public transport.",
        category: "Location"
    },
    {
        question: "How do I book an appointment at Indira Dental Clinic?",
        answer: "Booking an appointment is easy! You can call us at 7010650063, visit our contact page, or schedule online. We offer flexible appointment slots including weekends and emergency dental care services to accommodate your busy schedule.",
        category: "Appointments"
    }
];
