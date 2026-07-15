import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: `${siteConfig.url}/api`,
        "service-desc": [
          {
            href: `${siteConfig.url}/api/openapi.yaml`,
            type: "application/yaml"
          }
        ],
        "service-doc": [
          {
            href: `${siteConfig.url}/docs/api`,
            type: "text/html"
          }
        ],
        status: [
          {
            href: `${siteConfig.url}/api/health`,
            type: "application/json"
          }
        ]
      }
    ]
  };

  return NextResponse.json(catalog, {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}
