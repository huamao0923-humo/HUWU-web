import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import PortfolioMockup from '@/components/portfolio/PortfolioMockup'
import { getMockupCount, getMockupLabel, getMockupDesc } from '@/components/portfolio/mockup-data'
import { STATIC_PORTFOLIO, getStaticPortfolioBySlug } from '@/data/portfolio'

export const revalidate = 60

async function getItem(slug: string) {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'portfolio',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    if (res.docs[0]) return { source: 'cms' as const, data: res.docs[0] as any }
  } catch {}

  const staticItem = getStaticPortfolioBySlug(slug)
  if (staticItem) return { source: 'static' as const, data: staticItem }

  return null
}

export async function generateStaticParams() {
  return STATIC_PORTFOLIO.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const result = await getItem(slug)
  if (!result) return { title: '案例不存在' }
  return {
    title: result.data.title,
    description: result.data.shortDescription,
  }
}

const categoryLabels: Record<string, string> = {
  website: '官方網站',
  system: '管理系統',
  api: 'API 整合',
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await getItem(slug)
  if (!result) notFound()

  const item = result.data
  const mockupCount = getMockupCount(item.slug)
  const hasRealImages = item.images?.some((img: any) => img.image?.url)
  const hasMockups = mockupCount > 0

  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        {item.coverImage?.url ? (
          <Image
            src={item.coverImage.url}
            alt={item.title}
            fill
            className="object-cover opacity-30"
          />
        ) : (
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <PortfolioMockup slug={item.slug} index={0} size="hero" />
          </div>
        )}
        <div className="container-custom relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            返回案例列表
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
            {categoryLabels[item.category] || item.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{item.title}</h1>
          <p className="text-white/70 text-lg">{item.client}</p>
          {item.techTags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.techTags.map((t: any, i: number) => (
                <span key={i} className="text-xs px-3 py-1 bg-white/10 text-white rounded-full">
                  {t.tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Left: 描述 + 截圖 + Mockup */}
            <div className="md:col-span-2 space-y-12">

              {/* 1. 專案描述 */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">專案背景</h2>
                {item.fullDescription ? (
                  typeof item.fullDescription === 'string' ? (
                    <div className="space-y-4">
                      {item.fullDescription.split('\n\n').map((para: string, i: number) => (
                        <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{para}</p>
                      ))}
                    </div>
                  ) : (
                    <div className="rich-text" dangerouslySetInnerHTML={{ __html: item.fullDescription }} />
                  )
                ) : (
                  <p className="text-gray-600 leading-relaxed">{item.shortDescription}</p>
                )}
              </div>

              {/* 2. 實際截圖（有才顯示）*/}
              {hasRealImages && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">實際截圖</h2>
                  <div className="space-y-4">
                    {item.images.map((img: any, i: number) =>
                      img.image?.url ? (
                        <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                          <Image
                            src={img.image.url}
                            alt={img.image.alt || `截圖 ${i + 1}`}
                            width={800}
                            height={500}
                            className="w-full object-cover"
                          />
                          {img.image.alt && (
                            <div className="px-4 py-3 bg-white border-t border-gray-100">
                              <p className="text-sm font-semibold text-gray-800">{img.image.alt}</p>
                            </div>
                          )}
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              )}

              {/* 3. 介面展示 Mockup（2欄）*/}
              {hasMockups && (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">介面展示</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.from({ length: mockupCount }, (_, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50"
                      >
                        <div className="aspect-[16/10]">
                          <PortfolioMockup slug={item.slug} index={idx} size="hero" />
                        </div>
                        <div className="px-4 py-3 bg-white border-t border-gray-100">
                          <p className="text-sm font-semibold text-gray-800">{getMockupLabel(item.slug, idx)}</p>
                          {getMockupDesc(item.slug, idx) && (
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{getMockupDesc(item.slug, idx)}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar sticky */}
            <div className="space-y-5">
              <div className="md:sticky md:top-28 space-y-5">

                {/* 成果數據 */}
                {item.results?.length > 0 && (
                  <div className="card p-5">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">專案成果</h3>
                    <div className="space-y-4">
                      {item.results.map((r: any, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                          <div>
                            <div className="text-xl font-bold text-brand-600 leading-none">{r.value}</div>
                            <div className="text-sm font-medium text-gray-700 mt-0.5">{r.metric}</div>
                            {r.description && (
                              <div className="text-xs text-gray-400 mt-0.5">{r.description}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 專案資訊 */}
                <div className="card p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">專案資訊</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs text-gray-400 uppercase tracking-wide">客戶</dt>
                      <dd className="text-sm text-gray-700 font-medium mt-0.5">{item.client}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-400 uppercase tracking-wide">類型</dt>
                      <dd className="text-sm text-gray-700 font-medium mt-0.5">{categoryLabels[item.category]}</dd>
                    </div>
                    {item.publishedAt && (
                      <div>
                        <dt className="text-xs text-gray-400 uppercase tracking-wide">完成時間</dt>
                        <dd className="text-sm text-gray-700 font-medium mt-0.5">
                          {new Date(item.publishedAt).toLocaleDateString('zh-TW', {
                            year: 'numeric',
                            month: 'long',
                          })}
                        </dd>
                      </div>
                    )}
                    {item.websiteUrl && (
                      <div>
                        <dt className="text-xs text-gray-400 uppercase tracking-wide">網站連結</dt>
                        <dd className="mt-0.5">
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-600 hover:underline"
                          >
                            前往網站 →
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Demo 按鈕 */}
                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors text-sm shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    立即體驗 Demo
                  </a>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl p-5 text-white">
                  <h3 className="font-bold mb-1 text-sm">想要類似的成果？</h3>
                  <p className="text-white/75 text-xs mb-4 leading-relaxed">
                    告訴我們您的需求，我們評估後提供報價
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center py-2.5 bg-white text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition-colors text-sm"
                  >
                    免費諮詢
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
