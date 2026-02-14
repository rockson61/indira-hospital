// RockSEO Auto-Generated Page Template
// Topic: Teeth Whitening Guide
// Cluster: cosmetic-dentistry
// Hub: /services/cosmetic-dentistry
// Generated: 2026-02-14T15:50:57.223Z

import { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import Link from "next/link";
import { getHospitalSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Teeth Whitening in Vellore | Laser Cleaning Cost | Indira Dental",
  description: "Professional Teeth Whitening in Vellore at Indira Dental Clinic. Get brighter smile in 45 minutes with Laser Whitening. Cost starts from ₹8,000."
};

export default async function TeethWhiteningGuidePage() {
  let hospitalSettings: any = {};
  try { hospitalSettings = await getHospitalSettings(); } catch { }

  return (
    <main className="min-h-screen">
      <SectionContainer>
        {/* ROCKSEO STRUCTURE - DO NOT CHANGE ORDER */}

        {/* 1. Definition/Answer First (Featured Snippet Target) */}
        <section className="py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Teeth Whitening in Vellore: Instant Bright Smile
          </h1>

          {/* 40-word featured snippet answer */}
          <p className="text-xl text-foreground/80 mb-8 border-l-4 border-teal-500 pl-6 py-2 bg-slate-50 dark:bg-slate-900/50">
            <strong>Teeth Whitening</strong> (Bleaching) is a cosmetic procedure that removes stains and discoloration to make teeth 3-5 shades lighter.
            At Indira Dental Clinic, we use <strong>Philips Zoom Whitening</strong> and <strong>Laser Whitening</strong> for instant results in just <strong>45 minutes</strong> with zero sensitivity.
          </p>
        </section>

        {/* 2. Key Facts Table (Entity Graph) */}
        <section className="py-8 bg-muted rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Facts: Whitening</h2>
          <div className="grid md:grid-cols-2 gap-4 text-lg">
            <div><strong>Cost (Zoom Pro):</strong> ₹15,000 – ₹20,000</div>
            <div><strong>Cost (Laser):</strong> ₹8,000 – ₹12,000</div>
            <div><strong>Time Required:</strong> 45 – 60 Minutes</div>
            <div><strong>Result:</strong> 3 – 5 Shades Lighter</div>
            <div><strong>Safety:</strong> 100% Safe for Enamel</div>
            <div><strong>Effect Duration:</strong> 1 – 2 Years</div>
          </div>
        </section>

        {/* 3. Main Content (Information Gain) */}
        <section className="py-8 prose prose-lg max-w-none dark:prose-invert">
          <h2>Why Choose Professional Whitening?</h2>
          <p>
            Professional whitening is safer and more effective than home kits. We use a protective barrier for your gums to ensure no irritation.
          </p>
          <ul>
            <li><strong>Instant Results:</strong> Walk out with a brighter smile in one hour.</li>
            <li><strong>Safety:</strong> Performed by specialists to protect your gums and enamel.</li>
            <li><strong>Long Lasting:</strong> With proper care, results last up to 2 years.</li>
          </ul>

          <h2>Treatment Options</h2>
          <h3>1. Office Bleaching (Laser/Zoom)</h3>
          <p>
            The fastest way to whiten teeth. We apply a high-concentration gel and activate it with a special light/laser.
          </p>

          <h3>2. Home Bleaching Kits</h3>
          <p>
            We provide custom-made trays and gel for you to use at home for 2 weeks. Good for maintenance.
          </p>

          <h2>Cost of Teeth Whitening in Vellore</h2>
          <p>
            <strong>Cost: ₹8,000 – ₹20,000</strong>.
          </p>
          <p>
            Basic Laser Whitening starts at ₹8,000. Premium Philips Zoom Whitening is around ₹15,000 - ₹20,000 due to the imported kit cost.
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
              <Link href="/services/cosmetic-dentistry/dental-veneers-types" className="text-teal-600 hover:underline">
                → Dental Veneers (For permanent white smile)
              </Link>
            </li>
          </ul>
        </section>

        {/* 5. CTA Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get a Movie Star Smile</h2>
          <p className="mb-6">
            Book your appointment today for a sparkling smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Book Whitening Session
            </Link>
            <a
              href={`https://wa.me/91${hospitalSettings.whatsapp || '7010650063'}?text=I%20want%20teeth%20whitening`}
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
