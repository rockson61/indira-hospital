import React from 'react'
import { Activity, AlertTriangle, Hammer } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function CrackedTeethContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Types of Tooth Cracks</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Not all cracks are the same. The treatment depends on the location and depth of the crack.
                </p>

                <div className="grid gap-4">
                    {[
                        { title: "Craze Lines", desc: "Tiny cracks in the enamel only. They are common in adults and usually need no treatment." },
                        { title: "Fractured Cusp", desc: "A piece of a tooth's chewing surface breaks off. Usually not painful but needs a crown." },
                        { title: "Cracked Tooth", desc: "A crack extends from the chewing surface vertically towards the root. Early diagnosis is vital to save the tooth." },
                        { title: "Split Tooth", desc: "The tooth is split into two distinct segments. This tooth usually cannot be saved intact." }
                    ].map((type, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-card border border-slate-200 dark:border-slate-700 rounded-lg">
                            <Activity className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground">{type.title}</h4>
                                <p className="text-sm text-muted-foreground">{type.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Card className="bg-yellow-50 dark:bg-slate-800/60 border-yellow-100">
                <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        Why does it hurt?
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                        When you bite down, the pressure causes the crack to open. When you release the bite, it snaps shut. This movement irritates the pulp inside your tooth, causing sharp, erratic pain. Over time, the pulp will become damaged and infected.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
