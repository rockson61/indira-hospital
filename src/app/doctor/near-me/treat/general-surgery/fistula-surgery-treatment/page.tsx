import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Fistula Surgery (Fistula-in-Ano) Treatment | Indira Hospital Vellore",
    description: "Expert Fistula-in-Ano surgery at Indira Hospital, Vellore. LIFT procedure, Video-Assisted Anal Fistula Treatment (VAAFT), and laser closure. Low recurrence, fast recovery.",
    keywords: ["Fistula surgery Vellore", "Fistula in ano treatment", "VAAFT surgery Vellore", "LIFT procedure Vellore", "Anal fistula hospital Tamil Nadu", "Laser fistula"]
};

export default function FistulaSurgeryPage() {
    return (
        <SubServiceTemplate
            departmentName="General Surgery"
            departmentSlug="general-surgery"
            title="Fistula-in-Ano Surgery"
            eyebrow="Colorectal Surgery"
            description={
                <p>
                    An <strong>Anal Fistula (Fistula-in-Ano)</strong> is an abnormal tunnel that forms between the inside of the anal canal and the skin around the anus, usually following a perianal abscess. Without surgical treatment, a fistula will not heal on its own. At Indira Hospital, we offer the latest <strong>sphincter-preserving surgical techniques</strong> to treat fistulas with minimal risk of recurrence and maximum preservation of continence.
                </p>
            }
            quickFacts={[
                { label: "Surgery Cost", value: "₹25,000 – ₹60,000", icon: "IndianRupee" },
                { label: "Duration", value: "30–90 Mins", icon: "Clock" },
                { label: "Stay", value: "Day Surgery / 1 Night", icon: "Activity" },
                { label: "Recurrence", value: "< 5% (Advanced)", icon: "ShieldCheck" }
            ]}
            marketingContent={{
                sections: [
                    {
                        id: "technique-comparison",
                        heading: "Modern Fistula Treatment Techniques",
                        description: "The choice of technique depends on the fistula type, tract complexity, and how close it is to the sphincter muscle:",
                        table: {
                            headers: ["Technique", "Best For", "Continence Risk"],
                            rows: [
                                ["Fistulotomy", "Low intersphincteric fistula", "Very low"],
                                ["LIFT (Ligation of Intersphincteric Tract)", "Transsphincteric fistula", "Minimal"],
                                ["VAAFT (Video-Assisted)", "Complex / deep fistula", "Near zero"],
                                ["Laser Fistula Closure (FiLaC)", "All types; no cutting", "Zero"],
                                ["Seton Drainage", "High fistula (staged)", "Low (staged approach)"]
                            ],
                            caption: "Our colorectal surgeons individualise treatment after MRI Fistula mapping."
                        }
                    },
                    {
                        id: "benefits",
                        heading: "Why Choose Indira Hospital for Fistula Surgery?",
                        bullets: [
                            "MRI Fistula Mapping for precise tract delineation before surgery",
                            "Video-Assisted Anal Fistula Treatment (VAAFT) by trained colorectal surgeons",
                            "Laser Fistula Closure (FiLaC/FILAC) — no cutting, minimal pain",
                            "Day surgery option: go home the same evening",
                            "Less than 5% recurrence rate with sphincter-preserving procedures",
                            "High patient satisfaction: minimal post-op pain"
                        ]
                    }
                ],
                faqs: [
                    {
                        question: "Can a fistula heal without surgery?",
                        answer: "No. Unlike abscesses, fistulas require surgical closure. However, some fistulas can be sealed with fibrin glue or collagen plugs as a minimally invasive option."
                    },
                    {
                        question: "Will I lose bowel control after fistula surgery?",
                        answer: "With modern sphincter-preserving techniques (LIFT, VAAFT, FiLaC), the risk of incontinence is extremely low — approaching zero. These methods are specifically designed to protect the sphincter muscle."
                    }
                ]
            }}
            timeline={{
                title: "Fistula Treatment Journey",
                steps: [
                    { title: "Assessment", description: "Clinical examination + MRI Fistulogram to map the tract and classify fistula type.", duration: "Day 1" },
                    { title: "Surgery Planning", description: "Colorectal surgeon selects optimal technique based on anatomy and continence risk.", duration: "Day 2" },
                    { title: "Surgery (Day Procedure)", description: "VAAFT or Laser closure under spinal/general anesthesia. Home on same day in most cases.", duration: "30–90 Mins" },
                    { title: "Recovery", description: "Sitz baths, dietary fibre, wound review at 1 week. Full healing 4–8 weeks.", duration: "4–8 Weeks" }
                ]
            }}
            relatedServices={{
                serviceSlug: "general-surgery",
                related: [
                    { title: "Laser Piles Treatment", href: "/doctor/near-me/treat/general-surgery/laser-piles-treatment-cost" },
                    { title: "Appendix Surgery", href: "/doctor/near-me/treat/general-surgery/appendix-surgery-steps" },
                    { title: "Laparoscopic Hernia Repair", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" }
                ]
            }}
            reviews={{
                entityName: "General Surgery",
                entitySlug: "general-surgery",
                entityType: "department"
            }}
        >
            <section>
                <h2>Colorectal Surgical Excellence in Vellore</h2>
                <p>
                    Indira Hospital's General Surgery department has dedicated expertise in <strong>Colorectal and Proctology Surgery</strong>. We manage the full spectrum of anorectal conditions — from haemorrhoids and fissures to complex fistula-in-ano — using the latest minimally invasive and sphincter-preserving techniques.
                </p>

                <h3>Understanding Fistula Classification</h3>
                <p>Fistulas are classified by the Parks classification based on their relationship to the sphincter muscles:</p>
                <ul>
                    <li><strong>Intersphincteric Fistula (most common, ~70%):</strong> Runs between the internal and external sphincters — relatively straightforward to treat</li>
                    <li><strong>Transsphincteric Fistula (~25%):</strong> Crosses the external sphincter — requires sphincter-preserving techniques</li>
                    <li><strong>Suprasphincteric Fistula (rare):</strong> Loops over the external sphincter — complex, requires staged approach</li>
                    <li><strong>Extrasphincteric Fistula (very rare):</strong> From above the levator ani — often requires specialist referral</li>
                </ul>

                <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-900/10 dark:to-fuchsia-900/10 rounded-[2.5rem] border border-pink-100 dark:border-pink-900 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-pink-300 mb-4 tracking-tight">Advanced Proctology Unit</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "MRI Fistula Mapping (Pre-operative)",
                            "VAAFT (Video-Assisted Fistula Treatment)",
                            "Laser Fistula Closure (FiLaC)",
                            "Day-Surgery Available — Go Home Same Day"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2>Cost & Insurance</h2>
                <p>
                    Fistula surgery cost starts at <strong>₹25,000</strong> for simple intersphincteric fistulas and ranges up to <strong>₹60,000</strong> for complex VAAFT or laser procedures. All major insurance plans are accepted, and our billing team will assist with pre-authorization.
                </p>
            </section>
        </SubServiceTemplate>
    );
}
