import { siteConfig } from '@/config/site';
import { generateSitemapIndexXml } from '@/lib/sitemap-utils';

export async function GET() {
    const baseUrl = siteConfig.url;
    const sitemaps = [
        `${baseUrl}/pages-sitemap.xml`,
        `${baseUrl}/doctors-sitemap.xml`,
        `${baseUrl}/departments-sitemap.xml`,
        `${baseUrl}/treatments-sitemap.xml`,
        `${baseUrl}/locations-sitemap.xml`,
        `${baseUrl}/diagnostics-sitemap.xml`,
        `${baseUrl}/health-packages-sitemap.xml`,
        `${baseUrl}/medical-glossary-sitemap.xml`,
        `${baseUrl}/international-patients-sitemap.xml`,
        `${baseUrl}/patient-resources-sitemap.xml`,
        `${baseUrl}/location-departments-sitemap.xml`,
        `${baseUrl}/location-treatments-sitemap.xml`,
        `${baseUrl}/location-doctors-sitemap.xml`,
        `${baseUrl}/blog-posts-sitemap.xml`,
        `${baseUrl}/events-sitemap.xml`,
        `${baseUrl}/faqs-sitemap.xml`
    ];

    const xml = generateSitemapIndexXml(sitemaps);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59'
        }
    });
}
