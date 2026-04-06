import { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: '文章',
    plural: '部落格文章',
  },
  access: {
    read: ({ req }) => {
      // 已發布的文章公開可讀，草稿需要登入
      if (req.user) return true
      return { status: { equals: 'published' } }
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      label: '文章標題',
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
        description: '文章 URL 路徑（英文、數字、連字號）',
      },
    },
    {
      name: 'category',
      label: '分類',
      type: 'select',
      options: [
        { label: '網站開發', value: 'web-dev' },
        { label: '系統設計', value: 'system-design' },
        { label: 'API 技術', value: 'api' },
        { label: '數位行銷', value: 'marketing' },
        { label: '產業趨勢', value: 'trends' },
        { label: '公司動態', value: 'news' },
      ],
    },
    {
      name: 'coverImage',
      label: '封面圖片',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'excerpt',
      label: '摘要',
      type: 'textarea',
      admin: { description: '顯示於列表頁的文章摘要（建議 100-150 字）' },
    },
    {
      name: 'content',
      label: '文章內容',
      type: 'richText',
      required: true,
    },
    {
      name: 'tags',
      label: '標籤',
      type: 'array',
      fields: [
        { name: 'tag', label: '標籤', type: 'text' },
      ],
    },
    {
      label: 'SEO',
      type: 'collapsible',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          admin: { description: '留空則使用文章標題' },
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          admin: { description: '留空則使用文章摘要' },
        },
        {
          name: 'ogImage',
          label: 'OG Image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: '留空則使用封面圖片' },
        },
      ],
    },
    {
      name: 'status',
      label: '發布狀態',
      type: 'select',
      options: [
        { label: '草稿', value: 'draft' },
        { label: '已發布', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'publishedAt',
      label: '發布日期',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'yyyy/MM/dd' },
      },
    },
    {
      name: 'author',
      label: '作者',
      type: 'relationship',
      relationTo: 'team',
    },
  ],
}
