import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export async function GET() {
  const mcpServerCard = {
    serverInfo: {
      name: "IndiraHospital-WebMCP",
      version: "1.0.0"
    },
    transport: {
      type: "sse",
      endpoint: `${siteConfig.url}/api/mcp/sse`
    },
    capabilities: {
      tools: {
        listChanged: false
      },
      resources: {
        subscribe: false,
        listChanged: false
      },
      prompts: {
        listChanged: false
      }
    }
  };

  return NextResponse.json(mcpServerCard, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}
