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

              {/* Gene */}
              <div className="card px-6 pt-0 pb-6 text-center group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="w-full h-44 -mx-6 mb-4 relative" style={{width:'calc(100% + 3rem)'}}>
                  <svg viewBox="0 0 220 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="g_bg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#dbeafe"/><stop offset="100%" stopColor="#bfdbfe"/></linearGradient>
                      <linearGradient id="g_skin1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fddcb5"/><stop offset="100%" stopColor="#f5b97e"/></linearGradient>
                      <linearGradient id="g_shirt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e40af"/><stop offset="100%" stopColor="#1e3a8a"/></linearGradient>
                      <linearGradient id="g_hair1" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0%" stopColor="#44403c"/><stop offset="100%" stopColor="#1c1917"/></linearGradient>
                      <radialGradient id="g_face_shadow1" cx="50%" cy="70%" r="50%"><stop offset="0%" stopColor="#e8a96a" stopOpacity="0.18"/><stop offset="100%" stopColor="#e8a96a" stopOpacity="0"/></radialGradient>
                      <clipPath id="cp1"><rect width="220" height="176" rx="0"/></clipPath>
                    </defs>
                    <rect width="220" height="176" fill="url(#g_bg1)"/>
                    {/* Shirt & shoulders */}
                    <path d="M60 176 C60 140 85 128 110 128 C135 128 160 140 160 176Z" fill="url(#g_shirt1)"/>
                    {/* Tie */}
                    <path d="M106 128 L110 142 L114 128Z" fill="#f8fafc"/>
                    <path d="M105 128 L110 148 L115 128 L112 136 L110 148 L108 136Z" fill="#93c5fd"/>
                    {/* Collar */}
                    <path d="M96 128 L106 128 L110 140 L114 128 L124 128 C120 122 115 120 110 120 C105 120 100 122 96 128Z" fill="#f0f9ff"/>
                    {/* Neck */}
                    <rect x="103" y="112" width="14" height="16" rx="6" fill="url(#g_skin1)"/>
                    {/* Left ear */}
                    <ellipse cx="79" cy="92" rx="6" ry="8" fill="#f5b97e"/>
                    <ellipse cx="80.5" cy="92" rx="3.5" ry="5.5" fill="#e8a96a"/>
                    {/* Right ear */}
                    <ellipse cx="141" cy="92" rx="6" ry="8" fill="#f5b97e"/>
                    <ellipse cx="139.5" cy="92" rx="3.5" ry="5.5" fill="#e8a96a"/>
                    {/* Head */}
                    <ellipse cx="110" cy="86" rx="32" ry="35" fill="url(#g_skin1)"/>
                    <ellipse cx="110" cy="86" rx="32" ry="35" fill="url(#g_face_shadow1)"/>
                    {/* Hair */}
                    <path d="M78 82 C78 50 142 50 142 82 C140 60 132 50 110 50 C88 50 80 60 78 82Z" fill="url(#g_hair1)"/>
                    <path d="M78 82 C76 72 75 78 76 86 C77 76 78 70 78 82Z" fill="#1c1917"/>
                    <path d="M142 82 C144 72 145 78 144 86 C143 76 142 70 142 82Z" fill="#1c1917"/>
                    {/* Hair texture */}
                    <path d="M84 58 C90 53 100 51 110 51" stroke="#57534e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    {/* Eyebrows */}
                    <path d="M91 73 C95 69 102 69 106 72" stroke="#292524" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                    <path d="M114 72 C118 69 125 69 129 73" stroke="#292524" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                    {/* Eye whites */}
                    <ellipse cx="98" cy="82" rx="8" ry="7" fill="white"/>
                    <ellipse cx="122" cy="82" rx="8" ry="7" fill="white"/>
                    {/* Iris - blue */}
                    <circle cx="98" cy="83" r="5" fill="#2563eb"/>
                    <circle cx="122" cy="83" r="5" fill="#2563eb"/>
                    {/* Pupil */}
                    <circle cx="98" cy="83" r="2.8" fill="#0f172a"/>
                    <circle cx="122" cy="83" r="2.8" fill="#0f172a"/>
                    {/* Catchlight */}
                    <circle cx="100" cy="81" r="1.4" fill="white"/>
                    <circle cx="124" cy="81" r="1.4" fill="white"/>
                    {/* Eyelid line */}
                    <path d="M90 78 Q98 75 106 78" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M114 78 Q122 75 130 78" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    {/* Nose */}
                    <path d="M106 92 C107 96 113 96 114 92" stroke="#c9853a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                    <circle cx="106" cy="92" r="1.2" fill="#c9853a" opacity="0.5"/>
                    <circle cx="114" cy="92" r="1.2" fill="#c9853a" opacity="0.5"/>
                    {/* Mouth */}
                    <path d="M100 104 C104 109 116 109 120 104" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    <path d="M100 104 C104 107 116 107 120 104" fill="white" opacity="0.6"/>
                    {/* Cheeks blush */}
                    <ellipse cx="86" cy="96" rx="9" ry="6" fill="#fca5a5" opacity="0.18"/>
                    <ellipse cx="134" cy="96" rx="9" ry="6" fill="#fca5a5" opacity="0.18"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Gene</h3>
                <p className="text-sm text-brand-600 mt-0.5">技術長 / 全端工程師</p>
              </div>

              {/* Gasol */}
              <div className="card px-6 pt-0 pb-6 text-center group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="w-full h-44 -mx-6 mb-4 relative" style={{width:'calc(100% + 3rem)'}}>
                  <svg viewBox="0 0 220 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="g_bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#cffafe"/><stop offset="100%" stopColor="#a5f3fc"/></linearGradient>
                      <linearGradient id="g_skin2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fddcb5"/><stop offset="100%" stopColor="#f5b97e"/></linearGradient>
                      <linearGradient id="g_shirt2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0e7490"/><stop offset="100%" stopColor="#164e63"/></linearGradient>
                      <linearGradient id="g_hair2" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0%" stopColor="#d4a96a"/><stop offset="100%" stopColor="#b07c3a"/></linearGradient>
                      <radialGradient id="g_face_shadow2" cx="50%" cy="70%" r="50%"><stop offset="0%" stopColor="#e8a96a" stopOpacity="0.18"/><stop offset="100%" stopColor="#e8a96a" stopOpacity="0"/></radialGradient>
                      <clipPath id="cp2"><rect width="220" height="176"/></clipPath>
                    </defs>
                    <rect width="220" height="176" fill="url(#g_bg2)"/>
                    {/* Shirt */}
                    <path d="M60 176 C60 140 85 128 110 128 C135 128 160 140 160 176Z" fill="url(#g_shirt2)"/>
                    {/* White shirt under */}
                    <path d="M98 128 L110 144 L122 128" fill="white" opacity="0.9"/>
                    {/* Collar */}
                    <path d="M96 128 L108 128 L110 132 L112 128 L124 128 C118 122 114 120 110 120 C106 120 102 122 96 128Z" fill="white"/>
                    {/* Neck */}
                    <rect x="103" y="112" width="14" height="16" rx="6" fill="url(#g_skin2)"/>
                    {/* Ears */}
                    <ellipse cx="79" cy="92" rx="6" ry="8" fill="#f5b97e"/>
                    <ellipse cx="80.5" cy="92" rx="3.5" ry="5.5" fill="#e8a96a"/>
                    <ellipse cx="141" cy="92" rx="6" ry="8" fill="#f5b97e"/>
                    <ellipse cx="139.5" cy="92" rx="3.5" ry="5.5" fill="#e8a96a"/>
                    {/* Head */}
                    <ellipse cx="110" cy="86" rx="32" ry="35" fill="url(#g_skin2)"/>
                    <ellipse cx="110" cy="86" rx="32" ry="35" fill="url(#g_face_shadow2)"/>
                    {/* Hair - warm blonde */}
                    <path d="M79 84 C79 50 141 50 141 84 C139 58 130 50 110 50 C90 50 81 58 79 84Z" fill="url(#g_hair2)"/>
                    {/* Side part */}
                    <path d="M103 51 C100 54 97 60 95 68 C97 62 100 56 103 51Z" fill="#c49550" opacity="0.6"/>
                    {/* Hair highlight */}
                    <path d="M106 51 C113 49 120 50 126 53" stroke="#e8c589" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
                    {/* Eyebrows - thicker, more confident */}
                    <path d="M90 72 C94 68 102 68 107 71" stroke="#8b5e2a" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    <path d="M113 71 C118 68 126 68 130 72" stroke="#8b5e2a" strokeWidth="3" strokeLinecap="round" fill="none"/>
                    {/* Eyes */}
                    <ellipse cx="98" cy="82" rx="8" ry="7" fill="white"/>
                    <ellipse cx="122" cy="82" rx="8" ry="7" fill="white"/>
                    {/* Iris - green */}
                    <circle cx="98" cy="83" r="5" fill="#059669"/>
                    <circle cx="122" cy="83" r="5" fill="#059669"/>
                    <circle cx="98" cy="83" r="2.8" fill="#064e3b"/>
                    <circle cx="122" cy="83" r="2.8" fill="#064e3b"/>
                    <circle cx="100" cy="81" r="1.4" fill="white"/>
                    <circle cx="124" cy="81" r="1.4" fill="white"/>
                    {/* Eyelid */}
                    <path d="M90 78 Q98 75 106 78" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M114 78 Q122 75 130 78" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    {/* Nose */}
                    <path d="M106 92 C107 96 113 96 114 92" stroke="#c9853a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                    <circle cx="106" cy="92" r="1.2" fill="#c9853a" opacity="0.5"/>
                    <circle cx="114" cy="92" r="1.2" fill="#c9853a" opacity="0.5"/>
                    {/* Big friendly smile */}
                    <path d="M98 103 C103 111 117 111 122 103" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    <path d="M100 104 C104 108 116 108 120 104" fill="white" opacity="0.5"/>
                    {/* Cheeks */}
                    <ellipse cx="86" cy="96" rx="9" ry="6" fill="#fca5a5" opacity="0.2"/>
                    <ellipse cx="134" cy="96" rx="9" ry="6" fill="#fca5a5" opacity="0.2"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Gasol</h3>
                <p className="text-sm text-brand-600 mt-0.5">業務工程師</p>
              </div>

              {/* Mira */}
              <div className="card px-6 pt-0 pb-6 text-center group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="w-full h-44 -mx-6 mb-4 relative" style={{width:'calc(100% + 3rem)'}}>
                  <svg viewBox="0 0 220 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="g_bg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f5d0fe"/><stop offset="100%" stopColor="#e9d5ff"/></linearGradient>
                      <linearGradient id="g_skin3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde8d0"/><stop offset="100%" stopColor="#f7c896"/></linearGradient>
                      <linearGradient id="g_shirt3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a855f7"/><stop offset="100%" stopColor="#7e22ce"/></linearGradient>
                      <linearGradient id="g_hair3" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0%" stopColor="#1e1b4b"/><stop offset="50%" stopColor="#312e81"/><stop offset="100%" stopColor="#1e1b4b"/></linearGradient>
                      <linearGradient id="g_hair3shine" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#818cf8" stopOpacity="0"/><stop offset="35%" stopColor="#818cf8" stopOpacity="0.4"/><stop offset="100%" stopColor="#818cf8" stopOpacity="0"/></linearGradient>
                      <clipPath id="cp3"><rect width="220" height="176"/></clipPath>
                    </defs>
                    <rect width="220" height="176" fill="url(#g_bg3)"/>
                    {/* Hair back — long straight */}
                    <path d="M78 78 C78 44 142 44 142 78 L148 176 L72 176 Z" fill="url(#g_hair3)"/>
                    {/* Hair shine */}
                    <path d="M88 48 C96 44 108 43 118 46" stroke="url(#g_hair3shine)" strokeWidth="4" strokeLinecap="round"/>
                    {/* Shirt */}
                    <path d="M72 176 L78 128 C85 132 95 134 110 134 C125 134 135 132 142 128 L148 176Z" fill="url(#g_shirt3)"/>
                    {/* Neckline */}
                    <path d="M100 128 Q110 138 120 128" stroke="#c084fc" strokeWidth="2" fill="none"/>
                    {/* Neck */}
                    <rect x="103" y="112" width="14" height="18" rx="6" fill="url(#g_skin3)"/>
                    {/* Ears */}
                    <ellipse cx="79" cy="88" rx="5.5" ry="7.5" fill="#f7c896"/>
                    <ellipse cx="141" cy="88" rx="5.5" ry="7.5" fill="#f7c896"/>
                    {/* Head */}
                    <ellipse cx="110" cy="84" rx="31" ry="34" fill="url(#g_skin3)"/>
                    {/* Hair top */}
                    <path d="M79 80 C79 46 141 46 141 80 C139 55 130 48 110 48 C90 48 81 55 79 80Z" fill="url(#g_hair3)"/>
                    {/* Eyebrows - arched feminine */}
                    <path d="M90 70 C95 64 104 64 109 68" stroke="#312e81" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    <path d="M111 68 C116 64 125 64 130 70" stroke="#312e81" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    {/* Eyes - slightly larger */}
                    <ellipse cx="99" cy="80" rx="9" ry="8" fill="white"/>
                    <ellipse cx="121" cy="80" rx="9" ry="8" fill="white"/>
                    {/* Iris - violet */}
                    <circle cx="99" cy="81" r="5.5" fill="#7c3aed"/>
                    <circle cx="121" cy="81" r="5.5" fill="#7c3aed"/>
                    <circle cx="99" cy="81" r="3" fill="#1e1b4b"/>
                    <circle cx="121" cy="81" r="3" fill="#1e1b4b"/>
                    <circle cx="101" cy="79" r="1.6" fill="white"/>
                    <circle cx="123" cy="79" r="1.6" fill="white"/>
                    {/* Upper lashes */}
                    <path d="M90 76 Q99 72 108 76" stroke="#1e1b4b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M112 76 Q121 72 130 76" stroke="#1e1b4b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    {/* Small lash tips */}
                    <line x1="90" y1="76" x2="88" y2="73" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="108" y1="76" x2="110" y2="73" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="112" y1="76" x2="110" y2="73" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="130" y1="76" x2="132" y2="73" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* Nose */}
                    <path d="M107 92 C108 96 112 96 113 92" stroke="#c4832a" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                    {/* Lips */}
                    <path d="M100 103 C105 110 115 110 120 103" fill="#c026d3" opacity="0.85"/>
                    <path d="M100 103 C104 101 116 101 120 103" fill="#f0abfc" opacity="0.7"/>
                    <path d="M100 103 C105 110 115 110 120 103" stroke="#86198f" strokeWidth="0.8" fill="none"/>
                    {/* Cheeks */}
                    <ellipse cx="87" cy="94" rx="10" ry="7" fill="#e879f9" opacity="0.14"/>
                    <ellipse cx="133" cy="94" rx="10" ry="7" fill="#e879f9" opacity="0.14"/>
                    {/* Small earrings */}
                    <circle cx="79" cy="96" r="3" fill="#e879f9"/>
                    <circle cx="141" cy="96" r="3" fill="#e879f9"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Mira</h3>
                <p className="text-sm text-brand-600 mt-0.5">UI/UX 設計師</p>
              </div>

              {/* Sarah */}
              <div className="card px-6 pt-0 pb-6 text-center group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="w-full h-44 -mx-6 mb-4 relative" style={{width:'calc(100% + 3rem)'}}>
                  <svg viewBox="0 0 220 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="g_bg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e0e7ff"/><stop offset="100%" stopColor="#c7d2fe"/></linearGradient>
                      <linearGradient id="g_skin4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde8d0"/><stop offset="100%" stopColor="#f7c896"/></linearGradient>
                      <linearGradient id="g_shirt4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4f46e5"/><stop offset="100%" stopColor="#3730a3"/></linearGradient>
                      <linearGradient id="g_hair4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c2410c"/><stop offset="50%" stopColor="#9a3412"/><stop offset="100%" stopColor="#7c2d12"/></linearGradient>
                      <linearGradient id="g_hair4shine" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#fb923c" stopOpacity="0"/><stop offset="40%" stopColor="#fb923c" stopOpacity="0.35"/><stop offset="100%" stopColor="#fb923c" stopOpacity="0"/></linearGradient>
                      <clipPath id="cp4"><rect width="220" height="176"/></clipPath>
                    </defs>
                    <rect width="220" height="176" fill="url(#g_bg4)"/>
                    {/* Wavy hair back — auburn */}
                    <path d="M78 78 C78 42 142 42 142 78 C144 100 148 130 146 176 L74 176 C72 130 76 100 78 78Z" fill="url(#g_hair4)"/>
                    {/* Wavy texture right */}
                    <path d="M142 78 C146 92 148 110 152 130 C148 116 146 98 148 82Z" fill="#7c2d12" opacity="0.5"/>
                    {/* Wavy texture left */}
                    <path d="M78 78 C74 92 72 110 68 130 C72 116 74 98 72 82Z" fill="#7c2d12" opacity="0.5"/>
                    {/* Hair shine */}
                    <path d="M92 46 C102 42 116 42 126 46" stroke="url(#g_hair4shine)" strokeWidth="4" strokeLinecap="round"/>
                    {/* Shirt */}
                    <path d="M74 176 L80 128 C88 133 98 135 110 135 C122 135 132 133 140 128 L146 176Z" fill="url(#g_shirt4)"/>
                    {/* V-neck */}
                    <path d="M100 128 L110 142 L120 128" fill="#4f46e5"/>
                    <path d="M100 128 L110 142 L120 128" stroke="#818cf8" strokeWidth="1.2" fill="none"/>
                    {/* Neck */}
                    <rect x="103" y="112" width="14" height="18" rx="6" fill="url(#g_skin4)"/>
                    {/* Ears */}
                    <ellipse cx="79" cy="88" rx="5.5" ry="7.5" fill="#f7c896"/>
                    <ellipse cx="141" cy="88" rx="5.5" ry="7.5" fill="#f7c896"/>
                    {/* Head */}
                    <ellipse cx="110" cy="84" rx="31" ry="34" fill="url(#g_skin4)"/>
                    {/* Hair top with waves */}
                    <path d="M79 80 C79 44 141 44 141 80 C139 54 130 46 110 46 C90 46 81 54 79 80Z" fill="url(#g_hair4)"/>
                    {/* Wave bumps */}
                    <path d="M82 62 C86 56 91 56 92 62" stroke="#7c2d12" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <path d="M128 62 C129 56 134 56 138 62" stroke="#7c2d12" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    {/* Eyebrows - slightly darker red-brown */}
                    <path d="M90 70 C95 64 104 65 109 68" stroke="#7c2d12" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    <path d="M111 68 C116 65 125 64 130 70" stroke="#7c2d12" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                    {/* Eyes */}
                    <ellipse cx="99" cy="80" rx="9" ry="8" fill="white"/>
                    <ellipse cx="121" cy="80" rx="9" ry="8" fill="white"/>
                    {/* Iris - amber */}
                    <circle cx="99" cy="81" r="5.5" fill="#92400e"/>
                    <circle cx="121" cy="81" r="5.5" fill="#92400e"/>
                    <circle cx="99" cy="81" r="3" fill="#451a03"/>
                    <circle cx="121" cy="81" r="3" fill="#451a03"/>
                    <circle cx="101" cy="79" r="1.6" fill="white"/>
                    <circle cx="123" cy="79" r="1.6" fill="white"/>
                    {/* Lashes */}
                    <path d="M90 76 Q99 72 108 76" stroke="#451a03" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M112 76 Q121 72 130 76" stroke="#451a03" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <line x1="90" y1="76" x2="88" y2="73" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="108" y1="76" x2="110" y2="73" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="112" y1="76" x2="110" y2="73" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="130" y1="76" x2="132" y2="73" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* Nose */}
                    <path d="M107 92 C108 96 112 96 113 92" stroke="#c4832a" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                    {/* Lips - coral red */}
                    <path d="M101 103 C105 110 115 110 119 103" fill="#dc2626" opacity="0.82"/>
                    <path d="M101 103 C105 101 115 101 119 103" fill="#fca5a5" opacity="0.6"/>
                    <path d="M101 103 C105 110 115 110 119 103" stroke="#991b1b" strokeWidth="0.8" fill="none"/>
                    {/* Cheeks */}
                    <ellipse cx="87" cy="94" rx="10" ry="7" fill="#fca5a5" opacity="0.2"/>
                    <ellipse cx="133" cy="94" rx="10" ry="7" fill="#fca5a5" opacity="0.2"/>
                    {/* Pearl earrings */}
                    <circle cx="79" cy="97" r="4" fill="white" opacity="0.9"/>
                    <circle cx="79" cy="97" r="2" fill="#e0e7ff"/>
                    <circle cx="141" cy="97" r="4" fill="white" opacity="0.9"/>
                    <circle cx="141" cy="97" r="2" fill="#e0e7ff"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-base">Sarah</h3>
                <p className="text-sm text-brand-600 mt-0.5">前端視覺設計師</p>
              </div>

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
