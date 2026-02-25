import React from 'react'
import { ArrowRight, HelpCircle, XCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function WisdomTeethContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Wisdom Teeth Cause Problems</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Wisdom teeth, or third molars, are the last teeth to develop and appear. Because they come in so late (usually between ages 17 and 25), many mouths simply don't have room for them. This lack of space causes them to become "impacted."
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl">
                    <h4 className="font-semibold text-foreground mb-4">Types of Impaction</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Partial Impaction", desc: "The tooth breaks partly through the gum. This creates a flap of gum tissue where food can get trapped and cause infection." },
                            { title: "Full Impaction", desc: "The tooth never breaks through the gum. It remains stuck in the jawbone, which can cause cysts or damage to adjacent teeth." }
                        ].map((type, i) => (
                            <div key={i} className="bg-card p-4 rounded-lg shadow-sm">
                                <h5 className="font-bold text-foreground/90 mb-1">{type.title}</h5>
                                <p className="text-sm text-muted-foreground">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Signs You Need Removal</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Pain at the back of the mouth",
                        "Swelling around the jaw",
                        "Red, swollen, or bleeding gums",
                        "Bad breath",
                        "Difficulty opening your mouth"
                    ].map((sign, i) => (
                        <li key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-teal-100 dark:border-teal-700/40 transition-colors">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                            <span className="text-foreground/80">{sign}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Card className="bg-blue-50 dark:bg-slate-800/60 border-blue-100 dark:border-blue-700/40">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <HelpCircle className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-foreground mb-2">Did You Know?</h3>
                            <p className="text-foreground/80 text-sm mb-4">
                                Not everyone needs their wisdom teeth removed! If they grow in completely, are positioned correctly, and you can clean them properly, you might be able to keep them.
                            </p>
                            <a href="/contact" className="text-blue-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Book an evaluation <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
