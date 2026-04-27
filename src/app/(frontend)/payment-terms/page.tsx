// src/app/(frontend)/payment-terms/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '付款條款',
  description: '付款條款——說明付款方式、付款時程、發票開立及逾期處理等事項。',
  openGraph: {
    title: '付款條款',
    description: '付款條款，最後更新日期：2026-04-27。',
    images: [{ url: '/api/og?title=付款條款&description=付款方式說明', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const paymentSteps = [
  {
    step: '第一階段',
    label: '簽約訂金',
    percent: '30%',
    timing: '合約簽訂後 5 個工作天內',
    desc: '訂金確認後，本公司開始安排專案資源，啟動需求分析與設計作業。',
  },
  {
    step: '第二階段',
    label: '核心里程碑款',
    percent: '30%',
    timing: '核心功能完成並提交確認後',
    desc: '當主要功能模組完成、提交客戶審閱確認時支付，確保開發方向符合期待。',
  },
  {
    step: '第三階段',
    label: '驗收尾款',
    percent: '40%',
    timing: '客戶完成驗收確認後',
    desc: '驗收通過後支付尾款，著作財產權同步移轉給客戶，專案正式交付。',
  },
]

const sections = [
  {
    title: '一、付款方式',
    content: `【現行付款方式】

銀行轉帳（ATM 或網路銀行）
本公司將於報價確認後提供匯款帳戶資訊（銀行名稱、帳號、戶名）。
匯款完成後，請將匯款紀錄截圖或匯款單回傳至 huamoa0923@gmail.com，本公司確認入帳後即視為付款完成。

【即將推出】

線上金流支付（信用卡、行動支付）
本公司正規劃串接合法第三方金流服務，屆時客戶可透過網站直接以信用卡或其他電子支付方式完成付款，付款流程將更加便利。正式上線後將另行公告。`,
  },
  {
    title: '二、付款時程（三階段制）',
    content: null,
  },
  {
    title: '三、付款確認方式',
    content: `匯款完成後，請依下列方式通知本公司：

1. 將匯款紀錄截圖或匯款收據，以電子郵件寄至 huamoa0923@gmail.com
2. 信件主旨請標註：「匯款確認 — 合約名稱（或簽約日期）」
3. 本公司於收到通知後 1 個工作天內確認入帳，並回覆確認信

本公司以銀行實際入帳為準，如因銀行轉帳延誤致使確認時間較長，不影響付款完成之認定。`,
  },
  {
    title: '四、統一發票開立',
    content: `本公司依各付款階段分批開立統一發票（或收據），開立方式如下：

• 發票種類：電子發票（二聯式或三聯式，依客戶需求）
• 開立時機：款項確認入帳後 5 個工作天內
• 含稅說明：報價金額均已含 5% 營業稅，發票金額與報價單一致
• 統一編號：如需以公司名義抬頭開立三聯式發票，請於付款前告知公司名稱及統一編號

如需紙本發票，請事先告知，本公司將安排郵寄或面交。`,
  },
  {
    title: '五、逾期付款處理',
    content: `如客戶未於約定期限內完成付款，本公司將依下列程序處理：

【第 1–7 個工作天】逾期提醒
本公司將以電子郵件發送付款提醒，並確認是否有特殊情況需要協商。

【第 7–30 個工作天】服務暫停
如逾期超過 7 個工作天仍未付款，本公司有權暫停專案開發進度，並不承擔因此導致之交付延誤責任。

【逾期超過 30 個工作天】視為違約
本公司保留依服務條款要求違約金及以法律途徑追討款項之權利。

如因特殊情況需要調整付款時程，請於到期前主動聯繫本公司，本公司將以善意原則協商因應方案。`,
  },
  {
    title: '六、線上金流付款安全說明',
    content: `本公司導入線上金流服務後，付款安全由以下機制保障：

• 第三方金流廠商（如 ECPay 綠界、藍新金流等）符合 PCI DSS 資安標準
• 本公司不會在自己的伺服器儲存您的信用卡卡號、有效期限或安全碼
• 所有線上付款均透過 SSL 加密傳輸
• 交易紀錄由金流廠商依法保存，本公司僅保留交易摘要（訂單編號、金額、付款狀態）

如對線上付款安全有疑慮，您仍可選擇銀行轉帳方式付款。`,
  },
  {
    title: '七、匯率與幣別',
    content: `本公司報價及收款幣別均為新台幣（NTD/TWD）。

如客戶為境外企業需以外幣付款，請事先告知，本公司將依當日台灣銀行牌告匯率換算，並可能加收必要之匯差手續費，相關費用於報價時一併說明。`,
  },
]

export default function PaymentTermsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">法律文件</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">付款條款</span>
          </h1>
          <p className="text-base text-gray-500 mt-3">最後更新日期：2026 年 04 月 27 日</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* 條款內容 */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-gray-600 leading-relaxed mb-10 p-5 bg-brand-50 rounded-xl border-l-4 border-brand-500">
            本付款條款說明本公司之付款方式、時程、發票開立及逾期處理等相關規定，適用於與本公司簽訂之所有服務合約。如有任何疑問，歡迎隨時聯繫我們確認。
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-100 pb-8 last:border-b-0">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-brand-500 rounded-full shrink-0" />
                  {section.title}
                </h2>

                {section.content && (
                  <div className="pl-5 text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                    {section.content}
                  </div>
                )}

                {/* 三階段付款卡片 */}
                {section.title.includes('三階段制') && (
                  <div className="pl-5 mt-2 grid gap-4 md:grid-cols-3">
                    {paymentSteps.map((item) => (
                      <div key={item.step} className="card p-5">
                        <div className="text-xs font-medium text-brand-600 mb-1">{item.step}</div>
                        <div className="text-2xl font-bold text-brand-500 mb-1">{item.percent}</div>
                        <div className="font-semibold text-gray-800 mb-2">{item.label}</div>
                        <div className="text-xs text-gray-500 mb-3 font-medium">{item.timing}</div>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-sm text-gray-500">
            <p className="font-semibold text-gray-700 mb-1">付款相關詢問</p>
            <p>如需確認匯款帳戶或有其他付款問題，請聯繫：</p>
            <p className="mt-1">
              電子郵件：
              <a href="mailto:huamoa0923@gmail.com" className="text-brand-600 hover:underline">
                huamoa0923@gmail.com
              </a>
            </p>
            <p className="mt-1">
              電話：
              <a href="tel:+886-900611682" className="text-brand-600 hover:underline">
                +886-900-611-682
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4">準備好開始了嗎？</h2>
          <p className="text-gray-500 mb-8">立即聯繫我們，取得專屬報價方案</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            免費諮詢
          </Link>
        </div>
      </section>
    </div>
  )
}
