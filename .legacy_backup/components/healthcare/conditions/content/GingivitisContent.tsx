import React from 'react'
import { ArrowUpCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function GingivitisContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The Reversible Stage</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Gingivitis is the only stage of gum disease that is completely reversible. It happens when plaque—a sticky film of bacteria—builds up on teeth and causes inflammation of the surrounding gum tissue.
                </p>

                <Card className="bg-green-50 dark:bg-slate-800/60 border-green-100">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <h4 className="text-lg font-bold text-green-900">How to Reverse It</h4>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            <li className="flex items-start gap-2 text-sm text-green-800">
                                <span className="font-bold">1.</span> Professional Scaling (Cleaning) to remove tartar.
                            </li>
                            <li className="flex items-start gap-2 text-sm text-green-800">
                                <span className="font-bold">2.</span> Brushing strictly twice a day for 2 minutes.
                            </li>
                            <li className="flex items-start gap-2 text-sm text-green-800">
                                <span className="font-bold">3.</span> Daily flossing to clear debris between teeth.
                            </li>
                            <li className="flex items-start gap-2 text-sm text-green-800">
                                <span className="font-bold">4.</span> Using an antiseptic mouthwash.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <ArrowUpCircle className="w-5 h-5 text-teal-600" />
                    Don't Ignore the Bleeding
                </h3>
                <p className="text-foreground/80 text-sm">
                    Healthy gums do NOT bleed. If you see "pink in the sink" when you brush, it is a sign of infection, not just "brushing too hard." Treat it now before it becomes Periodontitis, which involves permanent bone loss.
                </p>
            </div>
        </div>
    )
}
