import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E3F0FF',
          100: '#C7E1FF',
          200: '#8FC3FF',
          300: '#57A5FF',
          400: '#3D8ED4',
          500: '#1A6BD9',
          600: '#1150A8',
          700: '#0C3D87',
          800: '#082A66',
          900: '#041745',
        },
        sky: {
          light: '#E3F0FF',
          mid: '#3D8ED4',
          dark: '#1150A8',
        },
        accent: '#1A6BD9',
      },
      fontFamily: {
        // 標題字體：Outfit（商務信賴感）
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        // 內文字體：Noto Sans TC（繁體中文，Light 300）
        sans: ['var(--font-noto-sans-tc)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(135deg, #E8F3FF 0%, #5B9FE0 50%, #1E5CB3 100%)',
        'sky-gradient-light': 'linear-gradient(135deg, #E8F3FF 0%, #B8D9FF 100%)',
        'brand-gradient': 'linear-gradient(135deg, #2B7BE5 0%, #1E5CB3 100%)',
        'dot-pattern': 'radial-gradient(circle, #2B7BE5 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-md': '24px 24px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(43, 123, 229, 0.08)',
        'card-hover': '0 8px 40px rgba(43, 123, 229, 0.16)',
        'glass': '0 4px 24px rgba(255, 255, 255, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
