import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Thyroid Surgery (Thyroidectomy) Guide | Indira Hospital Vellore",
  description: "Expert Thyroid Surgery (Thyroidectomy, Hemithyroidectomy) at Indira Super Speciality Hospital, Vellore. Precise surgical care for thyroid cancer, goitre, and thyroid nodules.",
  keywords: ["Thyroid surgery Vellore", "Thyroidectomy cost India", "Goitre operation hospital", "Thyroid cancer surgeon Vellore", "ENT surgeon Vellore"]
};

export default function ThyroidSurgeryGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Thyroid Surgery Guide"
      eyebrow="Head & Neck Surgery"
      description={
        <p>
          Indira Hospital's Head & Neck Surgery team offers precise, nerve-sparing <strong>Thyroid Surgery (Thyroidectomy)</strong> for thyroid cancer, large goitres, and over-active or suspicious thyroid nodules. Our surgeons prioritize preservation of the vocal cord nerves (RLN) and parathyroid glands.
        </p>
      }
      quickFacts={[
        { label: "Cost (Hemi-)", value: "₹40k – ₹65k", icon: "IndianRupee" },
        { label: "Duration", value: "60-120 Mins", icon: "Clock" },
        { label: "Stay", value: "1-2 Days", icon: "Activity" },
        { label: "Nerve Monitoring", value: "Intraop Available", icon: "ShieldCheck" }
      ]}
      timeline={{
        title: "Thyroid Surgery Journey",
        steps: [
          { title: "Work-up", description: "Ultrasound, FNAC/biopsy, thyroid function tests (TFT), laryngoscopy." },
          { title: "Surgery", description: "Under general anaesthesia: partial or total thyroid gland removal." },
          { title: "Recovery", description: "Soft diet for 1-2 days; voice rest. Discharge Day 1-2." },
          { title: "Follow-up", description: "TFT check at 6 weeks; thyroid hormone replacement/ TSH suppression if needed." }
        ]
      }}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Breast Lump Removal", href: "/services/general-surgery/breast-lump-removal" },
          { title: "Gallbladder Stone Surgery", href: "/services/general-surgery/gallbladder-stone-surgery" },
          { title: "Laparoscopic Hernia Repair", href: "/services/general-surgery/laparoscopic-hernia-repair" }
        ]
      }}
      reviews={{ entityName: "General Surgery", entitySlug: "general-surgery", entityType: "department" }}
    >
      <section>
        <h2>When is Thyroid Surgery Needed?</h2>
        <ul>
          <li><strong>Thyroid Cancer:</strong> Any confirmed malignancy requires surgical removal (often total thyroidectomy + neck dissection).</li>
          <li><strong>Suspicious or Indeterminate Thyroid Nodule:</strong> FNA biopsy results classified as Bethesda III/IV warrant surgical removal for definitive histology.</li>
          <li><strong>Large Goitre:</strong> Causing compression symptoms (difficulty swallowing, breathing, or a visible neck lump).</li>
          <li><strong>Hyperthyroidism (Graves' Disease):</strong> When radioactive iodine and medication are not preferred or have failed.</li>
        </ul>
        <h3>Intraoperative Nerve Monitoring (IONM)</h3>
        <p>
          The <strong>Recurrent Laryngeal Nerve (RLN)</strong> runs just behind the thyroid and controls vocal cord movement. Accidental damage causes hoarseness or voice loss. We use <strong>Intraoperative Nerve Monitoring (IONM)</strong> — a system that continuously monitors nerve function with real-time alerts — to maximize RLN safety during surgery.
        </p>
        <h3>Parathyroid Gland Preservation</h3>
        <p>
          The four tiny parathyroid glands control calcium balance. Inadvertent removal during total thyroidectomy causes temporary or permanent low calcium (hypocalcaemia). Our precise dissection technique and intraoperative PTH measurement achieve parathyroid preservation rates exceeding 95%.
        </p>
        <h2>After Surgery: Life Without a Thyroid</h2>
        <p>
          If the entire thyroid is removed, daily <strong>Thyroxine (Levothyroxine) tablets</strong> replace the missing hormone. Dose is adjusted based on regular blood tests (TSH). Most patients lead completely normal lives after total thyroidectomy.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
