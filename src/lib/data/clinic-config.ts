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
    phone: "+91 098423 24425",
    email: "info@indirasuperspecialityhospital.com",
    address: "54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006",
    googleMapsUrl: "https://maps.app.goo.gl/Check",
    socials: {
        facebook: "https://www.facebook.com/indirasuperspecialityhospitals/",
        instagram: "https://www.instagram.com/indirasuperspecialityhospitals/?hl=en",
        youtube: "https://www.youtube.com/@IndiraHospital"
    },
    branches: [
        { name: "Gandhi Nagar", address: "54, Katpadi Main Rd, Gandhi Nagar, Vellore", phone: "+91 098423 24425" },
        { name: "Konavattam", address: "Bangalore Road, Konavattam, Vellore", phone: "+91 94433 34425" },
        { name: "Saidapet", address: "Saidapet, Vellore", phone: "+91 94437 24425" },
    ]
};

export const clinicFacilities = [
    "24 Hrs Hitech in house Laboratory",
    "Digital X-Ray / ECG (Electro Cardiogram)",
    "ECHO / Holter / Treadmill",
    "Nuclear Medicine (In Process)",
    "USG / CT Scan",
    "24 Hrs Pharmacy / 24 Hrs ICU",
    "Endoscopy / Colonoscopy",
    "Lithotripsy / Dialysis Facility",
    "24 Hrs Qualified Doctors / Nurses",
    "Ambulance Services",
    "State of the art Modular Operation Theatres"
];

export const insurancePartners = [
    // Health Insurance Companies (Public & Private)
    "Star Health and Allied Insurance",
    "Care Health Insurance (Religare)",
    "HDFC ERGO Health Insurance",
    "ICICI Lombard General Insurance",
    "Niva Bupa Health Insurance (Max Bupa)",
    "Aditya Birla Health Insurance",
    "Bajaj Allianz General Insurance",
    "Reliance General Insurance",
    "Tata AIG General Insurance",
    "SBI General Insurance",
    "Cholamandalam MS General Insurance",
    "Future Generali India Insurance",
    "IFFCO Tokio General Insurance",
    "ManipalCigna Health Insurance",
    "Navi General Insurance",
    "National Insurance Company",
    "New India Assurance",
    "Oriental Insurance Company",
    "United India Insurance",
    "Kotak Mahindra General Insurance",
    "Royal Sundaram General Insurance",
    "Universal Sompo General Insurance",
    "Acko General Insurance",
    "Digit Insurance (Go Digit)",
    "Magma HDI General Insurance",
    "Raheja QBE General Insurance",
    "Liberty General Insurance",

    // TPAs (Third Party Administrators)
    "MDIndia Health Insurance TPA",
    "Medi Assist Healthcare Services",
    "Vidal Health TPA (TTK)",
    "Paramount Health Services & TPA",
    "Family Health Plan Insurance TPA (FHPL)",
    "Raksha Health Insurance TPA",
    "HealthIndia Insurance TPA",
    "Heritage Health Insurance TPA",
    "Ericson Insurance TPA",
    "Genins India Insurance TPA",
    "Vipul MedCorp Insurance TPA",
    "Good Health Insurance TPA",
    "Safeway Insurance TPA",

    // Government / specific schemes
    "Chief Minister Comprehensive Health Insurance Scheme (CMCHIS)",
    "Employee Health Scheme (EHS)",
    "Pensioners Health Insurance Scheme",
    "Co-Operative Society Health Insurance Scheme",
    "Ayushman Bharat (PM-JAY)",
    "ESI (Employees' State Insurance)"
];

export const clinicEquipment = [
    {
        id: 'xray',
        title: 'Digital X-Ray',
        description: 'Advanced digital radiography for high-resolution imaging with minimal radiation exposure.',
    },
    {
        id: 'ct-scan',
        title: 'USG / CT Scan',
        description: 'High-speed 128-slice CT and advanced ultrasound mapping for precise diagnostics.',
    },
    {
        id: 'dialysis',
        title: 'Dialysis Facility',
        description: 'Modern renal support unit providing 24/7 life-sustaining dialysis treatments.',
    },
    {
        id: 'ot',
        title: 'Modular OTs',
        description: 'State-of-the-art modular operating theatres with Hepa-filters for sterile surgical environments.',
    },
    {
        id: 'icu',
        title: '24 Hrs ICU',
        description: 'Fully equipped intensive care units with advanced life support and continuous monitoring.',
    },
];

export const insurancePlans = [
    { provider: 'MD India Insurance', type: 'Cashless', coverage: 'Full', cashless: 'Yes', treatments: ['All Procedures'] },
    { provider: 'Star Health', type: 'Cashless', coverage: 'Full', cashless: 'Yes', treatments: ['All Procedures'] },
    { provider: 'HDFC ERGO', type: 'Cashless', coverage: 'Full', cashless: 'Yes', treatments: ['All Procedures'] },
    { provider: 'Reliance General', type: 'Cashless', coverage: 'Full', cashless: 'Yes', treatments: ['All Procedures'] },
];
