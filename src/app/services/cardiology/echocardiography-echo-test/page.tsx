import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Echocardiography (Echo Test) – Heart Ultrasound | Indira Hospital Vellore",
    description: "Echocardiography (Echo Test) at Indira Hospital, Vellore. Advanced 2D, 3D and Doppler Echo to accurately assess heart function, valves, and structure. Same-day reports.",
    keywords: ["Echocardiography Vellore", "Echo test heart Vellore", "2D Echo Vellore", "Doppler echo heart", "Heart ultrasound cost Vellore", "Cardiologist Vellore"]
};

export default function EchocardiographyPage() {
    return (
        <SubServiceTemplate
            departmentName="Cardiology"
            departmentSlug="cardiology"
            title="Echocardiography (Echo Test)"
            eyebrow="Cardiac Imaging"
            description={
                <p>
                    An <strong>Echocardiogram (Echo)</strong> is a non-invasive ultrasound of the heart that gives your cardiologist a real-time view of how well your heart is pumping, the condition of all four valves, and the thickness of the heart walls. It is the single most informative cardiac investigation available without radiation.
                </p>
            }
            quickFacts={[
                { label: "Cost", value: "₹2,000 – ₹5,000", icon: "IndianRupee" },
                { label: "Duration", value: "20-30 Mins", icon: "Clock" },
                { label: "Radiation", value: "Zero (Ultrasound)", icon: "ShieldCheck" },
                { label: "Report", value: "Same Day", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "echo-types",
                        heading: "Types of Echo Available at Indira Hospital",
                        description: "We perform all major modalities of echocardiography, each indicated for specific clinical conditions:",
                        table: {
                            headers: ["Type", "Best For", "Special Feature"],
                            rows: [
                                ["2D Echo", "Routine cardiac screening", "Clear structural images"],
                                ["Doppler Echo", "Blood flow & valve assessment", "Measures velocity & pressure"],
                                ["3D Echo", "Complex valve disease", "360° volumetric view"],
                                ["Stress Echo", "Exercise-induced ischemia", "Dynamic heart assessment"],
                                ["TEE (Trans-oesophageal)", "Detailed valve structure", "Superior image clarity"],
                            ],
                            caption: "All Echo types available at our Cardiac Imaging Lab, Vellore."
                        }
                    },
                    {
                        id: "indications",
                        heading: "When is an Echo Recommended?",
                        bullets: [
                            "Chest pain or shortness of breath of unknown cause",
                            "Suspected heart valve disease (stenosis or regurgitation)",
                            "Heart failure with reduced ejection fraction (HFrEF)",
                            "Monitoring after a heart attack to assess damage",
                            "Evaluation before major surgery",
                            "Family history of hypertrophic cardiomyopathy",
                            "Palpitations or unexplained fainting (syncope)"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Do I need to fast before an Echo test?",
                        answer: "No fasting is required for a standard transthoracic echocardiogram. However, a Transesophageal Echo (TEE) requires 6 hours fasting as sedation is given."
                    },
                    {
                        question: "What is a normal Ejection Fraction (EF)?",
                        answer: "A normal EF is 55-65%. An EF below 40% indicates reduced heart function (heart failure) and requires medical management."
                    }
                ]
            }}
            timeline={{
                title: "What to Expect During Your Echo",
                steps: [
                    { title: "Preparation", description: "Lie on your left side on the exam table. No special preparation needed for standard echo.", duration: "2 Mins" },
                    { title: "Gel Application", description: "A warm gel is applied to your chest for optimal ultrasound transmission.", duration: "1 Min" },
                    { title: "Scanning", description: "The sonographer moves the probe over your chest. You may be asked to breathe in or hold your breath briefly.", duration: "20-25 Mins" },
                    { title: "Report", description: "Our cardiologist analyses the images and provides a detailed report with findings and recommendations.", duration: "Same Day" }
                ]
            }}
            relatedServices={{
                serviceSlug: "cardiology",
                related: [
                    { title: "Coronary Angiography", href: "/services/cardiology/coronary-angiography-guide" },
                    { title: "Preventive Heart Checkup", href: "/services/cardiology/preventive-heart-checkup" },
                    { title: "Heart Angioplasty", href: "/services/cardiology/heart-angioplasty-procedure" }
                ]
            }}
            reviews={{
                entityName: "Cardiology Care",
                entitySlug: "cardiology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Advanced Cardiac Imaging at Indira Hospital</h2>
                <p>
                    Our Cardiac Imaging Lab is equipped with high-resolution <strong>GE Vivid</strong> and <strong>Philips EPIQ</strong> echo machines capable of 2D, 3D, Doppler, and Strain Imaging. Our certified sonographers and cardiologists deliver accurate, actionable reports that guide your treatment plan.
                </p>

                <h3>What Does an Echo Reveal?</h3>
                <p>A comprehensive echocardiogram provides information about:</p>
                <ul>
                    <li><strong>Ejection Fraction (EF):</strong> How well the left ventricle pumps blood with each beat.</li>
                    <li><strong>Valve Function:</strong> Detects leaky (regurgitant) or narrowed (stenotic) valves.</li>
                    <li><strong>Wall Motion:</strong> Areas of the heart not contracting due to old heart attack damage.</li>
                    <li><strong>Pericardial Effusion:</strong> Fluid around the heart.</li>
                    <li><strong>Congenital Defects:</strong> Holes in the heart (ASD, VSD) and other structural abnormalities.</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/10 dark:to-sky-900/10 rounded-[2.5rem] border border-blue-100 dark:border-blue-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-blue-300 mb-6 tracking-tight">Cardiology Lab Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Advanced 3D / 4D Echo Machines",
                            "Experienced Cardiac Sonographers",
                            "Same-Day Digital Reports",
                            "Cashless Insurance Accepted"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Insurance</h2>
                <p>
                    An Echo test at Indira Hospital costs as low as <strong>₹2,000</strong> for a basic 2D echo. 3D and stress echo may cost more. We are empanelled with all major insurance providers for cashless claims.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
