import React from 'react'
import { CheckCircle, Clock, Shield, Star, Zap, Smile } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function DentalImplantsContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Restore Your Smile with Permanent Dental Implants</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    <strong>95%+ success rate with 1,000+ implants placed.</strong> Dental implants are the gold standard for replacing missing teeth—permanent, stable, and natural-looking. At Indira Dental Clinic in Vellore, Dr. Rockson Samuel uses 3D CBCT-guided implant placement with titanium or zirconia implants. <strong>Cost: ₹20,000–₹35,000 per implant</strong> (50% lower than Chennai/Bangalore). Lifetime warranty included.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Shield className="w-6 h-6 text-teal-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">25+ Year Lifespan</h4>
                                <p className="text-sm text-muted-foreground">Titanium implants last 25+ years with proper care. We provide a <strong>lifetime warranty</strong> on all implants placed at Indira Dental Clinic.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Smile className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Natural Look & Feel</h4>
                                <p className="text-sm text-muted-foreground">Implants restore <strong>90% of natural chewing power</strong>. Custom-matched zirconia crowns are indistinguishable from natural teeth.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Implant Services</h3>
                <ul className="space-y-3">
                    {[
                        { title: "Single Tooth Implant", desc: "₹20,000–₹35,000. Replace one missing tooth without affecting adjacent teeth. 2-3 appointments." },
                        { title: "Implant-Supported Bridge", desc: "₹60,000–₹1,00,000. Replace 3-4 teeth using 2 implants. More stable than traditional bridges." },
                        { title: "All-on-4 / All-on-6", desc: "₹2,50,000–₹4,00,000. Full arch replacement using 4-6 implants. Teeth same day (Immediate Loading)." },
                        { title: "Full Mouth Reconstruction", desc: "₹3,00,000–₹8,00,000. Complete rehabilitation including bite correction and smile design." },
                        { title: "Bone Grafting & Sinus Lift", desc: "₹15,000–₹35,000. Required when bone density is insufficient. 3-6 month healing before implant." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted dark:hover:bg-slate-800/50 transition-colors">
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                            <div>
                                <span className="font-semibold text-foreground">{item.title}:</span>
                                <span className="text-foreground/80 ml-1">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Dental Implants?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "Prevents Bone Loss (Starts within 1 year of tooth loss)", "No Dietary Restrictions", "Protects Adjacent Teeth",
                        "95%+ Success Rate (Dr. Rockson Samuel)", "Facial Youthfulness", "Improved Speech"
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 bg-muted dark:bg-slate-800/50 p-3 rounded-md">
                            <div className="w-2 h-2 rounded-full bg-teal-400" />
                            <span className="text-foreground/80 font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    Treatment Process
                </h3>
                <p className="text-foreground/80 mb-3">
                    <strong>Timeline: 3-6 months total.</strong> Stage 1: Titanium post placement (1 hour surgery). Stage 2: Crown attachment after osseointegration (3-6 months healing). <strong>Same-day teeth available</strong> with Immediate Loading for eligible patients.
                </p>
                <p className="text-sm text-muted-foreground italic">
                    *0% EMI available for 3-12 months via Bajaj Finserv, HDFC, ICICI. Free consultation includes 3D CBCT scan for treatment planning.
                </p>
            </div>
        </div>
    )
}
