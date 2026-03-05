import { getDirectusClient } from './directus';
import { readItems, readSingleton } from '@directus/sdk';
import { Doctor, Service, Location, Post, GlobalSiteSettings, Diagnostic, Testimonial, FAQ, InsurancePartner, Department, HealthPackage } from './schema';
import { SEED_DATA } from './data/seed-data';
import { comprehensiveFaqs } from './data/faq-data';
import { testimonials as localTestimonials } from './data/testimonials-data';
import { tamilNaduLocations } from './data/tamilnadu-locations';
import { unstable_cache } from 'next/cache';

export const getDoctors = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('doctors', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getDoctors', error);
        }
        return SEED_DATA.doctors as any;
    },
    ['directus-doctors'],
    { revalidate: 3600 }
);

export const getDoctorBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('doctors', {
                filter: { slug: { _eq: slug } },
                fields: ['*', { related_services: ['id', 'title', 'slug'], available_locations: ['id', 'name', 'slug'] }],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getDoctorBySlug ${slug}`, error);
        }

        const doctor = SEED_DATA.doctors.find((d: any) => d.slug === slug);
        if (!doctor) return null;
        return {
            ...doctor,
            related_services: [],
            available_locations: []
        } as any;
    },
    ['directus-doctor-by-slug'],
    { revalidate: 3600 }
);

export const getDepartments = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('departments', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getDepartments', error);
        }
        return SEED_DATA.services as any;
    },
    ['directus-departments'],
    { revalidate: 3600 }
);

export const getDepartmentBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('departments', {
                filter: { slug: { _eq: slug } },
                fields: ['*', { related_doctors: ['id', 'name', 'slug'], related_services: ['id', 'title', 'slug'] } as any],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getDepartmentBySlug ${slug}`, error);
        }

        const dept = SEED_DATA.services.find((s: any) => s.slug === slug);
        if (!dept) return null;
        return {
            ...dept,
            related_doctors: SEED_DATA.doctors.filter((d: any) =>
                (d.department && d.department.toLowerCase().includes(dept.title.toLowerCase())) ||
                (d.specialties && d.specialties.some((sp: string) => sp.toLowerCase().includes(dept.title.toLowerCase())))
            ),
            related_services: []
        } as any;
    },
    ['directus-department-by-slug'],
    { revalidate: 3600 }
);

export const getServiceBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('services', {
                filter: { slug: { _eq: slug } },
                fields: ['*', { related_doctors: ['id', 'name', 'slug'], available_locations: ['id', 'name', 'slug'] }],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getServiceBySlug ${slug}`, error);
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
    },
    ['directus-service-by-slug'],
    { revalidate: 3600 }
);

export const getLocationBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('locations', {
                filter: { slug: { _eq: slug } },
                fields: ['*', { related_doctors: ['id', 'name', 'slug'], related_services: ['id', 'title', 'slug'] }],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getLocationBySlug ${slug}`, error);
        }

        const loc = tamilNaduLocations.find((l: any) => l.slug === slug);
        if (!loc) return null;
        return {
            ...loc,
            related_doctors: SEED_DATA.doctors,
            related_services: SEED_DATA.services
        } as any;
    },
    ['directus-location-by-slug'],
    { revalidate: 3600 }
);

export const getPostBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('posts', {
                filter: { slug: { _eq: slug } },
                fields: ['*'],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getPostBySlug ${slug}`, error);
        }
        return null;
    },
    ['directus-post-by-slug'],
    { revalidate: 3600 }
);

export const getServices = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('services', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getServices', error);
        }
        return SEED_DATA.services as any;
    },
    ['directus-services'],
    { revalidate: 3600 }
);

export const getTestimonials = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('testimonials', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getTestimonials', error);
        }
        return localTestimonials as any;
    },
    ['directus-testimonials'],
    { revalidate: 3600 }
);

export const getReviewsByEntity = unstable_cache(
    async (type: string, name: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('testimonials', {
                fields: ['*'],
            }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getReviewsByEntity ${type} ${name}`, error);
        }

        return localTestimonials.map((t, i) => ({
            id: `rev-${i}`,
            patient_name: t.name,
            treatment_received: t.treatment,
            rating: t.rating,
            content: t.text,
            verified: t.verified
        })) as any;
    },
    ['directus-reviews-by-entity'],
    { revalidate: 3600 }
);

export const getFaqsByEntity = unstable_cache(
    async (type: string, name: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('faqs', {
                fields: ['*'],
            }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getFaqsByEntity ${type} ${name}`, error);
        }
        return comprehensiveFaqs as any;
    },
    ['directus-faqs-by-entity'],
    { revalidate: 3600 }
);

export const getInsurances = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('insurances', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getInsurances', error);
        }
        return [];
    },
    ['directus-insurances'],
    { revalidate: 3600 }
);

export const getLocations = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('locations', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getLocations', error);
        }
        return tamilNaduLocations as any;
    },
    ['directus-locations'],
    { revalidate: 3600 }
);

export const getDiagnostics = unstable_cache(
    async (category?: string) => {
        try {
            const client = await getDirectusClient();
            const filter: any = category ? { category: { _eq: category } } : undefined;
            const data = await client.request(readItems('diagnostics', {
                fields: ['*'],
                filter
            }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getDiagnostics');
        }
        // Fallback to seed data
        return category
            ? SEED_DATA.diagnostics.filter(d => d.category === category)
            : SEED_DATA.diagnostics;
    },
    ['directus-diagnostics'],
    { revalidate: 3600 }
);

export const getDiagnosticBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('diagnostics', {
                filter: { slug: { _eq: slug } },
                fields: ['*'],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getDiagnosticBySlug - ${slug}`);
        }
        // Fallback to seed data
        return SEED_DATA.diagnostics.find(d => d.slug === slug) || null;
    },
    ['directus-diagnostic-by-slug'],
    { revalidate: 3600 }
);

export const getHealthPackages = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('health_packages', { fields: ['*'] }));
            if (data && data.length > 0) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getHealthPackages', error);
        }
        return [];
    },
    ['directus-health-packages'],
    { revalidate: 3600 }
);

export const getHealthPackageBySlug = unstable_cache(
    async (slug: string) => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readItems('health_packages', {
                filter: { slug: { _eq: slug } },
                fields: ['*'],
                limit: 1
            }));
            if (data && data.length > 0) return data[0] as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', `Directus fallback: getHealthPackageBySlug ${slug}`, error);
        }
        return null;
    },
    ['directus-health-package-by-slug'],
    { revalidate: 3600 }
);

import { siteConfig } from '@/config/site';

export const getGlobalSiteSettings = unstable_cache(
    async () => {
        try {
            const client = await getDirectusClient();
            const data = await client.request(readSingleton('hospital_settings', { fields: ['*'] }));
            if (data) return data as any;
        } catch (error) {
            console.warn('[FALLBACK] CMS API Warning:', 'Directus fallback: getGlobalSiteSettings', error);
        }

        return {
            hospitalName: siteConfig.name,
            emergencyPhone: siteConfig.contact.emergencyPhone,
            helplinePhone: siteConfig.contact.phone,
            address: siteConfig.contact.address,
            email: siteConfig.contact.email,
        } as any;
    },
    ['directus-global-settings'],
    { revalidate: 3600 }
);
