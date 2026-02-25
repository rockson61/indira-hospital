import React from 'react'
import { Eye, ShieldAlert } from 'lucide-react'

export function OralCancerContent() {
    return (
        <div className="space-y-8">
            <div className="bg-red-50 dark:bg-slate-800/60 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                    <ShieldAlert className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold text-red-900 mb-2">Early Detection Saves Lives</h3>
                        <p className="text-red-800 text-sm leading-relaxed">
                            Oral cancer can be life-threatening if diagnosed too late. However, when treated in its early stages, the survival rate is very high. This is why regular dental checkups are about more than just cleaning teeth—we are looking for signs you might miss.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What to Look For</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Perform a self-exam once a month. Use a bright light and a mirror. If you see any of the following persisting for more than 2 weeks, call us:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-card">
                        <strong className="block text-foreground mb-1">Patches</strong>
                        <p className="text-sm text-muted-foreground">Velvety white, red, or speckled (white and red) patches in the mouth.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                        <strong className="block text-foreground mb-1">Bleeding</strong>
                        <p className="text-sm text-muted-foreground">Unexplained bleeding in the mouth.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                        <strong className="block text-foreground mb-1">Lumps</strong>
                        <p className="text-sm text-muted-foreground">Swellings, thickenings, lumps, bumps, rough spots, or eroded areas on the lips or gums.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                        <strong className="block text-foreground mb-1">Numbness</strong>
                        <p className="text-sm text-muted-foreground">Loss of feeling or pain/tenderness in any area of the face, mouth, or neck.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
