const steps = [
  {
    number: '01',
    icon: '🗣️',
    title: '需求訪談',
    desc: '深入了解您的業務目標、目標客群與功能需求，確保我們的方向完全符合您的期待。',
    detail: '免費 30 分鐘線上諮詢',
  },
  {
    number: '02',
    icon: '🎨',
    title: '設計規劃',
    desc: '提供完整的 UI/UX 原型設計與技術架構規劃，讓您在開發前就能看到成品樣貌。',
    detail: '原型確認後再開始開發',
  },
  {
    number: '03',
    icon: '⚙️',
    title: '敏捷開發',
    desc: '採用敏捷開發模式，每週提供進度更新，確保專案按時、按質完成交付。',
    detail: '每週進度回報透明公開',
  },
  {
    number: '04',
    icon: '🚀',
    title: '上線維護',
    desc: '協助部署上線，並提供完整的教育訓練與後續技術支援，讓您後顧無憂。',
    detail: '上線後 30 天免費支援',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-pill mx-auto mb-4">合作流程</div>
          <h2 className="section-title">簡單四步驟，輕鬆啟動專案</h2>
          <p className="section-subtitle mx-auto">
            透明化的合作流程，讓您在每個階段都清楚掌握進度，安心無虞
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center text-3xl shadow-md group-hover:border-brand-500 group-hover:shadow-lg transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center shadow">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{step.desc}</p>
                <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
