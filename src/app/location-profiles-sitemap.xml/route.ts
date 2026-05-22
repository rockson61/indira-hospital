import { getSitemapData, generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
    // Combine all location-specific profiles into one sitemap
    const [deptData, treatData, docData] = await Promise.all([
        getSitemapData('location-departments'),
        getSitemapData('location-treatments'),
        getSitemapData('location-doctors'),
    ]);
    
    const data = [...deptData, ...treatData, ...docData];
    const xml = generateSitemapXml(data);

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400'
        }
    });
}
