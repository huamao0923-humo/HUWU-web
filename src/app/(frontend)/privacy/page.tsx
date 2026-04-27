// src/app/(frontend)/privacy/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '隱私權政策',
  description: '隱私權政策——說明個人資料蒐集目的、利用方式、保存期限及您的權利，依台灣個人資料保護法規範。',
  openGraph: {
    title: '隱私權政策',
    description: '隱私權政策，最後更新日期：2026-04-27。',
    images: [{ url: '/api/og?title=隱私權政策&description=個人資料保護說明', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const sections = [
  {
    title: '一、資料控管者',
    content: `本隱私權政策適用於本公司所經營之網站及提供之服務。

• 聯絡信箱：huamoa0923@gmail.com
• 聯絡電話：+886-900-611-682

如您對本隱私權政策有任何疑問，請透過上述方式與我們聯繫。`,
  },
  {
    title: '二、蒐集的個人資料種類',
    content: `本公司可能蒐集以下類型之個人資料：

【聯絡資訊】
• 姓名（含公司負責人或聯絡窗口姓名）
• 電子郵件地址
• 聯絡電話
• 公司名稱及職稱

【交易與合約資訊】
• 服務需求說明
• 付款紀錄（僅保留必要之交易摘要，不保存完整金融帳戶資訊）
• 合約及往來文件

【技術使用資訊】
• IP 位址
• 瀏覽器類型及版本
• 造訪頁面及停留時間（透過 Google Analytics 匿名蒐集）

本公司不蒐集敏感性個人資料，如身分證字號、病歷、財務帳戶密碼等。`,
  },
  {
    title: '三、蒐集目的',
    content: `本公司依個人資料保護法第 19 條規定，蒐集個人資料之目的如下：

• 回覆詢問及提供報價（依法定義：契約、類似契約或其他法律關係事務）
• 執行服務合約及專案管理
• 售後服務及保固聯繫
• 開立發票及會計帳務管理
• 改善網站內容及使用者體驗（匿名統計分析）
• 行銷傳播：如您同意，本公司得發送服務相關資訊，您得隨時要求停止`,
  },
  {
    title: '四、個人資料利用方式',
    content: `本公司蒐集之個人資料，僅用於上述蒐集目的，不會對外出售、出租或以其他方式提供予第三方，但以下情形除外：

• 依法令規定，須向主管機關或司法單位提供
• 為執行服務合約，必要時與合作廠商共享（如主機服務商），且該廠商同樣受個人資料保護規範約束
• 取得您明確同意

本公司所有員工及合作夥伴均須遵守個人資料保護相關規定，不得擅自使用或揭露客戶資料。`,
  },
  {
    title: '五、個人資料保存期限',
    content: `本公司依下列原則保存個人資料：

• 尚未委託服務之詢問紀錄：自最後聯繫日起 2 年
• 服務合約相關資料：合約履行完畢後 5 年（依稅法及商業帳簿規定）
• 行銷通訊訂閱：至您要求停止發送為止

保存期限屆滿或蒐集目的消失後，本公司將以安全方式銷毀或去識別化處理相關個人資料。`,
  },
  {
    title: '六、第三方服務',
    content: `本公司使用以下第三方服務，這些服務可能依其自身隱私權政策蒐集資料：

【Google Analytics】
用於分析網站流量，以匿名方式蒐集瀏覽行為資料，無法識別個人身分。您可透過 Google 的廣告設定選擇退出追蹤。

【主機服務商】
本網站架設於第三方主機服務商（Railway）。伺服器存取紀錄（IP、請求時間）由主機商保存，本公司依其服務條款使用。

【金流服務（即將推出）】
本公司規劃導入第三方支付服務（ECPay 或同等級之合法金流廠商）。付款資訊將由金流廠商依其安全規範（PCI DSS）處理，本公司不儲存您的完整信用卡號或金融帳戶資訊。`,
  },
  {
    title: '七、您的個人資料權利',
    content: `依個人資料保護法第 3 條，您對本公司保有之您的個人資料，享有以下權利：

• 查詢或請求閱覽
• 請求製給複製本
• 請求補充或更正
• 請求停止蒐集、處理或利用
• 請求刪除

如需行使上述權利，請以電子郵件聯繫：huamoa0923@gmail.com

本公司將於收到申請後 15 個工作天內回覆。本公司得依個資法相關規定，拒絕部分無法行使之情形並說明理由。`,
  },
  {
    title: '八、Cookie 使用說明',
    content: `本網站使用 Cookie 及類似技術，分為以下類型：

【必要性 Cookie】
維持網站基本運作所必需，無法關閉（如登入狀態、安全性驗證）。

【統計分析 Cookie】
透過 Google Analytics 蒐集匿名使用資料，協助我們瞭解網站使用情況。

您可透過瀏覽器設定管理 Cookie：
• Chrome：設定 → 隱私權和安全性 → Cookie 及其他網站資料
• Firefox：設定 → 隱私權與安全性 → Cookie 與網站資料
• Safari：偏好設定 → 隱私權

停用 Cookie 可能影響部分網站功能之正常使用。`,
  },
  {
    title: '九、隱私政策更新',
    content: `本公司保留隨時修改本隱私權政策之權利，修改後之版本將公告於本頁面，並更新「最後更新日期」。

若修改內容涉及個人資料利用方式之重大變更，本公司將以電子郵件另行通知已有服務往來之客戶。

建議您定期瀏覽本頁面，以瞭解最新之隱私權政策內容。`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">法律文件</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">隱私權政策</span>
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
          <p className="text-gray-600 leading-relaxed mb-10 p-5 bg-brand-50 rounded-xl border-l-4 border-brand-500">
            本隱私權政策說明本公司如何蒐集、使用、保存及保護您的個人資料，依台灣《個人資料保護法》（個資法）訂定。使用本公司服務即表示您同意本政策所述之個人資料處理方式。
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-100 pb-8 last:border-b-0">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-brand-500 rounded-full shrink-0" />
                  {section.title}
                </h2>
                <div className="pl-5 text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-sm text-gray-500">
            <p className="font-semibold text-gray-700 mb-1">個人資料相關申請</p>
            <p>如需行使個資法所賦予之權利，或對本隱私權政策有任何疑問，請聯繫：</p>
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
