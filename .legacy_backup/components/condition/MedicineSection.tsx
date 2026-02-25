'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, Pill, Clock, ShieldAlert, Info } from 'lucide-react'

interface Medicine {
  name: string
  type: 'Antibiotic' | 'Pain Relief' | 'Anti-inflammatory' | 'Antiseptic' | 'Topical' | 'Supplement'
  dosage: string
  duration: string
  purpose: string
  sideEffects?: string[]
}

interface MedicineSectionProps {
  conditionName: string
  medicines: Medicine[]
  className?: string
}

export function MedicineSection({ 
  conditionName, 
  medicines,
  className = "" 
}: MedicineSectionProps) {
  const typeColors = {
    'Antibiotic': 'bg-red-100 text-red-700 border-red-300',
    'Pain Relief': 'bg-blue-100 text-blue-700 border-blue-300',
    'Anti-inflammatory': 'bg-purple-100 text-purple-700 border-purple-300',
    'Antiseptic': 'bg-green-100 text-green-700 border-green-300',
    'Topical': 'bg-orange-100 text-orange-700 border-orange-300',
    'Supplement': 'bg-teal-100 text-teal-700 border-teal-300',
  }

  // Safety check: return null if no medicines provided
  if (!medicines || !Array.isArray(medicines) || medicines.length === 0) {
    return null
  }

  return (
    <ModernCard className={`${className} mb-8`}>
      <ModernCardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-blue-200">
        <ModernCardTitle className="flex items-center gap-2 text-2xl">
          <Pill className="w-7 h-7 text-blue-600" />
          Medicines & Tablets for {conditionName}
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent className="p-6">
        {/* Important Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-6 flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-yellow-900 mb-1">⚠️ Important Medical Disclaimer</h3>
            <p className="text-sm text-yellow-800">
              The medications listed below are for <strong>informational purposes only</strong>. 
              Always consult Dr. Rockson Samuel or a qualified dentist before taking any medication. 
              Self-medication can be dangerous. Prescriptions are provided only after proper diagnosis.
            </p>
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {medicines.map((medicine, index) => (
            <div key={index} className={`border-2 rounded-lg p-5 ${typeColors[medicine.type]} bg-opacity-50`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1">{medicine.name}</h3>
                  <Badge className={`${typeColors[medicine.type]} text-xs`}>
                    {medicine.type}
                  </Badge>
                </div>
                <Pill className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5">Purpose</p>
                    <p className="text-sm text-foreground/90">{medicine.purpose}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Pill className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5">Dosage</p>
                    <p className="text-sm text-foreground/90 font-medium">{medicine.dosage}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5">Duration</p>
                    <p className="text-sm text-foreground/90 font-medium">{medicine.duration}</p>
                  </div>
                </div>

                {medicine.sideEffects && medicine.sideEffects.length > 0 && (
                  <div className="flex items-start gap-2 mt-3 pt-3 border-t border-border">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">Possible Side Effects</p>
                      <ul className="text-xs text-foreground/80 space-y-1">
                        {medicine.sideEffects.map((effect, i) => (
                          <li key={i}>• {effect}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            When to Take Medication
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Take medications exactly as prescribed by Dr. Rockson Samuel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Complete the full course of antibiotics even if symptoms improve</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Take pain medication with food to avoid stomach upset</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Contact the clinic immediately if you experience severe side effects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Avoid alcohol while taking antibiotics</span>
            </li>
          </ul>
        </div>

        {/* Prescription Notice */}
        <div className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-5 text-center">
          <h3 className="font-bold text-foreground mb-2">🏥 Get Proper Prescription</h3>
          <p className="text-sm text-foreground/80 mb-4">
            Visit Indira Dental Clinic for a professional diagnosis and personalized treatment plan. 
            Dr. Rockson Samuel will prescribe the right medications based on your specific condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Consultation
            </a>
            <a
              href="tel:7010650063"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call: 7010650063
            </a>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

// Common medicines data for different conditions
export const commonMedicines = {
  toothDecay: [
    {
      name: 'Amoxicillin 500mg',
      type: 'Antibiotic' as const,
      dosage: '500mg, 3 times daily',
      duration: '5-7 days',
      purpose: 'Treats bacterial infection in tooth decay and abscesses',
      sideEffects: ['Nausea', 'Diarrhea', 'Allergic reactions']
    },
    {
      name: 'Ibuprofen 400mg',
      type: 'Pain Relief' as const,
      dosage: '400mg, every 6-8 hours',
      duration: 'As needed for pain',
      purpose: 'Reduces pain and inflammation from tooth decay',
      sideEffects: ['Stomach upset', 'Dizziness']
    },
    {
      name: 'Chlorhexidine Mouthwash 0.2%',
      type: 'Antiseptic' as const,
      dosage: '10ml, twice daily',
      duration: '7-14 days',
      purpose: 'Reduces bacteria and prevents infection',
      sideEffects: ['Temporary teeth staining', 'Altered taste']
    },
  ],
  gumDisease: [
    {
      name: 'Metronidazole 400mg',
      type: 'Antibiotic' as const,
      dosage: '400mg, 3 times daily',
      duration: '7 days',
      purpose: 'Treats anaerobic bacterial infection in gum disease',
      sideEffects: ['Metallic taste', 'Nausea', 'Do not consume alcohol']
    },
    {
      name: 'Doxycycline 100mg',
      type: 'Antibiotic' as const,
      dosage: '100mg, twice daily',
      duration: '7-10 days',
      purpose: 'Reduces gum inflammation and controls periodontitis',
      sideEffects: ['Photosensitivity', 'Stomach upset']
    },
    {
      name: 'Chlorhexidine Gel 0.2%',
      type: 'Topical' as const,
      dosage: 'Apply to gums twice daily',
      duration: '2 weeks',
      purpose: 'Reduces plaque and gum inflammation',
      sideEffects: ['Local irritation', 'Staining']
    },
    {
      name: 'Paracetamol 650mg',
      type: 'Pain Relief' as const,
      dosage: '650mg, every 6 hours',
      duration: 'As needed',
      purpose: 'Relieves gum pain and discomfort',
      sideEffects: ['Rare if taken as directed']
    },
  ],
  toothAbscess: [
    {
      name: 'Amoxicillin + Clavulanic Acid 625mg',
      type: 'Antibiotic' as const,
      dosage: '625mg, twice daily',
      duration: '7-10 days',
      purpose: 'Strong antibiotic for severe dental infections and abscesses',
      sideEffects: ['Diarrhea', 'Nausea', 'Skin rash']
    },
    {
      name: 'Metronidazole 400mg',
      type: 'Antibiotic' as const,
      dosage: '400mg, 3 times daily',
      duration: '5-7 days',
      purpose: 'Treats anaerobic bacteria in abscess',
      sideEffects: ['Metallic taste', 'Avoid alcohol']
    },
    {
      name: 'Diclofenac 50mg',
      type: 'Anti-inflammatory' as const,
      dosage: '50mg, twice daily after meals',
      duration: '3-5 days',
      purpose: 'Reduces severe pain and swelling',
      sideEffects: ['Stomach irritation', 'Dizziness']
    },
    {
      name: 'Betadine Mouthwash',
      type: 'Antiseptic' as const,
      dosage: '10ml diluted, 3 times daily',
      duration: '7 days',
      purpose: 'Prevents spread of infection',
      sideEffects: ['Temporary discoloration']
    },
  ],
  toothSensitivity: [
    {
      name: 'Potassium Nitrate Toothpaste',
      type: 'Topical' as const,
      dosage: 'Brush twice daily',
      duration: 'Ongoing',
      purpose: 'Desensitizes nerve endings in teeth',
      sideEffects: ['None typically']
    },
    {
      name: 'Fluoride Gel 1.1%',
      type: 'Topical' as const,
      dosage: 'Apply daily to sensitive areas',
      duration: '2-4 weeks',
      purpose: 'Strengthens enamel and reduces sensitivity',
      sideEffects: ['Do not swallow']
    },
    {
      name: 'Calcium Supplement',
      type: 'Supplement' as const,
      dosage: '1000mg daily',
      duration: 'Ongoing',
      purpose: 'Strengthens teeth and bones',
      sideEffects: ['Constipation in high doses']
    },
  ],
  bruxism: [
    {
      name: 'Muscle Relaxant (Cyclobenzaprine 5mg)',
      type: 'Pain Relief' as const,
      dosage: '5mg at bedtime',
      duration: 'Short-term (2-3 weeks)',
      purpose: 'Relaxes jaw muscles and reduces grinding',
      sideEffects: ['Drowsiness', 'Dry mouth']
    },
    {
      name: 'Ibuprofen 400mg',
      type: 'Anti-inflammatory' as const,
      dosage: '400mg, twice daily',
      duration: 'As needed',
      purpose: 'Reduces jaw pain and inflammation',
      sideEffects: ['Stomach upset']
    },
    {
      name: 'Magnesium Supplement',
      type: 'Supplement' as const,
      dosage: '400mg before bed',
      duration: 'Ongoing',
      purpose: 'Helps relax muscles and reduce grinding',
      sideEffects: ['Loose stools in high doses']
    },
  ],
  badBreath: [
    {
      name: 'Chlorhexidine Mouthwash 0.12%',
      type: 'Antiseptic' as const,
      dosage: '15ml, twice daily',
      duration: '2 weeks',
      purpose: 'Kills odor-causing bacteria',
      sideEffects: ['Temporary teeth staining', 'Taste changes']
    },
    {
      name: 'Zinc Lozenges',
      type: 'Supplement' as const,
      dosage: '1 lozenge after meals',
      duration: 'Ongoing',
      purpose: 'Neutralizes sulfur compounds causing bad breath',
      sideEffects: ['Metallic taste']
    },
    {
      name: 'Probiotic Supplement',
      type: 'Supplement' as const,
      dosage: '1 capsule daily',
      duration: 'Ongoing',
      purpose: 'Balances oral bacteria and improves breath',
      sideEffects: ['Minor bloating initially']
    },
  ],
  dryMouth: [
    {
      name: 'Artificial Saliva Spray',
      type: 'Topical' as const,
      dosage: 'Spray as needed',
      duration: 'Ongoing',
      purpose: 'Moistens mouth and relieves dry mouth symptoms',
      sideEffects: ['None']
    },
    {
      name: 'Pilocarpine 5mg',
      type: 'Supplement' as const,
      dosage: '5mg, 3 times daily',
      duration: 'As prescribed',
      purpose: 'Stimulates saliva production',
      sideEffects: ['Sweating', 'Nausea']
    },
    {
      name: 'Biotene Dry Mouth Gel',
      type: 'Topical' as const,
      dosage: 'Apply as needed',
      duration: 'Ongoing',
      purpose: 'Lubricates and soothes dry mouth',
      sideEffects: ['None']
    },
  ],
}

