import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Palliative Care Services: Comfort & Dignity | Indira Hospital Vellore",
  description: "Compassionate Palliative Care services at Indira Super Speciality Hospital, Vellore. Expert pain management and holistic support for patients with serious illness.",
  keywords: ["Palliative care Vellore", "Pain management cancer", "Hospice care hospital Vellore", "End of life care", "CANSA pain management"]
};

export default function PalliativeCareServicesPage() {
  return (
    <SubServiceTemplate
      departmentName="Oncology"
      departmentSlug="oncology"
      title="Palliative Care Services"
      eyebrow="Comfort & Supportive Care"
      description={
        <p>
          <strong>Palliative Care</strong> is a specialized medical approach focused on providing relief from the symptoms, pain, and stress of serious illness. At Indira Hospital, our palliative team works alongside your primary specialists to improve quality of life for both the patient and their family — at any stage of illness, not just at end of life.
        </p>
      }
      quickFacts={[
        { label: "Focus", value: "Quality of Life", icon: "ShieldCheck" },
        { label: "Pain Control", value: "Expert Led", icon: "Activity" },
        { label: "emotional support", value: "Counselling", icon: "Star" },
        { label: "Home Care", value: "Available", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "oncology",
        related: [
          { title: "Chemotherapy Side Effects", href: "/doctor/near-me/treat/oncology/chemotherapy-side-effects" },
          { title: "Surgical Oncology", href: "/doctor/near-me/treat/oncology/surgical-oncology-overview" },
          { title: "Breast Cancer Screening", href: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" }
        ]
      }}
      reviews={{ entityName: "Oncology Care", entitySlug: "oncology", entityType: "department" }}
    >
      <section>
        <h2>What Palliative Care Is (and Isn't)</h2>
        <p>
          A common misconception is that palliative care means "giving up." In reality, it is a proactive, evidence-based approach that can be initiated alongside curative treatment from the day of cancer diagnosis. Studies show that patients who receive early palliative care alongside standard oncology care often live <em>longer</em> and report a better quality of life.
        </p>
        <h3>Core Services We Provide</h3>
        <ul>
          <li><strong>Pain Management:</strong> Our specialists use the WHO Pain Ladder — from simple analgesics to opioid prescribing, nerve blocks, and spinal drug delivery for complex cancer pain. Good pain control is achievable for 90%+ of patients.</li>
          <li><strong>Symptom Control:</strong> Management of breathlessness, nausea, constipation, fatigue, depression, and anxiety.</li>
          <li><strong>Psychological Support:</strong> Access to counsellors and a psychiatrist for patients and families dealing with the emotional impact of a cancer diagnosis.</li>
          <li><strong>Advance Care Planning:</strong> Helping patients articulate their values and preferences for future medical care; guiding important conversations with families.</li>
          <li><strong>Home Palliative Care:</strong> For patients who wish to remain at home, our team conducts regular home visits and is available by phone for medication adjustments.</li>
          <li><strong>Spiritual Support:</strong> Access to chaplaincy services and spiritual counselors for those who desire it.</li>
        </ul>
        <h2>When to Refer to Palliative Care</h2>
        <p>
          Palliative care should be considered for any patient with a life-limiting illness — cancer, advanced heart failure, COPD, or CKD — who has significant uncontrolled symptoms, existential distress, or complex care needs. <strong>Early referral consistently produces better outcomes.</strong> Ask your specialist today.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
