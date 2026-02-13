import { createDirectus, rest, authentication, createCollection, createField } from '@directus/sdk';
import 'dotenv/config'; // Need to load .env.local manually if running via tsx/node
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const CMS_URL = process.env.NEXT_PUBLIC_API_URL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!CMS_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Missing environment variables. Make sure .env.local exists and has NEXT_PUBLIC_API_URL, ADMIN_EMAIL, ADMIN_PASSWORD');
    process.exit(1);
}

const client = createDirectus(CMS_URL)
    .with(authentication('json', { autoRefresh: true }))
    .with(rest());

async function init() {
    console.log('Authenticating...');
    try {
        // Correct signature for SDK v13+: login({ email, password })
        await client.login({ email: ADMIN_EMAIL as string, password: ADMIN_PASSWORD as string });
    } catch (error: any) {
        console.error('Login failed:', error);
        process.exit(1);
    }
    console.log('Authenticated successfully.');

    // 1. Departments
    await createCollectionIfNotExists('departments', {
        note: 'Hospital Departments',
        singleton: false
    });
    await createFieldIfNotExists('departments', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('departments', 'name', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('departments', 'slug', { type: 'string', interface: 'input', display: 'raw', required: true, unique: true });
    await createFieldIfNotExists('departments', 'icon', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });
    await createFieldIfNotExists('departments', 'featured_image', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });
    await createFieldIfNotExists('departments', 'description', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' });

    // 2. Services
    await createCollectionIfNotExists('services', {
        note: 'Medical Services',
        singleton: false
    });
    await createFieldIfNotExists('services', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('services', 'title', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('services', 'icon', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });
    await createFieldIfNotExists('services', 'short_description', { type: 'text', interface: 'textarea', display: 'raw' });
    await createFieldIfNotExists('services', 'full_description', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' });

    // 3. Doctors
    await createCollectionIfNotExists('doctors', {
        note: 'Medical Professionals',
        singleton: false
    });
    await createFieldIfNotExists('doctors', 'name', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('doctors', 'slug', { type: 'string', interface: 'input', display: 'raw', required: true, unique: true });
    await createFieldIfNotExists('doctors', 'designation', { type: 'string', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('doctors', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'draft' } });
    await createFieldIfNotExists('doctors', 'image', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });
    await createFieldIfNotExists('doctors', 'bio', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' });

    // Extended Doctor Fields from Blueprint
    await createFieldIfNotExists('doctors', 'experience_years', { type: 'integer', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('doctors', 'consultation_fee', { type: 'integer', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('doctors', 'specialties', { type: 'json', interface: 'tags', display: 'labels' });
    await createFieldIfNotExists('doctors', 'languages', { type: 'json', interface: 'tags', display: 'labels' });

    // JSON Repeaters for rich data
    await createFieldIfNotExists('doctors', 'education', { type: 'json', interface: 'list', display: 'raw' });
    await createFieldIfNotExists('doctors', 'experience_timeline', { type: 'json', interface: 'list', display: 'raw' });
    await createFieldIfNotExists('doctors', 'awards', { type: 'json', interface: 'list', display: 'raw' });
    await createFieldIfNotExists('doctors', 'opd_schedule', { type: 'json', interface: 'input-code', display: 'raw' }); // Storing as JSON object for schedule

    // 4. Testimonials
    await createCollectionIfNotExists('testimonials', {
        note: 'Patient Testimonials',
        singleton: false
    });
    await createFieldIfNotExists('testimonials', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('testimonials', 'patient_name', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('testimonials', 'content', { type: 'text', interface: 'textarea', display: 'raw' });
    await createFieldIfNotExists('testimonials', 'rating', { type: 'integer', interface: 'slider', display: 'raw', options: { min: 1, max: 5 } });
    await createFieldIfNotExists('testimonials', 'image', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });


    // 5. Health Packages (New)
    await createCollectionIfNotExists('health_packages', {
        note: 'Health Checkup Packages',
        singleton: false
    });
    await createFieldIfNotExists('health_packages', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('health_packages', 'title', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('health_packages', 'price', { type: 'integer', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('health_packages', 'tests_included', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' });
    await createFieldIfNotExists('health_packages', 'thumbnail', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });

    // 6. Locations (New)
    await createCollectionIfNotExists('locations', {
        note: 'Hospital Branches',
        singleton: false
    });
    await createFieldIfNotExists('locations', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('locations', 'name', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('locations', 'address', { type: 'text', interface: 'textarea', display: 'raw' });
    await createFieldIfNotExists('locations', 'phone', { type: 'string', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('locations', 'map_embed', { type: 'string', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('locations', 'visiting_hours', { type: 'string', interface: 'input', display: 'raw' });

    // 7. Dynamic Pages (New)
    await createCollectionIfNotExists('pages', {
        note: 'Dynamic Page Content',
        singleton: false
    });
    await createFieldIfNotExists('pages', 'status', { type: 'string', interface: 'select-dropdown', display: 'labels', options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] }, schema: { default_value: 'published' } });
    await createFieldIfNotExists('pages', 'title', { type: 'string', interface: 'input', display: 'raw', required: true });
    await createFieldIfNotExists('pages', 'slug', { type: 'string', interface: 'input', display: 'raw', required: true, unique: true });
    await createFieldIfNotExists('pages', 'hero_image', { type: 'uuid', interface: 'image', display: 'image', special: ['file'] });
    await createFieldIfNotExists('pages', 'content', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value' });
    await createFieldIfNotExists('pages', 'seo_title', { type: 'string', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('pages', 'seo_description', { type: 'string', interface: 'textarea', display: 'raw' });

    console.log('Master Schema initialization complete.');
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

init().catch((err) => {
    console.error('Init failed:', err);
    process.exit(1);
});
