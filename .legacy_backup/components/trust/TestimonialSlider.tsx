'use client'

import { Button } from "@heroui/react";
import Link from 'next/link';
import { ModernCard } from '@/components/ui/modern-card';
import { Star, Quote, User, Calendar, MapPin, Phone } from 'lucide-react';
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ModernTestimonialsSectionProps {
  locationName?: string;
}

// Move static data outside component to prevent recreation on every render
// Use centralized data
import { testimonials } from "@/lib/data/testimonials-data"

// Filter or use a subset if needed, or just use all
const TESTIMONIALS = testimonials.slice(0, 6); // Keep original count 6 for this slider

export function ModernTestimonialsSection({ locationName = 'Vellore' }: ModernTestimonialsSectionProps) {

  return (
    <section className="py-20 testimonials-gradient transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-4"
          >
            <Quote className="w-4 h-4 mr-2" />
            Patient Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading"
          >
            What Our Patients Say About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-default-600 dark:text-default-400 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our patients have to say about their
            experience at Indira Dental Clinic in {locationName}.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ModernCard
                variant="elevated"
                hover={true}
                className="p-6 relative overflow-hidden h-full bg-card dark:bg-card/50"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-default-600 dark:text-default-400">({testimonial.rating}/5)</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground dark:text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <div className="w-4 h-4 bg-success-500 rounded-full flex items-center justify-center" title="Verified Patient">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-default-600 dark:text-default-400">{testimonial.treatment}</p>
                    <div className="flex items-center gap-2 text-xs text-default-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                      <span>•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </ModernCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-neutral-200 dark:border-neutral-800 py-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5000+</div>
            <div className="text-default-600 dark:text-default-400">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">4.9/5</div>
            <div className="text-default-600 dark:text-default-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
            <div className="text-default-600 dark:text-default-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
            <div className="text-default-600 dark:text-default-400">Reviews</div>
          </div>
        </div>

        {/* Related Q&A and Services Widgets */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget
              title="Patient Questions"
              questions={[
                {
                  id: '1',
                  title: 'What should I expect during my first visit?',
                  slug: 'first-dental-visit-expectations',
                  excerpt: 'Learn what to expect during your first visit to Indira Dental Clinic.',
                  helpfulVotes: 45,
                  views: 1200,
                  createdAt: '2023-12-26T10:30:00Z'
                },
                {
                  id: '2',
                  title: 'How do I prepare for dental treatment?',
                  slug: 'preparing-for-dental-treatment',
                  excerpt: 'Get tips on how to prepare for your dental treatment appointment.',
                  helpfulVotes: 38,
                  views: 980,
                  createdAt: '2023-12-25T14:15:00Z'
                },
                {
                  id: '3',
                  title: 'What payment options are available?',
                  slug: 'dental-treatment-payment-options',
                  excerpt: 'Learn about flexible payment plans and insurance options available.',
                  helpfulVotes: 42,
                  views: 1100,
                  createdAt: '2023-12-24T09:45:00Z'
                }
              ]}
              serviceName="dental care"
            />

            <CompactServiceWidget
              title="Popular Treatments"
              description="Most requested dental treatments by our patients."
              services={[
                { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
                { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
                { name: "Teeth Whitening", slug: "cosmetic-dentistry/teeth-whitening", price: "₹5,000 - ₹15,000", duration: "1-2 hours" },
                { name: "Dental Crowns", slug: "restorative-dentistry/crowns", price: "₹8,000 - ₹15,000", duration: "2 visits" }
              ]}
              ctaText="View All Services"
              ctaLink="/services"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <ModernCard variant="glass" className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Happy Patients?
            </h3>
            <p className="text-default-600 dark:text-default-400 mb-6 max-w-2xl mx-auto">
              Experience the same quality care and exceptional results that our patients rave about.
              Book your appointment today and start your journey to a healthier, more beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="primary"
                size="lg"
                startContent={<Phone className="w-5 h-5" />}
                className="font-bold"
                as={Link}
                href="tel:7010650063"
              >
                Call: 7010650063
              </Button>
              <Button
                variant="bordered"
                size="lg"
                startContent={<Calendar className="w-5 h-5" />}
                className="font-bold"
                as={Link}
                href="/contact"
              >
                Book Appointment
              </Button>
            </div>
          </ModernCard>
        </div>
      </div>
    </section>
  );
}
