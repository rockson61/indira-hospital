'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent, ModernCardDescription } from "@/components/ui/modern-card"
import { Tabs, Tab, Button, Chip, Accordion, AccordionItem } from "@heroui/react"
import { MarketingContent } from '@/components/marketing/MarketingContent'
import { Plane, Hotel, MapPin, CreditCard, Calendar, Phone, CheckCircle2, ShieldCheck, HeartPulse, Globe2 } from "lucide-react"
import Link from 'next/link'
import { LatestDentalTourismGuides } from '@/components/blog/LatestDentalTourismGuides'
import { allMigratedPosts } from '@/lib/data/blog-posts-migrated'

const marketingIntro = {
  eyebrow: 'Global Smiles, Local Warmth',
  heading: 'Why international patients trust Indira Dental Clinic',
  description:
    'We merge world-class clinical protocols with curated travel support so you enjoy a pain-free smile transformation and an unforgettable Indian holiday—at a fraction of Western prices.',
}

const marketingSections = [
  {
    id: 'clinic-advantages',
    eyebrow: 'Clinic Advantages',
    heading: 'A centre of excellence for global dental travellers',
    highlights: [
      { title: 'International QA', description: 'ISO-graded sterilisation, FDA-approved implant systems, and digital workflows.' },
      { title: 'Tourism Concierge', description: 'Airport pickups, visa letters, hotel partnerships, and sightseeing help.' },
      { title: 'Fast-Track', description: 'Smile makeovers and implants structured within 5–10 day visits.' },
      { title: 'Cost Savings', description: 'Save 60–80% versus Western tariffs with lifetime maintenance.' },
    ],
  },
  {
    id: 'journey-roadmap',
    eyebrow: 'Travel Roadmap',
    heading: 'Your dental tourism journey in five guided steps',
    steps: [
      { title: 'Virtual assessment', description: 'Share scans/photos; video consult with Dr. Rockson Samuel.' },
      { title: 'Visa & Travel', description: 'Receive formal invitation letters and itinerary planning.' },
      { title: 'Arrival', description: 'Airport greeting and transfer to vetted hotels near the clinic.' },
      { title: 'Treatment', description: 'Spa-like operatories and daily progress reviews.' },
      { title: 'Follow-up', description: 'Detailed reports and scheduled tele-dentistry visits back home.' },
    ],
  },
]

const marketingFaqs = [
  {
    question: 'Can you coordinate with my home dentist after treatment?',
    answer: 'Yes. We share digital records and maintenance protocols with your preferred dentist and are available for joint tele-consults whenever required.',
  },
  {
    question: 'What languages do your coordinators speak?',
    answer: 'Our team supports English, Tamil, Hindi, and can arrange translators for French, German, and Arabic guests.',
  },
  {
    question: 'How far in advance should I plan my trip?',
    answer: 'We recommend scheduling 4–6 weeks ahead for visa facilitation and flight deals, but we routinely manage urgent cases within 10 days when needed.',
  },
]

const marketingCTA = {
  heading: 'Start planning your dental holiday today',
  description: 'Tell us your ideal travel dates and smile goals—we will send a personalised treatment plan within 48 hours.',
  primary: { text: 'Book Virtual Consult', href: '/contact' },
  secondary: { text: 'Email Reports', href: 'mailto:rockson68@hotmail.com' },
  tertiary: { text: 'WhatsApp', href: 'https://wa.me/917010650063' },
}

export function DentalTourism() {
  return (
    <div className="container mx-auto py-16 px-4">

      <div className="text-center mb-16 animate-fade-in relative z-10">
        <Chip variant="shadow" color="secondary" className="mb-4">Welcome International Patients</Chip>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent transform hover:scale-[1.01] transition-transform">
          Dental Tourism in Vellore
        </h1>
        <p className="text-xl text-default-500 dark:text-default-400 max-w-3xl mx-auto leading-relaxed">
          Experience world-class dental care details at a fraction of the cost.
          <span className="font-semibold text-foreground dark:text-white"> Dr. Rockson Samuel</span> and the team at Indira Dental Clinic
          welcome you to a seamless blend of healthcare and heritage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
        <ModernCard className="h-full border-teal-100/50 dark:border-teal-500/20 bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-900/10">
          <ModernCardHeader className="text-center pb-2">
            <div className="w-16 h-16 mx-auto bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4 shadow-inner ring-4 ring-teal-50 dark:ring-teal-900/10">
              <Plane className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <ModernCardTitle className="text-2xl text-teal-900 dark:text-teal-50">Save Up to 70%</ModernCardTitle>
            <ModernCardDescription className="text-teal-600 dark:text-teal-300 font-medium">vs US, UK, & Australia</ModernCardDescription>
          </ModernCardHeader>
          <ModernCardContent className="text-center">
            <p className="text-default-500 dark:text-gray-400 leading-relaxed">
              Premium procedures significantly more affordable than Western pricing, covering your travel costs with savings to spare.
            </p>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="h-full border-blue-100/50 dark:border-blue-500/20 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10">
          <ModernCardHeader className="text-center pb-2">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 shadow-inner ring-4 ring-blue-50 dark:ring-blue-900/10">
              <Hotel className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <ModernCardTitle className="text-2xl text-blue-900 dark:text-blue-50">Complete Package</ModernCardTitle>
            <ModernCardDescription className="text-blue-600 dark:text-blue-300 font-medium">Stay & Assistance Included</ModernCardDescription>
          </ModernCardHeader>
          <ModernCardContent className="text-center">
            <p className="text-default-500 dark:text-gray-400 leading-relaxed">
              Comprehensive concierge services: luxury accommodation, airport transfers, and local guidance included in your plan.
            </p>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="h-full border-indigo-100/50 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/10">
          <ModernCardHeader className="text-center pb-2">
            <div className="w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 shadow-inner ring-4 ring-indigo-50 dark:ring-indigo-900/10">
              <MapPin className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <ModernCardTitle className="text-2xl text-indigo-900 dark:text-indigo-50">Explore India</ModernCardTitle>
            <ModernCardDescription className="text-indigo-600 dark:text-indigo-300 font-medium">Heritage & Wellness</ModernCardDescription>
          </ModernCardHeader>
          <ModernCardContent className="text-center">
            <p className="text-default-500 dark:text-gray-400 leading-relaxed">
              Vellore is a hub of history. Visit the Golden Temple, the Fort, and enjoy authentic South Indian culture while you heal.
            </p>
          </ModernCardContent>
        </ModernCard>
      </div>

      <div className="mb-20">
        <Tabs aria-label="Dental Tourism Information" color="primary" variant="underlined" classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-primary",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-primary font-bold text-lg"
        }}>
          <Tab key="why-choose" title={<div className="flex items-center space-x-2"><ShieldCheck /><span>Why Choose Us</span></div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-fade-in">
              <ModernCard className="p-6 bg-default-50 dark:bg-default-50/5">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Globe2 className="text-primary" /> International Standards</h3>
                <ul className="space-y-4">
                  {[
                    "State-of-the-art equipment & FDA approved materials",
                    "Internationally trained specialists",
                    "Strict 4-step sterilization protocols",
                    "Digital Smile Design & 3D Diagnostics",
                    "Warranty on Implants & Crowns"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-default-600 dark:text-default-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </ModernCard>
              <ModernCard className="p-6 bg-default-50 dark:bg-default-50/5">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><HeartPulse className="text-secondary" /> Patient-Centered Care</h3>
                <ul className="space-y-4">
                  {[
                    "English-speaking staff & translators available",
                    "Personalized itinerary planning",
                    "Virtual consultations pre-arrival",
                    "24/7 dedicated patient coordinator",
                    "Long-term follow-up care remotely"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-default-600 dark:text-default-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </ModernCard>
            </div>
          </Tab>

          <Tab key="process" title={<div className="flex items-center space-x-2"><Calendar /><span>The Process</span></div>}>
            <div className="mt-8 space-y-6 animate-fade-in">
              {[
                { step: 1, title: "Initial Consultation", desc: "Contact via WhatsApp/Email with X-rays. Free video consult with Dr. Rockson." },
                { step: 2, title: "Treatment Plan & Quote", desc: "Received detailed cost estimate, duration of stay, and appointment schedule." },
                { step: 3, title: "Travel Planning", desc: "We assist with visa letters, hotel booking near the clinic, and airport pickup." },
                { step: 4, title: "Arrival & Treatment", desc: "Chauffeur pickup. Meet Dr. Rockson. Complete treatment in 3-10 days." },
                { step: 5, title: "Vacation & Departure", desc: "Enjoy short trips around Vellore/Chennai. Return home with a new smile." }
              ].map((item, i) => (
                <ModernCard key={i} className="flex flex-col md:flex-row gap-6 p-6 items-start hover:border-primary/50 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground dark:text-white">{item.title}</h3>
                    <p className="text-default-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </ModernCard>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>

      <LatestDentalTourismGuides
        posts={allMigratedPosts
          .filter(p => p.category === 'Dental Tourism')
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3)
        }
      />

      <MarketingContent
        intro={marketingIntro}
        sections={marketingSections}
        faqs={marketingFaqs}
        cta={marketingCTA}
      />

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12 mb-16 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

        <h2 className="text-3xl font-bold mb-8 font-heading">Ready to Start Your Journey?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
          <div className="flex flex-col items-center text-center p-4">
            <div className="p-3 bg-background dark:bg-slate-800 rounded-xl shadow-sm mb-4 text-primary"><CreditCard className="w-8 h-8" /></div>
            <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">Flexible Payment</h3>
            <p className="text-sm text-default-500 dark:text-gray-400">Cash, Cards, Forex, & Bank Transfers accepted. Insurance bills provided.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="p-3 bg-background dark:bg-slate-800 rounded-xl shadow-sm mb-4 text-primary"><Calendar className="w-8 h-8" /></div>
            <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">Fast-Track Care</h3>
            <p className="text-sm text-default-500 dark:text-gray-400">Full mouth rehabilitation in 5-10 days. Pre-planned schedules.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="p-3 bg-background dark:bg-slate-800 rounded-xl shadow-sm mb-4 text-primary"><Phone className="w-8 h-8" /></div>
            <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">Direct Contact</h3>
            <p className="text-sm text-default-500 dark:text-gray-400">Direct access to coordinators via WhatsApp for instant answers.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button as={Link} href="https://wa.me/917010650063" target="_blank" color="success" size="lg" className="font-bold text-white shadow-lg shadow-success/20" startContent={<Phone className="w-4 h-4" />}>
            WhatsApp Dr. Rockson
          </Button>
          <Button as={Link} href="/contact" variant="bordered" color="primary" size="lg" className="font-bold border-2">
            Book Video Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
