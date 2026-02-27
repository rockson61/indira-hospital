import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Arthroscopy – Knee & Shoulder Joint Surgery | Indira Hospital Vellore",
    description: "Advanced Arthroscopic Surgery for knee and shoulder conditions at Indira Hospital, Vellore. Meniscus repair, rotator cuff, ACL revision, and shoulder impingement. Minimally invasive.",
    keywords: ["Arthroscopy Vellore", "Knee arthroscopy Tamil Nadu", "Shoulder arthroscopy Vellore", "Meniscus surgery Vellore", "Rotator cuff repair Vellore", "Orthopaedic surgeon Vellore"]
};

export default function ArthroscopyPage() {
    return (
        <SubServiceTemplate
            departmentName="Orthopaedics"
            departmentSlug="orthopaedics"
            title="Arthroscopy – Joint Surgery"
            eyebrow="Minimally Invasive Orthopaedics"
            description={
                <p>
                    <strong>Arthroscopy</strong> is a minimally invasive surgical procedure where a thin camera (arthroscope) is inserted into a joint through a small keyhole incision, allowing the surgeon to directly visualise, diagnose, and repair joint problems. At Indira Hospital, we perform arthroscopic surgery on the <strong>knee, shoulder, ankle, wrist, elbow, and hip</strong> with excellent outcomes and rapid recovery.
                </p>
            }
            quickFacts={[
                { label: "Surgery Cost", value: "₹40,000 – ₹1,20,000", icon: "IndianRupee" },
                { label: "Duration", value: "45–180 Mins", icon: "Clock" },
                { label: "Hospital Stay", value: "Day Surgery / 1 Night", icon: "Activity" },
                { label: "Return to Sport", value: "6–12 Weeks", icon: "Star" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "procedures",
                        heading: "Arthroscopic Procedures We Perform",
                        description: "Our orthopaedic surgeons perform a comprehensive range of arthroscopic procedures:",
                        table: {
                            headers: ["Joint", "Procedure", "Indication"],
                            rows: [
                                ["Knee", "Meniscus Repair / Meniscectomy", "Torn meniscus cartilage"],
                                ["Knee", "ACL Reconstruction", "Anterior cruciate ligament tear"],
                                ["Shoulder", "Rotator Cuff Repair", "Rotator cuff tear (partial/full)"],
                                ["Shoulder", "Bankart Repair", "Recurrent shoulder dislocation"],
                                ["Shoulder", "Subacromial Decompression", "Shoulder impingement syndrome"],
                                ["Ankle", "Osteochondral Lesion Repair", "Cartilage damage from ankle sprains"],
                                ["Knee / Shoulder", "Synovectomy", "Rheumatoid arthritis, pigmented villonodular synovitis"]
                            ],
                            caption: "All arthroscopic procedures performed by fellowship-trained sports medicine surgeons."
                        }
                    },
                    {
                        id: "advantages",
                        heading: "Why Arthroscopy vs. Open Surgery?",
                        bullets: [
                            "3–4 small keyhole incisions (5–10mm) vs. large open incision",
                            "Significantly less post-operative pain",
                            "Day surgery in most cases — return home the same day",
                            "Lower infection risk and faster wound healing",
                            "Direct HD camera visualisation of joint structures",
                            "Faster return to work and sports activities",
                            "Can diagnose AND treat in the same session"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Will I need physiotherapy after arthroscopy?",
                        answer: "Yes. Physiotherapy is essential for full recovery. Our in-house physiotherapy team starts rehabilitation on the day of surgery for knee procedures. A structured 6–12 week program restores strength and function."
                    },
                    {
                        question: "How long is recovery after knee arthroscopy?",
                        answer: "Recovery depends on what was done. Meniscectomy: return to light work in 1–2 weeks. Meniscus repair: 3–4 months. ACL reconstruction: 6–9 months before return to sport with sports-specific testing."
                    }
                ]
            }}
            timeline={{
                title: "Arthroscopy Procedure Pathway",
                steps: [
                    { title: "Pre-operative Planning", description: "MRI of joint reviewed. Blood work and anesthesia fitness done 2–3 days before.", duration: "Pre-op Day" },
                    { title: "Anaesthesia", description: "Spinal anesthesia (preferred for knee) or general anaesthesia for shoulder.", duration: "15 Mins" },
                    { title: "Arthroscopy", description: "Camera inserted; joint visualised and repaired using specialised instruments.", duration: "45–180 Mins" },
                    { title: "Day of Surgery Recovery", description: "Ice pack, compression bandage. Walk with crutches on same day for knee.", duration: "3–4 Hrs" },
                    { title: "Post-op Physio", description: "Supervised rehabilitation program at our in-house physiotherapy centre.", duration: "6–12 Weeks" }
                ]
            }}
            relatedServices={{
                serviceSlug: "orthopaedics",
                related: [
                    { title: "ACL Reconstruction", href: "/doctor/near-me/treat/orthopaedics/acl-reconstruction-recovery" },
                    { title: "Total Knee Replacement", href: "/doctor/near-me/treat/orthopaedics/total-knee-replacement-cost" },
                    { title: "Fracture Care", href: "/doctor/near-me/treat/orthopaedics/fracture-care-rehabilitation" }
                ]
            }}
            reviews={{
                entityName: "Orthopaedics Care",
                entitySlug: "orthopaedics",
                entityType: "department"
            }}
        >
            <section>
                <h2>Advanced Sports Medicine & Joint Surgery</h2>
                <p>
                    Indira Hospital's Orthopaedics department has a dedicated <strong>Sports Medicine and Arthroscopy Unit</strong> equipped with high-definition arthroscopic systems, shaver systems, and radiofrequency ablation technology. Our surgeons have fellowship training in sports medicine and arthroscopic surgery.
                </p>

                <h3>Shoulder Arthroscopy — A Game Changer for Rotator Cuff</h3>
                <p>
                    Traditional open rotator cuff surgery required a 6–8 cm incision and splitting of the deltoid muscle, with a painful recovery of 4–6 months. <strong>Arthroscopic rotator cuff repair</strong> is now the gold standard, using suture anchors through 3 small portals:
                </p>
                <ul>
                    <li>Equivalent clinical outcomes to open surgery with far less tissue damage</li>
                    <li>Return to overhead activities in 4–6 months vs. 6–12 months for open repair</li>
                    <li>Lower re-tear rates with modern double-row anchor techniques</li>
                    <li>Can simultaneously address associated pathology (biceps, AC joint, SLAP tears)</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-[2.5rem] border border-fuchsia-100 dark:border-blue-900 shadow-sm dark:shadow-slate-900/30">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-blue-300 mb-4 tracking-tight">Sports Medicine & Arthroscopy Unit</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "4K HD Arthroscopy Tower System",
                            "Powered Radiofrequency Shaver",
                            "Fellowship-Trained Sports Surgeon",
                            "In-Hospital Physiotherapy & Rehab"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Insurance</h2>
                <p>
                    Arthroscopy costs at Indira Hospital start at <strong>₹40,000</strong> for diagnostic and simple procedures and go up to <strong>₹1,20,000</strong> for complex rotator cuff repair or PCL reconstruction. Most health insurance plans and Ayushman Bharat cover arthroscopic procedures with prior authorisation.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
