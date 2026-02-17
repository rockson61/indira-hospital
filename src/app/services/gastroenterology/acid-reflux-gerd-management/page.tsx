import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Acid Reflux Gerd Management | Indira Super Speciality Hospital Vellore",
  description: "Advanced Acid Reflux Gerd Management at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function AcidRefluxGerdManagementPage() {
  return (
    <SubServiceTemplate
      title="Acid Reflux Gerd Management"
      eyebrow="Gastroenterology Treatment"
      description={
        <p>
          Acid Reflux Gerd Management at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "gastroenterology/acid-reflux-gerd-management",
        related: [
          { title: "All Gastroenterology Services", href: "/services/gastroenterology" }
        ]
      }}
      reviews={{
        entityName: "Acid Reflux Gerd Management",
        entitySlug: "gastroenterology/acid-reflux-gerd-management"
      }}
    >
      <section>
        <h2>What is Acid Reflux Gerd Management?</h2>
        <p>
          TODO: Comprehensive explanation of Acid Reflux Gerd Management and its benefits for patients. Acid Reflux Gerd Management is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Acid Reflux Gerd Management. Consult with our specialists to determine if this is the right treatment for you.
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
