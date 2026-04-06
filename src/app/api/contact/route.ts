import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, company, email, phone, serviceType, budget, message } = body

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ message: '姓名和 Email 為必填' }, { status: 400 })
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Email 格式不正確' }, { status: 400 })
    }

    const payload = await getPayloadClient()

    // Save to Payload CMS
    await payload.create({
      collection: 'inquiries',
      data: {
        name: String(name).slice(0, 100),
        company: company ? String(company).slice(0, 200) : undefined,
        email: String(email).slice(0, 200),
        phone: phone ? String(phone).slice(0, 50) : undefined,
        serviceType: serviceType || undefined,
        budget: budget || undefined,
        message: message ? String(message).slice(0, 2000) : undefined,
        status: 'pending',
      },
    })

    // Send email notification via Resend (non-blocking)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        const serviceLabels: Record<string, string> = {
          website: '官方網站', system: '管理系統', api: 'API 整合', other: '其他'
        }
        const budgetLabels: Record<string, string> = {
          'under-30k': '3萬以下', '30k-80k': '3-8萬', '80k-200k': '8-20萬',
          'above-200k': '20萬以上', 'unsure': '尚未確定'
        }
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'noreply@huwu.com.tw',
          to: process.env.RESEND_NOTIFY_EMAIL || process.env.CONTACT_EMAIL || 'info@huwu.com.tw',
          subject: `新詢問：${serviceLabels[serviceType] || serviceType || '未指定'} — ${String(name).slice(0, 50)}`,
          html: `
            <h2 style="color:#1A6BD9">新聯絡詢問</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px">
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc;width:120px"><b>姓名</b></td><td style="padding:8px;border:1px solid #e2e8f0">${String(name).slice(0, 100)}</td></tr>
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><b>公司</b></td><td style="padding:8px;border:1px solid #e2e8f0">${company ? String(company).slice(0, 200) : '—'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><b>Email</b></td><td style="padding:8px;border:1px solid #e2e8f0">${String(email).slice(0, 200)}</td></tr>
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><b>電話</b></td><td style="padding:8px;border:1px solid #e2e8f0">${phone ? String(phone).slice(0, 50) : '—'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><b>服務類型</b></td><td style="padding:8px;border:1px solid #e2e8f0">${serviceLabels[serviceType] || serviceType || '—'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><b>預算</b></td><td style="padding:8px;border:1px solid #e2e8f0">${budgetLabels[budget] || budget || '—'}</td></tr>
              <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc"><b>需求說明</b></td><td style="padding:8px;border:1px solid #e2e8f0;white-space:pre-wrap">${message ? String(message).slice(0, 2000) : '—'}</td></tr>
            </table>
          `,
        })
      } catch (emailErr) {
        // Email failure does not affect the main response
        console.error('Resend email error:', emailErr)
      }
    }

    return NextResponse.json({ message: '詢問已送出，我們將盡快與您聯繫！' }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ message: '伺服器錯誤，請稍後再試' }, { status: 500 })
  }
}
