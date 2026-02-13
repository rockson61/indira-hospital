import React from 'react'
import { AlertCircle, Ban, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function CavitiesContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">How Do Cavities Form?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Cavities are one of the world's most common health problems. They are especially common in children, teenagers, and older adults. But anyone who has teeth can get cavities, including infants.
                </p>

                <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 py-2 space-y-8">
                    {[
                        {
                            title: "Plaque Forms",
                            desc: "Dental plaque is a clear sticky film that coats your teeth. It's due to eating a lot of sugars and starches and not cleaning your teeth well."
                        },
                        {
                            title: "Plaque Attacks",
                            desc: "The acids in plaque remove minerals in your tooth's hard, outer enamel. This erosion causes tiny openings or holes in the enamel - the first stage of cavities."
                        },
                        {
                            title: "Destruction Continues",
                            desc: "As tooth decay develops, the bacteria and acid continue their march through your teeth, moving deeper into the softer material inside the tooth called dentin."
                        }
                    ].map((step, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold ring-4 ring-white">
                                {i + 1}
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-1">{step.title}</h4>
                            <p className="text-muted-foreground text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-50 dark:bg-slate-800/60 border-red-100">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <Ban className="w-5 h-5 text-red-600" />
                            Foods to Limit
                        </h3>
                        <ul className="space-y-2">
                            {['Soda and sugary drinks', 'Sticky candies (gummies, caramel)', 'Chips and crackers', 'dried fruits (stick to teeth)'].map((item, i) => (
                                <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-green-50 dark:bg-slate-800/60 border-green-100">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            Use Fluoride
                        </h3>
                        <p className="text-sm text-foreground/80 mb-4">
                            Fluoride is a mineral that can prevent tooth decay from progressing. It can even reverse specific types of early tooth damage.
                        </p>
                        <p className="text-sm font-semibold text-green-700">
                            Make sure you are using a fluoride toothpaste!
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
