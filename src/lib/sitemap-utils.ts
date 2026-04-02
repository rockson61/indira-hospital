import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getServices, getDepartments, getDoctors, getLocations, getHealthPackages, getDiagnostics } from '@/lib/api';
import { getAllTechnologies } from '@/lib/data/technology-data';
import { PATIENT_RESOURCES } from '@/lib/data/patient-resources';
import { getAllTreatments, TREATMENT_DATA } from '@/lib/data/treatment-data';
import { INTERNATIONAL_COUNTRIES } from '@/lib/data/international-data';
import { GLOSSARY_DATA } from '@/lib/data/glossary-data';
import { tamilNaduLocations } from '@/lib/data/tamilnadu-locations';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();

export async function getSitemapData(id: string): Promise<MetadataRoute.Sitemap> {
    const baseUrl = siteConfig.url;

    // Fetch CMS Data
    const [services, departments, doctors, locations, healthPackages, diagnostics] = await Promise.all([
        getServices().catch(() => []),
        getDepartments().catch(() => []),
        getDoctors().catch(() => []),
        getLocations().catch(() => []),
        getHealthPackages().catch(() => []),
        getDiagnostics().catch(() => [])
    ]);

    switch (id) {
        case 'doctors':
            return doctors.map((doc: any) => {
                const specialty = doc.specialty_slug || 'specialists';
                return {
                    url: `${baseUrl}/doctor/${specialty}/${doc.slug}`,
                    lastModified: new Date(doc.date_updated || doc.date_created || new Date()),
                    changeFrequency: 'weekly',
                    priority: doc.specialty_slug ? 0.95 : 0.8, // Elite doctors get higher priority
                };
            });

        case 'departments':
            return departments.map((d: any) => ({
                url: `${baseUrl}/departments/${d.slug || d.id}`,
                lastModified: new Date(d.date_updated || d.date_created || new Date()),
                changeFrequency: 'weekly',
                priority: 0.9,
            }));

        case 'treatments':
            // Main treatments/services routes
            const servRoutes = services.map((s: any) => ({
                url: `${baseUrl}/doctor/near-me/treat/${s.slug || s.id}`,
                lastModified: new Date(s.date_updated || s.date_created || new Date()),
                changeFrequency: 'weekly',
                priority: 0.9,
            }));

            const subTreatRoutes = TREATMENT_DATA.map((t) => ({
                url: `${baseUrl}/doctor/near-me/treat/${t.parentServiceSlug}/${t.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.85,
            }));

            const techRoutes = getAllTechnologies().map((tech: any) => ({
                url: `${baseUrl}/technology/${tech.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            }));

            return [...servRoutes, ...subTreatRoutes, ...techRoutes];

        case 'locations':
            return tamilNaduLocations.map((loc) => ({
                url: `${baseUrl}/doctor/near-me/${loc.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.9,
            }));

        case 'location-departments':
            return tamilNaduLocations.flatMap((loc) =>
                (departments as any[]).map((dept: any) => ({
                    url: `${baseUrl}/doctor/near-me/${loc.slug}/${dept.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.75,
                }))
            );

        case 'location-treatments':
            return tamilNaduLocations.flatMap((loc) =>
                TREATMENT_DATA.map((treat) => ({
                    url: `${baseUrl}/doctor/near-me/${loc.slug}/${treat.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.8,
                }))
            );

        case 'location-doctors':
            return tamilNaduLocations.flatMap((loc) =>
                (doctors as any[]).map((doc: any) => ({
                    url: `${baseUrl}/doctor/near-me/${loc.slug}/${doc.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.75,
                }))
            );

        case 'diagnostics':
            return diagnostics.map((dg: any) => ({
                url: `${baseUrl}/diagnostics/${dg.slug || dg.id}`,
                lastModified: new Date(dg.date_updated || dg.date_created || new Date()),
                changeFrequency: 'weekly',
                priority: 0.8,
            }));

        case 'health-packages': {
            // Static fallback packages drawn from seed data
            const FALLBACK_PACKAGES = [
                'master-health-checkup',
                'womens-wellness-package',
                'cardiac-health-package',
                'diabetes-screening-package',
                'pre-employment-health-checkup',
                'senior-citizen-health-package',
                'cancer-screening-package',
                'bone-health-package',
                'kidney-function-package',
                'thyroid-health-checkup'
            ];

            const pkgUrls = healthPackages.length > 0
                ? healthPackages.map((hp: any) => ({
                    url: `${baseUrl}/health-packages/${hp.slug || hp.id}`,
                    lastModified: new Date(hp.date_updated || hp.date_created || new Date()),
                    changeFrequency: 'weekly' as const,
                    priority: 0.8,
                }))
                : FALLBACK_PACKAGES.map((slug) => ({
                    url: `${baseUrl}/health-packages/${slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.8,
                }));

            return pkgUrls;
        }

        case 'medical-glossary':
            return GLOSSARY_DATA.map((item) => ({
                url: `${baseUrl}/glossary/${slugify(item.term)}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
            }));

        case 'international-patients':
            return INTERNATIONAL_COUNTRIES.map((c) => ({
                url: `${baseUrl}/patients/international/${c.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            }));

        case 'patient-resources':
            return PATIENT_RESOURCES.map((res) => ({
                url: `${baseUrl}${res.customHref || `/patients/${res.slug}`}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            }));

        case 'blog-posts':
            return [
                { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 }
                // Dynamic posts could be added here if allBlogPosts is populated or fetched from CMS
            ];

        case 'events':
            return [
                { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 }
            ];

        case 'faqs':
            return [
                { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 }
            ];

        case 'pages':
        default:
            return [
                '', '/about', '/about/quality-safety', '/careers', '/contact', '/gallery', 
                '/patients', '/pay-bill', '/pharmacy', '/pricing', '/privacy-policy', 
                '/scans', '/terms', '/virtual-tour', '/book-appointment', '/patient-portal',
                '/patients/insurance', '/technology'
            ].map((route) => ({
                url: `${baseUrl}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            }));
    }
}

export function generateSitemapXml(entries: MetadataRoute.Sitemap): string {
    const xmlEntries = entries.map(entry => `
    <url>
        <loc>${entry.url}</loc>
        <lastmod>${(entry.lastModified as Date).toISOString()}</lastmod>
        <changefreq>${entry.changeFrequency}</changefreq>
        <priority>${entry.priority}</priority>
    </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
}

export function generateSitemapIndexXml(sitemaps: string[]): string {
    const xmlEntries = sitemaps.map(url => `
    <sitemap>
        <loc>${url}</loc>
    </sitemap>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</sitemapindex>`;
}
