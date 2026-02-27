import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Endometriosis Diagnosis & Laparoscopic Treatment | Indira Hospital Vellore",
    description: "Expert Endometriosis diagnosis and minimally invasive laparoscopic treatment at Indira Hospital, Vellore. Reduce pain, improve fertility, and restore quality of life.",
    keywords: ["Endometriosis treatment Vellore", "Laparoscopic endometriosis surgery", "Gynaecologist Vellore", "Adenomyosis treatment", "Pelvic pain specialist Vellore", "Women's health Vellore"]
};

export default function EndometriosisPage() {
    return (
        <SubServiceTemplate
            departmentName="Obstetrics & Gynaecology"
            departmentSlug="obstetrics-gynaecology"
            title="Endometriosis – Diagnosis & Treatment"
            eyebrow="Advanced Gynaecological Surgery"
            description={
                <p>
                    <strong>Endometriosis</strong> is a chronic inflammatory condition where tissue similar to the uterine lining grows outside the uterus — on the ovaries, fallopian tubes, and pelvic lining — causing severe pelvic pain, painful periods, and infertility. Despite affecting 1 in 10 women of reproductive age, the <strong>average diagnosis takes 7–10 years</strong>. We aim to change that with early recognition and targeted treatment at Indira Hospital.
                </p>
            }
            quickFacts={[
                { label: "OPD Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
                { label: "Diagnostic Lap", value: "₹30,000 – ₹60,000", icon: "IndianRupee" },
                { label: "Excision Surgery", value: "₹60,000 – ₹1,20,000", icon: "IndianRupee" },
                { label: "Infertility Benefit", value: "50–60% Improvement", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "staging",
                        heading: "Endometriosis Staging (rAFS Classification)",
                        description: "Endometriosis is staged I–IV based on extent of disease found at diagnostic laparoscopy:",
                        table: {
                            headers: ["Stage", "Description", "Primary Symptoms"],
                            rows: [
                                ["Stage I (Minimal)", "Small, isolated implants, no adhesions", "Mild dysmenorrhoea"],
                                ["Stage II (Mild)", "Small implants on ovary/pelvic lining", "Moderate pain, dyspareunia"],
                                ["Stage III (Moderate)", "Endometriomas, peritubal adhesions", "Severe pain, reduced fertility"],
                                ["Stage IV (Severe)", "Large endometriomas, total obliteration of cul-de-sac", "Severe pain, infertility"]
                            ],
                            caption: "Staging guides surgical approach and need for IVF. Indira Hospital offers full laparoscopic management."
                        }
                    },
                    {
                        id: "treatment",
                        heading: "Our Endometriosis Treatment Protocol",
                        bullets: [
                            "Medical management: Hormonal suppression (NSAIDs, COCPs, GnRH agonists, Dienogest/Visanne)",
                            "Laparoscopic excision — gold standard for Stage III/IV and infertility",
                            "Endometrioma (ovarian cyst) cystectomy with ovarian conservation",
                            "Deep infiltrating endometriosis (DIE) excision by skilled laparoscopic surgeons",
                            "Post-surgical medical therapy to prevent recurrence",
                            "Fertility adjuncts: IUI or IVF coordination post-excision surgery"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Can endometriosis be cured?",
                        answer: "Laparoscopic excision is the most effective treatment and can provide 70-80% long-term pain relief. However, recurrence occurs in up to 20-30% within 5 years, especially without post-surgical medical therapy. Definitive cure (risk of recurrence close to zero) is achieved with hysterectomy + bilateral salpingo-oophorectomy in women who have completed their families."
                    },
                    {
                        question: "Does endometriosis always cause infertility?",
                        answer: "Not always. Many women with minimal endometriosis conceive naturally. However, stages III and IV significantly reduce natural conception rates. Laparoscopic surgery improves natural pregnancy rates and also improves IVF success rates."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "obstetrics-gynaecology",
                related: [
                    { title: "PCOS Treatment", href: "/doctor/near-me/treat/obstetrics-gynaecology/pcod-pcos-treatment-guide" },
                    { title: "Laparoscopic Hysterectomy", href: "/doctor/near-me/treat/obstetrics-gynaecology/laparoscopic-hysterectomy-guide" },
                    { title: "Infertility Evaluation", href: "/doctor/near-me/treat/obstetrics-gynaecology/infertility-evaluation-steps" }
                ]
            }}
            reviews={{
                entityName: "Obstetrics & Gynaecology",
                entitySlug: "obstetrics-gynaecology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Breaking the Endometriosis Diagnosis Delay at Indira Hospital</h2>
                <p>
                    Our gynaecologists have a <strong>low threshold for diagnostic laparoscopy</strong> when a woman presents with classic endometriosis symptoms (dysmenorrhoea, deep dyspareunia, chronic pelvic pain, infertility) — particularly when pelvic ultrasound is normal. We believe every woman deserves a clear answer and a clear plan.
                </p>

                <h3>Common Symptom Patterns of Endometriosis</h3>
                <ul>
                    <li><strong>Dysmenorrhoea (Painful Periods):</strong> Pain begins 1–2 days before menstruation and is disproportionately severe — not relieved by OTC pain medications</li>
                    <li><strong>Dyspareunia (Pain During Intercourse):</strong> Deep pain, particularly in certain positions — a hallmark of rectovaginal or cul-de-sac endometriosis</li>
                    <li><strong>Dyschezia:</strong> Painful bowel movements during periods — suggests bowel endometriosis</li>
                    <li><strong>Dysuria:</strong> Painful urination during periods — suggests bladder endometriosis</li>
                    <li><strong>Chronic Pelvic Pain:</strong> Non-cyclical pelvic pain between periods</li>
                    <li><strong>Fatigue:</strong> Profound, debilitating fatigue associated with heavy periods and chronic pain</li>
                    <li><strong>Infertility:</strong> Unexplained infertility for &gt;12 months in a woman under 35</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/10 dark:to-pink-900/10 rounded-[2.5rem] border border-rose-100 dark:border-rose-900 shadow-sm dark:shadow-slate-900/30">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-rose-300 mb-4 tracking-tight">Advanced Gynaecological Surgery Unit</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Advanced Laparoscopic Excision Surgery",
                            "Endometrioma (Ovarian Cyst) Cystectomy",
                            "Pelvic Adhesiolysis (Scar Release)",
                            "Fertility-Preserving Approach"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>You Deserve to Live Without Pain</h2>
                <p>
                    Severe period pain is <strong>not normal</strong>. If your periods are interfering with your school, work, or relationships — or if you have been trying to conceive without success — please see our gynaecologist. We will give you answers, not just pain medications.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
