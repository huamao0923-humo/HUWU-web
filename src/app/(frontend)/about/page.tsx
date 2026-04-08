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
              <div className="badge-pill-lg mb-4">品牌故事</div>
              <h2 className="section-title mb-6">從一個夢想開始</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2020 年，華宇資訊科技由幾位在系統公司苦蹲多年的工程師及設計夥伴共同創立。
                  我們看到台灣中小企業在數位化轉型路上的困境：要麼找不到合適的技術合作夥伴，
                  要麼報價高得令人卻步，要麼交付品質參差不齊、不是要求過多客製就是訂立的管理目標根本做不到。
                </p>
                <p>
                  我們帶著多家企業系統導入和流程優化的經驗，秉持「讓每一家企業都能負擔得起高品質數位化」的使命，
                  累積超過 30 個成功案例，橫跨零售、餐飲、金融、醫療、教育等多個產業。
                  我們相信，好的技術夥伴不只是幫你寫程式，而是真正理解你的業務需求，
                  用最合適的技術及流程優化解法幫助達成您的商業目標。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[5/4] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl overflow-hidden">
                <svg viewBox="0 0 400 320" className="w-full h-full" fill="none">
                  <defs>
                    {/* Exact logo gradient matching LogoIcon.tsx */}
                    <linearGradient id="logoSquareGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1A6BD9" />
                      <stop offset="100%" stopColor="#1150A8" />
                    </linearGradient>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1A6BD9" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1A6BD9" stopOpacity="0" />
                    </radialGradient>
                    {/* Glow filter — only used on a separate blurred copy behind the logo */}
                    <filter id="behindGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="14"/>
                    </filter>
                    <clipPath id="cardClip">
                      <rect width="400" height="320" rx="24"/>
                    </clipPath>
                  </defs>

                  <g clipPath="url(#cardClip)">
                    {/* Background dot grid */}
                    <g fill="#3b82f6" opacity="0.07">
                      {[50,100,150,200,250,300,350].flatMap(x =>
                        [40,80,120,160,200,240,280].map(y => (
                          <circle key={`${x}-${y}`} cx={x} cy={y} r="1"/>
                        ))
                      )}
                    </g>

                    {/* Center radial glow */}
                    <circle cx="200" cy="160" r="170" fill="url(#centerGlow)"/>

                    {/* Orbit rings */}
                    <circle cx="200" cy="160" r="148" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.15" strokeDasharray="6 6"/>
                    <circle cx="200" cy="160" r="122" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.22"/>
                    <circle cx="200" cy="160" r="96"  fill="none" stroke="#6366f1" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 6"/>

                    {/* Corner brackets */}
                    <path d="M24 52 L24 24 L52 24"   stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
                    <path d="M348 24 L376 24 L376 52" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
                    <path d="M24 268 L24 296 L52 296" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
                    <path d="M348 296 L376 296 L376 268" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>

                    {/* Circuit traces */}
                    <path d="M24 100 L70 100 L70 130"   stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.18"/>
                    <path d="M376 100 L330 100 L330 130" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.18"/>
                    <path d="M24 220 L70 220 L70 190"   stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.18"/>
                    <path d="M376 220 L330 220 L330 190" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" opacity="0.18"/>
                    <circle cx="70"  cy="130" r="2.5" fill="#3b82f6" opacity="0.35"/>
                    <circle cx="330" cy="130" r="2.5" fill="#6366f1" opacity="0.35"/>
                    <circle cx="70"  cy="190" r="2.5" fill="#3b82f6" opacity="0.35"/>
                    <circle cx="330" cy="190" r="2.5" fill="#6366f1" opacity="0.35"/>

                    {/* ── Logo — blurred glow layer (behind, no sharp edge) ── */}
                    <rect x="156" y="116" width="88" height="88" rx="22" fill="#1A6BD9" filter="url(#behindGlow)" opacity="0.55"/>

                    {/* ── Logo — crisp layer (matches LogoIcon exactly, scaled 2×) ── */}
                    {/* scale=2, origin offset = (156, 116)  →  44×44 → 88×88 */}
                    {/* backdrop square */}
                    <rect x="160" y="120" width="80" height="80" rx="22" fill="url(#logoSquareGrad)"/>
                    {/* border highlight */}
                    <rect x="160" y="120" width="80" height="80" rx="22" fill="none" stroke="white" strokeWidth="1" opacity="0.12"/>
                    {/* H — left bar  (x=12→180, y=11→138, w=4.5→9, h=22→44, rx=2.2→4.4) */}
                    <rect x="180" y="138" width="9" height="44" rx="4" fill="white"/>
                    {/* H — right bar (x=27.5→211, y=11→138, w=4.5→9, h=22→44) */}
                    <rect x="211" y="138" width="9" height="44" rx="4" fill="white"/>
                    {/* H — arc crossbar: M16.5 20.5 Q22 16 27.5 20.5 scaled×2 + offset */}
                    {/* M(156+33)(116+41) Q(156+44)(116+32)(156+55)(116+41) = M189 157 Q200 148 211 157 */}
                    <path d="M189 157 Q200 148 211 157" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    {/* Sparkle dot (cx=36→228, cy=8→132, r=2.5→5) */}
                    <circle cx="228" cy="132" r="5" fill="#93c5fd"/>

                    {/* Accent dots */}
                    <circle cx="110" cy="88"  r="2.5" fill="#60a5fa" opacity="0.5"/>
                    <circle cx="290" cy="88"  r="2"   fill="#818cf8" opacity="0.45"/>
                    <circle cx="108" cy="232" r="2"   fill="#60a5fa" opacity="0.4"/>
                    <circle cx="292" cy="232" r="2.5" fill="#818cf8" opacity="0.45"/>
                    <circle cx="58"  cy="160" r="1.5" fill="#93c5fd" opacity="0.3"/>
                    <circle cx="342" cy="160" r="1.5" fill="#a5b4fc" opacity="0.3"/>
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
            <div className="badge-pill-lg mx-auto mb-4">核心價值</div>
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
            <div className="badge-pill-lg mx-auto mb-4">我們的團隊</div>
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
      <section className="section-padding bg-brand-600 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4 text-white">加入我們的客戶行列</h2>
          <p className="text-white/80 mb-8">立即聯繫我們，讓我們一起規劃您的數位化之路</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            免費預約諮詢
          </Link>
        </div>
      </section>
    </div>
  )
}
