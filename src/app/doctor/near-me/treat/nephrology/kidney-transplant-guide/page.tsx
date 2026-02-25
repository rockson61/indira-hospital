import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Kidney Transplant – Procedure, Cost & Care | Indira Hospital Vellore",
    description: "Kidney transplant evaluation, pre-transplant workup, and post-transplant care at Indira Hospital, Vellore. Expert nephrologists guiding you through every step.",
    keywords: ["Kidney transplant Vellore", "Renal transplant Tamil Nadu", "Kidney transplant cost India", "Living donor kidney transplant", "ESRD treatment Vellore", "Nephrology hospital"]
};

export default function KidneyTransplantPage() {
    return (
        <SubServiceTemplate
            departmentName="Nephrology"
            departmentSlug="nephrology"
            title="Kidney Transplant & Pre-Transplant Care"
            eyebrow="Transplant Nephrology"
            description={
                <p>
                    A <strong>kidney transplant</strong> is the most effective treatment for end-stage renal disease (ESRD) — offering a better quality of life and superior long-term outcomes compared to lifelong dialysis. Indira Hospital's nephrology team provides <strong>comprehensive pre-transplant evaluation, workup coordination, and lifelong post-transplant immunosuppression management</strong>.
                </p>
            }
            quickFacts={[
                { label: "Pre-Transplant Workup", value: "Guided by Our Team", icon: "Activity" },
                { label: "Post-Transplant Follow-up", value: "Lifelong Care", icon: "ShieldCheck" },
                { label: "Dialysis (Interim)", value: "HD & PD Available", icon: "Clock" },
                { label: "Immunosuppression", value: "Protocol Managed", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "transplant-vs-dialysis",
                        heading: "Kidney Transplant vs. Dialysis — A Life-Changing Decision",
                        description: "Transplant is medically superior to dialysis for eligible patients, but requires careful evaluation:",
                        table: {
                            headers: ["Factor", "Haemodialysis (HD)", "Kidney Transplant"],
                            rows: [
                                ["10-Year Survival", "~30–35%", "~60–70%"],
                                ["Quality of Life", "Significantly Impaired", "Near-Normal"],
                                ["Dietary Restrictions", "Strict (Fluid/K/P)", "Less Restrictive"],
                                ["Cardiovascular Risk", "Markedly Elevated", "Substantially Reduced"],
                                ["Cost (Long-term)", "Very High (ongoing)", "High Upfront, Lower Long-term"],
                                ["Freedom", "3x/week hospital visits", "Independent lifestyle"]
                            ],
                            caption: "Data based on published nephrology literature. Individual outcomes vary."
                        }
                    },
                    {
                        id: "pre-transplant",
                        heading: "Pre-Transplant Evaluation at Indira Hospital",
                        bullets: [
                            "Comprehensive metabolic & infectious disease workup (HIV, HBsAg, HCV, CMV, EBV)",
                            "Cardiac evaluation: ECG, Echo, TMT to assess fitness for major surgery",
                            "Urological evaluation: Cystoscopy, voiding cystourethrogram if indicated",
                            "Immunological testing: ABO blood group, HLA tissue typing, crossmatch",
                            "Psychosocial assessment: Compliance capacity and support system evaluation",
                            "Coordination with transplant centres for living or cadaveric donor options"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Who is eligible for a kidney transplant?",
                        answer: "Most patients with ESRD under 70 years without active malignancy, severe heart disease, or untreated infection are potential candidates. Our nephrologist will assess your eligibility and discuss living vs. deceased donor options."
                    },
                    {
                        question: "Can I get a kidney from a family member?",
                        answer: "Yes. A living donor (blood relative or spouse, in some states) can donate one kidney. Living donor transplants have better outcomes than deceased donor kidneys. We guide both recipient and donor through the screening process."
                    }
                ]
            }}
            relatedServices={{
                serviceSlug: "nephrology",
                related: [
                    { title: "Dialysis Guide", href: "/doctor/near-me/treat/nephrology/dialysis-procedure-guide" },
                    { title: "AV Fistula Surgery", href: "/doctor/near-me/treat/nephrology/av-fistula-surgery" },
                    { title: "Chronic Kidney Disease", href: "/doctor/near-me/treat/nephrology/chronic-kidney-disease-stages" }
                ]
            }}
            reviews={{
                entityName: "Nephrology Care",
                entitySlug: "nephrology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Nephrology Excellence at Indira Hospital</h2>
                <p>
                    Our Nephrology team manages the complete spectrum of kidney diseases — from early CKD detection to dialysis maintenance and <strong>pre/post-transplant care</strong>. We work closely with affiliated transplant centres to ensure our patients access the best possible outcomes.
                </p>

                <h3>Post-Transplant Immunosuppression Management</h3>
                <p>
                    Preventing rejection while minimising drug side effects requires lifelong, expert management. Our protocol typically includes:
                </p>
                <ul>
                    <li><strong>Calcineurin Inhibitors:</strong> Tacrolimus or Cyclosporine (backbone of prevention)</li>
                    <li><strong>Antimetabolites:</strong> Mycophenolate Mofetil (MMF) to reduce immune cell proliferation</li>
                    <li><strong>Steroids:</strong> Low-dose prednisolone, with steroid-minimization where possible</li>
                    <li><strong>Drug Level Monitoring:</strong> Regular tacrolimus trough levels to prevent toxicity and rejection</li>
                    <li><strong>Infection Prophylaxis:</strong> CMV, PCP, fungal prophylaxis in early post-transplant period</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/10 dark:to-blue-900/10 rounded-[2.5rem] border border-sky-100 dark:border-sky-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-sky-300 mb-4 tracking-tight">Our Nephrology & Transplant Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Pre-Transplant Workup Coordination",
                            "Post-Transplant Immunosuppression Clinic",
                            "In-Centre Haemodialysis (3x/week)",
                            "CAPD / Peritoneal Dialysis Training"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Taking the First Step</h2>
                <p>
                    If you or a family member has been told that dialysis is needed, or if your kidney function (eGFR) is declining, now is the right time to discuss your transplant options with our nephrologist — before reaching ESRD stage. Early evaluation ensures you are listed and prepared well in advance.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
