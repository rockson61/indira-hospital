import React from 'react'
import { CheckCircle, Clock, Shield, Activity, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function RootCanalContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Save Your Natural Tooth with Painless Root Canal Treatment</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    <strong>Pain rating: 2/10. Success rate: 95%+.</strong> Root canal treatment (RCT) saves badly decayed or infected teeth—modern RCT is virtually painless and provides immediate relief. At Indira Dental Clinic, <span className="font-semibold text-teal-600">Dr. Rockson Samuel</span> uses rotary endodontics and digital X-rays. <strong>Cost: ₹3,500–₹6,500</strong> (50% lower than Chennai). Single visit: 45-60 minutes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card className="card-variant-teal">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Immediate Pain Relief</h4>
                                <p className="text-sm text-muted-foreground">Infection removed = pain gone. <strong>90% of patients pain-free within 24 hours.</strong> Return to work same day.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card-variant-blue">
                        <CardContent className="p-4 flex items-start gap-3">
                            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Save ₹15,000+ vs Extraction</h4>
                                <p className="text-sm text-muted-foreground">RCT + Crown (₹10,000–₹18,000 total) vs Extraction + Implant (₹28,000–₹45,000). <strong>Keep your natural tooth.</strong></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Endodontic Services</h3>
                <ul className="space-y-3">
                    {[
                        { title: "Single-Visit RCT", desc: "₹3,500–₹5,500. Complete in 45-60 minutes using rotary instruments. Crown fitted within 7 days." },
                        { title: "Re-RCT (Retreatment)", desc: "₹5,000–₹8,000. Expert retreatment for previously failed root canals. 85% success rate." },
                        { title: "Apicoectomy", desc: "₹8,000–₹15,000. Surgical removal of infected root tip. Last resort when RCT fails." },
                        { title: "Post & Core", desc: "₹2,000–₹4,000. Restores structurally damaged teeth before crowning. Required for heavily decayed teeth." },
                        { title: "Emergency Abscess Care", desc: "₹1,500–₹3,000 initial visit. Same-day drainage + antibiotics. Full RCT scheduled within 3-7 days." }
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Symptoms That Need Attention</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "Severe Toothache", "Sensitivity to Hot/Cold", "Gum Swelling",
                        "Darkening of Tooth", "Pimple on Gums", "Pain on Chewing"
                    ].map((symptom, i) => (
                        <div key={i} className="flex items-center gap-2 bg-muted dark:bg-slate-800/50 p-3 rounded-md">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="text-foreground/80 font-medium">{symptom}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-muted dark:bg-slate-800/50 rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    Treatment Time
                </h3>
                <p className="text-foreground/80 mb-3">
                    <strong>Single visit: 45-60 minutes</strong> for most cases. Severe infections may need 2 visits. Crown fitted 3-7 days later (₹6,000–₹12,000 additional). <strong>Total treatment time: under 1 week.</strong> 0% EMI available via Bajaj Finserv, HDFC, ICICI.
                </p>
            </div>
        </div>
    )
}
