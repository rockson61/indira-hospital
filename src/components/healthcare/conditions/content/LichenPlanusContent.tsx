import React from 'react'
import { FileSearch, Layers } from 'lucide-react'

export function LichenPlanusContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Chronic Inflammation</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Oral lichen planus is an autoimmune condition. It is not an infection, and you cannot catch it from someone else. It often appears as white, lacy patches (Wickham's striae) or red, swollen tissues.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-start gap-4">
                        <FileSearch className="w-8 h-8 text-teal-600 shrink-0" />
                        <div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Requires Monitoring</h4>
                            <p className="text-foreground/80 text-sm">
                                While often benign, the erosive form of lichen planus requires careful monitoring. It can sometimes be a precursor to oral cancer. Regular biopsies or checkups with an oral pathologist are recommended to ensure any changes are caught early.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Symptom Management</h3>
                <p className="text-foreground/80 mb-4">
                    There is no cure, but we can treat the flare-ups:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-card border shadow-sm rounded-lg text-center">
                        <strong className="block text-foreground mb-2">Corticosteroids</strong>
                        <span className="text-xs text-muted-foreground">Topical gels to reduce inflammation.</span>
                    </div>
                    <div className="p-4 bg-card border shadow-sm rounded-lg text-center">
                        <strong className="block text-foreground mb-2">Immune Responses</strong>
                        <span className="text-xs text-muted-foreground">Meds to suppress the immune system locally.</span>
                    </div>
                    <div className="p-4 bg-card border shadow-sm rounded-lg text-center">
                        <strong className="block text-foreground mb-2">Avoid Irritants</strong>
                        <span className="text-xs text-muted-foreground">Cutting out spicy/acidic foods.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
