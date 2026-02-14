// RockSEO Auto-Generated Page Template
// Topic: Dental Veneers Types
// Cluster: cosmetic-dentistry
// Hub: /services/cosmetic-dentistry
// Generated: 2026-02-14T15:50:57.223Z

import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import { getHospitalSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Dental Veneers in Vellore | Ceramic vs Composite Cost | Indira Dental",
  description: "Transform your smile with Dental Veneers at Indira Dental Clinic. Choose between E-Max Ceramic (Life-long) or Composite Veneers. Cost from ₹3,500."
};

export default async function DentalVeneersTypesPage() {
  let hospitalSettings: any = {};
  try { hospitalSettings = await getHospitalSettings(); } catch { }

  return (
    <main className="min-h-screen">
      <SectionContainer>
        {/* ROCKSEO STRUCTURE - DO NOT CHANGE ORDER */}

        {/* 1. Definition/Answer First (Featured Snippet Target) */}
        <section className="py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Dental Veneers in Vellore: Design Your Celebrity Smile
          </h1>

          {/* 40-word featured snippet answer */}
          <p className="text-xl text-foreground/80 mb-8 border-l-4 border-teal-500 pl-6 py-2 bg-slate-50 dark:bg-slate-900/50">
            <strong>Dental Veneers</strong> are ultra-thin, custom-made shells of tooth-colored material designed to cover the front surface of teeth to improve your appearance.
            At Indira Dental Clinic, we offer <strong>E-max Ceramic Veneers</strong> (Permanent) and <strong>Composite Resin Veneers</strong> (Affordable) to fix gaps, chips, and stains.
          </p>
        </section>

        {/* 2. Key Facts Table (Entity Graph) */}
        <section className="py-8 bg-muted rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Facts: Veneers</h2>
          <div className="grid md:grid-cols-2 gap-4 text-lg">
            <div><strong>Composite Cost:</strong> ₹3,500 – ₹5,000 / tooth</div>
            <div><strong>Ceramic Cost:</strong> ₹10,000 – ₹15,000 / tooth</div>
            <div><strong>Time Required:</strong> 2 Visits (Ceramic) / 1 Visit (Composite)</div>
            <div><strong>Lifespan:</strong> 10-15 Years (Ceramic)</div>
            <div><strong>Anesthesia:</strong> Minimal to None</div>
            <div><strong>Stain Resistant:</strong> Yes (Ceramic)</div>
          </div>
        </section>

        {/* 3. Main Content (Information Gain) */}
        <section className="py-8 prose prose-lg max-w-none dark:prose-invert">
          <h2>Types of Veneers We Offer</h2>

          <h3>1. E-Max Ceramic Veneers (Porcelain)</h3>
          <p>
            These are the gold standard. They are crafted in a lab to match your natural teeth perfectly. They are highly resistant to coffee/tea stains and look incredibly natural due to their translucency.
          </p>

          <h3>2. Composite Veneers (Direct Bonding)</h3>
          <p>
            These are sculpted directly on your teeth by Dr. Rockson in a single visit. They are more affordable but may stain over time and last 3-5 years.
          </p>

          <h2>Who Needs Veneers?</h2>
          <p>You are a good candidate if you have:</p>
          <ul>
            <li><strong>Discolored Teeth:</strong> That don't respond to whitening.</li>
            <li><strong>Chipped or Broken Teeth:</strong> Restoring the shape.</li>
            <li><strong>Gaps (Diastema):</strong> Closing spaces between teeth.</li>
            <li><strong>Misaligned Teeth:</strong> For minor corrections ("Instant Orthodontics").</li>
          </ul>

          <h2>Cost of Veneers in Vellore</h2>
          <p>
            <strong>Cost: ₹3,500 – ₹15,000</strong> per tooth.
          </p>
          <p>
            Composite veneers are budget-friendly (₹3.5k - ₹5k), while E-max Ceramic veneers (₹10k - ₹15k) are a premium investment for a permanent "Hollywood Smile".
          </p>
        </section>

        {/* 4. Related Services (Hub Link) */}
        <section className="py-8 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Related Services</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/services/cosmetic-dentistry" className="text-teal-600 hover:underline">
                ← Back to Cosmetic Dentistry
              </Link>
            </li>
            <li>
              <Link href="/services/cosmetic-dentistry/teeth-whitening-guide" className="text-teal-600 hover:underline">
                → Teeth Whitening (Alternative option)
              </Link>
            </li>
          </ul>
        </section>

        {/* 5. CTA Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Smile Makeover</h2>
          <p className="mb-6">
            Consult with our Cosmetic Specialist to choose the right veneers for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Book Consultation
            </Link>
            <a
              href={`https://wa.me/91${hospitalSettings.whatsapp || '7010650063'}?text=I%20want%20veneers`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/50 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
