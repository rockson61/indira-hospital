import React from 'react'
import { AlertTriangle, Clock, ShieldAlert } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function DrySocketContent() {
    return (
        <div className="space-y-8">
            <div className="bg-orange-50 dark:bg-slate-800/60 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                    <ShieldAlert className="w-8 h-8 text-orange-600 shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold text-orange-900 mb-2">Intense Pain After Extraction?</h3>
                        <p className="text-orange-800 text-sm leading-relaxed">
                            Dry socket is the most common complication of tooth removal. If your pain worsens 2-3 days after surgery instead of getting better, you likely have a dry socket. Contact us immediately for a dressing implementation that provides instant relief.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why it Happens</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    A blood clot normally forms in the socket to protect the bone and nerves underneath. If this clot is dislodged or dissolves too early, the bone is exposed to air, food, and fluid, causing intense pain.
                </p>

                <h4 className="font-semibold text-foreground mb-4">Prevention Checklist (First 24-48 Hours)</h4>
                <div className="grid gap-3">
                    {[
                        { title: "No Straws", desc: "The suction can pull the clot loose." },
                        { title: "No Smoking", desc: "Tobacco slows healing and suction from inhaling is dangerous." },
                        { title: "No Vigorous Rinsing", desc: "Gentle rinsing only with salt water." },
                        { title: "Soft Diet", desc: "Eating hard or crunchy foods can disturb the site." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-card border border-slate-200 dark:border-slate-700 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                            <div>
                                <strong className="text-foreground">{item.title}: </strong>
                                <span className="text-muted-foreground text-sm">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
