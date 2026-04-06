'use client'

const systems = [
  { icon: '🀄', text: '麻將館預約管理系統', client: '禧運休閒娛樂', tag: '管理系統' },
  { icon: '🏟️', text: '球場租借管理平台', client: '全民運動中心', tag: '管理系統' },
  { icon: '👥', text: '人資管理系統', client: '聯群控股集團', tag: '管理系統' },
  { icon: '📦', text: '倉儲管理系統', client: '全速物流', tag: '管理系統' },
  { icon: '📊', text: 'BI 商業智慧報表平台', client: '鴻盛國際貿易', tag: 'BI 報表' },
  { icon: '💰', text: '業務分配記帳系統', client: '泓昇管理顧問', tag: '管理系統' },
  { icon: '🏭', text: 'MES 現場報工系統', client: '精密科技製造廠', tag: 'MES' },
]

const websites = [
  { icon: '🍜', text: '連鎖餐飲品牌官網', client: '鮮味軒餐飲集團', tag: '官方網站' },
  { icon: '⚖️', text: '法律事務所官方網站', client: '正義聯合法律', tag: '官方網站' },
  { icon: '🏥', text: '醫療診所形象網站', client: '康健醫療集團', tag: '官方網站' },
  { icon: '🚀', text: '科技新創企業官網', client: '雲智科技', tag: '官方網站' },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  '管理系統': { bg: '#EDE9FE', text: '#5B21B6' },
  'BI 報表':  { bg: '#ECFDF5', text: '#065F46' },
  'MES':      { bg: '#FFF7ED', text: '#92400E' },
  '官方網站': { bg: '#EFF6FF', text: '#1D4ED8' },
}

export default function MarqueeSection() {
  const doubled = [...systems, ...systems]
  const webDoubled = [...websites, ...websites]

  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      {/* Row 1：系統案例 */}
      <div className="relative flex overflow-hidden mb-3">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 shrink-0">
              <span className="text-base">{item.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{item.text}</span>
              <span className="text-xs text-gray-400 font-normal">— {item.client}</span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
                style={{
                  background: tagColors[item.tag]?.bg ?? '#F3F4F6',
                  color: tagColors[item.tag]?.text ?? '#374151',
                }}
              >
                {item.tag}
              </span>
              <span className="w-px h-4 bg-gray-200 mx-1" />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2：網站案例（反向） */}
      <div className="relative flex overflow-hidden">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: 'marquee-reverse 24s linear infinite' }}
        >
          {webDoubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 shrink-0">
              <span className="text-base">{item.icon}</span>
              <span className="text-sm font-medium text-gray-500">{item.text}</span>
              <span className="text-xs text-gray-400">— {item.client}</span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
                style={{
                  background: tagColors[item.tag]?.bg ?? '#F3F4F6',
                  color: tagColors[item.tag]?.text ?? '#374151',
                }}
              >
                {item.tag}
              </span>
              <span className="w-px h-4 bg-gray-200 mx-1" />
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
