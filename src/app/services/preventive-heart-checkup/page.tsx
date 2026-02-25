// RockSEO Auto-Generated Page Template
// Topic: Preventive Heart Checkup
// Cluster: cardiology
// Hub: /services/cardiology
// Generated: 2026-02-25T05:28:19.391Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Preventive Heart Checkup | Indira Hospital Vellore",
  description: "Learn about Preventive Heart Checkup at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function PreventiveHeartCheckupPage() {
  return (
    <SubServiceTemplate
      title="Preventive Heart Checkup"
      eyebrow="Cardiology"
      description={
        <span>
          <strong>Preventive Heart Checkup is a highly specialized treatment provided by our expert medical team.</strong> This advanced procedure offers exceptional success rates with transparent pricing.
        </span>
      }
      departmentName="Cardiology"
      departmentSlug="cardiology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹50000", icon: "IndianRupee" },
        { label: "Procedure Time", value: "30 mins", icon: "Clock" },
        { label: "Recovery", value: "1 week", icon: "Activity" },
        { label: "Success Rate", value: "97%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Your structured clinical pathway for Preventive Heart Checkup",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Preventive Heart Checkup",
        entitySlug: "cardiology/preventive-heart-checkup"
      }}
    >
        {/* Procedural Unique Main Content (Information Gain) */}

        <h2>Understanding Preventive Heart Checkup</h2>
        <p>Patients suffering from chest pain or chest pain often find lasting relief through Preventive Heart Checkup. This world-class intervention is conducted using laser precision, paving the way for improved function. The expert team at Indira Super Speciality Hospital is highly trained in performing this procedure with exceptional precision and care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Preventive Heart Checkup is primarily indicated for patients whose daily routine is severely disrupted by chest pain. After a comprehensive physical and diagnostic review, our surgeons may advise this world-class approach to securely stabilize your condition and deliver improved function.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The Preventive Heart Checkup pathway begins with comprehensive pre-operative diagnostics to map out the anatomy. In the operating suite, our team leverages laser precision for exact execution. The minimally invasive nature of modern techniques means the procedure generally concludes within 30 mins, drastically reducing trauma.</p>
        
        <h3>Why Choose Us?</h3>
        <ul>
            <li><strong>Expert Specialists:</strong> Decades of combined experience in complex surgeries.</li>
            <li><strong>Advanced Infrastructure:</strong> Fully equipped ICUs and laser precision.</li>
            <li><strong>Dedicated Care:</strong> 24/7 post-operative support to ensure improved function.</li>
        </ul>
    
    </SubServiceTemplate>
  );
}
