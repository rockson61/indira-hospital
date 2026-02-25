'use client'

import { ModernCard, ModernCardContent } from "@/components/ui/modern-card"
import Link from 'next/link'
import { ArrowRight, Drill, Sparkles, Smile, Crown, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"
import { servicesData } from "@/lib/data/services-data"

// Services are loaded from lib/data/services-data.tsx
const services = servicesData;

interface ServicesOverviewProps {
    locationName?: string
}

export function ServicesOverview({ locationName }: ServicesOverviewProps) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 font-heading text-foreground">
                        Our Dental Services {locationName ? `in ${locationName}` : ""}
                    </h2>
                    <p className="text-default-500 max-w-2xl mx-auto">
                        World-class dental care delivered with precision and compassion.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link key={index} href={service.href} className="block group h-full">
                            <ModernCard className="h-full hover:border-primary/50 transition-colors duration-300">
                                <ModernCardContent className="p-6 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <service.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 font-heading text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-default-500 mb-6 flex-1 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform">
                                        {locationName ? `${service.title} in ${locationName}` : "Learn More"}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </ModernCardContent>
                            </ModernCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
