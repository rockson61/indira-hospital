import React from 'react'
import { AlertCircle, Scissors } from 'lucide-react'

export function FracturedTeethContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Urgent Care Required</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    A broken tooth is a common dental emergency. If you have the broken piece of tooth, keep it moist (milk or saliva) and bring it with you. Time is of the essence.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-foreground mb-3">Levels of Fracture</h4>
                    <div className="space-y-3">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <strong className="block text-foreground">Enamel Chip</strong>
                                <span className="text-sm text-muted-foreground">Minor aesthetic issue, easily smoothed or bonded.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <strong className="block text-foreground">Dentin Fracture</strong>
                                <span className="text-sm text-muted-foreground">Sensitive to cold/air. Needs a crown or filling to protect the pulp.</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <strong className="block text-foreground">Root Exposure</strong>
                                <span className="text-sm text-muted-foreground">Serious injury with bleeding. Root canal likely needed.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
