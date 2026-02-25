import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kidney Stone Laser Surgery (Lithotripsy) | Indira Hospital Vellore",
  description: "Advanced Kidney Stone Laser Surgery (RIRS/URSL) at Indira Super Speciality Hospital, Vellore. Minimally invasive, 100W Holmium Laser, and affordable cost.",
  keywords: ["Kidney stone laser surgery Vellore", "Laser lithotripsy cost", "RIRS surgery Vellore", "Urologist in Vellore", "Holmium laser kidney stone"]
};

export default function KidneyStoneLaserSurgeryPage() {
  return (
    <SubServiceTemplate
      departmentName="Urology"
      departmentSlug="urology"
      title="Kidney Stone Laser Surgery"
      eyebrow="Urology Excellence"
      description={
        <p>
          State-of-the-art <strong>100W Holmium Laser</strong> technology for precise, painless kidney stone removal. Our urology department specializes in RIRS and URSL, offering zero-incision solutions and faster recovery.
        </p>
      }
      quickFacts={[
        { label: "Cost Package", value: "₹50k – ₹75k", icon: "IndianRupee" },
        { label: "Duration", value: "30-60 Mins", icon: "Clock" },
        { label: "Hospital Stay", value: "24 Hours", icon: "ShieldCheck" },
        { label: "Success Rate", value: "99%+", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "stone-techniques",
            heading: "Which Technique is Right for You?",
            description: "We offer several advanced options tailored to stone size and location:",
            table: {
              headers: ["Technique", "Stone Size", "Method", "Recovery"],
              rows: [
                ["Laser Lithotripsy", "< 1.5 cm", "Endoscopic (Internal)", "Same Day"],
                ["RIRS (Advanced)", "< 2.0 cm", "Flexible Endoscopy", "1-2 Days"],
                ["Mini-PCNL", "> 2.0 cm", "Keyhole (5mm)", "2-3 Days"],
                ["ESWL", "< 1.0 cm", "Non-Surgical", "Day Care"]
              ],
              caption: "Full range of urological interventions at Indira Hospital."
            }
          },
          {
            id: "why-laser",
            heading: "Benefits of Advanced Laser Therapy",
            bullets: [
              "Precision Fragmentation: Blasts even the hardest staghorn stones into dust.",
              "Internal Procedure: Performed via natural urinary passages—no external cuts.",
              "Minimal Discomfort: Significantly lower post-op pain compared to open surgery.",
              "Rapid Return: Most patients return to work within 48-72 hours.",
              "Comprehensive Clear: High success rate in a single-sitting procedure."
            ]
          }
        ],
        faqs: [
          {
            question: "Is laser stone removal safe for patients with diabetes?",
            answer: "Yes, it is highly recommended for diabetic and elderly patients because it is minimally invasive and carries a lower risk of infection than open surgery."
          },
          {
            question: "What is the follow-up care like?",
            answer: "We provide a personalized stone-prevention diet plan. Depending on the procedure, a temporary stent may be placed and removed 7-10 days later in a 5-minute OPD procedure."
          }
        ]
      }}
      timeline={{
        title: "Kidney Stone Treatment Roadmap",
        steps: [
          { title: "Precision Mapping", description: "CT KUB or Ultrasound to determine stone size, density, and location." },
          { title: "Prep & Admission", description: "Standard pre-op tests and quick paperless admission." },
          { title: "Laser Fragmentation", description: "Stone retrieval or laser dusting using Holmium Laser technology." },
          { title: "Quick Recovery", description: "Observation for 24 hours with specialist follow-up guide." }
        ]
      }}
      relatedServices={{
        serviceSlug: "urology",
        related: [
          { title: "Prostate (TURP) Surgery", href: "/doctor/near-me/treat/urology/prostate-turp-surgery" },
          { title: "Urinary Tract Infection", href: "/doctor/near-me/treat/urology/urinary-tract-infection-treatment" },
          { title: "Male Infertility Causes", href: "/doctor/near-me/treat/urology/male-infertility-causes" }
        ]
      }}
      reviews={{
        entityName: "Urology Care",
        entitySlug: "urology",
        entityType: "department"
      }}
    >
      <section>
        <h2>Advanced Urology Center in Vellore</h2>
        <p>
          Indira Super Speciality Hospital is a regional leader in minimally invasive urology. We use the <strong>Holmium Laser</strong>, which is the gold standard for treating stones in the kidney, ureter, and bladder. This technology allows our surgeons to reach stones deep inside the kidney without a single external incision.
        </p>

        <h3>RIRS (Retrograde Intrarenal Surgery)</h3>
        <p>
          For stones up to 2cm, we recommend <strong>RIRS</strong>. Using a flexible fiber-optic endoscope, our urologists navigate the urinary tract to reach the stone directly. The laser then "dusts" the stone into particles small enough to be flushed out naturally with urine.
        </p>

        <div className="my-10 p-8 md:p-12 bg-gradient-to-br from-teal-50 to-teal-50 dark:from-teal-900/10 dark:to-teal-900/10 rounded-[2.5rem] border border-teal-100 dark:border-teal-700 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h4 className="text-2xl font-black text-slate-900 dark:text-teal-300 mb-6 tracking-tight">Transparent Pricing & Insurance</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            We provide all-inclusive surgical packages that cover hospital stay, OT charges, and initial medication. No hidden shocks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "0% EMI - Bajai Finserv & Credit Cards",
              "Cashless TPAs & Private Insurance",
              "Govt. Employee Healthcare Schemes",
              "Comprehensive Pre-Op Pack Included"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2>When Should You Consult a Urologist?</h2>
        <p>
          Persistent side pain, blood in the urine, or difficulty urinating are clear signs that you should see a specialist. Early intervention with laser therapy can prevent severe kidney damage and avoid the need for more invasive open surgeries.
        </p>

        <h3>Expert Urological Surgeons</h3>
        <p>
          Our urology team is led by senior consultants with decades of experience in complex endo-urological procedures. We combine clinical expertise with compassionate care to ensure the best possible experience for our patients.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
