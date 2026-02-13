'use client'

import React from 'react'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle, Phone, Calendar, MapPin, Star, Award, Users, Shield, Clock } from 'lucide-react'
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
      title: "General Dentistry",
      description: "Regular checkups, cleanings, and preventive care",
      icon: Shield,
      link: "/services/general-dentistry"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers",
      icon: Star,
      link: "/services/cosmetic-dentistry"
    },
    {
      title: "Restorative Dentistry",
      description: "Dental implants, bridges, and root canal treatment",
      icon: Award,
      link: "/services/restorative-dentistry"
    },
    {
      title: "Emergency Care",
      description: "Quick relief for dental emergencies",
      icon: Clock,
      link: "/services/emergency-dentistry"
    }
  ]

  const locationServices = [
    { name: "Dentist in Vellore", href: "/dentist-near-me/in/tamil-nadu/vellore" },
    { name: "Dentist in Katpadi", href: "/dentist-near-me/in/tamil-nadu/vellore/katpadi" },
    { name: "Dentist in Gandhi Nagar", href: "/dentist-near-me/in/tamil-nadu/vellore/gandhi-nagar" },
    { name: "Dentist in Sathuvachari", href: "/dentist-near-me/in/tamil-nadu/vellore/sathuvachari" },
    { name: "Dentist in Bagayam", href: "/dentist-near-me/in/tamil-nadu/vellore/bagayam" },
    { name: "Dentist in Ranipet", href: "/dentist-near-me/in/tamil-nadu/ranipet" }
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
            <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 text-sm font-semibold">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Best Dental Clinics in {locationName}: Find the Right Dentist for Your Needs
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              {locationName} is home to some of the best dental clinics, offering top-notch services for patients seeking quality dental care.
              Whether you're looking for a dentist in {locationName} for routine checkups, dental implants, or cosmetic dentistry,
              this guide will help you find the best options available.
            </p>
          </div>

          {/* Why Choose Vellore Section */}
          <div className="mb-12">
            <ModernCard className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose a Dental Clinic in {locationName}?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {locationName} is known for its top dentists and advanced dental care facilities. The city offers affordable dental care
                  without compromising on quality. Many clinics use cutting-edge technology for treatments like dental implants,
                  root canal therapy, and cosmetic dental procedures.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  At Indira Dental Clinic, we combine years of expertise with modern dental technology to provide exceptional care.
                  Our central location in {locationName} makes us accessible to patients from all areas, and our comprehensive range of
                  services means you can address all your dental needs under one roof.
                </p>
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* Services We Offer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Services We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((service, index) => (
                <ModernCard key={index} hover className="h-full text-center">
                  <ModernCardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <ModernCardTitle className="text-lg">{service.title}</ModernCardTitle>
                  </ModernCardHeader>
                  <ModernCardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
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
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">FAQs on Dental Care</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-teal-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Dental Knowledge Hub */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Top Dental Clinic Near Me India</h2>

            {/* Location Services */}
            <ModernCard className="mb-6">
              <ModernCardContent className="py-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  <Link href="/dentist-near-me/locations" className="text-foreground hover:text-teal-600 transition-colors">
                    Find a Dentist Near You
                  </Link>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {locationServices.map((location, index) => (
                    <Link
                      key={index}
                      href={location.href}
                      className="inline-flex items-center justify-center px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors"
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
                  <h4 className="text-lg font-semibold text-foreground mb-4">Specialized Dental Services</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• <Link href="/services/emergency-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Emergency Dental Care</Link></li>
                    <li>• <Link href="/services/pediatric-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Children's Dentistry</Link></li>
                    <li>• <Link href="/services/general-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Geriatric Dentistry</Link></li>
                    <li>• <Link href="/services/sedation-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Sedation Dentistry</Link></li>
                    <li>• <Link href="/services/specialized-services/laser-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Laser Dentistry</Link></li>
                    <li>• <Link href="/services/dental-radiology" className="text-teal-600 hover:text-teal-700 hover:underline">Digital Dentistry</Link></li>
                    <li>• <Link href="/dental-tourism" className="text-teal-600 hover:text-teal-700 hover:underline">Dental Tourism</Link></li>
                    <li>• <Link href="/services/prosthodontics" className="text-teal-600 hover:text-teal-700 hover:underline">Full Mouth Rehabilitation</Link></li>
                  </ul>
                </ModernCardContent>
              </ModernCard>

              <ModernCard>
                <ModernCardContent className="py-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Top-Rated Specialists</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• <Link href="/dentist-near-me" className="text-teal-600 hover:text-teal-700 hover:underline">Best Dental Clinic in {locationName}</Link></li>
                    <li>• <Link href="/about-us/dr-rockson-samuel" className="text-teal-600 hover:text-teal-700 hover:underline">Top Dentist in {locationName}</Link></li>
                    <li>• <Link href="/services/dental-implants" className="text-teal-600 hover:text-teal-700 hover:underline">Best Implant Dentist</Link></li>
                    <li>• <Link href="/services/endodontics" className="text-teal-600 hover:text-teal-700 hover:underline">Root Canal Specialist</Link></li>
                    <li>• <Link href="/services/orthodontics" className="text-teal-600 hover:text-teal-700 hover:underline">Orthodontist in {locationName}</Link></li>
                    <li>• <Link href="/services/cosmetic-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Cosmetic Dentist</Link></li>
                    <li>• <Link href="/services/pediatric-dentistry" className="text-teal-600 hover:text-teal-700 hover:underline">Pediatric Dentist</Link></li>
                    <li>• <Link href="/services/oral-surgery" className="text-teal-600 hover:text-teal-700 hover:underline">Oral Surgeon</Link></li>
                  </ul>
                </ModernCardContent>
              </ModernCard>
            </div>
          </div>

          {/* Cost Information */}
          <div className="mb-12">
            <ModernCard className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Cost of Dental Treatments in {locationName}</h3>
                <p className="text-foreground/80 mb-6">
                  The cost of dental procedures at Indira Dental Clinic varies based on treatment type. We offer competitive pricing
                  and significant savings compared to other cities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹30,000 - ₹60,000</div>
                    <div className="text-muted-foreground">Dental Implants</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹5,000 - ₹12,000</div>
                    <div className="text-muted-foreground">Root Canal Treatment</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹25,000 - ₹80,000</div>
                    <div className="text-muted-foreground">Braces</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-xl font-bold text-teal-600">₹5,000 - ₹15,000</div>
                    <div className="text-muted-foreground">Teeth Whitening</div>
                  </div>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <ModernCardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">Book Your Appointment Today</h3>
                <p className="text-lg mb-6">
                  At Indira Dental Clinic, we make it easy to schedule your dental appointment. Whether you need a regular
                  dental checkup or specialized treatment, scheduling in advance ensures timely care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-card hover:bg-muted text-teal-600">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 7010650063
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-card hover:text-teal-600">
                    <Link href="/services">
                      <Calendar className="w-5 h-5 mr-2" />
                      View All Services
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
