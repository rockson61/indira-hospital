import React from 'react'
import { Activity, Thermometer } from 'lucide-react'

export function OralThrushContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Fungal Overgrowth</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Oral thrush occurs when a yeast infection develops inside your mouth. It's most common in babies, the elderly, and people with compromised immune systems. It appears as creamy white lesions, usually on your tongue or inner cheeks.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-500" />
                        Common Triggers
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                        <li>• Taking antibiotics (kills healthy bacteria that control yeast)</li>
                        <li>• Using inhaled corticosteroids for asthma (without rinsing after)</li>
                        <li>• Wearing dentures (especially if not cleaned properly)</li>
                        <li>• Dry mouth (xerostomia)</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Treatment</h3>
                <p className="text-foreground/80 mb-4">
                    The goal is to stop the rapid spread of the fungus:
                </p>
                <div className="p-4 border-l-4 border-teal-500 bg-teal-50 dark:bg-slate-800/60 rounded-r-lg">
                    <strong className="block text-teal-900 dark:text-teal-100 mb-1">Antifungal Medications</strong>
                    <p className="text-sm text-teal-800">Lozenge, tablet, or liquid mouthwash (typically Nystatin) to swish and swallow.</p>
                </div>
            </div>
        </div>
    )
}
