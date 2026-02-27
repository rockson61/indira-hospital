import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Inguinal Hernia Repair – Laparoscopic & Open Surgery | Indira Hospital Vellore",
    description: "Expert Inguinal Hernia repair at Indira Hospital, Vellore. Laparoscopic (TEP/TAPP) and open mesh repair by experienced surgeons. Fast recovery, minimal recurrence.",
    keywords: ["Inguinal hernia repair Vellore", "Hernia surgery cost Tamil Nadu", "Laparoscopic hernia surgeon Vellore", "TEP hernia repair", "TAPP hernia", "General surgeon Vellore"]
};

export default function InguinalHerniaRepairPage() {
    return (
        <SubServiceTemplate
            departmentName="General Surgery"
            departmentSlug="general-surgery"
            title="Inguinal Hernia Repair"
            eyebrow="Minimal Access Surgery"
            description={
                <p>
                    An <strong>inguinal hernia</strong> occurs when tissue (usually part of the intestine or fatty tissue) pushes through a weak spot in the abdominal muscles in the groin area, causing a noticeable bulge that may be painful — especially when coughing, bending, or lifting. At Indira Hospital, we offer both <strong>laparoscopic (keyhole) and open mesh hernia repair</strong> with excellent long-term results and minimal recurrence rates.
                </p>
            }
            quickFacts={[
                { label: "Surgery Cost (Open)", value: "₹25,000 – ₹45,000", icon: "IndianRupee" },
                { label: "Surgery Cost (Lap)", value: "₹45,000 – ₹80,000", icon: "IndianRupee" },
                { label: "Duration", value: "45–90 Mins", icon: "Clock" },
                { label: "Hospital Stay", value: "Day Procedure / 1 Day", icon: "Activity" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "lap-vs-open",
                        heading: "Laparoscopic vs. Open Hernia Repair",
                        description: "Both approaches use a synthetic mesh to reinforce the weak area. Here is how they compare:",
                        table: {
                            headers: ["Feature", "Open Repair (Lichtenstein)", "Laparoscopic (TEP/TAPP)"],
                            rows: [
                                ["Incision", "Single 6–8 cm groin incision", "3 small keyhole (5–10 mm)"],
                                ["Recovery time", "Return to work 2–3 weeks", "Return to work 7–10 days"],
                                ["Pain level", "Moderate post-op pain", "Significantly less pain"],
                                ["Bilateral hernia", "Two separate procedures", "Both sides treated at once"],
                                ["Recurrence rate", "1–5%", "1–3%"],
                                ["Cost", "Lower", "Slightly higher (laparoscope equipment)"],
                                ["Anaesthesia", "Spinal or local + sedation", "General anaesthesia (required)"]
                            ],
                            caption: "Our surgeon recommends the optimal technique based on your anatomy and activity level."
                        }
                    },
                    {
                        id: "when-to-operate",
                        heading: "When is Surgery Mandatory?",
                        bullets: [
                            "Large hernias causing significant discomfort or cosmetic concern",
                            "Hernia enlarging progressively over time",
                            "Inability to push the hernia back (irreducible hernia)",
                            "Emergency: Hernia is incarcerated (trapped) or strangulated (cut off blood supply) — requires urgent surgery",
                            "Bilateral inguinal hernias: Both can be fixed simultaneously laparoscopically",
                            "Recurrent hernia after previous repair: Laparoscopic approach preferred"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "When can I return to work after hernia repair?",
                        answer: "Desk job: 5–7 days (laparoscopic) or 10–14 days (open). Heavy manual labour/lifting: 4–6 weeks for both techniques. Our surgeon provides specific post-op activity guidelines tailored to your job."
                    },
                    {
                        question: "Will my hernia come back after surgery?",
                        answer: "With modern mesh repair, recurrence rates are very low: 1–3% for laparoscopic and 1–5% for open repair. Without surgery (watchful waiting), the hernia will inevitably enlarge and risk strangulation."
                    }
                ]
            }}
            timeline={{
                title: "Hernia Repair Pathway",
                steps: [
                    { title: "Assessment", description: "Surgeon confirms hernia type and size via ultrasound. Anaesthesia fitness evaluated.", duration: "Day 1" },
                    { title: "Surgery Day", description: "Fast from midnight. Report to hospital 2 hours before. Surgery under spinal (open) or general (lap) anaesthesia.", duration: "45–90 Mins" },
                    { title: "Recovery Room", description: "2–4 hours post-anaesthesia observation. Walk before discharge.", duration: "2–4 Hrs" },
                    { title: "Home Recovery", description: "Paracetamol for mild pain. Avoid heavy lifting 6 weeks. Wound review at 7 days.", duration: "7–10 Days" }
                ]
            }}
            relatedServices={{
                serviceSlug: "general-surgery",
                related: [
                    { title: "Laparoscopic Hernia Repair", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
                    { title: "Gallbladder Surgery", href: "/doctor/near-me/treat/general-surgery/gallbladder-removal-recovery" },
                    { title: "Appendix Surgery", href: "/doctor/near-me/treat/general-surgery/appendix-surgery-steps" }
                ]
            }}
            reviews={{
                entityName: "General Surgery",
                entitySlug: "general-surgery",
                entityType: "department"
            }}
        >
            <section>
                <h2>Expert Hernia Surgery in Vellore</h2>
                <p>
                    Indira Hospital's General Surgery department has a dedicated <strong>Hernia Centre</strong> with experienced laparoscopic surgeons skilled in TEP (Totally Extraperitoneal) and TAPP (Transabdominal Preperitoneal) repairs. We perform high volumes of hernia surgery with excellent outcomes.
                </p>

                <h3>Understanding the Risks of Delaying Surgery</h3>
                <p>
                    Many patients live with hernias for years without major problems. However, the risk of a serious complication — <strong>incarceration or strangulation</strong> — exists and increases over time. Strangulation cuts off blood supply to the trapped intestine, requiring emergency surgery with a significantly higher complication rate. Elective repair is always safer and faster.
                </p>
                <ul>
                    <li><strong>Incarcerated hernia:</strong> Cannot be pushed back manually — urgent surgery needed</li>
                    <li><strong>Strangulated hernia:</strong> Blood supply cut off — emergency surgery, possible bowel resection</li>
                    <li><strong>Obstructed hernia:</strong> Intestinal obstruction from trapped bowel</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-green-50 to-pink-50 dark:from-green-900/10 dark:to-pink-900/10 rounded-[2.5rem] border border-green-100 dark:border-green-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-green-300 mb-4 tracking-tight">Hernia Centre at Indira Hospital</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "TEP & TAPP Laparoscopic Repair",
                            "Bilateral Hernias Fixed Simultaneously",
                            "Day Surgery — Home Same Day",
                            "High-Quality Mesh (Polyester / Polypropylene)"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Insurance</h2>
                <p>
                    Open hernia repair starts at <strong>₹25,000</strong> and laparoscopic repair at <strong>₹45,000</strong> at Indira Hospital, inclusive of mesh, OT charges, and anaesthesia. Most insurance plans cover hernia surgery — our team will assist with cashless pre-authorization.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
