import { createDirectus, rest, authentication, createField } from '@directus/sdk';
import dotenv from 'dotenv';
import path from 'path';

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
        console.log(`  ✅ Created field: ${collection}.${field}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`  ⏭️  Field ${collection}.${field} already exists.`);
        } else {
            console.error(`  ❌ Error creating field ${collection}.${field}:`, e?.errors?.[0]?.message || e?.message);
        }
    }
}

async function migrate() {
    console.log('Authenticating...');
    await client.login({ email: ADMIN_EMAIL as string, password: ADMIN_PASSWORD as string });
    console.log('Authenticated. Adding missing fields...\n');

    // Services: add slug
    console.log('--- Services ---');
    await createFieldIfNotExists('services', 'slug', { type: 'string', interface: 'input', display: 'raw', required: true, unique: true });

    // Locations: add slug, district, distance_from_hospital
    console.log('--- Locations ---');
    await createFieldIfNotExists('locations', 'slug', { type: 'string', interface: 'input', display: 'raw', required: true, unique: true });
    await createFieldIfNotExists('locations', 'district', { type: 'string', interface: 'input', display: 'raw' });
    await createFieldIfNotExists('locations', 'distance_from_hospital', { type: 'string', interface: 'input', display: 'raw' });

    console.log('\n✨ Schema migration complete!');
}

migrate().catch(err => { console.error('Migration failed:', err); process.exit(1); });
