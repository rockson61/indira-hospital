import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Heart Attack Warning Signs & Emergency Care | Indira Hospital Vellore",
  description: "Know the critical warning signs of a heart attack. Indira Super Speciality Hospital Vellore offers 24/7 emergency cardiac care with a state-of-the-art Cath Lab.",
  keywords: ["Heart attack symptoms", "Cardiac emergency Vellore", "Heart attack signs India", "24/7 heart hospital Vellore", "Chest pain emergency"]
};

export default function HeartAttackWarningSignsPage() {
  return (
    <SubServiceTemplate
      departmentName="Cardiology"
      departmentSlug="cardiology"
      title="Heart Attack Warning Signs"
      eyebrow="Cardiac Emergency Care"
      description={
        <p>
          Recognizing a heart attack early can save a life. Indira Super Speciality Hospital provides <strong>24/7 Emergency Cardiac Care</strong> with a dedicated Cath Lab team ready to perform life-saving angioplasty within 90 minutes of arrival.
        </p>
      }
      quickFacts={[
        { label: "Emergency", value: "24/7 Cath Lab", icon: "Activity" },
        { label: "Response", value: "Under 90 Mins", icon: "Clock" },
        { label: "Survival", value: "Early = Higher", icon: "ShieldCheck" },
        { label: "Helpline", value: "Call Now", icon: "Phone" }
      ]}
      relatedServices={{
        serviceSlug: "cardiology",
        related: [
          { title: "Heart Angioplasty", href: "/doctor/near-me/treat/cardiology/heart-angioplasty-procedure" },
          { title: "Coronary Angiography", href: "/doctor/near-me/treat/cardiology/coronary-angiography-guide" },
          { title: "Preventive Heart Checkup", href: "/doctor/near-me/treat/cardiology/preventive-heart-checkup" }
        ]
      }}
      reviews={{
        entityName: "Cardiac Emergency Care",
        entitySlug: "cardiology",
        entityType: "department"
      }}
    >
      <section>
        <h2>The Critical Warning Signs of a Heart Attack</h2>
        <p>
          A <strong>Myocardial Infarction (Heart Attack)</strong> occurs when blood flow to a section of the heart muscle is severely blocked, causing cells to begin dying. Every minute counts. Knowing the signs and acting fast is the single most important thing you can do.
        </p>

        <div className="my-10 p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/10 rounded-[2.5rem] border-2 border-red-200 dark:border-red-800 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl font-black text-red-700 dark:text-red-300 tracking-tight">Recognize These Symptoms Immediately</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Crushing chest pressure, tightness or pain",
              "Pain spreading to shoulder, arm, neck or jaw",
              "Sudden cold sweat and pallor",
              "Shortness of breath with minimal or no exertion",
              "Nausea, dizziness or light-headedness",
              "Feeling of impending doom or intense anxiety"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-red-100 dark:border-red-900 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-red-700 dark:text-red-300 font-black text-lg">
            If you experience any of these — Call 108 / Rush to Indira Hospital immediately. Do NOT drive yourself.
          </p>
        </div>

        <h3>Women and Silent Heart Attacks</h3>
        <p>
          Women often experience "atypical" symptoms such as unusual fatigue, indigestion-like discomfort, back pain or nausea — without the classic crushing chest pain. These "silent" presentations are commonly misdiagnosed. If in doubt, always seek emergency evaluation.
        </p>

        <h2>Indira Hospital's Emergency Response</h2>
        <p>
          The moment a heart attack patient arrives at Indira Hospital, our protocol activates a streamlined response:
        </p>
        <ul>
          <li><strong>Immediate ECG:</strong> Results reviewed within minutes to confirm STEMI (major blockage).</li>
          <li><strong>Cath Lab Activation:</strong> Team is assembled and the lab is prepared simultaneously.</li>
          <li><strong>Primary Angioplasty:</strong> Balloon inflation to open the blocked artery — targeted within 90 minutes of hospital arrival.</li>
        </ul>

        <h2>Prevention is Better than Cure</h2>
        <p>
          Our cardiology department offers comprehensive <strong>Preventive Heart Checkup</strong> packages to identify your risk profile before a cardiac event occurs. Book a consultation today to assess your cholesterol, blood pressure, ECG, and stress test.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
