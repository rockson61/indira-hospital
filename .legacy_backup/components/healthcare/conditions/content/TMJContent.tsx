import React from 'react'
import { Headphones, Settings } from 'lucide-react'

export function TMJContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Is Your Jaw Clicking?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Temporomandibular Joint (TMJ) disorders cause pain and compromised movement of the jaw joint and surrounding muscles. If you hear a "click" or "pop" when you open your mouth, or if your jaw gets stuck, you may have a TMD (Temporomandibular Disorder).
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                            <Headphones className="w-6 h-6 text-teal-600" />
                            <h4 className="font-bold text-foreground">Symptoms</h4>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Radiating pain in the face/neck</li>
                            <li>Jaw muscle stiffness</li>
                            <li>Limited movement or locking</li>
                            <li>Change in the way teeth fit together</li>
                        </ul>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                            <Settings className="w-6 h-6 text-indigo-600" />
                            <h4 className="font-bold text-indigo-900">Therapies</h4>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-indigo-800 space-y-1">
                            <li>Occlusal Appliances (Splints/Guards)</li>
                            <li>Physical Therapy exercises</li>
                            <li>Stress management techniques</li>
                            <li>Botox injections (for muscle tension)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
