import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getServices, getDepartments, getDoctors, getLocations } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = siteConfig.url;

    // Core Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/doctors',
        '/departments',
        '/services',
        '/diagnostics',
        '/contact',
        '/book-appointment',
        '/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    try {
        // Fetch CMS Data
        const [services, departments, doctors, locations] = await Promise.all([
            getServices().catch(() => []),
            getDepartments().catch(() => []),
            getDoctors().catch(() => []),
            getLocations().catch(() => [])
        ]);

        // Map Dynamic URLs
        const serviceRoutes = services.map((s: any) => ({
            url: `${baseUrl}/doctor/near-me/treat/${s.slug || s.id}`,
            lastModified: new Date(s.date_updated || s.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        const departmentRoutes = departments.map((d: any) => ({
            url: `${baseUrl}/doctor/near-me/treat/${d.slug || d.id}`,
            lastModified: new Date(d.date_updated || d.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        const doctorRoutes = doctors.map((doc: any) => ({
            url: `${baseUrl}/doctor/${doc.specialty_slug || 'specialist'}/${doc.slug}`,
            lastModified: new Date(doc.date_updated || doc.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

        const locationRoutes = locations.map((loc: any) => ({
            url: `${baseUrl}/doctor/near-me/${loc.slug}`,
            lastModified: new Date(loc.date_updated || loc.date_created || new Date()),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        return [
            ...staticRoutes,
            ...departmentRoutes,
            ...serviceRoutes,
            ...locationRoutes,
            ...doctorRoutes
        ];
    } catch (error) {
        console.error("Error generating dynamic sitemap:", error);
        return staticRoutes;
    }
}
