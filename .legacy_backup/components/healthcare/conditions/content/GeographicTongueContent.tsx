import React from 'react'
import { Globe, RefreshCw } from 'lucide-react'

export function GeographicTongueContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">A Dynamic Condition</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    The most unique feature of geographic tongue is its changing appearance. The smooth red patches often heal in one area and then migrate (move) to a different part of your tongue. This migration can happen over days, weeks, or months.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-slate-800/60 p-4 rounded-lg flex gap-3">
                        <Globe className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-red-900">Map-like Appearance</h4>
                            <p className="text-sm text-red-800">Smooth red islands with slightly raised white borders.</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-slate-800/60 p-4 rounded-lg flex gap-3">
                        <RefreshCw className="w-6 h-6 text-blue-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-blue-900 dark:text-blue-100">Comes and Goes</h4>
                            <p className="text-sm text-blue-800">You may have symptom-free periods (remission) followed by flare-ups.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Managing Discomfort</h3>
                <p className="text-foreground/80 mb-4">
                    While harmless, it can be uncomfortable. We suggest:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                    <li>Avoiding hot, spicy, or acidic foods during flare-ups.</li>
                    <li>Avoiding tobacco and toothpaste with strong additives/whitening agents.</li>
                    <li>Using over-the-counter pain relievers or mouth rinses if prescribed.</li>
                </ul>
            </div>
        </div>
    )
}
