/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indirasuperspecialityhospital.com',
  generateRobotsTxt: true,
  exclude: ['/admin*', '/api*'], // Exclude admin and api routes
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.indirasuperspecialityhospital.com/doctors-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/departments-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/treatments-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/locations-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/location-profiles-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/medical-glossary-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/seo-sitemap.xml',
      'https://www.indirasuperspecialityhospital.com/patients/international-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin', '/api'],
      },
    ],
  },
}
