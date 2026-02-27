import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Laparoscopic Gallbladder Stone Surgery (Cholecystectomy) | Indira Hospital Vellore",
    description: "Advanced Laparoscopic Gallbladder Stone Surgery (Cholecystectomy) at Indira Super Speciality Hospital, Vellore. Minimally invasive, painless procedure with rapid recovery.",
    keywords: ["Gallbladder surgery Vellore", "Laparoscopic cholecystectomy cost", "Gallstone removal hospital", "Gastro surgeon Vellore", "Keyhole surgery gallbladder"]
};

export default function GallbladderSurgeryPage() {
    return (
        <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
            title="Laparoscopic Gallbladder Surgery"
            eyebrow="General Surgery Excellence"
            description={
                <p>
                    World-class <strong>Keyhole Surgery (Laparoscopic Cholecystectomy)</strong> for permanent relief from gallbladder stones. Performed by senior gastro-surgeons using the latest minimally invasive 4K technology.
                </p>
            }
            quickFacts={[
                { label: "Cost Package", value: "₹45k – ₹65k", icon: "IndianRupee" },
                { label: "Duration", value: "45-60 Mins", icon: "Clock" },
                { label: "Recovery", value: "1-2 Days", icon: "Activity" },
                { label: "Incision", value: "Keyhole (5mm)", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "lap-vs-open",
                        heading: "Why Laparoscopic (Keyhole) Surgery?",
                        description: "Modern laparoscopic surgery is the gold standard for gallbladder stone removal, offering significant advantages over traditional open surgery:",
                        table: {
                            headers: ["Feature", "Laparoscopic (Indira)", "Traditional Open"],
                            rows: [
                                ["Incision Size", "3-4 Tiny Points (5-10mm)", "Large Cut (10-15cm)"],
                                ["Hospital Stay", "1-2 Days", "5-7 Days"],
                                ["Pain Level", "Minimal Discomfort", "Significant Pain"],
                                ["Recovery", "Back to work in 1 week", "Home-bound for 4-6 weeks"],
                                ["Scarring", "Virtually Invisible", "Permanent Large Scar"]
                            ],
                            caption: "Comparing Laparoscopic Cholecystectomy outcomes at Indira Hospital."
                        }
                    },
                    {
                        id: "symptoms",
                        heading: "Gallbladder Stone Symptoms",
                        bullets: [
                            "Sudden and rapid pain in the upper right abdomen (biliary colic).",
                            "Persistent pain in the back between the shoulder blades.",
                            "Nausea or vomiting, especially after consuming fatty meals.",
                            "Digestive issues like indigestion or persistent bloating.",
                            "Risk of complications: Jaundice or Pancreatitis if left untreated."
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Can I live a normal life without my gallbladder?",
                        answer: "Absolutely. The gallbladder's role is to store bile, but once removed, bile flows directly into the small intestine. Most patients live a completely normal life with a high satisfaction rate."
                    },
                    {
                        question: "How long is the hospital stay?",
                        answer: "For a standard laparoscopic cholecystectomy, most patients are admitted in the morning, undergo surgery, and are discharged the following morning."
                    }
                ]
            }}
            timeline={{
                title: "Gallbladder Surgery Roadmap",
                steps: [
                    { title: "Pre-Surgical Prep", description: "Blood screening and Ultrasound mapping to confirm stone location." },
                    { title: "Seamless Admission", description: "Standardized admission on the morning of your procedure." },
                    { title: "Precision Surgery", description: "Minimally invasive removal using 4K laparoscopic imaging." },
                    { title: "Early Mobilization", description: "Walking within 6 hours and discharge within 24 hours." }
                ]
            }}
            relatedServices={{
                serviceSlug: "general-surgery",
                related: [
                    { title: "Appendix Surgery Steps", href: "/doctor/near-me/treat/general-surgery/appendix-surgery-steps" },
                    { title: "Hernia Repair Guide", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
                    { title: "Laser Piles Treatment", href: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" }
                ]
            }}
            reviews={{
                entityName: "General Surgery",
                entitySlug: "general-surgery",
                entityType: "department"
            }}
        >
            <section>
                <h2>Leading Center for Laparoscopic Surgery in Vellore</h2>
                <p>
                    At Indira Super Speciality Hospital, we are pioneers in <strong>Laparoscopic Cholecystectomy</strong>. Our department of General & Gastro Surgery follows international protocols to ensure the safest patient outcomes and superior cosmetic results with minimal scarring.
                </p>

                <h3>Advanced 4K Imaging & Technology</h3>
                <p>
                    Our modular operating theaters are equipped with <strong>High-Definition 4K Laparoscopic Towers</strong>. This provides our surgeons with extreme clarity, allowing for safer dissection and better protection of the bile duct and surrounding organs.
                </p>

                <div className="my-10 p-8 md:p-12 bg-gradient-to-br from-fuchsia-50 to-fuchsia-50 dark:from-indigo-900/10 dark:to-fuchsia-900/10 rounded-[2.5rem] border border-indigo-100 dark:border-fuchsia-700 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-fuchsia-300 mb-6 tracking-tight">Transparent Surgical Packages</h4>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                        Our surgical packages are designed for transparency and affordability. We utilize USFDA-approved energy devices for all cases.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Cashless Insurance (50+ TPAs)",
                            "Premium & Private Room Options",
                            "Post-Surgery Diet Counseling",
                            "24/7 Dedicated Gastro Support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Don't Wait for Complications</h2>
                <p>
                    Ignoring gallbladder stones can lead to serious conditions like infection (cholecystitis), jaundice, or life-threatening pancreatitis. If you've been diagnosed with gallstones, schedule a consultation with our experts to discuss your laparoscopic options.
                </p>

                <h3>Expert Gastro Surgeons</h3>
                <p>
                    Our surgical team is highly experienced in gastrointestinal procedures, ensuring that even complex cases are handled with the highest level of precision and care.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
