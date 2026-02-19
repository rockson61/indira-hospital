"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { safeRemoveNode } from "@/lib/utils"; // Assuming utils exists or safeDom needs copying

import { clinicConfig } from "@/lib/data/clinic-config";

// ... (keep utility)
const createPageUrl = (pageWithSlashOrName: string) => {
    if (pageWithSlashOrName.startsWith('/')) return pageWithSlashOrName;
    if (pageWithSlashOrName === 'Home') return '/';
    return `/${pageWithSlashOrName}`;
};

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);

    const whatsappUrl = `https://wa.me/${clinicConfig.phone ? clinicConfig.phone.replace(/\D/g, '') : ''}`;
    const phone = clinicConfig.phone;

    const isActivePage = (url: string) => {
        if (url === '/') return pathname === '/';
        return pathname.startsWith(url);
    };

    const navigationItems = useMemo(() => [
        { name: "Home", url: "/" },
        {
            name: "About", submenu: [
                { name: "Our Story", url: "/about", description: "Learn about our mission and values." },
                { name: "Our Doctors", url: "/doctors", description: "Meet our team of expert specialists." },
            ]
        },
        {
            name: "Specialties", submenu: [
                { name: "Proctology", url: "/departments/general-surgery", description: "Advanced laser treatment for piles, fissures, and fistulas." },
                { name: "Laparoscopy", url: "/departments/laparoscopic-surgeries", description: "Minimally invasive keyhole surgeries for faster recovery." },
                { name: "Gynaecology", url: "/departments/obstetrics-gynaecology", description: "Comprehensive care for women's health and maternity." },
                { name: "ENT", url: "/departments/ent", description: "Expert care for ear, nose, and throat disorders." },
                { name: "Urology", url: "/departments/urology", description: "Advanced treatment for kidney stones and prostate issues." },
                { name: "Vascular", url: "/departments/vascular-surgery", description: "Comprehensive care for vascular and circulatory health." },
                { name: "Aesthetics", url: "/departments/cosmetology-plastic-surgery", description: "Advanced cosmetic and plastic surgery solutions." },
                { name: "Orthopedics", url: "/departments/orthopaedics", description: "Expert bone, joint, and trauma care." },
                { name: "Ophthalmology", url: "/departments/opthalmology", description: "Advanced vision correction and eye care services." },
                { name: "Fertility", url: "/departments/obstetrics-gynecology-reproductive-medicine", description: "Comprehensive fertility and reproductive health care." },
                { name: "Weight Loss", url: "/departments/bariatrics", description: "Advanced surgical and medical weight loss solutions." },
                { name: "Dermatology", url: "/departments/dermatology", description: "Expert diagnosis and treatment for all skin conditions." },
                { name: "Our Hospitals", url: "/locations", description: "Find an Indira Hospital location near you." },
            ]
        },
        {
            name: "Diagnostics", url: "/diagnostics"
        },
        {
            name: "Technology", url: "/technology"
        },
        {
            name: "Patients", submenu: [
                { name: "Book Appointment", url: "/book-appointment", description: "Schedule your visit." },
                { name: "International Care", url: "/patients/international", description: "Global medical tourism support." },
                { name: "Health Packages", url: "/health-packages", description: "Preventive health checkup plans." },
                { name: "Patient FAQs", url: "/faq", description: "Common questions and help." },
                { name: "Join Our Team (Careers)", url: "/careers", description: "Careers at Indira Hospital." },
                { name: "Insurance", url: "/patients/insurance", description: "Tax & Insurance info." },
                { name: "Latest News (Blog)", url: "/blog", description: "Health tips and hospital updates." },
            ]
        },
        { name: "Contact", url: "/contact" }
    ], []);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
          --clay-gradient: linear-gradient(135deg, #f5f5f5 0%, #ffffff 50%, #f0f0f0 100%);
          --clay-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8);
          --clay-shadow-hover: 0 12px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .clay-card {
          background: var(--clay-gradient);
          box-shadow: var(--clay-shadow);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
        }
        .clay-card:hover {
          box-shadow: var(--clay-shadow-hover);
        }
        .clay-button {
          background: var(--clay-gradient);
          box-shadow: var(--clay-shadow);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, #d946ef 100%); /* Brand Purple Gradient */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-primary {
          background: linear-gradient(135deg, var(--primary) 0%, #a21caf 100%); /* Purple gradient */
          color: white;
          box-shadow: 0 4px 15px rgba(132, 31, 116, 0.3);
          border: none;
          transition: all 0.3s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(132, 31, 116, 0.4);
        }
        @keyframes custom-pulse {
          0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
          100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
        }
        .emergency-pulse {
          animation: custom-pulse 2s infinite;
        }
      `}} />

            <header className="sticky top-0 z-50 clay-card mx-4 mt-4 mb-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center space-x-3 group min-w-[200px]">
                            <img src="/logo.png" alt="Indira Hospital Logo" className="h-12 w-auto object-contain" />
                            {/* <span className="text-2xl font-bold gradient-text">Indira Hospital</span> */}
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.submenu ? (
                                        <div className="relative">
                                            <button
                                                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.submenu.some(sub => isActivePage(sub.url))
                                                    ? 'text-purple-700 bg-purple-50'
                                                    : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                                                    }`}
                                                onMouseEnter={() => setOpenMegaMenu(item.name)}
                                                aria-expanded={openMegaMenu === item.name}
                                                aria-haspopup="true"
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>

                                            {openMegaMenu === item.name && (
                                                <nav
                                                    className="absolute top-full left-0 mt-2 w-80 clay-card p-4 z-50"
                                                    onMouseEnter={() => setOpenMegaMenu(item.name)}
                                                    onMouseLeave={() => setOpenMegaMenu(null)}
                                                    aria-label={`${item.name} submenu`}
                                                >
                                                    <ul className="space-y-2" role="list">
                                                        {item.submenu.map((subItem) => (
                                                            <li key={subItem.name} role="listitem">
                                                                <Link
                                                                    href={subItem.url}
                                                                    className={`block p-3 rounded-lg transition-colors ${isActivePage(subItem.url)
                                                                        ? 'bg-purple-100 text-purple-800'
                                                                        : 'hover:bg-purple-50'
                                                                        }`}
                                                                >
                                                                    <h6 className="font-medium text-gray-800 text-sm">{subItem.name}</h6>
                                                                    <div className="text-xs text-gray-600 mt-1">{subItem.description}</div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </nav>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.url}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActivePage(item.url)
                                                ? 'text-purple-700 bg-purple-50'
                                                : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center space-x-3">
                            <a href="tel:+917010650063" className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-bold emergency-pulse hover:bg-red-700 transition-all">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                                <span>Emergency 24/7</span>
                            </a>
                            <a href={`tel:${phone}`} className="flex items-center space-x-2 px-3 py-2 clay-button text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors">
                                <Phone className="h-4 w-4" />
                                <span className="hidden xl:inline">{phone}</span>
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg cta-primary"
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>Book Now</span>
                            </a>
                        </div>

                        <button
                            className="lg:hidden clay-button p-2 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="lg:hidden pb-4">
                            <Accordion type="single" collapsible className="w-full">
                                {navigationItems.map((item) => (
                                    <div key={item.name}>
                                        {item.submenu ? (
                                            <AccordionItem value={item.name} className="border-none">
                                                <AccordionTrigger className="text-left font-medium text-gray-700 hover:text-purple-700 py-3 px-2">
                                                    {item.name}
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-2">
                                                    <nav aria-label={`${item.name} submenu`}>
                                                        <ul className="pl-4 space-y-2" role="list">
                                                            {item.submenu.map((subItem) => (
                                                                <li key={subItem.name} role="listitem">
                                                                    <Link
                                                                        href={subItem.url}
                                                                        className={`block py-2 px-2 text-sm rounded ${isActivePage(subItem.url)
                                                                            ? 'text-purple-700 bg-purple-50'
                                                                            : 'text-gray-600 hover:text-purple-700'
                                                                            }`}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                    >
                                                                        <h6 className="font-medium">{subItem.name}</h6>
                                                                        <div className="text-xs text-gray-500">{subItem.description}</div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </nav>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ) : (
                                            <Link
                                                href={item.url}
                                                className={`block py-3 px-2 font-medium rounded ${isActivePage(item.url)
                                                    ? 'text-purple-700 bg-purple-50'
                                                    : 'text-gray-700 hover:text-purple-700'
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </Accordion>

                            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                                <a
                                    href={`tel:${phone}`}
                                    className="flex items-center space-x-2 w-full p-3 clay-button text-gray-700 hover:text-purple-700"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>{phone}</span>
                                </a>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 w-full p-3 font-medium rounded-lg cta-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span>Book Appointment</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
