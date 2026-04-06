import type { Metadata } from 'next'
import Link from 'next/link'
import { pricingTabs } from '@/data/pricing'
import PricingTabs from '@/components/pricing/PricingTabs'

export const metadata: Metadata = {
  title: '方案報價',
  description: '華宇資訊科技透明定價，提供 AI 快建站、電商網站、系統開發、AI Agent 客製、技術服務五大分類，全方位數位服務。',
  openGraph: {
    title: '方案報價 | 華宇資訊科技',
    description: '透明定價，全方位數位服務。AI 快建站 NT$ 6,888 起，無隱藏費用。',
    images: [{ url: '/api/og?title=方案報價&description=透明定價，全方位數位服務', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">服務方案</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">透明定價</span>，全方位數位服務
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            五大服務分類，依需求選擇最適方案，或聯繫我們進行完全客製化規劃
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <PricingTabs tabs={pricingTabs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4">不確定選哪個方案？</h2>
          <p className="text-gray-500 mb-8">帶著您的需求來聊聊，我們免費為您評估最適合的方案</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            免費諮詢
          </Link>
        </div>
      </section>
    </div>
  )
}
