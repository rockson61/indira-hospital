import { getSitemapData, generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
    const data = await getSitemapData('departments');
    const xml = generateSitemapXml(data);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        }
    });
}
