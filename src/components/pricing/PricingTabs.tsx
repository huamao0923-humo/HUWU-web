'use client'

import { useState } from 'react'
import type { PricingTab } from '@/data/pricing'
import PlanCard from './PlanCard'

function getGridCols(count: number) {
  if (count <= 3) return 'sm:grid-cols-2 lg:grid-cols-3'
  if (count === 4) return 'sm:grid-cols-2 lg:grid-cols-4'
  // 5 plans
  return 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
}

export default function PricingTabs({ tabs }: { tabs: PricingTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const [visible, setVisible] = useState(true)

  const handleTabChange = (id: string) => {
    if (id === activeId) return
    setVisible(false)
    setTimeout(() => {
      setActiveId(id)
      setVisible(true)
    }, 150)
  }

  const activeTab = tabs.find((t) => t.id === activeId)!

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeId === tab.id
                ? 'bg-brand-500 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        className={`transition-opacity duration-150 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          className={`grid grid-cols-1 gap-6 ${getGridCols(activeTab.plans.length)}`}
        >
          {activeTab.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} serviceId={activeTab.id} />
          ))}
        </div>

        {/* Addons table */}
        {activeTab.addons && activeTab.addons.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">加購項目</h3>
            <div className="card overflow-hidden max-w-2xl mx-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-50 border-b border-brand-100">
                    <th className="text-left py-3 px-5 font-semibold text-brand-700">功能項目</th>
                    <th className="text-right py-3 px-5 font-semibold text-brand-700">加購價格</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {activeTab.addons.map((addon, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-5 text-gray-700">{addon.name}</td>
                      <td className="py-3 px-5 text-right font-medium text-brand-600">{addon.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Note */}
        {activeTab.note && (
          <div className="mt-6 max-w-2xl mx-auto bg-brand-50 border border-brand-100 rounded-xl px-5 py-3.5">
            <p className="text-sm text-brand-700 flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {activeTab.note}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
