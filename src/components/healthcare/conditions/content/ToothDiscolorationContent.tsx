import React from 'react'
import { Sparkles, X } from 'lucide-react'

export function ToothDiscolorationContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Restore Your Bright Smile</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Tooth discoloration is a common cosmetic concern. While often caused by lifestyle factors like coffee, tea, and smoking ("extrinsic stains"), it can also come from inside the tooth ("intrinsic stains") due to trauma or medication.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <X className="w-5 h-5 text-red-500" />
                            Stain Makers
                        </h4>
                        <ul className="border-l-2 border-red-200 pl-4 space-y-2 text-sm text-muted-foreground">
                            <li><strong>Dark Drinks:</strong> Coffee, tea, colas, red wine.</li>
                            <li><strong>Tobacco:</strong> Smoking or chewing causes yellow/brown stains.</li>
                            <li><strong>Poor Hygiene:</strong> Plaque and tartar buildup appears yellow.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-teal-500" />
                            Solutions
                        </h4>
                        <ul className="border-l-2 border-teal-200 pl-4 space-y-2 text-sm text-muted-foreground">
                            <li><strong>Professional Whitening:</strong> Removes deep stains safely.</li>
                            <li><strong>Veneers:</strong> Covers permanent intrinsic stains.</li>
                            <li><strong>Regular Cleanings:</strong> Polishes away surface stains.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
