'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ServiceItem {
  id: string
  title: string
  desc: string
  features: string[]
}

// ── Color config (explicit — no dynamic Tailwind) ──
const cfg: Record<string, {
  nav: string
  pill: string
  iconBg: string
  heroBg: string
  heroAccent: string
  featureDot: string
  badge: string
  btnPrimary: string
}> = {
  website: {
    nav:        'bg-brand-50 text-brand-700 border-l-2 border-brand-500',
    pill:       'bg-brand-600 text-white border-brand-600',
    iconBg:     'bg-brand-600',
    heroBg:     'from-brand-500 to-brand-700',
    heroAccent: 'bg-blue-300',
    featureDot: 'bg-brand-500',
    badge:      'bg-brand-50 text-brand-700 border border-brand-200',
    btnPrimary: 'bg-gradient-to-r from-brand-500 to-brand-700 hover:opacity-90',
  },
  ecommerce: {
    nav:        'bg-orange-50 text-orange-700 border-l-2 border-orange-500',
    pill:       'bg-orange-500 text-white border-orange-500',
    iconBg:     'bg-orange-500',
    heroBg:     'from-orange-400 to-red-500',
    heroAccent: 'bg-yellow-300',
    featureDot: 'bg-orange-400',
    badge:      'bg-orange-50 text-orange-700 border border-orange-200',
    btnPrimary: 'bg-gradient-to-r from-orange-400 to-red-500 hover:opacity-90',
  },
  system: {
    nav:        'bg-purple-50 text-purple-700 border-l-2 border-purple-500',
    pill:       'bg-purple-600 text-white border-purple-600',
    iconBg:     'bg-purple-600',
    heroBg:     'from-purple-500 to-purple-800',
    heroAccent: 'bg-pink-300',
    featureDot: 'bg-purple-400',
    badge:      'bg-purple-50 text-purple-700 border border-purple-200',
    btnPrimary: 'bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90',
  },
  ai: {
    nav:        'bg-violet-50 text-violet-700 border-l-2 border-violet-500',
    pill:       'bg-violet-600 text-white border-violet-600',
    iconBg:     'bg-violet-600',
    heroBg:     'from-violet-500 to-indigo-700',
    heroAccent: 'bg-cyan-300',
    featureDot: 'bg-violet-400',
    badge:      'bg-violet-50 text-violet-700 border border-violet-200',
    btnPrimary: 'bg-gradient-to-r from-violet-500 to-indigo-600 hover:opacity-90',
  },
  tech: {
    nav:        'bg-teal-50 text-teal-700 border-l-2 border-teal-500',
    pill:       'bg-teal-600 text-white border-teal-600',
    iconBg:     'bg-teal-600',
    heroBg:     'from-teal-500 to-emerald-700',
    heroAccent: 'bg-lime-300',
    featureDot: 'bg-teal-400',
    badge:      'bg-teal-50 text-teal-700 border border-teal-200',
    btnPrimary: 'bg-gradient-to-r from-teal-500 to-emerald-600 hover:opacity-90',
  },
}

// ── Professional Tech-style SVG Icons ──
const ServiceIcon = ({ type, className = '' }: { type: string; className?: string }) => {
  const base = `fill-none stroke-current ${className}`
  switch (type) {
    // 瀏覽器 + 游標 + 連線節點 — 網站開發感
    case 'website':
      return (
        <svg viewBox="0 0 32 32" className={base} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          {/* 瀏覽器框 */}
          <rect x="2" y="4" width="28" height="21" rx="2.5" />
          <path d="M2 10h28" />
          {/* 三點 */}
          <circle cx="6.5" cy="7" r="1" fill="currentColor" stroke="none" />
          <circle cx="10"  cy="7" r="1" fill="currentColor" stroke="none" />
          <circle cx="13.5" cy="7" r="1" fill="currentColor" stroke="none" />
          {/* URL bar */}
          <rect x="17" y="5.5" width="10" height="3" rx="1.5" opacity="0.4" fill="currentColor" stroke="none" />
          {/* 網格線 */}
          <path d="M2 17.5h28M16 10v15" strokeWidth="1" opacity="0.4" />
          {/* 游標 */}
          <path d="M9 13.5l1.5 5 1.5-2 2 2.5-1 .7-1.8-2.3-1.5 2.3z" strokeWidth="1.2" />
          {/* 底座 */}
          <path d="M10 28l3-3 3 3M16 25v3" strokeWidth="1.5" />
        </svg>
      )
    // 購物袋 + 條碼 + 支付閃電 — 電商感
    case 'ecommerce':
      return (
        <svg viewBox="0 0 32 32" className={base} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          {/* 購物袋 */}
          <path d="M7 4L4 9v17a2.5 2.5 0 002.5 2.5h19A2.5 2.5 0 0028 26V9l-3-5z" />
          <path d="M4 9h24" />
          {/* 提把弧線 */}
          <path d="M21 14a5 5 0 01-10 0" />
          {/* 條碼 */}
          <path d="M10 20v5M12 19v6M14 20v5M16 19v6M18 20v5M20 19v6M22 20v5" strokeWidth="1" />
          {/* 閃電 / 付款 */}
          <path d="M19 7l-2.5 4h2l-2.5 4" strokeWidth="1.2" />
        </svg>
      )
    // 伺服器堆疊 + 電路節點 — 後台系統感
    case 'system':
      return (
        <svg viewBox="0 0 32 32" className={base} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          {/* 三層伺服器 */}
          <rect x="3" y="3"    width="26" height="7"   rx="2" />
          <rect x="3" y="12.5" width="26" height="7"   rx="2" />
          <rect x="3" y="22"   width="26" height="7"   rx="2" />
          {/* 狀態燈 */}
          <circle cx="8" cy="6.5"  r="1.2" fill="currentColor" stroke="none" />
          <circle cx="8" cy="16"   r="1.2" fill="currentColor" stroke="none" />
          <circle cx="8" cy="25.5" r="1.2" fill="currentColor" stroke="none" />
          {/* 進度條 */}
          <rect x="13" y="5.5" width="12" height="2" rx="1" opacity="0.5" fill="currentColor" stroke="none" />
          <rect x="13" y="15"  width="8"  height="2" rx="1" opacity="0.5" fill="currentColor" stroke="none" />
          <rect x="13" y="24.5" width="10" height="2" rx="1" opacity="0.5" fill="currentColor" stroke="none" />
          {/* 電路連線 */}
          <path d="M8 10v2.5M8 19.5V22M24 10v2.5M24 19.5V22" strokeWidth="1" opacity="0.6" />
        </svg>
      )
    // 神經網路 + 星光 + 電路 — AI感
    case 'ai':
      return (
        <svg viewBox="0 0 32 32" className={base} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          {/* 星光主體 (sparkle) */}
          <path d="M16 3v5M16 24v5M3 16h5M24 16h5" strokeWidth="1.2" opacity="0.7" />
          <path d="M7.1 7.1l3.5 3.5M21.4 21.4l3.5 3.5M7.1 24.9l3.5-3.5M21.4 10.6l3.5-3.5" strokeWidth="1" opacity="0.5" />
          {/* 中心圓 */}
          <circle cx="16" cy="16" r="5" />
          {/* 神經連接點 */}
          <circle cx="16" cy="3"  r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16" cy="29" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="3"  cy="16" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="29" cy="16" r="1.5" fill="currentColor" stroke="none" />
          {/* 中心細節 */}
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" opacity="0.6" />
          {/* 小星 */}
          <path d="M24 5v2M25 6h-2" strokeWidth="1.5" />
          <path d="M7 25v2M8 26H6" strokeWidth="1.5" />
        </svg>
      )
    // 扳手 + 電路齒輪 + 程式碼括號 — 技術服務感
    case 'tech':
      return (
        <svg viewBox="0 0 32 32" className={base} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          {/* 齒輪外圈 */}
          <path d="M13 3.5l-1.2 2.8a9 9 0 00-2.5 1.4L6.5 7l-2.5 4.3 2.1 2.1a9.1 9.1 0 000 2.8l-2.1 2.1L6.5 22.6l2.8-1.2a9 9 0 002.5 1.4l1.2 2.7h5l1.2-2.7a9 9 0 002.5-1.4l2.8 1.2 2.5-4.3-2.1-2.1a9.1 9.1 0 000-2.8l2.1-2.1L25.5 7l-2.8 1.2a9 9 0 00-2.5-1.4L19 4z" strokeWidth="1.3" />
          {/* 中心圓 */}
          <circle cx="16" cy="16" r="4" />
          {/* 程式碼符號 */}
          <path d="M7 29l2.5-3-2.5-3" strokeWidth="1.5" />
          <path d="M14 29l-2.5-3 2.5-3" strokeWidth="1.5" />
          <path d="M16.5 22.5l2 7" strokeWidth="1.5" />
        </svg>
      )
    default:
      return null
  }
}

// ── Decorative circuit-line background for hero panel ──
const HeroPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="2" fill="white" />
        <path d="M20 0v8M20 32v8M0 20h8M32 20h8" stroke="white" strokeWidth="1" />
        <circle cx="20" cy="20" r="6" fill="none" stroke="white" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
)

export default function ServicesLayout({ sections }: { sections: ServiceItem[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')
  const active = sections.find(s => s.id === activeId) ?? sections[0]
  const c = cfg[active?.id ?? 'website']

  return (
    <section className="bg-gray-50/80 py-10 md:py-14">
      <div className="container-custom">
        <div className="flex gap-6 lg:gap-8 items-start">

          {/* ── Sticky Sidebar ── */}
          <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-5 py-4 bg-gradient-to-r from-brand-500 to-brand-700 flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/80 shrink-0">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  <p className="text-sm font-bold text-white tracking-wider uppercase">服務項目</p>
                </div>

                {/* Nav items */}
                <nav className="p-2 space-y-1">
                  {sections.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setActiveId(s.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-3.5 rounded-xl font-semibold transition-all duration-200 text-left group ${
                        activeId === s.id
                          ? cfg[s.id].nav
                          : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {/* Icon container */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        activeId === s.id
                          ? cfg[s.id].iconBg + ' shadow-sm'
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        <ServiceIcon
                          type={s.id}
                          className={`w-5 h-5 ${activeId === s.id ? 'text-white' : 'text-gray-500'}`}
                        />
                      </div>
                      {/* Label — text-lg = 2 levels up from text-sm */}
                      <span className="text-lg leading-tight">{s.title}</span>
                      {/* Active chevron */}
                      {activeId === s.id && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-auto shrink-0 opacity-50">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      )}
                    </button>
                  ))}
                </nav>

                {/* Footer hint */}
                <div className="mx-3 mb-3 px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed">點擊項目查看各服務的詳細功能說明</p>
                </div>
              </div>
            </div>
          </aside>

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">

            {/* Mobile pill nav */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-5 lg:hidden">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${
                    activeId === s.id
                      ? cfg[s.id].pill
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <ServiceIcon type={s.id} className="w-4 h-4" />
                  {s.title}
                </button>
              ))}
            </div>

            {/* ── Content Panel ── */}
            {active && (
              <div key={active.id} className="rounded-2xl border border-gray-200 shadow-card overflow-hidden bg-white">

                {/* ── Top hero area ── */}
                <div className="flex flex-col sm:flex-row">

                  {/* Left: gradient visual panel */}
                  <div className={`relative sm:w-52 md:w-60 shrink-0 flex flex-col items-center justify-center py-10 px-6 overflow-hidden bg-gradient-to-br ${c.heroBg}`}>
                    <HeroPattern />
                    <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full ${c.heroAccent} opacity-20 blur-2xl`} />
                    <div className={`absolute -bottom-6 -left-6 w-24 h-24 rounded-full ${c.heroAccent} opacity-15 blur-xl`} />

                    {/* Main icon box */}
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-xl mb-4">
                      {/* Inner glow ring */}
                      <div className="absolute inset-2 rounded-xl bg-white/10" />
                      <ServiceIcon type={active.id} className="relative z-10 w-12 h-12 text-white" />
                    </div>
                    <p className="relative z-10 text-white/90 text-sm font-semibold tracking-wide text-center">{active.title}</p>
                  </div>

                  {/* Right: title + description — badge removed, only h2 */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                      {active.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base font-light">
                      {active.desc}
                    </p>
                  </div>
                </div>

                {/* ── Features ── */}
                <div className="px-6 md:px-8 py-5 bg-gray-50/60 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-1 h-4 rounded-full ${c.featureDot}`} />
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">包含功能</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                    {active.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 py-2 border-b border-dashed border-gray-200/80 last:border-0">
                        <svg className="w-4 h-4 shrink-0 text-gray-400" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
                          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CTA footer ── */}
                <div className="px-6 md:px-8 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3 bg-white">
                  <Link
                    href="/contact"
                    className={`flex-1 text-center py-2.5 px-6 rounded-xl font-semibold text-sm text-white transition-all shadow-md hover:shadow-lg active:scale-[0.98] ${c.btnPrimary}`}
                  >
                    立即諮詢
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex-1 text-center py-2.5 px-6 rounded-xl font-semibold text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    查看報價 →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
