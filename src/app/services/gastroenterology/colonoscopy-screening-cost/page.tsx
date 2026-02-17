import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Colonoscopy Screening Cost | Indira Super Speciality Hospital Vellore",
  description: "Advanced Colonoscopy Screening Cost at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function ColonoscopyScreeningCostPage() {
  return (
    <SubServiceTemplate
      title="Colonoscopy Screening Cost"
      eyebrow="Gastroenterology Treatment"
      description={
        <p>
          Colonoscopy Screening Cost at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "gastroenterology/colonoscopy-screening-cost",
        related: [
          { title: "All Gastroenterology Services", href: "/services/gastroenterology" }
        ]
      }}
      reviews={{
        entityName: "Colonoscopy Screening Cost",
        entitySlug: "gastroenterology/colonoscopy-screening-cost"
      }}
    >
      <section>
        <h2>What is Colonoscopy Screening Cost?</h2>
        <p>
          TODO: Comprehensive explanation of Colonoscopy Screening Cost and its benefits for patients. Colonoscopy Screening Cost is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Colonoscopy Screening Cost. Consult with our specialists to determine if this is the right treatment for you.
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
