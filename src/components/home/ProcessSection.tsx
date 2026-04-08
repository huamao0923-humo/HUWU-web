'use client'

const steps = [
  {
    number: '01',
    title: '需求訪談',
    desc: '深入了解您的業務目標、目標客群與功能需求，確保我們的方向完全符合您的期待。',
    detail: '免費 30 分鐘線上諮詢',
    ringColor: 'from-violet-400 to-blue-400',
    badgeColor: 'from-violet-500 to-blue-500',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
        <defs>
          <linearGradient id="g1a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
          <linearGradient id="g1b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b5fd"/>
            <stop offset="100%" stopColor="#93c5fd"/>
          </linearGradient>
          <linearGradient id="g1c" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#2563eb"/>
          </linearGradient>
          <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#8b5cf6" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Main chat bubble */}
        <rect x="6" y="8" width="38" height="28" rx="7" fill="url(#g1a)" filter="url(#f1)"/>
        {/* Bubble tail */}
        <path d="M16 36 L10 46 L26 38" fill="url(#g1a)"/>
        {/* Inner highlight */}
        <rect x="9" y="11" width="32" height="10" rx="4" fill="url(#g1b)" opacity="0.35"/>
        {/* Dots */}
        <circle cx="18" cy="22" r="3.5" fill="white" opacity="0.95"/>
        <circle cx="27" cy="22" r="3.5" fill="white" opacity="0.95"/>
        <circle cx="36" cy="22" r="3.5" fill="white" opacity="0.95"/>
        {/* Secondary bubble */}
        <rect x="28" y="30" width="28" height="20" rx="6" fill="url(#g1c)" opacity="0.9"/>
        <path d="M50 50 L56 56 L44 52" fill="url(#g1c)" opacity="0.9"/>
        {/* Lines in secondary */}
        <line x1="34" y1="38" x2="50" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <line x1="34" y1="44" x2="46" y2="44" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: '設計規劃',
    desc: '提供完整的 UI/UX 原型設計與技術架構規劃，讓您在開發前就能看到成品樣貌。',
    detail: '原型確認後再開始開發',
    ringColor: 'from-pink-400 to-rose-400',
    badgeColor: 'from-pink-500 to-rose-500',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
        <defs>
          <linearGradient id="g2a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#f43f5e"/>
          </linearGradient>
          <linearGradient id="g2b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fda4af"/>
            <stop offset="100%" stopColor="#fbcfe8"/>
          </linearGradient>
          <linearGradient id="g2c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#fbbf24"/>
          </linearGradient>
          <linearGradient id="g2pen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#ec4899"/>
          </linearGradient>
          <filter id="f2" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#ec4899" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Sketchbook */}
        <rect x="6" y="8" width="38" height="46" rx="5" fill="url(#g2a)" filter="url(#f2)"/>
        {/* Paper pages */}
        <rect x="10" y="14" width="30" height="36" rx="3" fill="white" opacity="0.95"/>
        {/* Binding spine */}
        <rect x="6" y="8" width="6" height="46" rx="3" fill="url(#g2pen)" opacity="0.8"/>
        {/* Binding holes */}
        <circle cx="9" cy="20" r="2" fill="white" opacity="0.7"/>
        <circle cx="9" cy="32" r="2" fill="white" opacity="0.7"/>
        <circle cx="9" cy="44" r="2" fill="white" opacity="0.7"/>
        {/* Wireframe elements on page */}
        <rect x="14" y="18" width="22" height="12" rx="2" stroke="url(#g2a)" strokeWidth="1.5" fill="url(#g2b)" opacity="0.5"/>
        <rect x="14" y="34" width="9" height="9" rx="2" stroke="url(#g2a)" strokeWidth="1.5" fill="none"/>
        <line x1="26" y1="36" x2="36" y2="36" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="26" y1="40" x2="34" y2="40" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        {/* Pencil */}
        <g transform="rotate(-35 48 40)">
          <rect x="42" y="22" width="7" height="24" rx="2" fill="url(#g2c)"/>
          <polygon points="42,46 49,46 45.5,56" fill="#d97706"/>
          <polygon points="43.5,50 48,50 45.5,56" fill="#fef3c7"/>
          <rect x="42" y="22" width="7" height="4" rx="2" fill="#9ca3af"/>
          <rect x="42" y="26" width="7" height="2" fill="#ec4899" opacity="0.5"/>
        </g>
      </svg>
    ),
  },
  {
    number: '03',
    title: '敏捷開發',
    desc: '採用敏捷開發模式，每週提供進度更新，確保專案按時、按質完成交付。',
    detail: '每週進度回報透明公開',
    ringColor: 'from-cyan-400 to-emerald-400',
    badgeColor: 'from-cyan-500 to-emerald-500',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
        <defs>
          <linearGradient id="g3a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4"/>
            <stop offset="100%" stopColor="#10b981"/>
          </linearGradient>
          <linearGradient id="g3b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9"/>
            <stop offset="100%" stopColor="#6ee7b7"/>
          </linearGradient>
          <linearGradient id="g3bar1" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#06b6d4"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
          <linearGradient id="g3bar2" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#10b981"/>
            <stop offset="100%" stopColor="#34d399"/>
          </linearGradient>
          <linearGradient id="g3bar3" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0891b2"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <filter id="f3" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#06b6d4" floodOpacity="0.3"/>
          </filter>
        </defs>
        {/* Terminal / code window */}
        <rect x="4" y="6" width="56" height="42" rx="6" fill="url(#g3a)" filter="url(#f3)"/>
        <rect x="4" y="6" width="56" height="12" rx="6" fill="url(#g3b)" opacity="0.3"/>
        {/* Traffic lights */}
        <circle cx="14" cy="13" r="3" fill="#f87171" opacity="0.9"/>
        <circle cx="23" cy="13" r="3" fill="#fbbf24" opacity="0.9"/>
        <circle cx="32" cy="13" r="3" fill="#34d399" opacity="0.9"/>
        {/* Code lines */}
        <rect x="10" y="26" width="8" height="3" rx="1.5" fill="#67e8f9" opacity="0.9"/>
        <rect x="21" y="26" width="14" height="3" rx="1.5" fill="white" opacity="0.7"/>
        <rect x="10" y="33" width="5" height="3" rx="1.5" fill="#a7f3d0" opacity="0.9"/>
        <rect x="18" y="33" width="20" height="3" rx="1.5" fill="white" opacity="0.5"/>
        <rect x="41" y="33" width="8" height="3" rx="1.5" fill="#67e8f9" opacity="0.7"/>
        <rect x="14" y="40" width="28" height="3" rx="1.5" fill="white" opacity="0.3"/>
        {/* Animated cursor blink - static representation */}
        <rect x="42" y="26" width="3" height="3" rx="0.5" fill="#34d399" opacity="0.9"/>
        {/* Sprint bars floating */}
        <rect x="6" y="52" width="12" height="8" rx="3" fill="url(#g3bar1)" opacity="0.9"/>
        <rect x="22" y="48" width="12" height="12" rx="3" fill="url(#g3bar2)" opacity="0.9"/>
        <rect x="38" y="50" width="12" height="10" rx="3" fill="url(#g3bar3)" opacity="0.9"/>
        <line x1="6" y1="60" x2="52" y2="60" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: '上線維護',
    desc: '協助部署上線，並提供完整的教育訓練與後續技術支援，讓您後顧無憂。',
    detail: '上線後 30 天免費支援',
    ringColor: 'from-orange-400 to-amber-400',
    badgeColor: 'from-orange-500 to-amber-500',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
        <defs>
          <linearGradient id="g4a" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
          <linearGradient id="g4b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fed7aa"/>
            <stop offset="100%" stopColor="#fde68a"/>
          </linearGradient>
          <linearGradient id="g4flame" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#fbbf24"/>
            <stop offset="60%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="g4cloud" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7dd3fc"/>
            <stop offset="100%" stopColor="#38bdf8"/>
          </linearGradient>
          <filter id="f4" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#f97316" floodOpacity="0.35"/>
          </filter>
          <filter id="f4glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {/* Cloud */}
        <ellipse cx="36" cy="18" rx="16" ry="10" fill="url(#g4cloud)" opacity="0.9"/>
        <ellipse cx="24" cy="22" rx="11" ry="8" fill="url(#g4cloud)" opacity="0.85"/>
        <ellipse cx="44" cy="24" rx="10" ry="7" fill="url(#g4cloud)" opacity="0.85"/>
        <rect x="14" y="22" width="38" height="8" rx="0" fill="url(#g4cloud)" opacity="0.85"/>
        {/* Upload arrow */}
        <line x1="33" y1="52" x2="33" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <polyline points="24,36 33,26 42,36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Rocket body */}
        <path d="M28 54 C28 54 22 46 22 38 C22 30 27 24 33 20 C39 24 44 30 44 38 C44 46 38 54 38 54 Z" fill="url(#g4a)" filter="url(#f4)"/>
        {/* Rocket window */}
        <circle cx="33" cy="38" r="5" fill="url(#g4b)" opacity="0.9"/>
        <circle cx="33" cy="38" r="3" fill="white" opacity="0.5"/>
        {/* Wings */}
        <path d="M22 44 L14 54 L22 50 Z" fill="url(#g4a)" opacity="0.8"/>
        <path d="M44 44 L52 54 L44 50 Z" fill="url(#g4a)" opacity="0.8"/>
        {/* Flame */}
        <path d="M28 54 C28 54 26 60 33 63 C40 60 38 54 38 54 C38 54 35 58 33 56 C31 58 28 54 28 54Z" fill="url(#g4flame)" filter="url(#f4glow)"/>
        {/* Stars */}
        <circle cx="10" cy="12" r="1.5" fill="#fbbf24" opacity="0.8"/>
        <circle cx="54" cy="18" r="1.5" fill="#fbbf24" opacity="0.8"/>
        <circle cx="8" cy="30" r="1" fill="#fde68a" opacity="0.6"/>
        <circle cx="57" cy="36" r="1" fill="#fde68a" opacity="0.6"/>
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section className="py-14 md:py-20 bg-blue-50 overflow-hidden">
      <style>{`
        @keyframes flowDot {
          0%   { left: -5%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 105%; opacity: 0; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.75); opacity: 0; }
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .flow-dot {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          animation: flowDot 2.8s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .flow-dot-2 { animation-delay: 0.93s; }
        .flow-dot-3 { animation-delay: 1.87s; }
        .pulse-ring {
          animation: pulse-ring 2.2s ease-out infinite;
        }
        .icon-float { animation: icon-float 3.2s ease-in-out infinite; }
        .step-card:nth-child(1) .icon-float,
        .step-card:nth-child(1) .pulse-ring { animation-delay: 0s; }
        .step-card:nth-child(2) .icon-float,
        .step-card:nth-child(2) .pulse-ring { animation-delay: 0.8s; }
        .step-card:nth-child(3) .icon-float,
        .step-card:nth-child(3) .pulse-ring { animation-delay: 1.6s; }
        .step-card:nth-child(4) .icon-float,
        .step-card:nth-child(4) .pulse-ring { animation-delay: 2.4s; }
        .connector-shimmer {
          background: linear-gradient(90deg, transparent 0%, #93c5fd 40%, #60a5fa 50%, #93c5fd 60%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge-pill mx-auto mb-4">合作流程</div>
          <h2 className="section-title">簡單四步驟，輕鬆啟動專案</h2>
          <p className="section-subtitle mx-auto">
            透明化的合作流程，讓您在每個階段都清楚掌握進度，安心無虞
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-[44px] left-[13%] right-[13%] h-[3px] rounded-full bg-blue-100 overflow-hidden">
            <div className="connector-shimmer absolute inset-0" />
            <div className="flow-dot w-10 h-[3px] rounded-full bg-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]" />
            <div className="flow-dot flow-dot-2 w-7 h-[3px] rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]" />
            <div className="flow-dot flow-dot-3 w-4 h-[3px] rounded-full bg-blue-300 shadow-[0_0_6px_2px_rgba(59,130,246,0.3)]" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="step-card flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-7">
                  {/* Pulse ring */}
                  <div className={`pulse-ring absolute inset-[-6px] rounded-full bg-gradient-to-br ${step.ringColor} pointer-events-none opacity-20`} />

                  <div className="icon-float w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border border-white/80">
                    {step.icon}
                  </div>

                  {/* Number badge */}
                  <span className={`absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br ${step.badgeColor} text-white text-xs font-bold flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
