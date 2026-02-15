/**
 * Seed Hospital Settings
 * 
 * Populates the hospital_settings singleton with Indira Hospital data.
 */
import { createDirectus, rest, authentication, updateSingleton } from '@directus/sdk';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const CMS_URL = process.env.NEXT_PUBLIC_API_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!CMS_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Missing env vars');
    process.exit(1);
}

const client = createDirectus(CMS_URL)
    .with(authentication('json', { autoRefresh: true }))
    .with(rest());

const HOSPITAL_DATA = {
    hospital_name: 'Indira Super Speciality Hospital',
    legal_name: 'Indira Hospital Projects Pvt Ltd',
    tagline: 'Care with Compassion',
    description: 'Indira Super Speciality Hospital in Vellore is a leading multi-specialty healthcare provider known for its advanced medical technology and expert doctors. We offer 24/7 emergency care, trauma services, and specialized treatments in Neurology, Cardiology, Orthopaedics, and more.',
    founded_year: 2015,

    // Contact
    phone: '+91 63826 95853',
    emergency_phone: '0416-224-1111',
    whatsapp: '+916382695853',
    email: 'info@indirahospital.in',
    website: 'https://indirasuperspecialityhospital.com',

    // Address
    address_street: 'No. 1, Gandhipet Road, Thirunagar',
    address_city: 'Vellore',
    address_state: 'Tamil Nadu',
    address_pincode: '632006',
    address_country: 'India',
    geo_lat: 12.9298,
    geo_lng: 79.1370,
    google_maps_url: 'https://goo.gl/maps/example', // Update with real link if available

    // Social
    social_facebook: 'https://www.facebook.com/IndiraSuperSpecialityHospital',
    social_instagram: 'https://www.instagram.com/indirahospitalvellore',
    social_youtube: 'https://www.youtube.com/c/IndiraSuperSpecialityHospital',

    // SEO
    opening_hours: [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }
    ],
    areas_served: ["Vellore", "Ranipet", "Tirupattur", "Chittoor", "Arcot"],
};

async function seed() {
    console.log('🔐 Authenticating...');
    await client.login({ email: ADMIN_EMAIL!, password: ADMIN_PASSWORD! });
    console.log('✅ Authenticated');

    console.log('🏥 Seeding Hospital Settings...');
    try {
        await client.request(updateSingleton('hospital_settings', HOSPITAL_DATA));
        console.log('✅ Hospital Settings Updated!');
    } catch (e: any) {
        console.error('❌ Error updating settings:', e?.message || e);
        // Fallback: If singleton doesn't exist (though migration should have created it), maybe try creating it? 
        // Singletons are just collections. If the row doesn't exist, updateSingleton might fail depending on version. 
        // But createCollection with singleton:true usually initializes the row.
    }
}

seed().catch(err => { console.error('Seed failed:', err); process.exit(1); });
