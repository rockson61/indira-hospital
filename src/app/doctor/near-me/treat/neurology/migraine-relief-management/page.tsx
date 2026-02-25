import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Migraine Relief Management | Indira Super Speciality Hospital Vellore",
  description: "Advanced Migraine Relief Management at Indira Super Speciality Hospital, Vellore. Expert neurology care for chronic headaches and migraines with high success rates.",
  keywords: ["Migraine treatment Vellore", "Headache clinic", "Neurology hospital Vellore", "Botox for migraine", "Chronic headache management"]
};

export default function MigraineReliefManagementPage() {
  return (
    <SubServiceTemplate
      departmentName="Neurology"
      departmentSlug="neurology"
      title="Migraine Relief Management"
      eyebrow="Neurology Excellence"
      description={
        <p>
          Gain control over your life with advanced migraine management at Indira Super Speciality Hospital. Our neurology experts utilize multimodal therapy to reduce the frequency and intensity of chronic headaches.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
        { label: "Therapy Time", value: "30-60 Mins", icon: "Clock" },
        { label: "Relief Period", value: "Significant", icon: "Activity" },
        { label: "Patient Care", value: "Personalized", icon: "UserCheck" }
      ]}
      relatedServices={{
        serviceSlug: "neurology",
        related: [
          { title: "Epilepsy Treatment", href: "/doctor/near-me/treat/neurology/epilepsy-treatment-options" },
          { title: "Stroke Recovery", href: "/doctor/near-me/treat/neurology/stroke-recovery-exercises" },
          { title: "EEG Test Procedure", href: "/doctor/near-me/treat/neurology/eeg-test-procedure" }
        ]
      }}
      reviews={{
        entityName: "Migraine Relief",
        entitySlug: "neurology",
        entityType: "department"
      }}
    >
      <section>
        <h2>Comprehensive Migraine Relief at Indira Hospital</h2>
        <p>
          Migraine is more than just a headache; it is a complex neurological condition that can significantly impair your quality of life. At Indira Super Speciality Hospital, Vellore, we offer a dedicated headache clinic focused on accurate diagnosis and long-term relief.
        </p>

        <h3>Our Multimodal Treatment Approach</h3>
        <ul>
          <li><strong>Preventive Medication:</strong> Proactive management to reduce the frequency of attacks.</li>
          <li><strong>Acute Rescue Therapy:</strong> Advanced medications to halt symptoms at the onset of a migraine.</li>
          <li><strong>Botox for Chronic Migraine:</strong> USFDA-approved therapy for patients experiencing 15 or more headache days per month.</li>
          <li><strong>Lifestyle Counseling:</strong> Identifying and managing triggers such as diet, stress, and sleep patterns.</li>
          <li><strong>Nerve Blocks:</strong> Targeted injections to provide rapid relief for severe clusters or intractable migraines.</li>
        </ul>

        <h2>Who Needs Professional Management?</h2>
        <p>
          If your headaches are frequent, severe, or no longer responding to over-the-counter painkillers, professional neurological intervention is necessary. Common indicators include:
        </p>
        <ul>
          <li>Headaches occurring more than twice a week.</li>
          <li>Symptoms like nausea, vomiting, or sensitivity to light (photophobia).</li>
          <li>Visual disturbances or "auras" preceding the pain.</li>
          <li>Headaches that interfere with work, school, or social activities.</li>
        </ul>

        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Affordable Neurological Care:</strong> At Indira Super Speciality Hospital, we believe in transparent pricing. Our consultation and diagnostic packages are designed to be 50% more affordable than similar facilities in Chennai or Bangalore.
        </p>
        <p>
          We accept all major corporate insurances and provide 0% EMI options for long-term treatment procedures through our banking partners.
        </p>

        <h3>Why Choose Our Neurology Department?</h3>
        <p>
          Our department is equipped with advanced neuro-diagnostic tools including Digital EEG and MRI facilities. Led by experienced neurologists, we ensure that every patient receives a personalized treatment plan backed by evidence-based medicine.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
