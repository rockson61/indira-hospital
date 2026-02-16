import { MetadataRoute } from 'next'
import { getDirectusClient } from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { Doctor, Service, Location, Diagnostic, Post } from '@/lib/schema'
import { enhancedVelloreLocations } from '@/lib/data/enhanced-location-data'
import { tamilNaduLocations } from '@/lib/data/tamilnadu-locations'
import { SEED_DATA } from '@/lib/data/seed-data'
import { INTERNATIONAL_COUNTRIES } from '@/lib/data/international-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.indirasuperspecialityhospital.com'
    const client = await getDirectusClient()

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/doctors',
        '/departments',
        '/services',
        '/contact',
        '/book-appointment',
        '/diagnostics',
        '/blog',
        '/health-packages',
        '/patients/international',
        '/technology',
        '/faq',
        '/careers',
        '/about/quality-safety',
        '/privacy-policy',
        '/terms',
        '/services/piles-treatment-vellore',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Collect all location slugs
    const allLocationSlugs = new Set<string>();
    for (const loc of enhancedVelloreLocations) allLocationSlugs.add(loc.slug);
    for (const loc of tamilNaduLocations) allLocationSlugs.add(loc.slug);
    const locationSlugsArr = Array.from(allLocationSlugs);

    const deptSlugs = SEED_DATA.services.map(s => s.slug);
    const doctorSlugs = SEED_DATA.doctors.map(d => d.slug);

    // Helper to find related doctors for a department
    const getDeptDoctorSlugs = (deptSlug: string): string[] => {
        const dept = SEED_DATA.services.find(s => s.slug === deptSlug);
        if (!dept) return [];
        return SEED_DATA.doctors.filter(d => {
            const dName = typeof d.department === 'string' ? d.department : (d.department as any)?.name || '';
            return dName.toLowerCase() === dept.title.toLowerCase() ||
                d.specialties.some(s => dept.title.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(dept.title.toLowerCase()));
        }).map(d => d.slug);
    };

    try {
        // Dynamic Routes Fetching from CMS
        const fetchCMS = async (collection: string, options: any) => {
            try {
                return await client.request(readItems(collection as any, options));
            } catch (e) {
                console.warn(`Sitemap: Failed to fetch ${collection}`, (e as any).message);
                return [];
            }
        };

        const [doctors, services, locations, diagnostics, healthPackages, posts, technologies] = await Promise.all([
            fetchCMS('doctors', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any }),
            fetchCMS('services', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any }),
            fetchCMS('locations', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any }),
            fetchCMS('diagnostics', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any }),
            fetchCMS('health_packages', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any }),
            fetchCMS('posts', { filter: { status: { _eq: 'published' } }, fields: ['slug', 'date_created'] as any }),
            fetchCMS('technologies', { filter: { status: { _eq: 'published' } }, fields: ['slug'] as any }),
        ]) as [any[], any[], any[], any[], any[], any[], any[]]

        // Add CMS location slugs
        for (const l of locations) allLocationSlugs.add(l.slug);

        const doctorUrls = doctors.map((doctor) => ({
            url: `${baseUrl}/doctors/${doctor.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))

        const serviceUrls = services.map((service) => ({
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))

        const locationUrls = Array.from(allLocationSlugs).map((slug) => ({
            url: `${baseUrl}/locations/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

        const diagnosticUrls = diagnostics.map((diag) => ({
            url: `${baseUrl}/diagnostics/${diag.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

        const blogUrls = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date_created),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))

        const healthPackageUrls = healthPackages.map((pkg) => ({
            url: `${baseUrl}/health-packages/${pkg.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))

        const technologyUrls = technologies.map((tech) => ({
            url: `${baseUrl}/technology/${tech.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))

        // ===== DEEP LINK URLS =====
        const deepLinkUrls: MetadataRoute.Sitemap = [];

        // Dynamic Service Guide Pages (FileSystem scan)
        const fs = require('fs');
        const path = require('path');
        const servicesRoot = path.join(process.cwd(), 'src/app/services');

        if (fs.existsSync(servicesRoot)) {
            const clusters = fs.readdirSync(servicesRoot).filter((f: string) =>
                fs.statSync(path.join(servicesRoot, f)).isDirectory() && !f.startsWith('[')
            );

            for (const cluster of clusters) {
                const clusterPath = path.join(servicesRoot, cluster);
                const topics = fs.readdirSync(clusterPath).filter((f: string) =>
                    fs.statSync(path.join(clusterPath, f)).isDirectory() && !f.startsWith('[')
                );

                for (const topic of topics) {
                    deepLinkUrls.push({
                        url: `${baseUrl}/services/${cluster}/${topic}`,
                        lastModified: new Date(),
                        changeFrequency: 'weekly' as const,
                        priority: 0.7,
                    });
                }
            }
        }

        // Department → Doctor
        for (const dSlug of deptSlugs) {
            for (const docSlug of doctorSlugs) {
                deepLinkUrls.push({
                    url: `${baseUrl}/departments/${dSlug}/doctors/${docSlug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.6,
                });
            }
        }

        // Department → Location
        for (const dSlug of deptSlugs) {
            for (const locSlug of locationSlugsArr) {
                deepLinkUrls.push({
                    url: `${baseUrl}/departments/${dSlug}/locations/${locSlug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.5,
                });
            }
        }

        // Location → Department (Level 2)
        for (const locSlug of locationSlugsArr) {
            for (const dSlug of deptSlugs) {
                deepLinkUrls.push({
                    url: `${baseUrl}/locations/${locSlug}/departments/${dSlug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.5,
                });
            }
        }

        // Location → Doctor
        for (const locSlug of locationSlugsArr) {
            for (const docSlug of doctorSlugs) {
                deepLinkUrls.push({
                    url: `${baseUrl}/locations/${locSlug}/doctors/${docSlug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.5,
                });
            }
        }

        // Location → Department → Doctor (Level 3) + Book (Level 4)
        for (const locSlug of locationSlugsArr) {
            for (const dSlug of deptSlugs) {
                const relatedDocs = getDeptDoctorSlugs(dSlug);
                for (const docSlug of relatedDocs) {
                    deepLinkUrls.push({
                        url: `${baseUrl}/locations/${locSlug}/departments/${dSlug}/doctors/${docSlug}`,
                        lastModified: new Date(),
                        changeFrequency: 'monthly' as const,
                        priority: 0.4,
                    });
                    deepLinkUrls.push({
                        url: `${baseUrl}/locations/${locSlug}/departments/${dSlug}/doctors/${docSlug}/book`,
                        lastModified: new Date(),
                        changeFrequency: 'monthly' as const,
                        priority: 0.4,
                    });
                }
            }
        }

        const internationalUrls = INTERNATIONAL_COUNTRIES.map((c) => ({
            url: `${baseUrl}/patients/international/${c.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))

        return [
            ...staticRoutes,
            ...doctorUrls,
            ...serviceUrls,
            ...locationUrls,
            ...diagnosticUrls,
            ...healthPackageUrls,
            ...blogUrls,
            ...internationalUrls,
            ...technologyUrls,
            ...deepLinkUrls,
        ]

    } catch (error) {
        console.warn('Sitemap generation failed to fetch dynamic routes:', error)

        // Fallback: generate deep link URLs using seed data only
        const fallbackUrls: MetadataRoute.Sitemap = [];

        // Basic entity URLs
        for (const s of SEED_DATA.services) {
            fallbackUrls.push({ url: `${baseUrl}/services/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 });
            fallbackUrls.push({ url: `${baseUrl}/departments/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 });
        }
        for (const d of SEED_DATA.doctors) {
            fallbackUrls.push({ url: `${baseUrl}/doctors/${d.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 });
        }
        for (const locSlug of locationSlugsArr) {
            fallbackUrls.push({ url: `${baseUrl}/locations/${locSlug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 });
        }

        // Deep links in fallback
        for (const locSlug of locationSlugsArr) {
            for (const dSlug of deptSlugs) {
                fallbackUrls.push({ url: `${baseUrl}/locations/${locSlug}/departments/${dSlug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 });
            }
            for (const docSlug of doctorSlugs) {
                fallbackUrls.push({ url: `${baseUrl}/locations/${locSlug}/doctors/${docSlug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 });
            }
        }

        return [...staticRoutes, ...fallbackUrls]
    }
}
