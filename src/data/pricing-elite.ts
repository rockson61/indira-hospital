export interface PricingItem {
    id: string;
    procedure: string;
    category: string;
    range: string;
    minPrice: number;
    maxPrice: number;
    usaCost: string;
    ukCost?: string;
    uaeCost?: string;
    savings: string;
    description: string;
}

export const elitePricingBank: PricingItem[] = [
    {
        id: "robotic-piles",
        procedure: "Robotic Laser Piles Treatment",
        category: "Proctology",
        range: "₹65,000 - ₹1,20,000",
        minPrice: 65000,
        maxPrice: 120000,
        usaCost: "$8,500",
        ukCost: "£4,500",
        uaeCost: "$6,500",
        savings: "90%+",
        description: "Painless robotic-assisted laser ablation for permanent hemorrhoid relief."
    },
    {
        id: "robotic-knee",
        procedure: "Robotic Total Knee Replacement",
        category: "Orthopaedics",
        range: "₹1,85,000 - ₹3,40,000",
        minPrice: 185000,
        maxPrice: 340000,
        usaCost: "$45,000",
        ukCost: "£15,000",
        uaeCost: "$18,000",
        savings: "92%+",
        description: "AI-guided surgical precision with high-flex implants and rapid recovery protocol."
    },
    {
        id: "hip-replacement",
        procedure: "Total Hip Replacement",
        category: "Orthopaedics",
        range: "₹2,10,000 - ₹3,80,000",
        minPrice: 210000,
        maxPrice: 380000,
        usaCost: "$40,000",
        ukCost: "£14,000",
        uaeCost: "$17,000",
        savings: "91%+",
        description: "Advanced ceramic-on-polyethylene bearing surfaces for long-term joint durability."
    },
    {
        id: "cataract-premium",
        procedure: "Cataract Surgery (Premium IOL)",
        category: "Ophthalmology",
        range: "₹45,000 - ₹95,000",
        minPrice: 45000,
        maxPrice: 95000,
        usaCost: "$6,000",
        ukCost: "£3,500",
        uaeCost: "$5,000",
        savings: "85%+",
        description: "Advanced phacoemulsification with imported multifocal/toric lenses."
    },
    {
        id: "lap-hernia",
        procedure: "Laparoscopic Hernia Repair",
        category: "General Surgery",
        range: "₹55,000 - ₹95,000",
        minPrice: 55000,
        maxPrice: 95000,
        usaCost: "$12,000",
        ukCost: "£5,000",
        uaeCost: "$7,000",
        savings: "90%+",
        description: "Keyhole surgery with high-density mesh for minimal recurrence and fast discharge."
    },
    {
        id: "cabg-bypass",
        procedure: "Cardiac Bypass (CABG)",
        category: "Cardiology",
        range: "₹2,50,000 - ₹4,80,000",
        minPrice: 250000,
        maxPrice: 480000,
        usaCost: "$1,50,000",
        ukCost: "£25,000",
        uaeCost: "$35,000",
        savings: "95%+",
        description: "State-of-the-art open heart surgery with post-op care in dedicated cardiac ICUs."
    },
    {
        id: "kidney-transplant",
        procedure: "Kidney Transplant",
        category: "Nephrology",
        range: "₹6,50,000 - ₹9,50,000",
        minPrice: 650000,
        maxPrice: 950000,
        usaCost: "$2,50,000",
        ukCost: "£85,000",
        uaeCost: "$95,000",
        savings: "96%+",
        description: "Comprehensive transplant package including donor/recipient matching protocols."
    },
    {
        id: "ivf-cycle",
        procedure: "IVF / Infertility Cycle",
        category: "Gynaecology",
        range: "₹1,50,000 - ₹2,50,000",
        minPrice: 150000,
        maxPrice: 250000,
        usaCost: "$15,000",
        ukCost: "£6,000",
        uaeCost: "$8,000",
        savings: "85%+",
        description: "Advanced assisted reproductive technology with personalized hormonal protocols."
    },
    {
        id: "spine-disc",
        procedure: "Spinal Surgery (Disc)",
        category: "Neuro Surgery",
        range: "₹1,80,000 - ₹3,50,000",
        minPrice: 180000,
        maxPrice: 350000,
        usaCost: "$38,000",
        ukCost: "£12,000",
        uaeCost: "$15,000",
        savings: "90%+",
        description: "Microsurgical discectomy for nerve decompression and rapid pain relief."
    }
];

export const getPricingByProcedure = (procedureName: string) => {
    return elitePricingBank.find(p => 
        p.procedure.toLowerCase().includes(procedureName.toLowerCase()) || 
        procedureName.toLowerCase().includes(p.procedure.toLowerCase())
    );
};

export const getPricingByCategory = (category: string) => {
    return elitePricingBank.filter(p => p.category.toLowerCase() === category.toLowerCase());
};
