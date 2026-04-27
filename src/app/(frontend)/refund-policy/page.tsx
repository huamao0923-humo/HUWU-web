// src/app/(frontend)/refund-policy/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '退款政策',
  description: '退款政策——說明客製化服務之退款條件、各階段退款規則及退款申請流程。',
  openGraph: {
    title: '退款政策',
    description: '退款政策，最後更新日期：2026-04-27。',
    images: [{ url: '/api/og?title=退款政策&description=退款條件說明', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const refundTable = [
  {
    scenario: '訂金付清前提出取消',
    rule: '全額退還，無任何扣款',
    note: '合約尚未生效',
  },
  {
    scenario: '訂金付清後、開工前提出取消',
    rule: '退還訂金之 70%',
    note: '已產生前期規劃成本',
  },
  {
    scenario: '開工後提出取消',
    rule: '依已完成工作比例扣除費用，退還剩餘款項',
    note: '由本公司評估完成度後書面確認',
  },
  {
    scenario: '驗收通過後提出取消',
    rule: '不予退款',
    note: '服務已完整履行',
  },
  {
    scenario: '因本公司違約導致終止',
    rule: '全額退還已付款項，另行協商損害賠償',
    note: '本公司全責負擔',
  },
]

const sections = [
  {
    title: '一、客製化服務之特別說明',
    content: `本公司提供之服務（包含但不限於網站設計、系統開發、AI Agent 客製化、技術顧問等），均屬依客戶個別需求所進行之「客製化給付」。

依據《消費者保護法》第 19 條第 1 項第 3 款之規定：

「依消費者要求所為之客製化給付」

不適用消費者保護法所定之七日無條件解除契約（鑑賞期）規定。

本公司在委託前會充分說明服務內容，並提供書面報價供客戶確認，以確保雙方對服務範圍有一致的理解後再行簽約。`,
  },
  {
    title: '二、各階段退款規則',
    content: null,
  },
  {
    title: '三、開工後取消之費用計算方式',
    content: `若客戶於開工後提出取消，本公司將依下列方式計算已完成工作之費用：

• 本公司提供書面工作進度報告，列出各模組完成狀態
• 依報告所示之完成比例，計算應扣除之服務費用
• 雙方確認計算結果後，本公司於 10 個工作天內退還剩餘款項

客戶如對完成比例之認定有異議，可提出書面申訴，本公司將重新評估並說明。`,
  },
  {
    title: '四、退款申請流程',
    content: `如需申請退款，請依下列步驟辦理：

第一步：發送退款申請至 huamoa0923@gmail.com
　　　　請說明：合約編號（或簽約日期）、退款原因、期望退款方式

第二步：本公司於 3 個工作天內回覆確認，並說明適用退款規則

第三步：雙方確認退款金額後，本公司於 10 個工作天內以銀行轉帳方式退款

退款將匯至客戶指定之本人帳戶，轉帳手續費由本公司承擔。`,
  },
  {
    title: '五、不予退款之情形',
    content: `以下情形本公司不予受理退款：

• 服務已完成驗收且客戶已書面確認驗收通過
• 客戶因自身因素（如內部決策變更、預算調整）要求取消，且工作已進入後期開發階段
• 因客戶未按時提供素材或確認，致使進度延誤，客戶以此為由要求解約
• 客戶自行或委由第三方修改成果後，導致功能異常並以此為由申請退款

如您認為退款申請屬於特殊情況，歡迎與我們聯繫說明，本公司將以善意原則個案處理。`,
  },
  {
    title: '六、爭議處理',
    content: `如就退款金額或退款資格有所爭議，雙方應先以善意協商解決。

協商期間，本公司將暫時保留爭議款項，待爭議解決後依協商結果處理。

協商未果時，依本公司服務條款之爭議處理條款，以台灣台中地方法院為第一審管轄法院。`,
  },
]

export default function RefundPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">法律文件</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">退款政策</span>
          </h1>
          <p className="text-base text-gray-500 mt-3">最後更新日期：2026 年 04 月 27 日</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* 政策內容 */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* 重要提示 */}
          <div className="mb-10 p-5 bg-amber-50 rounded-xl border-l-4 border-amber-500">
            <p className="font-bold text-amber-800 mb-1 flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              重要提示：本服務不適用7日無條件退款
            </p>
            <p className="text-amber-700 text-[15px] leading-relaxed">
              本公司提供之服務屬「依消費者要求所為之客製化給付」，依《消費者保護法》第 19 條第 1 項第 3 款規定，
              <strong>不適用消費者保護法所定之七日無條件解除契約（鑑賞期）</strong>。
              本公司仍訂有合理退款政策，詳見下方各條款說明。
            </p>
          </div>

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

                {/* 退款對照表 */}
                {section.title.includes('各階段退款規則') && (
                  <div className="pl-5 mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-2/5">取消時機</th>
                          <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-2/5">退款規則</th>
                          <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700 w-1/5">備註</th>
                        </tr>
                      </thead>
                      <tbody>
                        {refundTable.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                            <td className="p-3 border border-gray-200 text-gray-700">{row.scenario}</td>
                            <td className="p-3 border border-gray-200 text-gray-700">{row.rule}</td>
                            <td className="p-3 border border-gray-200 text-gray-500">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-sm text-gray-500">
            <p className="font-semibold text-gray-700 mb-1">退款申請聯絡</p>
            <p>退款申請請寄至：
              <a href="mailto:huamoa0923@gmail.com" className="text-brand-600 hover:underline ml-1">
                huamoa0923@gmail.com
              </a>
            </p>
            <p className="mt-1">請在信件主旨標註「退款申請」及合約簽訂日期，以便我們盡速處理。</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="section-title mb-4">有任何疑問？</h2>
          <p className="text-gray-500 mb-8">歡迎聯繫我們，我們將盡速回覆您的詢問</p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            聯繫我們
          </Link>
        </div>
      </section>
    </div>
  )
}
