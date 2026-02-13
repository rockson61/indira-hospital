"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

import { clinicConfig } from "@/lib/data/clinic-config";

export function Footer() {
    const whatsappUrl = `https://wa.me/${clinicConfig.phone ? clinicConfig.phone.replace(/\D/g, '') : ''}`;
    const address = clinicConfig.address;
    const phone = clinicConfig.phone;

    return (
        <footer className="clay-card mx-4 mb-4 mt-12" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center space-x-3 group" aria-label="Indira Hospital Home">
                            <span className="text-xl font-bold gradient-text text-purple-800">Indira Hospital</span>
                        </Link>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {clinicConfig.name} is your premier healthcare destination in Vellore. We offer world-class medical services with a focus on patient care and advanced technology.
                        </p>
                        <address className="flex items-start space-x-3 not-italic">
                            <MapPin className="w-4 h-4 text-purple-700 mt-1 flex-shrink-0" aria-hidden="true" />
                            <p className="text-sm text-gray-600 leading-relaxed">{address}</p>
                        </address>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Phone className="w-4 h-4 text-purple-700" aria-hidden="true" />
                            <a href={`tel:${phone}`} className="hover:text-purple-700 transition-colors" aria-label="Call Indira Hospital">{phone}</a>
                        </div>
                        <div className="flex items-center space-x-4 pt-2">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-purple-700 transition-colors" aria-label="WhatsApp Indira Hospital">
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Departments */}
                    <nav aria-label="Departments">
                        <h5 className="font-semibold text-gray-800 mb-4">Departments</h5>
                        <ul className="space-y-2" role="list">
                            <li role="listitem"><Link href="/departments/cardiology" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Cardiology</Link></li>
                            <li role="listitem"><Link href="/departments/neurology" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Neurology</Link></li>
                            <li role="listitem"><Link href="/departments/orthopaedics" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Orthopaedics</Link></li>
                            <li role="listitem"><Link href="/departments/gastroenterology" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Gastroenterology</Link></li>
                            <li role="listitem"><Link href="/departments/oncology" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Oncology</Link></li>
                            <li role="listitem"><Link href="/departments/urology" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Urology</Link></li>
                            <li role="listitem"><Link href="/departments/nephrology" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Nephrology</Link></li>
                            <li role="listitem"><Link href="/departments/dental" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Dental</Link></li>
                        </ul>
                    </nav>

                    {/* Quick Links */}
                    <nav aria-label="Quick Links">
                        <h5 className="font-semibold text-gray-800 mb-4">Quick Links</h5>
                        <ul className="space-y-2" role="list">
                            <li role="listitem"><Link href="/about" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">About Us</Link></li>
                            <li role="listitem"><Link href="/doctors" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Our Doctors</Link></li>
                            <li role="listitem"><Link href="/contact" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Contact Us</Link></li>
                            <li role="listitem"><Link href="/patients/insurance" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Insurance</Link></li>
                            <li role="listitem"><Link href="/blog" className="text-sm text-gray-600 hover:text-purple-700 transition-colors">Health Blog</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Indira Super Speciality Hospital. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
