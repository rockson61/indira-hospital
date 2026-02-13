import { createDirectus, rest, authentication, createCollection, createField } from '@directus/sdk';
import 'dotenv/config';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const CMS_URL = process.env.NEXT_PUBLIC_API_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!CMS_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Missing environment variables.');
    process.exit(1);
}

const client = createDirectus(CMS_URL)
    .with(authentication('json', { autoRefresh: true }))
    .with(rest());

async function updateSchema() {
    console.log('Authenticating...');
    try {
        await client.login({ email: ADMIN_EMAIL as string, password: ADMIN_PASSWORD as string });
    } catch (error: any) {
        console.error('Login failed:', error);
        process.exit(1);
    }
    console.log('Authenticated. Updating schema for Marketing Components...');

    // 1. FAQs Collection
    await createCollectionIfNotExists('faqs', {
        note: 'SEO FAQs',
        singleton: false
    });
    await createFieldIfNotExists('faqs', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('faqs', 'question', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('faqs', 'answer', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' });
    await createFieldIfNotExists('faqs', 'category', {
        type: 'string',
        interface: 'select-dropdown',
        display: 'labels',
        options: {
            choices: [
                { text: 'General', value: 'general' },
                { text: 'Insurance', value: 'insurance' },
                { text: 'Treatment', value: 'treatment' }
            ]
        }
    });
    // For M2O, we'll simpler create a field to store the ID or name for now, or just skip complex relation creation via script
    // as it's error prone. We'll add 'related_service' as a basic string/dropdown for now, or omit if strictly M2O is needed.
    // Let's omit related_service relation in script to avoid complexity, can be added manually.

    // 2. Insurances Collection
    await createCollectionIfNotExists('insurances', {
        note: 'Insurance Partners',
        singleton: false
    });
    await createFieldIfNotExists('insurances', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('insurances', 'name', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('insurances', 'logo', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });
    await createFieldIfNotExists('insurances', 'tier', {
        type: 'string',
        interface: 'select-dropdown',
        display: 'labels',
        options: {
            choices: [
                { text: 'Gold', value: 'gold' },
                { text: 'Silver', value: 'silver' },
                { text: 'Bronze', value: 'bronze' }
            ]
        }
    });

    // 3. Service Enhancements
    console.log('Enhancing Services collection...');
    await createFieldIfNotExists('services', 'video_explainer', { type: 'uuid', interface: 'file', display: 'file', special: ['file'] });
    await createFieldIfNotExists('services', 'recovery_timeline', { type: 'json', interface: 'list', display: 'raw' });
    await createFieldIfNotExists('services', 'cost_range_min', { type: 'integer', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('services', 'cost_range_max', { type: 'integer', interface: 'input', display: 'raw' });

    console.log('Marketing Schema Update Complete.');
}

async function createCollectionIfNotExists(collection: string, meta: any) {
    try {
        await client.request(createCollection({
            collection,
            schema: {},
            meta
        }));
        console.log(`Created collection: ${collection}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`Collection ${collection} already exists.`);
        } else {
            console.error(`Error creating collection ${collection}:`, e);
        }
    }
}

async function createFieldIfNotExists(collection: string, field: string, schema: any) {
    try {
        await client.request(createField(collection, {
            field,
            type: schema.type,
            meta: {
                interface: schema.interface,
                display: schema.display,
                options: schema.options,
                special: schema.special,
                required: schema.required
            },
            schema: {
                is_unique: schema.unique
            }
        }));
        console.log(`Created field: ${collection}.${field}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`Field ${collection}.${field} already exists.`);
        } else {
            console.error(`Error creating field ${collection}.${field}:`, e);
        }
    }
}

updateSchema().catch((err) => {
    console.error('Update failed:', err);
    process.exit(1);
});
