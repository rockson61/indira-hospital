"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown } from "lucide-react";
import { clinicConfig } from "@/lib/data/clinic-config";
import { FOOTER_LINKS } from "@/lib/data/footer-links";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
    const whatsappUrl = `https://wa.me/${clinicConfig.phone ? clinicConfig.phone.replace(/\D/g, '') : ''}`;
    const address = clinicConfig.address;
    const phone = clinicConfig.phone;

    const currentYear = new Date().getFullYear();

    const FooterColumn = ({ title, links }: { title: string, links: { name: string, url: string }[] }) => (
        <div className="space-y-4">
            <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wider">{title}</h5>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.url} className="text-xs text-gray-600 hover:text-purple-700 transition-colors block leading-relaxed hover:underline decoration-purple-200 underline-offset-2">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 mt-12" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Mobile Accordion View */}
                <div className="lg:hidden mb-12">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="Indira Hospital Logo" className="h-10 w-auto" />
                        </Link>
                        <p className="text-sm text-gray-600 mb-6">
                            Indira Super Speciality Hospital is a leading healthcare provider in Vellore, dedicated to clinical excellence and patient care.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Twitter} href="#" />
                            <SocialLink icon={Linkedin} href="#" />
                            <SocialLink icon={Youtube} href="#" />
                        </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <FooterAccordionItem title="Medical Specialties" links={FOOTER_LINKS.medicalServices} />
                        <FooterAccordionItem title="Treatments & Procedures" links={FOOTER_LINKS.procedures} />
                        <FooterAccordionItem title="Health Library (Symptoms)" links={FOOTER_LINKS.healthLibrary} />
                        <FooterAccordionItem title="Advanced Technology" links={FOOTER_LINKS.technology} />
                        <FooterAccordionItem title="Our Locations" links={FOOTER_LINKS.locations} />
                    </Accordion>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-5 gap-8 mb-16">
                    <div className="col-span-1 space-y-6">
                        <Link href="/" className="block">
                            <span className="text-2xl font-bold gradient-text text-purple-800">Indira Hospital</span>
                        </Link>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Trusted by 1 Lakh+ patients for over 25 years. We combine medical expertise with compassionate care.
                        </p>
                        <div className="flex space-x-3">
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Youtube} href="#" />
                        </div>
                        <div className="pt-4 space-y-3">
                            <a href={`tel:${phone}`} className="flex items-center space-x-2 text-sm font-semibold text-gray-800 hover:text-purple-700">
                                <Phone className="w-4 h-4" /> <span>{phone}</span>
                            </a>
                            <a href={whatsappUrl} className="flex items-center space-x-2 text-sm font-semibold text-green-600 hover:text-green-700">
                                <MessageCircle className="w-4 h-4" /> <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>

                    <FooterColumn title="Medical Specialties" links={FOOTER_LINKS.medicalServices} />
                    <FooterColumn title="Treatments" links={FOOTER_LINKS.procedures} />
                    <FooterColumn title="Health Library" links={FOOTER_LINKS.healthLibrary} />
                    <div className="space-y-8">
                        <FooterColumn title="Technology" links={FOOTER_LINKS.technology} />
                        <FooterColumn title="Locations" links={FOOTER_LINKS.locations} />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div>
                        &copy; {currentYear} Indira Super Speciality Hospital. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/privacy-policy" className="hover:text-purple-700">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-purple-700">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="hover:text-purple-700">Sitemap</Link>
                        <Link href="/glossary" className="hover:text-purple-700 font-medium text-purple-600">Medical Glossary</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialLink = ({ icon: Icon, href }: { icon: React.ElementType, href: string }) => (
    <a href={href} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-purple-100 hover:text-purple-700 transition-colors">
        <Icon className="w-4 h-4" />
    </a>
);

const FooterAccordionItem = ({ title, links }: { title: string, links: { name: string, url: string }[] }) => (
    <AccordionItem value={title} className="border-b border-gray-200 last:border-0">
        <AccordionTrigger className="text-sm font-semibold text-gray-800 hover:text-purple-700 py-3">
            {title}
        </AccordionTrigger>
        <AccordionContent>
            <ul className="space-y-2 pb-4 pl-1">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.url} className="text-sm text-gray-600 hover:text-purple-700 block">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </AccordionContent>
    </AccordionItem>
);
