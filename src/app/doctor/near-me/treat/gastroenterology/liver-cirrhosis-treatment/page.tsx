import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Liver Cirrhosis Treatment & Management | Indira Hospital Vellore",
    description: "Comprehensive Liver Cirrhosis treatment at Indira Hospital, Vellore. Medication, lifestyle management, and complication prevention by expert hepatologists. Affordable care.",
    keywords: ["Liver cirrhosis treatment Vellore", "Hepatologist Vellore", "Liver disease hospital Vellore", "Cirrhosis management", "Liver failure treatment Tamil Nadu"]
};

export default function LiverCirrhosisTreatmentPage() {
    return (
        <SubServiceTemplate
            departmentName="Gastroenterology"
            departmentSlug="gastroenterology"
            title="Liver Cirrhosis Treatment"
            eyebrow="Hepatology & Liver Care"
            description={
                <p>
                    <strong>Liver Cirrhosis</strong> is an advanced stage of liver fibrosis where healthy liver tissue is progressively replaced by scar tissue, impairing liver function. While cirrhosis cannot be fully reversed, our gastroenterology and hepatology team can <strong>slow its progression, manage complications, and dramatically improve quality of life</strong> with targeted treatment protocols.
                </p>
            }
            quickFacts={[
                { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "MELD Score", value: "Assessed at Visit", icon: "Activity" },
                { label: "OPD Days", value: "Mon–Sat", icon: "Clock" },
                { label: "Specialists", value: "Hepatologist On-Call", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "stages",
                        heading: "Stages of Liver Cirrhosis",
                        description: "Management strategy depends on whether cirrhosis is 'compensated' or 'decompensated':",
                        table: {
                            headers: ["Stage", "Key Features", "Primary Goal"],
                            rows: [
                                ["Compensated", "No jaundice, no ascites; liver still functional", "Slow progression, treat cause"],
                                ["Early Decompensated", "First episode of ascites or variceal bleed", "Prevent recurrence, start beta-blockers"],
                                ["Late Decompensated", "Recurrent ascites, HRS, SBP, HE", "Stabilize, evaluate for transplant"],
                                ["Pre-terminal", "Multi-organ dysfunction, ACLF", "Supportive care / referral"]
                            ],
                            caption: "Child-Pugh and MELD scores guide management at Indira Hospital."
                        }
                    },
                    {
                        id: "management",
                        heading: "Our Cirrhosis Management Approach",
                        bullets: [
                            "Treat underlying cause: Antiviral therapy for Hepatitis B/C, alcohol cessation",
                            "Ascites management: Diuretics, sodium restriction, large-volume paracentesis",
                            "Variceal surveillance: Regular upper endoscopy (EGD) with band ligation if needed",
                            "SBP prophylaxis: Long-term antibiotics for high-risk patients",
                            "Hepatic encephalopathy: Lactulose, rifaximin, protein management",
                            "Screening for Hepatocellular Carcinoma (HCC): 6-monthly ultrasound + AFP",
                            "Nutritional support: High-protein, low-sodium diet with BCAA supplementation"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Is liver cirrhosis reversible?",
                        answer: "Early-stage fibrosis can partially regress with effective treatment of the underlying cause (e.g., antiviral therapy for hepatitis). True cirrhosis with extensive fibrosis is largely irreversible, but progression can be halted."
                    },
                    {
                        question: "Do I need a liver transplant for cirrhosis?",
                        answer: "Liver transplant is considered when MELD score exceeds 15–18 or when decompensation becomes uncontrollable. Our team will evaluate and refer appropriately. Many patients do well for years on medical management."
                    }
                ]
            }}
            timeline={{
                title: "Your Cirrhosis Care Pathway",
                steps: [
                    { title: "Diagnosis & Staging", description: "FibroScan (elastography), blood tests (LFT, INR, albumin), and MELD scoring.", duration: "Day 1" },
                    { title: "Cause Identification", description: "Alcohol history, viral hepatitis serology, autoimmune markers, metabolic workup.", duration: "Week 1" },
                    { title: "Complication Assessment", description: "Upper endoscopy for varices, ultrasound for ascites/spleen size.", duration: "Week 1-2" },
                    { title: "Long-Term Management", description: "Monthly follow-up for medication titration, 6-monthly HCC surveillance.", duration: "Ongoing" }
                ]
            }}
            relatedServices={{
                serviceSlug: "gastroenterology",
                related: [
                    { title: "Fatty Liver Treatment", href: "/doctor/near-me/treat/gastroenterology/fatty-liver-treatment-diet" },
                    { title: "Endoscopy Procedure", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
                    { title: "H. Pylori Infection", href: "/doctor/near-me/treat/gastroenterology/h-pylori-infection-cure" }
                ]
            }}
            reviews={{
                entityName: "Gastroenterology",
                entitySlug: "gastroenterology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Expert Hepatology Care at Indira Hospital</h2>
                <p>
                    Our Gastroenterology department has a dedicated <strong>Hepatology Clinic</strong> that manages all stages of chronic liver disease. We use <strong>FibroScan (Transient Elastography)</strong> — the non-invasive gold standard for assessing liver stiffness and fibrosis stage without a liver biopsy.
                </p>

                <h3>Common Causes of Liver Cirrhosis We Treat</h3>
                <ul>
                    <li><strong>Alcoholic Liver Disease (ALD):</strong> Most common cause in our region; complete alcohol abstinence is the single most effective intervention.</li>
                    <li><strong>Non-Alcoholic Fatty Liver Disease (NAFLD/NASH):</strong> Increasingly common due to obesity and diabetes.</li>
                    <li><strong>Chronic Hepatitis B & C:</strong> Effectively managed with antiviral agents (tenofovir, entecavir, direct-acting antivirals).</li>
                    <li><strong>Autoimmune Hepatitis:</strong> Treated with steroids and azathioprine.</li>
                    <li><strong>Primary Biliary Cholangitis (PBC):</strong> Ursodeoxycholic acid as first-line therapy.</li>
                    <li><strong>Wilson's Disease / Hemochromatosis:</strong> Metabolic liver diseases managed with chelation or phlebotomy.</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-[2.5rem] border border-amber-100 dark:border-amber-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-amber-300 mb-4 tracking-tight">Hepatology Lab at Indira Hospital</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "FibroScan (Non-Invasive Fibrosis Assessment)",
                            "Diagnostic & Therapeutic Paracentesis",
                            "Variceal Band Ligation (VBL)",
                            "Hepatitis B & C Antiviral Therapy"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Diet & Lifestyle for Liver Cirrhosis</h2>
                <p>
                    Nutrition plays a critical role in cirrhosis management. Our dietitian provides personalized meal plans: <strong>high-protein (1.2–1.5g/kg/day)</strong> to prevent muscle wasting, <strong>low sodium (&lt;2g/day)</strong> to control ascites, and <strong>small frequent meals</strong> to prevent hypoglycemia. Alcohol must be completely avoided.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
