import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Heart Valve Replacement Surgery Guide | Indira Hospital Vellore",
    description: "Advanced Heart Valve Replacement Surgery at Indira Super Speciality Hospital, Vellore. Expert cardiac surgeons offering mechanical and biological valve options.",
    keywords: ["Heart valve replacement Vellore", "Cardiac surgery hospital", "Valve surgery cost", "Open heart surgery Vellore", "Mitral aortic valve"]
};

export default function HeartValveReplacementSurgeryPage() {
    return (
        <SubServiceTemplate
      departmentName="Cardiology"
      departmentSlug="cardiology"
            title="Heart Valve Replacement Surgery"
            eyebrow="Cardiac Surgery Excellence"
            description={
                <p>
                    Indira Super Speciality Hospital offers advanced <strong>Heart Valve Replacement</strong> surgery using both mechanical and biological prostheses. Our cardiac surgery team restores normal valve function to prevent heart failure and improve quality of life.
                </p>
            }
            quickFacts={[
                { label: "Cost Range", value: "₹2.5L – ₹4.5L", icon: "IndianRupee" },
                { label: "Duration", value: "3-5 Hours", icon: "Clock" },
                { label: "ICU Stay", value: "2-3 Days", icon: "Activity" },
                { label: "Success Rate", value: "97%+", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "valve-types",
                        heading: "Mechanical vs. Biological Valves",
                        description: "Choosing the right valve type is a lifelong decision made with your surgeon:",
                        table: {
                            headers: ["Feature", "Mechanical Valve", "Biological (Tissue) Valve"],
                            rows: [
                                ["Durability", "25-30+ Years", "10-15 Years"],
                                ["Blood Thinners", "Required (Lifelong)", "Often not required"],
                                ["Best For", "Younger Patients (<60)", "Older Patients (>65)"],
                                ["Lifestyle", "Active / Sports", "Flexible"],
                            ],
                            caption: "Valve selection guide."
                        }
                    }
                ],
                faqs: [
                    {
                        question: "Can heart valves be replaced without open-heart surgery?",
                        answer: "Yes. For selected patients, Transcatheter Aortic Valve Implantation (TAVI) is available — a minimally invasive option where the new valve is delivered via a catheter through the femoral artery, avoiding a traditional open-chest approach."
                    }
                ]
            }}
            timeline={{
                title: "Heart Valve Surgery Journey",
                steps: [
                    { title: "Cardiac Work-up", description: "Echocardiography, catheterization, and fitness clearance." },
                    { title: "Surgery", description: "On bypass, the damaged valve is resected and the prosthetic valve is sewn in." },
                    { title: "ICU Recovery", description: "Intensive monitoring for 48-72 hours post-operatively." },
                    { title: "Cardiac Rehab", description: "Guided exercise program for recovery over 6-8 weeks." }
                ]
            }}
            relatedServices={{
                serviceSlug: "cardiology",
                related: [
                    { title: "Heart Angioplasty", href: "/doctor/near-me/treat/cardiology/heart-angioplasty-procedure" },
                    { title: "Pacemaker Implantation", href: "/doctor/near-me/treat/cardiology/pacemaker-implantation-steps" },
                    { title: "Preventive Heart Checkup", href: "/doctor/near-me/treat/cardiology/preventive-heart-checkup" }
                ]
            }}
            reviews={{ entityName: "Cardiac Surgery", entitySlug: "cardiology", entityType: "department" }}
        >
            <section>
                <h2>Premier Cardiac Surgery in Vellore</h2>
                <p>
                    Heart valve disease can affect any of the four valves (mitral, aortic, tricuspid, pulmonary). The most commonly replaced valves are the <strong>aortic</strong> and <strong>mitral</strong> valves. When valve repair is not feasible, replacement with a prosthetic valve is the definitive solution.
                </p>
                <h3>Symptoms Indicating Valve Surgery</h3>
                <ul>
                    <li>Progressive shortness of breath, especially at night</li>
                    <li>Fatigue and reduced exercise capacity</li>
                    <li>Swollen ankles and feet</li>
                    <li>Heart palpitations and irregular heartbeat</li>
                    <li>Chest discomfort or pressure</li>
                </ul>
                <h2>Cost & Insurance Coverage</h2>
                <p>
                    Heart valve replacement surgery costs <strong>₹2.5 – 4.5 Lakhs</strong> depending on the valve chosen and procedure type. All major government and private insurers are accepted, including CGHS and ECHS. Our dedicated insurance desk handles pre-authorization for a cashless experience.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
