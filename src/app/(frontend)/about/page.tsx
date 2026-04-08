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
                  2020 年，華宇資訊科技由幾位在大型科技公司歷練多年的工程師共同創立。
                  我們看到台灣中小企業在數位化轉型路上的困境：要麼找不到合適的技術合作夥伴，
                  要麼報價高得令人卻步，要麼交付品質參差不齊。
                </p>
                <p>
                  帶著「讓每一家企業都能負擔得起高品質數位化」的使命，累積超過 30 個成功案例導入案例，
                  橫跨零售、餐飲、金融、醫療、教育等多個產業。我們相信，好的技術夥伴不只是幫你寫程式，
                  而是真正理解你的業務需求，用最合適的技術解法幫助你達成商業目標。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[5/4] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl overflow-hidden">
                <svg viewBox="0 0 400 320" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="glowBg" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#4338ca" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                    <filter id="logoGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="10" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <clipPath id="cardClip">
                      <rect width="400" height="320" rx="24"/>
                    </clipPath>
                  </defs>

                  <g clipPath="url(#cardClip)">
                    {/* Background grid */}
                    <g stroke="#3b82f6" strokeWidth="0.6" opacity="0.08">
                      {[50,100,150,200,250,300,350].map(x => (
                        <line key={x} x1={x} y1="0" x2={x} y2="320"/>
                      ))}
                      {[40,80,120,160,200,240,280].map(y => (
                        <line key={y} x1="0" y1={y} x2="400" y2={y}/>
                      ))}
                    </g>

                    {/* Center radial glow */}
                    <circle cx="200" cy="160" r="160" fill="url(#centerGlow)"/>

                    {/* Outer orbit rings */}
                    <circle cx="200" cy="160" r="148" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.15" strokeDasharray="6 6"/>
                    <circle cx="200" cy="160" r="125" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2"/>
                    <circle cx="200" cy="160" r="100" fill="none" stroke="#6366f1" strokeWidth="0.8" opacity="0.25" strokeDasharray="3 5"/>

                    {/* Corner bracket decorations — top-left */}
                    <g stroke="#60a5fa" strokeWidth="1.8" opacity="0.5" strokeLinecap="round">
                      <path d="M 24 52 L 24 24 L 52 24"/>
                    </g>
                    {/* top-right */}
                    <g stroke="#818cf8" strokeWidth="1.8" opacity="0.5" strokeLinecap="round">
                      <path d="M 348 24 L 376 24 L 376 52"/>
                    </g>
                    {/* bottom-left */}
                    <g stroke="#60a5fa" strokeWidth="1.8" opacity="0.5" strokeLinecap="round">
                      <path d="M 24 268 L 24 296 L 52 296"/>
                    </g>
                    {/* bottom-right */}
                    <g stroke="#818cf8" strokeWidth="1.8" opacity="0.5" strokeLinecap="round">
                      <path d="M 348 296 L 376 296 L 376 268"/>
                    </g>

                    {/* Subtle circuit traces */}
                    <g stroke="#3b82f6" strokeWidth="1" opacity="0.2" strokeLinecap="round">
                      <path d="M 24 100 L 70 100 L 70 130"/>
                      <path d="M 376 100 L 330 100 L 330 130"/>
                      <path d="M 24 220 L 70 220 L 70 190"/>
                      <path d="M 376 220 L 330 220 L 330 190"/>
                    </g>
                    <circle cx="70" cy="130" r="2.5" fill="#3b82f6" opacity="0.4"/>
                    <circle cx="330" cy="130" r="2.5" fill="#6366f1" opacity="0.4"/>
                    <circle cx="70" cy="190" r="2.5" fill="#3b82f6" opacity="0.4"/>
                    <circle cx="330" cy="190" r="2.5" fill="#6366f1" opacity="0.4"/>

                    {/* Logo backdrop — rounded square with gradient */}
                    <rect x="148" y="98" width="104" height="104" rx="18" fill="url(#hGrad)" filter="url(#logoGlow)" opacity="0.9"/>
                    <rect x="148" y="98" width="104" height="104" rx="18" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>

                    {/* H letterform — geometric construction */}
                    {/* Left vertical bar */}
                    <rect x="163" y="114" width="16" height="72" rx="3" fill="white" filter="url(#subtleGlow)"/>
                    {/* Right vertical bar */}
                    <rect x="221" y="114" width="16" height="72" rx="3" fill="white" filter="url(#subtleGlow)"/>
                    {/* Crossbar */}
                    <rect x="163" y="146" width="74" height="14" rx="3" fill="white" filter="url(#subtleGlow)"/>

                    {/* Brand tagline lines below H */}
                    <rect x="170" y="214" width="60" height="2" rx="1" fill="white" opacity="0.35"/>
                    <rect x="182" y="220" width="36" height="1.5" rx="1" fill="white" opacity="0.2"/>

                    {/* Floating accent dots */}
                    <circle cx="110" cy="90" r="2.5" fill="#60a5fa" opacity="0.5"/>
                    <circle cx="290" cy="90" r="2" fill="#818cf8" opacity="0.45"/>
                    <circle cx="105" cy="230" r="2" fill="#60a5fa" opacity="0.4"/>
                    <circle cx="295" cy="230" r="2.5" fill="#818cf8" opacity="0.45"/>
                    <circle cx="60" cy="160" r="1.5" fill="#93c5fd" opacity="0.35"/>
                    <circle cx="340" cy="160" r="1.5" fill="#a5b4fc" opacity="0.35"/>
                  </g>
                </svg>
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-4 -left-4 card-glass px-6 py-4">
                <div className="text-2xl font-bold text-gray-900">2020</div>
                <div className="text-sm text-gray-500">年創立</div>
              </div>
              <div className="absolute -top-4 -right-4 card-glass px-6 py-4">
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-500">導入案例</div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: '技術長 / 全端工程師', initial: 'A', color: 'from-blue-400 to-blue-600' },
                { role: '前端工程師', initial: 'B', color: 'from-cyan-400 to-blue-500' },
                { role: 'UI/UX 設計師', initial: 'C', color: 'from-purple-400 to-pink-500' },
                { role: '前端視覺設計師', initial: 'D', color: 'from-indigo-400 to-purple-600' },
              ].map((member, i) => (
                <div key={i} className="card p-6 text-center group hover:shadow-lg transition-all duration-300">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.initial}
                  </div>
                  <h3 className="font-bold text-gray-900">團隊成員 {i + 1}</h3>
                  <p className="text-sm text-brand-600 mt-0.5">{member.role}</p>
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
