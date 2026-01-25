import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PostEngage.ai - Instagram Automation Platform';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0f',
        backgroundImage: 'linear-gradient(to bottom right, #0a0a0f, #111118)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
        }}
      >
        {/* Logo Icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #0070f3, #00a6ed)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 24,
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
            }}
          >
            PE
          </div>
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          }}
        >
          PostEngage.ai
        </div>
      </div>
      <div
        style={{
          color: '#888888',
          fontSize: 32,
          maxWidth: 800,
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        Stop ignoring comments. Automate DMs in your voice, schedule posts, and
        track analytics.
      </div>
    </div>,
    {
      ...size,
    }
  );
}
