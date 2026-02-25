import React from 'react'
import { AlertOctagon, Shield } from 'lucide-react'

export function GumRecessionContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Teeth Look "Longer"</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    As gums pull back, more of the tooth is revealed. Eventually, the root becomes exposed. Unlike the crown (top part) of your tooth, the root does not have hard enamel protecting it, making it extremely sensitive and prone to decay.
                </p>

                <div className="bg-yellow-50 dark:bg-slate-800/60 p-6 rounded-xl border border-yellow-100 flex gap-4">
                    <AlertOctagon className="w-8 h-8 text-yellow-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-yellow-900 mb-1">Root Sensitivity</h4>
                        <p className="text-sm text-yellow-800">
                            The exposed root contains thousands of tiny tubules leading directly to the nerve. This causes sharp zings of pain with cold water or air.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Treatment Approaches</h3>
                <div className="grid gap-4">
                    <div className="bg-card p-4 border rounded-lg shadow-sm">
                        <strong className="block text-foreground mb-1">Deep Cleaning</strong>
                        <p className="text-sm text-muted-foreground">Removing plaque and tartar from roots can help gums reattach.</p>
                    </div>
                    <div className="bg-card p-4 border rounded-lg shadow-sm">
                        <strong className="block text-foreground mb-1">Gum Grafting</strong>
                        <p className="text-sm text-muted-foreground">Taking tissue from the roof of your mouth to cover exposed roots over and strengthen the gum line.</p>
                    </div>
                    <div className="bg-card p-4 border rounded-lg shadow-sm">
                        <strong className="block text-foreground mb-1">Desensitizing Agents</strong>
                        <p className="text-sm text-muted-foreground">Varnishes or bonding agents applied to the root to reduce sensitivity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
