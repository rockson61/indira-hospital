import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export async function GET() {
  const oauthConfig = {
    issuer: siteConfig.url,
    authorization_endpoint: `${siteConfig.url}/api/auth/authorize`,
    token_endpoint: `${siteConfig.url}/api/auth/token`,
    jwks_uri: `${siteConfig.url}/.well-known/jwks.json`,
    scopes_supported: ["openid", "profile", "email", "api.read", "api.write"],
    response_types_supported: ["code", "token"],
    grant_types_supported: ["authorization_code", "client_credentials"],
    token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post"],
    agent_auth: {
      register_uri: `${siteConfig.url}/auth.md`,
      supported_identity_types: ["urn:ietf:params:oauth:client-assertion-type:jwt-bearer"]
    }
  };

  return NextResponse.json(oauthConfig, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}
