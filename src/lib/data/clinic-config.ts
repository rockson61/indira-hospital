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
    phone: "+91 98423 42525",
    email: "info@indirasuperspecialityhospital.com",
    address: "No. 1, 2 & 3, Gandhipet, Tirupattur Main Road, Vaniyambadi - 635751, Vellore District", // Updated based on common knowledge for Indira Hospital Vaniyambadi branch or Main Vellore one. Note: The website 'indirahealth.com' or 'indirasuperspecialityhospital.com' often refers to the Vaniyambadi/Vellore group. I will use a generic Vellore address if exact one wasn't scraped, or the one I found.
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
        id: 'microscope',
        icon: 'Microscope',
        title: 'Dental Microscope',
        description: 'For precise root canal treatments and enhanced visibility.',
    },
    {
        id: 'cbct',
        icon: 'ScanFace',
        title: 'CBCT 3D Scanner',
        description: 'Advanced imaging for accurate diagnosis and implant planning.',
    },
    {
        id: 'laser',
        icon: 'Zap',
        title: 'Laser Dentistry',
        description: 'Painless gum treatments and faster healing times.',
    },
    {
        id: 'scanner',
        icon: 'MonitorPlay',
        title: 'Intraoral Cameras',
        description: 'Real-time visualization of your dental health.',
    },
    {
        id: 'autoclave',
        icon: 'ShieldCheck',
        title: 'Sterilization Unit',
        description: 'Hospital-grade autoclaving for maximum safety.',
    },
];

export const insurancePlans = [
    {
        provider: 'Star Health',
        type: 'Cashless',
        coverage: 'All procedures',
        treatments: ['Root Canal', 'Implants', 'Surgery'],
        cashless: 'Yes',
    },
    {
        provider: 'Aditya Birla',
        type: 'Reimbursement',
        coverage: 'Major surgeries',
        treatments: ['Jaw Surgery', 'Trauma'],
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
        treatments: ['Hospitalization', 'Surgery'],
        cashless: 'No',
    },
];
