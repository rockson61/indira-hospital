import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Cardiac Bypass Surgery (CABG) Cost & Guide | Indira Hospital Vellore",
    description: "Coronary Artery Bypass Grafting (CABG) at Indira Super Speciality Hospital, Vellore. Expert cardiac surgeons, affordable cost, and excellent post-operative care.",
    keywords: ["Bypass surgery Vellore", "CABG cost Tamil Nadu", "Heart bypass hospital Vellore", "Open heart surgery Vellore", "Cardiac surgeon Vellore"]
};

export default function CardiacBypassPage() {
    return (
        <SubServiceTemplate
            departmentName="Cardiology"
            departmentSlug="cardiology"
            title="Cardiac Bypass Surgery (CABG)"
            eyebrow="Cardiac Surgery"
            description={
                <p>
                    <strong>Coronary Artery Bypass Grafting (CABG)</strong> is the gold-standard surgical procedure for treating severe coronary artery disease (CAD) with multiple blocked arteries. By creating new pathways for blood flow using healthy grafts, CABG relieves angina, prevents heart attacks, and dramatically improves quality of life.
                </p>
            }
            quickFacts={[
                { label: "Cost Package", value: "₹2.5L – ₹4.5L", icon: "IndianRupee" },
                { label: "Duration", value: "4–6 Hours", icon: "Clock" },
                { label: "Hospital Stay", value: "7–10 Days", icon: "Activity" },
                { label: "Success Rate", value: ">98%", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "cabg-vs-angioplasty",
                        heading: "CABG vs. Angioplasty — Which is Right for You?",
                        description: "Our cardiologist will help determine the best revascularization strategy for your specific anatomy and risk profile:",
                        table: {
                            headers: ["Feature", "Angioplasty (PCI)", "Bypass Surgery (CABG)"],
                            rows: [
                                ["Incision", "Minimally Invasive (Wrist)", "Open-Chest Surgery"],
                                ["Recovery", "1–5 Days", "6–8 Weeks"],
                                ["Best For", "1–2 Vessel Disease", "3-Vessel / Left Main Disease"],
                                ["Repeat Procedure", "Higher Chance", "Much Lower (10yr)"],
                                ["Diabetics", "Less Preferred", "Preferred (Better Survival)"]
                            ],
                            caption: "Decision guided by SYNTAX Score and Heart Team conference at Indira Hospital."
                        }
                    },
                    {
                        id: "graft-types",
                        heading: "Types of Bypass Grafts Used",
                        bullets: [
                            "Internal Mammary Artery (IMA/LIMA) — Gold standard; lasts 15+ years",
                            "Radial Artery Graft — Long durability; superior for younger patients",
                            "Saphenous Vein Graft — Widely used; versatile for multiple bypasses",
                            "Off-pump (Beating Heart) CABG — Reduces risk in high-risk patients",
                            "Minimally Invasive CABG (MIDCAB) — Smaller incision for single-vessel disease"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Can bypass surgery be done via keyhole (MIDCAB)?",
                        answer: "Yes, selected patients are candidates for Minimally Invasive Direct CABG (MIDCAB), which avoids full sternotomy. Our cardiac surgeons evaluate each patient's anatomy to determine eligibility."
                    },
                    {
                        question: "How long do bypass grafts last?",
                        answer: "Arterial grafts (LIMA/Radial) typically last 15-20+ years. Vein grafts may develop disease over 10-15 years. Our team monitors with stress tests and Echo annually."
                    }
                ]
            }}
            timeline={{
                title: "CABG Journey at Indira Hospital",
                steps: [
                    { title: "Heart Team Review", description: "Angiography images reviewed by cardiologist + cardiac surgeon for SYNTAX scoring.", duration: "Day 1" },
                    { title: "Pre-operative Work-up", description: "ECG, Echo, PFT, blood work, anesthesia fitness clearance.", duration: "Day 1–2" },
                    { title: "Surgery", description: "CABG performed under general anesthesia. On/Off-pump based on anatomy.", duration: "4–6 Hours" },
                    { title: "ICU Recovery", description: "Monitored in Cardiac ICU; ventilator usually removed within 6–8 hours.", duration: "2–3 Days" },
                    { title: "Ward Recovery & Discharge", description: "Physiotherapy, wound care, and cardiac rehab counseling before discharge.", duration: "5–7 Days" }
                ]
            }}
            relatedServices={{
                serviceSlug: "cardiology",
                related: [
                    { title: "Heart Angioplasty", href: "/services/cardiology/heart-angioplasty-procedure" },
                    { title: "Coronary Angiography", href: "/services/cardiology/coronary-angiography-guide" },
                    { title: "Heart Valve Replacement", href: "/services/cardiology/heart-valve-replacement-surgery" }
                ]
            }}
            reviews={{
                entityName: "Cardiology Care",
                entitySlug: "cardiology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Expert Cardiac Surgeons in Vellore</h2>
                <p>
                    Indira Hospital's cardiac surgery department is equipped with a state-of-the-art <strong>Modular Operation Theatre</strong> with full cardiopulmonary bypass support. Our cardiac surgeons have collectively performed thousands of bypass procedures with outstanding outcomes.
                </p>

                <h3>When is Bypass Surgery Recommended?</h3>
                <ul>
                    <li><strong>Triple Vessel Disease:</strong> All three main coronary arteries are significantly blocked.</li>
                    <li><strong>Left Main Disease:</strong> Blockage in the left main coronary artery (the "widow maker").</li>
                    <li><strong>Diabetics with Multivessel CAD:</strong> CABG has proven superior long-term survival vs. stenting in diabetics.</li>
                    <li><strong>Failed Angioplasty:</strong> Where previous stents have re-narrowed (restenosis).</li>
                    <li><strong>Combined with Valve Surgery:</strong> Patients needing both bypass and valve repair simultaneously.</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10 rounded-[2.5rem] border border-red-100 dark:border-red-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-red-300 mb-4 tracking-tight">Why Choose Indira Hospital for Bypass?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Beating-Heart (Off-Pump) CABG Available",
                            "NABH Accredited Cardiac ICU",
                            "0% EMI and Cashless Insurance",
                            "Dedicated Cardiac Rehab Program"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Insurance</h2>
                <p>
                    CABG surgery at Indira Hospital starts at <strong>₹2.5 Lakhs</strong>, inclusive of surgeon fees, ICU stay, and initial physiotherapy. We accept all government schemes including Ayushman Bharat, CGHS, and 50+ private insurers.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
