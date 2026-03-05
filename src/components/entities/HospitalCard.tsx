import React from 'react';
import { Star, MapPin, Phone, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";

export function HospitalCard() {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 w-full bg-slate-100 dark:bg-slate-800">
                <Image
                    src="https://lh3.googleusercontent.com/La0fYC-XT-E8lRPk31cNfPmEgsfyWxy9VdOaX9wB81jgu-LOVYZVFeWqi4CcbxW_tOiyiECskDHNbb4vQQ=s0"
                    alt="Indira Superspeciality Hospital"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-2">
                    Indira Superspeciality Hospital
                </h3>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <div className="relative">
                            <Star className="w-4 h-4 text-amber-500/30 fill-current" />
                            <div className="absolute inset-0 overflow-hidden" style={{ width: '10%' }}>
                                <Star className="w-4 h-4 text-amber-500 fill-current" />
                            </div>
                        </div>
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">4.1</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">(296 reviews)</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    Premium State of the Art High level Quaternary care Superspeciality Hospital at the heart of Gandhinagar, Vellore.
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <MapPin className="w-4 h-4 mt-0.5 text-fuchsia-600 flex-shrink-0" />
                        <span className="leading-snug">54, Katpadi Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, IN 632006</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <Phone className="w-4 h-4 text-fuchsia-600 flex-shrink-0" />
                        <a href="tel:+919842324425" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors font-medium">
                            +91 98423 24425
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <Clock className="w-4 h-4 text-fuchsia-600 flex-shrink-0" />
                        <span className="font-medium">Open 24/7 Hours</span>
                    </div>
                </div>

                <div className="pt-2">
                    <a
                        href="https://maps.google.com/maps?cid=9667111072695054632"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 bg-fuchsia-50 dark:bg-fuchsia-500/10 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-400 text-sm font-bold rounded-xl transition-colors border border-fuchsia-100 dark:border-fuchsia-500/20"
                    >
                        View on Google Maps
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
