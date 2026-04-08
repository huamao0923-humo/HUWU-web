'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLink() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: value }),
      })
      if (res.ok) {
        setOpen(false)
        setValue('')
        setError(false)
        router.push('/admin')
      } else {
        setError(true)
        setValue('')
      }
    } catch {
      setError(true)
      setValue('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => { setOpen(true); setError(false); setValue('') }}
        className="hover:text-white transition-colors text-gray-400 text-sm"
      >
        後台管理
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 mx-4">
            <h2 className="text-lg font-bold text-gray-900 mb-1">後台管理</h2>
            <p className="text-sm text-gray-500 mb-5">請輸入管理員密碼</p>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={value}
                onChange={e => { setValue(e.target.value); setError(false) }}
                placeholder="輸入密碼"
                autoFocus
                disabled={loading}
                className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none transition-colors mb-1 ${
                  error ? 'border-red-400 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                }`}
              />
              {error && <p className="text-xs text-red-500 mb-3">密碼錯誤，請再試一次</p>}
              {!error && <div className="mb-3" />}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => { setOpen(false); setValue(''); setError(false) }}
                  disabled={loading}
                  className="flex-1 border border-gray-300 text-gray-600 rounded-lg py-2 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? '驗證中...' : '確認'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
