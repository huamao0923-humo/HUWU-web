const categories = [
  {
    id: 'website',
    label: '官方網站',
    color: 'from-blue-500 to-brand-600',
    iconBg: 'bg-blue-50 text-blue-600',
    tags: ['Next.js', 'Payload CMS', 'Tailwind CSS', 'SEO 優化', 'RWD 設計', 'GA4 串接'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="15" rx="2" />
        <path d="M2 7.5h20" />
        <circle cx="5" cy="5.25" r=".75" fill="currentColor" stroke="none" />
        <circle cx="7.5" cy="5.25" r=".75" fill="currentColor" stroke="none" />
        <circle cx="10" cy="5.25" r=".75" fill="currentColor" stroke="none" />
        <path d="M7 11h10M7 14h6M8 21l4-3 4 3M12 18v3" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    label: '電商平台',
    color: 'from-orange-400 to-red-500',
    iconBg: 'bg-orange-50 text-orange-500',
    tags: ['購物車流程', '綠界金流', '訂單後台', '庫存管理', '會員系統', '行動優化'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <path d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    id: 'system',
    label: '管理系統',
    color: 'from-purple-500 to-purple-700',
    iconBg: 'bg-purple-50 text-purple-600',
    tags: ['PostgreSQL', 'Prisma ORM', 'RBAC 權限', 'REST API', 'Docker 部署', 'Dashboard'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="5.5" rx="1.5" />
        <rect x="2" y="9.5" width="20" height="5.5" rx="1.5" />
        <rect x="2" y="17" width="20" height="5" rx="1.5" />
        <circle cx="6" cy="4.75" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="12.25" r="1" fill="currentColor" stroke="none" />
        <circle cx="6" cy="19.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'ai',
    label: 'AI Agent',
    color: 'from-violet-500 to-indigo-600',
    iconBg: 'bg-violet-50 text-violet-600',
    tags: ['OpenAI API', 'RAG 知識庫', 'LangChain', 'Embedding', '工作流自動化', 'LINE Bot'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.937 15.5A2 2 0 008.5 14.063l-6.135-1.582a.5.5 0 010-.962L8.5 9.937A2 2 0 009.937 8.5l1.582-6.135a.5.5 0 01.963 0L14.063 8.5A2 2 0 0015.5 9.937l6.135 1.581a.5.5 0 010 .964L15.5 14.063a2 2 0 00-1.437 1.437l-1.582 6.135a.5.5 0 01-.963 0z" />
        <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
      </svg>
    ),
  },
  {
    id: 'infra',
    label: '部署 & 維運',
    color: 'from-teal-500 to-emerald-600',
    iconBg: 'bg-teal-50 text-teal-600',
    tags: ['Railway', 'Vercel', 'GitHub CI/CD', 'SSL 憑證', 'Nginx', '效能監控'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

export default function MarqueeSection() {
  return (
    <div className="bg-gray-50/70 border-y border-gray-100 py-10">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-5 rounded-full bg-gradient-to-b from-brand-500 to-brand-700" />
          <p className="text-sm font-semibold text-gray-500 tracking-wide">技術能力</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg}`}>
                  {cat.icon}
                </div>
                <span className="text-sm font-bold text-gray-800">{cat.label}</span>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line on hover */}
              <div className={`mt-3 h-0.5 rounded-full bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
