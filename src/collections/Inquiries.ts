import { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  labels: {
    singular: '詢問',
    plural: '詢問表單',
  },
  access: {
    // 只有登入的管理員可以讀取
    read: ({ req }) => !!req.user,
    // 允許公開建立（前台表單送出）
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'email', 'serviceType', 'status', 'createdAt'],
    description: '來自聯絡表單的詢問記錄',
  },
  fields: [
    {
      name: 'name',
      label: '姓名',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      label: '公司名稱',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      label: '電話',
      type: 'text',
    },
    {
      name: 'serviceType',
      label: '需求類型',
      type: 'select',
      options: [
        { label: '官方網站建置', value: 'website' },
        { label: '管理系統開發', value: 'system' },
        { label: 'API 整合/自動化', value: 'api' },
        { label: '其他', value: 'other' },
      ],
    },
    {
      name: 'budget',
      label: '預算範圍',
      type: 'select',
      options: [
        { label: 'NT$30,000 以下', value: 'under-30k' },
        { label: 'NT$30,000 - 80,000', value: '30k-80k' },
        { label: 'NT$80,000 - 200,000', value: '80k-200k' },
        { label: 'NT$200,000 以上', value: 'above-200k' },
        { label: '不確定', value: 'unsure' },
      ],
    },
    {
      name: 'message',
      label: '需求說明',
      type: 'textarea',
    },
    {
      name: 'status',
      label: '處理狀態',
      type: 'select',
      options: [
        { label: '待處理', value: 'pending' },
        { label: '處理中', value: 'in-progress' },
        { label: '已回覆', value: 'replied' },
        { label: '已結案', value: 'closed' },
      ],
      defaultValue: 'pending',
      admin: { description: '內部追蹤用' },
    },
    {
      name: 'adminNote',
      label: '內部備注',
      type: 'textarea',
      admin: { description: '僅後台可見，不對外顯示' },
    },
  ],
  timestamps: true,
}
