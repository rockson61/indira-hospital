import { surgicalSilos, slugify } from "@/lib/data/seo-config";
import { tamilNaduLocations } from "@/lib/data/tamilnadu-locations";
import { siteConfig } from "@/config/site";

export async function GET() {
  const baseUrl = siteConfig.url.endsWith('/') ? siteConfig.url.slice(0, -1) : siteConfig.url;
  
  const urls: string[] = [];

  for (const procedure of surgicalSilos) {
    for (const location of tamilNaduLocations) {
      const topic = `${procedure.name} in ${location.name}`;
      const slug = slugify(topic);
      urls.push(`<url><loc>${baseUrl}/seo/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n  ')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
