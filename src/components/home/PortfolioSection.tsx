import Link from 'next/link'
import Image from 'next/image'
import PortfolioMockup from '@/components/portfolio/PortfolioMockup'

interface PortfolioItem {
  id: string
  title: string
  client: string
  category: string
  shortDescription: string
  slug: string
  coverImage?: { url?: string; alt?: string }
  techTags?: { tag: string }[]
}

interface PortfolioSectionProps {
  items: PortfolioItem[]
}

const categoryLabels: Record<string, string> = {
  website: '官方網站',
  system: '管理系統',
  api: 'API 整合',
}

const categoryColors: Record<string, string> = {
  website: 'bg-blue-100 text-blue-700',
  system: 'bg-purple-100 text-purple-700',
  api: 'bg-emerald-100 text-emerald-700',
}

export default function PortfolioSection({ items }: PortfolioSectionProps) {
  if (!items?.length) {
    return (
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1A6BD9 0%, #1150A8 100%)' }}>
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mx-auto mb-4">精選案例</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">我們的成功案例</h2>
          <p className="text-white/70 mt-8">案例資料載入中，請先至後台新增案例。</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-pill mx-auto mb-4">精選案例</div>
          <h2 className="section-title">我們的成功案例</h2>
          <p className="section-subtitle mx-auto">
            每一個專案都是我們全力以赴的成果，數字見證客戶的成長
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="card group overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-52 bg-gradient-to-br from-brand-50 to-brand-100 overflow-hidden">
                {item.coverImage?.url ? (
                  <Image
                    src={item.coverImage.url}
                    alt={item.coverImage.alt || item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <PortfolioMockup slug={item.slug} index={0} size="card" />
                )}
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}>
                    {categoryLabels[item.category] || item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs text-gray-400 font-medium mb-1">{item.client}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{item.shortDescription}</p>

                {/* Tech tags */}
                {item.techTags && item.techTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.techTags.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {t.tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                  查看詳情
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/portfolio" className="btn-secondary">
            查看所有案例
          </Link>
        </div>
      </div>
    </section>
  )
}
