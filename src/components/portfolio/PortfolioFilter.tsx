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
  website: '官方網站',
  system:  '管理系統',
  api:     'API 整合',
}

const categoryColors: Record<string, string> = {
  website: 'bg-blue-100 text-blue-700',
  system:  'bg-purple-100 text-purple-700',
  api:     'bg-emerald-100 text-emerald-700',
}

const categoryTagColors: Record<string, string> = {
  website: 'bg-blue-50 text-blue-700 border-blue-200',
  system:  'bg-purple-50 text-purple-700 border-purple-200',
  api:     'bg-emerald-50 text-emerald-700 border-emerald-200',
}

const categoryOrder = ['system', 'website', 'api']

const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
  <Link
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
)

export default function PortfolioFilter({ items }: { items: PortfolioItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Group items by category
  const grouped: Record<string, PortfolioItem[]> = {}
  categoryOrder.forEach(cat => {
    grouped[cat] = items.filter(i => i.category === cat)
  })

  // Get all categories available
  const allCategories = categoryOrder.filter(cat => grouped[cat].length > 0)

  // Filter by selected category
  const categoriesToDisplay = selectedCategory ? [selectedCategory] : allCategories

  return (
    <div className="space-y-12">
      {/* Category Filter Tags */}
      <div className="flex flex-wrap gap-3 pb-8 border-b border-gray-200">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            !selectedCategory
              ? 'bg-brand-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all border ${
              selectedCategory === category
                ? 'bg-brand-600 text-white border-brand-600'
                : `border-gray-200 text-gray-700 hover:border-gray-300 ${categoryTagColors[category]}`
            }`}
          >
            {categoryLabels[category]} <span className="ml-1 text-sm">({grouped[category].length})</span>
          </button>
        ))}
      </div>

      {/* Portfolio Sections */}
      <div className="space-y-16">
        {categoriesToDisplay.map((category) => {
          const categoryItems = grouped[category]
          if (categoryItems.length === 0) return null

          return (
            <div key={category}>
              {/* Category header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {categoryLabels[category]} <span className="text-gray-400 font-normal">({categoryItems.length})</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-transparent rounded-full"></div>
              </div>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryItems.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
