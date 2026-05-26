import { getSitemapData, generateSitemapXml } from "@/lib/sitemap-utils";

export async function GET() {
 const data = await getSitemapData('keyword-pages');

 return new Response(generateSitemapXml(data), {
 headers: {
 'Content-Type': 'application/xml',
 'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400',
 },
 });
}
