import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Diabetic Kidney Disease – CKD & Nephropathy | Indira Hospital Vellore",
    description: "Specialist nephrology care for diabetic kidney disease (CKD due to diabetes) at Indira Hospital, Vellore. Prevent dialysis with early intervention. Expert nephrologist consultation.",
    keywords: ["Diabetic kidney disease Vellore", "Diabetic nephropathy CKD", "Nephrologist Vellore", "Kidney disease diabetes Tamil Nadu", "CKD prevention Vellore", "eGFR kidney specialist"]
};

export default function DiabeticKidneyDiseasePage() {
    return (
        <SubServiceTemplate
            departmentName="Nephrology"
            departmentSlug="nephrology"
            title="Diabetic Kidney Disease (CKD)"
            eyebrow="Diabetic Nephrology"
            description={
                <p>
                    <strong>Diabetic kidney disease (Diabetic Nephropathy)</strong> is the leading cause of chronic kidney disease (CKD) and end-stage renal disease (ESRD) in India. Approximately 30-40% of Type 2 diabetics develop nephropathy over time. The key fact: <strong>early detection and aggressive management can reverse microalbuminuria and significantly delay or prevent dialysis</strong>.
                </p>
            }
            quickFacts={[
                { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "Key Test", value: "Urine Microalbumin", icon: "Activity" },
                { label: "Screening Frequency", value: "Annual", icon: "Clock" },
                { label: "BP Target in CKD", value: "< 130/80 mmHg", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "ckd-staging",
                        heading: "CKD Staging & Management Targets",
                        description: "Chronic Kidney Disease is staged G1–G5 based on eGFR (Estimated Glomerular Filtration Rate):",
                        table: {
                            headers: ["CKD Stage", "eGFR (ml/min/1.73m²)", "Management Priority"],
                            rows: [
                                ["G1 (Normal or High)", ">90 + albuminuria", "Treat cause, BP/BSL control"],
                                ["G2 (Mildly Decreased)", "60–89", "Slow progression, CVD risk reduction"],
                                ["G3a (Mildly-Moderately Decreased)", "45–59", "Add SGLT2-inhibitor, manage anaemia/PTH"],
                                ["G3b (Moderately-Severely Decreased)", "30–44", "Dietary protein restriction, AV fistula planning"],
                                ["G4 (Severely Decreased)", "15–29", "Pre-dialysis education, fistula surgery"],
                                ["G5 (Kidney Failure)", "< 15", "Dialysis / Transplant initiation"]
                            ],
                            caption: "eGFR and Urine ACR together determine CKD prognosis and treatment intensity at Indira Hospital."
                        }
                    },
                    {
                        id: "newer-drugs",
                        heading: "Newer Nephroprotective Agents We Use",
                        bullets: [
                            "SGLT2 Inhibitors (Dapagliflozin, Empagliflozin): Reduce albuminuria, slow CKD progression AND reduce cardiovascular events",
                            "GLP-1 Agonists (Semaglutide): Reduces albuminuria and has renal and cardiac benefits",
                            "Finerenone (non-steroidal MRA): Reduces CKD progression in diabetic nephropathy",
                            "ACE Inhibitors / ARBs: Reduce intra-glomerular pressure and proteinuria",
                            "Optimised blood glucose control: Time-in-Range (TIR) via CGM guidance"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Can diabetic kidney disease be reversed?",
                        answer: "Stage G1 with microalbuminuria can be reversed with excellent glycaemic control and ACE/ARB therapy. Once significant fibrosis sets in (Stage G3+), progression can be slowed but not reversed. This is why annual screening is critical."
                    },
                    {
                        question: "How often should diabetics check their kidneys?",
                        answer: "All diabetics should have their kidneys checked every year: urine microalbumin/creatinine ratio (ACR) and serum creatinine/eGFR. If ACR is elevated, 3-monthly monitoring and specialist referral is needed."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "nephrology",
                related: [
                    { title: "Chronic Kidney Disease", href: "/doctor/near-me/treat/nephrology/chronic-kidney-disease-stages" },
                    { title: "Dialysis Guide", href: "/doctor/near-me/treat/nephrology/dialysis-procedure-guide" },
                    { title: "Kidney Transplant", href: "/doctor/near-me/treat/nephrology/kidney-transplant-guide" }
                ]
            }}
            reviews={{
                entityName: "Nephrology Care",
                entitySlug: "nephrology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Fight Diabetic Kidney Disease Before Dialysis</h2>
                <p>
                    At Indira Hospital, our Nephrology OPD runs a <strong>Diabetes-Related Kidney Clinic</strong> that integrates nephrology and endocrinology for holistic management of diabetic renal disease. Our target: keep patients off dialysis as long as possible with aggressive multifactorial risk reduction.
                </p>

                <h3>The Multifactorial Management "Holy Trinity"</h3>
                <ul>
                    <li><strong>1. Blood Sugar Control:</strong> HbA1c target 7–7.5% (individualised). CGM-guided titration. SGLT2-inhibitors first choice in overt nephropathy.</li>
                    <li><strong>2. Blood Pressure Control:</strong> Target &lt;130/80 mmHg. ACE inhibitor or ARB as first-line (not both together). Low salt diet (&lt;5g NaCl/day).</li>
                    <li><strong>3. Proteinuria Reduction:</strong> Target urine ACR &lt;300 mg/g. SGLT2-i + RAS blockade combination is most effective.</li>
                </ul>
                <p>Beyond "the trinity," we also manage dyslipidaemia (statin), anaemia (ESA + iron), hyperphosphataemia, and hyperuricaemia — all of which accelerate CKD progression.</p>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-[2.5rem] border border-orange-100 dark:border-orange-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-orange-300 mb-4 tracking-tight">Diabetes-Related Kidney Clinic</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Urine ACR & eGFR Monitoring",
                            "CGM-Guided Glycaemic Optimisation",
                            "SGLT2-Inhibitor Therapy",
                            "Dietitian-Led CKD Diet Counselling"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Book Your Kidney Screening</h2>
                <p>
                    If you have had diabetes for more than 5 years, or have poorly controlled blood sugar, hypertension, or a family history of kidney disease — don't wait for symptoms. <strong>Kidney disease is silent until very late stages.</strong> Book a consultation with our nephrologist today for a comprehensive kidney health assessment.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
