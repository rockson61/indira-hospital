import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "EEG Test Procedure & Cost in Vellore | Indira Hospital",
  description: "Advanced Digital EEG (Electroencephalogram) test at Indira Super Speciality Hospital, Vellore. Accurate neuro-diagnostics for epilepsy and brain disorders.",
  keywords: ["EEG test Vellore", "EEG procedure steps", "Electroencephalogram cost", "Neurology diagnostics Vellore", "Brain wave test"]
};

export default function EegTestProcedurePage() {
  return (
    <SubServiceTemplate
      departmentName="Neurology"
      departmentSlug="neurology"
      title="EEG Test Procedure"
      eyebrow="Neurology Diagnostics"
      description={
        <p>
          An <strong>Electroencephalogram (EEG)</strong> is a non-invasive diagnostic test that records the electrical activity of the brain. At Indira Super Speciality Hospital, we use high-precision Digital EEG systems to help diagnose epilepsy, sleep disorders, and other neurological conditions.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹1,200 – ₹2,500", icon: "IndianRupee" },
        { label: "Duration", value: "45-60 Mins", icon: "Clock" },
        { label: "Type", value: "Non-Invasive", icon: "ShieldCheck" },
        { label: "Reporting", value: "Same Day", icon: "Activity" }
      ]}
      relatedServices={{
        serviceSlug: "neurology",
        related: [
          { title: "Epilepsy Treatment", href: "/services/neurology/epilepsy-treatment-options" },
          { title: "Stroke Recovery", href: "/services/neurology/stroke-recovery-exercises" },
          { title: "Migraine Relief", href: "/services/neurology/migraine-relief-management" }
        ]
      }}
      reviews={{
        entityName: "Neurology Diagnostics",
        entitySlug: "neurology",
        entityType: "department"
      }}
      timeline={{
        title: "What to Expect During an EEG",
        steps: [
          { title: "Preparation", description: "Small metal discs (electrodes) are attached to your scalp using a special paste.", duration: "15 Mins" },
          { title: "Recording", description: "You will relax in a comfortable chair while the machine records your brain waves.", duration: "30 Mins" },
          { title: "Activation", description: "You may be asked to breathe deeply or look at flashing lights to trigger specific brain patterns.", duration: "5 Mins" },
          { title: "Completion", description: "Electrodes are removed and the skin is cleaned. You can resume normal activities immediately.", duration: "5 Mins" }
        ]
      }}
    >
      <section>
        <h2>Advanced Digital EEG in Vellore</h2>
        <p>
          Our neurology department utilizes state-of-the-art <strong>Digital EEG technology</strong> which offers superior clarity compared to traditional analog systems. This allows our neurologists to detect even the most subtle abnormalities in brain wave patterns, ensuring an accurate diagnosis for conditions like:
        </p>
        <ul>
          <li><strong>Seizure Disorders:</strong> Determining the type and origin of epileptic activity.</li>
          <li><strong>Sleep Disorders:</strong> Assisting in the diagnosis of narcolepsy or sleep apnea.</li>
          <li><strong>Encephalopathy:</strong> Evaluating brain dysfunction due to metabolic or toxic causes.</li>
          <li><strong>Brain Injuries:</strong> Assessing memory impairment or brain function after a trauma or stroke.</li>
        </ul>

        <h3>How to Prepare for Your EEG</h3>
        <p>
          To ensure the most accurate results, please follow these simple instructions:
        </p>
        <ul>
          <li><strong>Wash Your Hair:</strong> Wash your hair the night before or the morning of the test. Do not use hair oils, gels, or sprays.</li>
          <li><strong>Caffeine:</strong> Avoid caffeine (coffee, tea, cola) for at least 8 hours before the test.</li>
          <li><strong>Medications:</strong> Continue taking your regular medications unless your doctor specifically tells you otherwise.</li>
          <li><strong>Sleep Deprivation:</strong> If a "Sleep EEG" is requested, you may be asked to stay awake for a certain period before the test.</li>
        </ul>

        <h2>Cost & Booking Information</h2>
        <p>
          At Indira Super Speciality Hospital, we provide high-quality neuro-diagnostics at a fraction of the cost found in larger metros. A routine Digital EEG starts at approximately <strong>₹1,200</strong>.
        </p>
        <p>
          Reports are typically reviewed and signed by our senior consultants and are available for pick-up on the <strong>same day</strong> or can be sent digitally via WhatsApp/Email.
        </p>

        <h3>Why Choose Indira Hospital?</h3>
        <p>
          Our diagnostic center is staffed by trained neuro-technicians who ensure patient comfort throughout the procedure. Every EEG is carefully interpreted by our experienced neurologists, providing you with a reliable foundation for your treatment plan.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
