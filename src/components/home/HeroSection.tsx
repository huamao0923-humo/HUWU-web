// Path: src/components/home/HeroSection.tsx
import Link from 'next/link'

interface HeroSectionProps {
  data: {
    heroBadge?: string
    heroTitle?: string
    heroSubtitle?: string
    heroCta1Text?: string
    heroCta1Url?: string
    heroCta2Text?: string
    heroCta2Url?: string
  }
}

// ── Inline SVG icons (no emoji, no external deps) ──────────────────────────

function IconRocket({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  )
}

function IconCoin({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconBolt({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function IconUser({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function IconShield({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function IconChart({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function IconStar({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function IconClock({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Promise items ──────────────────────────────────────────────────────────

const PROMISES = [
  { Icon: IconCoin,   text: '報價透明，不追加費用' },
  { Icon: IconBolt,   text: '最快 14 天完工' },
  { Icon: IconUser,   text: '全程專人負責溝通' },
  { Icon: IconShield, text: '上線後免費維護 30 天' },
]

// ── Main component ─────────────────────────────────────────────────────────

export default function HeroSection({ data }: HeroSectionProps) {
  const {
    heroCta1Text = '免費諮詢',
    heroCta1Url = '/contact',
    heroCta2Text = '查看案例',
    heroCta2Url = '/portfolio',
  } = data

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-gradient pt-24">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-brand-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-200/25 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left ── */}
          <div className="space-y-6">

            {/* Badge */}
            <div className="badge-pill animate-fade-in-up inline-flex items-center gap-1.5">
              <IconRocket className="w-3.5 h-3.5 text-brand-500" />
              小預算也能做出質感網站
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight animate-fade-in-up animate-delay-100">
              網站不用貴，<br />
              <span className="text-gradient">做對才重要</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md animate-fade-in-up animate-delay-200">
              我們幫中小企業、新創團隊打造好看又實用的網站和系統，報價透明、快速交付，不需要龐大預算也能有大公司的質感。
            </p>

            {/* Promises */}
            <div className="grid grid-cols-2 gap-3 animate-fade-in-up animate-delay-200">
              {PROMISES.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-600 bg-white/70 border border-gray-200 px-3 py-2 rounded-xl shadow-sm">
                  <span className="shrink-0 text-brand-500">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1 animate-fade-in-up animate-delay-300">
              <Link href={heroCta1Url} className="btn-primary text-base px-8 py-3.5">
                {heroCta1Text}，不收費
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={heroCta2Url} className="btn-secondary text-base px-8 py-3.5">
                {heroCta2Text}
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-1 animate-fade-in-up animate-delay-400">
              <div className="flex -space-x-2">
                {['bg-blue-400', 'bg-blue-500', 'bg-brand-600', 'bg-blue-700'].map((color, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${color} flex items-center justify-center text-white text-xs font-bold`}>
                    {['王', '李', '陳', '+'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">超過 200 家企業信賴合作</p>
              </div>
            </div>
          </div>

          {/* ── Right: unified stat card ── */}
          <div className="hidden md:flex items-center justify-center">
            <div className="card-glass animate-float shadow-xl w-72 divide-y divide-gray-100/70">

              {/* Card header */}
              <div className="px-6 py-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500">
                  <IconChart className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-gray-700">成效數據</span>
                <span className="ml-auto text-[10px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">即時更新</span>
              </div>

              {/* Row 1: 200+ projects */}
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-brand-100 flex items-center justify-center text-brand-600">
                    <IconChart className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs text-gray-500">成功交付的專案</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                <div className="flex items-end gap-1 h-8">
                  {[35, 50, 42, 68, 55, 80, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-brand-400"
                      style={{ height: `${h}%`, opacity: 0.25 + i * 0.11 }}
                    />
                  ))}
                </div>
                <div className="mt-2 text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                  每年持續成長中
                </div>
              </div>

              {/* Row 2: 98% satisfaction */}
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <IconStar className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs text-gray-500">客戶好評率</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">98%</div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[98%] bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
                </div>
              </div>

              {/* Row 3: 14 days delivery */}
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-sky-50 flex items-center justify-center text-sky-500">
                    <IconClock className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs text-gray-500">平均交付時間</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">14 天</div>
                <div className="text-xs text-gray-400">業界平均約 45–90 天</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
