import type { Metadata } from 'next'
import Link from 'next/link'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'
import PortfolioFilter from '@/components/portfolio/PortfolioFilter'
import { STATIC_PORTFOLIO } from '@/data/portfolio'

export const metadata: Metadata = {
  title: '成功案例',
  description: '華宇資訊科技成功案例集，涵蓋官方網站、管理系統、AI Agent 等多種類型。',
  openGraph: {
    title: '成功案例 | 華宇資訊科技',
    description: '超過200個成功專案，涵蓋官方網站、管理系統、API 整合等多種類型。',
    images: [{ url: '/api/og?title=成功案例&description=超過200個成功專案，網站、系統、API 整合', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const getPortfolio = unstable_cache(
  async () => {
    try {
      const payload = await getPayloadClient()
      const res = await payload.find({ collection: 'portfolio', sort: '-publishedAt', limit: 50 })
      return res.docs
    } catch {
      return []
    }
  },
  ['portfolio-list'],
  { revalidate: 60 }
)

export default async function PortfolioPage() {
  const cmsItems = await getPortfolio()

  // Merge: CMS wins on slug conflict; static fills gaps
  const cmsSlugSet = new Set(cmsItems.map((i: any) => i.slug))
  const staticFallbacks = STATIC_PORTFOLIO.filter((i) => !cmsSlugSet.has(i.slug))
  const merged = [...cmsItems, ...staticFallbacks].sort(
    (a: any, b: any) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">成功案例</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            我們的<span className="text-gradient">成功案例</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            超過 200 個成功專案，每一個都是我們與客戶共同努力的成果
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <PortfolioFilter items={merged as any[]} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4">想成為我們的下一個成功案例？</h2>
          <p className="text-gray-500 mb-8">立即聯繫我們，開始您的數位化旅程</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">免費預約諮詢</Link>
        </div>
      </section>
    </div>
  )
}
