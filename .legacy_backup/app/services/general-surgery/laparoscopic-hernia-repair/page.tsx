import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Laparoscopic Hernia Repair Guide & Cost | Indira Hospital Vellore",
  description: "Advanced Laparoscopic Hernia Repair (TAPP/TEP) at Indira Super Speciality Hospital, Vellore. Less pain, smaller scars, and rapid return to work compared to open surgery.",
  keywords: ["Laparoscopic hernia repair Vellore", "Hernia surgery cost India", "TAPP TEP hernia", "Inguinal hernia hospital Vellore", "Hernia surgeon Vellore"]
};

export default function LaparoscopicHerniaRepairPage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Laparoscopic Hernia Repair"
      eyebrow="Advanced General Surgery"
      description={
        <p>
          Indira Hospital is a center of expertise for <strong>Laparoscopic Hernia Repair</strong> — treating inguinal, umbilical, incisional, and hiatal hernias with minimal access techniques. Our surgeons achieve durable, tension-free repairs using premium mesh technology through tiny incisions.
        </p>
      }
      quickFacts={[
        { label: "Cost (Inguinal)", value: "₹35k – ₹65k", icon: "IndianRupee" },
        { label: "Duration", value: "45-60 Mins", icon: "Clock" },
        { label: "Stay", value: "1 Day (Day Care)", icon: "Activity" },
        { label: "Return to Work", value: "3-5 Days", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "lap-vs-open",
            heading: "Laparoscopic vs. Open Hernia Repair",
            description: "Benefits of choosing keyhole hernia surgery at Indira Hospital:",
            table: {
              headers: ["Factor", "Laparoscopic (TAPP/TEP)", "Open (Lichtenstein)"],
              rows: [
                ["Incision", "3 x 5-10mm ports", "3-4 cm skin incision"],
                ["Pain", "Minimal", "Moderate"],
                ["Return to Work", "3-5 Days", "7-10 Days"],
                ["Bilateral Hernia", "Both sides, same session", "Two separate sessions"],
                ["Recurrence", "Similar (~1-2%)", "Similar (~1-2%)"]
              ],
              caption: "Hernia repair technique comparison."
            }
          }
        ],
        faqs: [
          {
            question: "Is hernia repair done overnight or same day?",
            answer: "Most laparoscopic hernia repairs at Indira Hospital are performed as day-care procedures. You arrive, have surgery under general anaesthesia, recover for a few hours, and go home the same afternoon."
          }
        ]
      }}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Appendix Surgery", href: "/services/general-surgery/appendix-surgery-steps" },
          { title: "Gallbladder Stone Surgery", href: "/services/general-surgery/gallbladder-stone-surgery" },
          { title: "Laser Piles Treatment", href: "/services/general-surgery/laser-piles-treatment-cost" }
        ]
      }}
      reviews={{ entityName: "General Surgery", entitySlug: "general-surgery", entityType: "department" }}
    >
      <section>
        <h2>Understanding Hernia</h2>
        <p>
          A hernia occurs when an internal organ (typically small intestine) pushes through a weak spot in the surrounding muscle or connective tissue. They most commonly occur in the groin (inguinal hernia — 75% of all hernias), belly button (umbilical), or at a previous surgical incision site (incisional hernia).
        </p>
        <h3>Symptoms</h3>
        <ul>
          <li>A visible bulge in the affected area, especially when standing or coughing</li>
          <li>Aching or burning sensation at the bulge site</li>
          <li>Pain or discomfort when bending over or lifting</li>
          <li>Groinal weakness or pressure</li>
        </ul>
        <h3>When to Seek Emergency Care</h3>
        <p>
          If a hernia becomes <strong>irreducible (stuck) or strangulated</strong> (blood supply cut off), this is a surgical emergency. Signs include sudden severe pain, nausea, vomiting, the bulge becoming hard and fixed. Call 108 or proceed to emergency immediately.
        </p>
        <h2>Cost & Recovery</h2>
        <p>
          Laparoscopic inguinal hernia repair costs <strong>₹35,000 – ₹65,000</strong> (including mesh) at Indira Hospital. Both sides can be repaired in one session at very little additional cost. Most patients return to desk work within 3-5 days and lifting within 3-4 weeks.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
