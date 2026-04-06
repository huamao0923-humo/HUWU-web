import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayloadClient } from '@/lib/payload'

export const revalidate = 60

async function getPost(slug: string) {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'blog-posts',
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: 'published' } },
        ],
      },
      limit: 1,
    })
    return res.docs[0] || null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug) as any
  if (!post) return { title: '文章不存在' }
  const postTitle = post.metaTitle || post.title
  const postDesc = post.metaDescription || post.excerpt || ''
  const ogImage = post.ogImage?.url || post.coverImage?.url
    || `/api/og?title=${encodeURIComponent(postTitle)}&description=${encodeURIComponent(postDesc.slice(0, 60))}`
  return {
    title: postTitle,
    description: postDesc,
    openGraph: {
      title: postTitle,
      description: postDesc,
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDesc,
      images: [ogImage],
    },
  }
}

const categoryLabels: Record<string, string> = {
  'web-dev': '網站開發',
  'system-design': '系統設計',
  'api': 'API 技術',
  'marketing': '數位行銷',
  'trends': '產業趨勢',
  'news': '公司動態',
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug) as any
  if (!post) notFound()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        {post.coverImage?.url && (
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
        )}
        <div className="container-custom relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            返回部落格
          </Link>

          {post.category && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
              {categoryLabels[post.category] || post.category}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-white/70 text-lg max-w-2xl">{post.excerpt}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/60">
            {post.author?.name && (
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold">
                  {post.author.name.charAt(0)}
                </div>
                {post.author.name}
              </span>
            )}
            {post.publishedAt && (
              <time>
                {new Date(post.publishedAt).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            )}
            {post.tags?.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((t: any, i: number) => (
                  <span key={i} className="px-2 py-0.5 bg-white/10 rounded-full text-xs">{t.tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Content */}
            <div className="lg:col-span-3">
              {post.content ? (
                <div className="rich-text">
                  <RichText data={post.content} />
                </div>
              ) : (
                <p className="text-gray-500">文章內容尚未提供。</p>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author */}
              {post.author && (
                <div className="card p-5">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">關於作者</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {post.author.name?.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{post.author.name}</div>
                      {post.author.title && <div className="text-xs text-gray-400">{post.author.title}</div>}
                      {post.author.bio && <p className="text-xs text-gray-500 mt-1 line-clamp-3">{post.author.bio}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-white">
                <h3 className="font-bold mb-2 text-sm">需要技術協助？</h3>
                <p className="text-white/80 text-xs mb-4">我們提供免費的技術諮詢服務</p>
                <Link href="/contact" className="block text-center py-2 bg-white text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors text-sm">
                  免費諮詢
                </Link>
              </div>

              {/* Back */}
              <Link href="/blog" className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                返回部落格列表
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
