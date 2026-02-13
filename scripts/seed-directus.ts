import { createDirectus, rest, staticToken, createItem, readItems } from '@directus/sdk';
import { SEED_DATA } from '../src/lib/data/seed-data';
import 'dotenv/config';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

if (!DIRECTUS_TOKEN) {
    console.error('Error: DIRECTUS_TOKEN environment variable is not set.');
    process.exit(1);
}

const client = createDirectus(DIRECTUS_URL)
    .with(staticToken(DIRECTUS_TOKEN))
    .with(rest());

async function seed() {
    console.log(`🌱 Seeding Directus at ${DIRECTUS_URL}...`);

    try {
        // 1. Seed Services (Departments)
        console.log('--- Seeding Services ---');
        for (const service of SEED_DATA.services) {
            try {
                // Check if exists
                const existing = await client.request(readItems('services', {
                    filter: { slug: { _eq: service.slug } }
                }));

                if (existing.length === 0) {
                    await client.request(createItem('services', {
                        status: 'published',
                        title: service.title,
                        slug: service.slug,
                        short_description: service.short_description,
                        icon: service.icon,
                        full_description: service.full_description
                    }));
                    console.log(`✅ Created Service: ${service.title}`);
                } else {
                    console.log(`skipped Service: ${service.title} (already exists)`);
                }
            } catch (err: any) {
                console.error(`❌ Failed to seed service ${service.title}:`, err.message);
            }
        }

        // 2. Seed Doctors
        console.log('\n--- Seeding Doctors ---');
        // Retrieve services to map IDs if needed, but for now we might skip relation or try strict mapping
        // ideally we map service slug to service ID.
        const allServices = await client.request(readItems('services', { limit: -1 }));

        for (const doctor of SEED_DATA.doctors) {
            try {
                const existing = await client.request(readItems('doctors', {
                    filter: { slug: { _eq: doctor.slug } }
                }));

                if (existing.length === 0) {
                    // Find Department ID
                    // const dept = allServices.find((s: any) => s.slug === doctor.department_slug); // We added department_slug to seed data interface?
                    // Actually SEED_DATA.doctors has 'department' as string name mostly, or we need to fuzzy match.
                    // For this script, let's try to match by Title if possible, else leave empty.

                    const matchedService = allServices.find((s: any) => s.title === doctor.department || s.slug === doctor.department.toLowerCase().replace(/ /g, '-'));

                    await client.request(createItem('doctors', {
                        status: 'published',
                        name: doctor.name,
                        slug: doctor.slug,
                        designation: doctor.designation,
                        bio: doctor.bio,
                        image: doctor.image,
                        experience_years: doctor.experience_years,
                        department: matchedService ? matchedService.id : null,
                        // Note: complex fields like education/timeline might need a raw JSON field or separate collections
                        // For simplicity, we assume they are stored as JSON in Directus if the schema allows, or we skip them for now.
                        specialties: doctor.specialties // Assuming JSON field
                    }));
                    console.log(`✅ Created Doctor: ${doctor.name}`);
                } else {
                    console.log(`skipped Doctor: ${doctor.name} (already exists)`);
                }
            } catch (err: any) {
                console.error(`❌ Failed to seed doctor ${doctor.name}:`, err.message);
            }
        }

        console.log('\n✨ Seeding Complete!');

    } catch (error: any) {
        console.error('Seeding failed:', error);
    }
}

seed();
