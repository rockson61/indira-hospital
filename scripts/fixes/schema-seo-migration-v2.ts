/**
 * Schema & SEO Migration Script V2
 * 
 * Adds missing SEO fields and metadata to Diagnostics, Health Packages, and Blog (Posts).
 */
import { createDirectus, rest, authentication, createField } from '@directus/sdk';
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

    const seoValues = {
        seo_title: { type: 'string', width: 'half', note: 'Meta Title' },
        seo_description: { type: 'text', interface: 'textarea', width: 'full', note: 'Meta Description' },
        sort_order: { type: 'integer', width: 'half', note: 'Sort Order' },
    };

    // 1. Diagnostics SEO
    console.log('═══ 1. Diagnostics SEO ═══');
    for (const [key, config] of Object.entries(seoValues)) {
        await addField('diagnostics', key, config);
    }
    await addField('diagnostics', 'body_system', { type: 'string', width: 'half', note: 'e.g. Digestive, Cardiac' });
    await addField('diagnostics', 'used_to_diagnose', { type: 'json', interface: 'tags', width: 'full', note: 'Conditions this test helps identify' });
    await addField('diagnostics', 'normal_range', { type: 'string', width: 'half' });

    // 2. Health Packages SEO & Fields
    console.log('\n═══ 2. Health Packages SEO ═══');
    for (const [key, config] of Object.entries(seoValues)) {
        await addField('health_packages', key, config);
    }
    await addField('health_packages', 'short_description', { type: 'text', interface: 'textarea', width: 'full' });
    await addField('health_packages', 'original_price', { type: 'integer', width: 'half', note: 'Strikethrough price' });
    await addField('health_packages', 'validity_days', { type: 'integer', width: 'half' });
    await addField('health_packages', 'is_featured', { type: 'boolean', interface: 'boolean', width: 'half' });

    // 3. Blog (Posts) SEO
    console.log('\n═══ 3. Blog (Posts) SEO ═══');
    for (const [key, config] of Object.entries(seoValues)) {
        await addField('posts', key, config);
    }

    console.log('\n' + '═'.repeat(60));
    console.log('✨ Schema & SEO Migration V2 Complete!');
}

setup().catch(err => { console.error('Setup failed:', err); process.exit(1); });
