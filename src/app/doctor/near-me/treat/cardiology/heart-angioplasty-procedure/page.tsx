import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Heart Angioplasty (PTCA) Procedure & Cost | Indira Hospital Vellore",
  description: "Advanced Heart Angioplasty (PTCA/Stenting) at Indira Super Speciality Hospital, Vellore. Life-saving treatment to open blocked coronary arteries with top cardiologists.",
  keywords: ["Angioplasty Vellore", "PTCA stent cost", "Heart blockage treatment", "Coronary stenting hospital", "Cardiologist Vellore"]
};

export default function HeartAngioplastyProcedurePage() {
  return (
    <SubServiceTemplate
      departmentName="Cardiology"
      departmentSlug="cardiology"
      title="Heart Angioplasty Procedure"
      eyebrow="Interventional Cardiology"
      description={
        <p>
          Indira Super Speciality Hospital is a center of excellence for <strong>Percutaneous Transluminal Coronary Angioplasty (PTCA)</strong> with stenting. Our interventional cardiologists restore blood flow to the heart quickly, offering a life-saving alternative to open-heart bypass surgery.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹85k – ₹1.8L", icon: "IndianRupee" },
        { label: "Duration", value: "45-90 Mins", icon: "Clock" },
        { label: "Recovery", value: "1-2 Days", icon: "Activity" },
        { label: "Success Rate", value: "99%+", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "angioplasty-vs-bypass",
            heading: "Angioplasty vs. Bypass Surgery",
            description: "Angioplasty is the preferred first-line treatment for most coronary blockages:",
            table: {
              headers: ["Factor", "Angioplasty (PTCA)", "Bypass Surgery (CABG)"],
              rows: [
                ["Incision", "None (Catheter Only)", "Open Chest"],
                ["Hospital Stay", "1-2 Days", "5-7 Days"],
                ["Recovery Time", "1-2 Weeks", "4-6 Weeks"],
                ["Anaesthesia", "Local / Sedation", "General Anaesthesia"],
                ["Suitable For", "1-3 Vessel Disease", "Multi-vessel / Reblock"]
              ],
              caption: "Comparison of interventional cardiology options at Indira Hospital."
            }
          }
        ],
        faqs: [
          {
            question: "What type of stents are used at Indira Hospital?",
            answer: "We use USFDA-approved Drug-Eluting Stents (DES) from leading brands like Abbott, Boston Scientific, and Medtronic that significantly reduce the risk of re-blockage (restenosis)."
          },
          {
            question: "Is angioplasty a permanent cure?",
            answer: "The stent creates a permanent scaffold, and with lifestyle modifications and prescribed medications, over 90% of patients remain free from re-blockage for 5+ years."
          }
        ]
      }}
      timeline={{
        title: "Angioplasty Procedure Steps",
        steps: [
          { title: "Cath Lab Entry", description: "Patient is prepared and a guiding catheter is advanced to the coronary artery." },
          { title: "Balloon Inflation", description: "A tiny balloon on the catheter tip is inflated to compress the plaque." },
          { title: "Stent Deployment", description: "A drug-eluting stent is expanded to prop the artery open." },
          { title: "Discharge", description: "Observation for 24 hours, then discharged with a cardiac care plan." }
        ]
      }}
      relatedServices={{
        serviceSlug: "cardiology",
        related: [
          { title: "Coronary Angiography", href: "/doctor/near-me/treat/cardiology/coronary-angiography-guide" },
          { title: "Heart Valve Replacement", href: "/doctor/near-me/treat/cardiology/heart-valve-replacement-surgery" },
          { title: "Preventive Heart Checkup", href: "/doctor/near-me/treat/cardiology/preventive-heart-checkup" }
        ]
      }}
      reviews={{
        entityName: "Cardiac Care",
        entitySlug: "cardiology",
        entityType: "department"
      }}
    >
      <section>
        <h2>Advanced Interventional Cardiology in Vellore</h2>
        <p>
          When a coronary artery is blocked — whether during a heart attack or due to chronic plaque buildup — time is muscle. Indira Hospital's 24/7 Cath Lab ensures that our interventional cardiologists can perform <strong>Primary Angioplasty</strong> within the critical "door-to-balloon" window of 90 minutes.
        </p>

        <h3>Drug-Eluting Stents (DES)</h3>
        <p>
          We use only the latest generation of <strong>Drug-Eluting Stents (DES)</strong>. The drug coating on the stent prevents scar tissue from forming inside the stent, dramatically reducing the relatively small risk of restenosis associated with older bare metal stents.
        </p>

        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/10 dark:to-red-900/10 rounded-[2.5rem] border border-rose-100 dark:border-rose-900 shadow-sm dark:shadow-slate-900/30">
          <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-rose-300 mb-6 tracking-tight">24/7 Emergency Cardiac Services</h4>
          <p className="text-lg text-slate-700 dark:text-slate-200 dark:text-slate-300 leading-relaxed mb-8">
            Our Cath Lab is operational around the clock for emergency heart attack cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "24/7 Emergency Angioplasty",
              "USFDA-Approved DES Stents",
              "Cashless for 60+ Insurers",
              "0% EMI on Self-Pay"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-sm dark:shadow-slate-900/30">
                <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2>Cost & Financial Assistance</h2>
        <p>
          Heart Angioplasty with a single Drug-Eluting Stent starts at <strong>₹85,000</strong> (inclusive of stent, cath lab charges, and 2-day ICU stay). We provide comprehensive support for insurance claims including TN CM Health Insurance, ESI, and all major private insurers.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
