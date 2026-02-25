import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "After Gallbladder Removal: Recovery & Diet | Indira Hospital Vellore",
  description: "Expert post-operative guidance after Laparoscopic Cholecystectomy at Indira Super Speciality Hospital, Vellore. Diet tips, recovery timeline, and when to take activity after gallbladder surgery.",
  keywords: ["Gallbladder removal recovery Vellore", "Post cholecystectomy diet", "After gallbladder surgery", "Laparoscopic cholecystectomy recovery", "General surgery Vellore"]
};

export default function GallbladderRemovalRecoveryPage() {
  return (
    <SubServiceTemplate
      departmentName="General Surgery"
      departmentSlug="general-surgery"
      title="Gallbladder Removal Recovery"
      eyebrow="General Surgery Recovery"
      description={
        <p>
          Recovering well after <strong>Laparoscopic Cholecystectomy (Gallbladder Removal)</strong> is straightforward with the right guidance. Most patients are home within 24 hours of surgery and back to normal life within 1-2 weeks. Our surgical team provides a comprehensive discharge plan for smooth, comfortable recovery.
        </p>
      }
      quickFacts={[
        { label: "Hospital Stay", value: "1 Day", icon: "Activity" },
        { label: "Light Work", value: "3-5 Days", icon: "Clock" },
        { label: "Full Recovery", value: "1-2 Weeks", icon: "ShieldCheck" },
        { label: "Diet Normal", value: "4-6 Weeks", icon: "Star" }
      ]}
      timeline={{
        title: "Recovery After Gallbladder Surgery",
        steps: [
          { title: "Surgery Day", description: "Surgery under GA. Discharge evening/next morning. Light liquid diet.", duration: "Day 0-1" },
          { title: "Days 2-5", description: "Soft diet (khichdi, dal, curd). Walk around the house. Minimal lifting.", duration: "Days 2-5" },
          { title: "Week 1-2", description: "Return to desk work. Light exercise (short walks). Avoid heavy meals.", duration: "Weeks 1-2" },
          { title: "Week 3-6", description: "Gradually resume normal foods. Return to full activity, gym, and driving.", duration: "Weeks 3-6" }
        ]
      }}
      relatedServices={{
        serviceSlug: "general-surgery",
        related: [
          { title: "Gallbladder Stone Surgery", href: "/services/general-surgery/gallbladder-stone-surgery" },
          { title: "Appendix Surgery", href: "/services/general-surgery/appendix-surgery-steps" },
          { title: "Laparoscopic Hernia", href: "/services/general-surgery/laparoscopic-hernia-repair" }
        ]
      }}
      reviews={{ entityName: "General Surgery", entitySlug: "general-surgery", entityType: "department" }}
    >
      <section>
        <h2>The First 24 Hours: What to Expect</h2>
        <p>
          After laparoscopic cholecystectomy, most patients experience:
        </p>
        <ul>
          <li><strong>Shoulder Tip Pain:</strong> Caused by residual gas (CO₂) used in the abdomen irritating the diaphragm. Resolves in 24-48 hours. Walking helps.</li>
          <li><strong>Mild Abdominal Bloating:</strong> Improves with movement and passing gas.</li>
          <li><strong>Soreness at Port Sites:</strong> Minimal with keyhole surgery. Managed with oral painkillers.</li>
          <li><strong>Nausea:</strong> Short-lived and controlled with anti-nausea medication given at discharge.</li>
        </ul>
        <h2>Eating After Gallbladder Removal</h2>
        <p>
          The gallbladder stores bile for fat digestion. Without it, bile drips directly from the liver into the intestine continuously. Most people adapt well, but some dietary adjustments in the first month help:
        </p>
        <ul>
          <li><strong>Days 1-7:</strong> Light, low-fat foods (dal, curd, rice, idli, boiled vegetables). Small, frequent meals instead of large ones.</li>
          <li><strong>Weeks 2-4:</strong> Gradually introduce normal home cooking. Avoid deep-fried, very oily, or very spicy foods temporarily.</li>
          <li><strong>Month 2+:</strong> The large majority of patients can return to a completely normal, unrestricted diet.</li>
        </ul>
        <h3>Loose Motions After Surgery: When to Worry?</h3>
        <p>
          Up to 20% of patients experience temporarily looser stools after cholecystectomy as the intestine adjusts to continuous bile exposure. This typically resolves within 4-8 weeks with a low-fat diet and resolves permanently in most patients. If persistent, your surgeon may prescribe cholestyramine or probiotics.
        </p>
        <h2>When to Contact Your Surgeon</h2>
        <p>
          Contact us immediately if you develop high fever (&gt;38.5°C), severe abdominal pain not relieved by painkillers, yellowing of skin/eyes (jaundice), or persistent vomiting after surgery.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
