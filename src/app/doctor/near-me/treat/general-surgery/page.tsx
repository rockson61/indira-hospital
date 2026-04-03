import React from 'react'
import type { Metadata } from 'next'
import { DepartmentTemplate } from '@/components/healthcare/DepartmentTemplate'
import AioKnowledgeBlock from '@/components/seo/AioKnowledgeBlock'
import { getTreatmentBySlug, getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data'
import { SEED_DATA } from '@/lib/data/seed-data'
import { Activity, Apple, ArrowRight, ArrowRightCircle, Award, Baby, Brain, CheckCircle2, ChevronRight, Clock, Dna, Droplets, Ear, Eye, Flame, GraduationCap, HandCoins, Heart, HeartPulse, Info, Layers, LayoutGrid, Leaf, MapPin, MessageCircle, Mic, Microscope, Move, Navigation, Phone, Radio, Ribbon, Salad, Scale, Search, Shield, ShieldCheck, ShieldPlus, Siren, Sparkles, Star, Stethoscope, Target, ThermometerSnowflake, UserCheck, Users, Users2, Utensils, Volume2, Waves, Wind, Zap } from 'lucide-react'
import { GeneralSurgeryPillarLongForm } from '@/lib/data/treatments/general-surgery/pillar-content'

export const metadata: Metadata = {
    title: "Best General & Laparoscopic Surgeon in Vellore | Dr. P. Shankar | Indira Hospital",
    description: "Indira Super Speciality Hospital, Vellore. Advanced 4K Laparoscopic surgery, Laser Proctology, and 24/7 Emergency trauma care. 30+ years of surgical excellence by Dr. P. Shankar & Dr. Karan Shankar.",
    keywords: "best general surgeon vellore, laparoscopic surgery vellore, gallbladder surgery cost vellore, hernia surgery vellore, appendix surgery vellore, thyroid surgery vellore, dr p shankar vellore, indira hospital vellore general surgery",
    alternates: {
        canonical: "https://www.indirasuperspecialityhospital.com/doctor/near-me/treat/general-surgery"
    }
}

export default function GeneralSurgeryPillarPage() {
    // Filter GS specialists
    const gsDoctors = SEED_DATA.doctors.filter(dr => 
        dr.specialties?.includes('General Surgery') || dr.department === 'General Surgery'
    );

    // Filter GS treatments
    const gsTreatments = TREATMENT_DATA.filter(t => t.parentServiceSlug === 'general-surgery');

    return (
        <DepartmentTemplate
            title="General & Laparoscopic Surgery"
            slug="general-surgery"
            shortDescription="Advanced Keyhole Surgery, Laser Proctology, and 24/7 Trauma Care. Led by senior specialists Dr. P. Shankar and Dr. Karan Shankar for precision outcomes."
            fullDescription=""
            procedures={gsTreatments.map(t => ({ name: t.title, link: `/doctor/near-me/treat/general-surgery/${t.slug}` }))}
            relatedDoctors={gsDoctors}
            quickFacts={[
                { label: 'Consultation', value: 'Elite', icon: 'UserCheck' },
                { label: 'Care Model', value: 'NABH Accredited', icon: 'Shield' },
                { label: 'Tech Level', value: 'Advanced', icon: 'Zap' },
                { label: 'Vellore Hub', value: 'Indira', icon: 'MapPin' }
            ]}
        >
            <GeneralSurgeryPillarLongForm />
        </DepartmentTemplate>
    );
}