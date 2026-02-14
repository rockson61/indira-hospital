/**
 * Schema SEO Migration — Adds all missing fields for semantic SEO (Schema.org JSON-LD)
 * 
 * Creates: hospital_settings singleton
 * Enhances: doctors, departments, services, locations, health_packages,
 *           insurances, testimonials, faqs, pages
 * 
 * Idempotent — skips existing fields/collections.
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

async function createCollectionSafe(collection: string, meta: any) {
    try {
        await client.request(createCollection({ collection, schema: {}, meta }));
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
                interface: config.interface,
                display: config.display,
                options: config.options,
                special: config.special,
                required: config.required,
                note: config.note,
            },
            schema: {
                is_unique: config.unique,
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

// Convenience shortcuts
const seoTitle = { type: 'string', interface: 'input', display: 'raw', note: 'SEO: page title tag' };
const seoDesc = { type: 'text', interface: 'textarea', display: 'raw', note: 'SEO: meta description' };
const sortOrder = { type: 'integer', interface: 'input', display: 'raw', note: 'Display sort order', default_value: 0 };
const richText = { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' };
const plainText = { type: 'text', interface: 'textarea', display: 'raw' };
const str = { type: 'string', interface: 'input', display: 'raw' };
const floatField = { type: 'float', interface: 'input', display: 'raw' };
const intField = { type: 'integer', interface: 'input', display: 'raw' };
const boolField = { type: 'boolean', interface: 'boolean', display: 'boolean', special: ['boolean'] };
const jsonTags = { type: 'json', interface: 'tags', display: 'labels' };
const jsonCode = { type: 'json', interface: 'input-code', display: 'raw' };
const imageField = { type: 'uuid', interface: 'image', display: 'image', special: ['file'] };

// =============================================
// MIGRATION
// =============================================

async function migrate() {
    console.log('🔐 Authenticating...');
    await client.login({ email: ADMIN_EMAIL!, password: ADMIN_PASSWORD! });
    console.log('✅ Authenticated\n');

    // ─────────────────────────────────────────
    // 1. HOSPITAL SETTINGS (Singleton)
    // Schema.org: Hospital, MedicalOrganization, LocalBusiness
    // ─────────────────────────────────────────
    console.log('═══ 1. hospital_settings (NEW Singleton) ═══');
    await createCollectionSafe('hospital_settings', {
        note: 'Global hospital info for LocalBusiness JSON-LD',
        singleton: true
    });
    await addField('hospital_settings', 'hospital_name', { ...str, required: true, note: 'Schema: name' });
    await addField('hospital_settings', 'legal_name', { ...str, note: 'Schema: legalName' });
    await addField('hospital_settings', 'tagline', { ...str, note: 'Schema: slogan' });
    await addField('hospital_settings', 'description', { ...plainText, note: 'Schema: description' });
    await addField('hospital_settings', 'logo', { ...imageField, note: 'Schema: logo' });
    await addField('hospital_settings', 'founded_year', { ...intField, note: 'Schema: foundingDate' });
    await addField('hospital_settings', 'phone', { ...str, note: 'Schema: telephone' });
    await addField('hospital_settings', 'emergency_phone', { ...str, note: 'Emergency contact' });
    await addField('hospital_settings', 'whatsapp', { ...str, note: 'WhatsApp number' });
    await addField('hospital_settings', 'email', { ...str, note: 'Schema: email' });
    await addField('hospital_settings', 'website', { ...str, note: 'Schema: url' });
    await addField('hospital_settings', 'address_street', { ...str, note: 'Schema: streetAddress' });
    await addField('hospital_settings', 'address_city', { ...str, note: 'Schema: addressLocality' });
    await addField('hospital_settings', 'address_state', { ...str, note: 'Schema: addressRegion' });
    await addField('hospital_settings', 'address_pincode', { ...str, note: 'Schema: postalCode' });
    await addField('hospital_settings', 'address_country', { ...str, note: 'Schema: addressCountry' });
    await addField('hospital_settings', 'geo_lat', { ...floatField, note: 'Schema: latitude' });
    await addField('hospital_settings', 'geo_lng', { ...floatField, note: 'Schema: longitude' });
    await addField('hospital_settings', 'opening_hours', { ...jsonCode, note: 'Schema: openingHoursSpecification (JSON array)' });
    await addField('hospital_settings', 'price_range', { ...str, note: 'Schema: priceRange e.g. "₹₹"' });
    await addField('hospital_settings', 'bed_count', { ...intField, note: 'Schema: numberOfBeds' });
    await addField('hospital_settings', 'social_facebook', { ...str, note: 'Schema: sameAs' });
    await addField('hospital_settings', 'social_instagram', { ...str, note: 'Schema: sameAs' });
    await addField('hospital_settings', 'social_youtube', { ...str, note: 'Schema: sameAs' });
    await addField('hospital_settings', 'social_linkedin', { ...str, note: 'Schema: sameAs' });
    await addField('hospital_settings', 'social_twitter', { ...str, note: 'Schema: sameAs' });
    await addField('hospital_settings', 'google_maps_url', { ...str, note: 'Schema: hasMap' });
    await addField('hospital_settings', 'aggregate_rating', { ...floatField, note: 'Schema: aggregateRating.ratingValue' });
    await addField('hospital_settings', 'review_count', { ...intField, note: 'Schema: aggregateRating.reviewCount' });
    await addField('hospital_settings', 'areas_served', { ...jsonTags, note: 'Schema: areaServed' });

    // ─────────────────────────────────────────
    // 2. DOCTORS — Physician schema
    // ─────────────────────────────────────────
    console.log('\n═══ 2. doctors (SEO enhancements) ═══');
    await addField('doctors', 'seo_title', seoTitle);
    await addField('doctors', 'seo_description', seoDesc);
    await addField('doctors', 'medical_registration_number', { ...str, note: 'Physician.identifier — MCI/State reg number' });
    await addField('doctors', 'gender', {
        type: 'string', interface: 'select-dropdown', display: 'labels',
        options: { choices: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }, { text: 'Other', value: 'other' }] },
        note: 'Physician.gender'
    });
    await addField('doctors', 'qualifications', { ...str, note: 'Physician.hasCredential — e.g. MBBS, MS, MCh' });
    await addField('doctors', 'available_days', { ...jsonTags, note: 'Physician.availableService — days available' });
    await addField('doctors', 'phone', { ...str, note: 'Physician.telephone' });
    await addField('doctors', 'email', { ...str, note: 'Physician.email' });
    await addField('doctors', 'social_linkedin', { ...str, note: 'Physician.sameAs' });
    await addField('doctors', 'social_website', { ...str, note: 'Physician.sameAs' });
    await addField('doctors', 'accepting_new_patients', { ...boolField, note: 'Physician.isAcceptingNewPatients', default_value: true });
    await addField('doctors', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 3. DEPARTMENTS — MedicalSpecialty schema
    // ─────────────────────────────────────────
    console.log('\n═══ 3. departments (SEO enhancements) ═══');
    await addField('departments', 'seo_title', seoTitle);
    await addField('departments', 'seo_description', seoDesc);
    await addField('departments', 'short_description', { ...str, note: 'Short text for cards/listings' });
    await addField('departments', 'head_of_department', { ...str, note: 'Link to lead doctor name' });
    await addField('departments', 'facilities', { ...jsonTags, note: 'List of key facilities' });
    await addField('departments', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 4. SERVICES — MedicalProcedure schema
    // ─────────────────────────────────────────
    console.log('\n═══ 4. services (SEO enhancements) ═══');
    await addField('services', 'seo_title', seoTitle);
    await addField('services', 'seo_description', seoDesc);
    await addField('services', 'procedure_type', {
        type: 'string', interface: 'select-dropdown', display: 'labels',
        options: {
            choices: [
                { text: 'Surgical', value: 'SurgicalProcedure' },
                { text: 'Non-Invasive', value: 'NonInvasiveProcedure' },
                { text: 'Diagnostic', value: 'DiagnosticProcedure' },
                { text: 'Therapeutic', value: 'TherapeuticProcedure' },
                { text: 'Palliative', value: 'PalliativeProcedure' },
            ]
        },
        note: 'MedicalProcedure.procedureType'
    });
    await addField('services', 'body_location', { ...str, note: 'MedicalProcedure.bodyLocation' });
    await addField('services', 'preparation', { ...richText, note: 'MedicalProcedure.preparation' });
    await addField('services', 'followup', { ...richText, note: 'MedicalProcedure.followup' });
    await addField('services', 'how_performed', { ...richText, note: 'MedicalProcedure.howPerformed' });
    await addField('services', 'risks_description', { ...richText, note: 'MedicalProcedure.risks' });
    await addField('services', 'benefits_list', { ...jsonTags, note: 'List of procedure benefits' });
    await addField('services', 'risks_list', { ...jsonTags, note: 'List of procedure risks' });
    await addField('services', 'duration_minutes', { ...intField, note: 'Typical procedure duration' });
    await addField('services', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 5. LOCATIONS — MedicalClinic / Place schema
    // ─────────────────────────────────────────
    console.log('\n═══ 5. locations (SEO enhancements) ═══');
    await addField('locations', 'seo_title', seoTitle);
    await addField('locations', 'seo_description', seoDesc);
    await addField('locations', 'geo_lat', { ...floatField, note: 'Place.geo.latitude' });
    await addField('locations', 'geo_lng', { ...floatField, note: 'Place.geo.longitude' });
    await addField('locations', 'google_maps_url', { ...str, note: 'Place.hasMap — Google Maps link' });
    await addField('locations', 'transport_guide', { ...richText, note: 'How to reach from this location' });
    await addField('locations', 'nearby_landmarks', { ...jsonTags, note: 'Reference landmarks' });
    await addField('locations', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 6. FAQs — FAQPage schema
    // ─────────────────────────────────────────
    console.log('\n═══ 6. faqs (enhancements) ═══');
    await addField('faqs', 'related_service', { ...str, note: 'Related service name/slug' });
    await addField('faqs', 'related_department', { ...str, note: 'Related department name/slug' });
    await addField('faqs', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 7. HEALTH PACKAGES — Product / Offer schema
    // ─────────────────────────────────────────
    console.log('\n═══ 7. health_packages (SEO enhancements) ═══');
    await addField('health_packages', 'slug', { ...str, required: true, unique: true, note: 'URL slug' });
    await addField('health_packages', 'seo_title', seoTitle);
    await addField('health_packages', 'seo_description', seoDesc);
    await addField('health_packages', 'short_description', { ...str, note: 'Card/listing description' });
    await addField('health_packages', 'original_price', { ...intField, note: 'Product.offers.highPrice (MRP / strikethrough)' });
    await addField('health_packages', 'validity_days', { ...intField, note: 'Offer validity in days' });
    await addField('health_packages', 'is_featured', { ...boolField, note: 'Show on homepage', default_value: false });
    await addField('health_packages', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 8. INSURANCES — enhancements
    // ─────────────────────────────────────────
    console.log('\n═══ 8. insurances (enhancements) ═══');
    await addField('insurances', 'slug', { ...str, unique: true, note: 'URL slug' });
    await addField('insurances', 'description', { ...plainText, note: 'About this insurer' });
    await addField('insurances', 'website_url', { ...str, note: 'External website link' });
    await addField('insurances', 'cashless_available', { ...boolField, note: 'Cashless treatment flag', default_value: true });
    await addField('insurances', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 9. TESTIMONIALS — Review schema
    // ─────────────────────────────────────────
    console.log('\n═══ 9. testimonials (SEO enhancements) ═══');
    await addField('testimonials', 'treatment_received', { ...str, note: 'What treatment was received' });
    await addField('testimonials', 'department', { ...str, note: 'Related department' });
    await addField('testimonials', 'doctor', { ...str, note: 'Treating doctor name' });
    await addField('testimonials', 'date_of_visit', { type: 'date', interface: 'datetime', display: 'datetime', note: 'Review.datePublished' });
    await addField('testimonials', 'is_featured', { ...boolField, note: 'Show on homepage', default_value: false });
    await addField('testimonials', 'sort_order', sortOrder);

    // ─────────────────────────────────────────
    // 10. PAGES — WebPage schema
    // ─────────────────────────────────────────
    console.log('\n═══ 10. pages (SEO enhancements) ═══');
    await addField('pages', 'og_image', { ...imageField, note: 'Open Graph image' });
    await addField('pages', 'canonical_url', { ...str, note: 'SEO canonical URL' });
    await addField('pages', 'robots_meta', {
        type: 'string', interface: 'select-dropdown', display: 'labels',
        options: {
            choices: [
                { text: 'Index, Follow', value: 'index,follow' },
                { text: 'No Index, Follow', value: 'noindex,follow' },
                { text: 'Index, No Follow', value: 'index,nofollow' },
                { text: 'No Index, No Follow', value: 'noindex,nofollow' },
            ]
        },
        note: 'Robots meta directive',
        default_value: 'index,follow'
    });
    await addField('pages', 'sort_order', sortOrder);

    console.log('\n' + '═'.repeat(60));
    console.log('✨ Schema SEO Migration Complete!');
}

migrate().catch(err => { console.error('Migration failed:', err); process.exit(1); });
