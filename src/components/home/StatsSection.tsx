// Path: src/components/home/StatsSection.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: string
  label: string
  icon?: string
}

interface StatsSectionProps {
  stats: Stat[]
}

// ── Inline SVG icons ───────────────────────────────────────────────────────

function IconTarget({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function IconStar({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function IconRocket({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  )
}

function IconShield({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

// Icon map: 以原本 emoji 作為 key 對應 SVG icon
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  '🎯': IconTarget,
  '⭐': IconStar,
  '🚀': IconRocket,
  '💎': IconShield,
}

// Icon color map
const COLOR_MAP: Record<string, string> = {
  '🎯': 'text-brand-500',
  '⭐': 'text-yellow-400',
  '🚀': 'text-sky-500',
  '💎': 'text-emerald-500',
}

// ── CountUp animation ──────────────────────────────────────────────────────

function CountUp({ value }: { value: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const numMatch = value.match(/\d+/)
          if (!numMatch) {
            setDisplay(value)
            return
          }
          const target = parseInt(numMatch[0])
          const suffix = value.replace(/\d+/, '')
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setDisplay(value)
              clearInterval(timer)
            } else {
              setDisplay(Math.floor(current) + suffix)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}</span>
}

// ── Main component ─────────────────────────────────────────────────────────

export default function StatsSection({ stats }: StatsSectionProps) {
  const defaultStats: Stat[] = [
    { value: '200+', label: '完成專案', icon: '🎯' },
    { value: '96%',  label: '客戶滿意', icon: '⭐' },
    { value: '14天', label: '平均交付', icon: '🚀' },
    { value: '6年',  label: '專業經驗', icon: '💎' },
  ]

  const displayStats = stats?.length ? stats : defaultStats

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayStats.map((stat, i) => {
            const IconComponent = stat.icon ? ICON_MAP[stat.icon] : undefined
            const iconColor = stat.icon ? (COLOR_MAP[stat.icon] ?? 'text-brand-500') : 'text-brand-500'

            return (
              <div
                key={i}
                className="text-center group p-6 rounded-2xl hover:bg-brand-50 transition-colors duration-300"
              >
                {IconComponent && (
                  <div className={`flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold text-gray-900 tabular-nums">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500">{stat.label}</div>
                <div className="mt-3 w-8 h-0.5 bg-brand-400 mx-auto rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
