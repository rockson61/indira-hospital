import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-20">
                <SectionContainer>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        We are here to help. Reach out to us for enquiries, appointments, or emergency support.
                    </p>
                </SectionContainer>
            </div>

            <SectionContainer className="py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900">Main Hospital</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Address</h3>
                                        <p className="text-muted-foreground">
                                            No. 12, Gandhi Road,<br />
                                            Near New Bus Stand,<br />
                                            Vellore, Tamil Nadu - 632004
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Phone</h3>
                                        <p className="text-muted-foreground">+91 0416 224 8888 (Emergency)</p>
                                        <p className="text-muted-foreground">+91 0416 222 3333 (General)</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Email</h3>
                                        <p className="text-muted-foreground">info@indirahospital.com</p>
                                        <p className="text-muted-foreground">careers@indirahospital.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Visiting Hours</h3>
                                        <p className="text-muted-foreground">Mon - Sun: 10:00 AM - 12:00 PM</p>
                                        <p className="text-muted-foreground">Evening: 4:00 PM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Container */}
                        <div className="h-80 bg-slate-100 rounded-xl overflow-hidden border">
                            {/* Placeholder for Google Map Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0838965825227!2d79.1325!3d12.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA2LjIiTiA3OcKwMDcnNTcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white p-8 rounded-2xl border shadow-lg h-fit">
                        <h2 className="text-2xl font-bold mb-6">Send an Enquiry</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <Input placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <Input placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone</label>
                                <Input placeholder="+91 98765 00000" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <Textarea className="min-h-[120px]" placeholder="How can we help you?" />
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
