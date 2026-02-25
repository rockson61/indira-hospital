import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Parkinson's Disease Care & Management | Indira Hospital Vellore",
  description: "Expert Parkinson's Disease diagnosis and management at Indira Super Speciality Hospital, Vellore. Specialist neurologists offering medical, speech, and physiotherapy-based care.",
  keywords: ["Parkinson's disease Vellore", "Neurologist Vellore", "Parkinson's treatment hospital", "DBS surgery Vellore", "Movement disorder specialist"]
};

export default function ParkinsonDiseaseCarePage() {
  return (
    <SubServiceTemplate
      departmentName="Neurology"
      departmentSlug="neurology"
      title="Parkinson's Disease Care"
      eyebrow="Movement Disorders & Neurology"
      description={
        <p>
          Parkinson's Disease is a progressive neurological condition affecting movement. Indira Hospital's <strong>Movement Disorders</strong> team provides expert, compassionate care — from early accurate diagnosis to long-term management to maintain independence and quality of life.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹700 – ₹1,000", icon: "IndianRupee" },
        { label: "Management", value: "Lifelong Team Care", icon: "Activity" },
        { label: "DBS Therapy", value: "Referral Available", icon: "ShieldCheck" },
        { label: "Speech Therapy", value: "On-Site", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "neurology",
        related: [
          { title: "Stroke Recovery", href: "/doctor/near-me/treat/neurology/stroke-recovery-exercises" },
          { title: "Epilepsy Treatment", href: "/doctor/near-me/treat/neurology/epilepsy-treatment-options" },
          { title: "Migraine Relief", href: "/doctor/near-me/treat/neurology/migraine-relief-management" }
        ]
      }}
      reviews={{ entityName: "Neurology Care", entitySlug: "neurology", entityType: "department" }}
    >
      <section>
        <h2>Understanding Parkinson's Disease</h2>
        <p>
          Parkinson's Disease (PD) is caused by the loss of <strong>dopamine-producing neurons</strong> in the basal ganglia — the brain's movement control center. As dopamine drops, the classic motor features emerge: tremor (shaking), rigidity (stiffness), bradykinesia (slowness), and postural instability.
        </p>
        <h3>Early Warning Signs</h3>
        <ul>
          <li>Resting tremor (usually one hand initially)</li>
          <li>Smaller handwriting (micrographia)</li>
          <li>Reduced arm swing while walking</li>
          <li>Soft or slurred speech</li>
          <li>Masked face (reduced facial expression)</li>
          <li>Constipation and loss of smell (may precede motor symptoms by years)</li>
        </ul>
        <h2>Our Treatment Approach</h2>
        <p>
          While there is currently no cure for Parkinson's Disease, modern medicine has dramatically improved outcomes:
        </p>
        <ul>
          <li><strong>Dopamine Replacement (Levodopa/Carbidopa):</strong> The most effective medication; remains the cornerstone of PD treatment.</li>
          <li><strong>Dopamine Agonists (Pramipexole, Ropinirole):</strong> Often used first in younger patients to reduce the risk of levodopa-related side effects.</li>
          <li><strong>MAO-B Inhibitors (Rasagiline, Selegiline):</strong> Slow dopamine breakdown; mild symptomatic benefit and possibly neuroprotective.</li>
          <li><strong>Deep Brain Stimulation (DBS):</strong> A neurosurgical procedure delivering electrical pulses to the subthalamic nucleus; highly effective for motor fluctuations and dyskinesias in advanced PD. We provide specialist referrals for DBS evaluation.</li>
        </ul>
        <h3>Holistic Non-Pharmacological Therapy</h3>
        <ul>
          <li><strong>Physiotherapy:</strong> Balance and gait training; fall prevention. LSVT BIG protocol for amplitude therapy.</li>
          <li><strong>Speech Therapy:</strong> LSVT LOUD protocol for voice and articulation. Swallowing assessment.</li>
          <li><strong>Occupational Therapy:</strong> Adaptations to support independent living for longer.</li>
        </ul>
        <h2>Regular Specialist Reviews</h2>
        <p>
          Parkinson's care is a lifelong journey and medication needs change over time. Our neurology team conducts regular reviews (every 3-6 months) to optimize your medication regime, manage side effects, and coordinate allied health involvement.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
