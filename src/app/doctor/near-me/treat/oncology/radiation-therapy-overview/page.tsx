import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Radiation Therapy (Radiotherapy) for Cancer | Indira Hospital Vellore",
    description: "Advanced Radiation Therapy services coordinated at Indira Hospital, Vellore. External beam radiotherapy, IMRT, and brachytherapy for head, neck, breast, cervical, and prostate cancers.",
    keywords: ["Radiation therapy Vellore", "Radiotherapy cancer Vellore", "IMRT Vellore", "Cancer radiation treatment Tamil Nadu", "Oncologist Vellore", "Cancer treatment hospital Vellore"]
};

export default function RadiationTherapyPage() {
    return (
        <SubServiceTemplate
            departmentName="Oncology"
            departmentSlug="oncology"
            title="Radiation Therapy for Cancer"
            eyebrow="Radiation Oncology"
            description={
                <p>
                    <strong>Radiation Therapy (Radiotherapy)</strong> uses high-energy X-rays or other particles to destroy cancer cells by damaging their DNA. It is used as a primary treatment, in combination with surgery and chemotherapy, or as palliative care for symptom relief. Our oncology team coordinates with leading radiation oncology centres to ensure you receive <strong>precise, personalised, and evidence-based radiotherapy</strong>.
                </p>
            }
            quickFacts={[
                { label: "Treatment Sessions", value: "5–35 Sessions", icon: "Clock" },
                { label: "Coordination", value: "Ongoing at Our OPD", icon: "Activity" },
                { label: "Technique", value: "IMRT / 3D-CRT", icon: "ShieldCheck" },
                { label: "Planning", value: "CT Simulation Based", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "types",
                        heading: "Types of Radiation Therapy",
                        description: "Different radiotherapy modalities are used based on cancer type, location, and treatment intent:",
                        table: {
                            headers: ["Technique", "How It Works", "Best For"],
                            rows: [
                                ["3D-CRT (3D Conformal)", "Shaped beams from multiple angles", "Standard solid tumours"],
                                ["IMRT (Intensity Modulated)", "Variable dose intensity; spares normal tissue", "Head/Neck, Prostate, Breast"],
                                ["VMAT / RapidArc", "Rotating gantry; faster treatment", "Complex tumours"],
                                ["Stereotactic Body RT (SBRT)", "Very high dose; few sessions (5–8)", "Lung, liver, spine metastases"],
                                ["Brachytherapy", "Internal radiation source placed inside body", "Cervical, prostate cancer"],
                                ["Whole Brain RT", "Treats entire brain", "Brain metastases"]
                            ],
                            caption: "Radiation technique selected after multidisciplinary tumour board discussion."
                        }
                    },
                    {
                        id: "care",
                        heading: "Supportive Care During Radiotherapy",
                        bullets: [
                            "Nutritional support and dietitian consultation during treatment",
                            "Oral hygiene and dental clearance for head & neck RT",
                            "Skin care protocol for localised radiation reactions",
                            "Anti-emetics and pain management during treatment",
                            "Regular haemoglobin monitoring if concurrent chemo-radiation",
                            "Psychological support and counselling services"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Does radiation therapy hurt?",
                        answer: "The radiation itself is painless (similar to an X-ray). Side effects develop gradually over the course of treatment — skin redness, fatigue, local mucosal reaction — and are managed by our oncology team."
                    },
                    {
                        question: "Can I live normally during radiotherapy?",
                        answer: "Most patients continue working and living at home during radiotherapy. External beam RT sessions last only 15–30 minutes. We provide dietary and activity guidance to manage fatigue."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "oncology",
                related: [
                    { title: "Chemotherapy Guide", href: "/doctor/near-me/treat/oncology/chemotherapy-side-effects" },
                    { title: "Surgical Oncology", href: "/doctor/near-me/treat/oncology/surgical-oncology-overview" },
                    { title: "Palliative Care", href: "/doctor/near-me/treat/oncology/palliative-care-services" }
                ]
            }}
            reviews={{
                entityName: "Oncology Care",
                entitySlug: "oncology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Comprehensive Cancer Care with Radiotherapy</h2>
                <p>
                    Indira Hospital's Oncology department works in close collaboration with certified Radiation Oncology centres equipped with <strong>Linear Accelerators (LINAC)</strong> for precision IMRT and VMAT treatments. Our oncologists manage the full treatment journey — from diagnosis and staging through surgery, systemic therapy, and radiation planning.
                </p>

                <h3>When is Radiotherapy Used?</h3>
                <ul>
                    <li><strong>Definitive (Curative):</strong> Primary treatment for early-stage laryngeal, cervical, and prostate cancer</li>
                    <li><strong>Adjuvant (Post-Surgery):</strong> After breast cancer, rectal cancer, or head & neck surgery to reduce recurrence</li>
                    <li><strong>Neoadjuvant (Pre-Surgery):</strong> To shrink tumours before resection (rectal cancer, esophageal cancer)</li>
                    <li><strong>Concurrent ChemoRT:</strong> Combined with chemotherapy for cervical, head & neck, lung, oesophageal cancers for synergistic effect</li>
                    <li><strong>Palliative RT:</strong> For pain from bone metastases, brain metastases, or superior vena cava syndrome</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-teal-50 to-teal-50 dark:from-teal-900/10 dark:to-teal-900/10 rounded-[2.5rem] border border-teal-100 dark:border-teal-800 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-teal-300 mb-4 tracking-tight">Cancer Care Coordination</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Multidisciplinary Tumour Board (MDT)",
                            "Oncologist-Coordinated Radiation Referral",
                            "Financial Counselling & Insurance Assistance",
                            "Home Visits for Frail / Palliative Patients"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Getting Started with Your Cancer Treatment</h2>
                <p>
                    A cancer diagnosis is overwhelming. Our oncology team is here to guide you step by step — from pathology review and staging scans to treatment planning and survivorship care. We believe in full transparency, shared decision-making, and unwavering support throughout your journey.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
