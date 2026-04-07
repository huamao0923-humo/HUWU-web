export type Feature = string

export type Plan = {
  id: string
  name: string
  price: string
  delivery: string
  popular?: boolean
  designSpecs: Feature[]
  maintenance: Feature[]
  maintenanceFee: string
}

export type AddonItem = {
  name: string
  price: string
}

export type PricingTab = {
  id: string
  label: string
  plans: Plan[]
  addons?: AddonItem[]
  note?: string
}

export const pricingTabs: PricingTab[] = [
  {
    id: 'website',
    label: 'AI 快建站',
    plans: [
      {
        id: 'website-basic',
        name: '快速建站',
        price: 'NT$ 6,888',
        delivery: '交付：2 個工作天',
        designSpecs: [
          '設計稿 1 版選擇',
          '免費修改 1 次',
          'RWD 響應式設計',
          '動畫效果（基礎）',
          'SEO 基礎優化',
          '部署上線（Railway）',
        ],
        maintenance: ['免費維護 1 個月', 'Bug 修復支援'],
        maintenanceFee: '續約維護月費 NT$ 800 / 月',
      },
      {
        id: 'website-standard',
        name: '形象官網',
        price: 'NT$ 14,888',
        delivery: '交付：3 個工作天',
        popular: true,
        designSpecs: [
          '設計稿 2 版方向選擇',
          '免費修改 2 次',
          '3～5 頁完整網站',
          'RWD 響應式設計',
          '進階動畫 + 互動效果',
          'SEO 完整優化',
          'Google Analytics 串接',
        ],
        maintenance: ['免費維護 2 個月', '每月 1 次內容更新', 'Railway 效能監控'],
        maintenanceFee: '續約維護月費 NT$ 1,200 / 月',
      },
      {
        id: 'website-advanced',
        name: '進階官網',
        price: 'NT$ 22,888',
        delivery: '交付：7 個工作天',
        designSpecs: [
          '設計稿 2 版方向選擇',
          '免費修改 3 次',
          '頁數不限',
          '客製化設計風格',
          '進階互動體驗',
          'CMS 內容管理（Payload CMS）',
          '多語言支援',
        ],
        maintenance: ['免費維護 3 個月', '每月 2 次內容更新', 'Railway 效能監控 + 月報'],
        maintenanceFee: '續約維護月費 NT$ 1,500 / 月',
      },
      {
        id: 'website-enterprise',
        name: '全客製官網',
        price: 'NT$ 52,888',
        delivery: '交付：14 個工作天',
        designSpecs: [
          '設計稿 3 版方向選擇',
          '免費修改 5 次',
          '完整客製化開發',
          '品牌視覺設計',
          '進階動畫效果',
          '第三方 API 串接',
          '前後端整合',
        ],
        maintenance: ['免費維護 6 個月', '每月 4 次內容更新', '優先技術支援'],
        maintenanceFee: '續約維護月費 NT$ 2,000 / 月',
      },
    ],
    addons: [
      { name: '資料庫 + CRUD', price: 'NT$ 6,000' },
      { name: '會員系統', price: 'NT$ 8,000' },
      { name: '金流串接', price: 'NT$ 12,000' },
      { name: '後台管理 Dashboard', price: 'NT$ 10,000' },
      { name: '多語言切換', price: 'NT$ 4,000' },
      { name: '額外修改（每次）', price: 'NT$ 1,500 / 次' },
    ],
    note: '額外修改每次 NT$ 1,500，加購項目可於專案啟動後追加。',
  },
  {
    id: 'ecommerce',
    label: '電商網站',
    plans: [
      {
        id: 'ecommerce-lite',
        name: '輕量電商',
        price: 'NT$ 29,888',
        delivery: '交付：14 個工作天',
        designSpecs: [
          '設計稿 1 版',
          '免費修改 2 次',
          '商品上架 + 展示頁面',
          '購物車 + 結帳流程',
          '金流串接（綠界 or 藍新擇一）',
          'RWD 響應式設計',
          '基礎訂單通知（Email）',
        ],
        maintenance: ['免費維護 2 個月', '每月 2 次商品更新協助'],
        maintenanceFee: '續約維護月費 NT$ 1,200 / 月',
      },
      {
        id: 'ecommerce-standard',
        name: '標準電商',
        price: 'NT$ 52,888',
        delivery: '交付：21 個工作天',
        popular: true,
        designSpecs: [
          '設計稿 2 版選擇',
          '免費修改 3 次',
          '輕量版全部功能',
          '會員系統 + 登入註冊',
          '訂單管理後台',
          '商品分類 + 搜尋篩選',
          '物流狀態追蹤',
          '優惠券 / 折扣碼',
        ],
        maintenance: ['免費維護 3 個月', '每月 4 次更新協助', 'Google Analytics 流量月報'],
        maintenanceFee: '續約維護月費 NT$ 1,800 / 月',
      },
      {
        id: 'ecommerce-enterprise',
        name: '企業電商',
        price: 'NT$ 98,888',
        delivery: '交付：30 個工作天',
        designSpecs: [
          '設計稿 3 版選擇',
          '免費修改 5 次',
          '標準版全部功能',
          '多金流整合（綠界 + 藍新 + LINE Pay）',
          '庫存管理系統',
          '銷售數據報表',
          'AI 商品推薦',
          'API 串接 ERP / POS',
        ],
        maintenance: ['免費維護 6 個月', '優先技術支援（12hr 回覆）', '季度效能優化'],
        maintenanceFee: '續約維護月費 NT$ 2,000 / 月',
      },
    ],
    note: '額外修改每次 NT$ 1,500，多金流 LINE Pay 需另外申請商家帳號。電商維護包含訂單異常處理、金流對帳支援。',
  },
  {
    id: 'system',
    label: '系統開發',
    plans: [
      {
        id: 'system-micro',
        name: '微型系統',
        price: 'NT$ 8,000',
        delivery: '交付：3～5 個工作天',
        designSpecs: [
          '單一功能模組',
          '需求訪談 30 分鐘',
          '功能規格書（FSD）',
          '免費修改 1 次',
          '部署上線指引',
        ],
        maintenance: ['免費維護 1 個月', 'Bug 修復保固'],
        maintenanceFee: '續約維護月費 NT$ 800 / 月',
      },
      {
        id: 'system-light',
        name: '輕量系統',
        price: 'NT$ 28,888',
        delivery: '交付：10～14 個工作天',
        designSpecs: [
          '2～3 個功能模組整合',
          'CRUD 資料庫操作',
          '基礎後台介面',
          '需求訪談 + 流程規劃',
          '免費修改 2 次',
          '使用者權限管理',
        ],
        maintenance: ['免費維護 2 個月', '每月 2 次功能微調'],
        maintenanceFee: '續約維護月費 NT$ 1,200 / 月',
      },
      {
        id: 'system-standard',
        name: '標準系統',
        price: 'NT$ 58,888',
        delivery: '交付：21～28 個工作天',
        popular: true,
        designSpecs: [
          '完整業務流程系統',
          '4～6 個功能模組',
          '多角色權限控管',
          'API 串接（第三方服務）',
          '數據報表 Dashboard',
          '免費修改 3 次',
          '完整技術文件',
        ],
        maintenance: ['免費維護 3 個月', '每月系統健康報告', '優先 Bug 修復（24hr）'],
        maintenanceFee: '續約維護月費 NT$ 1,800 / 月',
      },
      {
        id: 'system-enterprise',
        name: '企業系統',
        price: 'NT$ 88,888',
        delivery: '交付：45～60 個工作天',
        designSpecs: [
          '大型複雜業務系統',
          '模組數量不限',
          '微服務 / 分散式架構',
          'ERP / CRM 整合',
          '高可用性架構設計',
          '免費修改 5 次',
          '壓力測試 + 安全性稽核',
        ],
        maintenance: ['免費維護 6 個月', '專屬技術支援窗口', '12 小時緊急應變'],
        maintenanceFee: '續約維護月費 NT$ 2,000 / 月',
      },
    ],
    note: '功能追加以每模組 NT$ 5,000～15,000 另行報價。超出免費修改次數，每次 NT$ 1,500。',
  },
  {
    id: 'ai',
    label: 'AI Agent 客製',
    plans: [
      {
        id: 'ai-consult',
        name: 'AI 諮詢',
        price: 'NT$ 6,888',
        delivery: '交付：1 個工作天',
        designSpecs: [
          '1 對 1 需求深度訪談',
          'AI 可行性評估報告',
          '系統架構建議書',
          '技術選型與成本分析',
          '後續開發可折抵金額',
        ],
        maintenance: ['報告說明會議 1 次', '問題追問 7 天'],
        maintenanceFee: '',
      },
      {
        id: 'ai-agent',
        name: '客製 AI Agent',
        price: 'NT$ 22,888',
        delivery: '交付：3 個工作天',
        popular: true,
        designSpecs: [
          '依業務需求客製 AI Agent',
          '單一平台部署（Web / Slack 擇一）',
          '自動化工作流程設計',
          '第三方 API 串接（最多 2 個）',
          'AI 自然語言理解 + 任務執行',
          '免費修改 2 次',
        ],
        maintenance: ['30 天技術支援', '模型效能監控'],
        maintenanceFee: '續約維護月費 NT$ 1,200 / 月',
      },
      {
        id: 'ai-rag',
        name: 'RAG + 知識庫',
        price: 'NT$ 29,888',
        delivery: '交付：7 個工作天',
        designSpecs: [
          '客製 AI Agent 全功能',
          '企業知識庫建置（PDF / Word / 網頁）',
          'RAG 搜尋增強 — 回答自動引用來源',
          '多輪對話紀錄',
          '知識庫自動更新機制',
          '免費修改 2 次',
        ],
        maintenance: ['60 天技術支援', '知識庫每月更新 2 次'],
        maintenanceFee: '續約維護月費 NT$ 1,500 / 月',
      },
      {
        id: 'ai-fullstack',
        name: '全端客製 Agent',
        price: 'NT$ 52,888',
        delivery: '交付：14 個工作天',
        designSpecs: [
          'RAG 知識庫全部功能',
          '多平台同步部署（Slack + Web）',
          '後台管理 Dashboard',
          'API 串接無上限',
          '免費修改 3 次',
        ],
        maintenance: ['90 天技術支援', '優先應答（12hr 回覆）'],
        maintenanceFee: '續約維護月費 NT$ 1,800 / 月',
      },
      {
        id: 'ai-enterprise',
        name: '企業多 Agent 系統',
        price: 'NT$ 128,888',
        delivery: '交付：21 個工作天',
        designSpecs: [
          '全端版全部功能',
          '多部門獨立 Agent',
          '自動任務分配路由',
          '跨 Agent 上下文共享',
          '客製化 SOP 工作流程',
          '免費修改 5 次',
        ],
        maintenance: ['180 天專屬技術支援', '季度 AI 策略顧問會議'],
        maintenanceFee: '續約維護月費 NT$ 2,000 / 月',
      },
    ],
    note: 'AI Agent 維護月費含模型 API 費用、知識庫更新、對話品質監控。LINE 平台串接為獨立報價項目。',
  },
  {
    id: 'tech',
    label: '技術服務',
    plans: [
      {
        id: 'tech-debug',
        name: 'Debug 除錯',
        price: 'NT$ 4,488',
        delivery: '24 小時內回覆',
        designSpecs: [
          '問題診斷 + 根因分析',
          '程式碼修復',
          '完整除錯報告',
          '修復驗證測試',
          '防範建議說明',
        ],
        maintenance: ['7 天問題追蹤', '同類型 Bug 預防建議'],
        maintenanceFee: '',
      },
      {
        id: 'tech-audit',
        name: '技術健檢',
        price: 'NT$ 12,888',
        delivery: '交付：3 個工作天',
        popular: true,
        designSpecs: [
          '系統架構評估報告',
          '程式碼品質 Review',
          '效能瓶頸分析',
          '安全漏洞掃描',
          '優化建議書（優先排序）',
          '報告說明會議 1 次',
        ],
        maintenance: ['30 天問題追問', '優化執行折扣 10%'],
        maintenanceFee: '',
      },
      {
        id: 'tech-retainer',
        name: '顧問月費',
        price: 'NT$ 22,888 / 月',
        delivery: '12 小時內回覆',
        designSpecs: [
          '每月 2 次深度諮詢（各 1 小時）',
          '即時通訊技術支援',
          '架構規劃與技術選型',
          'Code Review 不限次數',
          '緊急事件優先應援',
        ],
        maintenance: [
          '技術文件撰寫協助',
          '團隊技術培訓（每季 1 次）',
          '最短簽約 3 個月，6 個月享 9 折',
        ],
        maintenanceFee: '',
      },
    ],
    note: '臨時加班或緊急支援另計 NT$ 800 / 小時。顧問月費不含實際開發工時，開發另行報價。',
  },
]
