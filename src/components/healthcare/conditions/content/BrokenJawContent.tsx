import React from 'react'
import { AlertOctagon, Phone } from 'lucide-react'

export function BrokenJawContent() {
    return (
        <div className="space-y-8">
            <div className="bg-red-50 dark:bg-slate-800/60 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                    <AlertOctagon className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold text-red-900 mb-2">Seek Immediate Medical Attention</h3>
                        <p className="text-red-800 text-sm leading-relaxed mb-4">
                            A broken jaw is a medical emergency. If you have swelling, severe pain, or difficulty breathing, please visit the nearest hospital emergency room or call us immediately for guidance.
                        </p>
                        <a href="tel:+917010650063" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                            <Phone className="w-4 h-4" />
                            Emergency Contact: 7010 650 063
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Treatment Overview</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Treatment depends on the severity of the fracture. Minor fractures may heal on their own with a soft diet and pain management, while severe breaks often require surgery to realign the bone and secure it with wires, plates, or screws.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-4">Recovery Tips</h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Stick to a liquid or soft food diet",
                            "Avoid opening your mouth wide",
                            "Apply ice packs to reduce swelling",
                            "Take prescribed antibiotics to prevent infection"
                        ].map((tip, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                <div className="w-1.5 h-1.5 bg-teal-50 dark:bg-slate-800/600 rounded-full" />
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
