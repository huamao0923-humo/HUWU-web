import type { Metadata } from 'next'
import Link from 'next/link'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'
import ServicesLayout from '@/components/services/ServicesLayout'

// ── Process step icons (Lucide-style) ──
const ProcessIcon = ({ type }: { type: string }) => {
  const base = 'w-6 h-6 fill-none stroke-current stroke-[1.5]'
  switch (type) {
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" className={base} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <circle cx="9"  cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'plan':
      return (
        <svg viewBox="0 0 24 24" className={base} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 8h18M8 3v18" />
          <path d="M12 12h5M12 16h3" />
        </svg>
      )
    case 'dev':
      return (
        <svg viewBox="0 0 24 24" className={base} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    case 'launch':
      return (
        <svg viewBox="0 0 24 24" className={base} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-.5-.5" />
          <path d="M12 8L9.5 10.5M15 5c-1.5 0-4 1-4 1L5 12l2 2 7-7s1-2.5 1-4z" />
          <path d="M14.5 9.5l3 3-3.5 7-4-4 4.5-6z" />
        </svg>
      )
    default:
      return null
  }
}

export const metadata: Metadata = {
  title: '服務項目',
  description: '華宇資訊科技提供 AI 快建站、電商網站、系統開發、AI Agent 客製、技術服務，快速交付、透明報價。',
  openGraph: {
    title: '服務項目 | 華宇資訊科技',
    description: 'AI 快建站、電商網站、系統開發、AI Agent 客製、技術服務，快速交付、透明報價。',
    images: [{ url: '/api/og?title=服務項目&description=AI快建站 · 電商 · 系統開發 · AI Agent · 技術服務', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const processSteps = [
  { step: '01', title: '需求訪談', desc: '深入了解您的業務需求與目標，釐清專案範圍與時程。', icon: 'chat' },
  { step: '02', title: '方案規劃', desc: '提供詳細的技術方案與報價，確認後簽訂合作協議。', icon: 'plan' },
  { step: '03', title: '開發執行', desc: '敏捷開發模式，定期更新進度，隨時接受回饋調整。', icon: 'dev' },
  { step: '04', title: '交付上線', desc: '完整測試後上線，並提供教育訓練與後續維護支援。', icon: 'launch' },
]

const faqs = [
  { q: '最快多久可以完成一個網站專案？', a: 'AI 快建站方案最快 2 個工作天可上線；標準官網 3-7 天；電商網站 14-30 天；系統開發依複雜度 5-60 天不等。' },
  { q: '是否提供後續維護服務？', a: '是的，我們提供月費制的維護方案，包含定期備份、安全更新、Bug 修復及小幅度功能調整。' },
  { q: '我沒有技術背景，可以合作嗎？', a: '當然可以！我們擅長將技術需求轉化為商業語言，全程用您聽得懂的方式溝通。' },
  { q: '你們使用什麼技術棧？', a: '前端主要使用 Next.js / React，後端使用 Node.js / Python，資料庫使用 PostgreSQL / MySQL，部署於 Vercel / AWS。' },
  { q: '費用如何計算？', a: '依照專案範圍、複雜度和時程報價。我們提供免費的初步評估，歡迎帶著您的需求來談。' },
  { q: '我的資料安全嗎？', a: '所有客戶資料均受 NDA 保護，我們採用業界最佳安全實踐，包含 HTTPS、資料加密及定期安全稽核。' },
]

const serviceSections = [
  {
    id: 'website',
    title: 'AI 快建站',
    desc: '由 AI 輔助設計、快速交付，打造響應式、高效能的企業形象網站，最快 2 天上線。',
    features: [
      '響應式 RWD 設計', 'SEO 基礎優化',
      'CMS 後台管理', '速度效能優化',
      'Google Analytics 整合', 'SSL 安全憑證',
      '多語言支援（可選）', 'A/B 測試整合（可選）',
    ],
  },
  {
    id: 'ecommerce',
    title: '電商網站',
    desc: '完整電商解決方案，從商品管理、購物車到金流串接，打造轉換率最佳的購物平台。',
    features: [
      '商品管理系統', '購物車 / 結帳流程',
      '金流串接（綠界/藍新）', '訂單後台管理',
      '庫存通知', '會員系統',
      '電商 SEO 優化', '行動購物優化',
    ],
  },
  {
    id: 'system',
    title: '系統開發',
    desc: '客製化 ERP、CRM、訂單管理等後台系統，提升企業內部流程效率，減少人工作業成本。',
    features: [
      '客製化業務邏輯', '角色權限管理',
      '數據報表分析', 'API 第三方整合',
      '批量匯入/匯出', '自動化通知',
      '行動裝置支援', '稽核日誌記錄',
    ],
  },
  {
    id: 'ai',
    title: 'AI Agent 客製',
    desc: '客製化 AI 對話機器人、知識庫 RAG 系統，實現智能客服與自動化流程。',
    features: [
      '客製 AI 對話 Agent', 'RAG 知識庫建置',
      '多 Agent 協作架構', 'LLM API 串接（OpenAI/Claude）',
      'Embedding 向量搜尋', '工作流自動化',
      '資料清洗與訓練', '企業內部部署（可選）',
    ],
  },
  {
    id: 'tech',
    title: '技術服務',
    desc: '專業技術除錯、效能優化、安全性稽核，提供全方位的技術顧問支援。',
    features: [
      'Debug 除錯分析', '效能瓶頸診斷',
      '安全性稽核', '架構優化建議',
      '程式碼審查', '部署流程改善',
      '技術顧問諮詢', '月費維護支援',
    ],
  },
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
  await getServices() // reserved for future CMS integration

  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="relative hero-gradient py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-3">服務項目</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            全方位<span className="text-gradient">數位化服務</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            AI 快建站、電商平台、系統開發、AI Agent 客製到技術諮詢，五大完整解決方案
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* ── Services (B+C layout) ── */}
      <ServicesLayout sections={serviceSections} />

      {/* ── Process ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <div className="badge-pill mx-auto mb-3">合作流程</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">簡單 4 步驟，開始合作</h2>
            <p className="text-sm text-gray-500">透明的流程，讓您清楚了解每一個環節</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+8px)] w-[calc(100%-16px)] h-px bg-gradient-to-r from-brand-300 to-brand-100 z-0" />
                )}
                <div className="relative z-10 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-sm p-5 transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-3 relative">
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <ProcessIcon type={step.icon} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8 md:mb-10">
            <div className="badge-pill mx-auto mb-3">常見問題</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">您可能想知道</h2>
            <p className="text-sm text-gray-500">我們整理了最常被問到的問題</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 hover:shadow-sm transition-all duration-300"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none group-open:bg-brand-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4 text-sm">{faq.q}</span>
                  <svg
                    className="w-4 h-4 text-brand-500 shrink-0 group-open:rotate-180 transition-transform duration-300"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 border-t border-gray-100 text-gray-600 leading-relaxed text-sm pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-brand-600 to-brand-700 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-custom max-w-xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">找不到您需要的服務？</h2>
          <p className="text-white/80 mb-7 text-sm md:text-base">
            歡迎帶著您的需求來聊聊，我們擅長各種客製化技術解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-white text-brand-600 hover:bg-gray-50 px-7 py-3 rounded-lg font-semibold transition-colors text-sm">
              立即聯絡我們
            </Link>
            <Link href="/pricing" className="border-2 border-white/70 text-white hover:bg-white/10 px-7 py-3 rounded-lg font-semibold transition-colors text-sm">
              查看服務報價
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
