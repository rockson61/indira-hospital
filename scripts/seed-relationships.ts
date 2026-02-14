/**
 * Seed Semantic Relationships
 * 
 * Populates the M2M junction tables with random but logical connections.
 * - Doctors <-> Services (3 per doctor)
 * - Doctors <-> Locations (3 per doctor)
 * - Services <-> Locations (5 per service)
 * - Health Packages <-> Services (3 per package)
 */
import { createDirectus, rest, authentication, readItems, createItem } from '@directus/sdk';
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

function getRandomSubarray(arr: any[], size: number) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    let temp, index;
    while (i--) {
        index = Math.floor(Math.random() * (i + 1));
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

async function seed() {
    console.log('🔐 Authenticating...');
    await client.login({ email: ADMIN_EMAIL!, password: ADMIN_PASSWORD! });
    console.log('✅ Authenticated\n');

    // 1. Fetch all entities
    console.log('📥 Fetching entities...');
    const doctors = await client.request(readItems('doctors', { limit: -1, fields: ['id', 'name'] }));
    const services = await client.request(readItems('services', { limit: -1, fields: ['id', 'title'] }));
    const locations = await client.request(readItems('locations', { limit: -1, fields: ['id', 'name'] }));
    const packages = await client.request(readItems('health_packages', { limit: -1, fields: ['id', 'title'] }));

    console.log(`   Found: ${doctors.length} Doctors, ${services.length} Services, ${locations.length} Locations, ${packages.length} Packages`);

    // 2. Link Doctors <-> Services
    console.log('\n🔗 Linking Doctors to Services...');
    for (const doc of doctors) {
        const selectedServices = getRandomSubarray(services, 3);
        for (const service of selectedServices) {
            try {
                await client.request(createItem('doctors_services', {
                    doctors_id: doc.id,
                    services_id: service.id
                }));
                console.log(`   ✔ ${doc.name} performs ${service.title}`);
            } catch (e) {
                // Ignore duplicates
            }
        }
    }

    // 3. Link Doctors <-> Locations
    console.log('\n🔗 Linking Doctors to Locations...');
    for (const doc of doctors) {
        const selectedLocations = getRandomSubarray(locations, 3);
        for (const loc of selectedLocations) {
            try {
                await client.request(createItem('doctors_locations', {
                    doctors_id: doc.id,
                    locations_id: loc.id
                }));
                console.log(`   ✔ ${doc.name} visits ${loc.name}`);
            } catch (e) {
                // Ignore duplicates
            }
        }
    }

    // 4. Link Services <-> Locations
    console.log('\n🔗 Linking Services to Locations...');
    for (const service of services) {
        const selectedLocations = getRandomSubarray(locations, 5);
        for (const loc of selectedLocations) {
            try {
                await client.request(createItem('services_locations', {
                    services_id: service.id,
                    locations_id: loc.id
                }));
                console.log(`   ✔ ${service.title} available at ${loc.name}`);
            } catch (e) {
                // Ignore duplicates
            }
        }
    }

    // 5. Link Packages <-> Services
    console.log('\n🔗 Linking Packages to Services...');
    for (const pkg of packages) {
        const selectedServices = getRandomSubarray(services, 3);
        for (const service of selectedServices) {
            try {
                await client.request(createItem('health_packages_services', {
                    health_packages_id: pkg.id,
                    services_id: service.id
                }));
                console.log(`   ✔ ${pkg.title} includes ${service.title}`);
            } catch (e) {
                // Ignore duplicates
            }
        }
    }

    console.log('\n✨ Relationships Seeded!');
}

seed().catch(console.error);
