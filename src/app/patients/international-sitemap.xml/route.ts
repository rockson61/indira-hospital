import { INTERNATIONAL_COUNTRIES } from "@/lib/data/international-data";
import { siteConfig } from "@/config/site";

export async function GET() {
 const baseUrl = siteConfig.url.endsWith('/') ? siteConfig.url.slice(0, -1) : siteConfig.url;
 
 const urls: string[] = INTERNATIONAL_COUNTRIES.map((country) => {
 return `<url>
 <loc>${baseUrl}/patients/international/${country.slug}</loc>
 <changefreq>weekly</changefreq>
 <priority>0.8</priority>
 </url>`;
 });

 const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 ${urls.join('\n ')}
</urlset>`;

 return new Response(sitemap, {
 headers: {
 "Content-Type": "application/xml",
 },
 });
}
