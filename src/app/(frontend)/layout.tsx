import type { Metadata } from 'next'
import { Noto_Sans_TC, Outfit } from 'next/font/google'
import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import '../globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getPayloadClient } from '@/lib/payload'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
  preload: false,
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
})

// Cached across requests (revalidates every 60s), deduped within a render
const getSiteSettings = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'site-settings' })
  },
  ['site-settings'],
  { revalidate: 60 }
)

// Deduplicates within a single render so generateMetadata and the layout
// component share one call instead of firing two separate requests
const getCachedSettings = cache(getSiteSettings)

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://huwu.com.tw'
  try {
    const settings = await getCachedSettings() as any
    const companyName = settings.companyName || '華宇資訊科技'
    const description = settings.siteDescription || '華宇資訊科技專注於企業官方網站建置、管理系統開發及 API 整合。'
    return {
      metadataBase: new URL(baseUrl),
      title: {
        default: settings.siteTitle || '華宇資訊科技 - 讓您的業務數位化起飛',
        template: `%s | ${companyName}`,
      },
      description,
      openGraph: {
        type: 'website',
        locale: 'zh_TW',
        siteName: companyName,
        description,
        images: [{ url: '/api/og', width: 1200, height: 630, alt: companyName }],
      },
      twitter: {
        card: 'summary_large_image',
        images: ['/api/og'],
      },
    }
  } catch {
    return {
      metadataBase: new URL(baseUrl),
      title: {
        default: '華宇資訊科技 - 讓您的業務數位化起飛',
        template: '%s | 華宇資訊科技',
      },
      description: '華宇資訊科技專注於企業官方網站建置、管理系統開發及 API 整合。',
      openGraph: {
        type: 'website',
        locale: 'zh_TW',
        siteName: '華宇資訊科技',
        images: [{ url: '/api/og', width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        images: ['/api/og'],
      },
    }
  }
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const settings = await getCachedSettings().catch(() => null)

  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} ${outfit.variable}`}>
      <body>
        <Navbar settings={settings} />
        <main className="min-h-screen">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  )
}
