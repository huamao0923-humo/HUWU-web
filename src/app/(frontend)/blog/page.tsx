import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: '部落格',
  description: '華宇資訊科技部落格 - 分享網站開發、系統設計、數位行銷等專業知識與產業趨勢。',
  openGraph: {
    title: '部落格 | 華宇資訊科技',
    description: '分享網站開發、系統設計、數位行銷等專業知識與產業趨勢。',
    images: [{ url: '/api/og?title=技術知識分享&description=網站開發、系統設計、API 技術、數位行銷', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const categoryLabels: Record<string, string> = {
  'web-dev': '網站開發',
  'system-design': '系統設計',
  'api': 'API 技術',
  'marketing': '數位行銷',
  'trends': '產業趨勢',
  'news': '公司動態',
}

const categoryColors: Record<string, string> = {
  'web-dev': 'bg-blue-100 text-blue-700',
  'system-design': 'bg-purple-100 text-purple-700',
  'api': 'bg-emerald-100 text-emerald-700',
  'marketing': 'bg-orange-100 text-orange-700',
  'trends': 'bg-pink-100 text-pink-700',
  'news': 'bg-gray-100 text-gray-700',
}

const getPosts = unstable_cache(
  async () => {
    try {
      const payload = await getPayloadClient()
      const res = await payload.find({ collection: 'blog-posts', where: { status: { equals: 'published' } }, sort: '-publishedAt', limit: 20 })
      return res.docs
    } catch {
      return []
    }
  },
  ['blog-posts-list'],
  { revalidate: 60 }
)

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams
  const allPosts = await getPosts()
  const posts = category && category !== 'all'
    ? allPosts.filter((p: any) => p.category === category)
    : allPosts

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">部落格</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            技術<span className="text-gradient">知識分享</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            分享網站開發、系統設計、API 技術與數位行銷的實戰心得
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!category || category === 'all' ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-600'}`}
            >
              全部
            </Link>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Link
                key={key}
                href={`/blog?category=${key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === key ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-600'}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {posts.length > 0 && (
                <Link href={`/blog/${(posts[0] as any).slug}`} className="card group overflow-hidden mb-8 block">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto bg-gradient-to-br from-brand-50 to-brand-100">
                      {(posts[0] as any).coverImage?.url ? (
                        <Image
                          src={(posts[0] as any).coverImage.url}
                          alt={(posts[0] as any).title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-6xl opacity-20">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      {(posts[0] as any).category && (
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-3 ${categoryColors[(posts[0] as any).category] || 'bg-gray-100 text-gray-700'}`}>
                          {categoryLabels[(posts[0] as any).category] || (posts[0] as any).category}
                        </span>
                      )}
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                        {(posts[0] as any).title}
                      </h2>
                      {(posts[0] as any).excerpt && (
                        <p className="text-gray-500 leading-relaxed mb-4 line-clamp-3">{(posts[0] as any).excerpt}</p>
                      )}
                      {(posts[0] as any).publishedAt && (
                        <time className="text-xs text-gray-400">
                          {new Date((posts[0] as any).publishedAt).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                      )}
                    </div>
                  </div>
                </Link>
              )}

              {/* Other Posts Grid */}
              {posts.length > 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post: any) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="card group overflow-hidden hover:-translate-y-1 transition-all duration-300">
                      <div className="relative h-48 bg-gradient-to-br from-brand-50 to-brand-100">
                        {post.coverImage?.url ? (
                          <Image
                            src={post.coverImage.url}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl opacity-20">📝</span>
                          </div>
                        )}
                        {post.category && (
                          <div className="absolute top-3 left-3">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                              {categoryLabels[post.category] || post.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">{post.title}</h3>
                        {post.excerpt && <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>}
                        {post.publishedAt && (
                          <time className="text-xs text-gray-400 mt-3 block">
                            {new Date(post.publishedAt).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">即將推出</h3>
              <p className="text-gray-400">我們正在準備精彩的技術文章，敬請期待！</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
