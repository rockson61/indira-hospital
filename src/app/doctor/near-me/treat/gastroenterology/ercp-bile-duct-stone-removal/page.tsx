import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "ERCP Procedure – Bile Duct Stone Removal | Indira Hospital Vellore",
    description: "ERCP (Endoscopic Retrograde Cholangiopancreatography) for bile duct stones, strictures, and pancreatic disease at Indira Hospital, Vellore. Expert GI endoscopists.",
    keywords: ["ERCP Vellore", "Bile duct stone removal Vellore", "Endoscopy Vellore", "Cholangiopancreatography", "CBD stone treatment Vellore", "GI endoscopy hospital"]
};

export default function ERCPProcedurePage() {
    return (
        <SubServiceTemplate
            departmentName="Gastroenterology"
            departmentSlug="gastroenterology"
            title="ERCP – Bile Duct Stone Removal"
            eyebrow="Therapeutic Endoscopy"
            description={
                <p>
                    <strong>ERCP (Endoscopic Retrograde Cholangiopancreatography)</strong> is an advanced endoscopic procedure that allows our GI specialists to both diagnose and treat conditions of the bile ducts, gallbladder, and pancreas — without open surgery. It is the most effective technique for removing stones lodged in the Common Bile Duct (CBD).
                </p>
            }
            quickFacts={[
                { label: "Procedure Cost", value: "₹20,000 – ₹40,000", icon: "IndianRupee" },
                { label: "Duration", value: "45–90 Mins", icon: "Clock" },
                { label: "Hospital Stay", value: "1–2 Days", icon: "Activity" },
                { label: "Fasting", value: "6 Hrs Required", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "what-ercp-treats",
                        heading: "Conditions Treated with ERCP",
                        description: "ERCP combines an endoscope with X-ray to access the hepatobiliary system, enabling treatment of multiple conditions:",
                        table: {
                            headers: ["Condition", "ERCP Technique Used"],
                            rows: [
                                ["CBD (Common Bile Duct) Stones", "Sphincterotomy + Stone extraction"],
                                ["Biliary Stricture", "Balloon dilation + Stent placement"],
                                ["Pancreatic Duct Stones", "Pancreatoscopy + Lithotripsy"],
                                ["CBD Leak (post-cholecystectomy)", "Biliary stenting to bridge leak"],
                                ["Sclerosing Cholangitis", "Brushings + Dilation"],
                                ["Cholangiocarcinoma (Bile Duct Cancer)", "Tissue biopsy + Palliative stenting"]
                            ],
                            caption: "All ERCP procedures performed by trained therapeutic endoscopists at Indira Hospital."
                        }
                    },
                    {
                        id: "benefits",
                        heading: "Advantages Over Open Surgery",
                        bullets: [
                            "No stitches — access via your mouth, no abdominal incisions",
                            "Day surgery or 1-night stay for most cases",
                            "Immediate relief from obstructive jaundice",
                            "Can be combined with diagnostic imaging (EUS) in the same session",
                            "Safe even in elderly and high-risk surgical patients"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Is ERCP painful?",
                        answer: "ERCP is performed under deep sedation or general anesthesia, so you will not feel pain during the procedure. Post-procedure, mild throat soreness and bloating are common and resolve within 24 hours."
                    },
                    {
                        question: "What are the risks of ERCP?",
                        answer: "ERCP is generally safe. The main risks include post-ERCP pancreatitis (3-5%), bleeding after sphincterotomy (1-2%), and infection (1%). These are managed by our expert team with standard protocols."
                    }
                ]
            }}
            timeline={{
                title: "ERCP Procedure Pathway",
                steps: [
                    { title: "Pre-procedure Prep", description: "6-hour fasting, IV line, consent, and brief anaesthesia assessment.", duration: "30 Mins" },
                    { title: "Sedation", description: "Deep sedation or monitored anesthesia administered by our anesthetist.", duration: "5 Mins" },
                    { title: "ERCP Procedure", description: "Scope passed to duodenum; papilla cannulated; stones removed or stent placed.", duration: "45–90 Mins" },
                    { title: "Recovery", description: "Observed for 2–4 hours; amylase check before discharge or overnight stay.", duration: "2–4 Hrs" }
                ]
            }}
            relatedServices={{
                serviceSlug: "gastroenterology",
                related: [
                    { title: "Endoscopy Guide", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
                    { title: "Pancreatitis Treatment", href: "/doctor/near-me/treat/gastroenterology/pancreatitis-treatment-steps" },
                    { title: "Colonoscopy Screening", href: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost" }
                ]
            }}
            reviews={{
                entityName: "Gastroenterology",
                entitySlug: "gastroenterology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Expert ERCP Services in Vellore</h2>
                <p>
                    Indira Hospital's <strong>Endoscopy Suite</strong> is equipped with therapeutic endoscopes, fluoroscopy (C-arm X-ray), and lithotripsy for comprehensive bile duct management. Our trained therapeutic endoscopists perform hundreds of ERCP procedures annually with complication rates well below national averages.
                </p>

                <h3>When is ERCP Recommended Over Surgery?</h3>
                <p>
                    For most patients with CBD stones, <strong>ERCP is the first-choice treatment</strong> over open or laparoscopic exploration because:
                </p>
                <ul>
                    <li>Higher success rate (&gt;95%) for single-session stone clearance</li>
                    <li>No abdominal incision — faster recovery</li>
                    <li>Can be performed even after cholecystectomy (gallbladder removal)</li>
                    <li>Suitable for patients too frail for general anesthesia (can use light sedation)</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-fuchsia-50 to-fuchsia-50 dark:from-fuchsia-900/10 dark:to-fuchsia-900/10 rounded-[2.5rem] border border-fuchsia-100 dark:border-fuchsia-800 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-fuchsia-300 mb-4 tracking-tight">Advanced Endoscopy Suite Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Fluoroscopy-Guided ERCP",
                            "Mechanical Lithotripsy for Large Stones",
                            "EUS-Guided Biliary Drainage",
                            "Carbon Dioxide Insufflation (Safer)"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Insurance & Cost</h2>
                <p>
                    ERCP at Indira Hospital is covered by most major insurance plans under the ICD-10 code for choledocholithiasis. Our billing team will coordinate cashless pre-authorization for eligible patients.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
