import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Appendix Surgery (Appendectomy) Steps & Guide | Indira Hospital Vellore",
  description: "Comprehensive guide to Appendix Surgery (Appendectomy) at Indira Super Speciality Hospital, Vellore. Expert laparoscopic surgeons, fast recovery, and affordable cost.",
  keywords: ["Appendix surgery Vellore", "Appendectomy cost", "Laparoscopic appendix removal", "Emergency surgery Vellore", "Indira Hospital general surgery"]
};

export default function AppendixSurgeryStepsPage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Appendix Surgery (Appendectomy)"
      eyebrow="General Surgery Excellence"
      description={
        <p>
          Expert care for acute and chronic appendicitis at Indira Super Speciality Hospital. We specialize in minimally invasive laparoscopic appendectomy for faster recovery and minimal scarring.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹45k – ₹65k", icon: "IndianRupee" },
        { label: "Duration", value: "45-90 Mins", icon: "Clock" },
        { label: "Stay", value: "1-2 Days", icon: "ShieldCheck" },
        { label: "Recovery", value: "7-10 Days", icon: "Activity" }
      ]}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Hernia Repair", href: "/services/general-surgery/laparoscopic-hernia-repair" },
          { title: "Gallbladder Removal", href: "/services/general-surgery/gallbladder-removal-recovery" },
          { title: "Laser Piles Treatment", href: "/services/general-surgery/laser-piles-treatment-cost" }
        ]
      }}
      reviews={{
        entityName: "General Surgery",
        entitySlug: "general-surgery",
        entityType: "department"
      }}
      timeline={{
        title: "Appendectomy Recovery Timeline",
        steps: [
          { title: "Admission & Prep", description: "Blood tests, ultrasound/CT scan, and anesthesia clearance.", duration: "2-4 Hours" },
          { title: "Surgery", description: "Minimally invasive laparoscopic removal of the appendix.", duration: "1 Hour" },
          { title: "Observation", description: "Monitoring in recovery room until anesthesia wears off.", duration: "4-6 Hours" },
          { title: "Discharge", description: "Mobilization, light diet initiation, and discharge instructions.", duration: "Next Day" }
        ]
      }}
    >
      <section>
        <h2>What is an Appendectomy?</h2>
        <p>
          An appendectomy is the surgical removal of the appendix, a small pouch attached to the large intestine. This procedure is the standard treatment for <strong>Appendicitis</strong>, an inflammation of the appendix that can be life-threatening if it ruptures.
        </p>

        <h3>Laparoscopic vs. Open Appendectomy</h3>
        <p>
          At Indira Super Speciality Hospital, we prioritize <strong>Laparoscopic Appendectomy</strong> (keyhole surgery). This advanced technique involves:
        </p>
        <ul>
          <li><strong>Smaller Incisions:</strong> Minimal scarring and better aesthetic results.</li>
          <li><strong>Less Pain:</strong> Significantly reduced post-operative discomfort.</li>
          <li><strong>Faster Recovery:</strong> Most patients return to normal activities within a week.</li>
          <li><strong>Lower Infection Risk:</strong> Especially beneficial for diabetic and elderly patients.</li>
        </ul>

        <h2>Signs You Need Emergency Appendix Surgery</h2>
        <p>
          Appendicitis is a medical emergency. If you experience the following symptoms, consult our emergency department immediately:
        </p>
        <ul>
          <li>Sudden pain that begins around the navel and shifts to the lower right abdomen.</li>
          <li>Pain that worsens if you cough, walk, or make jarring movements.</li>
          <li>Low-grade fever that may worsen as the illness progresses.</li>
          <li>Nausea, vomiting, and loss of appetite.</li>
          <li>Abdominal bloating and constipation or diarrhea.</li>
        </ul>

        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Affordable Surgical Excellence:</strong> The cost of appendix surgery at Indira Hospital, Vellore, ranges from ₹45,000 to ₹65,000 depending on the complexity (e.g., ruptured vs. non-ruptured) and room category.
        </p>
        <p>
          We offer <strong>Cashless Treatment</strong> for all major TPA and Insurance providers. For self-paying patients, 0% EMI options are available to ensure life-saving surgery is accessible to all.
        </p>

        <h3>Why Choose Indira Hospital for General Surgery?</h3>
        <p>
          Our modular operating theaters are equipped with advanced laparoscopic towers and high-definition imaging. Our senior surgeons have performed thousands of successful appendectomies, ensuring the highest standards of patient safety and clinical outcomes.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
