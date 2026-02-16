import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { PageHero } from "@/components/ui/page-hero";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Emergency & Appointments | Indira Super Speciality Hospital",
    description: "Get in touch with Indira Super Speciality Hospital, Vellore. 24/7 Emergency: +91 0416 224 8888. Book appointments, find directions, or send an enquiry.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pb-20 bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <SectionContainer className="pt-28 pb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4 block">Available 24/7</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Can We Help?</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Whether you need an appointment, have an enquiry, or require emergency assistance,
                        our dedicated team is here to support you at every step.
                    </p>
                </div>
            </SectionContainer>

            <SectionContainer className="py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Main Hospital</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 dark:text-white">Address</h3>
                                        <p className="text-muted-foreground">
                                            No. 12, Gandhi Road,<br />
                                            Near New Bus Stand,<br />
                                            Vellore, Tamil Nadu - 632004
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 dark:text-white">Phone</h3>
                                        <p className="text-muted-foreground">+91 0416 224 8888 (Emergency)</p>
                                        <p className="text-muted-foreground">+91 0416 222 3333 (General)</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6 text-purple-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 text-gray-900">Email Enquiries</h3>
                                        <p className="text-gray-500 text-sm">info@indirasuperspecialityhospital.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 dark:text-white">Visiting Hours</h3>
                                        <p className="text-muted-foreground">Mon - Sun: 10:00 AM - 12:00 PM</p>
                                        <p className="text-muted-foreground">Evening: 4:00 PM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Container */}
                        <div className="h-80 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0838965825227!2d79.1325!3d12.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA2LjIiTiA3OcKwMDcnNTcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                aria-label="Google Map of Indira Hospital Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl h-fit relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h2 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">Send an Enquiry</h2>
                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">First Name</label>
                                    <Input placeholder="John" className="bg-gray-50 border-transparent focus:bg-white focus:border-purple-200 h-12 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Last Name</label>
                                    <Input placeholder="Doe" className="bg-gray-50 border-transparent focus:bg-white focus:border-purple-200 h-12 rounded-xl" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</label>
                                <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-transparent focus:bg-white focus:border-purple-200 h-12 rounded-xl" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone</label>
                                <Input placeholder="+91 98765 00000" className="bg-gray-50 border-transparent focus:bg-white focus:border-purple-200 h-12 rounded-xl" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                                <Textarea className="min-h-[120px] bg-gray-50 border-transparent focus:bg-white focus:border-purple-200 rounded-xl" placeholder="How can we help you?" />
                            </div>

                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-14 rounded-xl text-lg shadow-lg shadow-purple-600/20" size="lg">Submit Message</Button>
                        </form>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
