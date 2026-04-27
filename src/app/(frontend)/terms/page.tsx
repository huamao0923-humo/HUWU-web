// src/app/(frontend)/terms/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '服務條款',
  description: '服務條款——規範雙方權利義務、付款方式、智慧財產權、保固服務及爭議處理等事項。',
  openGraph: {
    title: '服務條款',
    description: '服務條款，最後更新日期：2026-04-27。',
    images: [{ url: '/api/og?title=服務條款&description=服務條款說明', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const articles = [
  {
    title: '第一條　適用範圍',
    content: `凡使用本公司提供之網站設計、系統開發、AI Agent 客製、技術顧問等任何服務，或向本公司提出委託詢問，即表示您（以下簡稱「客戶」）已閱讀、瞭解並同意接受本條款之所有內容。

若客戶不同意本條款之任何內容，請勿委託本公司提供服務。本公司保留隨時修改本條款之權利，修改後之條款將公告於本網站，客戶於修改後繼續使用服務即視為同意修改後之條款。`,
  },
  {
    title: '第二條　服務範圍',
    content: `本公司提供之服務範圍，以雙方書面確認之報價單、服務合約或需求規格書為準。報價單或合約所列範圍以外之需求，須另行議定報價，並以書面確認後方得納入服務範圍。

本公司得視專案需求，協同合作夥伴共同完成部分工作，但本公司仍為客戶之單一服務窗口，並對整體專案品質負責。`,
  },
  {
    title: '第三條　付款方式與時程',
    content: `除另有書面約定外，本公司採三階段付款制度：

• 第一階段（簽約訂金）：合約簽訂後，客戶應於 5 個工作天內支付合約總金額之 30%，本公司收款確認後始開始專案。

• 第二階段（核心里程碑款）：核心功能完成並提交客戶確認時，支付合約總金額之 30%。

• 第三階段（驗收尾款）：客戶完成驗收確認後，支付合約總金額之 40%，著作權同步移轉。

客戶逾期未付款項，本公司有權暫停服務進度，因此產生之延誤不可歸責於本公司。`,
  },
  {
    title: '第四條　客戶義務',
    content: `客戶應依雙方議定之時程，提供本公司執行專案所需之素材、資料、帳號授權及相關決策確認。

客戶未能依時提供上述資料或決策，致使專案延誤者，不可歸責於本公司，本公司有權依延誤比例調整交付時程，並不因此承擔任何違約責任。

客戶應確保所提供之素材、內容及資料，未侵害任何第三方之著作權、商標權或其他智慧財產權，如有侵權情事，概由客戶自行負責。`,
  },
  {
    title: '第五條　驗收機制',
    content: `本公司依約交付成果後，客戶應於 14 個日曆天內進行驗收，並以書面（含電子郵件）方式提出具體修改意見。

逾期未回覆者，視為驗收通過。

合約範圍內之修改，本公司應於確認修改內容後之合理時間內完成。超出原合約範圍之修改需求，應另行議價。`,
  },
  {
    title: '第六條　智慧財產權',
    content: `本公司為客戶開發之成果，其著作財產權歸屬如下：

• 客戶完整支付合約款項（含尾款）後，本公司將專案成果之著作財產權移轉予客戶。

• 在尾款付清前，本公司保有成果之著作財產權，客戶不得擅自使用、複製、散布或對外公開。

• 本公司於專案執行期間所使用之開發框架、工具程式庫（如 Next.js、React 等）及本公司既有技術資產，不在移轉範圍內，但客戶有權依其授權條款使用。

• 本公司保留將專案（含截圖、技術說明）列為作品集展示之權利，如客戶有保密需求，請於合約簽訂前書面告知。`,
  },
  {
    title: '第七條　保固服務',
    content: `本公司提供自驗收完成日起 30 個日曆天之免費保固服務，範圍限於：

• 合約規格書所定功能之程式錯誤（Bug）修復
• 因本公司實作瑕疵導致之功能異常

以下情形不在保固範圍內：

• 客戶自行或委由第三方修改程式碼後產生之問題
• 客戶新增之功能需求或設計變更
• 第三方服務（如主機、API）異動所導致之問題
• 客戶操作不當造成之損害`,
  },
  {
    title: '第八條　保密義務',
    content: `雙方於合作期間所獲悉之對方商業機密、客戶資料、技術資訊及業務計畫，均應予以保密，不得向第三方揭露，亦不得用於本案以外之目的。

本保密義務自合約簽訂日起算，並於合約終止後持續生效 3 年。

法律要求揭露之情形不在此限，但揭露方應於揭露前盡速通知對方。`,
  },
  {
    title: '第九條　責任限制',
    content: `本公司之賠償責任，以客戶就本次合約實際支付之款項總額為上限。

本公司不對下列損失負責：客戶之利潤損失、資料損失、商譽損害、間接損害或任何特殊損害，即便本公司已被告知可能發生此類損害。

本公司對第三方服務（包含但不限於主機服務商、域名商、支付服務商）之服務中斷或資料遺失，不負賠償責任。`,
  },
  {
    title: '第十條　爭議處理',
    content: `本條款及因本條款所生之一切爭議，均以中華民國法律為準據法。

雙方應先以善意協商解決爭議。協商不成時，同意以台灣台中地方法院為第一審管轄法院。`,
  },
  {
    title: '第十一條　條款修改',
    content: `本公司保留修改本服務條款之權利，修改後之條款將公告於本網站。

重大變更將另行以電子郵件通知已有委託關係之客戶。客戶於修改公告後繼續使用本公司服務，即視為同意修改後之條款。`,
  },
]

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">法律文件</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">服務條款</span>
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
            本服務條款（以下簡稱「本條款」）規範本公司與客戶之間的服務委託關係，包含雙方的權利義務、付款方式、智慧財產權歸屬、保固服務及爭議處理等事項。委託服務前請詳細閱讀。
          </p>

          <div className="space-y-8">
            {articles.map((article) => (
              <div key={article.title} className="border-b border-gray-100 pb-8 last:border-b-0">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-brand-500 rounded-full shrink-0" />
                  {article.title}
                </h2>
                <div className="pl-5 text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                  {article.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-sm text-gray-500">
            <p className="font-semibold text-gray-700 mb-1">聯絡本公司</p>
            <p>如對本服務條款有任何疑問，請透過以下方式聯繫：</p>
            <p className="mt-1">
              電子郵件：
              <a href="mailto:huamoa0923@gmail.com" className="text-brand-600 hover:underline">
                huamoa0923@gmail.com
              </a>
            </p>
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
