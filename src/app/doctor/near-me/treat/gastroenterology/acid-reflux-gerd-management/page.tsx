import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Acid Reflux (GERD) Management & Treatment | Indira Hospital Vellore",
  description: "Expert management of Acid Reflux (GERD) at Indira Super Speciality Hospital, Vellore. Gastroenterology specialists offering medical and surgical treatment options.",
  keywords: ["GERD treatment Vellore", "Acid reflux hospital", "Heartburn specialist Vellore", "H.pylori GERD", "Gastroenterology Vellore"]
};

export default function AcidRefluxGERDManagementPage() {
  return (
    <SubServiceTemplate
      departmentName="Gastroenterology"
      departmentSlug="gastroenterology"
      title="Acid Reflux (GERD) Management"
      eyebrow="Gastroenterology Care"
      description={
        <p>
          Persistent acid reflux, medically known as <strong>Gastroesophageal Reflux Disease (GERD)</strong>, can cause significant damage to the esophagus over time. Our gastroenterology specialists provide accurate diagnosis and effective, personalized treatment plans.
        </p>
      }
      quickFacts={[
        { label: "Consultation", value: "₹500 – ₹800", icon: "IndianRupee" },
        { label: "Endoscopy", value: "If Required", icon: "Activity" },
        { label: "Success", value: "Excellent (Medical)", icon: "ShieldCheck" },
        { label: "Lifestyle", value: "Key Component", icon: "Star" }
      ]}
      relatedServices={{
        serviceSlug: "gastroenterology",
        related: [
          { title: "Endoscopy Procedure", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
          { title: "H.Pylori Infection Cure", href: "/doctor/near-me/treat/gastroenterology/h-pylori-infection-cure" },
          { title: "Colonoscopy Screening", href: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost" }
        ]
      }}
      reviews={{ entityName: "Gastroenterology", entitySlug: "gastroenterology", entityType: "department" }}
    >
      <section>
        <h2>Understanding GERD</h2>
        <p>
          GERD occurs when the lower esophageal sphincter (LES) — the valve between the esophagus and stomach — weakens or relaxes inappropriately, allowing stomach acid to flow back up. Chronic acid exposure can cause <strong>Esophagitis</strong>, ulcers, and a precancerous condition called <strong>Barrett's Esophagus</strong>.
        </p>
        <h3>Common Signs & Symptoms</h3>
        <ul>
          <li>Persistent heartburn (burning sensation in chest), especially after meals</li>
          <li>Acid regurgitation — sour or bitter taste in the mouth</li>
          <li>Difficulty swallowing (dysphagia) or feeling of a lump in the throat</li>
          <li>Chronic dry cough, hoarseness, or sore throat (atypical GERD)</li>
          <li>Bloating and upper abdominal discomfort</li>
        </ul>
        <h2>Our Treatment Approach</h2>
        <p>
          We take a stepwise, evidence-based approach:
        </p>
        <ul>
          <li><strong>Lifestyle Modifications:</strong> Dietary adjustments, head of bed elevation, and weight management are the foundations.</li>
          <li><strong>Medications (PPIs/H2 Blockers):</strong> Proton pump inhibitors dramatically reduce acid production and allow the esophagus to heal.</li>
          <li><strong>Upper Endoscopy:</strong> To assess the severity of esophagitis and rule out Barrett's or malignancy.</li>
          <li><strong>Anti-Reflux Surgery (Fundoplication):</strong> For patients who prefer to discontinue lifelong medication or have a large hiatal hernia.</li>
        </ul>
        <h2>When to See a Specialist</h2>
        <p>
          Seek immediate care if you experience difficulty swallowing, unexplained weight loss, black stools, or vomiting blood. Schedule a consultation if heartburn occurs more than twice a week and is not controlled with over-the-counter antacids.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
