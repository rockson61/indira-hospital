'use client'

import React from 'react'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import { SEED_DATA } from '@/lib/data/seed-data'
import { TREATMENT_DATA } from '@/lib/data/treatment-data'
import { Baby, Shield, Target, Zap, Activity, Heart, Clock, Award, Star } from 'lucide-react'

export default function GynaecologyPillarPage() {
    // Filter specialists (Using current specialist Dr. Praharshitha Sagiraju)
    const specialists = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.some(s => s.toLowerCase().includes('gynaec')) || 
        dr.specialties?.some(s => s.toLowerCase().includes('obstetrics'))
    );

    // Filter treatments
    const treatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'obstetrics-gynaecology');

    const title = "Gynaecology & Obstetrics"
    const slug = "obstetrics-gynaecology"
    const shortDescription = "Comprehensive Women's Healthcare led by AIIMS experts. Specializing in Minimal Access (Keyhole) Surgery, High-Risk Maternity, and Advanced Fertility solutions."
    
    const fullDescription = `
        <div class="gynecology-pillar-content space-y-12">
            <section class="intro bg-white rounded-3xl">
                <h2 class="text-3xl font-bold text-slate-900 mb-6">Empowering Women Through Clinical Excellence</h2>
                <p class="text-lg leading-relaxed text-slate-700">
                    The <strong>Department of Gynaecology & Obstetrics</strong> at Indira Super Speciality Hospital is a sanctuary of advanced women's health. We combine 30+ years of clinical heritage with the specialized expertise of <strong>Dr. Praharshitha Sagiraju</strong> (MS - AIIMS Raipur, PDCC - Gynae Endoscopy) to provide world-class medical and surgical solutions for women at every stage of life.
                </p>
                <div class="grid md:grid-cols-2 gap-8 mt-8">
                    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
                        <h3 class="text-xl font-bold text-rose-900 mb-3">Maternal-Fetal Excellence</h3>
                        <p class="text-slate-700 text-sm">From preconception counseling to high-risk delivery management, we ensure the safest journey for both mother and baby.</p>
                    </div>
                    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
                        <h3 class="text-xl font-bold text-rose-900 mb-3">Minimal Access Surgery</h3>
                        <p class="text-slate-700 text-sm">Specializing in "Zero-Recovery" keyhole surgeries for fibroids, endometriosis, and laparoscopic hysterectomies.</p>
                    </div>
                </div>
            </section>

            <section class="specialist-focus bg-slate-900 text-white p-12 rounded-[3rem]">
                <div class="max-w-3xl">
                    <span class="inline-block px-4 py-1 bg-rose-500 text-white text-xs font-bold rounded-full mb-4">Clinical Lead Focus</span>
                    <h2 class="text-4xl font-bold mb-6">Led by Dr. Praharshitha Sagiraju</h2>
                    <p class="text-rose-100/80 text-xl leading-relaxed mb-8">
                        As a former resident of <strong>AIIMS Raipur</strong> and a specialist in <strong>Gynaecological Endoscopy</strong>, Dr. Praharshitha brings a level of surgical precision and clinical diagnostic depth that is rare. Her focus is on organ-preserving surgeries and evidence-based maternity care.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full border border-white/20 text-sm">
                            <Award class="w-4 h-4 text-rose-400" /> MS - AIIMS Raipur
                        </div>
                        <div class="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full border border-white/20 text-sm">
                            <Shield class="w-4 h-4 text-rose-400" /> PDCC - Gynae Endoscopy
                        </div>
                    </div>
                </div>
            </section>

            <section class="clinical-pillars">
                <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">Our Core Clinical Domains</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-6">
                            <Baby class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-3">Obstetrics</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">Managing high-risk pregnancies, gestational diabetes, and painless deliveries with 24/7 neonatal backup.</p>
                        <ul class="text-xs text-rose-600 font-bold space-y-2">
                            <li>• High-Risk Pregnancy</li>
                            <li>• Painless Labor (Epidural)</li>
                            <li>• Level II NICU Backup</li>
                        </ul>
                    </div>

                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-6">
                            <Zap class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-3">Laparoscopy</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">Advanced keyhole surgery for complex gynaecological conditions ensuring 24-hour discharge.</p>
                        <ul class="text-xs text-rose-600 font-bold space-y-2">
                            <li>• Lap. Hysterectomy (TLH)</li>
                            <li>• Lap. Myomectomy</li>
                            <li>• Endometriosis Clearance</li>
                        </ul>
                    </div>

                    <div class="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div class="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-6">
                            <Star class="w-7 h-7" />
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-3">Fertility & PCOS</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">Evidence-based management of conception challenges and metabolic restoration for PCOS.</p>
                        <ul class="text-xs text-rose-600 font-bold space-y-2">
                            <li>• IUI & Follicular Study</li>
                            <li>• PCOS Reversal Diets</li>
                            <li>• Recurrent Loss protocols</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="surgery-comparison bg-rose-50/50 p-12 rounded-[3rem] border border-rose-100">
                <h2 class="text-3xl font-bold text-rose-900 mb-8 font-primary text-center">Pioneering Keyhole Gynae Surgery</h2>
                <div class="overflow-hidden rounded-2xl border border-rose-200 bg-white">
                    <table class="w-full text-left">
                        <thead class="bg-rose-100/50">
                            <tr>
                                <th class="p-4 font-bold text-rose-900">Feature</th>
                                <th class="p-4 font-bold text-rose-700">Indira Keyhole Surgery</th>
                                <th class="p-4 font-bold text-slate-500">Traditional Open Surgery</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-rose-100">
                            <tr>
                                <td class="p-4 font-medium text-slate-700">Incision Size</td>
                                <td class="p-4 text-rose-600 font-bold">5-10 mm (Micro)</td>
                                <td class="p-4 text-slate-500">10-15 cm (Large)</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-slate-700">Hospital Stay</td>
                                <td class="p-4 text-rose-600 font-bold">24 Hours</td>
                                <td class="p-4 text-slate-500">4-6 Days</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-slate-700">Blood Loss</td>
                                <td class="p-4 text-rose-600 font-bold">Minimal / Zero</td>
                                <td class="p-4 text-slate-500">Significant</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-slate-700">Recovery Time</td>
                                <td class="p-4 text-rose-600 font-bold">1 Week</td>
                                <td class="p-4 text-slate-500">4-6 Weeks</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="diagnostic-excellence space-y-8">
                <h2 class="text-3xl font-bold text-slate-900">Diagnostic & Therapeutic Precision</h2>
                <p class="text-slate-700 leading-relaxed">
                    Our department is equipped with world-class diagnostic infrastructure to ensure accurate detection and targeted treatment of any gynaecological abnormality.
                </p>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Activity class="w-10 h-10 text-rose-500 mb-4" />
                        <h4 class="font-bold text-slate-900">4K Laparoscopy</h4>
                        <p class="text-xs text-slate-500 mt-2">Ultra-HD visualization for bladder and nerve-safe surgery.</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Target class="w-10 h-10 text-rose-500 mb-4" />
                        <h4 class="font-bold text-slate-900">Hysteroscopy</h4>
                        <p class="text-xs text-slate-500 mt-2">"No-Cut" visualization of the uterine cavity for polyps and fibroids.</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Heart class="w-10 h-10 text-rose-500 mb-4" />
                        <h4 class="font-bold text-slate-900">Fetal Monitoring</h4>
                        <p class="text-xs text-slate-500 mt-2">Continuous CTG and Doppler monitoring for baby's well-being.</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <Shield class="w-10 h-10 text-rose-500 mb-4" />
                        <h4 class="font-bold text-slate-900">Cancer Screening</h4>
                        <p class="text-xs text-slate-500 mt-2">Advanced Colposcopy and Liquid-based Cytology (LBC).</p>
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
            procedures={treatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/obstetrics-gynaecology/${t.slug}` }))}
            relatedDoctors={specialists}
            relatedServices={treatments.map(t => ({
                title: t.title,
                url: `/doctor/near-me/treat/obstetrics-gynaecology/${t.slug}`,
                description: t.shortDescription,
                icon: 'Heart'
            }))}
            technology={[
                { name: '4K Laparoscopic Stack', description: 'Magnified surgical precision.', icon: 'Activity' },
                { name: 'Office Hysteroscopy', description: 'Immediate cavity diagnosis without cuts.', icon: 'Target' },
                { name: 'HD Fetal Doppler', description: 'Advanced baby-heart vibration tracking.', icon: 'Heart' }
            ]}
        />
    )
}
