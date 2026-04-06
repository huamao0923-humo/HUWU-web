import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-brand-500/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">找不到這個頁面</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          您訪問的頁面不存在或已被移動，請確認網址是否正確。
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">回到首頁</Link>
          <Link href="/contact" className="btn-secondary">聯絡我們</Link>
        </div>
      </div>
    </div>
  )
}
