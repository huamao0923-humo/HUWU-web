import Link from 'next/link'

const advantages = [
  {
    icon: '⚡',
    title: '14 天極速交付',
    desc: '業界領先的開發效率，從簽約到上線平均僅需 14 天，讓您搶先競爭對手佔領市場。',
    highlight: '比業界快 3 倍',
  },
  {
    icon: '🏆',
    title: '8 年深厚經驗',
    desc: '超過 200 個成功案例，橫跨電商、餐飲、製造、服務業，深入了解各產業數位化痛點。',
    highlight: '200+ 成功案例',
  },
  {
    icon: '🔧',
    title: '全端技術能力',
    desc: '前後端一條龍開發，涵蓋網站、APP、後台系統、API 整合，一個團隊解決所有需求。',
    highlight: '一站式服務',
  },
  {
    icon: '📊',
    title: '成效導向思維',
    desc: '不只交付功能，更關注您的業務目標，從 SEO、轉換率到用戶體驗全面優化。',
    highlight: '業績提升 150%+',
  },
  {
    icon: '🔒',
    title: '透明報價無隱費',
    desc: '提案前先進行需求訪談，給出固定報價，不會有隱藏費用，讓您安心控管預算。',
    highlight: '固定報價承諾',
  },
  {
    icon: '🤝',
    title: '長期夥伴關係',
    desc: '上線後提供 30 天免費維護，以及彈性的月租維運方案，持續陪伴企業成長。',
    highlight: '售後服務保障',
  },
]

const comparison = [
  { feature: '平均交付時間', us: '14 天', others: '45–90 天' },
  { feature: '固定報價', us: '✅ 是', others: '❌ 常見追加費' },
  { feature: '全端開發能力', us: '✅ 是', others: '⚠️ 部分外包' },
  { feature: '上線後維護', us: '✅ 30 天免費', others: '❌ 另計費用' },
  { feature: '每週進度回報', us: '✅ 是', others: '⚠️ 不定期' },
]

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-pill mx-auto mb-4">為何選擇我們</div>
          <h2 className="section-title">選擇華宇，選擇保障</h2>
          <p className="section-subtitle mx-auto">
            我們不只是開發商，更是您數位轉型路上最可靠的技術夥伴
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl shrink-0 group-hover:bg-brand-100 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full mb-2">
                    {item.highlight}
                  </span>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="grid grid-cols-3 bg-gray-50 text-sm font-semibold text-gray-700 border-b border-gray-100">
            <div className="px-6 py-4">比較項目</div>
            <div className="px-6 py-4 text-center text-brand-600 bg-brand-50">華宇資訊科技</div>
            <div className="px-6 py-4 text-center text-gray-400">一般開發商</div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 text-sm border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <div className="px-6 py-4 font-medium text-gray-700">{row.feature}</div>
              <div className="px-6 py-4 text-center font-semibold text-brand-600 bg-brand-50/30">{row.us}</div>
              <div className="px-6 py-4 text-center text-gray-400">{row.others}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
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
