import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kidney Stone Laser Surgery | Indira Super Speciality Hospital Vellore",
  description: "Advanced Kidney Stone Laser Surgery at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function KidneyStoneLaserSurgeryPage() {
  return (
    <SubServiceTemplate
      title="Kidney Stone Laser Surgery"
      eyebrow="Urology Treatment"
      description={
        <p>
          Advanced kidney stone treatment using state-of-the-art <strong>Holmium Laser 100W</strong> technology. Our urology experts perform RIRS and URSL procedures to ensure complete stone clearance without external cuts, offering 50% lower costs than Chennai.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹50,000 – ₹70,000", icon: "IndianRupee" },
        { label: "Duration", value: "30–60 Minutes", icon: "Clock" },
        { label: "Recovery", value: "1 Day", icon: "Activity" },
        { label: "Success Rate", value: "99%", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "stone-techniques",
            heading: "Kidney Stone Removal Techniques",
            description: "We offer multiple advanced options depending on the size and location of your stones:",
            table: {
              headers: ["Technique", "Stone Size", "Incision", "Recovery"],
              rows: [
                ["Laser Lithotripsy", "< 1.5 cm", "Internal (No Cuts)", "Same Day"],
                ["RIRS", "< 2.0 cm", "Internal (No Cuts)", "1-2 Days"],
                ["PCNL", "> 2.0 cm", "Miniature (5mm)", "2-3 Days"],
                ["ESWL", "< 1.0 cm", "None (Sound Waves)", "Day Care"]
              ],
              caption: "Comparison of surgical and non-surgical stone removal options at Indira Hospital."
            }
          },
          {
            id: "why-laser",
            heading: "Benefits of Laser Surgery (Lithotripsy)",
            bullets: [
              "Precision: Target and blast even the hardest stones into dust",
              "Minimal Pain: Performed through natural urinary passages",
              "Zero Scarring: No external cuts or stitches involved",
              "Faster Discharge: Most patients return home within 24 hours",
              "High Success Rate: Over 98% clearance in a single sitting"
            ]
          }
        ],
        faqs: [
          {
            question: "Is laser stone removal safe for elderly patients?",
            answer: "Yes, because it is minimally invasive and performed under mild anesthesia, it is generally safe for patients with hypertension or diabetes."
          },
          {
            question: "Will the stones come back?",
            answer: "While the procedure clears existing stones, lifestyle and diet play a huge role in prevention. We provide a personalized diet chart to minimize recurrence."
          }
        ]
      }}
      timeline={{
        title: "Your Treatment Journey",
        steps: [
          { title: "Diagnostic Mapping", description: "CT scan or Ultrasound to locate stone precisely." },
          { title: "Admission", description: "Quick paper-less admission on procedure morning." },
          { title: "Laser Procedure", description: "Laser fragmentation of stones (30-45 mins)." },
          { title: "Home Recovery", description: "Discharge within 24 hours with follow-up guide." }
        ]
      }}
      relatedServices={{
        serviceSlug: "urology/kidney-stone-laser-surgery",
        related: [
          { title: "RIRS Procedure", href: "/services/urology/rirs-treatment" },
          { title: "Prostate Treatment", href: "/services/urology/prostate-turp-surgery" }
        ]
      }}
      reviews={{
        entityName: "Kidney Stone Laser Surgery",
        entitySlug: "urology/kidney-stone-laser-surgery"
      }}
    >
      <section>
        <h2>Advanced Laser Kidney Stone Treatment in Vellore</h2>
        <p>
          At Indira Super Speciality Hospital, we utilize the latest <strong>Holmium Laser</strong> technology for highly effective kidney stone removal. Unlike traditional surgery, laser lithotripsy is a walk-in, walk-out procedure that eliminates stones without any external cuts.
        </p>

        <h3>Why Choose Laser Lithotripsy?</h3>
        <p>
          Laser treatment is the gold standard for kidney stones that are too large to pass naturally but small enough for endoscopic removal. The laser fiber is passed through a ureteroscope to reach the stone, where it delivers precise energy to fragment the stone into tiny sand-like particles.
        </p>

        <div className="my-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-3xl border border-purple-100 dark:border-purple-800">
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4 tracking-tight">Vellore's Most Affordable Laser Package</h4>
          <p className="text-slate-700 dark:text-slate-300">
            Our laser packages are designed to be inclusive of medication, hospital stay, and specialist fees. We provide clear pricing with <strong>no hidden costs</strong>.
          </p>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> 0% EMI Available</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> All Insurances Accepted</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> TPA Assistance</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" /> CM Insurance Schemes</li>
          </ul>
        </div>

        <h2>Who Needs This Procedure?</h2>
        <p>
          You may require laser surgery if you experience symptoms like sharp pain in the side (renal colic), blood in urine, or dynamic stones detected during routine screenings. Our specialists will perform a comprehensive evaluation to determine the best approach for your specific case.
        </p>

        <h2>Cost & Booking</h2>
        <p>
          The cost for Kidney Stone Laser Surgery at Indira Hospital starts from <strong>₹50,000</strong>. This depends on the size and number of stones. For an accurate quote and consultation, please book an appointment through our website or call our 24/7 hotline.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
