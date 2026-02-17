import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
    title: "Heart Valve Replacement Surgery | Indira Super Speciality Hospital Vellore",
    description: "Comprehensive Heart Valve Replacement Surgery at Indira Hospital, Vellore. Expert cardiac surgeons, advanced valve options, and dedicated post-op care."
};

export default function HeartValveReplacementPage() {
    return (
        <SubServiceTemplate
            title="Heart Valve Replacement"
            eyebrow="Cardiology Treatment"
            description={
                <p>
                    Advanced surgical solutions for <strong>Aortic and Mitral Valve</strong> diseases. Our cardiac team specializes in mechanical and bioprosthetic valve replacements using state-of-the-art heart-lung technology.
                </p>
            }
            quickFacts={[
                { label: "Cost", value: "₹2.5L – ₹4.5L", icon: "IndianRupee" },
                { label: "Duration", value: "3–4 Hours", icon: "Clock" },
                { label: "Stay", value: "5–7 Days", icon: "Activity" },
                { label: "Success Rate", value: "95%+", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "valve-types",
                        heading: "Choosing the Right Valve",
                        description: "We offer both mechanical and biological valve options tailored to your age and lifestyle:",
                        table: {
                            headers: ["Valve Type", "Durability", "Medication", "Ideal For"],
                            rows: [
                                ["Mechanical Valve", "Lifetime", "Continious Blood Thinners", "Younger Patients"],
                                ["Bioprosthetic (Tissue)", "10-15 Years", "Short-term Medication", "Elderly Patients"],
                                ["Repair (Surgical)", "Variable", "Minimal Medication", "Specific Conditions"]
                            ],
                            caption: "Valve replacement options available at Indira Hospital's Cardiac Center."
                        }
                    },
                    {
                        id: "indications",
                        heading: "When is Surgery Necessary?",
                        bullets: [
                            "Severe Valve Stenosis (narrowing of the valve opening)",
                            "Severe Valve Regurgitation (leaking valve)",
                            "Persistent shortness of breath or chest pain",
                            "Heart failure symptoms due to underlying valve disease",
                            "Enlargement of heart chambers detected on Echo"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "How long is the recovery from valve surgery?",
                        answer: "Most patients stay in the hospital for 5-7 days. Full recovery and return to normal activities typically takes 6-8 weeks."
                    },
                    {
                        question: "What is the difference between mechanical and tissue valves?",
                        answer: "Mechanical valves are highly durable but require lifelong blood-thinning medication. Tissue valves (usually from bovine/porcine sources) don't require lifelong thinners but may need replacement after 10-15 years."
                    }
                ]
            }}
            timeline={{
                title: "Your Cardiac Recovery Path",
                steps: [
                    { title: "Cardiac Evaluation", description: "Echo, Angiogram, and fitness clearance." },
                    { title: "Surgery", description: "Precision valve replacement in our Modular OT." },
                    { title: "ICU Care", description: "Strict monitoring for 24-48 hours." },
                    { title: "Rehabilitation", description: "Physiotherapy and gradual mobilization." }
                ]
            }}
            relatedServices={{
                serviceSlug: "cardiology/heart-valve-replacement-surgery",
                related: [
                    { title: "Coronary Angioplasty", href: "/services/cardiology/heart-angioplasty-procedure" },
                    { title: "Pacemaker Implantation", href: "/services/cardiology/pacemaker-implantation-steps" }
                ]
            }}
            reviews={{
                entityName: "Heart Valve Replacement",
                entitySlug: "cardiology/heart-valve-replacement-surgery"
            }}
        >
            <section>
                <h2>Center of Excellence for Cardiac Surgery</h2>
                <p>
                    At Indira Super Speciality Hospital, our Department of Cardiothoracic Surgery is equipped with the latest surgical technology and a dedicated <strong>Cardiac ICU</strong>. Our surgeons have extensive experience in treating complex valvular heart diseases with high success rates.
                </p>

                <h3>Why Choose Indira Hospital?</h3>
                <p>
                    We provide a comprehensive heart care ecosystem. From advanced diagnostics like 4D ECHO to a modular operation theater environment that ensures zero-infection rates, we prioritize patient outcomes above all else.
                </p>

                <div className="my-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-3xl border border-red-100 dark:border-red-800">
                    <h4 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4 tracking-tight">Dedicated 24/7 Cardiac Emergency</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                        Cardiac emergencies require immediate attention. Our facility features a dedicated chest pain clinic and 24/7 availability of cardiac surgeons and anaesthetists.
                    </p>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 font-medium text-red-800 dark:text-red-200"><div className="w-2 h-2 rounded-full bg-red-500" /> Advanced Life Support</li>
                        <li className="flex items-center gap-2 font-medium text-red-800 dark:text-red-200"><div className="w-2 h-2 rounded-full bg-red-500" /> Heart-Lung Machine</li>
                        <li className="flex items-center gap-2 font-medium text-red-800 dark:text-red-200"><div className="w-2 h-2 rounded-full bg-red-500" /> Blood Bank Assistance</li>
                        <li className="flex items-center gap-2 font-medium text-red-800 dark:text-red-200"><div className="w-2 h-2 rounded-full bg-red-500" /> Comprehensive Rehab</li>
                    </ul>
                </div>

                <h2>Cost & Booking</h2>
                <p>
                    Heart Valve Replacement costs range from <strong>₹2,50,000 to ₹4,50,000</strong> depending on the type of valve chosen. We offer transparent pricing and support all major TPA and government insurance schemes. Schedule a consultation with our cardiologist today for a detailed evaluation.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
