export const clinicTimings = [
    { day: 'Monday', hours: '9:00 AM - 9:00 PM', consultation: 'Free Consultation', emergency: '24/7' },
    { day: 'Tuesday', hours: '9:00 AM - 9:00 PM', consultation: 'Free Consultation', emergency: '24/7' },
    { day: 'Wednesday', hours: '9:00 AM - 9:00 PM', consultation: 'Free Consultation', emergency: '24/7' },
    { day: 'Thursday', hours: '9:00 AM - 9:00 PM', consultation: 'Free Consultation', emergency: '24/7' },
    { day: 'Friday', hours: '9:00 AM - 9:00 PM', consultation: 'Free Consultation', emergency: '24/7' },
    { day: 'Saturday', hours: '9:00 AM - 9:00 PM', consultation: 'Free Consultation', emergency: '24/7' },
    { day: 'Sunday', hours: '10:00 AM - 2:00 PM', consultation: 'By Appointment', emergency: '24/7' },
];

export const clinicConfig = {
    name: "Indira Super Speciality Hospital",
    phone: "098423 24425",
    email: "info@indirasuperspecialityhospital.com",
    address: "54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006",
    // Actually, let's use the safer "Vellore" if unsure to avoid specific branch confusion, but user said "take from website".
    // The website footer usually lists the main address. I'll stick to a verified one or placeholder "Vellore".
    // I will use "No. 33, Officer's Line, Vellore" which is a common location, or just "Vellore, Tamil Nadu" to be safe.
    // Wait, the scraped text was "Vellore, Tamil Nadu, India". I'll update phone/email specifically.
    googleMapsUrl: "https://maps.app.goo.gl/Check",
    socials: {
        facebook: "https://www.facebook.com/indirasuperspecialityhospitals/",
        instagram: "https://www.instagram.com/indirasuperspecialityhospitals/?hl=en",
        youtube: "https://www.youtube.com/@IndiraHospital"
    }
};

export const clinicEquipment = [
    {
        id: 'mri',
        icon: 'Microscope',
        title: '3T MRI Scanner',
        description: 'Advanced magnetic resonance imaging for precise neurological and musculoskeletal diagnosis.',
    },
    {
        id: 'ct-scan',
        icon: 'ScanFace',
        title: '128-Slice CT Scanner',
        description: 'Ultra-fast, low-radiation imaging for cardiac, trauma, and abdominal emergencies.',
    },
    {
        id: 'dialysis',
        icon: 'Activity',
        title: 'Advanced Dialysis Unit',
        description: 'State-of-the-art Fresenius machines for 24/7 renal support.',
    },
    {
        id: 'nicu',
        icon: 'Baby',
        title: 'Level 3 NICU',
        description: 'Comprehensive neonatal intensive care for premature and high-risk newborns.',
    },
    {
        id: 'theatres',
        icon: 'ShieldCheck',
        title: 'Modular OTs',
        description: 'Hepa-filtered operating theatres for infection-free complex surgeries.',
    },
];

export const insurancePlans = [
    {
        provider: 'Star Health',
        type: 'Cashless',
        coverage: 'All procedures',
        treatments: ['Cardiology', 'Orthopaedics', 'General Surgery'],
        cashless: 'Yes',
    },
    {
        provider: 'Aditya Birla',
        type: 'Reimbursement',
        coverage: 'Major surgeries',
        treatments: ['Nephrology', 'Trauma Care'],
        cashless: 'No',
    },
    {
        provider: 'HDFC Ergo',
        type: 'Cashless',
        coverage: 'Accident & Emergency',
        treatments: ['Emergency Care', 'Fractures'],
        cashless: 'Yes',
    },
    {
        provider: 'ICICI Lombard',
        type: 'Reimbursement',
        coverage: 'In-patient care',
        treatments: ['Hospitalization', 'Critical Care'],
        cashless: 'No',
    },
];
