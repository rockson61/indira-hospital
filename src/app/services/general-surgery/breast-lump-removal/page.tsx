import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Breast Lump Removal | Indira Super Speciality Hospital Vellore",
  description: "Advanced Breast Lump Removal at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function BreastLumpRemovalPage() {
  return (
    <SubServiceTemplate
      title="Breast Lump Removal"
      eyebrow="General-surgery Treatment"
      description={
        <p>
          Breast Lump Removal at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "general-surgery/breast-lump-removal",
        related: [
          { title: "All General-surgery Services", href: "/services/general-surgery" }
        ]
      }}
      reviews={{
        entityName: "Breast Lump Removal",
        entitySlug: "general-surgery/breast-lump-removal"
      }}
    >
      <section>
        <h2>What is Breast Lump Removal?</h2>
        <p>
          TODO: Comprehensive explanation of Breast Lump Removal and its benefits for patients. Breast Lump Removal is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Breast Lump Removal. Consult with our specialists to determine if this is the right treatment for you.
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
