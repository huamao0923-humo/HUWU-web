import { getPayloadClient } from '@/lib/payload'
import Link from 'next/link'

const s = {
  wrap: {
    minHeight: '100vh',
    background: '#F0F6FF',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '32px 40px',
  } as React.CSSProperties,
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  } as React.CSSProperties,
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  } as React.CSSProperties,
  logoBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: 'linear-gradient(135deg,#2B7BE5,#1A4FA0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 18,
    color: '#fff',
    boxShadow: '0 4px 12px rgba(43,123,229,0.30)',
  } as React.CSSProperties,
  logoText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#1A4FA0',
  } as React.CSSProperties,
  greeting: {
    fontSize: 13,
    color: '#6B7280',
  } as React.CSSProperties,
  heroCard: {
    background: 'linear-gradient(135deg,#1A4FA0 0%,#2B7BE5 100%)',
    borderRadius: 20,
    padding: '32px 40px',
    marginBottom: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,
  heroTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: '#fff',
    marginBottom: 6,
  } as React.CSSProperties,
  heroSub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.6,
  } as React.CSSProperties,
  heroBtns: {
    display: 'flex',
    gap: 10,
    marginTop: 20,
  } as React.CSSProperties,
  btnWhite: {
    padding: '9px 20px',
    borderRadius: 9,
    background: '#fff',
    color: '#1A4FA0',
    fontWeight: 700,
    fontSize: 13,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  } as React.CSSProperties,
  btnOutline: {
    padding: '9px 20px',
    borderRadius: 9,
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    fontWeight: 600,
    fontSize: 13,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    border: '1.5px solid rgba(255,255,255,0.35)',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#374151',
    marginBottom: 14,
    letterSpacing: '-0.1px',
  } as React.CSSProperties,
  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 14,
    marginBottom: 28,
  } as React.CSSProperties,
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 14,
    marginBottom: 28,
  } as React.CSSProperties,
  card: {
    background: '#fff',
    borderRadius: 14,
    padding: '20px 22px',
    border: '1px solid #E8F0FE',
    boxShadow: '0 2px 12px rgba(43,123,229,0.06)',
    textDecoration: 'none',
    display: 'block',
    transition: 'transform 0.15s, box-shadow 0.15s',
  } as React.CSSProperties,
  statNum: {
    fontSize: 30,
    fontWeight: 800,
    color: '#111827',
    lineHeight: 1,
    marginBottom: 4,
  } as React.CSSProperties,
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: 500,
  } as React.CSSProperties,
  statIcon: {
    fontSize: 20,
    marginBottom: 10,
  } as React.CSSProperties,
  actionCard: {
    background: '#fff',
    borderRadius: 14,
    padding: '18px 20px',
    border: '1px solid #E8F0FE',
    boxShadow: '0 2px 12px rgba(43,123,229,0.06)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  } as React.CSSProperties,
  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    flexShrink: 0,
  } as React.CSSProperties,
  actionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  } as React.CSSProperties,
  actionSub: {
    fontSize: 12,
    color: '#9CA3AF',
  } as React.CSSProperties,
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
  } as React.CSSProperties,
  infoCard: {
    background: '#fff',
    borderRadius: 14,
    padding: '20px 24px',
    border: '1px solid #E8F0FE',
    boxShadow: '0 2px 12px rgba(43,123,229,0.06)',
  } as React.CSSProperties,
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '3px 10px',
    borderRadius: 999,
    fontSize: 11,
    fontWeight: 600,
  } as React.CSSProperties,
}

async function getCounts() {
  try {
    const payload = await getPayloadClient()
    const [services, portfolio, blog, inquiries, testimonials, team] = await Promise.all([
      payload.find({ collection: 'services', limit: 0 }),
      payload.find({ collection: 'portfolio', limit: 0 }),
      payload.find({ collection: 'blog-posts', limit: 0 }),
      payload.find({ collection: 'inquiries', limit: 0 }),
      payload.find({ collection: 'testimonials', limit: 0 }),
      payload.find({ collection: 'team', limit: 0 }),
    ])
    const pendingInquiries = await payload.find({
      collection: 'inquiries',
      where: { status: { equals: 'pending' } },
      limit: 0,
    })
    const recentInquiries = await payload.find({
      collection: 'inquiries',
      sort: '-createdAt',
      limit: 5,
    })
    return {
      services: services.totalDocs,
      portfolio: portfolio.totalDocs,
      blog: blog.totalDocs,
      inquiries: inquiries.totalDocs,
      pendingInquiries: pendingInquiries.totalDocs,
      testimonials: testimonials.totalDocs,
      team: team.totalDocs,
      recentInquiries: recentInquiries.docs,
    }
  } catch {
    return { services: 0, portfolio: 0, blog: 0, inquiries: 0, pendingInquiries: 0, testimonials: 0, team: 0, recentInquiries: [] }
  }
}

const collections = [
  { href: '/admin/collections/services', icon: '🌐', label: '服務項目', bg: '#EFF6FF', color: '#1D4ED8' },
  { href: '/admin/collections/portfolio', icon: '📁', label: '成功案例', bg: '#F5F3FF', color: '#6D28D9' },
  { href: '/admin/collections/blog-posts', icon: '✍️', label: '部落格', bg: '#ECFDF5', color: '#065F46' },
  { href: '/admin/collections/inquiries', icon: '📬', label: '詢問表單', bg: '#FFF7ED', color: '#92400E' },
  { href: '/admin/collections/testimonials', icon: '⭐', label: '客戶見證', bg: '#FFFBEB', color: '#92400E' },
  { href: '/admin/collections/team', icon: '👥', label: '團隊成員', bg: '#F0FDF4', color: '#166534' },
  { href: '/admin/globals/site-settings', icon: '⚙️', label: '全站設定', bg: '#F8FAFC', color: '#475569' },
  { href: '/admin/globals/pages-home', icon: '🏠', label: '首頁設定', bg: '#F0F9FF', color: '#0369A1' },
  { href: '/admin/collections/media', icon: '🖼️', label: '媒體檔案', bg: '#FDF2F8', color: '#9D174D' },
]

export default async function Dashboard() {
  const counts = await getCounts()
  const now = new Date()
  const hour = now.getHours()
  const greeting = hour < 12 ? '早安' : hour < 18 ? '午安' : '晚安'

  const stats = [
    { icon: '🌐', label: '服務項目', value: counts.services, href: '/admin/collections/services', bg: '#EFF6FF' },
    { icon: '📁', label: '成功案例', value: counts.portfolio, href: '/admin/collections/portfolio', bg: '#F5F3FF' },
    { icon: '✍️', label: '文章數量', value: counts.blog, href: '/admin/collections/blog-posts', bg: '#ECFDF5' },
    { icon: '📬', label: '待處理詢問', value: counts.pendingInquiries, href: '/admin/collections/inquiries', bg: '#FFF7ED' },
  ]

  return (
    <div style={s.wrap}>
      {/* Top Bar */}
      <div style={s.topBar}>
        <div style={s.logo}>
          <div style={s.logoBox}>H</div>
          <div>
            <div style={s.logoText}>華宇資訊科技後台</div>
            <div style={s.greeting}>Dashboard</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="http://localhost:3005" target="_blank" rel="noopener noreferrer" style={{ padding: '8px 16px', borderRadius: 8, background: '#fff', border: '1px solid #E5E7EB', color: '#374151', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            🌐 查看網站
          </a>
        </div>
      </div>

      {/* Hero */}
      <div style={s.heroCard}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px', borderRadius: 20 }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={s.heroTitle}>{greeting}！歡迎回來 👋</div>
          <div style={s.heroSub}>
            目前共有 <strong style={{ color: '#fff' }}>{counts.portfolio}</strong> 個成功案例、<strong style={{ color: '#fff' }}>{counts.blog}</strong> 篇文章
            {counts.pendingInquiries > 0 && <>，以及 <strong style={{ color: '#FCD34D' }}>{counts.pendingInquiries} 筆待處理詢問</strong></>}
          </div>
          <div style={s.heroBtns}>
            <Link href="/admin/collections/portfolio/create" style={s.btnWhite}>➕ 新增案例</Link>
            <Link href="/admin/collections/blog-posts/create" style={s.btnOutline}>✍️ 新增文章</Link>
            {counts.pendingInquiries > 0 && (
              <Link href="/admin/collections/inquiries" style={{ ...s.btnOutline, background: 'rgba(252,211,77,0.15)', borderColor: '#FCD34D', color: '#FCD34D' }}>
                📬 查看詢問 ({counts.pendingInquiries})
              </Link>
            )}
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 64, lineHeight: 1 }}>🚀</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>持續成長中</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ marginBottom: 8 }}>
        <div style={s.sectionTitle}>📊 內容統計</div>
      </div>
      <div style={s.grid4}>
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} style={{ ...s.card, textDecoration: 'none' }}>
            <div style={{ ...s.actionIcon, background: stat.bg, marginBottom: 10, width: 38, height: 38, borderRadius: 9 }}>{stat.icon}</div>
            <div style={s.statNum}>{stat.value}</div>
            <div style={s.statLabel}>{stat.label}</div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: 8 }}>
        <div style={s.sectionTitle}>⚡ 快速操作</div>
      </div>
      <div style={s.grid3}>
        {collections.map((col) => (
          <Link key={col.href} href={col.href} style={s.actionCard}>
            <div style={{ ...s.actionIcon, background: col.bg }}>{col.icon}</div>
            <div>
              <div style={s.actionTitle}>{col.label}</div>
              <div style={s.actionSub}>前往管理 →</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Inquiries */}
      {counts.recentInquiries.length > 0 && (
        <>
          <div style={{ marginBottom: 8 }}>
            <div style={s.sectionTitle}>📬 最新詢問</div>
          </div>
          <div style={s.infoCard}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                  {['姓名', '公司', 'Email', '需求類型', '狀態', ''].map((h) => (
                    <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#9CA3AF', fontWeight: 600, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {counts.recentInquiries.map((inq: any) => (
                  <tr key={inq.id} style={{ borderBottom: '1px solid #F9FAFB' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 600, color: '#111827' }}>{inq.name}</td>
                    <td style={{ padding: '10px 12px', color: '#6B7280' }}>{inq.company || '-'}</td>
                    <td style={{ padding: '10px 12px', color: '#6B7280' }}>{inq.email}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{ ...s.tag, background: '#EFF6FF', color: '#1D4ED8' }}>
                        {{ website: '官方網站', system: '管理系統', api: 'API', other: '其他' }[inq.serviceType as string] || '-'}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{
                        ...s.tag,
                        background: inq.status === 'pending' ? '#FFF7ED' : inq.status === 'replied' ? '#ECFDF5' : '#F3F4F6',
                        color: inq.status === 'pending' ? '#92400E' : inq.status === 'replied' ? '#065F46' : '#6B7280',
                      }}>
                        {{ pending: '待處理', 'in-progress': '處理中', replied: '已回覆', closed: '已結案' }[inq.status as string] || inq.status}
                      </span>
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Link href={`/admin/collections/inquiries/${inq.id}`} style={{ color: '#2B7BE5', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>查看 →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 12, textAlign: 'right' }}>
              <Link href="/admin/collections/inquiries" style={{ color: '#2B7BE5', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>查看所有詢問 →</Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
