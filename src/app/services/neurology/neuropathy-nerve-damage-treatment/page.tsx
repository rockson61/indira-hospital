import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Neuropathy (Nerve Damage) Diagnosis & Treatment | Indira Hospital Vellore",
    description: "Expert Peripheral Neuropathy diagnosis and treatment at Indira Hospital, Vellore. Nerve conduction study (NCS/EMG), cause identification, and targeted therapy for numb, tingling feet and hands.",
    keywords: ["Neuropathy treatment Vellore", "Nerve damage treatment Tamil Nadu", "NCS EMG test Vellore", "Diabetic neuropathy Vellore", "Neurologist Vellore", "Hand foot numbness specialist"]
};

export default function NeuropathyPage() {
    return (
        <SubServiceTemplate
            departmentName="Neurology"
            departmentSlug="neurology"
            title="Peripheral Neuropathy Diagnosis & Treatment"
            eyebrow="Neuromuscular Medicine"
            description={
                <p>
                    <strong>Peripheral Neuropathy</strong> refers to damage to the peripheral nervous system — the network of nerves outside the brain and spinal cord. It causes numbness, tingling, burning pain, and weakness, typically starting in the feet and hands. <strong>Identifying and treating the underlying cause</strong> is the cornerstone of effective management.
                </p>
            }
            quickFacts={[
                { label: "OPD Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "NCS / EMG Test", value: "₹2,500 – ₹5,000", icon: "IndianRupee" },
                { label: "Most Common Cause", value: "Diabetes (40%)", icon: "Activity" },
                { label: "Key Diagnostic Test", value: "Nerve Conduction Study", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "types",
                        heading: "Types of Neuropathy We Diagnose",
                        description: "Neuropathy can affect sensory, motor, or autonomic nerve fibres — and may be due to many different causes:",
                        table: {
                            headers: ["Type", "Main Symptoms", "Common Causes"],
                            rows: [
                                ["Diabetic Polyneuropathy", "Sock-glove numbness, burning feet", "Long-standing diabetes"],
                                ["Alcoholic Neuropathy", "Gait imbalance, leg weakness", "Chronic alcohol abuse"],
                                ["B12 Deficiency", "Pins & needles, cognitive changes", "Vegetarian diet, malabsorption"],
                                ["Carpal Tunnel Syndrome", "Thumb/index/middle finger numbness", "Repetitive wrist use"],
                                ["Guillain-Barré Syndrome (GBS)", "Ascending weakness, areflexia", "Post-viral autoimmune"],
                                ["CIDP", "Slowly progressive weakness", "Chronic autoimmune demyelination"]
                            ],
                            caption: "Cause identified through NCS/EMG, blood tests, and clinical assessment at Indira Hospital."
                        }
                    },
                    {
                        id: "treatment",
                        heading: "Our Neuropathy Treatment Approach",
                        bullets: [
                            "Treat the cause: Optimise blood sugar (HbA1c <7%), B12 replacement, immune therapy for CIDP",
                            "Neuropathic pain medications: Pregabalin, Duloxetine, Amitriptyline (titrated to response)",
                            "Topical agents: Capsaicin cream, Lidocaine patch for localised burning pain",
                            "Physiotherapy: Balance training, gait retraining, fall prevention for motor neuropathy",
                            "Orthotics & footwear: Customised diabetic footwear for sensory loss",
                            "Neurovitamins: Alpha-lipoic acid, B-complex, Methylcobalamin supplementation"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "What is a Nerve Conduction Study (NCS/EMG)?",
                        answer: "NCS measures the speed and strength of electrical signals in peripheral nerves using surface electrodes. EMG measures the electrical activity in muscles with a fine needle. Together they localise and characterise the type of nerve damage (axonal vs. demyelinating). The test takes 45–90 minutes and is performed by our neurologist."
                    },
                    {
                        question: "Can neuropathy be cured?",
                        answer: "It depends on the cause. B12 deficiency neuropathy improves with supplements. Diabetic neuropathy can stabilize with good sugar control but rarely fully reverses. GBS and CIDP often improve significantly with immunotherapy (IVIG, steroids)."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "neurology",
                related: [
                    { title: "EEG Test Guide", href: "/services/neurology/eeg-test-procedure" },
                    { title: "Migraine Management", href: "/services/neurology/migraine-relief-management" },
                    { title: "Parkinson's Care", href: "/services/neurology/parkinsons-disease-care" }
                ]
            }}
            reviews={{
                entityName: "Neurology Care",
                entitySlug: "neurology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Comprehensive Neuromuscular Clinic at Indira Hospital</h2>
                <p>
                    Our Neurology department features a dedicated <strong>Neuromuscular Clinic</strong> with in-house Nerve Conduction Study (NCS) and Electromyography (EMG) capabilities. All nerve conduction studies are performed and interpreted by our consultant neurologist — ensuring accurate, actionable results.
                </p>

                <h3>Red Flag Symptoms Requiring Urgent Neurological Review</h3>
                <ul>
                    <li><strong>Rapidly progressive weakness</strong> in arms and legs over days (suspect GBS)</li>
                    <li><strong>Sudden bilateral leg weakness</strong> with bladder/bowel involvement (suspect spinal cord compression)</li>
                    <li><strong>Wrist drop or foot drop</strong> appearing suddenly</li>
                    <li><strong>Severe autonomic symptoms</strong>: Fainting, uncontrolled BP swings, loss of bladder control</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-indigo-300 mb-4 tracking-tight">Neuromuscular Diagnostic Unit</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "In-house NCS / EMG (Nerve Conduction Study)",
                            "Carpal Tunnel & Ulnar Nerve Assessment",
                            "Diabetic Neuropathy Annual Screening",
                            "Balance Assessment & Fall Prevention Program"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Comprehensive Neuropathy Management</h2>
                <p>
                    Peripheral neuropathy is often manageable when caught and treated early. If you experience persistent numbness, burning, or weakness in your hands or feet — especially if you have diabetes — please see our neurologist for a detailed assessment and nerve conduction study.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
