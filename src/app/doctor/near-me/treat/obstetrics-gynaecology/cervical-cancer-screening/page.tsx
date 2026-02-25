import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Cervical Cancer Screening & Vaccination | Indira Hospital Vellore",
    description: "Cervical cancer screening (Pap smear, HPV test, colposcopy) and HPV vaccination at Indira Hospital, Vellore. Expert gynaecologists for comprehensive women's cancer prevention.",
    keywords: ["Cervical cancer screening Vellore", "Pap smear Vellore", "HPV vaccination Vellore", "Colposcopy Vellore", "Gynaecologist Vellore", "Women's cancer prevention Tamil Nadu"]
};

export default function CervicalCancerScreeningPage() {
    return (
        <SubServiceTemplate
            departmentName="Obstetrics & Gynaecology"
            departmentSlug="obstetrics-gynaecology"
            title="Cervical Cancer Screening & Prevention"
            eyebrow="Women's Health & Oncology"
            description={
                <p>
                    <strong>Cervical cancer is one of the most preventable cancers</strong> — and with regular screening and HPV vaccination, it can be detected at a pre-cancerous stage when it is completely curable. Indira Hospital's Women's Health Clinic provides annual screening programs including <strong>Pap smears, HPV DNA testing, colposcopy, and biopsy</strong>, along with the HPV vaccine for eligible women.
                </p>
            }
            quickFacts={[
                { label: "Pap Smear Cost", value: "₹600 – ₹1,200", icon: "IndianRupee" },
                { label: "HPV Test", value: "₹2,000 – ₹3,500", icon: "IndianRupee" },
                { label: "Colposcopy", value: "₹2,500 – ₹4,000", icon: "IndianRupee" },
                { label: "HPV Vaccine", value: "₹2,500/dose", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "screening-guide",
                        heading: "Cervical Cancer Screening Schedule",
                        description: "WHO and ACOG guidelines recommend the following screening intervals for average-risk women:",
                        table: {
                            headers: ["Age Group", "Recommended Test", "Frequency"],
                            rows: [
                                ["Under 21", "No screening needed", "Not recommended"],
                                ["21–29 years", "Pap Smear (cytology)", "Every 3 years"],
                                ["30–65 years", "Co-testing: Pap + HPV DNA", "Every 5 years (preferred)"],
                                ["30–65 years (alt)", "Pap Smear alone", "Every 3 years"],
                                ["Over 65", "N/A (if prior results normal)", "Stop screening after 3 normal Paps"]
                            ],
                            caption: "High-risk women (HIV+, immunosuppressed, prior CIN history) may need more frequent screening. Ask your gynaecologist."
                        }
                    },
                    {
                        id: "vaccines",
                        heading: "HPV Vaccination — Protect Before Exposure",
                        bullets: [
                            "Cervavac (India's indigenous quadrivalent vaccine) — covers HPV 6, 11, 16, 18",
                            "Cervarix (Bivalent) — covers HPV 16 & 18 (high-risk types causing 70% of cervical cancers)",
                            "Gardasil-9 (9-valent) — covers 9 HPV types; broadest protection available",
                            "Best given before first sexual exposure (ages 9–14); effective up to age 45",
                            "3-dose schedule (0, 2, 6 months) for women ≥15 years and immunocompromised",
                            "2-dose schedule (0, 6 months) for girls 9–14 years"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Is a Pap smear painful?",
                        answer: "A Pap smear causes mild discomfort for 10–15 seconds. Deep breathing helps. The procedure takes less than 5 minutes. Our gynaecologists ensure you are comfortable throughout."
                    },
                    {
                        question: "If I've had the HPV vaccine, do I still need Pap smears?",
                        answer: "Yes. The vaccine protects against HPV 16 & 18 (responsible for ~70% of cervical cancers) but not all high-risk HPV types. Regular Pap smears and HPV testing remain essential even after vaccination."
                    }
                ]
            }}
            timeline={{
                title: "Your Cervical Screening Appointment",
                steps: [
                    { title: "Consultation", description: "Gynaecologist takes history, discusses risk factors, and explains the procedure.", duration: "10 Mins" },
                    { title: "Pap Smear / HPV Test", description: "Sample taken from cervix using a small brush. Quick and minimally uncomfortable.", duration: "5 Mins" },
                    { title: "Colposcopy (if indicated)", description: "Magnified examination of cervix with acetic acid / iodine if Pap is abnormal.", duration: "15-20 Mins" },
                    { title: "Results & Counselling", description: "Results in 3–5 days. Gynaecologist explains findings and next steps.", duration: "Follow-up Visit" }
                ]
            }}
            relatedServices={{
                serviceSlug: "obstetrics-gynaecology",
                related: [
                    { title: "PCOS Treatment", href: "/doctor/near-me/treat/obstetrics-gynaecology/pcod-pcos-treatment-guide" },
                    { title: "Laparoscopic Hysterectomy", href: "/doctor/near-me/treat/obstetrics-gynaecology/laparoscopic-hysterectomy-guide" },
                    { title: "Breast Cancer Screening", href: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" }
                ]
            }}
            reviews={{
                entityName: "Obstetrics & Gynaecology",
                entitySlug: "obstetrics-gynaecology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Why Cervical Cancer Screening Saves Lives</h2>
                <p>
                    India accounts for nearly <strong>1 in 4 cervical cancer deaths globally</strong>. The vast majority occur because most women are diagnosed at late stages — not because the cancer is aggressive early on, but because it has no symptoms until it is advanced. Early-stage cervical cancer (Stage I) has a <strong>&gt;90% cure rate</strong>.
                </p>

                <h3>Who is at Higher Risk?</h3>
                <ul>
                    <li><strong>Multiple sexual partners or a partner with multiple partners:</strong> Major HPV exposure risk</li>
                    <li><strong>Smoking:</strong> Doubles the risk of cervical cancer progression from HPV</li>
                    <li><strong>HIV / Immunosuppression:</strong> Annual screening recommended</li>
                    <li><strong>Long-term OCP use (&gt;5 years):</strong> Modest increased risk</li>
                    <li><strong>Prior abnormal Pap smear (CIN 2/3) or LEEP/cone biopsy:</strong> Closer monitoring required</li>
                    <li><strong>DES exposure in utero:</strong> Clear-cell adenocarcinoma risk</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 rounded-[2.5rem] border border-pink-100 dark:border-pink-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-pink-300 mb-4 tracking-tight">Women's Cancer Prevention Clinic</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Annual Women's Health Checkup Packages",
                            "In-house Colposcopy & LEEP",
                            "HPV DNA Typing (all 14 high-risk types)",
                            "Cervavac, Cervarix & Gardasil-9 in Stock"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Book Your Screening Today</h2>
                <p>
                    Don't wait for symptoms. Cervical cancer screening is a <strong>20-minute appointment</strong> that could save your life. All female patients are encouraged to schedule a Pap smear with our gynaecologist. We maintain strict privacy and are committed to making the experience as comfortable as possible.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
