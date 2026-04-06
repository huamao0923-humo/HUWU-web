import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
}

export default function CTASection({
  title = '準備好開始您的數位轉型了嗎？',
  subtitle = '立即聯繫我們，享受免費專案評估與諮詢服務',
  buttonText = '立即免費諮詢',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500" />
      <div className="absolute inset-0 dot-pattern opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          現在可接洽新專案
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/portfolio"
            className="btn-outline-white text-lg px-8 py-4"
          >
            查看成功案例
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {[
            { icon: '✅', label: '免費評估' },
            { icon: '📞', label: '快速回覆' },
            { icon: '🔒', label: 'NDA 保密' },
            { icon: '🚀', label: '14天交付' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
