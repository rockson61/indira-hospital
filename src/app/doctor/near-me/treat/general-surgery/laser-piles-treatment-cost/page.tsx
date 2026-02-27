import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle, ShieldCheck, Activity, IndianRupee } from "lucide-react"

export const metadata: Metadata = {
  title: "Laser Piles (Hemorrhoids) Treatment Cost & Guide | Indira Hospital Vellore",
  description: "Advanced Laser Piles (Hemorrhoids) treatment at Indira Super Speciality Hospital, Vellore. Painless, same-day discharge, and affordable laser proctology.",
  keywords: ["Laser piles treatment Vellore", "Piles surgery cost", "Painless hemorrhoid treatment", "Laser proctology Vellore", "Hemorrhoids specialist"]
};

export default function LaserPilesTreatmentCostPage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Laser Piles Treatment"
      eyebrow="Laser Proctology Excellence"
      description={
        <p>
          Indira Hospital is a regional center of excellence for <strong>Laser Proctology</strong>. We offer advanced, painless treatment for Piles (Hemorrhoids), ensuring same-day discharge and rapid return to normal activities.
        </p>
      }
      quickFacts={[
        { label: "Cost Package", value: "₹35k – ₹55k", icon: "IndianRupee" },
        { label: "Duration", value: "20-30 Mins", icon: "Clock" },
        { label: "Discharge", value: "Same Day", icon: "Activity" },
        { label: "Success Rate", value: "99%+", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "laser-vs-traditional",
            heading: "Laser Treatment vs. Traditional Surgery",
            description: "Laser technology has revolutionised the treatment of piles, making traditional open surgery largely obsolete for most cases:",
            table: {
              headers: ["Feature", "Laser Therapy (Indira)", "Conventional Surgery"],
              rows: [
                ["Pain Intensity", "Virtually Painless", "Moderate to High"],
                ["Hospital Stay", "6-8 Hours (Day Care)", "3-5 Days"],
                ["Blood Loss", "Minimal (Bloodless)", "Moderate"],
                ["Recovery", "Back to work in 48 hours", "2-3 Weeks"],
                ["External Wounds", "None / Pin-hole", "Surgical Cuts & Stitches"]
              ],
              caption: "Modern Laser Proctology vs. Conventional Surgical Methods."
            }
          },
          {
            id: "benefits",
            heading: "Benefits of Laser Hemorrhoidoplasty (LHP)",
            bullets: [
              "Precision Healing: Laser fiber shrinks the hemorrhoidal mass without damaging the sphincter muscle.",
              "No Marks: No external incisions mean no visible scars or annoying stitches.",
              "Rapid Recovery: Most patients resume their professional lives within 2-3 days.",
              "Minimal Recurrence: Precisely targets the vascular supply to prevent future issues.",
              "Safe for Comorbidities: An ideal choice for elderly, heart, and diabetic patients."
            ]
          }
        ],
        faqs: [
          {
            question: "Is the procedure truly 'walk-in, walk-out'?",
            answer: "For most patients, yes. Laser piles surgery is a daycare procedure. You are admitted in the morning, treated in 20 minutes, and typically ready to go home by the evening."
          },
          {
            question: "Will I need to follow a special diet after surgery?",
            answer: "We recommend a high-fiber diet and plenty of fluids for the first few weeks to ensure smooth bowel movements. Our nutritionists provide a detailed chart at the time of discharge."
          }
        ]
      }}
      timeline={{
        title: "Your Treatment Journey",
        steps: [
          { title: "Clinical Staging", description: "Proctological examination to determine the grade of piles (Grade 1 to 4)." },
          { title: "Laser Procedure", description: "Precision laser shrinkage of hemorrhoidal tissue under mild anesthesia." },
          { title: "Stabilization", description: "Short recovery period in our dedicated daycare unit (4-6 hours)." },
          { title: "Home Care", description: "Discharge with a personalized recovery kit and nutrition guide." }
        ]
      }}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Fissure & Fistula Laser", href: "/doctor/near-me/treat/general-surgery/piles-treatment-vellore" },
          { title: "Laparoscopic Hernia Repair", href: "/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair" },
          { title: "Appendix Surgery Steps", href: "/doctor/near-me/treat/general-surgery/appendix-surgery-steps" }
        ]
      }}
      reviews={{
        entityName: "Proctology Care",
        entitySlug: "general-surgery",
        entityType: "department"
      }}
    >
      <section>
        <h2>Advanced Proctology Center in Vellore</h2>
        <p>
          At Indira Super Speciality Hospital, we leverage the power of <strong>Diode Laser technology</strong> to provide patients with a superior alternative to traditional surgery. Laser Hemorrhoidoplasty (LHP) is specifically designed to treat various grades of hemorrhoids with maximum precision and minimum downtime.
        </p>

        <h3>Painless & Bloodless Intervention</h3>
        <p>
          Unlike conventional methods that involve cutting and suturing sensitive anal tissue, laser therapy uses focused thermal energy to ablate the blood vessels feeding the hemorrhoids. This causes the piles to shrink and fibrose within a few weeks, providing permanent relief without the trauma of a major operation.
        </p>

        <div className="my-10 p-8 md:p-12 bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-900/10 dark:to-fuchsia-900/10 rounded-[2.5rem] border border-pink-100 dark:border-pink-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-pink-300 mb-6 tracking-tight">Vellore's Most Trusted Laser Unit</h4>
          <p className="text-lg text-slate-700 dark:text-slate-200 dark:text-slate-300 leading-relaxed mb-8">
            Our specialized piles treatment packages are inclusive, transparent, and designed to make high-end laser surgery accessible to all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "100% Cashless for Private Insurance",
              "TN Govt. CM Health Insurance Scheme",
              "Bajaj Finserv & Credit Card 0% EMIs",
              "Advanced High-Power Diode Laser"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-sm dark:shadow-slate-900/30">
                <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2>When is Laser Treatment Recommended?</h2>
        <p>
          Laser treatment is highly effective for Grade 2 and Grade 3 piles. For Grade 4 cases, it can often be used in combination with other minimally invasive techniques to reduce pain and improve recovery. If you experience painless bleeding during bowel movements, itching, or swelling in the anal region, it's time to consult our specialists.
        </p>

        <h3>Expert Proctology Team</h3>
        <p>
          Our team of senior general surgeons is specially trained in <strong>Laser Proctology</strong>. We combine years of clinical experience with the latest technology to deliver outcomes that prioritize both cure and patient convenience.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
