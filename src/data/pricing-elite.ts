export interface PricingItem {
    id: string;
    procedure: string;
    category: string;
    range: string;
    minPrice: number;
    maxPrice: number;
    usaCost?: string;
    savings?: string;
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
        savings: "92%+",
        description: "AI-guided surgical precision with high-flex implants and rapid recovery protocol."
    },
    {
        id: "cataract-premium",
        procedure: "Cataract Surgery (Premium IOL)",
        category: "Ophthalmology",
        range: "₹45,000 - ₹95,000",
        minPrice: 45000,
        maxPrice: 95000,
        usaCost: "$6,000",
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
        savings: "96%+",
        description: "Comprehensive transplant package including donor/recipient matching protocols."
    },
    {
        id: "lasik-eye",
        procedure: "LASIK Eye Surgery",
        category: "Ophthalmology",
        range: "₹35,000 - ₹75,000",
        minPrice: 35000,
        maxPrice: 75000,
        usaCost: "$4,500",
        savings: "85%+",
        description: "Blade-less laser vision correction for total independence from glasses."
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
