import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

const systemCases = [
  {
    slug: 'mahjong-reservation',
    title: '麻將館預約管理系統',
    client: '禧o麻將休閒館',
    category: 'system',
    shortDescription: '整合線上預約、桌況即時顯示與會員積點的全方位麻將館管理平台，有效提升座位利用率與回客率。',
    techTags: [{ tag: 'Next.js' }, { tag: 'PostgreSQL' }, { tag: 'Redis' }, { tag: 'LINE Notify' }],
    results: [
      { metric: '電話訂位比例', value: '↓ 58%', description: '顧客自助完成預約' },
      { metric: '重複訂位事故', value: '0 件/月', description: 'Redis 原子操作鎖定桌號' },
      { metric: '回客率', value: '↑ 35%', description: '積點制度帶動回訪' },
    ],
    featured: true,
    publishedAt: '2024-09-15',
  },
  {
    slug: 'court-rental',
    title: '球場租借管理平台',
    client: '全o運動館',
    category: 'system',
    shortDescription: '支援多場地時段訂位、線上刷卡付款與場地維護排程，大幅降低行政人員的作業負擔。',
    techTags: [{ tag: 'React' }, { tag: 'Node.js' }, { tag: 'MySQL' }, { tag: '綠界金流' }],
    results: [
      { metric: '訂位作業', value: '↓ 70%', description: '電子化取代人工登記' },
      { metric: '收款成功率', value: '99.2%', description: '整合線上金流' },
      { metric: '場地使用率', value: '↑ 45%', description: '動態排程最佳化' },
    ],
    featured: true,
    publishedAt: '2024-07-20',
  },
  {
    slug: 'hr-management',
    title: '人資管理系統',
    client: '聯o實業有限公司',
    category: 'system',
    shortDescription: '涵蓋出勤考核、薪資自動計算與績效管理的集團級人資平台，支援跨公司組織架構。',
    techTags: [{ tag: 'Vue.js' }, { tag: 'Laravel' }, { tag: 'PostgreSQL' }, { tag: 'Docker' }],
    results: [
      { metric: '薪資計算', value: '全自動', description: '消除人工計算錯誤' },
      { metric: '考勤異常', value: '即時通知', description: 'LINE Bot 推播' },
      { metric: '報表產出', value: '↓ 80%', description: '原需 2 天，現在 20 分鐘' },
    ],
    featured: true,
    publishedAt: '2024-05-10',
  },
  {
    slug: 'warehouse-management',
    title: '倉儲管理系統',
    client: '全o倉儲物流行',
    category: 'system',
    shortDescription: '完整的入出庫管理、庫位追蹤與盤點報表系統，支援條碼掃描與手機端操作。',
    techTags: [{ tag: 'React' }, { tag: 'FastAPI' }, { tag: 'PostgreSQL' }, { tag: '條碼掃描' }],
    results: [
      { metric: '揀貨效率', value: '↑ 50%', description: '條碼引導作業' },
      { metric: '庫存誤差', value: '↓ 95%', description: '即時庫位追蹤' },
      { metric: '盤點時間', value: '↓ 60%', description: '行動裝置掃碼盤點' },
    ],
    featured: false,
    publishedAt: '2024-03-05',
  },
  {
    slug: 'bi-dashboard',
    title: 'BI 商業智慧報表平台',
    client: '鴻o貿易行',
    category: 'system',
    shortDescription: '串接 ERP 資料，提供即時銷售儀表板與 KPI 追蹤，讓管理層一眼掌握全局。',
    techTags: [{ tag: 'React' }, { tag: 'Python' }, { tag: 'Metabase' }, { tag: 'PostgreSQL' }],
    results: [
      { metric: '決策速度', value: '↑ 3x', description: '即時數據取代月報' },
      { metric: '報表製作', value: '↓ 90%', description: '自動化取代人工彙整' },
      { metric: '資料延遲', value: '< 5 分鐘', description: '近即時同步 ERP' },
    ],
    featured: false,
    publishedAt: '2024-01-18',
  },
  {
    slug: 'business-accounting',
    title: '業務分配記帳系統',
    client: '泓o顧問工作室',
    category: 'system',
    shortDescription: '多層級業績分配、佣金自動計算與帳務對帳系統，支援複雜的業務獎金結構。',
    techTags: [{ tag: 'Next.js' }, { tag: 'Prisma' }, { tag: 'PostgreSQL' }, { tag: 'Excel 匯出' }],
    results: [
      { metric: '帳務糾紛', value: '↓ 85%', description: '透明化分配計算' },
      { metric: '結算時間', value: '↓ 75%', description: '從 3 天縮短至半天' },
      { metric: '業務滿意度', value: '↑ 40%', description: '即時查詢個人業績' },
    ],
    featured: false,
    publishedAt: '2023-11-22',
  },
  {
    slug: 'mes-reporting',
    title: 'MES 現場報工系統',
    client: '桓o精密加工廠',
    category: 'system',
    shortDescription: '工單追蹤、即時產能監控與異常通報整合平台，協助工廠實現智慧製造轉型。',
    techTags: [{ tag: 'React' }, { tag: 'Node.js' }, { tag: 'MQTT' }, { tag: 'InfluxDB' }],
    results: [
      { metric: '生產透明度', value: '100%', description: '即時工單狀態可視化' },
      { metric: '異常響應', value: '↓ 65%', description: '自動通報縮短處理時間' },
      { metric: '產能利用率', value: '↑ 22%', description: '瓶頸分析最佳化排程' },
    ],
    featured: false,
    publishedAt: '2023-09-08',
  },
]

const websiteCases = [
  {
    slug: 'restaurant-chain-website',
    title: '連鎖餐飲品牌官網',
    client: '鮮o軒台式料理',
    category: 'website',
    shortDescription: '質感呈現品牌形象的連鎖餐飲官網，整合門市查詢、線上訂位與最新活動公告。',
    techTags: [{ tag: 'Next.js' }, { tag: 'Payload CMS' }, { tag: 'Tailwind CSS' }],
    results: [
      { metric: '品牌曝光', value: '↑ 120%', description: 'SEO 自然流量成長' },
      { metric: '線上訂位', value: '月均 800+', description: '首月即達成目標' },
      { metric: '跳出率', value: '↓ 38%', description: '視覺優化提升停留時間' },
    ],
    featured: true,
    publishedAt: '2024-08-30',
  },
  {
    slug: 'law-firm-website',
    title: '法律事務所官方網站',
    client: '正o法律事務所',
    category: 'website',
    shortDescription: '專業沉穩的法律事務所形象網站，完整呈現服務項目、律師團隊與成功案例。',
    techTags: [{ tag: 'Next.js' }, { tag: 'Sanity CMS' }, { tag: 'Tailwind CSS' }],
    results: [
      { metric: '諮詢量', value: '↑ 90%', description: '線上表單帶動詢問' },
      { metric: 'Google 排名', value: 'Top 3', description: '關鍵字 SEO 優化' },
      { metric: '平均停留', value: '3.5 分鐘', description: '內容規劃吸引深度閱讀' },
    ],
    featured: true,
    publishedAt: '2024-06-12',
  },
  {
    slug: 'medical-clinic-website',
    title: '醫療診所形象網站',
    client: '康o家醫診所',
    category: 'website',
    shortDescription: '溫暖專業的醫療診所形象網站，提供診別介紹、醫師團隊與線上掛號整合入口。',
    techTags: [{ tag: 'Next.js' }, { tag: 'Payload CMS' }, { tag: 'Tailwind CSS' }],
    results: [
      { metric: '掛號轉換率', value: '↑ 55%', description: '簡化線上掛號流程' },
      { metric: '新患者比例', value: '↑ 30%', description: '網路搜尋導流' },
      { metric: '客訴減少', value: '↓ 70%', description: '清楚的診別資訊減少誤解' },
    ],
    featured: true,
    publishedAt: '2024-04-25',
  },
  {
    slug: 'tech-startup-website',
    title: '科技新創企業官網',
    client: '雲o科技',
    category: 'website',
    shortDescription: '充滿科技感的新創企業官網，清楚傳達產品價值主張，支援中英雙語切換。',
    techTags: [{ tag: 'Next.js' }, { tag: 'Framer Motion' }, { tag: 'Tailwind CSS' }, { tag: 'i18n' }],
    results: [
      { metric: '投資者詢問', value: '↑ 200%', description: '清晰的 Pitch 頁面' },
      { metric: '國際流量', value: '35%', description: '英文版帶動海外曝光' },
      { metric: 'Core Web Vitals', value: '全綠', description: 'LCP < 1.5s, CLS = 0' },
    ],
    featured: false,
    publishedAt: '2024-02-14',
  },
]

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Seed is disabled in production' }, { status: 403 })
  }

  try {
    const payload = await getPayloadClient()
    const created: string[] = []
    const skipped: string[] = []

    const allCases = [...systemCases, ...websiteCases]

    for (const item of allCases) {
      const existing = await payload.find({
        collection: 'portfolio',
        where: { slug: { equals: item.slug } },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        skipped.push(item.slug)
        continue
      }

      await payload.create({
        collection: 'portfolio',
        data: {
          title: item.title,
          slug: item.slug,
          client: item.client,
          category: item.category as 'system' | 'website' | 'api',
          shortDescription: item.shortDescription,
          techTags: item.techTags,
          results: item.results,
          featured: item.featured,
          publishedAt: item.publishedAt,
        },
      })

      created.push(item.slug)
    }

    return NextResponse.json({
      success: true,
      created: created.length,
      skipped: skipped.length,
      createdSlugs: created,
      skippedSlugs: skipped,
    })
  } catch (err) {
    console.error('Seed error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
