import Link from 'next/link'
import type { Plan } from '@/data/pricing'

function CheckIcon({ popular }: { popular?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${popular ? 'text-brand-300' : 'text-brand-500'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function PlanCard({ plan, serviceId }: { plan: Plan; serviceId: string }) {
  const isPopular = plan.popular === true
  const ctaHref = `/contact?service=${serviceId}&plan=${encodeURIComponent(plan.name)}`
  const ctaLabel = plan.name === '顧問月費' ? '了解詳情' : '立即諮詢'

  return (
    <div className={`relative flex flex-col ${isPopular ? 'pt-4' : ''}`}>
      {/* Popular badge — outside the card so it's never clipped */}
      {isPopular && (
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
            最多人選
          </span>
        </div>
      )}

      {/* Card */}
      <div
        className={`relative flex flex-col flex-1 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
          isPopular
            ? 'shadow-xl ring-2 ring-brand-500 ring-offset-2'
            : 'border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-200'
        }`}
      >

      {/* ── Header ── */}
      <div className="relative bg-white px-6 pt-7 pb-5 border-b border-gray-100 overflow-hidden">
        {/* Popular: top accent bar */}
        {isPopular && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600" />
        )}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{plan.name}</h3>
        <p className={`text-2xl font-bold tracking-tight ${isPopular ? 'text-brand-600' : 'text-brand-600'}`}>
          {plan.price}
        </p>
        <div className="flex items-center gap-1.5 mt-2">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <p className="text-sm text-gray-400">{plan.delivery}</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 px-6 py-5 bg-white">

        {/* Design specs */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-1 h-3.5 rounded-full bg-brand-400" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">設計規格</p>
          </div>
          <ul className="space-y-1.5">
            {plan.designSpecs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckIcon />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Maintenance */}
        <div className="mb-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-1 h-3.5 rounded-full bg-brand-400" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">後續維護</p>
          </div>
          <ul className="space-y-1.5">
            {plan.maintenance.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Maintenance fee */}
        {plan.maintenanceFee && (
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-brand-50 text-brand-700">
              <svg className="w-3.5 h-3.5 shrink-0 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
              </svg>
              <span className="font-medium text-xs">{plan.maintenanceFee}</span>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-5">
          <Link
            href={ctaHref}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
              isPopular
                ? 'btn-primary'
                : 'btn-secondary'
            }`}
          >
            {ctaLabel}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
