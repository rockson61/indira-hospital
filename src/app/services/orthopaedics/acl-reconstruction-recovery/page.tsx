import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "ACL Reconstruction & Recovery Guide | Indira Hospital Vellore",
  description: "Advanced ACL Reconstruction Surgery at Indira Super Speciality Hospital, Vellore. Expert arthroscopic surgeons using autograft techniques for complete knee stability restoration.",
  keywords: ["ACL reconstruction Vellore", "Knee ligament surgery", "Sports injury hospital Vellore", "Arthroscopy Vellore", "ACL recovery time"]
};

export default function ACLReconstructionRecoveryPage() {
  return (
    <SubServiceTemplate
      departmentName="Orthopaedics"
      departmentSlug="orthopaedics"
      title="ACL Reconstruction & Recovery"
      eyebrow="Sports Medicine & Arthroscopy"
      description={
        <p>
          Anterior Cruciate Ligament (ACL) tears are a common sports injury that causes knee instability. Indira Hospital's <strong>Sports Medicine</strong> team offers advanced <strong>Arthroscopic ACL Reconstruction</strong> using the patient's own tissue (autograft) for a natural, strong, and durable repair.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹80k – ₹1.4L", icon: "IndianRupee" },
        { label: "Duration", value: "60-90 Mins", icon: "Clock" },
        { label: "Stay", value: "1-2 Days", icon: "Activity" },
        { label: "Return to Sport", value: "9-12 Months", icon: "Star" }
      ]}
      timeline={{
        title: "ACL Recovery Milestones",
        steps: [
          { title: "Surgery", description: "Arthroscopic ACL reconstruction. Home the next day with a brace and crutches.", duration: "Day 1" },
          { title: "Phase 1: Swelling Control", description: "Ice, elevation, gentle range of motion exercises. Walking without crutches.", duration: "Weeks 1-4" },
          { title: "Phase 2: Strength", description: "Progressive gym-based strengthening; cycling, swimming.", duration: "Months 2-4" },
          { title: "Phase 3: Sport-Specific", description: "Running, jumping, agility drills. Sport-specific training.", duration: "Months 5-9" },
          { title: "Return to Sport", description: "Functional testing and surgeon clearance before full return to competition.", duration: "Month 9-12" }
        ]
      }}
      relatedServices={{
        serviceSlug: "orthopaedics",
        related: [
          { title: "Fracture Care", href: "/services/orthopaedics/fracture-care-rehabilitation" },
          { title: "Spine Surgery", href: "/services/orthopaedics/spine-surgery-disc-prolapse" },
          { title: "Knee Replacement", href: "/services/orthopaedics/total-knee-replacement-cost" }
        ]
      }}
      reviews={{ entityName: "Orthopaedic Care", entitySlug: "orthopaedics", entityType: "department" }}
    >
      <section>
        <h2>Understanding ACL Tears</h2>
        <p>
          The ACL is one of the major ligaments stabilizing the knee. It most commonly tears during sports that involve sudden stops, direction changes, or pivoting — football, basketball, badminton, and martial arts. A torn ACL does <em>not</em> heal on its own; surgical reconstruction is recommended for active individuals.
        </p>
        <h3>Graft Choices</h3>
        <ul>
          <li><strong>Patellar Tendon Autograft (Gold Standard):</strong> Middle third of the patellar tendon; excellent biological fixation and strength. Preferred for high-level athletes.</li>
          <li><strong>Hamstring Tendon Autograft (Gracilis/Semitendinosus):</strong> Lower donor site morbidity; popular choice for most recreational athletes.</li>
          <li><strong>Allograft (Donor Tissue):</strong> Occasionally used in revision surgeries or when autograft is not feasible. Slower graft integration.</li>
        </ul>
        <h3>Double-Bundle ACL Reconstruction</h3>
        <p>
          For selected patients, we offer <strong>anatomical double-bundle reconstruction</strong> which recreates both the Anteromedial and Posterolateral bundles of the ACL — more closely replicating the anatomy and function of the native ligament, especially for rotational stability.
        </p>
        <h2>Structured Rehabilitation is Key</h2>
        <p>
          Surgery is only the beginning. Our dedicated sports physiotherapists work with each patient through our <strong>evidence-based ACL rehabilitation protocol</strong>. Return to play is based on functional performance tests, not just the passage of time — ensuring athletes return safely and confidently.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
