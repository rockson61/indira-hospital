import { getDirectusClient } from './directus';
import { readItems } from '@directus/sdk';

export async function getDoctors() {
    const client = await getDirectusClient();
    return await client.request(readItems('doctors', {
        filter: { status: { _eq: 'published' } },
        // @ts-ignore
        fields: ['name', 'slug', 'designation', 'image', 'department.name', 'department.slug', 'specialties', 'consultation_fee'],
    }));
}

export async function getDoctorBySlug(slug: string) {
    const client = await getDirectusClient();
    const doctors = await client.request(readItems('doctors', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        // @ts-ignore
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
        // @ts-ignore
        fields: ['*', 'services.*'],
        limit: 1
    }));
    return departments.length > 0 ? departments[0] : null;
}

export async function getServices() {
    const client = await getDirectusClient();
    return await client.request(readItems('services', {
        filter: { status: { _eq: 'published' } },
        // @ts-ignore
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
    const filter = { status: { _eq: 'published' } } as any;
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
