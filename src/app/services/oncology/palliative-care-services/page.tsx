import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Palliative Care Services | Indira Super Speciality Hospital Vellore",
  description: "Advanced Palliative Care Services at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function PalliativeCareServicesPage() {
  return (
    <SubServiceTemplate
      title="Palliative Care Services"
      eyebrow="Oncology Treatment"
      description={
        <p>
          Palliative Care Services at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "oncology/palliative-care-services",
        related: [
          { title: "All Oncology Services", href: "/services/oncology" }
        ]
      }}
      reviews={{
        entityName: "Palliative Care Services",
        entitySlug: "oncology/palliative-care-services"
      }}
    >
      <section>
        <h2>What is Palliative Care Services?</h2>
        <p>
          TODO: Comprehensive explanation of Palliative Care Services and its benefits for patients. Palliative Care Services is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Palliative Care Services. Consult with our specialists to determine if this is the right treatment for you.
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
