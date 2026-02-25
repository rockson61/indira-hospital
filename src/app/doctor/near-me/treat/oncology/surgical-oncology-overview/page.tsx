import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Surgical Oncology: Cancer Surgery Overview | Indira Hospital Vellore",
  description: "Expert Surgical Oncology at Indira Super Speciality Hospital, Vellore. Cancer surgery specialists performing curative, diagnostic, and reconstructive oncological procedures.",
  keywords: ["Surgical oncology Vellore", "Cancer surgery hospital", "Oncologist Vellore", "Tumour resection Vellore", "Cancer specialist hospital"]
};

export default function SurgicalOncologyOverviewPage() {
  return (
    <SubServiceTemplate
      departmentName="Oncology"
      departmentSlug="oncology"
      title="Surgical Oncology Overview"
      eyebrow="Oncology Surgery"
      description={
        <p>
          Surgery remains the cornerstone of curative treatment for many solid tumors. Indira Hospital's <strong>Surgical Oncology</strong> team specializes in precise, tumor-free margin resections while preserving function and quality of life — using the latest minimally invasive oncological techniques.
        </p>
      }
      quickFacts={[
        { label: "Speciality", value: "Multi-Organ", icon: "Activity" },
        { label: "Approach", value: "Minimally Invasive", icon: "ShieldCheck" },
        { label: "MDT", value: "Tumour Board", icon: "Star" },
        { label: "Cancer Types", value: "10+ Managed", icon: "Clock" }
      ]}
      relatedServices={{
        serviceSlug: "oncology",
        related: [
          { title: "Breast Cancer Screening", href: "/doctor/near-me/treat/oncology/breast-cancer-screening-guide" },
          { title: "Chemotherapy Guide", href: "/doctor/near-me/treat/oncology/chemotherapy-side-effects" },
          { title: "Palliative Care", href: "/doctor/near-me/treat/oncology/palliative-care-services" }
        ]
      }}
      reviews={{ entityName: "Oncology Care", entitySlug: "oncology", entityType: "department" }}
    >
      <section>
        <h2>Multidisciplinary Cancer Care</h2>
        <p>
          Every cancer patient at Indira Hospital is discussed at our weekly <strong>Multidisciplinary Tumour Board</strong> — a meeting of surgical, medical, and radiation oncologists, radiologists, and pathologists. This ensures your treatment plan is based on a consensus of expert opinions, not just one doctor's perspective.
        </p>
        <h3>Cancer Types Managed</h3>
        <ul>
          <li><strong>Breast Cancer:</strong> Lumpectomy, mastectomy, sentinel node biopsy, onco-reduction, and reconstruction.</li>
          <li><strong>Gastrointestinal (GI) Cancers:</strong> Colon, rectal, gastric, esophageal, liver, and pancreatic cancer resections.</li>
          <li><strong>Head & Neck Cancers:</strong> Thyroid, oral, laryngeal, and salivary gland tumour excision with reconstruction.</li>
          <li><strong>Urological Cancers:</strong> Radical nephrectomy (kidney), cystectomy, prostatectomy.</li>
          <li><strong>Soft Tissue Sarcomas:</strong> Wide local excision with flap reconstruction.</li>
        </ul>
        <h3>Minimally Invasive Oncological Surgery</h3>
        <p>
          Where oncologically safe, we prefer laparoscopic (keyhole) approaches for colon, gastric, and liver surgeries. Benefits include less blood loss, faster recovery, and earlier return to chemotherapy if needed. Our laparoscopic oncology success rates are comparable to open surgery with established safety profiles.
        </p>
        <h2>Post-Surgical Pathology & Margin Assessment</h2>
        <p>
          All resected specimens are processed by our on-site pathology department with <strong>intraoperative frozen section</strong> capability. This allows the surgeon to check if the cancer has been completely removed while you are still in the operating theatre, maximizing the chance of curative resection in a single operation.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
