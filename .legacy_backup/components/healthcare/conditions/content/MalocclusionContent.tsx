import React from 'react'
import { Smile, Zap } from 'lucide-react'

export function MalocclusionContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Understanding Your Bite</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                    Ideally, your upper teeth should fit slightly over your lower teeth, and the points of your molars should fit into the grooves of the opposite molars. Deviations from this alignment are called malocclusion.
                </p>

                <h4 className="font-bold text-foreground mb-4">Classes of Malocclusion</h4>
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-teal-200 transition">
                        <div className="text-2xl font-bold text-teal-600">I</div>
                        <div>
                            <strong className="block text-foreground">Class 1</strong>
                            <p className="text-sm text-muted-foreground">The bite is normal, but the upper teeth slightly overlap the lower teeth. Issues are usually crowding or spacing.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-teal-200 transition">
                        <div className="text-2xl font-bold text-teal-600">II</div>
                        <div>
                            <strong className="block text-foreground">Class 2 (Retrognathism)</strong>
                            <p className="text-sm text-muted-foreground">The upper jaw and teeth severely overlap the bottom jaw and teeth (Overbite).</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-teal-200 transition">
                        <div className="text-2xl font-bold text-teal-600">III</div>
                        <div>
                            <strong className="block text-foreground">Class 3 (Prognathism)</strong>
                            <p className="text-sm text-muted-foreground">The lower jaw juts forward, causing lower teeth to overlap upper teeth (Underbite).</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 dark:bg-slate-800/60 p-6 rounded-xl text-center">
                <Smile className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Modern Orthodontics</h3>
                <p className="text-blue-800 text-sm max-w-lg mx-auto">
                    Gone are the days of only metal braces. With clear aligners like Invisalign, correcting malocclusion is discreet, comfortable, and faster than ever.
                </p>
            </div>
        </div>
    )
}
