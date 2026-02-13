import React from 'react'
import { Flame, HelpCircle } from 'lucide-react'

export function BurningMouthContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">A Frustrating Condition</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Burning Mouth Syndrome (BMS) can be difficult to diagnose because your mouth may look completely normal during an exam. The pain, however, is very real—often described as feeling like you just scalded your mouth with hot coffee.
                </p>

                <div className="flex items-start gap-4 bg-orange-50 dark:bg-slate-800/60 p-6 rounded-xl border border-orange-100">
                    <Flame className="w-8 h-8 text-orange-500 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-2">Common Descriptions of Pain</h4>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-disc ml-4 text-foreground/80 text-sm">
                            <li>Burning tongue or roof of mouth</li>
                            <li>Tingling or numbness</li>
                            <li>Dryness or thirst</li>
                            <li>Metallic or bitter taste</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">How We Can Help</h3>
                <p className="text-foreground/80 mb-4">
                    Since BMS has many potential causes, our approach involves a thorough investigation to rule out nutritional deficiencies, allergies, infections, or dry mouth issues.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                    <p className="text-foreground/80 italic">
                        "While there is no simple cure for primary BMS, we can offer treatments to manage symptoms, including saliva replacements, oral rinses, and addressing underlying factors."
                    </p>
                </div>
            </div>
        </div>
    )
}
