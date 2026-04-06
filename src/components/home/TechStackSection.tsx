const categories = [
  {
    label: '前端框架',
    items: [
      { name: 'Next.js', color: 'bg-black text-white' },
      { name: 'React', color: 'bg-cyan-500 text-white' },
      { name: 'Vue.js', color: 'bg-emerald-500 text-white' },
      { name: 'TypeScript', color: 'bg-blue-600 text-white' },
      { name: 'Tailwind CSS', color: 'bg-sky-400 text-white' },
    ],
  },
  {
    label: '後端 / API',
    items: [
      { name: 'Node.js', color: 'bg-green-600 text-white' },
      { name: 'Python', color: 'bg-yellow-500 text-gray-900' },
      { name: 'Payload CMS', color: 'bg-indigo-600 text-white' },
      { name: 'REST / GraphQL', color: 'bg-pink-500 text-white' },
      { name: 'Prisma', color: 'bg-teal-700 text-white' },
    ],
  },
  {
    label: '資料庫 / 雲端',
    items: [
      { name: 'PostgreSQL', color: 'bg-blue-700 text-white' },
      { name: 'MySQL', color: 'bg-orange-500 text-white' },
      { name: 'MongoDB', color: 'bg-green-700 text-white' },
      { name: 'Vercel', color: 'bg-gray-900 text-white' },
      { name: 'AWS', color: 'bg-amber-400 text-gray-900' },
    ],
  },
  {
    label: '整合 / 工具',
    items: [
      { name: 'Stripe 金流', color: 'bg-violet-600 text-white' },
      { name: 'LINE Notify', color: 'bg-green-500 text-white' },
      { name: 'Google APIs', color: 'bg-red-500 text-white' },
      { name: 'Webhook', color: 'bg-gray-700 text-white' },
      { name: 'n8n 自動化', color: 'bg-orange-600 text-white' },
    ],
  },
]

export default function TechStackSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-pill mx-auto mb-4">技術棧</div>
          <h2 className="section-title">以頂尖技術打造卓越產品</h2>
          <p className="section-subtitle mx-auto">
            我們使用業界主流且經過實戰驗證的技術，確保產品的穩定性、效能與可擴展性
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <div key={ci} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <span
                    key={ii}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${item.color}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          以上為常用技術清單，可依專案需求彈性調整技術選型
        </p>
      </div>
    </section>
  )
}
