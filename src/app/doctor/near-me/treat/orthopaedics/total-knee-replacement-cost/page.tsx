import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle, ShieldCheck, Activity, IndianRupee, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Total Knee Replacement (TKR) Surgery Cost & Guide | Indira Hospital",
  description: "Advanced Total Knee Replacement (TKR) surgery at Indira Super Speciality Hospital, Vellore. High-flex implants, computer-assisted surgery, and affordable cost.",
  keywords: ["Knee replacement Vellore", "TKR surgery cost", "Orthopaedic surgeon Vellore", "Joint replacement hospital", "Knee surgery recovery"]
};

export default function TotalKneeReplacementCostPage() {
  return (
    <SubServiceTemplate
      departmentName="Orthopaedics"
      departmentSlug="orthopaedics"
      title="Total Knee Replacement (TKR)"
      eyebrow="Orthopaedic Excellence"
      description={
        <p>
          Indira Hospital is a premier center for <strong>Joint Replacement Surgery</strong> in Vellore. We use high-quality, international-standard implants and computer-assisted techniques to restore mobility and eliminate chronic knee pain.
        </p>
      }
      quickFacts={[
        { label: "Cost Package", value: "₹1.5L – ₹2.3L", icon: "IndianRupee" },
        { label: "Duration", value: "60-90 Mins", icon: "Clock" },
        { label: "Stay", value: "3-4 Days", icon: "Activity" },
        { label: "Success Rate", value: "99%+", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "implant-types",
            heading: "Choosing the Right Implant",
            description: "We utilize gold-standard implants from world leaders such as Stryker, Zimmer Biomet, and Smith & Nephew, ensuring longevity and natural movement:",
            table: {
              headers: ["Implant Type", "Durability", "Flexibility", "Ideal Profile"],
              rows: [
                ["Oxidized Zirconium", "25+ Years", "High Flexion", "Younger/Active"],
                ["Ceramic-on-Poly", "20-25 Years", "Standard", "Seniors"],
                ["Cobalt-Chrome", "15-20 Years", "Medium", "Cost-Effective"]
              ],
              caption: "FDA-approved knee implant options available at Indira Hospital."
            }
          },
          {
            id: "benefits",
            heading: "Why Choose Computer-Assisted TKR?",
            bullets: [
              "Precision Alignment: Digital mapping ensures perfect placement of the new joint.",
              "Minimal Blood Loss: Advanced surgical techniques minimize tissue trauma.",
              "Pain Management: Multi-modal analgesia for a comfortable post-op experience.",
              "Rapid Mobilization: Our 'Fast-Track' protocol gets you standing within 24 hours.",
              "Long-Term Results: Optimized alignment significantly reduces implant wear."
            ]
          }
        ],
        faqs: [
          {
            question: "When can I resume driving or stairs after TKR?",
            answer: "Most patients can navigate stairs with support within 4-5 days and resume driving an automatic vehicle within 4-6 weeks, pending surgeon approval."
          },
          {
            question: "Is there an age limit for knee replacement?",
            answer: "No. Age is not a barrier; surgical fitness is. We have successfully performed joint replacements on patients in their 80s, enabling them to enjoy a pain-free life."
          }
        ]
      }}
      timeline={{
        title: "Knee Replacement Recovery Roadmap",
        steps: [
          { title: "Precision Planning", description: "X-ray mapping and cardiologist clearance for surgical fitness." },
          { title: "The Procedure", description: "Minimal-access total knee replacement using high-flex implants." },
          { title: "In-Hospital Rehab", description: "Intensive physiotherapy starting Day 1 to restore range of motion." },
          { title: "Home Recovery", description: "Guided home exercise program for full independence in 4-6 weeks." }
        ]
      }}
      relatedServices={{
        serviceSlug: "orthopaedics",
        related: [
          { title: "Hip Replacement Guide", href: "/doctor/near-me/treat/orthopaedics/hip-replacement-surgery-guide" },
          { title: "Spine Surgery Options", href: "/doctor/near-me/treat/orthopaedics/spine-surgery-disc-prolapse" },
          { title: "Arthroscopy Services", href: "/doctor/near-me/treat/orthopaedics" }
        ]
      }}
      reviews={{
        entityName: "Joint Replacement",
        entitySlug: "orthopaedics",
        entityType: "department"
      }}
    >
      <section>
        <h2>Vellore's Destination for Orthopaedic Excellence</h2>
        <p>
          At Indira Super Speciality Hospital, we combine clinical expertise with advanced technology to deliver superior outcomes in <strong>Total Knee Replacement (TKR)</strong>. Our multidisciplinary team ensures a seamless journey from preoperative planning to post-surgical rehabilitation.
        </p>

        <h3>Minimally Invasive Techniques</h3>
        <p>
          Our surgeons utilize "sub-vastus" or "mid-vastus" approaches that don't cut through the main quad muscle. This results in significantly less pain, better early control of the leg, and a much faster return to independent walking compared to traditional methods.
        </p>

        <div className="my-10 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-[2.5rem] border border-fuchsia-100 dark:border-blue-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-blue-300 mb-6 tracking-tight">Rapid Recovery & Support</h4>
          <p className="text-lg text-slate-700 dark:text-slate-200 dark:text-slate-300 leading-relaxed mb-8">
            Our surgical packages are comprehensive, covering the implant, hospital stay, and initial physiotherapy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "0% EMI Options - Easy Finance",
              "Cashless Claims for 50+ Insurers",
              "Zero-Infection Modular OTs",
              "Home Physiotherapy Assistance"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-sm dark:shadow-slate-900/30">
                <CheckCircle className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2>When Should You Consider Surgery?</h2>
        <p>
          If chronic knee pain makes it difficult to walk even short distances, interferes with your sleep, or stops you from performing simple daily tasks, it may be time for a joint replacement. Modern TKR is one of the most successful surgeries in all of medicine, with a satisfaction rate exceeding 95%.
        </p>

        <h3>Expert Physiotherapy & Care</h3>
        <p>
          We believe that surgery is only 50% of the success story. The other 50% comes from expert <strong>Post-Operative Rehabilitation</strong>. Our dedicated physio team works one-on-one with you to ensure you regain full range of motion and return to an active lifestyle as quickly as possible.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
