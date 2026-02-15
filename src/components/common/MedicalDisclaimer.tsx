"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, AlertCircle, BookOpen } from "lucide-react";

export function MedicalDisclaimer() {
    return (
        <section className="bg-gray-50 border-t border-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Box 1: Medical Review */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start space-x-4">
                        <div className="bg-purple-100 p-2 rounded-lg shrink-0">
                            <ShieldCheck className="w-5 h-5 text-purple-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Medically Reviewed</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Content medically reviewed by{" "}
                                <Link href="/doctors/dr-karan-shankar" className="text-purple-700 font-medium hover:underline">
                                    Dr. Karan Shankar
                                </Link>
                                , Clinical Executive Director, to ensure clinical accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Box 2: Disclaimer */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start space-x-4">
                        <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                            <AlertCircle className="w-5 h-5 text-amber-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Not Medical Advice</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                The information provided is for educational purposes only and not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.
                            </p>
                        </div>
                    </div>

                    {/* Box 3: References */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start space-x-4">
                        <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                            <BookOpen className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Trusted Sources</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Our content is curated from peer-reviewed medical journals, standard guidelines, and authoritative healthcare websites to ensure reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
