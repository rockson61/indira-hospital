export interface PricingItem {
  id: string;
  treatmentName: string;
  startingPrice: string; // "₹X,000"
  metroPrice: string;    // "₹Y,000" (Comparison)
  valueProp: string;     // e.g. "Save 60% vs. Bengaluru hospitals"
  includes: string[];   // What's in the price (Theatre, Nursing, etc.)
  highlight: boolean;
}

export const PRICING_DATA: PricingItem[] = [
  {
    id: "p-1",
    treatmentName: "Laser Piles Treatment",
    startingPrice: "₹35,000",
    metroPrice: "₹85,000",
    valueProp: "Day-care procedure with zero stitches. Save up to ₹50,000.",
    includes: ["Dual-Diode Laser", "One Day Room Stay", "Post-op Meds"],
    highlight: true
  },
  {
    id: "p-2",
    treatmentName: "Laparoscopic Hernia Repair",
    startingPrice: "₹45,000",
    metroPrice: "₹1,10,000",
    valueProp: "3D Mesh technology. Minimal scarring.",
    includes: ["Imported 3D Mesh", "General Anaesthesia", "2 Days Care"],
    highlight: true
  },
  {
    id: "p-3",
    treatmentName: "Knee Replacement (TKR)",
    startingPrice: "₹1,45,000",
    metroPrice: "₹3,50,000",
    valueProp: "Computer navigated precision. Save ₹2 Lakhs per joint.",
    includes: ["USFDA Approved Implant", "Physiotherapy", "Hepa-OT Fees"],
    highlight: true
  },
  {
    id: "p-4",
    treatmentName: "Laparoscopic Gallbladder",
    startingPrice: "₹55,000",
    metroPrice: "₹1,30,000",
    valueProp: "HD Laparoscopic removal. Expert surgical precision.",
    includes: ["HD Laparoscopy", "Pathology Lab", "1 Day Recovery"],
    highlight: false
  },
  {
    id: "p-5",
    treatmentName: "Coronary Angioplasty (PTCA)",
    startingPrice: "₹95,000",
    metroPrice: "₹2,20,000",
    valueProp: "24/7 Primary Stenting. High-end drug eluting stents.",
    includes: ["USFDA Drug Stent", "Cath Lab Fees", "2 Days ICU"],
    highlight: true
  },
  {
    id: "p-6",
    treatmentName: "Single Sitting Root Canal",
    startingPrice: "₹4,500",
    metroPrice: "₹9,500",
    valueProp: "Laser-assisted disinfection. Save on multiple visits.",
    includes: ["Rotary Endodontics", "Laser Scan", "X-Ray Digitals"],
    highlight: false
  },
  {
    id: "p-7",
    treatmentName: "Cataract Surgery (Phaco)",
    startingPrice: "₹25,000",
    metroPrice: "₹65,000",
    valueProp: "Micro-incision, stitch-less. Premium Foldable IOL.",
    includes: ["Foldable IOL", "Anaesthesia Drops", "Zero-Stitch Care"],
    highlight: false
  },
  {
    id: "p-8",
    treatmentName: "Kidney Stone Laser (RIRS)",
    startingPrice: "₹65,000",
    metroPrice: "₹1,45,000",
    valueProp: "Incision-less stone dusting. No external scars.",
    includes: ["Flexible RIRS", "Holmium Laser", "Stent Management"],
    highlight: true
  }
];
