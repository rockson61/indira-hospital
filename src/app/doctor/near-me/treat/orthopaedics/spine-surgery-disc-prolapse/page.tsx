import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle, ShieldCheck, Activity, IndianRupee, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Spine Surgery for Disc Prolapse (Microdiscectomy) | Indira Hospital",
  description: "Advanced Spine Surgery for Disc Prolapse at Indira Super Speciality Hospital, Vellore. Minimally invasive microdiscectomy for rapid relief from sciatica and back pain.",
  keywords: ["Spine surgery Vellore", "Disc prolapse treatment", "Microdiscectomy cost", "Sciatica surgery hospital", "Neurosurgeon Vellore"]
};

export default function SpineSurgeryDiscProlapsePage() {
  return (
    <SubServiceTemplate
      departmentName="Orthopaedics"
      departmentSlug="orthopaedics"
      title="Spine Surgery: Disc Prolapse"
      eyebrow="Neuro-Spine Excellence"
      description={
        <p>
          Indira Hospital is a center of excellence for <strong>Minimally Invasive Spine Surgery (MISS)</strong>. We specialize in treating disc prolapse (herniated discs) using advanced microdiscectomy techniques that ensure targeted relief with minimal disruption to spinal stability.
        </p>
      }
      quickFacts={[
        { label: "Cost Package", value: "₹95k – ₹1.6L", icon: "IndianRupee" },
        { label: "Duration", value: "60-90 Mins", icon: "Clock" },
        { label: "Stay", value: "2-3 Days", icon: "Activity" },
        { label: "Success Rate", value: "95%+", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "orthopaedics",
        related: [
          { title: "Knee Replacement", href: "/doctor/near-me/treat/orthopaedics/total-knee-replacement-cost" },
          { title: "Hip Replacement Guide", href: "/doctor/near-me/treat/orthopaedics/hip-replacement-surgery-guide" },
          { title: "Stroke Rehabilitation", href: "/doctor/near-me/treat/neurology/stroke-recovery-exercises" }
        ]
      }}
      reviews={{
        entityName: "Spine Care",
        entitySlug: "orthopaedics",
        entityType: "department"
      }}
      timeline={{
        title: "Microdiscectomy Recovery Timeline",
        steps: [
          { title: "Neuro-Mapping", description: "MRI and clinical assessment to identify the compressed nerve root." },
          { title: "Decompression", description: "Minimally invasive removal of the herniated disc fragment." },
          { title: "Mobilization", description: "Walking with support starts within 24 hours of surgery." },
          { title: "Full Recovery", description: "Return to light work in 2 weeks; full activity in 6-8 weeks." }
        ]
      }}
    >
      <section>
        <h2>Advanced Spine Care in Vellore</h2>
        <p>
          A prolapsed or "herniated" disc occurs when the soft inner core of a spinal disc leaks out and presses against nearby nerves. This often leads to debilitating back pain and <strong>sciatica</strong> (radiating leg pain). At Indira Super Speciality Hospital, we offer a range of solutions from specialized physiotherapy to ultra-modern micro-surgical decompression.
        </p>

        <h3>Micro-Surgical Decompression</h3>
        <p>
          Unlike traditional open spine surgery, our <strong>Microdiscectomy</strong> technique uses high-magnification loupes or microscopes. This allows our surgeons to remove the offending disc fragment through a tiny incision, preserving the surrounding muscles and ligaments. The Result: less post-operative pain and a much faster recovery.
        </p>

        <div className="my-10 p-8 md:p-12 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/10 dark:to-indigo-900/10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-indigo-300 mb-6 tracking-tight">Vellore's Trusted Spine Unit</h4>
          <p className="text-lg text-slate-700 dark:text-slate-200 dark:text-slate-300 leading-relaxed mb-8">
            Our spine surgery packages focus on making advanced neuro-surgery accessible and transparent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Endoscopic & Microscopic Options",
              "100% Cashless Insurance Support",
              "Precision Intraoperative Monitoring",
              "Integrated Spine Physiotherapy"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-sm dark:shadow-slate-900/30">
                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2>When is Surgery Recommended?</h2>
        <p>
          We generally recommend spine surgery only after conservative treatments (medication, physical therapy, and injections) have failed to provide relief after 4-6 weeks. However, immediate intervention is necessary if you experience:
        </p>
        <ul>
          <li><strong>Significant Weakness:</strong> Difficulty lifting your foot or "foot drop."</li>
          <li><strong>Bowel/Bladder Issues:</strong> Loss of control or sudden numbness in the saddle area.</li>
          <li><strong>Intolerable Pain:</strong> Pain that is not managed by strong analgesics.</li>
        </ul>

        <h3>Comprehensive Rehabilitation</h3>
        <p>
          Successful spine surgery is followed by structured <strong>Functional Rehabilitation</strong>. Our dedicated therapists guide you through exercises that strengthen your core and protect your spine, ensuring that you don't just get better, but stay better.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
