// RockSEO Auto-Generated Page Template
// Topic: Pediatric Cardiology Care
// Cluster: cardiology
// Hub: /services/cardiology
// Generated: 2026-02-25T05:28:19.393Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Pediatric Cardiology Care | Indira Hospital Vellore",
  description: "Learn about Pediatric Cardiology Care at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function PediatricCardiologyCarePage() {
  return (
    <SubServiceTemplate
      title="Pediatric Cardiology Care"
      eyebrow="Cardiology"
      description={
        <span>
          <strong>Pediatric Cardiology Care is a highly specialized treatment provided by our expert medical team.</strong> This advanced procedure offers exceptional success rates with transparent pricing.
        </span>
      }
      departmentName="Cardiology"
      departmentSlug="cardiology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹15000", icon: "IndianRupee" },
        { label: "Procedure Time", value: "1-2 hours", icon: "Clock" },
        { label: "Recovery", value: "1 week", icon: "Activity" },
        { label: "Success Rate", value: "98%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Your structured clinical pathway for Pediatric Cardiology Care",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Pediatric Cardiology Care",
        entitySlug: "cardiology/pediatric-cardiology-care"
      }}
    >
        {/* Procedural Unique Main Content (Information Gain) */}

        <h2>Understanding Pediatric Cardiology Care</h2>
        <p>Pediatric Cardiology Care is a state-of-the-art medical procedure designed to address irregular heartbeat and high blood pressure. At Indira Hospital, our distinguished specialists utilize laser precision to ensure maximum safety and rapid recovery. By choosing our dedicated department, patients benefit from world-class healthcare tailored to their precise clinical needs.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>If you are experiencing warning signs such as irregular heartbeat, conservative therapies may not be sufficient. Pediatric Cardiology Care is recommended when lifestyle modifications fail to provide relief, and diagnostic imaging confirms the necessity of a state-of-the-art intervention. Early consultation can prevent complications and lead to rapid recovery.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The Pediatric Cardiology Care pathway begins with comprehensive pre-operative diagnostics to map out the anatomy. In the operating suite, our team leverages laser precision for exact execution. The minimally invasive nature of modern techniques means the procedure generally concludes within 1-2 hours, drastically reducing trauma.</p>
        
        <h3>Why Choose Us?</h3>
        <ul>
            <li><strong>Expert Specialists:</strong> Decades of combined experience in complex surgeries.</li>
            <li><strong>Advanced Infrastructure:</strong> Fully equipped ICUs and laser precision.</li>
            <li><strong>Dedicated Care:</strong> 24/7 post-operative support to ensure rapid recovery.</li>
        </ul>
    
    </SubServiceTemplate>
  );
}
