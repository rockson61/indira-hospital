import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Pacemaker Implantation Procedure & Cost | Indira Hospital Vellore",
  description: "Advanced Pacemaker Implantation at Indira Super Speciality Hospital, Vellore. Expert electrophysiologists treating heart rhythm disorders (Bradycardia) affordably.",
  keywords: ["Pacemaker implant Vellore", "Cardiac pacemaker cost", "Heart rhythm treatment", "Bradycardia hospital", "Electrophysiology Vellore"]
};

export default function PacemakerImplantationStepsPage() {
  return (
    <SubServiceTemplate
      departmentName="Cardiology"
      departmentSlug="cardiology"
      title="Pacemaker Implantation"
      eyebrow="Cardiac Rhythm Specialists"
      description={
        <p>
          A <strong>Pacemaker</strong> is a small electronic device implanted under the skin near the collarbne that sends regular electrical impulses to keep the heart beating at a normal, steady pace. Indira Hospital's electrophysiology team ensures safe, precise implantation with excellent long-term outcomes.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹80k – ₹1.8L", icon: "IndianRupee" },
        { label: "Duration", value: "1-2 Hours", icon: "Clock" },
        { label: "Stay", value: "2-3 Days", icon: "Activity" },
        { label: "Battery Life", value: "7-10 Years", icon: "Star" }
      ]}
      timeline={{
        title: "Pacemaker Implantation Steps",
        steps: [
          { title: "Electrophysiology Study", description: "Comprehensive assessment of heart rhythm to confirm the need for pacing." },
          { title: "Lead Placement", description: "1-2 thin wires (leads) are guided through a vein into the heart chambers." },
          { title: "Generator Implant", description: "The pacemaker box (generator) is placed in a small pocket under the skin." },
          { title: "Device Programming", description: "The pacemaker is calibrated to the patient's specific heart rate requirements." }
        ]
      }}
      relatedServices={{
        serviceSlug: "cardiology",
        related: [
          { title: "Heart Valve Replacement", href: "/services/cardiology/heart-valve-replacement-surgery" },
          { title: "Preventive Heart Checkup", href: "/services/cardiology/preventive-heart-checkup" },
          { title: "Heart Angioplasty", href: "/services/cardiology/heart-angioplasty-procedure" }
        ]
      }}
      reviews={{ entityName: "Cardiac Care", entitySlug: "cardiology", entityType: "department" }}
    >
      <section>
        <h2>Who Needs a Pacemaker?</h2>
        <p>
          A pacemaker is recommended when the heart's natural electrical system fails to maintain an adequate heart rate — a condition called <strong>Bradycardia</strong> (slow heart rate). Common causes include Sick Sinus Syndrome, Heart Block, and certain types of fainting (syncope).
        </p>
        <h3>Types of Pacemakers Available</h3>
        <ul>
          <li><strong>Single-Chamber:</strong> One lead in the right ventricle; simplest design.</li>
          <li><strong>Dual-Chamber:</strong> Leads in both the right atrium and ventricle; more physiological pacing.</li>
          <li><strong>Biventricular (CRT):</strong> For heart failure patients; coordinates the pumping of both ventricles.</li>
          <li><strong>Leadless Pacemaker:</strong> A completely self-contained micro-device placed directly inside the heart — no leads!</li>
        </ul>
        <h2>Life After Pacemaker</h2>
        <p>
          After implantation, patients can resume normal daily activities within 1-2 weeks. We provide a <strong>Pacemaker ID Card</strong> and regular follow-up checks (every 6 months) to ensure the device is functioning optimally. Most pacemaker batteries last <strong>7-10 years</strong>, after which only the generator is replaced.
        </p>
        <h2>Cost & Insurance</h2>
        <p>
          Costs vary by device type, starting at <strong>₹80,000</strong> for a single-chamber pacemaker. Cashless insurance processing is available for most major group and individual health plans.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
