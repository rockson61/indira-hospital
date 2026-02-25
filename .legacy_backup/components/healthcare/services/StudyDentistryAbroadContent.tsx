'use client'

import React from 'react'
import Link from 'next/link'
import { GraduationCap, Globe, BookOpen, CheckCircle, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@heroui/react'
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card'

export function StudyDentistryAbroadContent() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-primary/90 text-primary-foreground dark:bg-primary/20 dark:text-foreground">
                <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                </div>
                <div className="container relative z-10 px-4 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/20 backdrop-blur-md border border-white/20 mb-8 shadow-xl animate-fade-in-up">
                        <GraduationCap className="w-5 h-5 mr-2 text-warning" />
                        <span className="text-sm font-bold tracking-wide">Future Dentists Program</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-heading">
                        Study Dentistry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400">Abroad</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 dark:text-default-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Your gateway to world-class dental education. Honest guidance, affordable universities, and complete seamless admission support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-100">
                        <Button
                            as={Link}
                            href="/contact"
                            size="lg"
                            color="warning"
                            variant="shadow"
                            className="font-bold text-black"
                            endContent={<ArrowRight className="w-4 h-4" />}
                        >
                            Free Counseling Session
                        </Button>
                        <Button
                            as={Link}
                            href="#universities"
                            size="lg"
                            variant="bordered"
                            className="font-bold border-white/50 text-white hover:bg-card/10 dark:border-default-200 dark:text-foreground"
                        >
                            Explore Universities
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-4 bg-default-50/50 dark:bg-background">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">Why Study Dentistry Abroad?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Globe, title: "Global Recognition", desc: "Degrees recognized by WHO, DCI, and global medical councils." },
                            { icon: BookOpen, title: "Affordable Education", desc: "Tuition fees significantly lower than private colleges in India." },
                            { icon: CheckCircle, title: "No Capitation Fees", desc: "Merit-based admission with zero donation or hidden charges." }
                        ].map((item, idx) => (
                            <ModernCard key={idx} className="group hover:-translate-y-2 transition-all duration-300 border-none shadow-lg bg-background dark:bg-default-50/5">
                                <ModernCardContent className="p-8">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-default-500 leading-relaxed">{item.desc}</p>
                                </ModernCardContent>
                            </ModernCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/90 dark:bg-primary/10 z-0">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white dark:text-foreground font-heading">Start Your Dental Journey Today</h2>
                    <p className="text-xl text-white/90 dark:text-default-500 mb-10 max-w-2xl mx-auto">
                        Get personalized guidance from Dr. Rockson Samuel's team for admissions in Top Medical Universities.
                    </p>
                    <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            as={Link}
                            href="tel:+917010650063"
                            size="lg"
                            className="bg-card text-primary font-bold shadow-xl hover:bg-muted dark:bg-primary dark:text-white"
                            startContent={<Phone className="w-5 h-5" />}
                        >
                            Call: +91 70106 50063
                        </Button>
                        <Button
                            as={Link}
                            href="https://wa.me/917010650063"
                            size="lg"
                            variant="bordered"
                            className="border-white text-white hover:bg-card/10 dark:border-default-200 dark:text-foreground font-bold"
                        >
                            WhatsApp Us
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
