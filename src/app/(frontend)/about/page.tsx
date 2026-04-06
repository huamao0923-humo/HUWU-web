import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: '關於我們',
  description: '了解華宇資訊科技的品牌故事、核心價值與專業團隊。8年深耕數位化解決方案，服務超過200家企業。',
  openGraph: {
    title: '關於我們 | 華宇資訊科技',
    description: '了解華宇資訊科技的品牌故事、核心價值與專業團隊。8年深耕數位化解決方案，服務超過200家企業。',
    images: [{ url: '/api/og?title=關於我們&description=8年深耕數位化，服務超過200家企業', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const coreValues = [
  {
    icon: '🎯',
    title: '精準交付',
    description: '嚴格的時程管控與品質標準，確保每個專案準時、高品質地完成交付。',
  },
  {
    icon: '💡',
    title: '創新技術',
    description: '持續追蹤最新技術趨勢，為客戶導入最適合的解決方案，而非一成不變。',
  },
  {
    icon: '🤝',
    title: '長期夥伴',
    description: '我們不只是外包商，而是您的技術夥伴，持續提供專業建議與維護支援。',
  },
  {
    icon: '🔒',
    title: '安全可靠',
    description: '所有專案均採用業界最佳安全實踐，保護您的商業資產與用戶資料。',
  },
]


const getTeam = unstable_cache(
  async () => {
    try {
      const payload = await getPayloadClient()
      const res = await payload.find({ collection: 'team', sort: 'order', limit: 12 })
      return res.docs
    } catch {
      return []
    }
  },
  ['about-team'],
  { revalidate: 60 }
)

export default async function AboutPage() {
  const team = await getTeam()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">關於我們</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            數位轉型的<span className="text-gradient">可靠夥伴</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            2016 年創立於台北，華宇資訊科技專注為中小企業提供高品質的數位化解決方案，
            幫助超過 200 家企業在數位世界脫穎而出。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill mb-4">品牌故事</div>
              <h2 className="section-title mb-6">從一個夢想開始</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2016 年，華宇資訊科技由幾位在大型科技公司歷練多年的工程師共同創立。
                  我們看到台灣中小企業在數位化轉型路上的困境：要麼找不到合適的技術合作夥伴，
                  要麼報價高得令人卻步，要麼交付品質參差不齊。
                </p>
                <p>
                  帶著「讓每一家企業都能負擔得起高品質數位化」的使命，我們從三人小團隊，
                  一路成長為擁有完整專業分工的精英團隊，累積超過 200 個成功案例，
                  橫跨零售、餐飲、金融、醫療、教育等多個產業。
                </p>
                <p>
                  我們相信，好的技術夥伴不只是幫你寫程式，而是真正理解你的業務需求，
                  用最合適的技術解法幫助你達成商業目標。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-4 -left-4 card-glass px-6 py-4">
                <div className="text-2xl font-bold text-gray-900">2016</div>
                <div className="text-sm text-gray-500">年創立</div>
              </div>
              <div className="absolute -top-4 -right-4 card-glass px-6 py-4">
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-500">完成專案</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge-pill mx-auto mb-4">核心價值</div>
            <h2 className="section-title">我們堅持的原則</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge-pill mx-auto mb-4">我們的團隊</div>
            <h2 className="section-title">認識我們的專業團隊</h2>
            <p className="section-subtitle mx-auto">每位成員都是各自領域的專家，共同為您打造最佳解決方案</p>
          </div>

          {team.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member: any) => (
                <div key={member.id} className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  {member.avatar?.url ? (
                    <Image
                      src={member.avatar.url}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-brand-600 mt-0.5">{member.title}</p>
                  {member.bio && <p className="text-xs text-gray-400 mt-2 line-clamp-2">{member.bio}</p>}
                  {member.specialties && (
                    <div className="flex flex-wrap gap-1 mt-3 justify-center">
                      {member.specialties.slice(0, 2).map((s: any, si: number) => (
                        <span key={si} className="text-xs px-2 py-0.5 bg-brand-50 text-brand-600 rounded-full">{s.item}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['技術長 / 全端工程師', '前端工程師', 'UI/UX 設計師'].map((role, i) => (
                <div key={i} className="card p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                    {['A', 'B', 'C'][i]}
                  </div>
                  <h3 className="font-bold text-gray-900">團隊成員 {i + 1}</h3>
                  <p className="text-sm text-brand-600 mt-0.5">{role}</p>
                  <p className="text-xs text-gray-400 mt-2">請至後台新增團隊成員資料</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4">加入我們的客戶行列</h2>
          <p className="text-gray-500 mb-8">立即聯繫我們，讓我們一起規劃您的數位化之路</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            免費預約諮詢
          </Link>
        </div>
      </section>
    </div>
  )
}
