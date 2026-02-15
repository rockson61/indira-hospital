
export interface TechnologyItem {
    id: string;
    slug: string; // e.g., 'robotic-surgery'
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    image?: string; // Placeholder or path
}

export const TECHNOLOGY_DATA: TechnologyItem[] = [
    {
        id: "tech-1",
        slug: "robotic-surgery",
        title: "Advanced Robotic Surgery",
        shortDescription: "Minimally invasive precision with the da Vinci Surgical System.",
        fullDescription: "Our hospital works with the latest generation of robotic surgical systems, allowing surgeons to perform complex procedures with more precision, flexibility, and control than is possible with conventional techniques. Robotic surgery offers significant benefits including smaller incisions, less pain, and faster recovery times.",
        features: [
            "3D High-Definition Vision System",
            "EndoWrist Instruments with 7 degrees of freedom",
            "Tremor Filtration Technology",
            "Dual-Console Capability for collaborative surgery"
        ],
        benefits: [
            "Significantly less pain and blood loss",
            "Lower risk of infection",
            "Shorter hospital stay",
            "Quicker return to daily activities"
        ]
    },
    {
        id: "tech-2",
        slug: "mri-3-tesla",
        title: "3 Tesla MRI",
        shortDescription: "High-resolution imaging for accurate diagnosis.",
        fullDescription: "Our 3 Tesla MRI scanner provides twice the signal strength of standard 1.5T machines, resulting in exceptionally clear and detailed images. This is crucial for diagnosing complex neurological, musculoskeletal, and cardiac conditions.",
        features: [
            "Wide-bore design for patient comfort",
            "Silent Scan technology for reduced noise",
            "Advanced neuro-imaging capabilities",
            "Cardiac MRI dedicated protocols"
        ],
        benefits: [
            "Faster scan times",
            "Higher resolution images for small structures",
            "Reduced need for contrast agents",
            "Better detection of subtle lesions"
        ]
    },
    {
        id: "tech-3",
        slug: "ct-scan",
        title: "128 Slice CT Scan",
        shortDescription: "Ultra-fast, low-dose scanning technology.",
        fullDescription: "The 128 Slice CT scanner offers rapid imaging with reduced radiation exposure. It is capable of capturing high-quality images of the beating heart and coronary arteries within seconds, making it ideal for cardiac and emergency cases.",
        features: [
            "High-speed acquisition",
            "Low-dose radiation protocols",
            "Coronary Angiography capability",
            "3D Reconstruction software"
        ],
        benefits: [
            "Immediate diagnosis for trauma cases",
            "Non-invasive cardiac assessment",
            "Detailed vascular imaging",
            "Safe for pediatric patients"
        ]
    },
    {
        id: "tech-4",
        slug: "cath-lab",
        title: "Advanced Cath Lab",
        shortDescription: "State-of-the-art interventional cardiology suite.",
        fullDescription: "Our Flat Panel Digital Cath Lab is equipped for complex cardiac and neuro-interventions. It provides high-definition imaging for angioplasties, pacemaker implantations, and stroke interventions.",
        features: [
            "Live Stent Boost technology",
            "Rotablation console",
            "FFR/IVUS integration",
            "Digital Subtraction Angiography (DSA)"
        ],
        benefits: [
            "Precise stent placement",
            "Reduced radiation for patients/staff",
            "Comprehensive 24/7 cardiac care",
            "Minimal contrast usage"
        ]
    },
    {
        id: "tech-5",
        slug: "dialysis-unit",
        title: "Modern Dialysis Unit",
        shortDescription: "24/7 Hemodialysis with CRRT capabilities.",
        fullDescription: "Our Dialysis Unit features advanced hemodialysis machines for acute and chronic kidney failure management. We ensure strict infection control and offer bedside dialysis for ICU patients.",
        features: [
            "Online Hemodiafiltration (HDF)",
            "CRRT (Continuous Renal Replacement Therapy)",
            "Reverse Osmosis water treatment plant",
            "Isolated machines for seropositive patients"
        ],
        benefits: [
            "Effective toxin removal",
            "Hemodynamic stability during dialysis",
            "Comprehensive renal care",
            "Compassionate nursing staff"
        ]
    },
    {
        id: "tech-6",
        slug: "endoscopy",
        title: "Endoscopy Suite",
        shortDescription: "High-definition diagnostic and therapeutic endoscopy.",
        fullDescription: "The Endoscopy Suite is equipped for a full range of gastrointestinal procedures. From routine diagnostic scopies to complex ERCP and EUS interventions.",
        features: [
            "High-Definition Video Endoscopes",
            "Narrow Band Imaging (NBI) for early cancer detection",
            "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
            "Endoscopic Ultrasound (EUS) capability"
        ],
        benefits: [
            "Painless procedures with sedation",
            "Early detection of GI cancers",
            "Minimally invasive stone removal",
            "Day-care procedure options"
        ]
    },
    {
        id: "tech-7",
        slug: "modular-ot",
        title: "Modular Operation Theatres",
        shortDescription: "Infection-free surgical environment.",
        fullDescription: "Our Operation Theatres are designed with modular steel panels and laminar airflow systems to maintain a sterile environment. They are equipped with advanced anaesthesia workstations and surgical lights.",
        features: [
            "HEPA Filters with Laminar Airflow",
            "Anti-bacterial wall cladding",
            "Advanced Anaesthesia Workstations",
            "Integrated Video Systems"
        ],
        benefits: [
            "Near-zero infection rates",
            "Optimal environment for complex surgeries",
            "Enhanced patient safety",
            "Precise environmental control"
        ]
    },
    {
        id: "tech-8",
        slug: "nicu",
        title: "Level 3 NICU",
        shortDescription: "Advanced care for premature and critically ill newborns.",
        fullDescription: "Our Neonatal Intensive Care Unit (NICU) is a Level 3 facility capable of handling extreme preterm babies and complex neonatal conditions. It is staffed 24/7 by neonatologists.",
        features: [
            "High-frequency ventilators",
            "Giraffe incubators",
            "Bedside Echocardiography",
            "Phototherapy units"
        ],
        benefits: [
            "Highest level of neonatal care",
            "Support for very low birth weight babies",
            "Parent-friendly environment",
            "Comprehensive developmental monitoring"
        ]
    },
    {
        id: "tech-9",
        slug: "blood-bank",
        title: "24/7 Blood Bank",
        shortDescription: "Component separation and safe blood transfusion services.",
        fullDescription: "Our in-house licensed Blood Bank works round the clock to provide safe blood and blood components (Packed Cells, FFP, Platelets) for emergencies and surgeries.",
        features: [
            "Component Separation Unit",
            "NAT Testing (Nucleic Acid Testing) availability",
            "Apheresis collection facility",
            "Advanced cross-matching systems"
        ],
        benefits: [
            "Immediate availability for trauma/emergency",
            "High safety standards",
            "Platelet support for dengue/oncology",
            "Lifesaving support available 24/7"
        ]
    }
];

export const getTechnologyBySlug = (slug: string) => {
    return TECHNOLOGY_DATA.find(t => t.slug === slug);
};

export const getAllTechnologies = () => {
    return TECHNOLOGY_DATA;
};
