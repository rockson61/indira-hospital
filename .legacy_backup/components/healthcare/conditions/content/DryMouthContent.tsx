import React from 'react'
import { Droplets, Settings, XCircle } from 'lucide-react'

export function DryMouthContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">More Than Just Thirst</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Saliva is your mouth's primary defense against tooth decay. It washes away food particles, neutralizes acids, and provides disease-fighting substances. Without enough saliva, you are at much higher risk for cavities and gum disease.
                </p>

                <div className="bg-blue-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-blue-100 dark:border-blue-700/40 relative overflow-hidden">
                    <Droplets className="absolute top-4 right-4 w-12 h-12 text-blue-200 opacity-50" />
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Tips for Relief</h4>
                    <ul className="space-y-3">
                        {[
                            "Sip water frequently throughout the day",
                            "Chew sugar-free gum (contains Xylitol) to stimulate flow",
                            "Avoid caffeine and alcohol which dry out the mouth",
                            "Use over-the-counter saliva substitutes",
                            "Breathe through your nose, not your mouth"
                        ].map((tip, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-50 dark:bg-slate-800/600 rounded-full" />
                                <span className="text-foreground/80 text-sm">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Common Causes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-foreground mb-2">Medications</h4>
                        <p className="text-sm text-muted-foreground">Hundreds of medicines, including antihistamines, decongestants, painkillers, and diuretics causing dry mouth as a side effect.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-foreground mb-2">Health Conditions</h4>
                        <p className="text-sm text-muted-foreground">Conditions like Diabetes, Sjögren's syndrome, and sleep apnea (due to open-mouth breathing) are common culprits.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
