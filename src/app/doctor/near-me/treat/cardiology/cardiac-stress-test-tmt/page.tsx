import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Cardiac Stress Test (TMT) – Exercise ECG | Indira Hospital Vellore",
    description: "Treadmill Stress Test (TMT) and Stress Echocardiography at Indira Hospital, Vellore. Detect hidden coronary artery disease and measure exercise capacity. Affordable cost.",
    keywords: ["TMT test Vellore", "Treadmill test Vellore", "Stress ECG cost", "Cardiac stress test Vellore", "Exercise ECG Vellore", "Heart stress test"]
};

export default function CardiacStressTestPage() {
    return (
        <SubServiceTemplate
            departmentName="Cardiology"
            departmentSlug="cardiology"
            title="Cardiac Stress Test (TMT)"
            eyebrow="Cardiology Diagnostics"
            description={
                <p>
                    A <strong>Treadmill Stress Test (TMT)</strong> — also called an Exercise ECG or Exercise Stress Test — evaluates how your heart responds to physical exertion. It is the most commonly used screening test to detect hidden coronary artery disease (CAD), assess exercise capacity, and evaluate chest pain symptoms under controlled conditions.
                </p>
            }
            quickFacts={[
                { label: "Cost", value: "₹1,500 – ₹3,000", icon: "IndianRupee" },
                { label: "Duration", value: "30-45 Mins", icon: "Clock" },
                { label: "Preparation", value: "Fasting 2 Hrs", icon: "ShieldCheck" },
                { label: "Report", value: "Immediate", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "tmt-vs-stress-echo",
                        heading: "TMT vs Stress Echo — Which Should You Choose?",
                        description: "Depending on your baseline ECG and clinical history, your cardiologist will recommend the best stress test:",
                        table: {
                            headers: ["Feature", "TMT (Exercise ECG)", "Stress Echocardiography"],
                            rows: [
                                ["Cost", "₹1,500–₹3,000", "₹4,000–₹6,000"],
                                ["Sensitivity", "~68%", "~85%"],
                                ["Best For", "Routine screening", "Post-CABG / Complex cases"],
                                ["LBBB / Paced Rhythm", "Not suitable", "Preferred choice"],
                                ["Duration", "30 mins", "45-60 mins"]
                            ],
                            caption: "Your cardiologist will select the appropriate test based on your profile."
                        }
                    },
                    {
                        id: "indications",
                        heading: "Who Should Get a Stress Test?",
                        bullets: [
                            "Chest pain, tightness, or pressure on exertion",
                            "Shortness of breath during mild activity",
                            "Before starting a new high-intensity exercise program (>40 yrs with risk factors)",
                            "Annual surveillance after coronary angioplasty or bypass surgery",
                            "Unexplained palpitations or near-fainting during exercise",
                            "Pre-operative cardiac fitness clearance for major surgeries"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "What happens if the TMT is positive?",
                        answer: "A positive TMT indicates possible reduced blood flow to the heart during exercise. Your cardiologist will typically recommend a coronary angiography to confirm the extent of blockage and guide treatment."
                    },
                    {
                        question: "Is a cardiac stress test safe?",
                        answer: "Yes. The test is supervised by a cardiologist with a crash cart and defibrillator on standby. Serious complications occur in fewer than 1 in 10,000 tests."
                    }
                ]
            }}
            timeline={{
                title: "What Happens During a TMT?",
                steps: [
                    { title: "Preparation", description: "12-lead ECG and resting blood pressure recorded. Electrodes placed on chest.", duration: "10 Mins" },
                    { title: "Exercise Phase", description: "Walk on treadmill with increasing speed and incline following the Bruce Protocol.", duration: "8–12 Mins" },
                    { title: "Recovery", description: "Heart rate, ECG, and BP monitored for 6 minutes after stopping exercise.", duration: "6 Mins" },
                    { title: "Report", description: "Cardiologist interprets findings and provides a detailed written report immediately.", duration: "Immediate" }
                ]
            }}
            relatedServices={{
                serviceSlug: "cardiology",
                related: [
                    { title: "Echocardiography", href: "/doctor/near-me/treat/cardiology/echocardiography-echo-test" },
                    { title: "Coronary Angiography", href: "/doctor/near-me/treat/cardiology/coronary-angiography-guide" },
                    { title: "Preventive Heart Checkup", href: "/doctor/near-me/treat/cardiology/preventive-heart-checkup" }
                ]
            }}
            reviews={{
                entityName: "Cardiology Care",
                entitySlug: "cardiology",
                entityType: "department"
            }}
        >
            <section>
                <h2>Advanced Cardiac Diagnostic Centre</h2>
                <p>
                    Our Cardiac Diagnostic Centre at Indira Hospital features <strong>medical-grade treadmills with integrated 12-lead ECG systems</strong> and real-time haemodynamic monitoring. All stress tests are directly supervised by our consultant cardiologists.
                </p>

                <h3>Medications to Stop Before the Test</h3>
                <p>Your doctor may ask you to hold certain medications that affect heart rate:</p>
                <ul>
                    <li><strong>Beta-blockers</strong> (atenolol, metoprolol): usually stopped 24-48 hours before</li>
                    <li><strong>Digoxin:</strong> may be withheld based on clinical judgment</li>
                    <li><strong>Calcium channel blockers</strong> in some cases</li>
                    <li>Do NOT stop medications on your own; always follow your cardiologist's instructions</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/10 dark:to-teal-900/10 rounded-[2.5rem] border border-green-100 dark:border-green-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-green-300 mb-4 tracking-tight">Safety & Comfort at Indira Hospital</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Cardiologist Supervised at All Times",
                            "Crash Cart & Defibrillator On-Site",
                            "Air-Conditioned Exercise Lab",
                            "Immediate Digital Report"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Booking</h2>
                <p>
                    A TMT at Indira Hospital starts at just <strong>₹1,500</strong>. To book, call us or message on WhatsApp. Walk-ins are accepted subject to cardiologist availability.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
