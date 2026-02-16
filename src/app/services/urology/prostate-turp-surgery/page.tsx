// RockSEO Auto-Generated Page Template
// Topic: Prostate TURP Surgery
// Cluster: urology
// Hub: /services/urology
// Generated: 2026-02-16T11:40:07.705Z

import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import EntityReviews from "@/components/trust/EntityReviews";

export const metadata: Metadata = {
  title: "Prostate TURP Surgery | Indira Super Speciality Hospital Vellore",
  description: "TODO: Add 150-160 character description with primary keyword in first 60 characters."
};

export default function ProstateTurpSurgeryPage() {
  return (
    <main className="min-h-screen">
      <SectionContainer>
        {/* ROCKSEO STRUCTURE - DO NOT CHANGE ORDER */}
        
        {/* 1. Definition/Answer First (Featured Snippet Target) */}
        <section className="py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Prostate TURP Surgery at Indira Super Speciality Hospital
          </h1>
          
          {/* 40-word featured snippet answer */}
          <p className="text-xl text-foreground/80 mb-8">
            <strong>TODO: Answer the query directly in 40 words.</strong>{" "}
            Include primary entity (Dr. P. Shankar), cost range (₹X,XXX–₹X,XXX), 
            and key differentiator (e.g., "50% lower cost than Chennai").
          </p>
        </section>
        
        {/* 2. Key Facts Table (Entity Graph) */}
        <section className="py-8 bg-muted rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div><strong>Cost:</strong> ₹X,XXX – ₹X,XXX</div>
            <div><strong>Duration:</strong> X minutes/hours</div>
            <div><strong>Recovery:</strong> X days</div>
            <div><strong>Success Rate:</strong> X%</div>
          </div>
        </section>
        
        {/* 3. Main Content (Information Gain) */}
        <section className="py-8 prose prose-lg max-w-none">
          <h2>What is Prostate TURP Surgery?</h2>
          <p>TODO: Comprehensive explanation with entity references.</p>
          
          <h2>Who Needs This Treatment?</h2>
          <p>TODO: Patient criteria with specific symptoms.</p>
          
          <h2>The Procedure at Indira Super Speciality Hospital</h2>
          <p>TODO: Step-by-step with durations and what to expect.</p>
          
          <h2>Cost & Payment Options</h2>
          <p>
            <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Super Speciality Hospital, Vellore.
            This is 50% lower than Chennai/Bangalore.
            0% EMI available via Bajaj Finserv, HDFC, ICICI.
          </p>
        </section>
        
        {/* 4. Related Services (Hub Link) */}
        <section className="py-8 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Related Services</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/services/urology" className="text-teal-600 hover:underline">
                ← Back to urology main page
              </Link>
            </li>
            {/* TODO: Add 2-3 sibling service links */}
          </ul>
        </section>
        
        {/* 5. CTA Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Book Your Consultation</h2>
          <p className="mb-6">
            Dr. P. Shankar • 30+ years experience • 20,000+ patients
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700"
          >
            Schedule Appointment
          </Link>
          <p className="mt-4 text-muted-foreground">
            WhatsApp: +91-7010650063
          </p>
        </section>

        {/* 6. Reviews Section */}
        <EntityReviews 
          entityType="service" 
          entityName="Prostate TURP Surgery" 
          entitySlug="urology/prostate-turp-surgery"
          title="Patient Experiences with Prostate TURP Surgery"
          description="Read verified experiences from patients who underwent Prostate TURP Surgery at Indira Super Speciality Hospital."
        />
      </SectionContainer>
    </main>
  );
}
