import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Enlarged Prostate (BPH) Treatment – TURP & Laser | Indira Hospital Vellore",
    description: "Benign Prostatic Hyperplasia (BPH) treatment at Indira Hospital, Vellore. Medication, TURP, and Laser Prostatectomy (HoLEP/GreenLight) for enlarged prostate. Experienced urologists.",
    keywords: ["Enlarged prostate treatment Vellore", "BPH treatment Vellore", "TURP surgery Tamil Nadu", "Laser prostate surgery", "Urologist Vellore", "Prostate hospital Vellore"]
};

export default function BPHTreatmentPage() {
    return (
        <SubServiceTemplate
            departmentName="Urology"
            departmentSlug="urology"
            title="Enlarged Prostate (BPH) Treatment"
            eyebrow="Uro-Oncology & Men's Health"
            description={
                <p>
                    <strong>Benign Prostatic Hyperplasia (BPH)</strong> — an enlarged prostate gland — affects over 50% of men over 60 years of age, causing troublesome urinary symptoms such as weak stream, frequent urination, and inability to fully empty the bladder. Indira Hospital's Urology department offers <strong>medical, minimally invasive, and surgical treatments</strong> for BPH, from daily tablets to laser prostate surgery.
                </p>
            }
            quickFacts={[
                { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "TURP Cost", value: "₹50,000 – ₹80,000", icon: "IndianRupee" },
                { label: "Laser (HoLEP)", value: "₹80,000 – ₹1,20,000", icon: "IndianRupee" },
                { label: "Hospital Stay (TURP)", value: "2–3 Days", icon: "Clock" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "treatment-options",
                        heading: "BPH Treatment Options — From Tablets to Surgery",
                        description: "Treatment is tailored to symptom severity, prostate size, and presence of complications:",
                        table: {
                            headers: ["Option", "Best For", "Expected Result"],
                            rows: [
                                ["Watchful Waiting", "Mild symptoms (IPSS < 8)", "Lifestyle modification"],
                                ["Alpha Blockers (Tamsulosin)", "Moderate symptoms", "Rapid symptom relief in days"],
                                ["5-alpha Reductase Inhibitors (Finasteride)", "Large prostate (>30g)", "Shrinks prostate over 3–6 months"],
                                ["Combination therapy", "Moderate-severe symptoms + large prostate", "Best long-term symptom control"],
                                ["TURP (Gold Standard Surgery)", "Failed medication; moderate-large prostate", "Durable 10–15 yr symptom relief"],
                                ["HoLEP (Laser)", "Very large prostate (>80g)", "Most effective, catheter-free faster"]
                            ],
                            caption: "Treatment selected after IPSS scoring and uroflowmetry at Indira Hospital."
                        }
                    },
                    {
                        id: "complications-bph",
                        heading: "When Should BPH Be Treated Urgently?",
                        bullets: [
                            "Acute urinary retention (inability to pass urine — emergency, needs immediate catheter)",
                            "Recurrent urinary tract infections due to urinary stasis",
                            "Bladder stones formed secondary to incomplete bladder emptying",
                            "Haematuria (blood in urine) from BPH",
                            "Renal insufficiency due to back pressure on kidneys",
                            "Large post-void residual urine (&gt;300ml) consistently"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Will I be incontinent after TURP?",
                        answer: "Stress incontinence (leakage with coughing/straining) is uncommon after TURP (<3%). Urgency incontinence may occur temporarily as the bladder adjusts. Our urologists use precise techniques to preserve the sphincter mechanism."
                    },
                    {
                        question: "Can I avoid surgery with medications?",
                        answer: "Many men manage BPH with medications for years. However, if you have a very large prostate, recurrent retention, bladder stones, or kidney complications, medication alone is insufficient and surgery is recommended."
                    }
                ]
            }}
            timeline={{
                title: "BPH Treatment Journey",
                steps: [
                    { title: "Evaluation", description: "IPSS questionnaire, uroflowmetry (urine flow rate), PSA blood test, and ultrasound to measure prostate size and post-void residual.", duration: "Day 1" },
                    { title: "Medical Trial", description: "Alpha-blockers ± 5-ARI started. Review in 4–6 weeks to assess response.", duration: "4–6 Weeks" },
                    { title: "Surgical Decision", description: "If medications fail or complications present, TURP or HoLEP is planned after anaesthesia fitness.", duration: "When Needed" },
                    { title: "Surgery & Recovery", description: "TURP/HoLEP under spinal anesthesia. Catheter removed Day 2–3. Discharge planned.", duration: "2–3 Days" },
                    { title: "Follow-up Uroflowmetry", description: "Flow rate and symptom score rechecked 6 weeks after surgery to confirm success.", duration: "6 Weeks Post-op" }
                ]
            }}
            relatedServices={{
                serviceSlug: "urology",
                related: [
                    { title: "Prostate TURP Surgery", href: "/doctor/near-me/treat/urology/prostate-turp-surgery" },
                    { title: "Kidney Stone Treatment", href: "/doctor/near-me/treat/urology/kidney-stone-laser-surgery" },
                    { title: "Male Infertility", href: "/doctor/near-me/treat/urology/male-infertility-causes" }
                ]
            }}
            reviews={{
                entityName: "Urology Care",
                entitySlug: "urology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Urology Excellence for Men's Health</h2>
                <p>
                    Indira Hospital's Urology department is equipped for <strong>endoscopic, laparoscopic, and laser urological procedures</strong>. We place particular emphasis on men's health — managing prostate conditions, male infertility, erectile dysfunction, and complex urinary tract disorders.
                </p>

                <h3>Understanding Prostate Size and LUTS</h3>
                <p>
                    BPH is a histological diagnosis, but symptoms are measured by the <strong>International Prostate Symptom Score (IPSS)</strong>. A score of 0–7 is mild, 8–19 is moderate, and 20–35 is severe. Our urologist will use the IPSS plus uroflowmetry (maximum and average urinary flow rate) and post-void residual ultrasound to stage your condition and guide management.
                </p>
                <ul>
                    <li><strong>Normal Qmax (peak flow rate):</strong> &gt;15 ml/s</li>
                    <li><strong>Borderline obstruction:</strong> 10–15 ml/s</li>
                    <li><strong>Significant obstruction (surgical candidate):</strong> &lt;10 ml/s</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-[2.5rem] border border-teal-100 dark:border-blue-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-blue-300 mb-4 tracking-tight">Urology Diagnostics at Indira Hospital</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Digital Uroflowmetry System",
                            "Transrectal Ultrasound (TRUS)",
                            "PSA Testing & Prostate Biopsy",
                            "Flexible Cystoscopy"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Insurance</h2>
                <p>
                    Medical management for BPH costs <strong>₹200–₹800/month</strong> in medication. TURP surgery starts at <strong>₹50,000</strong>. HoLEP (laser prostate enucleation) ranges from <strong>₹80,000–₹1,20,000</strong>. All procedures are covered by most major health insurance plans.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
