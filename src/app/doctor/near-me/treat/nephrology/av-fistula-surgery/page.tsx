import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "AV Fistula Creation Surgery for Dialysis | Indira Hospital Vellore",
  description: "Expert Arteriovenous (AV) Fistula creation surgery at Indira Super Speciality Hospital, Vellore. Ensuring optimal, long-lasting dialysis access for kidney patients.",
  keywords: ["AV fistula Vellore", "Dialysis access surgery", "Kidney failure fistula", "Nephrology hospital Vellore", "AV fistula creation cost"]
};

export default function AVFistulaSurgeryPage() {
  return (
    <SubServiceTemplate
      departmentName="Nephrology"
      departmentSlug="nephrology"
      title="AV Fistula Surgery"
      eyebrow="Nephrology & Vascular Access"
      description={
        <p>
          An <strong>Arteriovenous (AV) Fistula</strong> is the gold standard for hemodialysis access. Created surgically by connecting an artery and vein in the arm, it provides a durable, high-flow access point for dialysis. Our vascular surgeons at Indira Hospital specialize in creating fistulas that mature well and last for years.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹25,000 – ₹45,000", icon: "IndianRupee" },
        { label: "Duration", value: "45-90 Mins", icon: "Clock" },
        { label: "Maturation", value: "4-6 Weeks", icon: "Activity" },
        { label: "Longevity", value: "Years of Use", icon: "Star" }
      ]}
      timeline={{
        title: "AV Fistula Creation Process",
        steps: [
          { title: "Vein Mapping", description: "Doppler ultrasound mapping of forearm veins to plan the ideal fistula site.", duration: "Pre-op" },
          { title: "Surgery", description: "Anastomosis of artery and vein under local/regional anaesthesia.", duration: "45-90 Mins" },
          { title: "Maturation", description: "Fistula 'matures' (arterializes) over 4-6 weeks — no dialysis needles during this time.", duration: "4-6 Weeks" },
          { title: "First Use", description: "Fistula is evaluated by nephrologist and cleared for dialysis needle access.", duration: "Week 6+" }
        ]
      }}
      relatedServices={{
        serviceSlug: "nephrology",
        related: [
          { title: "Dialysis Procedure", href: "/doctor/near-me/treat/nephrology/dialysis-procedure-guide" },
          { title: "Chronic Kidney Disease", href: "/doctor/near-me/treat/nephrology/chronic-kidney-disease-stages" },
          { title: "Diabetic Nephropathy", href: "/doctor/near-me/treat/nephrology/diabetic-nephropathy-prevention" }
        ]
      }}
      reviews={{ entityName: "Nephrology Care", entitySlug: "nephrology", entityType: "department" }}
    >
      <section>
        <h2>Why AV Fistula is the Best Dialysis Access</h2>
        <p>
          Dialysis requires access to large volumes of blood rapidly. An AV fistula, once mature, provides this naturally. Compared to central venous catheters (temporary lines), fistulas have:
        </p>
        <ul>
          <li>Dramatically lower rates of infection (bloodstream infections)</li>
          <li>Better blood flow rates enabling more effective dialysis clearance</li>
          <li>Longer functional lifespan (3-5+ years vs. months for grafts)</li>
          <li>No external device — lower impact on body image and lifestyle</li>
        </ul>
        <h3>Planning is Critical: Start Early</h3>
        <p>
          It is strongly recommended that patients with <strong>Stage 4-5 Chronic Kidney Disease (CKD)</strong> consult a vascular surgeon for fistula planning at least 6 months before anticipated dialysis initiation. Creating a fistula early enough to allow adequate maturation prevents the need for a temporary catheter.
        </p>
        <h2>Fistula Care at Home</h2>
        <p>
          After surgery, patients are taught to care for their fistula:
        </p>
        <ul>
          <li>Daily fistula site inspection for signs of infection (redness, swelling, discharge)</li>
          <li>Feeling for the "thrill" (vibration) and listening for the "bruit" (sound) — confirming it's working</li>
          <li>Avoiding tight clothing, watches, or blood pressure measurements on the fistula arm</li>
        </ul>
        <h2>Cost & Insurance</h2>
        <p>
          AV Fistula creation surgery costs between <strong>₹25,000 and ₹45,000</strong>. It is covered under most major health insurance policies and government schemes including Aarogyasri and TN CM Health Insurance.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
