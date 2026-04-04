import React from 'react'
import type { Metadata } from 'next'
import { SubServiceTemplate } from '@/components/healthcare/SubServiceTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'
import { AnalAbscessLongForm } from '@/lib/data/treatments/proctology/anal-abscess-content'

export const metadata: Metadata = {
    title: "Anal Abscess Treatment in Vellore | 24/7 Emergency Drainage",
    description: "Emergency Anal Abscess Treatment in Vellore. Dr. Karan Shankar offers 24/7 incision and drainage (I&D) for perianal abscesses. Instant pain relief, seps...",
    keywords: 'anal abscess treatment vellore, emergency drainage vellore, best proctologist vellore, moolam katti treatment vellore, anal abscess surgery cost vellore, indira hospital emergency',
    alternates: {
        canonical: 'https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/proctology/anal-abscess-treatment'
    }
}

export default function AnalAbscessPage() {
    const slug = 'anal-abscess-treatment'
    const treatment = TREATMENT_DATA.find(t => t.slug === slug)

    if (!treatment) return null

    // Emergency Procedure Timeline for Anal Abscess
    const abscessTimeline = [
        {
            title: 'Emergency Triage',
            description: 'Immediate clinical assessment by Dr. Karan Shankar to determine the depth of the abscess and systemic involvement (sepsis markers).',
            duration: '0-15 Mins'
        },
        {
            title: 'Precision Drainage (I&D)',
            description: 'Surgical incision and drainage performed under anesthesia to relieve pressure and clear the infection source.',
            duration: 'Day 1'
        },
        {
            title: 'Recovery Observation',
            description: '6-8 hours of daycare observation with high-spectrum antibiotic cover. Post-operative dressing and sitz bath training.',
            duration: 'Day 1 (Internal)'
        },
        {
            title: 'Infection Tracking',
            description: 'First wound check to ensure proper drainage and monitor for early signs of fistula formation. Return to light activity.',
            duration: 'Day 3'
        }
    ]

    return (
        <SubServiceTemplate
            title={treatment.title}
            description={treatment.shortDescription}
            marketingContent={{
                features: treatment.features?.map(f => typeof f === 'string' ? { title: f, description: '' } : f),
                benefits: treatment.benefits?.map(b => typeof b === 'string' ? { title: b, description: '' } : b),
                faq: treatment.faq
            }}
            timeline={{ steps: abscessTimeline }}
            slug={slug}
        >
            {/* The 2000+ Word Emergency Guide for Anal Abscess */}
            <AnalAbscessLongForm />
        </SubServiceTemplate>
    )
}