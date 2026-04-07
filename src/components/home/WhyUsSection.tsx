import Link from 'next/link'

// ── Advantage SVG Icons ──
const icons = {
  speed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4H4a2 2 0 000 4c0 2.5 2 4.5 4.5 5" />
      <path d="M17 4h3a2 2 0 010 4c0 2.5-2 4.5-4.5 5" />
      <path d="M7 4h10v7a5 5 0 01-10 0V4z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l1.06 1.06L12 21.23l7.36-7.94 1.06-1.06a5.4 5.4 0 000-7.65z" />
    </svg>
  ),
}

const advantages = [
  {
    icon: icons.speed,
    color: 'text-amber-500 bg-amber-50 group-hover:bg-amber-100',
    accent: 'bg-amber-500',
    title: '14 天極速交付',
    highlight: '比業界快 3 倍',
  },
  {
    icon: icons.trophy,
    color: 'text-brand-600 bg-brand-50 group-hover:bg-brand-100',
    accent: 'bg-brand-500',
    title: '8 年深厚經驗',
    highlight: '200+ 成功案例',
  },
  {
    icon: icons.code,
    color: 'text-violet-600 bg-violet-50 group-hover:bg-violet-100',
    accent: 'bg-violet-500',
    title: '全端技術能力',
    highlight: '一站式服務',
  },
  {
    icon: icons.chart,
    color: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100',
    accent: 'bg-emerald-500',
    title: '成效導向思維',
    highlight: '業績提升 150%+',
  },
  {
    icon: icons.lock,
    color: 'text-teal-600 bg-teal-50 group-hover:bg-teal-100',
    accent: 'bg-teal-500',
    title: '透明報價無隱費',
    highlight: '固定報價承諾',
  },
  {
    icon: icons.handshake,
    color: 'text-pink-600 bg-pink-50 group-hover:bg-pink-100',
    accent: 'bg-pink-500',
    title: '長期夥伴關係',
    highlight: '售後服務保障',
  },
]

const comparison = [
  { feature: '平均交付時間', us: '14 天',         others: '45–90 天',    usGood: true },
  { feature: '固定報價',     us: '是',             others: '常見追加費',  usGood: true },
  { feature: '全端開發能力', us: '是',             others: '部分外包',    usGood: true },
  { feature: '上線後維護',   us: '30 天免費',      others: '另計費用',    usGood: true },
  { feature: '每週進度回報', us: '是',             others: '不定期',      usGood: true },
]

const GoodIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 inline mr-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const BadIcon = () => (
  <svg className="w-4 h-4 text-red-400 inline mr-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const WarnIcon = () => (
  <svg className="w-4 h-4 text-amber-400 inline mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
  </svg>
)

export default function WhyUsSection() {
  return (
    <section className="py-14 md:py-20 bg-gray-50/60">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="badge-pill mx-auto mb-3">為何選擇我們</div>
          <h2 className="section-title">選擇華宇，選擇保障</h2>
          <p className="section-subtitle mx-auto mt-2 text-base">
            我們不只是開發商，更是您數位轉型路上最可靠的技術夥伴
          </p>
        </div>

        {/* Left + Right — equal height via items-stretch */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch mb-8">

          {/* ── Left: advantages ── */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-brand-700" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">我們的優勢</span>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {advantages.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 bg-gray-50/50"
                >
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${item.color}`}>
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-800 leading-tight mb-1.5">{item.title}</p>
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.accent}`} />
                      <span className="text-[11px] font-semibold text-gray-500">{item.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: comparison table ── */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            {/* Section label */}
            <div className="flex items-center gap-2 px-5 pt-5 pb-4 border-b border-gray-100">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-brand-700" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">競爭比較</span>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-3 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 bg-gray-50">
              <div className="px-5 py-3">比較項目</div>
              <div className="px-5 py-3 text-center text-brand-600 bg-brand-50">華宇資訊科技</div>
              <div className="px-5 py-3 text-center text-gray-400">一般開發商</div>
            </div>

            {/* Rows — flex-1 so they expand to fill height */}
            <div className="flex flex-col flex-1">
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 text-sm flex-1 border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                >
                  <div className="px-5 py-0 flex items-center font-medium text-gray-700">{row.feature}</div>
                  <div className="px-5 py-0 flex items-center justify-center font-semibold text-emerald-600 bg-emerald-50/40">
                    <GoodIcon />{row.us}
                  </div>
                  <div className="px-5 py-0 flex items-center justify-center text-gray-400">
                    {row.feature === '固定報價' || row.feature === '上線後維護'
                      ? <><BadIcon />{row.others}</>
                      : <><WarnIcon />{row.others}</>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary text-sm px-7 py-3">
            立即免費諮詢
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
