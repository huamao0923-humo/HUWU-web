import type { Metadata } from 'next'
import Link from 'next/link'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: '服務項目',
  description: '華宇資訊科技提供官方網站建置、管理系統開發、API 整合等完整數位化服務，14天快速交付。',
  openGraph: {
    title: '服務項目 | 華宇資訊科技',
    description: '官方網站建置、管理系統開發、API 整合，14天快速交付，透明報價。',
    images: [{ url: '/api/og?title=服務項目&description=官方網站 · 管理系統 · API 整合，14天交付', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const processSteps = [
  { step: '01', title: '需求訪談', desc: '深入了解您的業務需求與目標，釐清專案範圍與時程。', icon: '💬' },
  { step: '02', title: '方案規劃', desc: '提供詳細的技術方案與報價，確認後簽訂合作協議。', icon: '📋' },
  { step: '03', title: '開發執行', desc: '敏捷開發模式，定期更新進度，隨時接受回饋調整。', icon: '⚙️' },
  { step: '04', title: '交付上線', desc: '完整測試後上線，並提供教育訓練與後續維護支援。', icon: '🚀' },
]

const faqs = [
  { q: '最快多久可以完成一個網站專案？', a: '一般官方網站專案最快 7-14 個工作天可以上線，管理系統依複雜度約需 4-12 週。' },
  { q: '是否提供後續維護服務？', a: '是的，我們提供月費制的維護方案，包含定期備份、安全更新、Bug 修復及小幅度功能調整。' },
  { q: '我沒有技術背景，可以合作嗎？', a: '當然可以！我們擅長將技術需求轉化為商業語言，全程用您聽得懂的方式溝通。' },
  { q: '你們使用什麼技術棧？', a: '前端主要使用 Next.js / React，後端使用 Node.js / Python，資料庫使用 PostgreSQL / MySQL，部署於 Vercel / AWS。' },
  { q: '費用如何計算？', a: '依照專案範圍、複雜度和時程報價。我們提供免費的初步評估，歡迎帶著您的需求來談。' },
  { q: '我的資料安全嗎？', a: '所有客戶資料均受 NDA 保護，我們採用業界最佳安全實踐，包含 HTTPS、資料加密及定期安全稽核。' },
]

const getServices = unstable_cache(
  async () => {
    try {
      const payload = await getPayloadClient()
      const res = await payload.find({ collection: 'services', sort: 'order', limit: 20 })
      return res.docs
    } catch {
      return []
    }
  },
  ['services-page'],
  { revalidate: 60 }
)

export default async function ServicesPage() {
  const services = await getServices()

  const serviceGroups = {
    website: services.filter((s: any) => s.category === 'website'),
    system: services.filter((s: any) => s.category === 'system'),
    api: services.filter((s: any) => s.category === 'api'),
  }

  const serviceSections = [
    {
      id: 'website',
      icon: '🌐',
      title: '官方網站建置',
      desc: '從品牌形象到電商平台，為您打造高轉換率、高效能的企業網站',
      color: 'from-blue-500 to-brand-600',
      features: [
        '響應式 RWD 設計', 'SEO 基礎優化', 'CMS 後台管理',
        '速度效能優化', 'Google Analytics 整合', 'SSL 安全憑證',
        '多語言支援（可選）', 'A/B 測試整合（可選）',
      ],
    },
    {
      id: 'system',
      icon: '⚙️',
      title: '管理系統開發',
      desc: '客製化 ERP、CRM、訂單管理等後台系統，提升企業運營效率',
      color: 'from-purple-500 to-purple-700',
      features: [
        '客製化業務邏輯', '角色權限管理', '數據報表分析',
        'API 第三方整合', '批量匯入/匯出', '自動化通知',
        '行動裝置支援', '稽核日誌記錄',
      ],
    },
    {
      id: 'api',
      icon: '🔗',
      title: 'API 整合/自動化',
      desc: '串接各大平台 API，建立自動化工作流程，讓您的系統無縫協作',
      color: 'from-emerald-500 to-teal-700',
      features: [
        '第三方 API 串接', '自動化流程建立', 'Webhook 整合',
        '數據同步排程', '電商平台整合', '金物流 API',
        'LINE/Email 通知', '數據清洗轉換',
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">服務項目</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            全方位<span className="text-gradient">數位化服務</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            從網站建置到系統開發，從 API 整合到自動化流程，我們提供完整的技術解決方案
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, idx) => (
        <section key={section.id} id={section.id} className={`section-padding ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container-custom">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold text-white mb-4 bg-gradient-to-r ${section.color}`}>
                  <span>{section.icon}</span>
                  <span>{section.title}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{section.desc}</p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {section.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-600 py-1">
                      <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <Link href="/contact" className="btn-primary">立即諮詢</Link>
                  <Link href="/pricing" className="btn-secondary">查看報價</Link>
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br ${section.color} opacity-10`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">{section.icon}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge-pill mx-auto mb-4">合作流程</div>
            <h2 className="section-title">簡單 4 步驟，開始合作</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-[calc(100%-24px)] h-0.5 bg-brand-200 z-0" />
                )}
                <div className="card p-6 text-center relative z-10 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl mx-auto mb-3">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-brand-500 mb-1">STEP {step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <div className="badge-pill mx-auto mb-4">常見問題</div>
            <h2 className="section-title">您可能想知道</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card p-0 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-brand-500 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-500 leading-relaxed text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4">找不到您需要的服務？</h2>
          <p className="text-gray-500 mb-8">歡迎帶著您的需求來聊聊，我們擅長各種客製化技術解決方案</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            聯絡我們討論
          </Link>
        </div>
      </section>
    </div>
  )
}
