import React from 'react'
import type { Metadata } from 'next'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'
import { SEED_DATA } from '@/lib/data/seed-data'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'
import { ProctologyPillarLongForm } from '@/lib/data/treatments/proctology/pillar-content'

export const metadata: Metadata = {
    title: "Best Proctologist in Vellore | Laser Piles & Fistula Trea...",
    description: "Indira Laser Proctology Center, Vellore. Expert painless treatment for Piles, Fissure, Fistula, and Pilonidal Sinus by internationally trained surgeons ...",
    keywords: "best proctologist vellore, laser piles treatment vellore, fistula surgery cost vellore, anal fissure specialist vellore, pilonidal sinus laser surgery vellore, colorectal surgeon vellore, indira hospital vellore proctology",
    alternates: {
        canonical: "https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/proctology"
    }
}

export default function ProctologyPillarPage() {
    // Filter proctology specialists
    const proctologyDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('Proctology') || dr.specialties?.includes('Colorectal Surgery')
    );

    // Filter proctology treatments
    const proctologyTreatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'proctology');

    const title = "Proctology"
    const slug = "proctology"
    const shortDescription = "India's Leading Laser Proctology Center. Expert painless treatment for Piles, Fissure, Fistula, and Pilonidal Sinus by internationally trained surgeons Dr. P. Shankar and Dr. Karan Shankar."

    return (
        <DepartmentTemplate
            title={title}
            slug={slug}
            shortDescription={shortDescription}
            fullDescription=""
            procedures={proctologyTreatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/proctology/${t.slug}` }))}
            relatedDoctors={proctologyDoctors}
            relatedServices={proctologyTreatments.map(t => ({
                title: t.title,
                url: `/doctor/near-me/treat/proctology/${t.slug}`,
                description: t.shortDescription,
                icon: 'Zap'
            }))}
            technology={[
                { name: '1470nm Diode Laser', description: 'Precision fiber for bloodless surgery.', icon: 'Zap' },
                { name: 'HD Anoscopy', description: 'Ultra-clear diagnostic imaging.', icon: 'Shield' },
                { name: 'FiLaC Radial Fiber', description: '360-degree laser emission for total fistula tract closure.', icon: 'Award' }
            ]}
        >
            <ProctologyPillarLongForm />
        </DepartmentTemplate>
    )
}