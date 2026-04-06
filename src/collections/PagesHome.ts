import { GlobalConfig } from 'payload'

export const PagesHome: GlobalConfig = {
  slug: 'pages-home',
  label: '首頁設定',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Hero 區塊',
      type: 'collapsible',
      fields: [
        {
          name: 'heroBadge',
          label: 'Hero 徽章文字',
          type: 'text',
          defaultValue: '🚀 數位轉型專家',
        },
        {
          name: 'heroTitle',
          label: 'Hero 主標題',
          type: 'text',
          required: true,
          defaultValue: '讓您的業務數位化起飛',
        },
        {
          name: 'heroSubtitle',
          label: 'Hero 副標題',
          type: 'textarea',
          defaultValue: '專注企業網站建置、管理系統開發與 API 整合，14 天快速交付，讓您的品牌在數位世界脫穎而出。',
        },
        {
          name: 'heroCta1Text',
          label: '主要 CTA 按鈕文字',
          type: 'text',
          defaultValue: '免費諮詢',
        },
        {
          name: 'heroCta1Url',
          label: '主要 CTA 連結',
          type: 'text',
          defaultValue: '/contact',
        },
        {
          name: 'heroCta2Text',
          label: '次要 CTA 按鈕文字',
          type: 'text',
          defaultValue: '查看案例',
        },
        {
          name: 'heroCta2Url',
          label: '次要 CTA 連結',
          type: 'text',
          defaultValue: '/portfolio',
        },
      ],
    },
    {
      label: '成就數字',
      type: 'collapsible',
      fields: [
        {
          name: 'stats',
          label: '統計項目',
          type: 'array',
          minRows: 4,
          maxRows: 4,
          fields: [
            { name: 'value', label: '數值', type: 'text', required: true },
            { name: 'label', label: '說明', type: 'text', required: true },
            { name: 'icon', label: '圖示（emoji）', type: 'text' },
          ],
          defaultValue: [
            { value: '200+', label: '完成專案', icon: '🎯' },
            { value: '98%', label: '客戶滿意', icon: '⭐' },
            { value: '14天', label: '平均交付', icon: '🚀' },
            { value: '8年', label: '專業經驗', icon: '💎' },
          ],
        },
      ],
    },
    {
      label: 'CTA 結尾區塊',
      type: 'collapsible',
      fields: [
        {
          name: 'ctaTitle',
          label: 'CTA 標題',
          type: 'text',
          defaultValue: '準備好開始您的數位轉型了嗎？',
        },
        {
          name: 'ctaSubtitle',
          label: 'CTA 副標題',
          type: 'text',
          defaultValue: '立即聯繫我們，享受免費專案評估與諮詢服務',
        },
        {
          name: 'ctaButtonText',
          label: 'CTA 按鈕文字',
          type: 'text',
          defaultValue: '立即免費諮詢',
        },
      ],
    },
    {
      label: '關於我們預覽',
      type: 'collapsible',
      fields: [
        {
          name: 'aboutTitle',
          label: '關於我們標題',
          type: 'text',
          defaultValue: '為什麼選擇華宇資訊科技',
        },
        {
          name: 'aboutDescription',
          label: '關於我們描述',
          type: 'textarea',
          defaultValue: '8 年深耕數位化解決方案，服務超過 200 家企業，從電商平台到企業管理系統，我們都能精準交付。',
        },
      ],
    },
  ],
}
