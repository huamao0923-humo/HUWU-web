import Link from 'next/link'
import type { Plan } from '@/data/pricing'

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-brand-500 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function PlanCard({ plan }: { plan: Plan }) {
  const isPopular = plan.popular === true
  const ctaLabel = plan.name === '顧問月費' ? '了解詳情' : '立即諮詢'

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        isPopular
          ? 'ring-2 ring-brand-500 border-transparent'
          : 'border border-gray-100'
      }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
            最多人選
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 pt-8">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
          <p className="text-2xl font-bold text-brand-600 mt-1">{plan.price}</p>
          <p className="text-sm text-gray-400 mt-1">{plan.delivery}</p>
        </div>

        {/* Design specs */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            設計規格
          </p>
          <ul className="space-y-2">
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
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            後續維護
          </p>
          <ul className="space-y-2">
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
          <div className="mb-4 pt-3 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
              維護月費
            </p>
            <p className="text-sm text-brand-600 font-medium">{plan.maintenanceFee}</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Link
            href="/contact"
            className={`w-full justify-center ${isPopular ? 'btn-primary' : 'btn-secondary'}`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
