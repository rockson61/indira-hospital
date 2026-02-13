import React from 'react'
import { CheckCircle, Clock, Smile, Star, AlignCenter } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function OrthodonticsContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Straighten Your Teeth for a Perfect Smile</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    <strong>Cost: ₹25,000–₹1,50,000. Ages 8–60+ treated.</strong> Orthodontics isn't just cosmetic—straight teeth are easier to clean, function better, and prevent future problems. At Indira Dental Clinic, Dr. Rockson Samuel offers metal braces, ceramic braces, and clear aligners (Invisalign) with <strong>95% patient satisfaction</strong>. 50% lower cost than Chennai/Bangalore.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Smile className="w-6 h-6 text-teal-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">95% Satisfaction Rate</h4>
                                <p className="text-sm text-muted-foreground">Digital smile preview before treatment starts. Customized plans based on 3D scans.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
                        <CardContent className="p-4 flex items-start gap-3">
                            <AlignCenter className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Correct Bite Issues</h4>
                                <p className="text-sm text-muted-foreground">Fix overbites, underbites, crossbites. <strong>Prevents TMJ problems and uneven wear.</strong></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Orthodontic Options</h3>
                <div className="grid gap-4">
                    {[
                        { title: "Metal Braces", desc: "₹25,000–₹40,000. Most effective for complex cases. 12-24 months. All ages." },
                        { title: "Ceramic Braces", desc: "₹35,000–₹55,000. Tooth-colored brackets. Same effectiveness as metal. Popular with adults." },
                        { title: "Clear Aligners (Invisalign)", desc: "₹80,000–₹1,50,000. Virtually invisible. Removable. 6-18 months for mild-moderate cases." },
                        { title: "Self-Ligating Braces", desc: "₹40,000–₹60,000. 20% faster treatment. Fewer dental visits. Less discomfort." },
                        { title: "Retainers", desc: "₹3,000–₹8,000. Essential after braces. Worn nightly for 1-2 years to prevent relapse." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">{item.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Is Orthodontics Right for You?</h3>
                <p className="text-foreground/80 mb-4">We treat a variety of alignment issues, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "Crowded Teeth", "Gaps / Spacing", "Overbite",
                        "Underbite", "Crossbite", "Open Bite"
                    ].map((issue, i) => (
                        <div key={i} className="flex items-center gap-2 bg-muted dark:bg-slate-800/50 p-3 rounded-md">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                            <span className="text-foreground/80 font-medium">{issue}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    Treatment Duration
                </h3>
                <p className="text-foreground/80 mb-3">
                    <strong>Treatment duration: 6-24 months</strong> depending on complexity. Simple cases (mild crowding): 6-12 months. Complex cases (severe bite issues): 18-24 months. Monthly adjustments required. <strong>First results visible within 3 months.</strong>
                </p>
                <p className="text-sm text-muted-foreground italic">
                    *0% EMI available for 3-18 months via Bajaj Finserv, HDFC, ICICI. Free consultation includes 3D scan and treatment preview.
                </p>
            </div>
        </div>
    )
}
