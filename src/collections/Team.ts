import { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: '成員',
    plural: '團隊成員',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'order'],
  },
  fields: [
    {
      name: 'name',
      label: '姓名',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: '職稱',
      type: 'text',
      required: true,
    },
    {
      name: 'avatar',
      label: '大頭照',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      label: '個人簡介',
      type: 'textarea',
    },
    {
      name: 'specialties',
      label: '專長',
      type: 'array',
      fields: [
        { name: 'item', label: '專長項目', type: 'text' },
      ],
    },
    {
      name: 'linkedin',
      label: 'LinkedIn URL',
      type: 'text',
    },
    {
      name: 'order',
      label: '排序',
      type: 'number',
      defaultValue: 99,
    },
  ],
}
