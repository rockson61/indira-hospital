import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Stroke Recovery Exercises | Indira Super Speciality Hospital Vellore",
  description: "Advanced Stroke Recovery Exercises at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function StrokeRecoveryExercisesPage() {
  return (
    <SubServiceTemplate
      title="Stroke Recovery Exercises"
      eyebrow="Neurology Treatment"
      description={
        <p>
          Stroke Recovery Exercises at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "neurology/stroke-recovery-exercises",
        related: [
          { title: "All Neurology Services", href: "/services/neurology" }
        ]
      }}
      reviews={{
        entityName: "Stroke Recovery Exercises",
        entitySlug: "neurology/stroke-recovery-exercises"
      }}
    >
      <section>
        <h2>What is Stroke Recovery Exercises?</h2>
        <p>
          TODO: Comprehensive explanation of Stroke Recovery Exercises and its benefits for patients. Stroke Recovery Exercises is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Stroke Recovery Exercises. Consult with our specialists to determine if this is the right treatment for you.
        </p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Super Speciality Hospital, Vellore.
          We offer 50% lower costs than Chennai/Bangalore with 0% EMI options available via major banks.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
