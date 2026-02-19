import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Preventive Heart Checkup Packages | Indira Hospital Vellore",
  description: "Comprehensive preventive cardiac health checkup packages at Indira Super Speciality Hospital, Vellore. ECG, Echo, Lipid Profile & specialist consultation at one stop.",
  keywords: ["Preventive heart checkup Vellore", "Cardiac health screening", "ECG Echo checkup cost", "Heart checkup package", "Cardiologist consultation Vellore"]
};

export default function PreventiveHeartCheckupPage() {
  return (
    <SubServiceTemplate
      departmentName="Cardiology"
      departmentSlug="cardiology"
      title="Preventive Heart Checkup"
      eyebrow="Preventive Cardiology"
      description={
        <p>
          Don't wait for a cardiac event to assess your heart health. Indira Hospital's <strong>Preventive Heart Checkup</strong> packages are designed to detect risk factors early, allowing you to take action before problems develop.
        </p>
      }
      quickFacts={[
        { label: "Basic Package", value: "₹1,500+", icon: "IndianRupee" },
        { label: "Duration", value: "2-3 Hours", icon: "Clock" },
        { label: "Tests Included", value: "10+ Parameters", icon: "Activity" },
        { label: "Report", value: "Same Day", icon: "Star" }
      ]}
      marketingContent={{
        sections: [
          {
            id: "package-contents",
            heading: "What's Included in Our Packages",
            description: "Our comprehensive cardiac packages cover the key parameters that matter:",
            table: {
              headers: ["Test", "Basic", "Advanced"],
              rows: [
                ["12-Lead ECG", "✓", "✓"],
                ["2D Echocardiography", "—", "✓"],
                ["Lipid Profile (Cholesterol)", "✓", "✓"],
                ["Blood Glucose (HbA1c)", "✓", "✓"],
                ["Treadmill Test (TMT)", "—", "✓"],
                ["Cardiologist Consultation", "✓", "✓"],
              ],
              caption: "Compare our preventive heart checkup packages."
            }
          }
        ],
        faqs: [
          {
            question: "How often should I get a heart checkup?",
            answer: "Once yearly is recommended for everyone above 40. For those with diabetes, hypertension, family history of heart disease, or who smoke, a checkup every 6 months is advisable."
          }
        ]
      }}
      relatedServices={{
        serviceSlug: "cardiology",
        related: [
          { title: "Coronary Angiography", href: "/services/cardiology/coronary-angiography-guide" },
          { title: "Heart Attack Warning Signs", href: "/services/cardiology/heart-attack-warning-signs" },
          { title: "Heart Angioplasty", href: "/services/cardiology/heart-angioplasty-procedure" }
        ]
      }}
      reviews={{ entityName: "Cardiology Care", entitySlug: "cardiology", entityType: "department" }}
    >
      <section>
        <h2>Why Preventive Cardiology Matters</h2>
        <p>
          Heart disease is the leading cause of death in India. The alarming rise in <strong>premature heart attacks</strong> (in people aged 30-50) makes early screening a non-negotiable health priority — not just for the elderly.
        </p>
        <h3>Key Risk Factors We Screen For</h3>
        <ul>
          <li><strong>Hypertension (High BP):</strong> The "silent killer" damages arteries invisible to the eye.</li>
          <li><strong>Dyslipidemia:</strong> High LDL and low HDL cholesterol builds plaque in coronary arteries.</li>
          <li><strong>Pre-Diabetes & Diabetes:</strong> Damages blood vessels and accelerates atherosclerosis.</li>
          <li><strong>Obesity & Sedentary Lifestyle:</strong> Contribute significantly to cardiovascular risk.</li>
          <li><strong>Family History:</strong> A first-degree relative with heart disease increases your risk substantially.</li>
        </ul>
        <h2>Book Your Heart Checkup Today</h2>
        <p>
          Our packages are available on <strong>walk-in basis</strong> with all tests done in-house. Cardiologist consultation is included. Reports are ready the same day, allowing you to discuss findings and next steps immediately. Packages start at just <strong>₹1,500</strong>.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
