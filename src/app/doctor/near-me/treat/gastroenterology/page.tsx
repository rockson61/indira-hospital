'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { Stethoscope, Shield, Target, Zap, Activity, Heart, Clock, Award, Star, Search } from 'lucide-react'

export default function GastroenterologyPillarPage() {
    // Filter specialists (Using current specialist Dr. Karan Shankar)
    const specialists = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.some(s => s.toLowerCase().includes('gastro')) || 
        dr.specialties?.some(s => s.toLowerCase().includes('hepatology'))
    );

    // Filter treatments
    const treatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'gastroenterology');

    const title = "Gastroenterology & Hepatology"
    const slug = "gastroenterology"
    const shortDescription = "Regional Center of Excellence for Digestive Health. Advanced Therapeutic Endoscopy, Liver Care, and Surgical GI solutions led by Dr. Karan Shankar."
    
    const fullDescription = `
        <div class="gastroenterology-pillar-content space-y-12">
            <section class="intro bg-white rounded-3xl">
                <h2 class="text-3xl font-bold text-slate-900 mb-6">World-Class Digestive Health & Liver Care</h2>
                <p class="text-lg leading-relaxed text-slate-700">
                    The <strong>Department of Gastroenterology & Hepatology</strong> at Indira Super Speciality Hospital is dedicated to the precision diagnosis and non-surgical management of complex gastrointestinal and liver disorders. Led by <strong>Dr. Karan Shankar</strong>, we combine the world's most advanced <strong>Olympus 190 Series HD Endoscopy</strong> with deep clinical expertise.
                </p>
                <div class="grid md:grid-cols-2 gap-8 mt-8">
                    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 class="text-xl font-bold text-blue-900 mb-3">Therapeutic Endoscopy</h3>
                        <p class="text-slate-700 text-sm">Beyond diagnosis, we perform life-saving interventions like band ligation, APC, and polypectomy during a single session.</p>
                    </div>
                    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 class="text-xl font-bold text-blue-900 mb-3">Advanced Hepatology</h3>
                        <p class="text-slate-700 text-sm">Specialized reversal protocols for Fatty Liver (NASH) and comprehensive management of Chronic Hepatitis and Cirrhosis.</p>
                    </div>
                </div>
            </section>

            <section class="specialist-focus bg-slate-900 text-white p-12 rounded-[3rem]">
                <div class="max-w-3xl">
                    <span class="inline-block px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-4">Clinical Lead Focus</span>
                    <h2 class="text-4xl font-bold mb-6">Led by Dr. Karan Shankar</h2>
                    <p class="text-blue-100/80 text-xl leading-relaxed mb-8">
                        Widely considered among the <strong>best gastroenterologists in Vellore</strong>, Dr. Karan Shankar (FIAGES, FMAS, DMAS, FAGIE) brings unmatched technical expertise in <strong>Surgical Gastroenterology</strong> and <strong>Therapeutic Endoscopy</strong>. His focus is on "Minimal Access" solutions and early detection of GI malignancies.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full border border-white/20 text-sm">
                            <Award class="w-4 h-4 text-blue-400" /> FIAGES / FMAS / DMAS
                        </div>
                        <div class="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full border border-white/20 text-sm">
                            <Shield class="w-4 h-4 text-blue-400" /> FAGIE - Endoscopy Lead
                        </div>
                    </div>
                </div>
            </section>

            <section class="clinical-pillars">
                <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">Core Clinical Focus Areas</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Zap class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-3">Endoscopy</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">Painless diagnostic and therapeutic visualization of the upper and lower GI tract for ulcers, cancers, and polyps.</p>
                        <ul class="text-xs text-blue-600 font-bold space-y-2">
                            <li>• HD Gastroscopy (OGD)</li>
                            <li>• Total Colonoscopy Screening</li>
                            <li>• Band Ligation & APC</li>
                        </ul>
                    </div>

                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Shield class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-3">Hepatology</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">Comprehensive management of liver health, focusing on the reversal of fatty liver and chronic cirrhosis care.</p>
                        <ul class="text-xs text-blue-600 font-bold space-y-2">
                            <li>• Fatty Liver (NASH) Center</li>
                            <li>• Hepatitis B & C Treatment</li>
                            <li>• Cirrhosis Complication Mgmt.</li>
                        </ul>
                    </div>

                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Star class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-3">IBD & GERD</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">Precision management of chronic acid reflux, hiatus hernia, and Inflammatory Bowel Disease (Crohn’s/Colitis).</p>
                        <ul class="text-xs text-blue-600 font-bold space-y-2">
                            <li>• Lap. Reflux Surgery</li>
                            <li>• IBD Biologics Clinic</li>
                            <li>• Hiatus Hernia Repair</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="diagnostic-excellence space-y-8">
                <h2 class="text-3xl font-bold text-slate-900">Advanced Diagnostic & Surgical Infrastructure</h2>
                <p class="text-slate-700 leading-relaxed">
                    Our center is built on the foundation of the world's best GI technology, ensuring that every diagnosis is conclusive and every surgery is minimally invasive.
                </p>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Activity class="w-10 h-10 text-blue-500 mb-4" />
                        <h4 class="font-bold text-slate-900">Olympus 190 HD</h4>
                        <p class="text-xs text-slate-500 mt-2">Crystal-clear visualization for detecting early polyps and cancers.</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Target class="w-10 h-10 text-blue-500 mb-4" />
                        <h4 class="font-bold text-slate-900">APC Device</h4>
                        <p class="text-xs text-slate-500 mt-2">Non-contact thermal treatment for delicate GI bleeding control.</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Search class="w-10 h-10 text-blue-500 mb-4" />
                        <h4 class="font-bold text-slate-900">Narrow Band Imaging</h4>
                        <p class="text-xs text-slate-500 mt-2">Specialized light spectra for enhanced mucosal assessment.</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Zap class="w-10 h-10 text-blue-500 mb-4" />
                        <h4 class="font-bold text-slate-900">4K Laparoscopy</h4>
                        <p class="text-xs text-slate-500 mt-2">Ultra-HD keyhole surgery for complex abdominal resections.</p>
                    </div>
                </div>
            </section>

            <section class="international-patients bg-blue-50/50 p-12 rounded-[3rem] border border-blue-100">
                <div class="flex flex-col md:flex-row gap-12 items-center">
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-blue-900 mb-4">Elite Support for International Patient GI Care</h2>
                        <p class="text-slate-700 leading-relaxed">
                            Indira Super Speciality Hospital is a global destination for <strong>advanced Gastroenterology</strong>. Patients from across Africa, the Middle East, and South Asia trust our center for complex liver care and cancer resections due to our high clinical success rates and state-of-the-art facilities.
                        </p>
                        <ul class="mt-6 space-y-2">
                            <li class="flex items-center gap-2 text-blue-800 font-medium">
                                <Activity class="w-5 h-5" /> Dedicated GI Concierge Service
                            </li>
                            <li class="flex items-center gap-2 text-blue-800 font-medium">
                                <Search class="w-5 h-5" /> Fast-Track Diagnostic & Endoscopy Scheduling
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-xl border border-blue-100 text-center">
                        <h4 class="text-blue-900 font-bold mb-2">Speak to GI Coordinator</h4>
                        <p class="text-xs text-slate-500">For international pricing and procedure scheduling.</p>
                        <button class="w-full mt-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Start Inquiry</button>
                    </div>
                </div>
            </section>
        </div>
    `

    return (
        <DepartmentTemplate
            title={title}
            slug={slug}
            shortDescription={shortDescription}
            fullDescription={fullDescription}
            procedures={treatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/gastroenterology/${t.slug}` }))}
            relatedDoctors={specialists}
            relatedServices={treatments.map(t => ({
                title: t.title,
                url: `/doctor/near-me/treat/gastroenterology/${t.slug}`,
                description: t.shortDescription,
                icon: 'Stethoscope'
            }))}
            technology={[
                { name: 'Olympus 190 HD', description: 'Advanced mucosal visualization.', icon: 'Activity' },
                { name: 'APC (Argon Plasma)', description: 'Precision thermal GI bleeding control.', icon: 'Zap' },
                { name: 'Narrow Band Imaging', description: 'Enhanced early cancer detection.', icon: 'Search' }
            ]}
        />
    )
}
