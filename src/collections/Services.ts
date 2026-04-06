import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: '服務',
    plural: '服務項目',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'showOnHome', 'order'],
  },
  fields: [
    {
      name: 'name',
      label: '服務名稱',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: '用於 URL 的唯一識別碼（英文、數字、連字號）',
      },
    },
    {
      name: 'category',
      label: '分類',
      type: 'select',
      options: [
        { label: '官方網站建置', value: 'website' },
        { label: '管理系統開發', value: 'system' },
        { label: 'API 整合/自動化', value: 'api' },
      ],
      required: true,
    },
    {
      name: 'icon',
      label: '圖示（emoji 或 SVG 代碼）',
      type: 'text',
    },
    {
      name: 'shortDescription',
      label: '簡短描述（首頁用）',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      label: '完整描述',
      type: 'richText',
    },
    {
      name: 'features',
      label: '功能/特色列表',
      type: 'array',
      fields: [
        { name: 'item', label: '項目', type: 'text', required: true },
      ],
    },
    {
      name: 'deliveryTime',
      label: '交付時間',
      type: 'text',
      admin: { description: '例：7-14 個工作天' },
    },
    {
      name: 'startingPrice',
      label: '起始價格',
      type: 'text',
      admin: { description: '例：NT$30,000 起' },
    },
    {
      name: 'image',
      label: '服務圖片',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'showOnHome',
      label: '在首頁顯示',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'order',
      label: '排序（數字越小越前面）',
      type: 'number',
      defaultValue: 99,
    },
  ],
}
