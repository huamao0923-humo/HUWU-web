// Path: src/components/layout/Navbar.tsx

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LogoIcon from '@/components/layout/LogoIcon'

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/services', label: '服務項目' },
  { href: '/portfolio', label: '成功案例' },
  { href: '/pricing', label: '方案報價' },
  { href: '/about', label: '關於我們' },
]

export default function Navbar({ settings }: { settings: any }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="華宇資訊科技 — 回首頁"
          >
            {/* 桌面版：完整 Logo（圖示 + 文字） */}
            <span className="hidden sm:block transition-opacity duration-200 group-hover:opacity-80">
              <LogoIcon variant="light" width={280} />
            </span>

            {/* 手機版：只顯示圖示 */}
            <span className="block sm:hidden transition-transform duration-200 group-hover:scale-105">
              <LogoIcon variant="light" iconOnly />
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm hidden sm:inline-flex">
              免費諮詢
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? '關閉選單' : '開啟選單'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                免費諮詢
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
