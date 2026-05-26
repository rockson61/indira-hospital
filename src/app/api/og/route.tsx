import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'Indira Superspeciality Hospital';
    const subtitle = searchParams.get('subtitle') || 'Advanced Healthcare in Tamil Nadu';
    const type = searchParams.get('type') || 'Website';

    // Claymorphic colors
    const primary = '#7e22ce'; // fuchsia-700
    const secondary = '#db2777'; // pink-600
    const background = '#ffffff';
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: background,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Background Elements */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '50%',
              height: '50%',
              background: `radial-gradient(circle, ${primary}20 0%, transparent 70%)`,
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-10%',
              width: '60%',
              height: '60%',
              background: `radial-gradient(circle, ${secondary}20 0%, transparent 70%)`,
              borderRadius: '50%',
            }}
          />

          {/* Card Container (Claymorphic style imitation) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              padding: '60px',
              borderRadius: '32px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(0,0,0,0.02)',
              border: '1px solid rgba(0,0,0,0.05)',
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            {/* Branding */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                IH
              </div>
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: primary,
                  margin: 0,
                }}
              >
                Indira Hospital
              </h2>
            </div>

            {/* Type Badge */}
            {type && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 24px',
                  backgroundColor: '#f3e8ff',
                  color: primary,
                  borderRadius: '999px',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '24px',
                }}
              >
                {type}
              </div>
            )}

            {/* Title */}
            <h1
              style={{
                fontSize: title.length > 40 ? '64px' : '80px',
                fontWeight: '800',
                color: '#1e293b',
                lineHeight: 1.1,
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '32px',
                color: '#64748b',
                lineHeight: 1.4,
                margin: 0,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`[OG Image Error] ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
