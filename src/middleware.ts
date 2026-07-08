import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Regex pattern to match known aggressive/Chinese AI bots and scrapers
// Bytespider (ByteDance/TikTok), Baiduspider (Baidu), YisouSpider (Shenma), 
// Sogou, TencentTraveler, Alibaba, etc.
const BLOCKED_BOTS_REGEX = /Bytespider|Baiduspider|YisouSpider|Sogou|TencentTraveler|Alibaba/i;

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  if (BLOCKED_BOTS_REGEX.test(userAgent)) {
    // Return a 403 Forbidden to immediately kill the request at the Edge
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

// Optimize middleware execution by excluding static files where it's not needed
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - images/ (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.*\\.xml|robots.txt|images/).*)',
  ],
};
