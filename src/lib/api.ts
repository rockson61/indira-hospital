import { getDirectusClient } from './directus';
import { readItems } from '@directus/sdk';

export async function getDoctors() {
    const client = await getDirectusClient();
    return await client.request(readItems('doctors', {
        filter: { status: { _eq: 'published' } },
        // @ts-expect-error - Directus SDK types for nested fields
        fields: ['name', 'slug', 'designation', 'image', 'department.name', 'department.slug', 'specialties', 'consultation_fee'],
    }));
}

export async function getDoctorBySlug(slug: string) {
    const client = await getDirectusClient();
    const doctors = await client.request(readItems('doctors', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        // @ts-expect-error - Directus SDK types for nested fields
        fields: ['*', 'department.*', 'education', 'experience_timeline', 'awards', 'opd_schedule'],
        limit: 1,
    }));
    return doctors.length > 0 ? doctors[0] : null;
}

export async function getDepartments() {
    const client = await getDirectusClient();
    return await client.request(readItems('departments', {
        filter: { status: { _eq: 'published' } },
        fields: ['name', 'slug', 'icon', 'description'],
    }));
}

export async function getDepartmentBySlug(slug: string) {
    const client = await getDirectusClient();
    const departments = await client.request(readItems('departments', {
        filter: { slug: { _eq: slug } },
        // @ts-expect-error - Directus SDK types for nested fields
        fields: ['*', 'services.*'],
        limit: 1
    }));
    return departments.length > 0 ? departments[0] : null;
}

export async function getServices() {
    const client = await getDirectusClient();
    return await client.request(readItems('services', {
        filter: { status: { _eq: 'published' } },
        // @ts-expect-error - Directus SDK types for nested fields
        fields: ['title', 'slug', 'icon', 'short_description', 'department.slug', 'cost_range_min', 'cost_range_max', 'video_explainer']
    }));
}

export async function getTestimonials() {
    const client = await getDirectusClient();
    return await client.request(readItems('testimonials', {
        filter: { status: { _eq: 'published' } },
        fields: ['patient_name', 'content', 'rating', 'image'],
        limit: 10
    }));
}

export async function getFAQs(category?: string) {
    const client = await getDirectusClient();
    const filter: Record<string, unknown> = { status: { _eq: 'published' } };
    if (category) filter.category = { _eq: category };

    return await client.request(readItems('faqs', {
        filter,
        fields: ['question', 'answer', 'category']
    }));
}

export async function getInsurances() {
    const client = await getDirectusClient();
    return await client.request(readItems('insurances', {
        filter: { status: { _eq: 'published' } },
        fields: ['name', 'logo', 'tier'],
        sort: ['tier'] // Gold first usually if alphabetical, but better to sort by a rank or just use tier
    }));
}

export async function getLocations() {
    const client = await getDirectusClient();
    return await client.request(readItems('locations', {
        filter: { status: { _eq: 'published' } },
        fields: ['name', 'slug', 'district', 'distance_from_hospital', 'address', 'phone'],
    }));
}

export async function getDiagnostics(category?: string) {
    const client = await getDirectusClient();
    const filter: Record<string, unknown> = { status: { _eq: 'published' } };
    if (category) filter.category = { _eq: category };

    return await client.request(readItems('diagnostics', {
        filter,
        fields: ['name', 'slug', 'category', 'short_description', 'price', 'report_time', 'home_collection', 'sample_type', 'fasting_required', 'parameters_count'],
        // @ts-expect-error - Directus SDK types for sort
        sort: ['sort_order', 'name'],
    }));
}

export async function getDiagnosticBySlug(slug: string) {
    const client = await getDirectusClient();
    const tests = await client.request(readItems('diagnostics', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        fields: ['*'],
        limit: 1,
    }));
    // @ts-expect-error - Directus SDK returns generic item array
    return (tests as unknown[]).length > 0 ? (tests as unknown[])[0] : null;
}


export async function getHospitalSettings() {
    const { readSingleton } = await import('@directus/sdk');
    const client = await getDirectusClient();
    // @ts-expect-error - Singleton type inference issue
    return await client.request(readSingleton('hospital_settings'));
}

