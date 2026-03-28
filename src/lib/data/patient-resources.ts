import { FileBox, Building, Plane, Globe, Compass, Wallet, Bus, ClipboardList, Shield, Sparkles } from "lucide-react";
import { Stethoscope, HeartCardiogram } from "healthicons-react/outline";

export interface PatientResource {
    id: string;
    slug: string;
    title: string;
    short_description: string;
    full_content: string;
    icon: any; // Lucide icon
    category: "Information" | "Travel" | "Billing" | "Concierge";
    customHref?: string;
}

export const PATIENT_RESOURCES: PatientResource[] = [
    // Patient Information Category
    {
        id: "appointment-checklist",
        slug: "appointment-checklist",
        title: "Appointment Checklist",
        short_description: "Everything you need to bring and prepare for your upcoming visit.",
        icon: ClipboardList,
        category: "Information",
        full_content: `
## What to Bring to Your Appointment

To ensure your visit to Indira Super Speciality Hospital goes smoothly, please bring the following items:
*   **A valid photo ID** (Aadhar Card, PAN Card, Passport, or Driving License).
*   **Your health insurance card** and any authorization letters if applicable.
*   **Previous medical records**, including lab results, X-rays, MRI scans, and doctor's notes.
*   A complete list of **current medications**, including doses and frequencies (or bring the pill bottles).
*   A list of questions or concerns you want to discuss with your doctor.

## Arrival Time
Please arrive at least **30 minutes prior** to your scheduled appointment time to complete any necessary registration paperwork or pre-consultation vitals checks.
`
    },
    {
        id: "admissions",
        slug: "admissions",
        title: "Admissions",
        short_description: "A guide to our hospital admission process and what to expect during your stay.",
        icon: Building,
        category: "Information",
        full_content: `
## The Admission Process

Welcome to Indira Super Speciality Hospital. Our admission process is designed to be as seamless and stress-free as possible. 

### Before Admission
*   Your doctor will provide an admission note.
*   Our admission counseling team will explain the estimated costs, room types available, and insurance verification process.
*   You will be asked to choose your preferred room category (General Ward, Semi-Private, Private, or Deluxe Suite).

### What to Bring for an Inpatient Stay
*   Comfortable clothing and non-slip footwear.
*   Basic toiletries (toothbrush, toothpaste, comb).
*   All current medications.
*   Relevant medical reports.

### What NOT to Bring
*   Large amounts of cash or valuable jewelry.
*   Outside food (unless medically approved, our dietary department provides all meals).
`
    },
    {
        id: "accessibility",
        slug: "accessibility",
        title: "Accessibility",
        short_description: "Information on wheelchair access, elevators, and accommodations for patients with disabilities.",
        icon: HeartCardiogram,
        category: "Information",
        full_content: `
## Commitment to Accessibility

Indira Super Speciality Hospital is fully committed to providing an accessible and inclusive environment for all our patients and visitors.

*   **Wheelchair Services:** Complimentary wheelchairs are available at the main entrance. Our security and porter staff are always ready to assist.
*   **Elevators:** Wide, stretcher-friendly elevators connect all floors of the hospital.
*   **Restrooms:** Specially designed barrier-free restrooms with grab bars and emergency call bells are located on every floor.
*   **Parking:** Designated disabled parking spaces are available near the main entrances for easy access.
*   **Sign Language & Vision Assistance:** Please inform the front desk if you require assistance with communication or navigation.
`
    },
    {
        id: "masking-policy",
        slug: "masking-policy",
        title: "Masking Policy",
        short_description: "Current infection control and masking guidelines for patients and visitors.",
        icon: Shield,
        category: "Information",
        full_content: `
## Current Infection Control Guidelines

Your safety is our highest priority. To protect our vulnerable patients and staff, we adhere to strict infection control protocols.

### Masking Requirements
*   **Clinical Areas:** Masks are highly recommended in all clinical areas, particularly in waiting rooms and wards.
*   **High-Risk Zones:** Medical-grade masks are **mandatory** when visiting the ICU, NICU, Dialysis Unit, and Oncology wards.
*   **Symptomatic Individuals:** If you have a cough, cold, fever, or any respiratory symptoms, wearing a mask is strictly mandatory throughout the hospital premises.

We provide standard surgical masks at the entrance and reception desks free of charge. Please practice regular hand sanitization using the dispensers located across the facility.
`
    },
    {
        id: "preparing-for-surgery",
        slug: "preparing-for-surgery",
        title: "Preparing for Surgery",
        short_description: "Important pre-operative instructions to ensure a safe and successful procedure.",
        icon: Stethoscope,
        category: "Information",
        full_content: `
## Pre-Operative Guidelines

Proper preparation is key to a successful surgery and rapid recovery. Please follow these general guidelines, alongside any specific instructions provided by your surgeon.

### The Day Before Surgery
*   **Fasting:** You must strictly follow the fasting rules (NPO) provided by your anesthetist. Usually, this means no food or drink (including water) after midnight.
*   **Hygiene:** Shower or bathe the night before or the morning of surgery to minimize infection risks. Do not apply lotions, creams, or makeup.
*   **Medications:** Take only the morning medications explicitly approved by your doctor with a tiny sip of water. Stop blood thinners as directed.

### The Morning of Surgery
*   Leave all jewelry, watches, and valuables at home.
*   Wear loose, comfortable clothing.
*   Arrive at the hospital at the designated reporting time to complete final pre-op checks.
`
    },
    {
        id: "planning-to-go-home",
        slug: "planning-to-go-home",
        title: "Planning to Go Home",
        short_description: "Discharge instructions and how to coordinate your transition home.",
        icon: Compass,
        category: "Information",
        full_content: `
## The Discharge Process

We want to ensure your transition from the hospital to your home is safe and well-coordinated.

### Discharge Timeline
*   Your primary doctor will conduct a final assessment during morning rounds to authorize your discharge.
*   The billing department will process your final bill. This can take 2-4 hours, especially if insurance approval is required.
*   Once the bill is settled, your nurse will provide you with a comprehensive discharge summary.

### Discharge Summary & Instructions
Your discharge summary will include:
*   A detailed summary of your hospital stay and treatments.
*   New prescriptions and instructions on how to take them.
*   Wound care or specific post-operative care instructions.
*   Follow-up appointment dates.
*   Emergency contact numbers.

Please arrange for a family member or friend to drive you home, especially if you have had surgery or sedation.
`
    },
    {
        id: "request-medical-records",
        slug: "request-medical-records",
        title: "Request Medical Records",
        short_description: "How to obtain copies of your medical history, test results, and discharge summaries.",
        icon: FileBox,
        category: "Information",
        full_content: `
## Procuring Your Medical Records

Patients have the right to access their medical records. To request a copy of your records from Indira Super Speciality Hospital:

### Online Request (Patient Portal)
The fastest way to access lab results, radiology reports, and discharge summaries is by logging into our secure Patient Portal.

### Physical Request
You can request hard copies of your records by visiting the Medical Records Department (MRD) on the ground floor.
*   You will need to fill out a Medical Record Request Form.
*   Bring a valid, government-issued photo ID.
*   If you are requesting records on behalf of a patient, you must provide a signed authorization letter from the patient and your own ID.

*Note: Processing physical record requests may take up to 48-72 hours. Nominal printing charges may apply for voluminous records.*
`
    },

    // Parking, Lodging & Travel Category
    {
        id: "international-patients",
        slug: "international-patients",
        title: "International Patients",
        short_description: "Dedicated support services for patients traveling from outside India for medical care.",
        icon: Globe,
        category: "Travel",
        customHref: "/patients/international",
        full_content: `
## International Patient Care

Indira Super Speciality Hospital welcomes patients from across the globe. We have a dedicated International Patient Services team to make your medical journey to India smooth and comfortable.

### Our Services Include:
*   **Pre-Arrival Consultations:** Tele-consultations to discuss treatment plans and cost estimates before you travel.
*   **Visa Assistance:** Providing medical visa invitation letters to expedite your travel documents.
*   **Airport Transfers:** Complimentary pick-up and drop-off from Chennai International Airport (MAA).
*   **Dedicated Relationship Manager:** A single point of contact to assist with appointments, billing, and everyday needs during your stay.
*   **Accommodation Assistance:** Help finding suitable lodging and guest houses near the hospital for patients and their families.
`
    },
    {
        id: "language-assistance",
        slug: "language-assistance",
        title: "Language Assistance",
        short_description: "Translation and interpretation services available for non-Tamil or non-English speaking patients.",
        icon: Globe,
        category: "Travel",
        full_content: `
## Language Interpretation Services

Clear communication between patients and doctors is critical for quality healthcare. We provide complimentary language assistance.

### Languages Supported
Our dedicated translators and multilingual staff can assist with:
*   English
*   Tamil
*   Telugu
*   Hindi
*   Malayalam
*   Bengali

If you require an interpreter for international languages (e.g., Arabic, French, Russian), please inform our International Patient Services team at least 48 hours prior to your appointment so we can arrange suitable translation support.
`
    },
    {
        id: "lodging",
        slug: "lodging",
        title: "Lodging",
        short_description: "Information on nearby hotels and guest houses for patients and families.",
        icon: Building,
        category: "Travel",
        full_content: `
## Accommodation Near the Hospital

When treatment requires an extended stay, having comfortable lodging nearby is important for the patient's family. 

### Partner Guest Houses
We have tie-ups with several clean, safe, and affordable guest houses situated within walking distance of Indira Super Speciality Hospital. These offer amenities like Wi-Fi, laundry, and home-cooked meals.

### Nearby Hotels
There are multiple hotels ranging from budget to premium categories within a 2-kilometer radius of the hospital in Vellore.

Please contact our Help Desk for a curated list of recommended accommodations and to access special hospital-negotiated corporate tariffs.
`
    },
    {
        id: "parking",
        slug: "parking",
        title: "Parking",
        short_description: "Details on patient and visitor parking options at our campus.",
        icon: Bus,
        category: "Travel",
        full_content: `
## Campus Parking Guidelines

Indira Super Speciality Hospital provides secure, ample parking space for our patients and visitors.

*   **Valet Parking:** For your convenience, complimentary valet parking is available at the main entrance.
*   **Visitor Parking:** A dedicated multi-level parking facility is located on the campus. Nominal hourly rates apply.
*   **Disabled Parking:** Reserved spots for individuals with disabilities are located immediately adjacent to the main entrance and emergency department.
*   **Ambulance Bay:** 24/7 dedicated zones are reserved strictly for ambulance entries and drop-offs.

Please ensure you park only in designated slots to avoid obstructing emergency vehicles.
`
    },
    {
        id: "transportation",
        slug: "transportation",
        title: "Transportation",
        short_description: "Options for getting to and from the hospital, including public transit and hospital transport.",
        icon: Bus,
        category: "Travel",
        full_content: `
## Getting to Indira Hospital

Our campus in Vellore is well-connected and easily accessible by various modes of transport.

*   **Taxis & Auto Rickshaws:** Easily available throughout the city. Ola and Uber services operate efficiently in the area.
*   **Public Bus:** Several local bus routes stop directly opposite the hospital gates.
*   **Intercity Transit:** The Katpadi Railway Station is approximately 15 minutes away by taxi, providing excellent rail connectivity.
*   **Hospital Shuttle/Ambulance:** If a patient requires stretcher transport or is immobile, please call our emergency hotline to arrange a pick-up via our advanced life support ambulances.
`
    },
    {
        id: "travel-assistance",
        slug: "travel-assistance",
        title: "Travel Assistance",
        short_description: "Help with booking tickets, local travel, and coordinating your journey.",
        icon: Plane,
        category: "Travel",
        full_content: `
## Travel & Concierge Support

We understand that coordinating travel logistics while managing a medical condition can be challenging.

Our in-house Travel Desk can assist out-of-town patients and their relatives with:
*   Booking or rescheduling train and flight tickets.
*   Arranging local taxi rentals for travel within Vellore or outstation trips (e.g., airport drops to Chennai or Bengaluru).
*   Providing local city maps and guidance.

Visit the Travel Desk located in the main lobby, open daily from 9:00 AM to 6:00 PM.
`
    },
    {
        id: "visiting-our-main-campus",
        slug: "visiting-our-main-campus",
        title: "Visiting Our Main Campus",
        short_description: "Visiting hours, navigation maps, and campus amenities like cafeterias and pharmacies.",
        icon: Building,
        category: "Travel",
        full_content: `
## Campus Visitor Guide

We welcome visitors, as the support of family and friends is vital to recovery. 

### General Visiting Hours
*   **Wards / Private Rooms:** 10:00 AM – 12:00 PM and 4:00 PM – 7:00 PM.
*   **ICU / Critical Care:** Strict, limited visiting times (usually 11:00 AM to 11:30 AM and 5:00 PM to 5:30 PM). Only one visitor is permitted at a time.
*   *Children below the age of 12 are generally not permitted in inpatient wards for infection control reasons.*

### Campus Amenities
*   **24/7 Pharmacy:** Located on the ground floor near the Emergency Room.
*   **Cafeteria / Food Court:** Serving hygienic vegetarian and non-vegetarian meals and snacks.
*   **ATM:** Available in the main lobby.
*   **Prayer Room:** Quiet, multi-faith spaces dedicated for prayer and reflection.
`
    },

    // Billing & Insurance Category
    {
        id: "accepted-insurance",
        slug: "accepted-insurance",
        title: "Accepted Insurance",
        short_description: "A list of health insurance providers we partner with for cashless hospitalization.",
        icon: Shield,
        category: "Billing",
        customHref: "/patients/insurance",
        full_content: `
## Health Insurance Partners

Indira Super Speciality Hospital is empaneled with major public and private health insurance providers and Third-Party Administrators (TPAs) to offer cashless hospitalization services.

### Major Empaneled Providers Include:
*   Star Health & Allied Insurance
*   HDFC ERGO General Insurance
*   ICICI Lombard General Insurance
*   Care Health Insurance (formerly Religare)
*   Niva Bupa Health Insurance
*   United India Insurance
*   New India Assurance
*   National Insurance
*   Oriental Insurance

*We also actively participate in leading government health schemes like the Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS).*

Please bring your valid insurance ID card/e-card and Government ID (Aadhar/Pan Card) at the time of admission. To confirm specifics regarding your policy coverage, please visit our Insurance Desk prior to admission.
`
    },
    {
        id: "financial-assistance",
        slug: "financial-assistance",
        title: "Financial Assistance",
        short_description: "Information about charity care, government schemes, and financial aid programs.",
        icon: Wallet,
        category: "Billing",
        full_content: `
## Support for Your Healthcare Needs

We believe that quality healthcare should be accessible. For patients facing financial hardship, we offer guidance on various assistance programs.

### Government Schemes
We are an authorized provider for several state and central government healthcare schemes designed to support below-poverty-line (BPL) individuals with free or heavily subsidized tertiary care surgeries and treatments.

### EMI & Financing Options
For planned surgeries or expensive treatments not covered by insurance, our billing desk can connect you with associated healthcare financing partners (like Bajaj Finserv) to arrange EMIs and medical loans with minimal documentation.

For evaluation, please reach out to our medical social worker or financial counseling department.
`
    },
    {
        id: "frequently-asked-questions",
        slug: "frequently-asked-questions",
        title: "Frequently Asked Questions",
        short_description: "Find quick answers to common questions about billing, insurance, and medical records.",
        icon: Shield,
        category: "Billing",
        full_content: `
## Patient Resources FAQs

### What forms of payment do you accept?
We accept Cash, major Credit/Debit Cards (Visa, Mastercard, RuPay), UPI (GPay, PhonePe, Paytm), and Demand Drafts.

### Why did I receive a bill when I have cashless insurance?
Cashless insurance typically does not cover non-medical items (e.g., registration charges, specific consumables, diet). These "copay" or "non-admissible" amounts must be paid out-of-pocket by the patient at the time of discharge as per IRDA guidelines.

### Can I get an estimate before my surgery?
Yes. Our financial counselors will provide a detailed cost estimate outlining expected charges for surgery, room rent, pharmacy, and diagnostics. Please note this is an estimate and actual bills may vary based on clinical outcomes and length of stay.

### When do I need to pay a deposit?
For self-paying patients, an initial deposit is required at the time of admission. Further deposits may be requested during your stay if the bill exceeds the deposited amount.

### How do I get a copy of my final bill?
A detailed final bill will be provided to you at discharge. If your insurance processed a cashless claim, you will receive a copy of the bill with the insurance approval clearly documented.
`
    },
    {
        id: "pay-your-bill-online",
        slug: "pay-your-bill-online",
        title: "Pay Your Bill Online",
        short_description: "Securely pay your hospital bills or advance deposits through our payment portal.",
        icon: Wallet,
        category: "Billing",
        customHref: "/pay-bill",
        full_content: `
## Secure Online Payments

For your convenience, Indira Super Speciality Hospital offers a secure online payment gateway for settling bills, paying consultation fees, or making advance deposits.

### How to Pay
1. Visit our online payment portal via the hospital website.
2. Enter your unique **UHID (Unique Hospital Identification Number)** or **IP Number (Inpatient Number)**.
3. Review the pending amount.
4. Select your preferred payment method (Credit Card, Debit Card, Net Banking, or UPI).
5. Upon successful payment, an e-receipt will be instantly generated and emailed/SMS'd to you.

*All transactions are securely encrypted. Do not share your OTPs or passwords with anyone.*
`
    },

    // Elite Concierge & Hospitality Category
    {
        id: "elite-concierge",
        slug: "elite-concierge",
        title: "Elite Concierge Services",
        short_description: "Experience premium hospitality with a dedicated healthcare relationship manager.",
        icon: Sparkles,
        category: "Concierge",
        customHref: "/patients/concierge",
        full_content: `
## Elite Patient Concierge
At Indira Super Speciality Hospital, we believe that clinical excellence should be matched by world-class hospitality. Our Elite Concierge service ensures that every aspect of your stay is comfortable, dignified, and stress-free.

### Personalized Relationship Management
Upon choosing our Elite care path, you are assigned a dedicated Relationship Manager who will:
*   Coordinate all appointments and diagnostic schedules.
*   Handle insurance and billing documentation.
*   Arrange for premium room upgrades and specialized dietary requirements.
*   Provide a single point of contact for your family throughout the treatment journey.

### Premium Amenities
*   **Luxury Suites**: Artistically designed rooms with companion stay facilities.
*   **Gourmet Dining**: Nutritious, chef-curated meals tailored to your clinical needs and preferences.
*   **Fast-Track Services**: Minimal waiting times for all administrative and clinical processes.
`
    },
    {
        id: "international-concierge",
        slug: "international-concierge",
        title: "International Assistance",
        short_description: "Bespoke support for our global patients, including visa and travel coordination.",
        icon: Globe,
        category: "Concierge",
        customHref: "/patients/international",
        full_content: `
## Global Patient Support
We welcome patients from across the world with specialized services designed to make international travel for healthcare simple and safe.
*   **Visa Invitation Letters**: Rapid processing of medical visa documents.
*   **Airport Concierge**: Seamless pick-up and drop-off from Chennai/Bengaluru airports.
*   **Language Interpreters**: Dedicated translators for Arabic, French, and local dialects.
`
    }
];

export const getResourceByCategory = (category: PatientResource['category']) => {
    return PATIENT_RESOURCES.filter(resource => resource.category === category);
};

export const getResourceBySlug = (slug: string) => {
    return PATIENT_RESOURCES.find(resource => resource.slug === slug);
};
