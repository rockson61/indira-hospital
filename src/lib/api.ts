import { getDirectusClient } from './directus';
import { readItems, readSingleton } from '@directus/sdk';
import { Doctor, Service, Location, Post, GlobalSiteSettings, Diagnostic, Testimonial, FAQ, InsurancePartner, Department, HealthPackage } from './schema';
import { SEED_DATA } from './data/seed-data';
import { comprehensiveFaqs } from './data/faq-data';
import { testimonials as localTestimonials } from './data/testimonials-data';
import { tamilNaduLocations } from './data/tamilnadu-locations';

export async function getDoctors() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('doctors', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getDoctors', error);
    }
    return SEED_DATA.doctors as any;
}

export async function getDoctorBySlug(slug: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('doctors', {
            filter: { slug: { _eq: slug } },
            fields: ['*', { related_services: ['*'], available_locations: ['*'] }],
            limit: 1
        }));
        if (data && data.length > 0) return data[0] as any;
    } catch (error) {
        console.warn(`Directus fallback: getDoctorBySlug ${slug}`, error);
    }

    const doctor = SEED_DATA.doctors.find((d: any) => d.slug === slug);
    if (!doctor) return null;
    return {
        ...doctor,
        related_services: [],
        available_locations: []
    } as any;
}

export async function getDepartments() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('departments', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getDepartments', error);
    }
    return SEED_DATA.services as any;
}

export async function getServiceBySlug(slug: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('services', {
            filter: { slug: { _eq: slug } },
            fields: ['*', { related_doctors: ['*'], available_locations: ['*'] }],
            limit: 1
        }));
        if (data && data.length > 0) return data[0] as any;
    } catch (error) {
        console.warn(`Directus fallback: getServiceBySlug ${slug}`, error);
    }

    const service = SEED_DATA.services.find((s: any) => s.slug === slug);
    if (!service) return null;
    return {
        ...service,
        related_doctors: SEED_DATA.doctors.filter((d: any) =>
            (d.department && service.title && d.department.toLowerCase().includes(service.title.toLowerCase())) ||
            (d.specialties && service.title && d.specialties.some((sp: string) => sp.toLowerCase().includes(service.title.toLowerCase())))
        ),
        available_locations: []
    } as any;
}

export async function getLocationBySlug(slug: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('locations', {
            filter: { slug: { _eq: slug } },
            fields: ['*', { related_doctors: ['*'], related_services: ['*'] }],
            limit: 1
        }));
        if (data && data.length > 0) return data[0] as any;
    } catch (error) {
        console.warn(`Directus fallback: getLocationBySlug ${slug}`, error);
    }

    const loc = tamilNaduLocations.find((l: any) => l.slug === slug);
    if (!loc) return null;
    return {
        ...loc,
        related_doctors: SEED_DATA.doctors,
        related_services: SEED_DATA.services
    } as any;
}

export async function getPostBySlug(slug: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('posts', {
            filter: { slug: { _eq: slug } },
            fields: ['*'],
            limit: 1
        }));
        if (data && data.length > 0) return data[0] as any;
    } catch (error) {
        console.warn(`Directus fallback: getPostBySlug ${slug}`, error);
    }
    return null; // Mock fallback
}

export async function getServices() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('services', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getServices', error);
    }
    return SEED_DATA.services as any;
}

export async function getTestimonials() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('testimonials', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getTestimonials', error);
    }
    return localTestimonials as any;
}

export async function getReviewsByEntity(type: string, name: string) {
    try {
        const client = await getDirectusClient();
        // Adjust the filter based on how reviews are tied to entities in Directus
        const data = await client.request(readItems('testimonials', {
            fields: ['*'],
            // Example filter, may need adjustment for your specific schema
            // filter: { relatedDepartment: { _eq: name } }
        }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn(`Directus fallback: getReviewsByEntity ${type} ${name}`, error);
    }

    return localTestimonials.map((t, i) => ({
        id: `rev-${i}`,
        patient_name: t.name,
        treatment_received: t.treatment,
        rating: t.rating,
        content: t.text,
        verified: t.verified
    })) as any;
}

export async function getFaqsByEntity(type: string, name: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('faqs', {
            fields: ['*'],
        }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn(`Directus fallback: getFaqsByEntity ${type} ${name}`, error);
    }
    return comprehensiveFaqs as any; // Using comprehensive by default
}

export async function getInsurances() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('insurances', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getInsurances', error);
    }
    return []; // Mock fallback
}

export async function getLocations() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('locations', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getLocations', error);
    }
    return tamilNaduLocations as any;
}

export async function getDiagnostics(category?: string) {
    try {
        const client = await getDirectusClient();
        const filter: any = category ? { category: { _eq: category } } : undefined;
        const data = await client.request(readItems('diagnostics', {
            fields: ['*'],
            filter
        }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getDiagnostics', error);
    }
    return []; // Mock fallback
}

export async function getDiagnosticBySlug(slug: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('diagnostics', {
            filter: { slug: { _eq: slug } },
            fields: ['*'],
            limit: 1
        }));
        if (data && data.length > 0) return data[0] as any;
    } catch (error) {
        console.warn(`Directus fallback: getDiagnosticBySlug ${slug}`, error);
    }
    return null; // Mock fallback
}

export async function getHealthPackages() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('health_packages', { fields: ['*'] }));
        if (data && data.length > 0) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getHealthPackages', error);
    }
    return []; // Mock fallback
}

export async function getHealthPackageBySlug(slug: string) {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readItems('health_packages', {
            filter: { slug: { _eq: slug } },
            fields: ['*'],
            limit: 1
        }));
        if (data && data.length > 0) return data[0] as any;
    } catch (error) {
        console.warn(`Directus fallback: getHealthPackageBySlug ${slug}`, error);
    }
    return null; // Mock fallback
}

export async function getGlobalSiteSettings() {
    try {
        const client = await getDirectusClient();
        const data = await client.request(readSingleton('hospital_settings', { fields: ['*'] }));
        if (data) return data as any;
    } catch (error) {
        console.warn('Directus fallback: getGlobalSiteSettings', error);
    }

    return {
        hospitalName: "Indira Hospital",
        emergencyPhone: "0416-2253456",
        helplinePhone: "+91 80560 99990",
        address: "71F, Filterbed Road, Vellore, Tamilnadu - 632001",
        email: "contact@indirahospital.com",
    } as any;
}
