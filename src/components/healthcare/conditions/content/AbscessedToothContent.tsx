import React from 'react'
import { AlertOctagon, Phone, ShieldX } from 'lucide-react'

export function AbscessedToothContent() {
    return (
        <div className="space-y-8">
            <div className="bg-red-50 dark:bg-slate-800/60 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                    <AlertOctagon className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold text-red-900 mb-2">This is a Dental Emergency</h3>
                        <p className="text-red-800 text-sm leading-relaxed mb-4">
                            A tooth abscess will not go away on its own. If you have fever, excessive swelling, or difficulty breathing, go to the emergency room immediately. For severe tooth pain, contact us right away.
                        </p>
                        <a href="tel:+917010650063" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                            <Phone className="w-4 h-4" />
                            Call Emergency: 7010 650 063
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What is a Tooth Abscess?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    A tooth abscess is a pocket of pus that's caused by a bacterial infection. The abscess can occur at different regions of the tooth for different reasons. A periapical abscess occurs at the tip of the root, while a periodontal abscess occurs in the gums at the side of a tooth root.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    {[
                        { title: "Severe Pain", desc: "Throbbing pain spreading to jaw or ear." },
                        { title: "Sensitivity", desc: "Extreme reaction to hot/cold temps." },
                        { title: "Swelling", desc: "Swelling in face or lymph nodes." }
                    ].map((symptom, i) => (
                        <div key={i} className="bg-card border rounded-xl p-4 shadow-sm">
                            <h4 className="font-semibold text-foreground mb-1">{symptom.title}</h4>
                            <p className="text-xs text-muted-foreground">{symptom.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Treatment Options</h3>
                <p className="text-foreground/80 mb-4">The goal of treatment is to get rid of the infection. Depending on severity, we may recommend:</p>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-600">1</div>
                        <div>
                            <h4 className="font-semibold text-foreground">Drain the Abscess</h4>
                            <p className="text-sm text-muted-foreground">The dentist makes a small incision into the abscess, allowing the pus to drain out, then washes the area with saline.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-600">2</div>
                        <div>
                            <h4 className="font-semibold text-foreground">Root Canal Procedure</h4>
                            <p className="text-sm text-muted-foreground">This can help save your tooth. The dentist drills into your tooth, removes the diseased pulp, and drains the abscess.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 font-bold text-blue-600">3</div>
                        <div>
                            <h4 className="font-semibold text-foreground">Tooth Extraction</h4>
                            <p className="text-sm text-muted-foreground">If the affected tooth can't be saved, the dentist will pull the tooth and drain the abscess to get rid of the infection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
