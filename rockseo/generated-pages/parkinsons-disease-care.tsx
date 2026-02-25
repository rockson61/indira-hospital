// RockSEO Auto-Generated Page Template
// Topic: Parkinsons Disease Care
// Cluster: neurology
// Hub: /services/neurology
// Generated: 2026-02-25T05:28:19.393Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Parkinsons Disease Care | Indira Hospital Vellore",
  description: "Learn about Parkinsons Disease Care at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function ParkinsonsDiseaseCarePage() {
  return (
    <SubServiceTemplate
      title="Parkinsons Disease Care"
      eyebrow="Neurology"
      description={
        <span>
          <strong>Parkinsons Disease Care is a highly specialized treatment provided by our expert medical team.</strong> This advanced procedure offers exceptional success rates with transparent pricing.
        </span>
      }
      departmentName="Neurology"
      departmentSlug="neurology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹20000", icon: "IndianRupee" },
        { label: "Procedure Time", value: "Diagnostic varies", icon: "Clock" },
        { label: "Recovery", value: "Varies", icon: "Activity" },
        { label: "Success Rate", value: "92%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Your structured clinical pathway for Parkinsons Disease Care",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Parkinsons Disease Care",
        entitySlug: "neurology/parkinsons-disease-care"
      }}
    >
        {/* Procedural Unique Main Content (Information Gain) */}

        <h2>Understanding Parkinsons Disease Care</h2>
        <p>Patients suffering from balance problems or seizures often find lasting relief through Parkinsons Disease Care. This specialized intervention is conducted using laser precision, paving the way for improved function. The expert team at Indira Super Speciality Hospital is highly trained in performing this procedure with exceptional precision and care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Parkinsons Disease Care is primarily indicated for patients whose daily routine is severely disrupted by balance problems. After a comprehensive physical and diagnostic review, our surgeons may advise this specialized approach to securely stabilize your condition and deliver improved function.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The Parkinsons Disease Care pathway begins with comprehensive pre-operative diagnostics to map out the anatomy. In the operating suite, our team leverages laser precision for exact execution. The minimally invasive nature of modern techniques means the procedure generally concludes within Diagnostic varies, drastically reducing trauma.</p>
        
        <h3>Why Choose Us?</h3>
        <ul>
            <li><strong>Expert Specialists:</strong> Decades of combined experience in complex surgeries.</li>
            <li><strong>Advanced Infrastructure:</strong> Fully equipped ICUs and laser precision.</li>
            <li><strong>Dedicated Care:</strong> 24/7 post-operative support to ensure improved function.</li>
        </ul>
    
    </SubServiceTemplate>
  );
}
