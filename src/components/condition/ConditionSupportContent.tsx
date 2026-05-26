'use client'

import Link from 'next/link'
import { SectionContainer } from '@/components/ui/section-container'

interface ConditionSupportContentProps {
 conditionName: string
 conditionSlug: string
 cityName: string
 clinicName?: string
}

import { siteConfig } from "@/config/site"

const PHONE_NUMBER = siteConfig.contact.phone;

type ConditionContentConfig = {
 intro?: string
 causes?: string[]
 symptoms?: string[]
 prevention?: string[]
 relatedConditions?: Array<{ title: string; href: string }>
 treatmentMap?: Array<{ issue: string; treatment: string; href: string }>
 faqs?: Array<{ question: string; answer: string }>
}

const conditionOverrides: Record<string, ConditionContentConfig> = {
 'tooth-abscess': {
 causes: [
 'Untreated deep dental cavities that reach the pulp',
 'Fractured or chipped tooth that allows bacteria inside',
 'Advanced gum disease creating periodontal pockets',
 'Failed or incomplete root canal treatment',
 'Weakened immune system or uncontrolled diabetes',
 ],
 symptoms: [
 'Severe throbbing pain that radiates to jaw, ear, or neck',
 'Facial swelling or tender lymph nodes',
 'Sudden rush of foul-tasting fluid in the mouth',
 'Fever, malaise, or difficulty swallowing',
 'Sensitivity to hot, cold, or biting pressure',
 'Red, swollen gums with possible pus discharge',
 ],
 relatedConditions: [
 { title: 'Tooth Decay', href: '/conditions/tooth-decay' },
 { title: 'Gum Disease', href: '/conditions/gum-disease' },
 { title: 'Dental Infection', href: '/conditions/bad-breath' },
 { title: 'Jaw Pain', href: '/conditions/tmj-disorders' },
 ],
 faqs: [
 {
 question: 'Can a tooth abscess heal on its own?',
 answer:
 'An abscess is a serious infection that will not disappear without professional treatment. Drainage, antibiotics, and definitive therapies such as root canal or extraction are required to prevent spread to other tissues.',
 },
 {
 question: 'What is the fastest way to relieve abscess pain?',
 answer:
 'Over-the-counter pain medication and cold compresses can offer temporary relief, but immediate dental care is essential. Our team prioritises emergency appointments to drain the infection safely.',
 },
 {
 question: 'Will I always need a root canal for a tooth abscess?',
 answer:
 'Treatment depends on the location and severity. Root canal therapy can save an infected tooth, but extraction may be recommended if the tooth structure cannot be restored. Your dentist will explain every option in detail.',
 },
 ],
 },
}

function buildContent(
 conditionSlug: string,
 conditionName: string,
 cityName: string,
 clinicName: string,
): Required<ConditionContentConfig> {
 const base: ConditionContentConfig = {
 intro: `<strong>${conditionName}</strong> causes dental pain, sensitivity, or swelling that disrupts daily life. At Indira Dental Clinic in ${cityName}, Dr. Rockson Samuel (BDS, PgDM, BDM, 15+ years experience) diagnoses the root cause using 3D CBCT imaging and provides same-day relief for urgent cases.`,
 causes: [
 `Untreated dental cavities reaching the tooth nerve (most common cause, 60% of cases)`,
 'Gum infection: gingivitis (early stage) or periodontitis (advanced)',
 'Cracked, fractured, or chipped tooth exposing inner dentin',
 'Gum recession exposing sensitive tooth roots',
 'Impacted wisdom tooth pressing against adjacent teeth',
 'Bruxism (teeth grinding): affects 10% of adults, often during sleep',
 ],
 symptoms: [
 'Sharp, throbbing, or constant discomfort',
 'Sensitivity to hot, cold, or sweet foods',
 'Pain while biting or chewing',
 'Gum swelling, redness, or bleeding',
 'Bad breath or unpleasant taste',
 'Fever, headache, or radiating jaw pain',
 ],
 prevention: [
 'Brush twice daily (2 minutes each) with fluoride toothpaste. Replace brush every 3 months.',
 'Floss once daily to remove plaque between teeth. Use interdental brushes for gaps.',
 'Limit sugar intake: max 6 teaspoons/day. Avoid acidic drinks (cola, citrus juice).',
 'Dental checkups every 6 months: Early cavity detection ensures transparent, lower-cost preventive care.',
 'Treat small cavities immediately. Untreated decay progresses to root canal within 6–12 months.',
 'Night guard recommended for teeth grinders. Available at Indira Dental Clinic.',
 ],
 relatedConditions: [
 { title: 'Gum Bleeding', href: '/conditions/bleeding-gums' },
 { title: 'Tooth Sensitivity', href: '/conditions/tooth-sensitivity' },
 { title: 'Jaw Pain', href: '/conditions/tmj-disorders' },
 { title: 'Dental Abscess', href: '/conditions/tooth-abscess' },
 { title: 'Wisdom Tooth Pain', href: '/conditions/impacted-teeth' },
 ],
 treatmentMap: [
 { issue: 'Tooth Decay (Cavity)', treatment: 'Dental Filling or Root Canal (Standard Rate)', href: '/services/root-canal-treatment' },
 { issue: 'Gum Disease', treatment: 'Scaling & Root Planing (Standard Rate)', href: '/services/periodontics/scaling-root-planing' },
 { issue: 'Cracked Tooth', treatment: 'Dental Crown or Bonding (Standard Rate)', href: '/services/restorative-dentistry/dental-crowns' },
 { issue: 'Tooth Infection', treatment: 'Antibiotics + Root Canal or Extraction (Standard Rate)', href: '/services/tooth-extraction' },
 { issue: 'Impacted Wisdom Tooth', treatment: 'Surgical Extraction (Standard Rate)', href: '/services/oral-surgery/impacted-wisdom-teeth' },
 ],
 faqs: [
 {
 question: `Can ${conditionName.toLowerCase()} heal on its own?`,
 answer:
 `**No.** ${conditionName} indicates an underlying dental problem (cavity, infection, or gum disease) that requires professional treatment. Home remedies provide temporary relief only. Without treatment, pain worsens within 1–2 weeks.`,
 },
 {
 question: `What painkiller works best for ${conditionName.toLowerCase()}?`,
 answer:
 '**Ibuprofen 400mg every 6 hours** is most effective for dental pain. Avoid aspirin directly on gums—it causes tissue burns. See a dentist within 48 hours if pain persists.',
 },
 {
 question: `Is treatment for ${conditionName.toLowerCase()} painful?`,
 answer:
 '**No.** Dr. Rockson Samuel uses local anaesthesia for all procedures. Patients rate pain as 2/10 on average. IV sedation available for anxious patients.',
 },
 {
 question: `Can ${conditionName.toLowerCase()} cause headaches?`,
 answer:
 `**Yes.** ${conditionName} can radiate pain to temples, ears, and neck through trigeminal nerve pathways. If headaches persist with dental pain for 48+ hours, book an emergency appointment.`,
 },
 {
 question: `How long is recovery after ${conditionName.toLowerCase()} treatment?`,
 answer:
 '**24–48 hours** for most procedures. Full recovery: 3–7 days. Dr. Rockson Samuel provides personalized aftercare instructions and WhatsApp follow-up support.',
 },
 ],
 }

 const override = conditionOverrides[conditionSlug] ?? {}

 return {
 intro: override.intro ?? base.intro!,
 causes: override.causes ?? base.causes!,
 symptoms: override.symptoms ?? base.symptoms!,
 prevention: override.prevention ?? base.prevention!,
 relatedConditions: override.relatedConditions ?? base.relatedConditions!,
 treatmentMap: override.treatmentMap ?? base.treatmentMap!,
 faqs: override.faqs ?? base.faqs!,
 }
}

export function ConditionSupportContent({ conditionName, conditionSlug, cityName, clinicName = 'Indira Dental Clinic' }: ConditionSupportContentProps) {
 const content = buildContent(conditionSlug, conditionName, cityName, clinicName)
 const sectionIds = {
 toc: `${conditionSlug}-toc`,
 what: `${conditionSlug}-what`,
 causes: `${conditionSlug}-causes`,
 symptoms: `${conditionSlug}-symptoms`,
 when: `${conditionSlug}-when`,
 treatments: `${conditionSlug}-treatments`,
 remedies: `${conditionSlug}-remedies`,
 prevention: `${conditionSlug}-prevention`,
 why: `${conditionSlug}-why`,
 faqs: `${conditionSlug}-faqs`,
 book: `${conditionSlug}-book`,
 related: `${conditionSlug}-related`,
 }

 const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: content.faqs.map((faq) => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer,
 },
 })),
 }

 const conditionSchema = {
 '@context': 'https://schema.org',
 '@type': 'MedicalCondition',
 name: `${conditionName} in ${cityName}`,
 description: `${conditionName} diagnosis and treatment at ${clinicName} in ${cityName}. Personalised relief for dental pain.`,
 associatedAnatomy: 'Oral cavity',
 possibleTreatment: content.treatmentMap.map((row) => ({ '@type': 'MedicalTherapy', name: row.treatment })),
 epidemiology: `Common among adults seeking dental care in ${cityName}.`,
 }

 const tocItems = [
 { href: `#${sectionIds.what}`, label: `What Is ${conditionName}?` },
 { href: `#${sectionIds.causes}`, label: 'Common Causes' },
 { href: `#${sectionIds.symptoms}`, label: 'Symptoms to Watch For' },
 { href: `#${sectionIds.when}`, label: 'When to See a Dentist' },
 { href: `#${sectionIds.treatments}`, label: 'Treatment Options' },
 { href: `#${sectionIds.remedies}`, label: 'Home Remedies & Myths' },
 { href: `#${sectionIds.prevention}`, label: 'Prevention Tips' },
 { href: `#${sectionIds.why}`, label: `Why Choose ${clinicName}` },
 { href: `#${sectionIds.faqs}`, label: 'FAQs' },
 { href: `#${sectionIds.book}`, label: 'Book Appointment' },
 { href: `#${sectionIds.related}`, label: 'Related Conditions' },
 ]

 return (
 <>
 <SectionContainer className="py-12 bg-gradient-to-br from-fuchsia-50 via-cyan-50/50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.toc}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-600/30 shadow-xl">
 <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">📋 Table of Contents</h2>
 <ul className="grid gap-3 sm:grid-cols-2">
 {tocItems.map((item) => (
 <li key={item.href}>
 <a
 href={item.href}
 className="flex items-center justify-between rounded-xl elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 border border-fuchsia-200 dark:border-fuchsia-700/40 px-4 py-3 text-sm font-medium text-foreground/90 transition-all hover:border-fuchsia-500 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:shadow-lg hover:scale-[1.02]"
 >
 <span>{item.label}</span>
 <span aria-hidden="true" className="text-fuchsia-500">→</span>
 </a>
 </li>
 ))}
 </ul>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-white via-fuchsia-50/30 to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.what}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/30 dark:border-fuchsia-700/30 shadow-lg">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">📖 What Is {conditionName}?</h2>
 <p className="text-foreground/80 leading-relaxed mb-4">{content.intro}</p>
 <p className="text-foreground/80 leading-relaxed">
 <strong>Warning:</strong> Ignoring {conditionName.toLowerCase()} leads to abscess formation (within 1–2 weeks), potential tooth loss, and spread of infection to jaw bone. <strong>Treatment cost increases 3–5x</strong> if delayed. Book a free 15-minute assessment at Indira Dental Clinic, {cityName}.
 </p>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-fuchsia-100/70 via-blue-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.causes}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-600/30 shadow-xl">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">⚠️ Common Causes of {conditionName}</h2>
 <ul className="grid gap-4 md:grid-cols-2">
 {content.causes.map((cause, index) => (
 <li key={cause} className="elite-card-hover border-white/5 to-fuchsia-50/50 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-2xl border border-fuchsia-200 dark:border-fuchsia-700/40 p-5 text-foreground/80 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white text-xs font-bold mr-3 shadow-sm dark:shadow-slate-900/30">{index + 1}</span>
 {cause}
 </li>
 ))}
 </ul>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-blue-50/50 via-white to-fuchsia-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.symptoms}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/30 dark:border-fuchsia-700/30 shadow-lg">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">🔍 Symptoms to Watch For</h2>
 <ul className="grid gap-3 md:grid-cols-2">
 {content.symptoms.map((symptom) => (
 <li key={symptom} className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40">
 <span className="mt-0.5 text-fuchsia-500 text-lg">•</span>
 <span className="text-foreground/80 dark:text-slate-300">{symptom}</span>
 </li>
 ))}
 </ul>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-fuchsia-50 via-blue-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.when}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-600/30 shadow-xl">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">🚨 When to See a Dentist</h2>
 <p className="text-foreground/80 leading-relaxed mb-6">
 <strong>See a dentist immediately</strong> if you experience any of these symptoms. Treatment within 48 hours prevents complications and reduces costs by 50%.
 </p>
 <ul className="grid gap-3 md:grid-cols-2">
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40"><span className="text-fuchsia-500">❗</span> Pain lasting more than two days or disrupting sleep</li>
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40"><span className="text-fuchsia-500">❗</span> Swelling in the jaw, cheek, or neck</li>
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40"><span className="text-fuchsia-500">❗</span> Difficulty opening your mouth or swallowing</li>
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40"><span className="text-fuchsia-500">❗</span> Pain radiating to the ear, head, or temples</li>
 <li className="flex items-start gap-3 bg-gradient-to-r from-white/80 to-blue-50/50 dark:from-slate-800/80 dark:to-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800/50 md:col-span-2"><span className="text-fuchsia-500">❗</span> Visible pus, bleeding, or foul taste in the mouth</li>
 </ul>
 <div className="mt-8 flex flex-wrap gap-3">
 <Link
 href="/contact"
 className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
 >
 🏥 Book Emergency Appointment
 </Link>
 <a
 href={`tel:${PHONE_NUMBER}`}
 className="inline-flex items-center rounded-xl border-2 border-fuchsia-500 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 transition-all hover:bg-fuchsia-50 dark:bg-fuchsia-950 dark:hover:bg-fuchsia-900/30 hover:shadow-md"
 >
 📞 Call {PHONE_NUMBER.replace('+91', '+91-')}
 </a>
 </div>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.treatments}>
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">💊 Treatment Options</h2>
 <p className="text-foreground/80 leading-relaxed mb-6">
 Treatment depends on the root cause. Dr. Rockson Samuel at Indira Dental Clinic, {cityName} combines restorative, periodontal, and surgical expertise. <strong>All costs below are all-inclusive</strong> (consultation + procedure + follow-up).
 </p>
 <div className="overflow-x-auto rounded-2xl border border-fuchsia-200/50 dark:border-fuchsia-700/40 shadow-lg">
 <table className="min-w-full divide-y divide-fuchsia-200/50 dark:divide-fuchsia-800/50">
 <thead className="bg-gradient-to-r from-fuchsia-100 to-blue-100 dark:from-fuchsia-900/50 dark:to-blue-900/50">
 <tr>
 <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-fuchsia-800 dark:text-fuchsia-200">Cause</th>
 <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-fuchsia-800 dark:text-fuchsia-200">Recommended Treatment</th>
 <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-fuchsia-800 dark:text-fuchsia-200">Learn More</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-fuchsia-100/50 dark:divide-fuchsia-800/30 bg-white dark:bg-slate-900">
 {content.treatmentMap.map((row) => (
 <tr key={row.issue} className="hover:bg-fuchsia-50/50 dark:hover:bg-fuchsia-900/20 transition-colors">
 <td className="px-4 py-3 text-sm font-semibold text-foreground dark:text-slate-100">{row.issue}</td>
 <td className="px-4 py-3 text-sm text-foreground/80 dark:text-slate-300">{row.treatment}</td>
 <td className="px-4 py-3 text-sm">
 <Link href={row.href} className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline dark:hover:text-fuchsia-300 font-medium">
 View Service →
 </Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-blue-50 via-fuchsia-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.remedies}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-600/30 shadow-xl">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">🌿 Home Remedies &amp; Myths</h2>
 <p className="text-foreground/80 leading-relaxed mb-4">
 <strong>Temporary relief options:</strong> Warm salt-water rinses (1 tsp salt in 250ml water), cold compress (15 minutes on/off), ibuprofen 400mg every 6 hours. <strong>Avoid:</strong> Aspirin on gums (causes burns), undiluted clove oil, hot compresses (increases swelling).
 </p>
 <p className="text-foreground/80 dark:text-slate-300">
 <strong>Home care is not treatment.</strong> These measures provide 2–6 hours relief only. Book a same-day appointment at Indira Dental Clinic—Dr. Rockson Samuel can stop the pain permanently.
 </p>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-fuchsia-50 via-cyan-50/50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.prevention}>
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">🛡️ Prevention Tips</h2>
 <ul className="grid gap-4 md:grid-cols-2">
 {content.prevention.map((tip, index) => (
 <li key={tip} className="rounded-2xl border border-fuchsia-200/50 dark:border-fuchsia-700/40 bg-gradient-to-br from-white to-fuchsia-50/30 dark:from-slate-800 dark:to-fuchsia-900/20 p-5 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]">
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white text-xs font-bold mr-3 shadow-sm dark:shadow-slate-900/30">{index + 1}</span>
 <span className="text-foreground/80 dark:text-slate-300">{tip}</span>
 </li>
 ))}
 </ul>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-blue-50 via-fuchsia-50/50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.why}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-600/30 shadow-xl">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">🏆 Why Choose {clinicName} for {conditionName} Care?</h2>
 <ul className="grid gap-3 md:grid-cols-2">
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40">
 <span className="mt-0.5 text-fuchsia-500 text-lg">✓</span>
 <span className="text-foreground/80 dark:text-slate-300"><strong>Dr. Rockson Samuel</strong>: BDS, PgDM, BDM, 15+ years experience. Specializes in painless dentistry and emergency care.</span>
 </li>
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40">
 <span className="mt-0.5 text-fuchsia-500 text-lg">✓</span>
 <span className="text-foreground/80 dark:text-slate-300"><strong>3D CBCT Imaging</strong>: In-house scanner for accurate diagnosis. Results in 10 minutes, not days.</span>
 </li>
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40">
 <span className="mt-0.5 text-fuchsia-500 text-lg">✓</span>
 <span className="text-foreground/80 dark:text-slate-300"><strong>Same-Day Emergency</strong>: WhatsApp {siteConfig.contact.whatsapp} for urgent cases. Most emergencies treated within 2 hours.</span>
 </li>
 <li className="flex items-start gap-3 elite-card-hover border-white/5 dark:from-slate-800/80 dark:to-fuchsia-900/30 rounded-xl p-4 border border-fuchsia-200 dark:border-fuchsia-700/40">
 <span className="mt-0.5 text-fuchsia-500 text-lg">✓</span>
 <span className="text-foreground/80 dark:text-slate-300"><strong>50% Lower Cost</strong>: Same quality as Chennai clinics. 0% EMI available through Bajaj Finserv, HDFC, ICICI.</span>
 </li>
 <li className="flex items-start gap-3 bg-gradient-to-r from-white/80 to-blue-50/50 dark:from-slate-800/80 dark:to-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800/50 md:col-span-2">
 <span className="mt-0.5 text-fuchsia-500 text-lg">⭐</span>
 <span className="text-foreground/80 dark:text-slate-300"><strong>4.9/5 Google Rating</strong> (500+ reviews). Patients from {cityName}, Chennai, Bangalore, and abroad.</span>
 </li>
 </ul>
 <div className="mt-6 flex flex-wrap gap-4">
 <Link href="/about-us" className="inline-flex items-center px-5 py-2.5 rounded-xl border-2 border-fuchsia-500 bg-white dark:bg-slate-900 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 transition-all hover:bg-fuchsia-50 dark:bg-fuchsia-950 dark:hover:bg-fuchsia-900/30 hover:shadow-md">
 About Us →
 </Link>
 <Link href="/about-us/our-team" className="inline-flex items-center px-5 py-2.5 rounded-xl border-2 border-fuchsia-500 bg-white dark:bg-slate-900 text-sm font-semibold text-fuchsia-600 dark:text-blue-400 transition-all hover:bg-fuchsia-50 dark:bg-fuchsia-950 dark:hover:bg-blue-900/30 hover:shadow-md">
 Meet Our Team →
 </Link>
 </div>
 </div>
 </SectionContainer>



 <SectionContainer className="py-12 bg-gradient-to-br from-fuchsia-100/70 via-blue-50/50 to-cyan-100/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.book}>
 <div className="elite-card dark:bg-slate-900 rounded-3xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-600/30 shadow-xl">
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">📅 Book Appointment</h2>
 <p className="text-foreground/80 leading-relaxed mb-6">
 <strong>Free consultation available.</strong> Stop {conditionName.toLowerCase()} pain today. Call or WhatsApp {siteConfig.contact.phone} to book with Dr. Rockson Samuel at Indira Dental Clinic, {cityName}. Same-day emergency appointments available.
 </p>
 <div className="flex flex-wrap gap-4">
 <Link
 href="/contact"
 className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
 >
 📝 Book Online
 </Link>
 <a
 href={`tel:${PHONE_NUMBER}`}
 className="inline-flex items-center rounded-xl border-2 border-fuchsia-500 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400 transition-all hover:bg-fuchsia-50 dark:bg-fuchsia-950 dark:hover:bg-fuchsia-900/30 hover:shadow-md"
 >
 📞 Call {PHONE_NUMBER.replace('+91', '+91-')}
 </a>
 <a
 href={`https://wa.me/${siteConfig.contact.whatsapp}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center rounded-xl border-2 border-green-500 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-green-600 dark:text-green-400 transition-all hover:bg-green-50 dark:hover:bg-green-900/30 hover:shadow-md"
 >
 💬 WhatsApp Us
 </a>
 </div>
 </div>
 </SectionContainer>

 <SectionContainer className="py-12 bg-gradient-to-br from-blue-50/50 via-white to-fuchsia-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" id={sectionIds.related}>
 <h2 className="elite-section-title bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 dark:from-fuchsia-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">🔗 Related Conditions</h2>
 <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
 {content.relatedConditions.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 className="rounded-xl border-2 border-fuchsia-200 dark:border-fuchsia-700/40 bg-gradient-to-r from-white/80 to-fuchsia-50/50 dark:from-slate-800/80 dark:to-fuchsia-900/30 px-4 py-3 text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400 transition-all hover:border-fuchsia-500 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 hover:shadow-md hover:scale-[1.02]"
 >
 {item.title}
 </Link>
 ))}
 </div>
 </SectionContainer>

 <SectionContainer className="hidden">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 </SectionContainer>
 </>
 )
}

