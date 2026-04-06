import { CollectionConfig } from 'payload'

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  labels: {
    singular: '案例',
    plural: '成功案例',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'category', 'featured', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      label: '專案標題',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'client',
      label: '客戶名稱',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: '類型',
      type: 'select',
      options: [
        { label: '官方網站', value: 'website' },
        { label: '管理系統', value: 'system' },
        { label: 'API 整合', value: 'api' },
      ],
      required: true,
    },
    {
      name: 'coverImage',
      label: '封面圖片',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      label: '更多圖片',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: '圖片',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'shortDescription',
      label: '簡短描述（列表頁用）',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      label: '完整說明',
      type: 'richText',
    },
    {
      name: 'techTags',
      label: '技術標籤',
      type: 'array',
      fields: [
        { name: 'tag', label: '標籤', type: 'text', required: true },
      ],
    },
    {
      name: 'results',
      label: '成果數據',
      type: 'array',
      fields: [
        { name: 'metric', label: '指標', type: 'text', required: true },
        { name: 'value', label: '數值', type: 'text', required: true },
        { name: 'description', label: '說明', type: 'text' },
      ],
    },
    {
      name: 'websiteUrl',
      label: '網站連結',
      type: 'text',
    },
    {
      name: 'featured',
      label: '首頁精選',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'publishedAt',
      label: '發布日期',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'yyyy/MM/dd' },
      },
    },
  ],
}
