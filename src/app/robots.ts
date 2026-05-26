import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
 return {
 rules: [
 {
 userAgent: '*',
 allow: '/',
 disallow: ['/admin/', '/private/'],
 },
 {
 userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'YandexBot'],
 allow: '/',
 },
 {
 userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Bot', 'ClaudeBot', 'PerplexityBot', 'OmgiliBot', 'FacebookBot', 'anthropic-ai', 'cohere-ai'],
 allow: '/',
 }
 ],
 sitemap: `${siteConfig.url}/sitemap.xml`,
 }
}
