'use client'

import Link from 'next/link'
import { Sparkles, Star, Camera, CheckCircle, Clock } from 'lucide-react'

export function CosmeticDentistryContent() {
    return (
        <div className="space-y-12">
            {/* Introduction */}
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Expert Cosmetic Dentist in Vellore</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    <strong>Smile makeover cost: ₹50,000–₹3,00,000. 1,000+ successful transformations.</strong> Transform your smile with world-class cosmetic dentistry at Indira Dental Clinic.
                    Dr. Rockson Samuel combines artistic vision with advanced dental technology to create stunning, natural-looking smiles.
                    Whether you want to brighten your teeth, fix chips, or get a complete <Link href="/services/cosmetic-dentistry/smile-makeover" className="text-teal-600 font-semibold hover:underline">Hollywood Smile Makeover</Link>,
                    we offer personalized solutions tailored to your facial features. <strong>Flexible EMI options available.</strong>
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                        <Star className="w-5 h-5 text-teal-600 mr-2" />
                        Why Choose Us?
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start text-foreground/80">
                            <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 shrink-0" />
                            <span><strong>Digital Smile Design:</strong> See your future smile <i>before</i> we start.</span>
                        </li>
                        <li className="flex items-start text-foreground/80">
                            <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 shrink-0" />
                            <span><strong>Minimally Invasive:</strong> Preserving natural tooth structure is our priority.</span>
                        </li>
                        <li className="flex items-start text-foreground/80">
                            <CheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-0.5 shrink-0" />
                            <span><strong>Premium Materials:</strong> Using top-tier E-Max and Zirconia for longevity.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                        <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                        Popular Transformations
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start text-foreground/80">
                            <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                            <span><strong>Veneers:</strong> Fix gaps, chips, and discoloration permanently.</span>
                        </li>
                        <li className="flex items-start text-foreground/80">
                            <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                            <span><strong>Teeth Whitening:</strong> Up to 8 shades lighter in just 60 minutes.</span>
                        </li>
                        <li className="flex items-start text-foreground/80">
                            <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                            <span><strong>Gummy Smile Correction:</strong> Laser contouring for a balanced gum line.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Services Breakdown */}
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Cosmetic Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-card p-5 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mb-4">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Teeth Whitening</h3>
                        <p className="text-muted-foreground text-sm mb-3"><strong>₹5,000–₹15,000.</strong> Professional Philips Zoom whitening—8 shades brighter in 45 minutes.</p>
                        <Link href="/services/cosmetic-dentistry/teeth-whitening" className="text-teal-600 text-sm font-semibold hover:underline">Learn More →</Link>
                    </div>
                    <div className="bg-card p-5 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mb-4">
                            <Star className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Porcelain Veneers</h3>
                        <p className="text-muted-foreground text-sm mb-3"><strong>₹8,000–₹25,000/tooth.</strong> E.Max & Zirconia veneers for a symmetrical smile.</p>
                        <Link href="/services/cosmetic-dentistry/dental-veneers" className="text-teal-600 text-sm font-semibold hover:underline">View Veneers →</Link>
                    </div>
                    <div className="bg-card p-5 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mb-4">
                            <Camera className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Smile Makeover</h3>
                        <p className="text-muted-foreground text-sm mb-3">A comprehensive plan combining multiple treatments for a total transformation.</p>
                        <Link href="/services/cosmetic-dentistry/smile-makeover" className="text-teal-600 text-sm font-semibold hover:underline">See Makeovers →</Link>
                    </div>
                </div>
            </div>

            {/* Comparison Table: Veneers vs Bonding vs Crowns */}
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-bold text-foreground mb-6">Compare Treatments</h2>
                <table className="w-full text-left border-collapse bg-card rounded-lg overflow-hidden shadow-sm border border-border">
                    <thead className="bg-muted dark:bg-slate-800">
                        <tr>
                            <th className="p-4 font-bold text-foreground border-b border-border">Feature</th>
                            <th className="p-4 font-bold text-foreground border-b border-border">Composite Bonding</th>
                            <th className="p-4 font-bold text-teal-700 border-b border-border bg-teal-50">Porcelain Veneers</th>
                            <th className="p-4 font-bold text-foreground border-b border-border">Dental Crowns</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="p-4 font-medium text-foreground">Durability</td>
                            <td className="p-4 text-foreground/80">3-5 years</td>
                            <td className="p-4 text-teal-700 font-semibold bg-teal-50/50">10-15 years</td>
                            <td className="p-4 text-foreground/80">15+ years</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-foreground">Stain Resistance</td>
                            <td className="p-4 text-foreground/80">Low (Can stain)</td>
                            <td className="p-4 text-teal-700 font-semibold bg-teal-50/50">High (Glass-like)</td>
                            <td className="p-4 text-foreground/80">High</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-foreground">Coverage</td>
                            <td className="p-4 text-foreground/80">Minor repairs</td>
                            <td className="p-4 text-teal-700 font-semibold bg-teal-50/50">Front surface only</td>
                            <td className="p-4 text-foreground/80">Entire tooth</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-foreground">Best For</td>
                            <td className="p-4 text-foreground/80">Small chips</td>
                            <td className="p-4 text-teal-700 font-semibold bg-teal-50/50">Aesthetic makeover</td>
                            <td className="p-4 text-foreground/80">Damaged/Weak teeth</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* FAQ Snippet (Additional to widget) */}
            <div className="bg-muted dark:bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">How Do We Design Your Smile?</h3>
                <p className="text-foreground/80 italic">
                    "We use <Link href="/services/dental-radiology" className="text-teal-600 hover:underline">Digital Smile Design (DSD)</Link> technology.
                    This allows us to take photos and videos of your face and digitally 'try on' different smile shapes
                    that match your personality and facial structure. You approve the final look before we even touch your teeth."
                    — <strong>Dr. Rockson Samuel</strong>
                </p>
            </div>
        </div>
    )
}
