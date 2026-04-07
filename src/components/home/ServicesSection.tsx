import Link from 'next/link'

interface Service {
  id: string
  name: string
  icon?: string
  shortDescription: string
  features?: { item: string }[]
  slug: string
  color?: string
}

interface ServicesSectionProps {
  services: Service[]
}

// SVG Icons with design
const ServiceIcon = ({ id }: { id: string }) => {
  switch (id) {
    case '1':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v6l4 2" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
        </svg>
      )
    case '2':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M9 2L6 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-3l-3-4H9z" />
          <circle cx="12" cy="15" r="3.5" />
          <path d="M20 8h1M3 8h1" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case '3':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      )
    case '4':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor" />
        </svg>
      )
    case '5':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
          <path d="M13 17h-2v-2h2v2M13 11h-2V7h2v4" />
        </svg>
      )
    default:
      return null
  }
}

const serviceDefaults = [
  {
    id: '1',
    name: 'AI 快建站',
    shortDescription: '由 AI 輔助設計、快速交付，打造響應式、高效能的企業形象網站，最快 2 天上線。',
    features: [
      { item: '響應式 RWD 設計' },
      { item: 'SEO 基礎優化' },
      { item: 'CMS 後台管理' },
      { item: '速度效能優化' },
    ],
    slug: 'website',
    color: 'from-blue-500/10 to-blue-500/5',
  },
  {
    id: '2',
    name: '電商網站',
    shortDescription: '完整電商解決方案，從商品管理、購物車到金流串接，打造轉換率最佳的購物平台。',
    features: [
      { item: '商品管理系統' },
      { item: '購物車 / 結帳流程' },
      { item: '金流串接（綠界/藍新）' },
      { item: '訂單後台管理' },
    ],
    slug: 'ecommerce',
    color: 'from-purple-500/10 to-purple-500/5',
  },
  {
    id: '3',
    name: '系統開發',
    shortDescription: '客製化 ERP、CRM、訂單管理等後台系統，提升企業內部流程效率，減少人工作業成本。',
    features: [
      { item: '客製化業務邏輯' },
      { item: '角色權限管理' },
      { item: '數據報表分析' },
      { item: 'API 第三方整合' },
    ],
    slug: 'system',
    color: 'from-orange-500/10 to-orange-500/5',
  },
  {
    id: '4',
    name: 'AI Agent 客製',
    shortDescription: '客製化 AI 對話機器人、知識庫 RAG 系統，實現智能客服與自動化流程。',
    features: [
      { item: '客製 AI 對話 Agent' },
      { item: 'RAG 知識庫建置' },
      { item: '多 Agent 協作架構' },
      { item: 'LLM API 串接' },
    ],
    slug: 'ai',
    color: 'from-pink-500/10 to-pink-500/5',
  },
  {
    id: '5',
    name: '技術服務',
    shortDescription: '專業技術除錯、效能優化、安全性稽核，提供全方位的技術顧問支援。',
    features: [
      { item: 'Debug 除錯分析' },
      { item: '效能瓶頸診斷' },
      { item: '安全性稽核' },
      { item: '架構優化建議' },
    ],
    slug: 'tech',
    color: 'from-teal-500/10 to-teal-500/5',
  },
]

const iconColors: Record<string, string> = {
  '1': 'text-blue-600',
  '2': 'text-purple-600',
  '3': 'text-orange-600',
  '4': 'text-pink-600',
  '5': 'text-teal-600',
}

const bgColors: Record<string, string> = {
  '1': 'bg-blue-50',
  '2': 'bg-purple-50',
  '3': 'bg-orange-50',
  '4': 'bg-pink-50',
  '5': 'bg-teal-50',
}

const bgHoverColors: Record<string, string> = {
  '1': 'group-hover:bg-blue-100',
  '2': 'group-hover:bg-purple-100',
  '3': 'group-hover:bg-orange-100',
  '4': 'group-hover:bg-pink-100',
  '5': 'group-hover:bg-teal-100',
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const displayServices = services?.length ? services : serviceDefaults

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="badge-pill mx-auto mb-3">我們的專業服務</div>
          <h2 className="section-title">一站式數位化解決方案</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            從需求分析到上線維護，我們提供全方位的技術支援，讓您專注於核心業務
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="card p-6 md:p-7 group hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${bgColors[service.id]} ${bgHoverColors[service.id]} flex items-center justify-center mb-4 transition-colors ${iconColors[service.id]}`}>
                <ServiceIcon id={service.id} />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.name}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                {service.shortDescription}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-1.5 mb-5 pb-5 border-b border-gray-100">
                  {service.features.slice(0, 4).map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f.item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Link */}
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 group-hover:gap-2.5 transition-all"
              >
                了解更多
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-10">
          <Link href="/services" className="btn-secondary">
            查看完整服務項目
          </Link>
        </div>
      </div>
    </section>
  )
}
