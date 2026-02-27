import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Hip Replacement Surgery Guide & Cost | Indira Hospital Vellore",
  description: "Expert Total Hip Replacement (THR) surgery at Indira Super Speciality Hospital, Vellore. Advanced ceramic-on-ceramic implants, minimally invasive approach, and fast recovery.",
  keywords: ["Hip replacement Vellore", "THR surgery cost", "Orthopaedic surgeon Vellore", "Joint replacement hospital", "Avascular necrosis hip"]
};

export default function HipReplacementSurgeryGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Orthopaedics"
      departmentSlug="orthopaedics"
      title="Hip Replacement Surgery Guide"
      eyebrow="Joint Replacement Excellence"
      description={
        <p>
          <strong>Total Hip Replacement (THR)</strong> is a transformative surgery that replaces a damaged or arthritic hip joint with a prosthetic implant, allowing you to walk, climb stairs, and live actively and pain-free. Indira Hospital's joint replacement surgeons have extensive experience with the latest techniques and implants.
        </p>
      }
      quickFacts={[
        { label: "Cost Package", value: "₹1.8L – ₹3.0L", icon: "IndianRupee" },
        { label: "Duration", value: "60-90 Mins", icon: "Clock" },
        { label: "Stay", value: "3-4 Days", icon: "Activity" },
        { label: "Walk", value: "Day 1 Post-Op", icon: "Star" }
      ]}
      timeline={{
        title: "Hip Replacement Recovery",
        steps: [
          { title: "Pre-op Planning", description: "X-ray templating, blood tests, medical clearance, and blood donation (autologous)." },
          { title: "Surgery", description: "Direct Anterior or Posterior approach; ceramic or metal femoral head articulates with polyethylene cup." },
          { title: "Stand & Walk", description: "Patients are helped to stand and take first steps on post-operative Day 1." },
          { title: "Discharge", description: "Home on Day 3-4 with a walker, home exercise guide, and follow-up plan." }
        ]
      }}
      relatedServices={{
        serviceSlug: "orthopaedics",
        related: [
          { title: "Knee Replacement", href: "/doctor/near-me/treat/orthopaedics/total-knee-replacement-cost" },
          { title: "Fracture Care", href: "/doctor/near-me/treat/orthopaedics/fracture-care-rehabilitation" },
          { title: "Spine Surgery", href: "/doctor/near-me/treat/orthopaedics/spine-surgery-disc-prolapse" }
        ]
      }}
      reviews={{ entityName: "Joint Replacement", entitySlug: "orthopaedics", entityType: "department" }}
    >
      <section>
        <h2>When is Hip Replacement Needed?</h2>
        <p>
          Hip replacement is recommended when pain and stiffness from <strong>Osteoarthritis, Rheumatoid Arthritis, or Avascular Necrosis (AVN)</strong> severely limit daily activities and don't respond to medications, injections, or physiotherapy.
        </p>
        <h3>Implant Options</h3>
        <ul>
          <li><strong>Ceramic-on-Ceramic:</strong> Most durable, scratch-resistant, and ideal for younger, active patients. Minimal wear particles.</li>
          <li><strong>Ceramic-on-Polyethylene:</strong> Excellent longevity, widely used, lower cost. Highly cross-linked polyethylene dramatically reduces wear.</li>
          <li><strong>Metal-on-Polyethylene:</strong> Proven long-term results, economical. Suitable for older, lower-demand patients.</li>
        </ul>
        <h3>Direct Anterior Approach: The Muscle-Sparing Option</h3>
        <p>
          Our surgeons are trained in the <strong>Direct Anterior Approach (DAA)</strong> to hip replacement — accessing the joint from the front without cutting through any major muscles. This results in less post-operative pain, fewer restrictions, faster return to walking, and a lower hip dislocation rate.
        </p>
        <div className="my-10 p-8 bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/10 dark:to-pink-900/10 rounded-[2.5rem] border border-fuchsia-100 dark:border-fuchsia-900 shadow-sm dark:shadow-slate-900/30">
          <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-fuchsia-300 mb-6 tracking-tight">All-Inclusive Care Package</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "FDA-Approved Implants Included",
              "Revision Surgery Network Access",
              "Cashless Insurance for 50+ Plans",
              "0% EMI Financing Available"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-sm dark:shadow-slate-900/30">
                <CheckCircle className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubServiceTemplate>
  );
}
