import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "Colonoscopy Screening Procedure & Cost | Indira Hospital Vellore",
  description: "Advanced Colonoscopy screening at Indira Super Speciality Hospital, Vellore. Expert gastroenterologists offering painless scope procedures for colon cancer detection.",
  keywords: ["Colonoscopy cost Vellore", "Colon cancer screening", "Rectal bleeding evaluation", "Gastroenterologist Vellore", "Colonoscopy procedure steps"]
};

export default function ColonoscopyScreeningCostPage() {
  return (
    <SubServiceTemplate
      departmentName="Gastroenterology"
      departmentSlug="gastroenterology"
      title="Colonoscopy Screening"
      eyebrow="Gastroenterology Diagnostics"
      description={
        <p>
          Colonoscopy is the most effective tool for screening and preventing colon cancer. At Indira Super Speciality Hospital, our <strong>expert gastroenterologists</strong> perform high-definition colonoscopy with minimal discomfort, using the latest video-endoscopy systems.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹3,500 – ₹7,000", icon: "IndianRupee" },
        { label: "Duration", value: "20-45 Mins", icon: "Clock" },
        { label: "Sedation", value: "Conscious / Full", icon: "ShieldCheck" },
        { label: "Report", value: "Same Day", icon: "Star" }
      ]}
      timeline={{
        title: "Colonoscopy Procedure Steps",
        steps: [
          { title: "Bowel Prep", description: "Special laxative solution taken the day before to cleanse the colon.", duration: "Day Before" },
          { title: "Sedation", description: "Intravenous sedation is administered for comfort (conscious or deep).", duration: "10 Mins" },
          { title: "Scope Insertion", description: "Flexible HD camera is guided through the entire colon and terminal ileum.", duration: "20-30 Mins" },
          { title: "Recovery", description: "Patient is monitored until sedation wears off, then discharged.", duration: "30-60 Mins" }
        ]
      }}
      relatedServices={{
        serviceSlug: "gastroenterology",
        related: [
          { title: "Endoscopy Procedure", href: "/doctor/near-me/treat/gastroenterology/endoscopy-procedure-guide" },
          { title: "GERD Management", href: "/doctor/near-me/treat/gastroenterology/acid-reflux-gerd-management" },
          { title: "Pancreatitis Treatment", href: "/doctor/near-me/treat/gastroenterology/pancreatitis-treatment-steps" }
        ]
      }}
      reviews={{ entityName: "Gastroenterology", entitySlug: "gastroenterology", entityType: "department" }}
    >
      <section>
        <h2>Why Colonoscopy is Essential</h2>
        <p>
          Colorectal cancer develops from small, benign <strong>polyps</strong> inside the colon. A colonoscopy allows the gastroenterologist to identify and remove these polyps in the same session — effectively preventing cancer before it develops (polypectomy).
        </p>
        <h3>Who Should Get Screened?</h3>
        <ul>
          <li>Adults aged 45 and above (routine screening)</li>
          <li>Anyone with rectal bleeding or blood in the stool</li>
          <li>Patients with a family history of colorectal cancer</li>
          <li>Those with persistent changes in bowel habits (diarrhea/constipation)</li>
          <li>Unexplained weight loss or chronic anemia</li>
        </ul>
        <h2>Pain-Free Colonoscopy</h2>
        <p>
          We offer <strong>Propofol-based conscious sedation</strong> to ensure you are completely comfortable throughout the procedure. Most patients have no memory of the procedure and return to normal activity the next day. Therapeutic interventions like polypectomy and foreign body removal can be done simultaneously.
        </p>
        <h2>Cost & Booking</h2>
        <p>
          Diagnostic colonoscopy costs between <strong>₹3,500 and ₹7,000</strong> depending on anaesthesia requirements and whether therapeutic interventions are performed. We offer health insurance support and can provide reports and images digitally.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
