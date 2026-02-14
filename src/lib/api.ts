import { getDirectusClient } from './directus';
import { readItems, readSingleton } from '@directus/sdk';
import { Doctor, Service, Location, Post, HospitalSettings, Diagnostic, Testimonial, FAQ, Insurance, Department } from './schema';

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
    })) as unknown as Doctor[];

    if (doctors.length === 0) return null;
    const doctor = doctors[0];

    // M2M: Fetch related Services
    try {
        const servicesRel = await client.request(readItems('doctors_services', {
            filter: { doctors_id: { _eq: doctor.id } },
            fields: ['services_id.title', 'services_id.slug', 'services_id.icon'] as any
        }));
        doctor.related_services = servicesRel.map((r: any) => r.services_id).filter(Boolean);
    } catch (e) { console.error('Error fetching doctor services', e); }

    // M2M: Fetch related Locations
    try {
        const locationsRel = await client.request(readItems('doctors_locations', {
            filter: { doctors_id: { _eq: doctor.id } },
            fields: ['locations_id.name', 'locations_id.slug', 'locations_id.district'] as any
        }));
        doctor.available_locations = locationsRel.map((r: any) => r.locations_id).filter(Boolean);
    } catch (e) { console.error('Error fetching doctor locations', e); }

    return doctor;
}

export async function getDepartments() {
    const client = await getDirectusClient();
    return await client.request(readItems('departments', {
        filter: { status: { _eq: 'published' } },
        fields: ['name', 'slug', 'icon', 'description'],
    }));
}

export async function getServiceBySlug(slug: string) {
    const client = await getDirectusClient();
    const services = await client.request(readItems('services', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        fields: ['*', 'department.*', 'video_explainer'] as any, // Removed services.* which was invalid for department
        limit: 1
    })) as unknown as Service[];

    if (services.length === 0) return null;
    const service = services[0];

    // M2M: Fetch Performing Doctors
    try {
        const doctorsRel = await client.request(readItems('doctors_services', {
            filter: { services_id: { _eq: service.id } },
            fields: ['doctors_id.name', 'doctors_id.slug', 'doctors_id.image', 'doctors_id.designation', 'doctors_id.department.name'] as any
        }));
        service.related_doctors = doctorsRel.map((r: any) => r.doctors_id).filter(Boolean);
    } catch (e) { }

    // M2M: Fetch Available Locations
    try {
        const locationsRel = await client.request(readItems('services_locations', {
            filter: { services_id: { _eq: service.id } },
            fields: ['locations_id.name', 'locations_id.slug', 'locations_id.district'] as any
        }));
        service.available_locations = locationsRel.map((r: any) => r.locations_id).filter(Boolean);
    } catch (e) { }

    return service;
}

export async function getLocationBySlug(slug: string) {
    const client = await getDirectusClient();
    const locations = await client.request(readItems('locations', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        fields: ['*'],
        limit: 1
    })) as unknown as Location[];

    if (locations.length === 0) return null;
    const location = locations[0];

    // M2M: Fetch Available Doctors
    try {
        const doctorsRel = await client.request(readItems('doctors_locations', {
            filter: { locations_id: { _eq: location.id } },
            fields: ['doctors_id.name', 'doctors_id.slug', 'doctors_id.image', 'doctors_id.designation'] as any
        }));
        location.related_doctors = doctorsRel.map((r: any) => r.doctors_id).filter(Boolean);
    } catch (e) { }

    // M2M: Fetch Available Services
    try {
        const servicesRel = await client.request(readItems('services_locations', {
            filter: { locations_id: { _eq: location.id } },
            fields: ['services_id.title', 'services_id.slug', 'services_id.icon', 'services_id.short_description'] as any
        }));
        location.related_services = servicesRel.map((r: any) => r.services_id).filter(Boolean);
    } catch (e) { }

    return location;
}

export async function getPostBySlug(slug: string) {
    const client = await getDirectusClient();
    const posts = await client.request(readItems('posts', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        fields: ['*', 'author.*'] as any,
        limit: 1
    })) as unknown as Post[];

    if (posts.length === 0) return null;
    const post = posts[0];

    // M2M: Fetch Related Doctors
    try {
        const doctorsRel = await client.request(readItems('posts_doctors', {
            filter: { posts_id: { _eq: post.id } },
            fields: ['doctors_id.name', 'doctors_id.slug', 'doctors_id.image', 'doctors_id.designation', 'doctors_id.department.name'] as any
        }));
        post.related_doctors = doctorsRel.map((r: any) => r.doctors_id).filter(Boolean);
    } catch (e) { }

    // M2M: Fetch Related Services
    try {
        const servicesRel = await client.request(readItems('posts_services', {
            filter: { posts_id: { _eq: post.id } },
            fields: ['services_id.title', 'services_id.slug', 'services_id.icon', 'services_id.short_description'] as any
        }));
        post.related_services = servicesRel.map((r: any) => r.services_id).filter(Boolean);
    } catch (e) { }

    return post;
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
        fields: ['id', 'patient_name', 'content', 'rating', 'image'],
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
        sort: ['sort_order', 'name'] as any,
    }));
}

export async function getDiagnosticBySlug(slug: string) {
    const client = await getDirectusClient();
    const tests = await client.request(readItems('diagnostics', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        fields: ['*'],
        limit: 1,
    }));
    return (tests as unknown[]).length > 0 ? (tests as unknown[])[0] : null;
}


export async function getHospitalSettings() {
    const client = await getDirectusClient();
    return await client.request(readSingleton('hospital_settings')) as unknown as HospitalSettings;
}

