import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Stroke Recovery & Neuro-Rehabilitation Exercises | Indira Hospital",
  description: "Advanced stroke recovery exercises and neuro-rehabilitation at Indira Super Speciality Hospital, Vellore. Holistic care for mobility and speech recovery.",
  keywords: ["Stroke recovery Vellore", "Neuro-rehabilitation hospital", "Physiotherapy for stroke", "Speech therapy Vellore", "Post-stroke exercises"]
};

export default function StrokeRecoveryExercisesPage() {
  return (
    <SubServiceTemplate
      departmentName="Neurology"
      departmentSlug="neurology"
      title="Stroke Recovery Exercises"
      eyebrow="Neurology Rehabilitation"
      description={
        <p>
          Regain your independence with personalized neuro-rehabilitation at Indira Super Speciality Hospital. Our multidisciplinary team focuses on specialized stroke recovery exercises to restore mobility, speech, and cognitive functions.
        </p>
      }
      quickFacts={[
        { label: "Session", value: "₹400 – ₹800", icon: "IndianRupee" },
        { label: "Duration", value: "45-60 Mins", icon: "Clock" },
        { label: "Focus", value: "Neuro-plasticity", icon: "Activity" },
        { label: "Programs", value: "Inpatient/Outpatient", icon: "ShieldCheck" }
      ]}
      relatedServices={{
        serviceSlug: "neurology",
        related: [
          { title: "Epilepsy Management", href: "/services/neurology/epilepsy-treatment-options" },
          { title: "Migraine Relief", href: "/services/neurology/migraine-relief-management" },
          { title: "EEG Test Procedure", href: "/services/neurology/eeg-test-procedure" }
        ]
      }}
      reviews={{
        entityName: "Stroke Rehabilitation",
        entitySlug: "neurology",
        entityType: "department"
      }}
      timeline={{
        title: "The Stroke Recovery Phases",
        steps: [
          { title: "Acute Phase", description: "Focused on medical stabilization and preventing secondary complications.", duration: "Days 1-7" },
          { title: "Intensive Rehab", description: "Inpatient physiotherapy, occupational therapy, and speech-language pathology.", duration: "Weeks 2-12" },
          { title: "Sub-Acute Phase", description: "Focus on regaining complex motor skills and community reintegration.", duration: "Months 3-6" },
          { title: "Chronic Phase", description: "Long-term maintenance and secondary stroke prevention strategies.", duration: "Ongoing" }
        ]
      }}
    >
      <section>
        <h2>Advanced Stroke Rehabilitation in Vellore</h2>
        <p>
          A stroke is a life-altering event that requires immediate and long-term specialized care. At Indira Super Speciality Hospital, we believe that rehabilitation should start as early as possible to take advantage of the brain's <strong>neuroplasticity</strong>—its ability to reorganize itself after injury.
        </p>

        <h3>Our Multidisciplinary Team</h3>
        <p>
          We offer a collaborative approach to stroke recovery, involving:
        </p>
        <ul>
          <li><strong>Physiotherapists:</strong> Focused on improving muscle strength, balance, and gait (walking patterns).</li>
          <li><strong>Occupational Therapists:</strong> Helping you relearn daily activities like eating, dressing, and writing.</li>
          <li><strong>Speech Therapists:</strong> Addressing communication challenges (aphasia) and swallowing difficulties (dysphagia).</li>
          <li><strong>Neuro-Psychologists:</strong> Providing cognitive therapy and emotional support for patients and their families.</li>
        </ul>

        <h2>Essential Stroke Recovery Exercises</h2>
        <p>
          Our specialists design a custom exercise regimen based on the level of impairment:
        </p>
        <ul>
          <li><strong>Passive Range of Motion (PROM):</strong> For patients with limited movement, to maintain joint flexibility.</li>
          <li><strong>Task-Specific Training:</strong> Repeated practice of functional tasks to build muscle memory.</li>
          <li><strong>Mirror Therapy:</strong> Utilizing visual feedback to reorganize neural pathways for paralyzed limbs.</li>
          <li><strong>Constraint-Induced Movement Therapy (CIMT):</strong> Forcing the use of the affected limb by temporarily restricting the stronger one.</li>
        </ul>

        <h2>Cost & Continuity of Care</h2>
        <p>
          <strong>Affordable Rehab Packages:</strong> Long-term rehabilitation can be financially challenging. We offer monthly packages and home-based therapy consultations to ensure continuity of care at an affordable price point.
        </p>
        <p>
          We provide <strong>Comprehensive Discharge Plans</strong> for families, including training for home-based exercises and safety modifications for the patient's living environment.
        </p>

        <h3>Why Choose Indira Hospital?</h3>
        <p>
          Our neuro-rehabilitation center is equipped with the latest assistive technologies. We combine clinical expertise with a compassionate, patient-centered approach to ensure the best possible functional recovery for every stroke survivor.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
