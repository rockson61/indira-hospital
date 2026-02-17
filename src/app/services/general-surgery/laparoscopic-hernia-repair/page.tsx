import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Laparoscopic Hernia Repair | Indira Super Speciality Hospital Vellore",
  description: "Advanced Laparoscopic Hernia Repair at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function LaparoscopicHerniaRepairPage() {
  return (
    <SubServiceTemplate
      title="Laparoscopic Hernia Repair"
      eyebrow="General-surgery Treatment"
      description={
        <p>
          Laparoscopic Hernia Repair at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "general-surgery/laparoscopic-hernia-repair",
        related: [
          { title: "All General-surgery Services", href: "/services/general-surgery" }
        ]
      }}
      reviews={{
        entityName: "Laparoscopic Hernia Repair",
        entitySlug: "general-surgery/laparoscopic-hernia-repair"
      }}
    >
      <section>
        <h2>What is Laparoscopic Hernia Repair?</h2>
        <p>
          TODO: Comprehensive explanation of Laparoscopic Hernia Repair and its benefits for patients. Laparoscopic Hernia Repair is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Laparoscopic Hernia Repair. Consult with our specialists to determine if this is the right treatment for you.
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
