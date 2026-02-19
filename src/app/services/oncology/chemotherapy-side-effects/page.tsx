import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Chemotherapy: Managing Side Effects Guide | Indira Hospital Vellore",
  description: "Expert chemotherapy administration and side effect management at Indira Super Speciality Hospital, Vellore. Comprehensive oncology care to keep patients comfortable during cancer treatment.",
  keywords: ["Chemotherapy Vellore", "Cancer treatment hospital", "Chemo side effects management", "Medical oncologist Vellore", "Oncology centre Vellore"]
};

export default function ChemotherapySideEffectsPage() {
  return (
    <SubServiceTemplate
      departmentName="Oncology"
      departmentSlug="oncology"
      title="Chemotherapy & Side Effects"
      eyebrow="Medical Oncology"
      description={
        <p>
          Indira Hospital's <strong>Medical Oncology Department</strong> provides evidence-based chemotherapy protocols administered in a dedicated oncology day care unit. Our team of oncologists and oncology nurses are expert in managing side effects to keep you as comfortable and active as possible throughout treatment.
        </p>
      }
      quickFacts={[
        { label: "Unit", value: "Oncology Day Care", icon: "Activity" },
        { label: "Protocols", value: "NCCN-Based", icon: "ShieldCheck" },
        { label: "Support", value: "Dietitian + Social Work", icon: "Star" },
        { label: "Anti-nausea", value: "Modern Regimens", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "oncology",
        related: [
          { title: "Surgical Oncology", href: "/services/oncology/surgical-oncology-overview" },
          { title: "Palliative Care", href: "/services/oncology/palliative-care-services" },
          { title: "Breast Cancer Screening", href: "/services/oncology/breast-cancer-screening-guide" }
        ]
      }}
      reviews={{ entityName: "Oncology Care", entitySlug: "oncology", entityType: "department" }}
    >
      <section>
        <h2>Understanding Chemotherapy</h2>
        <p>
          Chemotherapy uses powerful drugs to kill rapidly dividing cancer cells throughout the body. It can be used to <strong>cure cancer</strong>, control its spread, or relieve symptoms (palliative intent). It is often combined with surgery and radiation for maximum effect (multimodal therapy).
        </p>
        <h3>Common Side Effects & How We Manage Them</h3>
        <ul>
          <li><strong>Nausea & Vomiting:</strong> Highly controllable with modern 5-HT3 inhibitors and NK1 antagonists administered before each cycle. Most patients experience minimal or no nausea.</li>
          <li><strong>Hair Loss (Alopecia):</strong> Occurs with some (not all) chemo drugs. We offer scalp cooling systems (cold cap therapy) that can reduce hair loss for eligible patients.</li>
          <li><strong>Fatigue:</strong> The most common complaint. We provide energy management strategies, nutritional support, and graded exercise programs.</li>
          <li><strong>Low Blood Counts (Myelosuppression):</strong> Regular blood tests before each cycle ensure safe treatment. Growth factors (G-CSF) are used to support white cell counts.</li>
          <li><strong>Peripheral Neuropathy:</strong> Tingling or numbness in hands/feet with certain drugs. Dose modification and supplements like B6 are used to minimize this.</li>
          <li><strong>Mouth Sores (Mucositis):</strong> Preventable with careful oral hygiene protocol and special mouthwashes.</li>
        </ul>
        <h2>Our Supportive Oncology Team</h2>
        <p>
          We believe that <strong>supportive care</strong> — managing the side effects of cancer and its treatment — is as important as the treatment itself. Our comprehensive team includes:
        </p>
        <ul>
          <li>Dedicated Oncology Nurses trained in cannulation and chemo drug administration</li>
          <li>Oncology Dietitian for nutrition plans during treatment</li>
          <li>Oncology Social Worker for psychosocial support and navigating financial assistance</li>
          <li>Pain Management Specialist for complex cancer pain</li>
        </ul>
      </section>
    </SubServiceTemplate>
  );
}
