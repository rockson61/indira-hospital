import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle, ShieldCheck, Activity, IndianRupee } from "lucide-react"

export const metadata: Metadata = {
  title: "Laser Piles Treatment Cost | Indira Super Speciality Hospital Vellore",
  description: "Advanced Laser Piles Treatment Cost at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function LaserPilesTreatmentCostPage() {
  return (
    <SubServiceTemplate
      title="Laser Piles Treatment Cost"
      eyebrow="General-surgery Treatment"
      description={
        <p>
          Indira Hospital is a center of excellence for <strong>Laser Proctology</strong>. We offer painless, scar-less laser treatment for Piles (Hemorrhoids), Fissures, and Fistulas, ensuring same-day discharge and rapid recovery.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹35,000 – ₹50,000", icon: "IndianRupee" },
        { label: "Duration", value: "20–30 Minutes", icon: "Clock" },
        { label: "Recovery", value: "Same Day", icon: "Activity" },
        { label: "Success Rate", value: "98%+", icon: "ShieldCheck" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "laser-vs-traditional",
            heading: "Laser vs. Traditional Surgery",
            description: "Why laser treatment is the preferred choice for modern proctology:",
            table: {
              headers: ["Feature", "Laser Treatment", "Traditional Surgery"],
              rows: [
                ["Pain Level", "Minimal / None", "Moderate to Severe"],
                ["Hospital Stay", "Same Day Discharge", "2-3 Days"],
                ["Blood Loss", "Negligible", "Significant"],
                ["Recovery Time", "2-3 Days", "2-4 Weeks"],
                ["External Cuts", "No Cuts / Stitches", "Surgical Incisions"]
              ],
              caption: "Comparative analysis of Laser Proctology vs Conventional Open Surgery."
            }
          },
          {
            id: "benefits",
            heading: "Key Benefits of Laser Treatment",
            bullets: [
              "Painless: Virtually no post-operative pain",
              "No Marks: Zero scarring as no incisions are made",
              "Fast Return: Most patients resume office work in 48 hours",
              "Low Recurrence: Laser precisely targets the affected tissue",
              "Safe for All: Ideal even for elderly or diabetic patients"
            ]
          }
        ],
        faqs: [
          {
            question: "Is laser piles surgery really painless?",
            answer: "Yes, because there are no surgical cuts or open wounds, the post-operative discomfort is minimal and easily managed with simple oral medications."
          },
          {
            question: "When can I go home after the procedure?",
            answer: "It is typically a 'Day Care' procedure. Patients are admitted in the morning, undergo the 20-minute procedure, and are discharged by the evening."
          }
        ]
      }}
      timeline={{
        title: "Your Recovery Path",
        steps: [
          { title: "Examination", description: "Proctological evaluation and staging." },
          { title: "Laser Ablation", description: "Precision laser treatment (20 mins)." },
          { title: "Post-op Care", description: "Short rest and same-day discharge." },
          { title: "Back to Life", description: "Resume light activities within 2 days." }
        ]
      }}
      relatedServices={{
        serviceSlug: "general-surgery/laser-piles-treatment-cost",
        related: [
          { title: "Hernia Repair", href: "/services/general-surgery/laparoscopic-hernia-repair" },
          { title: "Appendix Surgery", href: "/services/general-surgery/appendix-surgery-steps" }
        ]
      }}
      reviews={{
        entityName: "Laser Piles Treatment",
        entitySlug: "general-surgery/laser-piles-treatment-cost"
      }}
    >
      <section>
        <h2>Advanced Laser Proctology Center in Vellore</h2>
        <p>
          Indira Super Speciality Hospital is a pioneer in <strong>Laser Proctology</strong> in the Vellore region. We use advanced Diode Laser units to treat Piles (Hemorrhoids), Fissures, and Fistulas with high precision and patient comfort.
        </p>

        <h3>Why Choose Laser Over Open Surgery?</h3>
        <p>
          Traditional surgery for piles often involves painful cuts and a long recovery period. Our laser technology allows us to shrink the hemorrhoidal mass from within using a fine laser fiber. This process, called <strong>Laser Hemorrhoidoplasty</strong>, ensures that the blood supply is cut off without damaging the surrounding sensitive tissues.
        </p>

        <div className="my-8 p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Painless Procedure • Same Day Home</h4>
          <p className="text-slate-600 dark:text-slate-400">
            Our specialized proctology unit is designed for maximum patient privacy and rapid turnaround.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm">
              <ShieldCheck className="w-5 h-5 text-green-500" /> No Stitches Required
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm">
              <Activity className="w-5 h-5 text-blue-500" /> Walk within 2 Hours
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm">
              <IndianRupee className="w-5 h-5 text-purple-500" /> Affordable Packages
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-teal-500" /> 98% Success Rate
            </li>
          </ul>
        </div>

        <h2>Cost & Insurance Support</h2>
        <p>
          The cost for Laser Piles treatment typically ranges between <strong>₹35,000 and ₹50,000</strong>. We accept all major health insurance providers and government schemes like TN CM Health Insurance. We also provide 0% EMI options for self-paying patients to ensure financial ease.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
