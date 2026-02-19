import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Epilepsy treatment & Seizure Management | Indira Hospital Vellore",
  description: "Advanced Epilepsy treatment options at Indira Super Speciality Hospital, Vellore. Expert neurology care, personalized medication, and surgical evaluations.",
  keywords: ["Epilepsy treatment Vellore", "Seizure management hospital", "Neurologist for epilepsy", "EEG test Vellore", "Chronic seizure care"]
};

export default function EpilepsyTreatmentOptionsPage() {
  return (
    <SubServiceTemplate
      departmentName="Neurology"
      departmentSlug="neurology"
      title="Epilepsy Treatment Options"
      eyebrow="Neurology Excellence"
      description={
        <p>
          Receive comprehensive care for epilepsy and seizure disorders at Indira Super Speciality Hospital. We combine accurate neuro-diagnostics with evidence-based medical and surgical therapies to help you achieve a seizure-free life.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
        { label: "EEG Test", value: "Digital EEG", icon: "Activity" },
        { label: "Management", value: "Long-term", icon: "ShieldCheck" },
        { label: "Patient Care", value: "Holistic", icon: "UserCheck" }
      ]}
      relatedServices={{
        serviceSlug: "neurology",
        related: [
          { title: "Migraine Management", href: "/services/neurology/migraine-relief-management" },
          { title: "Stroke Recovery", href: "/services/neurology/stroke-recovery-exercises" },
          { title: "EEG Test Procedure", href: "/services/neurology/eeg-test-procedure" }
        ]
      }}
      reviews={{
        entityName: "Neurology Care",
        entitySlug: "neurology",
        entityType: "department"
      }}
    >
      <section>
        <h2>Comprehensive Epilepsy Management in Vellore</h2>
        <p>
          Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures. At Indira Super Speciality Hospital, our neurology department is dedicated to identifying the underlying cause of seizures and implementing a treatment plan that minimizes side effects and maximizes freedom from seizures.
        </p>

        <h3>Modern Diagnostic Infrastructure</h3>
        <p>
          Successful treatment starts with an accurate diagnosis. Our facility is equipped with:
        </p>
        <ul>
          <li><strong>Digital EEG (Electroencephalogram):</strong> To map the brain's electrical activity and identify seizure foci.</li>
          <li><strong>High-Resolution MRI:</strong> To detect structural abnormalities, tumors, or scarring that may be causing seizures.</li>
          <li><strong>Video EEG Monitoring:</strong> For precise characterization of seizure types in complex cases.</li>
        </ul>

        <h2>Available Treatment Modalities</h2>
        <p>
          We offer a range of treatment options tailored to the specific needs of each patient, from pediatric to geriatric epilepsy care:
        </p>
        <ul>
          <li><strong>Anti-Epileptic Drugs (AEDs):</strong> Personalized medication management to ensure maximum efficacy with minimal cognitive side effects.</li>
          <li><strong>Vagus Nerve Stimulation (VNS):</strong> A surgical option for patients who do not respond well to medications.</li>
          <li><strong>Ketogenic Diet Counseling:</strong> Specialized nutritional therapy, particularly effective for certain types of childhood epilepsy.</li>
          <li><strong>Surgical Evaluation:</strong> For patients with drug-resistant epilepsy, we provide comprehensive evaluations for potential resective surgery.</li>
        </ul>

        <h2>Cost & Support Services</h2>
        <p>
          <strong>Affordable Epilepsy Care:</strong> Epilepsy often requires long-term management. We provide cost-effective consultation and diagnostic packages to ensure that high-quality neurology care remains accessible.
        </p>
        <p>
          We assist with <strong>Insurance Documentation</strong> and provide 0% EMI options for advanced diagnostic workups and surgical procedures.
        </p>

        <h3>Living Well with Epilepsy</h3>
        <p>
          Our care extends beyond just stopping seizures. We provide counseling for lifestyle modifications, safety precautions, and psychological support to help patients and their families navigate the challenges of living with epilepsy.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
