/**
 * Schema & SEO Migration Script
 * 
 * Adds missing SEO fields and creates the hospital_settings singleton.
 */
import { createDirectus, rest, authentication, createCollection, createField } from '@directus/sdk';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const CMS_URL = process.env.NEXT_PUBLIC_API_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!CMS_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Missing env vars. Ensure .env.local has NEXT_PUBLIC_API_URL, ADMIN_EMAIL, ADMIN_PASSWORD');
    process.exit(1);
}

const client = createDirectus(CMS_URL)
    .with(authentication('json', { autoRefresh: true }))
    .with(rest());

// =============================================
// HELPERS
// =============================================

async function createCollectionSafe(collection: string, meta: any, schema: any = {}) {
    try {
        await client.request(createCollection({ collection, schema, meta }));
        console.log(`  ✅ Created collection: ${collection}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`  ⏭️  Collection ${collection} already exists`);
        } else {
            console.error(`  ❌ Error creating collection ${collection}:`, e?.errors?.[0]?.message || e?.message);
        }
    }
}

async function addField(collection: string, field: string, config: any) {
    try {
        await client.request(createField(collection, {
            field,
            type: config.type,
            meta: {
                interface: config.interface || 'input',
                display: config.display || null,
                options: config.options || null,
                special: config.special || null,
                required: config.required || false,
                note: config.note || null,
                hidden: config.hidden || false,
                width: config.width || 'full',
            },
            schema: {
                is_unique: config.unique || false,
                default_value: config.default_value,
            }
        }));
        console.log(`    ✅ ${collection}.${field}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`    ⏭️  ${collection}.${field} (exists)`);
        } else {
            console.error(`    ❌ ${collection}.${field}: ${e?.errors?.[0]?.message || e?.message}`);
        }
    }
}

// =============================================
// MAIN SETUP
// =============================================

async function setup() {
    console.log('🔐 Authenticating...');
    await client.login({ email: ADMIN_EMAIL!, password: ADMIN_PASSWORD! });
    console.log('✅ Authenticated\n');

    // 1. Hospital Settings (Singleton)
    console.log('═══ 1. Hospital Settings ═══');
    await createCollectionSafe('hospital_settings', { singleton: true, note: 'Global Hospital Metadata' });

    // Basic Info
    await addField('hospital_settings', 'hospital_name', { type: 'string', width: 'half', required: true });
    await addField('hospital_settings', 'legal_name', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'tagline', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'description', { type: 'text', interface: 'textarea', width: 'full' });
    await addField('hospital_settings', 'logo', { type: 'uuid', interface: 'file-image', related_collection: 'directus_files' }); // specialized handling might be needed for file relation, but let's try basic
    await addField('hospital_settings', 'founded_year', { type: 'integer', width: 'half' });

    // Contact
    await addField('hospital_settings', 'phone', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'emergency_phone', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'whatsapp', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'email', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'website', { type: 'string', width: 'half' });

    // Address
    await addField('hospital_settings', 'address_street', { type: 'string', width: 'full' });
    await addField('hospital_settings', 'address_city', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'address_state', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'address_pincode', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'address_country', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'geo_lat', { type: 'float', width: 'half' });
    await addField('hospital_settings', 'geo_lng', { type: 'float', width: 'half' });

    // Social
    await addField('hospital_settings', 'social_facebook', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'social_instagram', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'social_youtube', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'social_linkedin', { type: 'string', width: 'half' });
    await addField('hospital_settings', 'social_twitter', { type: 'string', width: 'half' });

    // SEO / Other
    await addField('hospital_settings', 'google_maps_url', { type: 'string', width: 'full' });
    await addField('hospital_settings', 'areas_served', { type: 'json', interface: 'tags', width: 'full' });
    await addField('hospital_settings', 'opening_hours', { type: 'json', interface: 'code', width: 'full', note: 'Schema.org OpeningHoursSpecification format' });


    // 2. Doctors SEO
    console.log('\n═══ 2. Doctors SEO ═══');
    const seoValues = {
        seo_title: { type: 'string', width: 'half', note: 'Meta Title' },
        seo_description: { type: 'text', interface: 'textarea', width: 'full', note: 'Meta Description' },
        sort_order: { type: 'integer', width: 'half', note: 'Sort Order' },
    };

    for (const [key, config] of Object.entries(seoValues)) {
        await addField('doctors', key, config);
    }

    await addField('doctors', 'medical_registration_number', { type: 'string', width: 'half' });
    await addField('doctors', 'gender', {
        type: 'string',
        interface: 'select-dropdown',
        options: { choices: [{ text: 'Male', value: 'Male' }, { text: 'Female', value: 'Female' }, { text: 'Other', value: 'Other' }] },
        width: 'half'
    });
    await addField('doctors', 'qualifications', { type: 'string', width: 'full' });
    await addField('doctors', 'available_days', { type: 'json', interface: 'tags', width: 'full' });
    await addField('doctors', 'email', { type: 'string', width: 'half' });
    await addField('doctors', 'phone', { type: 'string', width: 'half' });
    await addField('doctors', 'social_linkedin', { type: 'string', width: 'half' });

    // 3. Services SEO
    console.log('\n═══ 3. Services SEO ═══');
    for (const [key, config] of Object.entries(seoValues)) {
        await addField('services', key, config);
    }
    await addField('services', 'procedure_type', {
        type: 'string',
        interface: 'select-dropdown',
        options: { choices: [{ text: 'Surgical', value: 'Surgical' }, { text: 'Non-Surgical', value: 'Non-Surgical' }, { text: 'Diagnostic', value: 'Diagnostic' }] },
        width: 'half'
    });
    await addField('services', 'duration_minutes', { type: 'integer', width: 'half' });
    await addField('services', 'benefits_list', { type: 'json', interface: 'tags', width: 'full' });

    // 4. Locations SEO
    console.log('\n═══ 4. Locations SEO ═══');
    for (const [key, config] of Object.entries(seoValues)) {
        await addField('locations', key, config);
    }
    await addField('locations', 'geo_lat', { type: 'float', width: 'half' });
    await addField('locations', 'geo_lng', { type: 'float', width: 'half' });
    await addField('locations', 'google_maps_url', { type: 'string', width: 'full' });
    await addField('locations', 'nearby_landmarks', { type: 'json', interface: 'tags', width: 'full' });

    // 5. Departments SEO
    console.log('\n═══ 5. Departments SEO ═══');
    for (const [key, config] of Object.entries(seoValues)) {
        await addField('departments', key, config);
    }
    await addField('departments', 'short_description', { type: 'text', interface: 'textarea', width: 'full' });
    await addField('departments', 'facilities', { type: 'json', interface: 'tags', width: 'full' });

    console.log('\n' + '═'.repeat(60));
    console.log('✨ Schema & SEO Migration Complete!');
}

setup().catch(err => { console.error('Setup failed:', err); process.exit(1); });
