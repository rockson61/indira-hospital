import React from 'react'
import { AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function GumDiseaseContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Silent but Dangerous</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Gum disease typically starts painlessly, which is why it's often called a "silent" disease. By the time you notice pain or loose teeth, the damage may already be severe. Early detection is key to saving your teeth.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-orange-50 dark:bg-slate-800/60 border-orange-100">
                        <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-orange-600" />
                                Gingivitis (Early Stage)
                            </h4>
                            <p className="text-sm text-foreground/80 mb-2">The mildest form of gum disease.</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                                <li>Red, swollen gums</li>
                                <li>Bleeding when brushing</li>
                                <li>Reversible with treatment</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-red-50 dark:bg-slate-800/60 border-red-100">
                        <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                Periodontitis (Advanced)
                            </h4>
                            <p className="text-sm text-foreground/80 mb-2">Serious infection damaging bone.</p>
                            <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                                <li>Gums pull away from teeth</li>
                                <li>Bone loss</li>
                                <li>Permanent damage</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Risk Factors</h3>
                <p className="text-foreground/80 mb-4">Certain habits and conditions can increase your risk of developing gum disease:</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                        "Smoking or chewing tobacco",
                        "Diabetes",
                        "Poor oral hygiene",
                        "Stress",
                        "Crooked teeth (hard to clean)",
                        "Genetics"
                    ].map((risk, i) => (
                        <li key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="text-foreground/80 text-sm">{risk}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-teal-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-teal-100 dark:border-teal-700/40">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                    Prevention Tips
                </h3>
                <ul className="space-y-3">
                    {[
                        "Brush twice a day for two minutes.",
                        "Floss daily to remove plaque between teeth.",
                        "Schedule regular checkups and cleanings.",
                        "Quit smoking to improve gum health."
                    ].map((tip, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                            <span className="text-teal-800">{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
