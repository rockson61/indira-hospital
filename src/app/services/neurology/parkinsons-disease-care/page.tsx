import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Parkinsons Disease Care | Indira Super Speciality Hospital Vellore",
  description: "Advanced Parkinsons Disease Care at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function ParkinsonsDiseaseCarePage() {
  return (
    <SubServiceTemplate
      title="Parkinsons Disease Care"
      eyebrow="Neurology Treatment"
      description={
        <p>
          Parkinsons Disease Care at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "neurology/parkinsons-disease-care",
        related: [
          { title: "All Neurology Services", href: "/services/neurology" }
        ]
      }}
      reviews={{
        entityName: "Parkinsons Disease Care",
        entitySlug: "neurology/parkinsons-disease-care"
      }}
    >
      <section>
        <h2>What is Parkinsons Disease Care?</h2>
        <p>
          TODO: Comprehensive explanation of Parkinsons Disease Care and its benefits for patients. Parkinsons Disease Care is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Parkinsons Disease Care. Consult with our specialists to determine if this is the right treatment for you.
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
