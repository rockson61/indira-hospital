import { getSitemapData, generateSitemapXml } from '@/lib/sitemap-utils';

export async function GET() {
 const data = await getSitemapData('health-packages');
 const xml = generateSitemapXml(data);

 return new Response(xml, {
 headers: {
 'Content-Type': 'application/xml',
 'Cache-Control': 'public, s-maxage=31536000, stale-while-revalidate=31536000'
 }
 });
}
