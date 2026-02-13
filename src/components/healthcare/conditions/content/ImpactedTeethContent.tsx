import React from 'react'
import { Ban, XCircle } from 'lucide-react'

export function ImpactedTeethContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Blocked from Erupting</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Teeth become impacted when there isn't enough room in the dental arch for them to grow in. They may get stuck against another tooth, bone, or soft tissue. This is most common with wisdom teeth (3rd molars) and upper canines.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="border p-4 rounded-lg bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                        <h4 className="font-bold text-foreground mb-2">Vertical Impaction</h4>
                        <p className="text-sm text-muted-foreground">The tooth is in the correct position but can't break through the gum.</p>
                    </div>
                    <div className="border p-4 rounded-lg bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                        <h4 className="font-bold text-foreground mb-2">Horizontal Impaction</h4>
                        <p className="text-sm text-muted-foreground">The tooth is growing sideways, pushing directly into the roots of adjacent teeth. This is very painful.</p>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 dark:bg-slate-800/60 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Dangers of Ignoring It
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                    <li>• <span className="font-semibold">Infection (Pericoronitis):</span> Gum flaps over impacted teeth trap food.</li>
                    <li>• <span className="font-semibold">Cysts:</span> Fluid-filled sacs can form around the impacted tooth, damaging jawbone.</li>
                    <li>• <span className="font-semibold">Damage to Other Teeth:</span> Pressure can cause resorption of roots of healthy neighbors.</li>
                </ul>
            </div>
        </div>
    )
}
