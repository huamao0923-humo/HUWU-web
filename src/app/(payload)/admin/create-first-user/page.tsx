'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateFirstUserPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', name: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) { setError('兩次輸入的密碼不一致'); return }
    if (form.password.length < 8) { setError('密碼至少需要 8 個字元'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/users/first-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password, name: form.name }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.errors?.[0]?.message || data?.message || '建立失敗，請重試')
      router.push('/admin')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '10px 14px',
    borderRadius: 10,
    border: `1.5px solid ${focused === name ? '#2B7BE5' : '#E5E7EB'}`,
    fontSize: 14,
    color: '#111827',
    background: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 6,
  }

  const fields = [
    { key: 'name', label: '姓名', type: 'text', placeholder: '例：王小明', required: false },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'admin@huwu.com.tw', required: true },
    { key: 'password', label: '密碼', type: 'password', placeholder: '至少 8 個字元', required: true },
    { key: 'confirmPassword', label: '確認密碼', type: 'password', placeholder: '再輸入一次密碼', required: true },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'system-ui, -apple-system, sans-serif', background: '#F0F7FF' }}>
      {/* Left panel */}
      <div style={{
        width: '45%',
        background: 'linear-gradient(145deg, #1A4FA0 0%, #2B7BE5 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 56px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* dot bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        {/* blob */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(40px)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 52 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#fff' }}>H</div>
            <span style={{ fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '-0.2px' }}>華宇資訊科技</span>
          </div>

          <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: 14 }}>
            歡迎使用<br />後台管理系統
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: 44 }}>
            建立您的管理員帳號，<br />開始管理網站所有內容。
          </p>

          {[
            { icon: '🌐', text: '管理官方網站所有內容' },
            { icon: '📁', text: '新增與編輯成功案例' },
            { icon: '✍️', text: '發布部落格文章' },
            { icon: '📬', text: '查看聯絡表單詢問' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 32px' }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          {/* Card */}
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 40px rgba(43,123,229,0.10)', padding: '40px 36px', border: '1px solid #E8F0FE' }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, background: '#E8F3FF', color: '#2B7BE5', fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
              ✨ 首次設定
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 4 }}>建立管理員帳號</h2>
            <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>此帳號將擁有完整的後台管理權限</p>

            {error && (
              <div style={{ marginBottom: 20, padding: '12px 14px', borderRadius: 10, background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: 13, display: 'flex', gap: 8 }}>
                <span style={{ flexShrink: 0 }}>⚠️</span>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {fields.map((field, i) => (
                <div key={field.key} style={{ marginBottom: i < fields.length - 1 ? 16 : 24 }}>
                  <label style={labelStyle}>
                    {field.label}
                    {field.required && <span style={{ color: '#EF4444', marginLeft: 3 }}>*</span>}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={(form as any)[field.key]}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    style={inputStyle(field.key)}
                    onFocus={() => setFocused(field.key)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 10,
                  border: 'none',
                  background: loading ? '#93C5FD' : 'linear-gradient(135deg, #2B7BE5 0%, #1A4FA0 100%)',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  boxShadow: loading ? 'none' : '0 4px 16px rgba(43,123,229,0.30)',
                }}
              >
                {loading ? '建立中...' : '建立管理員帳號 →'}
              </button>
            </form>

            <p style={{ textAlign: 'center', fontSize: 12, color: '#D1D5DB', marginTop: 20 }}>
              此頁面僅在首次設定時出現
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
