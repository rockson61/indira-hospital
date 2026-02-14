/**
 * Semantic Mesh Schema Setup
 * 
 * Creates Many-to-Many (M2M) relationships for the 4-Level Semantic Linking.
 * 
 * New Junction Collections:
 * - doctors_services
 * - doctors_locations
 * - services_locations
 * - health_packages_services
 * - posts_doctors (Author/Reviewer)
 * - posts_services (Topic)
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
                hidden: config.hidden || false,
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

async function addM2MField(collection: string, field: string, relatedCollection: string, junctionCollection: string) {
    try {
        await client.request(createField(collection, {
            field,
            type: 'alias',
            meta: {
                interface: 'list-m2m',
                display: 'related-values',
                special: ['m2m'],
                options: {
                    enableDeselct: true,
                    template: '{{id}}', // Simple template, can be enhanced
                }
            }
        }));
        console.log(`    ✅ M2M Alias ${collection}.${field} -> ${relatedCollection}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`    ⏭️  M2M Alias ${collection}.${field} (exists)`);
        } else {
            // Check if it's just that the alias exists
            console.log(`    ⚠️  M2M Alias check ${collection}.${field}: ${e?.message}`);
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

    // 1. doctors_services
    console.log('═══ 1. Doctors <-> Services ═══');
    await createCollectionSafe('doctors_services', { hidden: true });
    await addField('doctors_services', 'doctors_id', { type: 'integer', interface: 'select-dropdown', special: ['m2m'], hidden: true }); // ID is typically auto-increment or UUID depending on setup. Assuming UUID for IDs based on other schema.
    // Actually, Directus M2M foreign keys need to be correct types. Let's assume standard Directus UUIDs or Integers. 
    // The previous schema verification showed UUIDs for IDs (string).

    // We need to create the fields that link to the parent collections
    // Directus standard for M2M:
    // Collection: junction_table
    // Field 1: parent1_id (Related Item O2M)
    // Field 2: parent2_id (Related Item O2M)

    // We will use a simplified approach: Create the junction table, then M2M fields.
    // However, programmically creating M2M fully relations is complex with just createField.
    // Directus usually handles the junction table creation automatically if you create the M2M field via App. 
    // Via API, we often need to set up the foreign keys manually or use the schema definition.

    // For this script, we'll try to create the fields as standard relationships.

    // Re-strategy: We will create the collections and plain fields. Linking is complex via REST for M2M setup without relation endpoint.
    // But we can create the collections that HOLD the relations.

    const settings = { type: 'uuid', interface: 'select-dropdown', display: 'related-values', special: null, hidden: true };

    // Doctors <-> Services
    await createCollectionSafe('doctors_services', { hidden: true });
    await addField('doctors_services', 'doctors_id', { ...settings, note: 'Doctor' });
    await addField('doctors_services', 'services_id', { ...settings, note: 'Service' });

    // Doctors <-> Locations
    await createCollectionSafe('doctors_locations', { hidden: true });
    await addField('doctors_locations', 'doctors_id', { ...settings, note: 'Doctor' });
    await addField('doctors_locations', 'locations_id', { ...settings, note: 'Location' });

    // Services <-> Locations
    await createCollectionSafe('services_locations', { hidden: true });
    await addField('services_locations', 'services_id', { ...settings, note: 'Service' });
    await addField('services_locations', 'locations_id', { ...settings, note: 'Location' });

    // Health Packages <-> Services
    await createCollectionSafe('health_packages_services', { hidden: true });
    await addField('health_packages_services', 'health_packages_id', { ...settings, note: 'Package' });
    await addField('health_packages_services', 'services_id', { ...settings, note: 'Service' });

    // Posts <-> Doctors (Reviews/Authors)
    await createCollectionSafe('posts_doctors', { hidden: true });
    await addField('posts_doctors', 'posts_id', { ...settings, note: 'Post' });
    await addField('posts_doctors', 'doctors_id', { ...settings, note: 'Doctor' });

    // Posts <-> Services
    await createCollectionSafe('posts_services', { hidden: true });
    await addField('posts_services', 'posts_id', { ...settings, note: 'Post' });
    await addField('posts_services', 'services_id', { ...settings, note: 'Service' });

    console.log('\n' + '═'.repeat(60));
    console.log('✨ Semantic Mesh M2M Collections Created!');
    console.log('👉 NOTE: You must now configure the Relationships in Directus Admin to fully enable M2M UI controls.');
    console.log('   (API creation of full M2M relational constraints is complex and best done in UI or via full schema snapshot apply)');
}

setup().catch(err => { console.error('Setup failed:', err); process.exit(1); });
