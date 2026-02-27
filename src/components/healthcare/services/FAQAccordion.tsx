'use client'

import React from 'react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, Phone, Calendar, MapPin, Heart, Activity, Stethoscope, Shield, Clock, Baby } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface ComprehensiveFAQSectionProps {
  locationName?: string
}

// Use centralized data
import { comprehensiveFaqs } from "@/lib/data/faq-data"

export function ComprehensiveFAQSection({ locationName = "Vellore" }: ComprehensiveFAQSectionProps) {
  const faqs: FAQItem[] = comprehensiveFaqs;

  const serviceCategories = [
    {
      title: "General Surgery",
      description: "Advanced laparoscopic and laser surgeries for piles, hernia, and more.",
      icon: Activity,
      link: "/doctor/near-me/treat/general-surgery"
    },
    {
      title: "Cardiac Sciences",
      description: "24/7 cardiac emergency care and interventional cardiology services.",
      icon: Heart,
      link: "/doctor/near-me/treat/cardiology"
    },
    {
      title: "Obstetrics & Gynaecology",
      description: "Comprehensive women's care including maternity and painless delivery.",
      icon: Baby,
      link: "/doctor/near-me/treat/obstetrics-gynaecology"
    },
    {
      title: "Diagnostics & Imaging",
      description: "NABL accredited lab with 3T MRI and 128-Slice CT scanner.",
      icon: Clock,
      link: "/diagnostics"
    }
  ]

  const locationServices = [
    { name: "Hospital in Vellore", href: "/doctor/near-me/vellore" },
    { name: "Specialists in Katpadi", href: "/doctor/near-me" },
    { name: "Emergency Care Vellore", href: "/doctor/near-me/treat/icu-emergency" },
    { name: "Diagnostics in Ranipet", href: "/diagnostics" },
    { name: "Maternity Care Vellore", href: "/doctor/near-me/treat/obstetrics-gynaecology" },
    { name: "Dialysis Center Vellore", href: "/doctor/near-me/treat/nephrology" }
  ]

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-fuchsia-600 text-fuchsia-700 text-sm font-semibold">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Best Super Speciality Hospital in {locationName}: Comprehensive Care Near You
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Indira Super Speciality Hospital is a leading healthcare provider in {locationName}, offering multi-speciality services including Cardiology, Orthopaedics, Nephrology, and 24/7 Emergency Care.
              Our state-of-the-art facility is equipped with the latest medical technology to ensure the best patient outcomes.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12">
            <ModernCard className="bg-gradient-to-r from-fuchsia-50 to-fuchsia-50 border-fuchsia-200">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Indira Hospital in {locationName}?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {locationName} is a hub for advanced medical care, and Indira Hospital stands out with its commitment to excellence. We offer a 24/7 Emergency and Trauma center, advanced flat-panel Cath Lab, and Modular Operation Theatres.
                  Our team of senior consultants across various super-specialities provides personalized care to every patient.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With over 25 years of healthcare legacy, we combine trust with innovation. Whether you need a routine health checkup or complex surgical intervention, our integrated care model ensures you receive the highest standard of medical attention.
                </p>
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* Services We Offer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Specialities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((service, index) => (
                <ModernCard key={index} hover className="h-full text-center">
                  <ModernCardHeader>
                    <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-fuchsia-600" />
                    </div>
                    <ModernCardTitle className="text-lg">{service.title}</ModernCardTitle>
                  </ModernCardHeader>
                  <ModernCardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                    >
                      Learn More
                    </Link>
                  </ModernCardContent>
                </ModernCard>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-fuchsia-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Knowledge Hub */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Patient Care Resources</h2>

            {/* Location Services */}
            <ModernCard className="mb-6">
              <ModernCardContent className="py-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  <Link href="/doctor/near-me" className="text-foreground hover:text-fuchsia-600 transition-colors">
                    Find Help Near You
                  </Link>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {locationServices.map((location, index) => (
                    <Link
                      key={index}
                      href={location.href}
                      className="inline-flex items-center justify-center px-3 py-2 bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-700 rounded-lg text-sm font-medium hover:bg-fuchsia-100 transition-colors"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Specialized Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModernCard>
                <ModernCardContent className="py-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Super Speciality Services</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• <Link href="/doctor/near-me/treat/cardiology" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Interventional Cardiology</Link></li>
                    <li>• <Link href="/doctor/near-me/treat/orthopaedics" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Joint Replacement Surgery</Link></li>
                    <li>• <Link href="/doctor/near-me/treat/nephrology" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Dialysis & Nephrology</Link></li>
                    <li>• <Link href="/doctor/near-me/treat/general-surgery" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Laparoscopic Surgery</Link></li>
                    <li>• <Link href="/doctor/near-me/treat/icu-emergency" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">24/7 Emergency Care</Link></li>
                    <li>• <Link href="/diagnostics" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Advanced 3T MRI & CT</Link></li>
                    <li>• <Link href="/patients/international" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">International Patient Care</Link></li>
                    <li>• <Link href="/health-packages" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Master Health Checkups</Link></li>
                  </ul>
                </ModernCardContent>
              </ModernCard>

              <ModernCard>
                <ModernCardContent className="py-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Patient Links</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• <Link href="/doctor/near-me" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Find a Specialist</Link></li>
                    <li>• <Link href="/book-appointment" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Book an Appointment</Link></li>
                    <li>• <Link href="/health-packages" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">View Health Packages</Link></li>
                    <li>• <Link href="/diagnostics" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Book Lab Test</Link></li>
                    <li>• <Link href="/about" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">About Indira Hospital</Link></li>
                    <li>• <Link href="/contact" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Contact Us</Link></li>
                    <li>• <Link href="/blog" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">Health Blog</Link></li>
                    <li>• <Link href="/doctor/near-me/treat" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline">All Departments</Link></li>
                  </ul>
                </ModernCardContent>
              </ModernCard>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ModernCard className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-600 text-white">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">Quality Care, Accessible to All</h3>
                <p className="text-lg mb-6">
                  At Indira Hospital, we prioritize your health. Schedule your consultation today with our renowned experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white dark:bg-slate-900 hover:bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-600">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white dark:bg-slate-900 hover:text-fuchsia-600">
                    <Link href="/doctor/near-me">
                      <Calendar className="w-5 h-5 mr-2" />
                      Find Specialist
                    </Link>
                  </Button>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </div>
      </section>
    </>
  )
}

export default ComprehensiveFAQSection
