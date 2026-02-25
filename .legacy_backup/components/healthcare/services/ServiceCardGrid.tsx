'use client'

import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import {
  Smile,
  Shield,
  Zap,
  Heart,
  Baby,
  ArrowRight, CheckCircle, Clock, DollarSign
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/lib/data/services-data';

interface ModernServicesSectionProps {
  locationName?: string;
}

export function ModernServicesSection({ locationName = 'Vellore' }: ModernServicesSectionProps) {
  // Services are now loaded from lib/data/services-data.tsx
  const services = servicesData.map(service => ({
    ...service,
    // Add default color mapping if needed, or rely on component logic
    color: ['primary', 'secondary', 'accent'][servicesData.indexOf(service) % 3] // Cyclic colors
  }));

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-50',
          text: 'text-primary-600',
          border: 'border-primary-200',
          button: 'bg-primary-600 hover:bg-primary-700',
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50',
          text: 'text-secondary-600',
          border: 'border-secondary-200',
          button: 'bg-secondary-600 hover:bg-secondary-700',
        };
      case 'accent':
        return {
          bg: 'bg-accent-50',
          text: 'text-accent-600',
          border: 'border-accent-200',
          button: 'bg-accent-600 hover:bg-accent-700',
        };
      default:
        return {
          bg: 'bg-primary-50',
          text: 'text-primary-600',
          border: 'border-primary-200',
          button: 'bg-primary-600 hover:bg-primary-700',
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-background dark:to-slate-900/50 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Comprehensive Dental Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Expert Dental Care in <span className="text-primary-600">{locationName}</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From routine checkups to complex procedures, we provide comprehensive dental care
            using the latest technology and techniques. Your smile is our priority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);

            return (
              <ModernCard
                key={index}
                variant="elevated"
                hover={true}
                className={`relative overflow-hidden group ${colors.border} border-2`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Service Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{service.description}</p>

                  {/* Price and Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-success-600" />
                      <span className="font-bold text-success-600">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-500">{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {(service.features || []).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <ModernButton
                    variant="default"
                    className={`w-full ${colors.button} text-white`}
                    asChild
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </ModernButton>
                </div>
              </ModernCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <ModernCard variant="glass" className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Need Help Choosing the Right Treatment?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our experienced team is here to help you understand your options and create a
              personalized treatment plan that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton size="lg" variant="gradient" asChild>
                <a href="tel:7010650063">
                  📞 Call for Consultation
                </a>
              </ModernButton>
              <ModernButton size="lg" variant="outline" asChild>
                <Link href="/contact">
                  📅 Book Appointment
                </Link>
              </ModernButton>
            </div>
          </ModernCard>
        </div>
      </div>
    </section>
  );
}
