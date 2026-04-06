// Path: src/components/layout/LogoIcon.tsx

interface LogoIconProps {
  /** 'light' = 淺色背景（預設）  'dark' = 深色背景 */
  variant?: 'light' | 'dark'
  /** 是否只顯示圖示（不含文字），適合 Favicon、小空間 */
  iconOnly?: boolean
  /** 自訂寬度，預設根據 iconOnly 自動調整 */
  width?: number
}

export default function LogoIcon({
  variant = 'light',
  iconOnly = false,
  width,
}: LogoIconProps) {
  const isLight = variant === 'light'

  // 文字顏色
  const mainTextFill   = isLight ? 'url(#text-grad)'   : 'url(#text-grad-dark)'
  const subTextFill    = isLight ? '#3D8ED4'            : '#93c5fd'
  const dividerStart   = isLight ? '#1A6BD9'            : '#93c5fd'

  const defaultWidth = iconOnly ? 44 : 220
  const svgWidth  = width ?? defaultWidth
  const svgHeight = iconOnly ? 44 : Math.round(48 * (svgWidth / 220))

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={iconOnly ? '0 0 44 44' : '0 0 220 48'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="華宇資訊科技"
      role="img"
    >
      <defs>
        {/* Icon gradient */}
        <linearGradient id="icon-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A6BD9" />
          <stop offset="1" stopColor="#1150A8" />
        </linearGradient>

        {/* Text gradient - light */}
        <linearGradient id="text-grad" x1="56" y1="0" x2="180" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A6BD9" />
          <stop offset="1" stopColor="#1150A8" />
        </linearGradient>

        {/* Text gradient - dark */}
        <linearGradient id="text-grad-dark" x1="56" y1="0" x2="180" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7dc3ff" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>

        {/* Divider fade */}
        <linearGradient id="divider-grad" x1="56" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor={dividerStart} />
          <stop offset="1" stopColor={dividerStart} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── D-style icon: rounded square ── */}
      <rect x="2" y="2" width="40" height="40" rx="11" fill="url(#icon-grad)" />

      {/* H — left bar */}
      <rect x="12" y="11" width="4.5" height="22" rx="2.2" fill="white" />
      {/* H — right bar */}
      <rect x="27.5" y="11" width="4.5" height="22" rx="2.2" fill="white" />
      {/* H — crossbar arc (upward curve = growth) */}
      <path d="M16.5 20.5 Q22 16 27.5 20.5" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Sparkle dot */}
      <circle cx="36" cy="8" r="2.5" fill="#93c5fd" />

      {/* ── Text block (hidden in iconOnly mode) ── */}
      {!iconOnly && (
        <>
          {/* Main: 華　宇 */}
          <text
            x="58"
            y="30"
            fontFamily="var(--font-noto-sans-tc), 'PingFang TC', 'Microsoft JhengHei', sans-serif"
            fontWeight="500"
            fontSize="21"
            letterSpacing="5"
            fill={mainTextFill}
          >
            華　宇
          </text>

          {/* Divider */}
          <rect x="58" y="34.5" width="106" height="1.5" rx="0.75" fill="url(#divider-grad)" />

          {/* Sub: INFOTECH · 資訊科技 */}
          <text
            x="59"
            y="44"
            fontFamily="var(--font-noto-sans-tc), 'PingFang TC', sans-serif"
            fontWeight="500"
            fontSize="8.5"
            letterSpacing="2"
            fill={subTextFill}
          >
            INFOTECH · 資訊科技
          </text>
        </>
      )}
    </svg>
  )
}
