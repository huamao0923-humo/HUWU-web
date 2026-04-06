import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: '見證',
    plural: '客戶見證',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'rating', 'order'],
  },
  fields: [
    {
      name: 'name',
      label: '姓名',
      type: 'text',
      required: true,
    },
    {
      name: 'jobTitle',
      label: '職稱',
      type: 'text',
    },
    {
      name: 'company',
      label: '公司名稱',
      type: 'text',
    },
    {
      name: 'avatar',
      label: '頭像',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: '評語內容',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      label: '評分（1-5）',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'projectType',
      label: '合作類型',
      type: 'select',
      options: [
        { label: '官方網站', value: 'website' },
        { label: '管理系統', value: 'system' },
        { label: 'API 整合', value: 'api' },
      ],
    },
    {
      name: 'order',
      label: '排序',
      type: 'number',
      defaultValue: 99,
    },
  ],
}
