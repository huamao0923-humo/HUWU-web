'use client'

import { useState } from 'react'

const serviceOptions = [
  { value: 'website', label: '官方網站建置' },
  { value: 'system', label: '管理系統開發' },
  { value: 'api', label: 'API 整合/自動化' },
  { value: 'other', label: '其他需求' },
]

const budgetOptions = [
  { value: 'under-30k', label: 'NT$30,000 以下' },
  { value: '30k-80k', label: 'NT$30,000 - 80,000' },
  { value: '80k-200k', label: 'NT$80,000 - 200,000' },
  { value: 'above-200k', label: 'NT$200,000 以上' },
  { value: 'unsure', label: '尚不確定' },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      serviceType: (form.elements.namedItem('serviceType') as HTMLSelectElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message || '送出失敗，請稍後再試')
      }

      setStatus('success')
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err.message || '送出失敗，請稍後再試')
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-12 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">感謝您的來信！</h3>
        <p className="text-gray-500 mb-6">
          我們已收到您的需求，將於 24 小時內與您聯繫。
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          再次填寫
        </button>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">填寫需求表單</h2>

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          {errorMsg || '送出失敗，請稍後再試'}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Company */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              姓名 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="王小明"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
              公司名稱
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="台灣科技有限公司"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              電話
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0912-345-678"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Service Type + Budget */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1.5">
              需求類型
            </label>
            <select
              id="serviceType"
              name="serviceType"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm bg-white"
            >
              <option value="">請選擇...</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
              預算範圍
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm bg-white"
            >
              <option value="">請選擇...</option>
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            需求說明
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="請描述您的專案需求、目標、時程等...（越詳細越好，讓我們能給您更準確的建議）"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              送出中...
            </>
          ) : (
            <>
              送出詢問表單
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          提交即表示您同意我們使用您的資訊進行業務聯繫，我們不會分享您的個人資料給第三方。
        </p>
      </form>
    </div>
  )
}
