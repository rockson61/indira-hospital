import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Total Knee Replacement Cost | Indira Super Speciality Hospital Vellore",
  description: "Advanced Total Knee Replacement Cost at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function TotalKneeReplacementCostPage() {
  return (
    <SubServiceTemplate
      title="Total Knee Replacement Cost"
      eyebrow="Orthopaedics Treatment"
      description={
        <p>
          Indira Hospital is a premier center for <strong>Joint Replacement Surgery</strong> in Vellore. We use high-quality, international-standard implants and computer-assisted techniques to restore mobility and eliminate chronic knee pain.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹1.5L – ₹2.2L", icon: "IndianRupee" },
        { label: "Duration", value: "90–120 Minutes", icon: "Clock" },
        { label: "Recovery", value: "3–5 Days", icon: "Activity" },
        { label: "Success Rate", value: "98%+", icon: "ShieldCheck" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "implant-types",
            heading: "Choosing the Right Implant",
            description: "We offer high-performance implants from world leaders like Stryker, Zimmer Biomet, and Smith & Nephew:",
            table: {
              headers: ["Implant Category", "Material", "Durability", "Ideal For"],
              rows: [
                ["Cobalt-Chrome", "Metal Alloy", "15-20 Years", "Active Seniors"],
                ["Oxidized Zirconium", "Ceramic-Metal", "25+ Years", "Younger Patients"],
                ["Titanium", "Biocompatible Metal", "20 Years", "Light Activity"]
              ],
              caption: "High-flex knee implant options available at Indira Orthopaedic Hospital."
            }
          },
          {
            id: "when-to-surgery",
            heading: "Signs You Need Knee Replacement",
            bullets: [
              "Severe pain that limits daily activities (walking, climbing stairs)",
              "Moderate or severe knee pain while resting, day or night",
              "Chronic knee inflammation and swelling that doesn't improve with rest",
              "Knee deformity — a bowing in or out of your knee",
              "Knee stiffness that prevents you from bending or straightening your knee"
            ]
          }
        ],
        faqs: [
          {
            question: "How long does a knee replacement last?",
            answer: "With modern materials and expert surgical placement, over 90% of knee replacements last 20-25 years."
          },
          {
            question: "When can I walk after surgery?",
            answer: "At Indira Hospital, our 'Fast-Track' protocol allows most patients to stand and take a few steps with help within 24 hours of surgery."
          }
        ]
      }}
      timeline={{
        title: "Your Mobility Plan",
        steps: [
          { title: "Pre-op Mapping", description: "X-rays and medical fitness clearance." },
          { title: "The Procedure", description: "Precision joint replacement (60-90 mins)." },
          { title: "Physiotherapy", description: "In-hospital rehabilitation starts Day 1." },
          { title: "Home Care", description: "Guided exercises for full mobility (4 weeks)." }
        ]
      }}
      relatedServices={{
        serviceSlug: "orthopaedics/total-knee-replacement-cost",
        related: [
          { title: "Hip Replacement", href: "/services/orthopaedics/hip-replacement-surgery-guide" },
          { title: "Spine Care", href: "/services/orthopaedics/spine-surgery-disc-prolapse" }
        ]
      }}
      reviews={{
        entityName: "Total Knee Replacement",
        entitySlug: "orthopaedics/total-knee-replacement-cost"
      }}
    >
      <section>
        <h2>Advanced Joint Replacement Center in Vellore</h2>
        <p>
          Indira Super Speciality Hospital is a destination for <strong>High-Flexion Total Knee Replacement (TKR)</strong>. Our orthopaedic unit is led by senior surgeons who specialize in minimally invasive techniques that minimize tissue trauma and maximize post-operative range of motion.
        </p>

        <h3>Computer-Assisted Alignment</h3>
        <p>
          Precision is the key to a long-lasting knee replacement. We use advanced alignment tools to ensure the implant is perfectly positioned according to your unique anatomy. This reduces wear and tear and provides a natural 'feel' to the new joint.
        </p>

        <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800">
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4 tracking-tight">Rapid Recovery Rehabilitation</h4>
          <p className="text-slate-700 dark:text-slate-300">
            Our goal is to get you back on your feet quickly. Our dedicated physiotherapy team works with you from <strong>Day 1</strong> post-surgery.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center gap-2 font-medium text-blue-800 dark:text-blue-200"><CheckCircle className="w-4 h-4" /> Zero-Infection Modular OT</li>
            <li className="flex items-center gap-2 font-medium text-blue-800 dark:text-blue-200"><CheckCircle className="w-4 h-4" /> Advanced Pain Management</li>
            <li className="flex items-center gap-2 font-medium text-blue-800 dark:text-blue-200"><CheckCircle className="w-4 h-4" /> Home Physiotherapy Support</li>
            <li className="flex items-center gap-2 font-medium text-blue-800 dark:text-blue-200"><CheckCircle className="w-4 h-4" /> FDA Approved Implants</li>
          </ul>
        </div>

        <h2>Cost & Booking</h2>
        <p>
          Total Knee Replacement packages start at <strong>₹1,50,000</strong> per knee (all-inclusive). We offer special packages for bilateral (both knees) replacements. We accept all major insurances and offer 0% interest EMI options. Book your consultation today to walk pain-free again.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
