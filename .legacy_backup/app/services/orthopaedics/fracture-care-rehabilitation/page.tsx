import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Fracture Care & Rehabilitation | Indira Hospital Vellore",
  description: "Advanced Fracture Management and Rehabilitation at Indira Super Speciality Hospital, Vellore. Expert orthopaedic surgeons providing ORIF and minimally invasive fracture fixation.",
  keywords: ["Fracture treatment Vellore", "Bone fracture surgery hospital", "ORIF surgery Vellore", "Fracture rehabilitation", "Orthopaedic surgeon Vellore"]
};

export default function FractureCareRehabilitationPage() {
  return (
    <SubServiceTemplate
      departmentName="Orthopaedics"
      departmentSlug="orthopaedics"
      title="Fracture Care & Rehabilitation"
      eyebrow="Orthopaedic Trauma Care"
      description={
        <p>
          From minor fractures to complex multi-fragment breaks, Indira Hospital's <strong>Orthopaedic Trauma Unit</strong> provides expert, 24/7 fracture management. Our surgeons use the latest fixation hardware and minimally invasive techniques for maximum stability and fastest recovery.
        </p>
      }
      quickFacts={[
        { label: "Emergency", value: "24/7 Coverage", icon: "Activity" },
        { label: "Approach", value: "MIPO / ORIF", icon: "ShieldCheck" },
        { label: "Implants", value: "Synthes / DePuy", icon: "Star" },
        { label: "Rehab", value: "In-Hospital Start", icon: "Clock" }
      ]}
      timeline={{
        title: "Fracture Treatment Pathway",
        steps: [
          { title: "Emergency Assessment", description: "X-ray, CT scan, vascular and neurological assessment of the injury." },
          { title: "Temporary Stabilisation", description: "Splinting, traction, or external fixator for acute swelling reduction." },
          { title: "Definitive Surgery", description: "ORIF with plate-and-screws or Intramedullary Nailing once swelling resolves." },
          { title: "Rehabilitation", description: "Active, progressive physiotherapy from Day 1 post-operatively for fastest recovery." }
        ]
      }}
      relatedServices={{
        serviceSlug: "orthopaedics",
        related: [
          { title: "ACL Reconstruction", href: "/services/orthopaedics/acl-reconstruction-recovery" },
          { title: "Spine Surgery", href: "/services/orthopaedics/spine-surgery-disc-prolapse" },
          { title: "Knee Replacement", href: "/services/orthopaedics/total-knee-replacement-cost" }
        ]
      }}
      reviews={{ entityName: "Orthopaedic Care", entitySlug: "orthopaedics", entityType: "department" }}
    >
      <section>
        <h2>Expert Trauma Fracture Management</h2>
        <p>
          When a bone breaks, prompt and correct management determines the long-term functional outcome. At Indira Hospital, our orthopaedic trauma team handles the full spectrum — from closed fractures treated with casting to complex peri-articular fractures requiring sophisticated surgical reconstruction.
        </p>
        <h3>Commonly Treated Fractures</h3>
        <ul>
          <li><strong>Hip Fractures (Neck of Femur/Intertrochanteric):</strong> Surgical fixation or hip replacement within 24-48 hours to prevent complications in elderly patients.</li>
          <li><strong>Wrist Fractures (Distal Radius):</strong> Minimally invasive volar plate fixation allowing early hand use.</li>
          <li><strong>Ankle Fractures:</strong> ORIF of lateral and medial malleolus for anatomical joint restoration.</li>
          <li><strong>Tibial Shaft Fractures:</strong> Intramedullary nailing — minimal incision, excellent alignment, early weight-bearing.</li>
          <li><strong>Complex Periarticular Fractures:</strong> Knee, elbow, and shoulder joint fractures requiring specialized surgical skills.</li>
        </ul>
        <h3>MIPO: Minimally Invasive Plate Osteosynthesis</h3>
        <p>
          Our surgeons are trained in <strong>MIPO</strong> technique where long plate fixation is achieved through very small incisions, preserving blood supply to the fracture fragments — essential for rapid and reliable bone healing.
        </p>
        <h2>Fracture Rehabilitation</h2>
        <p>
          Our physiotherapy team begins fracture rehabilitation from the very first post-operative day. Early movement prevents joint stiffness, muscle wasting, and blood clots. You'll have a clear, milestone-based recovery plan for returning to full function.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
