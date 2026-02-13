import React from 'react'
import { AlertCircle, CheckCircle, HelpCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function ToothacheContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Understanding Tooth Pain</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    A toothache typically indicates that something is wrong with a tooth or the surrounding gum tissue. The pain can range from mild discomfort to severe, throbbing pain that interferes with your daily life. It is your body's way of telling you that you need professional dental attention.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-red-50 dark:bg-slate-800/60 border-red-100">
                        <CardContent className="p-4 flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Warning Signs</h4>
                                <p className="text-sm text-muted-foreground">Severe pain, fever, swelling, or trouble breathing/swallowing requires immediate emergency care.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-blue-50 dark:bg-slate-800/60 border-blue-100 dark:border-blue-700/40">
                        <CardContent className="p-4 flex items-start gap-3">
                            <HelpCircle className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Common Triggers</h4>
                                <p className="text-sm text-muted-foreground">Hot/cold foods, sugary snacks, or biting down can often trigger or worsen the pain.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Immediate Home Relief</h3>
                <p className="text-foreground/80 mb-3">While waiting for your appointment, you can try these temporary measures:</p>
                <ul className="space-y-3">
                    {[
                        "Rinse your mouth with warm salt water to reduce inflammation.",
                        "Use dental floss to gently remove any food particles wedged between teeth.",
                        "Apply a cold compress to the outside of your cheek if there is swelling.",
                        "Take over-the-counter pain relievers (like Ibuprofen) as directed.",
                        "Avoid applying aspirin directly to the gums as it can burn the tissue."
                    ].map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                            <span className="text-foreground/80">{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
