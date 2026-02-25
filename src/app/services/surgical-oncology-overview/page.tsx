// RockSEO Auto-Generated Page Template
// Topic: Surgical Oncology Overview
// Cluster: oncology
// Hub: /services/oncology
// Generated: 2026-02-25T05:28:19.400Z

import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate";

export const metadata: Metadata = {
  title: "Surgical Oncology Overview | Indira Hospital Vellore",
  description: "Learn about Surgical Oncology Overview at Indira Super Speciality Hospital. Expert care by senior doctors with affordable cost, premium facilities, and 0% EMIs available."
};

export default function SurgicalOncologyOverviewPage() {
  return (
    <SubServiceTemplate
      title="Surgical Oncology Overview"
      eyebrow="Oncology"
      description={
        <span>
          <strong>Surgical Oncology Overview is a highly specialized treatment provided by our expert medical team.</strong> This advanced procedure offers exceptional success rates with transparent pricing.
        </span>
      }
      departmentName="Oncology"
      departmentSlug="oncology"
      quickFacts={[
        { label: "Cost Estimate", value: "₹60000", icon: "IndianRupee" },
        { label: "Procedure Time", value: "3 hours", icon: "Clock" },
        { label: "Recovery", value: "Ongoing", icon: "Activity" },
        { label: "Success Rate", value: "90%", icon: "Star" }
      ]}
      timeline={{
        title: "Treatment Process",
        description: "Your structured clinical pathway for Surgical Oncology Overview",
        steps: [
          { title: "Consultation & Diagnostics", description: "Comprehensive evaluation and digital diagnostics." },
          { title: "Procedure", description: "Minimally invasive treatment using advanced technology." },
          { title: "Recovery & Follow-up", description: "Post-operative care and dedicated monitoring." }
        ]
      }}
      reviews={{
        entityType: "service",
        entityName: "Surgical Oncology Overview",
        entitySlug: "oncology/surgical-oncology-overview"
      }}
    >
        {/* Procedural Unique Main Content (Information Gain) */}

        <h2>Understanding Surgical Oncology Overview</h2>
        <p>Patients suffering from sudden weight loss or abnormal scans often find lasting relief through Surgical Oncology Overview. This comprehensive intervention is conducted using laser precision, paving the way for improved function. The expert team at Indira Super Speciality Hospital is highly trained in performing this procedure with exceptional precision and care.</p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>Surgical Oncology Overview is primarily indicated for patients whose daily routine is severely disrupted by sudden weight loss. After a comprehensive physical and diagnostic review, our surgeons may advise this comprehensive approach to securely stabilize your condition and deliver improved function.</p>
        
        <h2>The Procedure at Indira Hospital</h2>
        <p>The Surgical Oncology Overview pathway begins with comprehensive pre-operative diagnostics to map out the anatomy. In the operating suite, our team leverages laser precision for exact execution. The minimally invasive nature of modern techniques means the procedure generally concludes within 3 hours, drastically reducing trauma.</p>
        
        <h3>Why Choose Us?</h3>
        <ul>
            <li><strong>Expert Specialists:</strong> Decades of combined experience in complex surgeries.</li>
            <li><strong>Advanced Infrastructure:</strong> Fully equipped ICUs and laser precision.</li>
            <li><strong>Dedicated Care:</strong> 24/7 post-operative support to ensure improved function.</li>
        </ul>
    
    </SubServiceTemplate>
  );
}
