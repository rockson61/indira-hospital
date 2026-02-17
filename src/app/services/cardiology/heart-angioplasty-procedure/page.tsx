import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { IndianRupee, Clock, Activity, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Heart Angioplasty Procedure | Indira Super Speciality Hospital Vellore",
  description: "Advanced Heart Angioplasty Procedure at Indira Super Speciality Hospital, Vellore. Expert care by Dr. P. Shankar with high success rates and affordable costs."
};

export default function HeartAngioplastyProcedurePage() {
  return (
    <SubServiceTemplate
      title="Heart Angioplasty Procedure"
      eyebrow="Cardiology Treatment"
      description={
        <p>
          Heart angioplasty is a life-saving procedure performed by <strong>Dr. P. Shankar</strong> at Indira Super Speciality Hospital to restore blood flow to the heart by opening blocked arteries, offering 50% lower costs than Chennai with international standards.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹85,000 – ₹1,50,000", icon: "IndianRupee" },
        { label: "Duration", value: "45–90 Minutes", icon: "Clock" },
        { label: "Recovery", value: "1–2 Days", icon: "Activity" },
        { label: "Success Rate", value: "98%", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology/heart-angioplasty-procedure",
        related: [
          { title: "All Cardiology Services", href: "/services/cardiology" }
        ]
      }}
      reviews={{
        entityName: "Heart Angioplasty Procedure",
        entitySlug: "cardiology/heart-angioplasty-procedure"
      }}
    >
      <section>
        <h2>What is Heart Angioplasty Procedure?</h2>
        <p>
          TODO: Comprehensive explanation of Heart Angioplasty Procedure and its benefits for patients. Heart Angioplasty Procedure is a specialized treatment offered at our Vellore facility.
        </p>

        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for Heart Angioplasty Procedure. Consult with our specialists to determine if this is the right treatment for you.
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
