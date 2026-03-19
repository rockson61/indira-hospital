import { getSitemapData, generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
    const data = await getSitemapData('medical-glossary');
    const xml = generateSitemapXml(data);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59'
        }
    });
}
