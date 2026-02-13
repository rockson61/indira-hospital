import React from 'react'
import { Snowflake, CheckCircle, Zap } from 'lucide-react'

export function SensitiveTeethContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Living with Sensitive Teeth</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Tooth sensitivity occurs when the protective layer of enamel wears down or gums recede, exposing the underlying dentin. Dentin contains microscopic tubules that connect to the nerve of the tooth. When these tubules are exposed to hot, cold, or acidic stimuli, it triggers a sharp pain.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-slate-800/60 p-6 rounded-xl border border-blue-100 dark:border-blue-700/40">
                    <h4 className="flex items-center gap-2 font-bold text-foreground mb-4">
                        <Snowflake className="w-5 h-5 text-blue-500" />
                        Common Triggers
                    </h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Ice cream & cold drinks
                        </li>
                        <li className="flex items-center gap-2 text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Hot coffee or tea
                        </li>
                        <li className="flex items-center gap-2 text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Citrus fruits & acidic foods
                        </li>
                        <li className="flex items-center gap-2 text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Cold air
                        </li>
                    </ul>
                </div>

                <div className="bg-teal-50 dark:bg-slate-800/60 p-6 rounded-xl border border-teal-100 dark:border-teal-700/40">
                    <h4 className="flex items-center gap-2 font-bold text-foreground mb-4">
                        <Zap className="w-5 h-5 text-teal-600" />
                        Management Tips
                    </h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-teal-600" /> Switch to a soft-bristled brush
                        </li>
                        <li className="flex items-center gap-2 text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-teal-600" /> Use desensitizing toothpaste
                        </li>
                        <li className="flex items-center gap-2 text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-teal-600" /> Avoid acidic foods
                        </li>
                        <li className="flex items-center gap-2 text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-teal-600" /> Ask about fluoride varnish
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
