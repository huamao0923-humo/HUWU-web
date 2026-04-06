'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PortfolioMockup from './PortfolioMockup'

interface PortfolioItem {
  id: string
  title: string
  client: string
  category: string
  shortDescription: string
  slug: string
  coverImage?: { url?: string; alt?: string }
  techTags?: { tag: string }[]
  results?: { metric: string; value: string }[]
  demoAvailable?: boolean
  demoUrl?: string
}

const categoryLabels: Record<string, string> = {
  all:     '全部',
  website: '官方網站',
  system:  '管理系統',
  api:     'API 整合',
}

const categoryColors: Record<string, string> = {
  website: 'bg-blue-100 text-blue-700',
  system:  'bg-purple-100 text-purple-700',
  api:     'bg-emerald-100 text-emerald-700',
}

export default function PortfolioFilter({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? items : items.filter(i => i.category === active)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === key
                ? 'bg-brand-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-brand-50 hover:text-brand-600'
            }`}
          >
            {label}
            {key !== 'all' && (
              <span className={`ml-1.5 text-xs ${active === key ? 'opacity-70' : 'text-gray-400'}`}>
                ({items.filter(i => i.category === key).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="card group overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Cover */}
              <div className="relative h-52 bg-gradient-to-br from-brand-50 to-brand-100 overflow-hidden">
                {item.coverImage?.url ? (
                  <Image
                    src={item.coverImage.url}
                    alt={item.coverImage.alt || item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <PortfolioMockup slug={item.slug} index={0} size="card" />
                )}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}>
                    {categoryLabels[item.category] || item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs text-gray-400 font-medium mb-1">{item.client}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{item.shortDescription}</p>

                {item.techTags && item.techTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.techTags.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{t.tag}</span>
                    ))}
                  </div>
                )}

                {item.results && item.results.length > 0 && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                    {item.results.slice(0, 2).map((r, ri) => (
                      <div key={ri}>
                        <div className="text-lg font-bold text-brand-600">{r.value}</div>
                        <div className="text-xs text-gray-400">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">此分類尚無案例</h3>
          <button onClick={() => setActive('all')} className="text-brand-600 text-sm hover:underline mt-1">
            查看全部案例
          </button>
        </div>
      )}
    </>
  )
}
