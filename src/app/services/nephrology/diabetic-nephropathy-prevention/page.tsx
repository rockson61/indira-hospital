import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Diabetic Nephropathy Prevention | Indira Super Speciality Hospital Vellore",
  description: "Advanced Diabetic Nephropathy Prevention at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function DiabeticNephropathyPreventionPage() {
  return (
    <SubServiceTemplate
      title="Diabetic Nephropathy Prevention"
      eyebrow="Nephrology Treatment"
      description={
        <p>
          Diabetic Nephropathy Prevention at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "nephrology/diabetic-nephropathy-prevention",
        related: [
          { title: "All Nephrology Services", href: "/services/nephrology" }
        ]
      }}
      reviews={{
        entityName: "Diabetic Nephropathy Prevention",
        entitySlug: "nephrology/diabetic-nephropathy-prevention"
      }}
    >
      <section>
        <h2>What is Diabetic Nephropathy Prevention?</h2>
        <p>
          TODO: Comprehensive explanation of Diabetic Nephropathy Prevention and its benefits for patients. Diabetic Nephropathy Prevention is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Diabetic Nephropathy Prevention. Consult with our specialists to determine if this is the right treatment for you.
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
