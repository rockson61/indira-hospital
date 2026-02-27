import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Coronary Angiography (Cath) Procedure Guide | Indira Hospital Vellore",
  description: "Advanced Coronary Angiography at Indira Super Speciality Hospital, Vellore. Precise cardiac imaging to detect and plan treatment for blocked heart arteries.",
  keywords: ["Coronary angiography Vellore", "Cardiac cath lab Vellore", "Angiogram procedure steps", "Heart blockage test", "Interventional cardiologist Vellore"]
};

export default function CoronaryAngiographyGuidePage() {
  return (
    <SubServiceTemplate
      departmentName="Cardiology"
      departmentSlug="cardiology"
      title="Coronary Angiography Guide"
      eyebrow="Cardiology Diagnostics"
      description={
        <p>
          A <strong>Coronary Angiography</strong> (also called a cardiac catheterization) is the gold standard imaging procedure to accurately map the arteries of your heart, identify blockages, and guide treatment. Indira Hospital's advanced Cath Lab is equipped for both diagnostic and interventional procedures.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹15,000 – ₹30,000", icon: "IndianRupee" },
        { label: "Duration", value: "30-60 Mins", icon: "Clock" },
        { label: "Recovery", value: "4-6 Hours", icon: "Activity" },
        { label: "Accuracy", value: "Gold Standard", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology",
        related: [
          { title: "Heart Angioplasty", href: "/doctor/near-me/treat/cardiology/heart-angioplasty-procedure" },
          { title: "Preventive Heart Checkup", href: "/doctor/near-me/treat/cardiology/preventive-heart-checkup" },
          { title: "Pacemaker Implantation", href: "/doctor/near-me/treat/cardiology/pacemaker-implantation-steps" }
        ]
      }}
      reviews={{
        entityName: "Cardiology Care",
        entitySlug: "cardiology",
        entityType: "department"
      }}
      timeline={{
        title: "Angiography Procedure Steps",
        steps: [
          { title: "Preparation", description: "IV line and local anaesthetic applied to the wrist or groin.", duration: "20 Mins" },
          { title: "Catheter Insertion", description: "A thin tube (catheter) is guided through the artery to the heart.", duration: "10 Mins" },
          { title: "Imaging", description: "Contrast dye is injected and X-ray images capture the coronary arteries.", duration: "15-20 Mins" },
          { title: "Recovery", description: "Rest under observation; most patients go home the same day.", duration: "4-6 Hours" }
        ]
      }}
    >
      <section>
        <h2>State-of-the-Art Cath Lab in Vellore</h2>
        <p>
          Indira Super Speciality Hospital's <strong>Catheterization Laboratory (Cath Lab)</strong> is equipped with high-resolution, flat-panel X-ray imaging systems that produce crystal-clear images of the coronary arteries with minimal radiation exposure.
        </p>

        <h3>Why is Angiography Done?</h3>
        <p>
          Your cardiologist may recommend a coronary angiography if you have:
        </p>
        <ul>
          <li><strong>Unstable Angina:</strong> Chest pain that occurs at rest or with minimal exertion.</li>
          <li><strong>Abnormal Stress Test:</strong> ECG or Echo stress tests that suggest reduced blood flow to the heart.</li>
          <li><strong>Post-Heart Attack Evaluation:</strong> To assess the extent and plan revascularization.</li>
          <li><strong>Before Major Surgery:</strong> To clear cardiac fitness for high-risk procedures.</li>
        </ul>

        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10 rounded-[2.5rem] border border-red-100 dark:border-red-900 shadow-sm dark:shadow-slate-900/30">
          <h4 className="text-2xl font-black text-slate-900 dark:text-white dark:text-red-300 mb-6 tracking-tight">Diagnostic + Interventional in One Session</h4>
          <p className="text-lg text-slate-700 dark:text-slate-200 dark:text-slate-300 leading-relaxed mb-8">
            If a significant blockage is found, angioplasty can often be performed in the same session, saving you time and a second procedure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Direct Radial Artery Access (Wrist)",
              "Low-Dose Radiation Protocol",
              "Real-Time 3D Artery Mapping",
              "Cashless Insurance Accepted"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-sm dark:shadow-slate-900/30">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 dark:text-slate-200 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2>Cost & Insurance</h2>
        <p>
          Coronary Angiography at Indira Hospital starts at <strong>₹15,000</strong>. We accept all major government and private insurance schemes. Our billing team assists with pre-authorization to ensure a fully cashless experience.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
