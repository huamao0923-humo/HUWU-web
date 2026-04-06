import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import sharp from 'sharp'

import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Portfolio } from './collections/Portfolio'
import { Team } from './collections/Team'
import { BlogPosts } from './collections/BlogPosts'
import { Testimonials } from './collections/Testimonials'
import { Inquiries } from './collections/Inquiries'
import { SiteSettings } from './collections/SiteSettings'
import { PagesHome } from './collections/PagesHome'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    theme: 'light',
    meta: {
      titleSuffix: '- 華宇資訊科技後台',
    },
    components: {
      views: {
        dashboard: {
          Component: '@/admin/Dashboard',
        },
      },
    },
  },
  i18n: {
    supportedLanguages: { en },
  },
  collections: [
    Media,
    Services,
    Portfolio,
    Team,
    BlogPosts,
    Testimonials,
    Inquiries,
    // 內建 Users collection
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          label: '姓名',
          type: 'text',
        },
        {
          name: 'role',
          label: '角色',
          type: 'select',
          options: [
            { label: '管理員', value: 'admin' },
            { label: '編輯', value: 'editor' },
          ],
          defaultValue: 'editor',
        },
      ],
    },
  ],
  globals: [
    SiteSettings,
    PagesHome,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-this',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  sharp,
})
