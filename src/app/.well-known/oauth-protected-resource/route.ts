import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export async function GET() {
  const protectedResource = {
    resource: siteConfig.url,
    authorization_servers: [
      siteConfig.url
    ],
    scopes_supported: ["api.read", "api.write"],
    bearer_methods_supported: ["header"]
  };

  return NextResponse.json(protectedResource, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}
