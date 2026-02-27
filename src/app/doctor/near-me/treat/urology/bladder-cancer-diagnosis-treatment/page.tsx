import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Bladder Cancer Diagnosis & Treatment | Indira Hospital Vellore",
    description: "Bladder cancer diagnosis, cystoscopy, TURBT and treatment coordination at Indira Hospital, Vellore. Expert urology-oncology team for early detection and optimal outcomes.",
    keywords: ["Bladder cancer treatment Vellore", "TURBT surgery Vellore", "Cystoscopy Vellore", "Haematuria evaluation Vellore", "Uro-oncologist Vellore", "Bladder tumour surgery Tamil Nadu"]
};

export default function BladderCancerPage() {
    return (
        <SubServiceTemplate
            departmentName="Urology"
            departmentSlug="urology"
            title="Bladder Cancer Diagnosis & Treatment"
            eyebrow="Uro-Oncology"
            description={
                <p>
                    <strong>Bladder cancer</strong> is the 9th most common cancer worldwide and one of the most treatable when caught early. The most important warning sign is <strong>painless visible blood in the urine (haematuria)</strong> — which should never be ignored. Indira Hospital's urology team provides comprehensive evaluation, endoscopic tumour removal (TURBT), and long-term surveillance.
                </p>
            }
            quickFacts={[
                { label: "Cystoscopy Cost", value: "₹8,000 – ₹15,000", icon: "IndianRupee" },
                { label: "TURBT Cost", value: "₹40,000 – ₹80,000", icon: "IndianRupee" },
                { label: "Hospital Stay", value: "1–3 Days", icon: "Clock" },
                { label: "5-Year Survival (Stage I)", value: ">90%", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "staging",
                        heading: "Bladder Cancer Staging & Treatment",
                        description: "Treatment depends critically on whether bladder cancer is superficial or has invaded the muscle layer:",
                        table: {
                            headers: ["Stage", "Description", "Primary Treatment"],
                            rows: [
                                ["Ta", "Non-invasive papillary carcinoma", "TURBT + Intravesical BCG"],
                                ["T1 (High-grade)", "Invades lamina propria", "TURBT + BCG; consider early cystectomy"],
                                ["T2 (Muscle-invasive)", "Into detrusor muscle", "Radical cystectomy ± neoadjuvant chemo"],
                                ["T3", "Perivesical fat invaded", "Cystectomy + chemo ± radiation"],
                                ["T4", "Adjacent organs invaded", "Palliative chemo / supportive care"]
                            ],
                            caption: "Staging confirmed after TURBT histopathology and CT imaging at Indira Hospital."
                        }
                    },
                    {
                        id: "risk-factors",
                        heading: "Who is at Risk for Bladder Cancer?",
                        bullets: [
                            "Smoking — the single biggest risk factor (3–4x increased risk)",
                            "Occupational exposure: Rubber, dye, paint, chemical industry workers",
                            "Chronic UTIs from recurrent catheter use",
                            "Schistosomiasis (parasitic infection — squamous cell carcinoma risk)",
                            "Prior radiation to pelvis (cervical, prostate cancer treatment)",
                            "Long-term use of Cyclophosphamide chemotherapy",
                            "Family history of bladder cancer or Lynch Syndrome"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "I have blood in my urine but no pain — is that serious?",
                        answer: "Yes — painless haematuria is the classic presentation of bladder cancer and should always be investigated promptly with cystoscopy and urine cytology. Do not assume it is a UTI without a proper urology evaluation."
                    },
                    {
                        question: "What is TURBT?",
                        answer: "TransUrethral Resection of Bladder Tumour (TURBT) is an endoscopic procedure performed under spinal or general anaesthesia. A resectoscope is passed through the urethra and the tumour is removed from the bladder lining — no external incision required."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "urology",
                related: [
                    { title: "UTI Treatment", href: "/doctor/near-me/treat/urology/urinary-tract-infection-treatment" },
                    { title: "Prostate TURP", href: "/doctor/near-me/treat/urology/prostate-turp-surgery" },
                    { title: "Kidney Stone Laser", href: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" }
                ]
            }}
            reviews={{
                entityName: "Urology Care",
                entitySlug: "urology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Uro-Oncology Care at Indira Hospital</h2>
                <p>
                    Indira Hospital's Urology department has expertise in <strong>endoscopic uro-oncology</strong> — the diagnosis and treatment of bladder, kidney, and upper tract urothelial cancers. Our urologists perform cystoscopy, diagnostic TURBT, and intravesical therapy, coordinating with our oncology team for systemic treatment when needed.
                </p>

                <h3>Intravesical BCG Therapy — Preventing Recurrence</h3>
                <p>
                    For non-muscle-invasive bladder cancer (NMIBC), <strong>BCG (Bacillus Calmette–Guérin)</strong> instillation into the bladder is the most effective adjuvant treatment to prevent recurrence and progression. Our urology team administers full induction BCG (6 weekly instillations) followed by maintenance therapy:
                </p>
                <ul>
                    <li>Induction: 6 weekly instillations starting 3–4 weeks post-TURBT</li>
                    <li>Maintenance: BCG instillations at 3, 6, 12, 18, 24, 30, and 36 months</li>
                    <li>Surveillance cystoscopy: Every 3 months for 2 years, then 6-monthly</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-[2.5rem] border border-amber-100 dark:border-amber-900 shadow-sm dark:shadow-slate-900/30">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-amber-300 mb-4 tracking-tight">Bladder Cancer Evaluation at Indira Hospital</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Flexible Cystoscopy for Painless Haematuria",
                            "TURBT under Spinal or General Anaesthesia",
                            "Intravesical BCG Therapy",
                            "Post-TURBT CT Urogram Staging"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Blood in Urine — Don't Delay</h2>
                <p>
                    If you notice pink, red, or cola-coloured urine — whether painful or painless — <strong>contact us immediately</strong> for a urology consultation and urgent cystoscopy. Early-stage bladder cancer is highly treatable. Delayed diagnosis allows progression to higher stages with significantly worse survival outcomes.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
