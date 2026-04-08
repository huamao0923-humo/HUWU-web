import type { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: '聯絡我們',
  description: '聯絡華宇資訊科技，免費諮詢您的數位化需求，我們將於 24 小時內回覆。',
  openGraph: {
    title: '聯絡我們 | 華宇資訊科技',
    description: '免費諮詢數位化需求，24小時內回覆，立即填寫聯絡表單。',
    images: [{ url: '/api/og?title=聯絡我們&description=免費諮詢，24小時內回覆', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const getSettings = unstable_cache(
  async () => {
    try {
      const payload = await getPayloadClient()
      return await payload.findGlobal({ slug: 'site-settings' })
    } catch {
      return null
    }
  },
  ['site-settings'],
  { revalidate: 60 }
)

export default async function ContactPage() {
  const settings = await getSettings() as any

  const email = settings?.email || 'huamoa0923@gmail.com'
  const phone = settings?.phone || '+886-900611682'
  const address = settings?.address || '台中市北屯區軍榮街330號'
  const lineId = settings?.lineId || 'wayhome0515'

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative hero-gradient py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge-pill mx-auto mb-4">聯絡我們</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            開始您的<span className="text-gradient">數位化之旅</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            填寫表單或直接聯繫我們，我們將於 24 小時內回覆您
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">聯絡資訊</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  歡迎透過任何方式聯繫我們，我們的團隊將竭誠為您服務。
                </p>
              </div>

              {[
                { icon: '📧', label: 'Email', value: email, href: `mailto:${email}` },
                { icon: '📞', label: '電話', value: phone, href: `tel:${phone}` },
                { icon: '📍', label: '地址', value: address, href: null },
                { icon: '💬', label: 'LINE', value: lineId, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <span>{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-700 font-medium hover:text-brand-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-700 font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Working hours */}
              <div className="card p-5 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">服務時間</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>週一 - 週五</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>週六 - 週日</span>
                    <span>休息</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  線上詢問 24 小時皆可
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <div className="container-custom py-0">
          {/* Google Maps placeholder */}
          <div className="h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-sm">在此嵌入 Google Maps</p>
              <p className="text-xs mt-1">請將 Google Maps 嵌入代碼替換此處</p>
            </div>
          </div>
        </div>
        <div className="pb-8" />
      </section>
    </div>
  )
}
