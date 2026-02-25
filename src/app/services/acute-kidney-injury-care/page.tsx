// RockSEO Auto-Generated Page Template
// Topic: Acute Kidney Injury Care
// Cluster: nephrology
// Hub: /services/nephrology
// Generated: 2026-02-25T05:28:19.404Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Acute Kidney Injury Care | Indira Hospital Vellore",
  description: "Learn about Acute Kidney Injury Care at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function AcuteKidneyInjuryCarePage() {
  return (
    <SubServiceTemplate
      title="Acute Kidney Injury Care"
      eyebrow="Nephrology"
      description={
        <span>
          <strong>Acute Kidney Injury Care is a highly specialized treatment provided by our expert medical team.</strong> This advanced procedure offers exceptional success rates with transparent pricing.
        </span>
      }
      departmentName="Nephrology"
      departmentSlug="nephrology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹2000", icon: "IndianRupee" },
        { label: "Procedure Time", value: "4 hours", icon: "Clock" },
        { label: "Recovery", value: "Same day", icon: "Activity" },
        { label: "Success Rate", value: "95%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Your structured clinical pathway for Acute Kidney Injury Care",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Acute Kidney Injury Care",
        entitySlug: "nephrology/acute-kidney-injury-care"
      }}
    >
        {/* Procedural Unique Main Content (Information Gain) */}

        <h2>Understanding Acute Kidney Injury Care</h2>
        <p>Acute Kidney Injury Care is a cutting-edge medical procedure designed to address kidney stones and high creatinine. At Indira Hospital, our distinguished specialists utilize precision diagnostics to ensure maximum safety and rapid recovery. By choosing our dedicated department, patients benefit from world-class healthcare tailored to their precise clinical needs.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>If you are experiencing warning signs such as kidney stones, conservative therapies may not be sufficient. Acute Kidney Injury Care is recommended when lifestyle modifications fail to provide relief, and diagnostic imaging confirms the necessity of a cutting-edge intervention. Early consultation can prevent complications and lead to rapid recovery.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The Acute Kidney Injury Care pathway begins with comprehensive pre-operative diagnostics to map out the anatomy. In the operating suite, our team leverages precision diagnostics for exact execution. The minimally invasive nature of modern techniques means the procedure generally concludes within 4 hours, drastically reducing trauma.</p>
        
        <h3>Why Choose Us?</h3>
        <ul>
            <li><strong>Expert Specialists:</strong> Decades of combined experience in complex surgeries.</li>
            <li><strong>Advanced Infrastructure:</strong> Fully equipped ICUs and precision diagnostics.</li>
            <li><strong>Dedicated Care:</strong> 24/7 post-operative support to ensure rapid recovery.</li>
        </ul>
    
    </SubServiceTemplate>
  );
}
