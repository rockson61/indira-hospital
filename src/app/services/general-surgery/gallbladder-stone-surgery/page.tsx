import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
    title: "Laparoscopic Gallbladder Stone Surgery (Cholecystectomy) | Indira Hospital Vellore",
    description: "Advanced Laparoscopic Gallbladder Stone Surgery (Cholecystectomy) at Indira Super Speciality Hospital, Vellore. Minimally invasive, painless procedure with rapid recovery."
};

export default function GallbladderSurgeryPage() {
    return (
        <SubServiceTemplate
            title="Laparoscopic Gallbladder Surgery"
            eyebrow="General Surgery Treatment"
            description={
                <p>
                    World-class <strong>Keyhole Surgery (Laparoscopic Cholecystectomy)</strong> for permanent relief from gallbladder stones. Performed by senior gastro-surgeons using the latest minimally invasive technology.
                </p>
            }
            quickFacts={[
                { label: "Cost", value: "₹45,000 – ₹65,000", icon: "IndianRupee" },
                { label: "Duration", value: "45–60 Minutes", icon: "Clock" },
                { label: "Recovery", value: "1–2 Days", icon: "Activity" },
                { label: "Incision", value: "Keyhole (5mm)", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "lap-vs-open",
                        heading: "Why Laparoscopic (Keyhole) Surgery?",
                        description: "Modern laser-assisted laparoscopic surgery is the gold standard for gallbladder stone removal:",
                        table: {
                            headers: ["Feature", "Laparoscopic Surgery", "Open Surgery"],
                            rows: [
                                ["Incision Size", "3-4 Tiny Keyholes (5-10mm)", "Large Cut (10-15cm)"],
                                ["Hospital Stay", "1 Day", "5-7 Days"],
                                ["Pain Level", "Minimal", "Significant"],
                                ["Recovery", "Back to work in 1 week", "Recovery takes 4-6 weeks"],
                                ["Scarring", "Virtually Invisible", "Permanent Large Scar"]
                            ],
                            caption: "Benefits of Laparoscopic Cholecystectomy at Indira Hospital."
                        }
                    },
                    {
                        id: "symptoms",
                        heading: "Gallbladder Stone Symptoms",
                        bullets: [
                            "Sudden and rapidly intensifying pain in the upper right abdomen",
                            "Pain in the back between shoulder blades",
                            "Nausea or vomiting after fatty meals",
                            "Indigestion or persistent bloating",
                            "Yellowing of skin (Jaundice) in severe cases"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Can I live normally without a gallbladder?",
                        answer: "Yes, once the stones and gallbladder are removed, bile flows directly into the small intestine. Most patients live a completely normal life with minor diet adjustments in the first few weeks."
                    },
                    {
                        question: "When can I resume normal activities?",
                        answer: "Most patients can walk within 6 hours and resume light office work within 3-4 days of laparoscopic surgery."
                    }
                ]
            }}
            timeline={{
                title: "Your Surgery Roadmap",
                steps: [
                    { title: "Pre-op Screening", description: "Blood tests and Ultrasound mapping." },
                    { title: "Admission", description: "Admission on the morning of surgery." },
                    { title: "Surgery", description: "Minimally invasive removal (1 hour)." },
                    { title: "Home Recovery", description: "Discharge the following morning." }
                ]
            }}
            relatedServices={{
                serviceSlug: "general-surgery/gallbladder-stone-surgery",
                related: [
                    { title: "Laparoscopic Hernia", href: "/services/general-surgery/laparoscopic-hernia-repair" },
                    { title: "Appendix Surgery", href: "/services/general-surgery/appendix-surgery-steps" }
                ]
            }}
            reviews={{
                entityName: "Gallbladder Stone Surgery",
                entitySlug: "general-surgery/gallbladder-stone-surgery"
            }}
        >
            <section>
                <h2>Vellore's Leading Center for Laparoscopic Surgery</h2>
                <p>
                    At Indira Super Speciality Hospital, we specialize in <strong>Laparoscopic Cholecystectomy</strong>. Our surgical team has performed thousands of successful gallbladder removals, ensuring high safety standards and excellent cosmetic results.
                </p>

                <h3>State-of-the-Art Operation Theaters</h3>
                <p>
                    We use high-definition <strong>4K Laparoscopic Towers</strong> and integrated energy devices that minimize blood loss and surrounding tissue damage. This technology, combined with our anaesthesia team's expertise, makes the surgery exceptionally safe even for high-risk patients.
                </p>

                <div className="my-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-3xl border border-purple-100 dark:border-purple-800">
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4 tracking-tight">Transparent Surgery Packages</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                        Our surgical packages are designed to be affordable without compromising on quality. We use FDA-approved disposables for every case.
                    </p>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> Cashless Insurance</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> Private Rooms Available</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> Post-op Nutrition Guide</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> 24/7 Surgical Support</li>
                    </ul>
                </div>

                <h2>Cost & Booking</h2>
                <p>
                    Laparoscopic Gallbladder Surgery packages start at <strong>₹45,000</strong>. We also offer emergency surgery for acute cholecystitis. You can book an evaluation with our gastro-surgeon today via our website.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
