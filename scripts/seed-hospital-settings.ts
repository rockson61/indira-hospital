/**
 * Seed the hospital_settings singleton with Indira Hospital data
 */
import { createDirectus, rest, staticToken, readSingleton, updateSingleton } from '@directus/sdk';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const DIRECTUS_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

if (!DIRECTUS_TOKEN) {
    console.error('Error: DIRECTUS_TOKEN not set. Run: export DIRECTUS_TOKEN=$(cat .token)');
    process.exit(1);
}

const client = createDirectus(DIRECTUS_URL)
    .with(staticToken(DIRECTUS_TOKEN))
    .with(rest());

const hospitalData = {
    hospital_name: 'Indira Super Speciality Hospital',
    legal_name: 'Indira Super Speciality Hospital Pvt Ltd',
    tagline: 'Trusted Multi-Speciality Hospital in Vellore',
    description: 'Indira Super Speciality Hospital is a leading multi-speciality hospital in Vellore, Tamil Nadu, offering advanced medical care across 12+ departments with 25+ expert doctors. Equipped with a state-of-the-art Cath Lab, modern ICU, 100+ beds, and 24/7 emergency services.',
    founded_year: 1990,
    phone: '+919842342525',
    emergency_phone: '+919842342525',
    whatsapp: '+917010650063',
    email: 'info@indirahospital.com',
    website: 'https://www.indirasuperspecialityhospital.com',
    address_street: 'Katpadi Road',
    address_city: 'Vellore',
    address_state: 'Tamil Nadu',
    address_pincode: '632004',
    address_country: 'IN',
    geo_lat: 12.9344,
    geo_lng: 79.1422,
    opening_hours: JSON.stringify([
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "20:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "09:00", "closes": "13:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59", "description": "Emergency 24/7" }
    ]),
    price_range: '₹₹',
    bed_count: 100,
    social_facebook: 'https://www.facebook.com/indirasuperspecialityhospital',
    social_instagram: 'https://www.instagram.com/indirasuperspecialityhospital',
    social_youtube: 'https://www.youtube.com/@indirahospitalvellore',
    social_linkedin: '',
    social_twitter: '',
    google_maps_url: 'https://maps.google.com/?q=Indira+Super+Speciality+Hospital+Vellore',
    aggregate_rating: 4.6,
    review_count: 850,
    areas_served: JSON.stringify([
        'Vellore', 'Katpadi', 'Ranipet', 'Ambur', 'Vaniyambadi',
        'Arcot', 'Gudiyatham', 'Walajapet', 'Tiruvannamalai',
        'Krishnagiri', 'Kanchipuram', 'Salem', 'Chennai'
    ]),
};

async function seed() {
    console.log(`🏥 Seeding hospital_settings at ${DIRECTUS_URL}`);

    try {
        // Try to read existing singleton
        const existing = await client.request(readSingleton('hospital_settings' as any));
        console.log('Singleton exists, updating with hospital data...');
    } catch {
        console.log('Singleton empty, creating initial data...');
    }

    try {
        await client.request(updateSingleton('hospital_settings' as any, hospitalData as any));
        console.log('✅ hospital_settings seeded successfully!');
        console.log(`   Name: ${hospitalData.hospital_name}`);
        console.log(`   Address: ${hospitalData.address_street}, ${hospitalData.address_city}, ${hospitalData.address_state} ${hospitalData.address_pincode}`);
        console.log(`   Phone: ${hospitalData.phone}`);
        console.log(`   Geo: ${hospitalData.geo_lat}, ${hospitalData.geo_lng}`);
        console.log(`   Rating: ${hospitalData.aggregate_rating}/5 (${hospitalData.review_count} reviews)`);
    } catch (err: any) {
        console.error('❌ Failed to seed hospital_settings:', err?.errors?.[0]?.message || err?.message);
    }
}

seed().catch(err => { console.error('Seed failed:', err); process.exit(1); });
