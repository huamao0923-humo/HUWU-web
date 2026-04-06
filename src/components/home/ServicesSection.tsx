import Link from 'next/link'

interface Service {
  id: string
  name: string
  icon?: string
  shortDescription: string
  features?: { item: string }[]
  slug: string
}

interface ServicesSectionProps {
  services: Service[]
}

const serviceDefaults = [
  {
    id: '1',
    name: '官方網站建置',
    icon: '🌐',
    shortDescription: '從品牌形象網站到電商平台，響應式設計、SEO 優化，讓您的品牌在線上留下深刻印象。',
    features: [
      { item: '響應式 RWD 設計' },
      { item: 'SEO 基礎優化' },
      { item: 'CMS 後台管理' },
      { item: '速度效能優化' },
    ],
    slug: 'website',
  },
  {
    id: '2',
    name: '管理系統開發',
    icon: '⚙️',
    shortDescription: '客製化 ERP、CRM、訂單管理等後台系統，提升企業內部流程效率，減少人工作業成本。',
    features: [
      { item: '客製化業務邏輯' },
      { item: '角色權限管理' },
      { item: '數據報表分析' },
      { item: 'API 第三方整合' },
    ],
    slug: 'system',
  },
  {
    id: '3',
    name: 'API 整合/自動化',
    icon: '🔗',
    shortDescription: '串接各大平台 API，建立自動化工作流程，讓您的系統之間無縫協作，節省大量人力。',
    features: [
      { item: '第三方 API 串接' },
      { item: '自動化流程建立' },
      { item: 'Webhook 整合' },
      { item: '數據同步排程' },
    ],
    slug: 'api',
  },
]

export default function ServicesSection({ services }: ServicesSectionProps) {
  const displayServices = services?.length ? services : serviceDefaults

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-pill mx-auto mb-4">我們的專業服務</div>
          <h2 className="section-title">一站式數位化解決方案</h2>
          <p className="section-subtitle mx-auto">
            從需求分析到上線維護，我們提供全方位的技術支援，讓您專注於核心業務
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayServices.slice(0, 3).map((service, i) => (
            <div
              key={service.id || i}
              className="card p-8 group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-100 transition-colors">
                {service.icon || '💡'}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.shortDescription}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
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
        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary">
            查看完整服務項目
          </Link>
        </div>
      </div>
    </section>
  )
}
