import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') || '華宇資訊科技'
  const description = searchParams.get('description') || '企業官方網站 · 管理系統 · API 整合'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #D5E9FF 0%, #A4CEFF 50%, #2C7DD0 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(43,123,229,0.15) 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '48px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #2B7BE5, #1E5CB3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              color: 'white',
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            H
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1A3A6B', letterSpacing: '4px' }}>
              華　宇
            </div>
            <div style={{ fontSize: '13px', color: '#5B9FE0', letterSpacing: '3px', marginTop: '2px' }}>
              INFOTECH · 資訊科技
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 20 ? '48px' : '60px',
            fontWeight: '800',
            color: '#1e293b',
            lineHeight: 1.2,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '28px',
            color: '#334155',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            background: 'rgba(26,107,217,0.15)',
            border: '1px solid rgba(26,107,217,0.3)',
            borderRadius: '999px',
            padding: '10px 24px',
            fontSize: '18px',
            color: '#1A6BD9',
            fontWeight: '600',
          }}
        >
          huwu.com.tw
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
