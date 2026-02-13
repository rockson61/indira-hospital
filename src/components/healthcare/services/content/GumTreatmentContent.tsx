import React from 'react'
import { CheckCircle, Clock, Shield, Star, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function GumTreatmentContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Comprehensive Gum Care for a Healthier Smile</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    <strong>Cost: ₹2,500–₹35,000. 90% success in stopping gum disease progression.</strong> Healthy gums are the foundation of a healthy smile. At Indira Dental Clinic, Dr. Rockson Samuel treats bleeding gums, gum recession, and periodontal disease using laser therapy and advanced techniques. <strong>Untreated gum disease leads to tooth loss within 5-10 years.</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Shield className="w-6 h-6 text-teal-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Prevent Tooth Loss</h4>
                                <p className="text-sm text-muted-foreground"><strong>80% of adults over 35 have gum disease.</strong> Early treatment prevents mobility and loss. Save ₹30,000+ vs future implant costs.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Zap className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Laser Precision</h4>
                                <p className="text-sm text-muted-foreground"><strong>Painless laser therapy</strong>: 50% faster healing, 90% less bleeding vs traditional surgery. No stitches required.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Gum Treatment Services</h3>
                <ul className="space-y-3">
                    {[
                        { title: "Scaling & Root Planing", desc: "₹2,500–₹5,000 per quadrant. Deep cleaning below gumline. Reduces pocket depth 2-3mm in 4-6 weeks." },
                        { title: "Laser Gum Therapy", desc: "₹8,000–₹15,000. Painless treatment for gum infections. No bleeding or stitches. 1-2 visits." },
                        { title: "Gum Grafting", desc: "₹15,000–₹35,000 per site. Covers exposed roots. Prevents further recession. 90% success rate." },
                        { title: "Flap Surgery", desc: "₹12,000–₹25,000. For 5mm+ pockets. Accesses root for thorough cleaning. 2-week recovery." },
                        { title: "Crown Lengthening", desc: "₹8,000–₹20,000. Exposes more tooth for restoration or aesthetics. Heals in 2-3 weeks." }
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Signs You Need Gum Treatment</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "Bleeding Gums", "Persistent Bad Breath", "Red or Swollen Gums",
                        "Receding Gums", "Loose Teeth", "Sensitive Teeth"
                    ].map((sign, i) => (
                        <div key={i} className="flex items-center gap-2 bg-muted dark:bg-slate-800/50 p-3 rounded-md">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="text-foreground/80 font-medium">{sign}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    Treatment Duration & Recovery
                </h3>
                <p className="text-foreground/80 mb-3">
                    <strong>Non-surgical (scaling): 30-60 minutes per visit</strong>, no downtime. <strong>Surgical: 1-2 hours</strong>, 3-5 days initial recovery, 2-4 weeks full healing. Most patients return to normal activities next day after non-surgical treatment.
                </p>
                <p className="text-sm text-muted-foreground italic">
                    *0% EMI available via Bajaj Finserv, HDFC, ICICI. Free gum health assessment with every consultation.
                </p>
            </div>
        </div>
    )
}
