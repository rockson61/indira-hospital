import { getDirectusClient } from './directus';
import { readItems, readSingleton } from '@directus/sdk';
import { Doctor, Service, Location, Post, HospitalSettings, Diagnostic, Testimonial, FAQ, Insurance, Department, HealthPackage } from './schema';

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
        fields: ['id', 'patient_name', 'content', 'rating', 'image', 'treatment_received', 'date_of_visit'],
        limit: 10
    }));
}

export async function getReviewsByEntity(type: 'doctor' | 'department' | 'service' | 'diagnostic' | 'location' | 'blog' | 'technology', name: string) {
    const client = await getDirectusClient();

    // Normalize entity name for better matching
    const normalizeName = (input: string): string => {
        const map: Record<string, string> = {
            'pediatrics': 'Paediatrics',
            'paediatrics': 'Paediatrics',
            'orthopedics': 'Orthopaedics',
            'orthopaedics': 'Orthopaedics',
            'gynaecology': 'Obstetrics & Gynaecology',
            'gynecology': 'Obstetrics & Gynaecology',
            'ent': 'ENT (Ear, Nose, Throat)',
            'ear nose throat': 'ENT (Ear, Nose, Throat)',
            'dermatology': 'Dermatology & Cosmetology',
            'skin': 'Dermatology & Cosmetology',
            'vascular': 'Vascular Surgery', // Ensure this matches CMS exactly, assuming CMS has 'Vascular Surgery' or similar. If it fails, we catch it.
            'cardio': 'Cardiac Sciences', // Map cardio to broader category if needed
        };
        const lower = input.toLowerCase();
        for (const key in map) {
            if (lower.includes(key)) return map[key];
        }
        return input;
    };

    const searchName = type === 'department' ? normalizeName(name) : name;

    // 1. Try strict filtering by metadata fields
    const metadataFilter: any = { status: { _eq: 'published' } };
    if (type === 'doctor') metadataFilter.doctor = { _contains: name };
    else if (type === 'department') metadataFilter.department = { _contains: searchName };
    else if (type === 'service' || type === 'diagnostic' || type === 'technology') metadataFilter.treatment_received = { _contains: name };
    else if (type === 'blog') {
        metadataFilter._or = [
            { treatment_received: { _contains: name } },
            { content: { _contains: name } }
        ];
    }

    let reviews = await client.request(readItems('testimonials', {
        filter: metadataFilter,
        fields: ['id', 'patient_name', 'content', 'rating', 'image', 'treatment_received', 'date_of_visit', 'doctor', 'department'],
        limit: 10
    })) as unknown as Testimonial[];

    // 2. If no reviews found via metadata, fallback to keyword search in content
    if (reviews.length === 0) {
        // Clean up the name for searching (e.g. "Dr. Raman Kumar" -> "Raman Kumar")
        const searchName = name.replace(/^Dr\.\s+/i, '').replace(/\s+Guide$/i, '');

        const contentFilter: any = {
            status: { _eq: 'published' },
            content: { _contains: searchName }
        };

        reviews = await client.request(readItems('testimonials', {
            filter: contentFilter,
            fields: ['id', 'patient_name', 'content', 'rating', 'image', 'treatment_received', 'date_of_visit', 'doctor', 'department'],
            limit: 10
        })) as unknown as Testimonial[];
    }

    // 3. If still no reviews, and it's a department/service, try mapping common terms
    if (reviews.length === 0) {
        let genericTerm = '';
        if (name.toLowerCase().includes('cardio')) genericTerm = 'cardio';
        else if (name.toLowerCase().includes('ortho')) genericTerm = 'ortho';
        else if (name.toLowerCase().includes('gast')) genericTerm = 'gastro';
        else if (name.toLowerCase().includes('surger')) genericTerm = 'surgery';
        else if (name.toLowerCase().includes('piles')) genericTerm = 'piles';
        else if (name.toLowerCase().includes('dent')) genericTerm = 'dentistry';

        if (genericTerm) {
            reviews = await client.request(readItems('testimonials', {
                filter: {
                    status: { _eq: 'published' },
                    content: { _contains: genericTerm }
                },
                fields: ['id', 'patient_name', 'content', 'rating', 'image', 'treatment_received', 'date_of_visit', 'doctor', 'department'],
                limit: 10
            })) as unknown as Testimonial[];
        }
    }

    return reviews;
}

export async function getFaqsByEntity(type: string, name: string) {
    const client = await getDirectusClient();
    let faqs: FAQ[] = [];

    try {
        // 1. Try Directus
        faqs = await client.request(readItems('faqs', {
            filter: {
                _or: [
                    { related_service: { title: { _icontains: name } } },
                    { related_department: { name: { _icontains: name } } },
                    { category: { _eq: 'general' } }
                ]
            } as any,
            fields: ['question', 'answer', 'category'],
            limit: 8
        })) as unknown as FAQ[];
    } catch (e) {
        // Silently fail for CMS, fallback to static
    }

    // 2. Fallback to static data if Directus empty
    if (faqs.length === 0) {
        const { comprehensiveFaqs } = await import('./data/faq-data');
        // Match specific category first, then general
        const specific = comprehensiveFaqs.filter(faq =>
            faq.category?.toLowerCase() === type.toLowerCase() ||
            faq.category?.toLowerCase() === name.toLowerCase() ||
            faq.question.toLowerCase().includes(name.toLowerCase())
        );
        const general = comprehensiveFaqs.filter(faq => faq.category?.toLowerCase() === 'general');

        faqs = [...specific, ...general].slice(0, 6) as any[];
    }

    return faqs;
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


export async function getHealthPackages() {
    const client = await getDirectusClient();
    return await client.request(readItems('health_packages', {
        filter: { status: { _eq: 'published' } },
        fields: ['title', 'slug', 'price', 'original_price', 'tests_included', 'thumbnail', 'short_description', 'is_featured'],
        sort: ['sort_order', '-is_featured', 'price'] as any,
    }));
}

export async function getHealthPackageBySlug(slug: string) {
    const client = await getDirectusClient();
    const packages = await client.request(readItems('health_packages', {
        filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
        fields: ['*'],
        limit: 1,
    }));

    if ((packages as unknown[]).length === 0) return null;
    const pkg = (packages as unknown[])[0] as HealthPackage;

    // M2M: Fetch related Services (optional but good for semantic mesh)
    try {
        const servicesRel = await client.request(readItems('health_packages_services', {
            filter: { health_packages_id: { _eq: pkg.id } },
            fields: ['services_id.title', 'services_id.slug', 'services_id.icon'] as any
        }));
        pkg.related_services = servicesRel.map((r: any) => r.services_id).filter(Boolean);
    } catch (e) { }

    return pkg;
}

export async function getHospitalSettings() {
    const client = await getDirectusClient();
    return await client.request(readSingleton('hospital_settings')) as unknown as HospitalSettings;
}

