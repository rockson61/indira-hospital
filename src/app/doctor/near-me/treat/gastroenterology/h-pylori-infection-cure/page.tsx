import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "H. Pylori Infection: Diagnosis & Complete Cure | Indira Hospital Vellore",
  description: "Complete eradication treatment for H. Pylori infection at Indira Super Speciality Hospital, Vellore. Expert gastroenterologist diagnosis and evidence-based triple/quadruple therapy.",
  keywords: ["H pylori treatment Vellore", "Helicobacter pylori eradication", "Stomach ulcer specialist", "Gastritis hospital Vellore", "Triple therapy H pylori"]
};

export default function HPyloriInfectionCurePage() {
  return (
    <SubServiceTemplate
      departmentName="Gastroenterology"
      departmentSlug="gastroenterology"
      title="H. Pylori Infection Cure"
      eyebrow="Gastroenterology Specialists"
      description={
        <p>
          <strong>Helicobacter pylori (H. Pylori)</strong> is a common bacterial infection of the stomach affecting nearly 60% of Indians. It is the most common cause of peptic ulcers and a major risk factor for stomach cancer. Complete eradication is achievable with the right antibiotic regimen.
        </p>
      }
      quickFacts={[
        { label: "Prevalence", value: "~60% in India", icon: "Activity" },
        { label: "Test", value: "Breath / Biopsy", icon: "ShieldCheck" },
        { label: "Cure Rate", value: "90%+ (1st Line)", icon: "Star" },
        { label: "Duration", value: "10-14 Days Rx", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "gastroenterology",
        related: [
          { title: "GERD Management", href: "/doctor/near-me/treat/gastroenterology/acid-reflux-gerd-management" },
          { title: "Endoscopy Procedure", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
          { title: "Colonoscopy Screening", href: "/doctor/near-me/treat/gastroenterology/colonoscopy-screening-cost" }
        ]
      }}
      reviews={{ entityName: "Gastroenterology", entitySlug: "gastroenterology", entityType: "department" }}
    >
      <section>
        <h2>What is H. Pylori and Why Does it Matter?</h2>
        <p>
          H. Pylori is a spiral-shaped bacterium that colonizes the stomach lining. It produces enzymes that damage the protective mucus layer, allowing stomach acid to erode the lining and create <strong>gastric and duodenal ulcers</strong>. Chronic infection is also classified as a Group 1 carcinogen for stomach cancer.
        </p>
        <h3>How It's Diagnosed at Indira Hospital</h3>
        <ul>
          <li><strong>Urea Breath Test (UBT):</strong> A non-invasive, highly accurate test. You drink a capsule and breathe into a bag — no needles or scopes required.</li>
          <li><strong>Endoscopic Biopsy (CLO Test / Histology):</strong> During an upper GI endoscopy, a tissue sample is taken from the stomach wall for direct testing.</li>
          <li><strong>Stool Antigen Test:</strong> A simple, convenient test using a stool sample, also used to confirm eradication.</li>
        </ul>
        <h2>Eradication Treatment: "Triple" & "Quadruple" Therapy</h2>
        <p>
          Our gastroenterologists prescribe evidence-based regimens tailored to local antibiotic resistance patterns:
        </p>
        <ul>
          <li><strong>Standard Triple Therapy (10-14 days):</strong> PPI + Clarithromycin + Amoxicillin.</li>
          <li><strong>Bismuth Quadruple Therapy:</strong> PPI + Bismuth + Tetracycline + Metronidazole. Used for treatment-naive or failed first-line cases.</li>
        </ul>
        <p>
          Eradication is confirmed 4 weeks after completing treatment using a repeat Urea Breath Test or stool antigen test.
        </p>
        <h2>Don't Ignore Stomach Symptoms</h2>
        <p>
          Burning pain in the upper abdomen (especially when fasting), nausea, bloating, and frequent burping are classic symptoms. If any of these persist, schedule a gastroenterology consultation today.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
