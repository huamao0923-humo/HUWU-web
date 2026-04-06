import Image from 'next/image'

interface Testimonial {
  id: string
  name: string
  jobTitle?: string
  company?: string
  content: string
  rating?: number
  avatar?: { url?: string; alt?: string }
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const defaults: Testimonial[] = [
  {
    id: '1',
    name: '王小明',
    jobTitle: '執行長',
    company: '台灣科技有限公司',
    content: '華宇資訊科技幫助我們在 14 天內完成了全新官方網站的建置，不僅設計精美，後台管理也非常直覺易用。業務詢問量在上線後提升了 150%，非常推薦！',
    rating: 5,
  },
  {
    id: '2',
    name: '李雅婷',
    jobTitle: '營運總監',
    company: '連鎖餐飲集團',
    content: '我們委託華宇開發訂單管理系統，從需求訪談到上線只花了 6 週，系統穩定性非常高，大幅降低了人工作業的錯誤率。團隊溝通效率也很棒，強力推薦！',
    rating: 5,
  },
  {
    id: '3',
    name: '陳大偉',
    jobTitle: '電商部門主管',
    company: '零售品牌股份有限公司',
    content: '串接多個物流及金流 API 的複雜需求，華宇的工程師能力很強，一次就做對了。上線後的維護也很即時，合作過最專業的開發團隊。',
    rating: 5,
  },
]

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const items = testimonials?.length ? testimonials : defaults

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-pill mx-auto mb-4">客戶見證</div>
          <h2 className="section-title">客戶怎麼說</h2>
          <p className="section-subtitle mx-auto">
            真實的客戶回饋，是我們最好的成績單
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="card p-6 flex flex-col">
              {/* Rating */}
              <StarRating rating={item.rating} />

              {/* Quote */}
              <blockquote className="flex-1 mt-4 text-gray-600 text-sm leading-relaxed relative">
                <span className="absolute -top-2 -left-1 text-4xl text-brand-200 font-serif leading-none">"</span>
                <span className="relative">{item.content}</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                {item.avatar?.url ? (
                  <Image
                    src={item.avatar.url}
                    alt={item.avatar.alt || item.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-400">
                    {[item.jobTitle, item.company].filter(Boolean).join(' @ ')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
