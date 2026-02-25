import React from 'react'
import { ArrowDown, Layers, Shield } from 'lucide-react'

export function EnamelErosionContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Protecting Your Shield</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Enamel is the semi-translucent hard outer layer of your teeth. Once it's gone, it's gone forever. Erosion exposes the yellowish dentin underneath, making your teeth look yellow and feel sensitive.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <ArrowDown className="w-5 h-5 text-red-500" />
                            Acid Sources
                        </h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• Carbonated sodas (even sugar-free)</li>
                            <li>• Citrus fruits and juices</li>
                            <li>• Stomach acid (GERD/Reflux)</li>
                            <li>• Wine and excessive vitamin C</li>
                        </ul>
                    </div>
                    <div className="bg-teal-50 dark:bg-slate-800/60 p-6 rounded-xl">
                        <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-teal-600" />
                            How to Stop It
                        </h4>
                        <ul className="space-y-2 text-sm text-teal-800">
                            <li>• Drink water after acidic meals</li>
                            <li>• Use a straw for acidic drinks</li>
                            <li>• Wait 30 mins to brush after eating</li>
                            <li>• Switch to fluoride toothpaste</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Treatment Options</h3>
                <p className="text-foreground/80 mb-4">
                    Depending on the severity of the erosion, we can restore the appearance and function of your teeth:
                </p>
                <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                        <strong className="block text-foreground mb-1">Tooth Bonding</strong>
                        <p className="text-sm text-muted-foreground">Applying tooth-colored resin to cover discolored or damaged areas.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <strong className="block text-foreground mb-1">Veneers or Crowns</strong>
                        <p className="text-sm text-muted-foreground">For severe erosion, covering the entire tooth prevents further damage and restores aesthetic appeal.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
