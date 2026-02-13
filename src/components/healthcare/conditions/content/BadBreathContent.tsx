import React from 'react'
import { Wind, CheckCircle, Search } from 'lucide-react'

export function BadBreathContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Combating Chronic Bad Breath</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Bad breath (halitosis) usually originates in the mouth, often resulting from a buildup of bacteria on the teeth and tongue. While mints and mouthwash can mask the odor, treating the underlying cause is the only way to get lasting relief.
                </p>

                <div className="bg-muted p-5 rounded-lg border border-border/50">
                    <h4 className="flex items-center gap-2 font-bold text-foreground mb-3">
                        <Search className="w-5 h-5 text-teal-600" />
                        Did you know?
                    </h4>
                    <p className="text-foreground/80">
                        Dry mouth (xerostomia) is a leading cause of bad breath. Saliva washes away food particles and bacteria. If you don't produce enough saliva, bacteria thrive, causing odor.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Effective Solutions</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                        { title: "Tongue Cleaning", desc: "Gently scrape your tongue focused on the back where bacteria hide." },
                        { title: "Hydration", desc: "Drink plenty of water to keep your mouth moist and saliva flowing." },
                        { title: "Regular Flossing", desc: "Remove rotting food particles from between teeth daily." },
                        { title: "Dental Checkups", desc: "Treat gum disease and cavities which are breeding grounds for odor." }
                    ].map((item, i) => (
                        <li key={i} className="flex flex-col gap-2 p-4 bg-card border border-border/50 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 text-teal-600 font-semibold">
                                <CheckCircle className="w-5 h-5" />
                                {item.title}
                            </div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
