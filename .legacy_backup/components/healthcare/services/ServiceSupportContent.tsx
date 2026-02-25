'use client'

import Link from 'next/link'
import { SectionContainer } from '@/components/ui/section-container'
import { PriceComparisonTable } from '@/components/location/PriceComparisonTable'

interface ServiceSupportContentProps {
  serviceName: string
  serviceSlug: string
  cityName: string
  locationName: string
  clinicName?: string
  showPriceComparison?: boolean
}

const PHONE_NUMBER = '+917010650063'

export function ServiceSupportContent({
  serviceName,
  serviceSlug,
  cityName,
  locationName,
  clinicName = 'Indira Dental Clinic',
  showPriceComparison = true,
}: ServiceSupportContentProps) {
  const normalizedSlug = serviceSlug.replace(/\//g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
  const sectionIds = {
    contents: `toc-${normalizedSlug}`,
    what: `what-is-${normalizedSlug}`,
    when: `when-needed-${normalizedSlug}`,
    procedure: `procedure-${normalizedSlug}`,
    benefits: `benefits-${normalizedSlug}`,
    cost: `cost-${normalizedSlug}`,
    beforeAfter: `before-after-${normalizedSlug}`,
    why: `why-choose-${normalizedSlug}`,
    faqs: `faqs-${normalizedSlug}`,
    book: `book-${normalizedSlug}`,
  }

  const procedureSteps = [
    {
      title: 'Consultation & 3D Digital Scan (30 minutes)',
      description: `Dr. Rockson Samuel evaluates your oral health using CBCT imaging and intraoral scanning. You receive a written ${serviceName.toLowerCase()} treatment plan with cost breakdown within 24 hours.`,
    },
    {
      title: 'Digital Treatment Planning',
      description: `Our team uses 3D simulation software to design your ${serviceName.toLowerCase()} outcome. You preview the expected result before treatment begins—no surprises.`,
    },
    {
      title: 'Clinical Procedure (Duration varies by case)',
      description: `Dr. Rockson Samuel performs ${serviceName.toLowerCase()} using local anaesthesia and optional IV sedation. Digital guidance ensures 0.1mm precision placement.`,
    },
    {
      title: 'Recovery & WhatsApp Follow-up (24–72 hours)',
      description: `You receive a personalized diet chart, medication schedule, and direct WhatsApp access to our dental team. Most patients resume normal activities within 48 hours.`,
    },
    {
      title: 'Final Result & Maintenance Schedule',
      description: `After healing, Dr. Rockson Samuel verifies bite alignment and polishes restorations. You receive a 12-month maintenance plan with 2 free review visits.`,
    },
  ]

  const benefitHighlights = [
    `Natural appearance: Bio-compatible materials matched to your tooth shade for invisible results.`,
    `Durability: ${serviceName} at Indira Dental Clinic lasts 10–20+ years with proper care.`,
    `Safety: Hospital-grade sterilization (Class B autoclave) and same-day instrument processing.`,
    `50% lower cost: Save ₹15,000–₹40,000 compared to Chennai and Bangalore dental clinics.`,
    `0% EMI available: 3–12 month payment plans through Bajaj Finserv, HDFC, and ICICI.`,
  ]

  const symptomSignals = [
    `Tooth pain lasting more than 48 hours, or sensitivity to hot/cold that persists after eating.`,
    `Visible damage: chipped, cracked, or broken teeth affecting your bite or appearance.`,
    `Failed previous treatment: loose crowns, recurring infections, or worn-out fillings.`,
    `Difficulty chewing: avoiding hard foods or chewing only on one side of your mouth.`,
    `Cosmetic concerns: gaps, stains, or misalignment affecting your smile confidence.`,
  ]

  const costPackages = [
    {
      label: `Standard ${serviceName}`,
      price: '₹15,000–₹25,000',
      includes: 'Consultation, CBCT scan, procedure by Dr. Rockson Samuel, 2 review visits, WhatsApp support',
    },
    {
      label: `Premium ${serviceName}`,
      price: '₹28,000–₹45,000',
      includes: 'All Standard features + IV sedation option, imported materials, priority scheduling, 4 review visits',
    },
    {
      label: `${serviceName} + Smile Makeover`,
      price: '₹45,000–₹75,000',
      includes: 'Core procedure + teeth whitening + smile design consultation + 12-month maintenance plan',
    },
  ]

  const faqs = [
    {
      question: `How long does ${serviceName.toLowerCase()} last?`,
      answer:
        `**10–20+ years** with proper oral hygiene and regular checkups every 6 months. Dr. Rockson Samuel uses premium materials (titanium, zirconia) that resist wear in ${cityName}'s humid climate.`,
    },
    {
      question: `Is ${serviceName.toLowerCase()} painful?`,
      answer:
        `**No.** Dr. Rockson Samuel uses local anaesthesia for all procedures. Patients rate pain as 2/10 on average. IV sedation available for anxious patients at ₹3,000 additional cost.`,
    },
    {
      question: `What is ${serviceName.toLowerCase()} recovery time?`,
      answer:
        `**24–48 hours** for normal activities. Soft diet required for 3–7 days depending on procedure complexity. WhatsApp follow-up included for any concerns.`,
    },
    {
      question: `Can I combine ${serviceName.toLowerCase()} with other treatments?`,
      answer:
        `**Yes.** Common combinations: ${serviceName.toLowerCase()} + teeth whitening (save ₹5,000), ${serviceName.toLowerCase()} + gum contouring, ${serviceName.toLowerCase()} + aligners. Dr. Rockson Samuel creates sequenced treatment plans.`,
    },
    {
      question: `What EMI options are available for ${serviceName.toLowerCase()}?`,
      answer:
        `**0% EMI for 3–6 months** through Bajaj Finserv, HDFC, and ICICI. 12-month EMI at 12% interest. No-cost EMI requires ₹5,000 minimum treatment value. Insurance claims assistance provided.`,
    },
  ]

  const tocItems = [
    { href: `#${sectionIds.what}`, label: `What Is ${serviceName}?` },
    { href: `#${sectionIds.when}`, label: `When Do You Need ${serviceName}?` },
    { href: `#${sectionIds.procedure}`, label: `Step-by-Step ${serviceName} Procedure` },
    { href: `#${sectionIds.benefits}`, label: `Benefits of ${serviceName} in ${cityName}` },
    { href: `#${sectionIds.cost}`, label: `${serviceName} Cost & Packages` },
    { href: `#${sectionIds.beforeAfter}`, label: `Before & After Results` },
    { href: `#${sectionIds.why}`, label: `Why Choose ${clinicName}` },
    { href: `#${sectionIds.faqs}`, label: `${serviceName} FAQs` },
    { href: `#${sectionIds.book}`, label: `Book Your ${serviceName} Appointment` },
    { href: '#related-services', label: 'Related Services' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: `${serviceName} in ${cityName}`,
    description: `${serviceName} delivered at ${clinicName} in ${cityName}. Personalised care that restores comfort, function, and confidence.`,
    procedureType: serviceName,
    bodyLocation: 'Oral cavity',
    sameAs: `https://www.velloredental.com/services/${serviceSlug}`,
    medicalSpecialty: 'Dentistry',
    provider: {
      '@type': 'MedicalBusiness',
      name: clinicName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName,
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      telephone: PHONE_NUMBER,
    },
  }

  return (
    <>
      <SectionContainer className="py-12 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.contents}>
        <div className="glassmorphism-card dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/50 dark:border-teal-600/30 shadow-xl">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">📋 Table of Contents</h2>
          <nav aria-label={`${serviceName} sections`}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-xl glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 border border-teal-200 dark:border-teal-700/40 px-4 py-3 text-sm font-medium text-foreground/90 dark:text-slate-200 transition-all hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-300 hover:shadow-lg hover:scale-[1.02] hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/50 dark:hover:to-blue-900/50"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-teal-500 dark:text-teal-400">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.what}>
        <div className="glassmorphism-card dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/30 dark:border-teal-600/30 shadow-lg">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">📖 What Is {serviceName}?</h2>
          <p className="text-foreground/80 dark:text-slate-300 leading-relaxed mb-4">
            <strong>{serviceName}</strong> restores tooth function, eliminates pain, and improves smile aesthetics. At Indira Dental Clinic in {cityName}, Dr. Rockson Samuel (BDS, PgDM, BDM, 15+ years experience) performs this procedure using 3D CBCT imaging and digital planning for predictable outcomes.
          </p>
          <p className="text-foreground/80 dark:text-slate-300 leading-relaxed">
            <strong>Success rate: 95%+</strong> based on 1,000+ cases completed at Indira Dental Clinic. Treatment duration: 1–3 appointments depending on complexity. Cost: 50% lower than Chennai metro clinics.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-teal-50 via-blue-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.when}>
        <div className="glassmorphism-card-light dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/50 dark:border-teal-600/30 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">🔍 When Do You Need {serviceName}?</h2>
          <p className="text-foreground/80 dark:text-slate-300 leading-relaxed mb-6">
            <strong>Book a consultation at Indira Dental Clinic, {cityName}</strong> if you experience any of these symptoms:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {symptomSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-3 glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-xl p-4 border border-teal-200 dark:border-teal-700/40 transition-all hover:shadow-md hover:scale-[1.01]">
                <span className="mt-0.5 text-teal-500 dark:text-teal-400 text-lg">✓</span>
                <span className="text-foreground/80 dark:text-slate-300">{signal}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-foreground/70 dark:text-slate-400 italic">
            <strong>Early treatment saves 30–50% in costs.</strong> Free 15-minute assessment available. Call +91-7010650063 or WhatsApp to check if you need {serviceName.toLowerCase()}.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.procedure}>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">Step-by-Step {serviceName} Procedure</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {procedureSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-teal-200/50 dark:border-teal-700/40 bg-gradient-to-br from-white to-teal-50/30 dark:from-slate-900/80 dark:to-teal-950/40 p-6 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white font-semibold shadow-md">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground dark:text-slate-100 mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/80 dark:text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-teal-100/70 via-blue-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.benefits}>
        <div className="glassmorphism-card-light dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/50 dark:border-teal-600/30 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">✨ Benefits of {serviceName} in {cityName}</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {benefitHighlights.map((benefit, index) => (
              <li key={benefit} className="glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-2xl border border-teal-200 dark:border-teal-700/40 p-6 text-foreground/80 dark:text-slate-300 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-sm font-bold mb-3 shadow-md">{index + 1}</span>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.cost}>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">{serviceName} Cost &amp; Packages</h2>
        <p className="text-foreground/80 dark:text-slate-300 leading-relaxed mb-6">
          <strong>All-inclusive pricing</strong>—no hidden fees. Each package includes: consultation, CBCT scan, procedure, materials, and follow-up visits. <strong>0% EMI available</strong> for treatments above ₹5,000. Serving patients from {cityName}, {locationName}, and nearby districts.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-teal-200/50 dark:border-teal-700/40 shadow-lg">
          <table className="min-w-full divide-y divide-teal-200/50 dark:divide-teal-700/40">
            <thead className="bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/60 dark:to-blue-900/60">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-teal-800 dark:text-teal-200">Package</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-teal-800 dark:text-teal-200">Starting Cost</th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-teal-800 dark:text-teal-200">What&apos;s Included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal-100/50 dark:divide-teal-800/40 bg-white/80 dark:bg-slate-900/80">
              {costPackages.map((pkg) => (
                <tr key={pkg.label} className="hover:bg-teal-50/50 dark:hover:bg-teal-900/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-foreground dark:text-slate-100">{pkg.label}</td>
                  <td className="px-4 py-3 text-sm font-medium text-teal-600 dark:text-teal-400">{pkg.price}</td>
                  <td className="px-4 py-3 text-sm text-foreground/80 dark:text-slate-300">{pkg.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-teal-600/80 dark:text-teal-400/80">
          Complimentary smile design previews • Custom maintenance plans • Transparent terms before you start
        </p>
        {showPriceComparison && (
          <div className="mt-8">
            <PriceComparisonTable locationName={cityName} />
          </div>
        )}
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-blue-50 via-teal-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.beforeAfter}>
        <div className="glassmorphism-card-light dark:bg-slate-900/80 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-600/30 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">📸 Before & After Results</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glassmorphism-item dark:from-slate-800/60 dark:to-blue-900/40 rounded-2xl border border-blue-200 dark:border-blue-700/40 p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-md">😔</span>
                <h3 className="text-lg font-semibold text-foreground dark:text-slate-100">Before Treatment</h3>
              </div>
              <p className="text-sm text-foreground/80 dark:text-slate-300 leading-relaxed">
                Concerns about comfort, chewing efficiency, or smile confidence often keep patients from socialising or
                enjoying their favourite meals. Photographs and scans captured at this stage help us design the ideal
                transformation.
              </p>
            </div>
            <div className="glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-2xl border border-teal-200 dark:border-teal-700/40 p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-md">😊</span>
                <h3 className="text-lg font-semibold text-foreground dark:text-slate-100">After Treatment</h3>
              </div>
              <p className="text-sm text-foreground/80 dark:text-slate-300 leading-relaxed">
                Following {serviceName.toLowerCase()}, patients report renewed confidence, improved oral health, and
                effortless day-to-day comfort. Request a gallery preview during your consultation to see smile journeys from
                neighbours in {cityName}.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-12 bg-gradient-to-br from-blue-50 via-teal-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.why}>
        <div className="glassmorphism-card dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/50 dark:border-teal-600/30 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">🏆 Why Choose {clinicName} for {serviceName}?</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            <li className="flex items-start gap-3 glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-xl p-4 border border-teal-200 dark:border-teal-700/40">
              <span className="mt-0.5 text-teal-500 dark:text-teal-400 text-lg">✓</span>
              <span className="text-foreground/80 dark:text-slate-300"><strong>Dr. Rockson Samuel</strong>: BDS, PgDM, BDM with 15+ years experience. 1,000+ successful {serviceName.toLowerCase()} cases.</span>
            </li>
            <li className="flex items-start gap-3 glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-xl p-4 border border-teal-200 dark:border-teal-700/40">
              <span className="mt-0.5 text-teal-500 dark:text-teal-400 text-lg">✓</span>
              <span className="text-foreground/80 dark:text-slate-300"><strong>Advanced Technology</strong>: In-house CBCT scanner, digital smile design, 3D treatment planning.</span>
            </li>
            <li className="flex items-start gap-3 glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-xl p-4 border border-teal-200 dark:border-teal-700/40">
              <span className="mt-0.5 text-teal-500 dark:text-teal-400 text-lg">✓</span>
              <span className="text-foreground/80 dark:text-slate-300"><strong>Hospital-Grade Safety</strong>: Class B autoclave sterilization, single-use instruments, air purification system.</span>
            </li>
            <li className="flex items-start gap-3 glassmorphism-item dark:from-slate-800/60 dark:to-teal-900/40 rounded-xl p-4 border border-teal-200 dark:border-teal-700/40">
              <span className="mt-0.5 text-teal-500 dark:text-teal-400 text-lg">✓</span>
              <span className="text-foreground/80 dark:text-slate-300"><strong>50% Lower Cost</strong>: Same quality as Chennai clinics at half the price. 0% EMI available.</span>
            </li>
            <li className="flex items-start gap-3 backdrop-blur-sm bg-gradient-to-r from-white/80 to-blue-50/50 dark:from-slate-800/60 dark:to-blue-900/40 rounded-xl p-4 border border-blue-200 dark:border-blue-700/40 md:col-span-2">
              <span className="mt-0.5 text-blue-500 dark:text-blue-400 text-lg">⭐</span>
              <span className="text-foreground/80 dark:text-slate-300"><strong>4.9/5 Rating</strong> on Google (500+ reviews). Patients from {cityName}, {locationName}, Chennai, and Bangalore.</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/about-us/dr-rockson-samuel" className="inline-flex items-center px-5 py-2.5 rounded-xl border-2 border-teal-500 bg-white/80 dark:bg-slate-800/60 text-sm font-semibold text-teal-600 dark:text-teal-400 transition-all hover:bg-teal-50 dark:hover:bg-teal-900/40 hover:shadow-md">
              Meet Our Dentist →
            </Link>
            <Link href="/gallery" className="inline-flex items-center px-5 py-2.5 rounded-xl border-2 border-blue-500 bg-white/80 dark:bg-slate-800/60 text-sm font-semibold text-blue-600 dark:text-blue-400 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:shadow-md">
              Explore Our Technology →
            </Link>
          </div>
        </div>
      </SectionContainer>



      <SectionContainer className="py-12 bg-gradient-to-br from-teal-100/70 via-blue-50/50 to-cyan-100/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.book}>
        <div className="glassmorphism-card dark:bg-slate-900/80 rounded-3xl p-8 border border-teal-200/50 dark:border-teal-600/30 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">📅 Book Your {serviceName} Appointment</h2>
          <p className="text-foreground/80 dark:text-slate-300 leading-relaxed">
            <strong>Free consultation available.</strong> Call or WhatsApp +91-7010650063 to book your appointment with Dr. Rockson Samuel at Indira Dental Clinic, {cityName}. Same-day appointments available for emergencies. Upload previous X-rays via WhatsApp for faster evaluation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center px-6 py-3 text-sm shadow-lg hover:shadow-xl"
            >
              Book Online Consultation
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center rounded-xl border-2 border-teal-500 bg-white/80 dark:bg-slate-800/60 px-6 py-3 text-sm font-semibold text-teal-600 dark:text-teal-400 transition-all hover:bg-teal-50 dark:hover:bg-teal-900/40 hover:shadow-md"
            >
              Call {PHONE_NUMBER.replace('+91', '+91-')}
            </a>
            <a
              href="https://wa.me/917010650063"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl border-2 border-green-500 bg-white/80 dark:bg-slate-800/60 px-6 py-3 text-sm font-semibold text-green-600 dark:text-green-400 transition-all hover:bg-green-50 dark:hover:bg-green-900/40 hover:shadow-md"
            >
              WhatsApp Our Dentist Team
            </a>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </SectionContainer>
    </>
  )
}

