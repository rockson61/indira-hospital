import React from 'react'
import { Moon, ShieldCheck, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function BruxismContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Are You Grinding Your Teeth?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Bruxism is often unconscious. Many people don't realize they grind their teeth until a loved one hears it while they sleep, or a dentist notices worn enamel during a checkup.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { icon: Moon, title: "Sleep Bruxism", desc: "Grinding during sleep, often linked to sleep disorders." },
                        { icon: Zap, title: "Awake Bruxism", desc: "Clenching due to stress, anxiety, or concentration." },
                        { icon: ShieldCheck, title: "Prevention", desc: "Night guards are the most effective protection." }
                    ].map((item, i) => (
                        <Card key={i} className="bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
                            <CardContent className="p-4 text-center">
                                <item.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Long-Term Consequences</h3>
                <ul className="space-y-3">
                    {[
                        "Loss of tooth enamel (making teeth sensitive)",
                        "Chipped or fractured teeth requiring crowns",
                        "Chronic jaw pain and TMJ disorders",
                        "Change in facial appearance due to muscle enlargement"
                    ].map((consequence, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-slate-800/60 border border-red-100">
                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                            <span className="text-foreground/90">{consequence}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
