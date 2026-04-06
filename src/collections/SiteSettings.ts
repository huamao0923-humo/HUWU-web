import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: '全站設定',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      label: '公司名稱',
      type: 'text',
      required: true,
      defaultValue: '華宇資訊科技',
    },
    {
      name: 'companyNameEn',
      label: '公司英文名稱',
      type: 'text',
      defaultValue: 'HUWU Information Technology',
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      label: '聯絡資訊',
      type: 'collapsible',
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          defaultValue: 'info@huwu.com.tw',
        },
        {
          name: 'phone',
          label: '電話',
          type: 'text',
          defaultValue: '+886-2-XXXX-XXXX',
        },
        {
          name: 'address',
          label: '地址',
          type: 'text',
          defaultValue: '台北市信義區XX路XX號XX樓',
        },
        {
          name: 'lineId',
          label: 'Line ID',
          type: 'text',
        },
      ],
    },
    {
      label: '社群連結',
      type: 'collapsible',
      fields: [
        {
          name: 'facebook',
          label: 'Facebook URL',
          type: 'text',
        },
        {
          name: 'instagram',
          label: 'Instagram URL',
          type: 'text',
        },
        {
          name: 'linkedin',
          label: 'LinkedIn URL',
          type: 'text',
        },
        {
          name: 'github',
          label: 'GitHub URL',
          type: 'text',
        },
      ],
    },
    {
      label: 'SEO 設定',
      type: 'collapsible',
      fields: [
        {
          name: 'siteTitle',
          label: '網站標題',
          type: 'text',
          defaultValue: '華宇資訊科技 - 讓您的業務數位化起飛',
        },
        {
          name: 'siteDescription',
          label: '網站描述',
          type: 'textarea',
          defaultValue: '華宇資訊科技專注於企業官方網站建置、管理系統開發及 API 整合，提供完整的數位轉型解決方案。',
        },
        {
          name: 'ogImage',
          label: 'OG Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'gaId',
          label: 'Google Analytics ID',
          type: 'text',
        },
      ],
    },
  ],
}
