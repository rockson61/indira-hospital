import React from 'react'
import { AlertTriangle, CheckCircle, Droplet } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function BleedingGumsContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Do My Gums Bleed?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Bleeding gums are most commonly a sign of gum disease (gingivitis), which is caused by the buildup of plaque at the gumline. However, it can also be caused by brushing too hard, improper flossing, or certain medical conditions. Ignoring bleeding gums can lead to more serious periodontal disease and eventual tooth loss.
                </p>
                <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-slate-800/60 border border-red-100 rounded-lg">
                    <Droplet className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Don't Ignore the Red!</h4>
                        <p className="text-sm text-foreground/80">Healthy gums are pink and firm. If yours are red, swollen, and bleed easily when touched, it's time to see a dentist.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Prevention & Care</h3>
                <ul className="space-y-3">
                    {[
                        { title: "Improve Brushing Technique", desc: "Use a soft-bristled toothbrush and brush gently in circular motions." },
                        { title: "Floss Daily", desc: "Flossing removes plaque from between teeth where your brush can't reach." },
                        { title: "Regular Cleanings", desc: "Professional scaling removes hardened tartar that causes gum irritation." },
                        { title: "Stop Smoking", desc: "Tobacco use significantly increases the risk of gum disease." },
                        { title: "Balanced Diet", desc: "Vitamin C deficiency can sometimes contribute to bleeding gums." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                            <div>
                                <span className="font-semibold text-foreground">{item.title}:</span>
                                <span className="text-foreground/80 ml-1">{item.desc}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
