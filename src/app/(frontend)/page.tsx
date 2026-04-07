import type { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'
import HeroSection from '@/components/home/HeroSection'
import ProcessSection from '@/components/home/ProcessSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import TechStackSection from '@/components/home/TechStackSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'
import { getStaticFeaturedPortfolio } from '@/data/portfolio'

export const metadata: Metadata = {
  title: '首頁',
  description: '華宇資訊科技 - 專注企業官方網站建置、管理系統開發及 API 整合，14天快速交付。',
}

const getData = unstable_cache(
  async () => {
    try {
      const payload = await getPayloadClient()
      const [homeSettings, services, portfolio, testimonials] = await Promise.all([
        payload.findGlobal({ slug: 'pages-home' }),
        payload.find({ collection: 'services', where: { showOnHome: { equals: true } }, sort: 'order', limit: 3 }),
        payload.find({ collection: 'portfolio', where: { featured: { equals: true } }, sort: '-publishedAt', limit: 3 }),
        payload.find({ collection: 'testimonials', sort: 'order', limit: 3 }),
      ])
      const portfolioItems = portfolio.docs.length > 0 ? portfolio.docs : getStaticFeaturedPortfolio(3)
      return { homeSettings, services: services.docs, portfolio: portfolioItems, testimonials: testimonials.docs }
    } catch (err) {
      console.error('Failed to fetch homepage data:', err)
      return { homeSettings: {}, services: [], portfolio: [], testimonials: [] }
    }
  },
  ['home-page-data'],
  { revalidate: 60 }
)

export default async function HomePage() {
  const { homeSettings, services, portfolio, testimonials } = await getData()

  return (
    <>
      <HeroSection data={homeSettings as any} />
      <ProcessSection />
      <WhyUsSection />
      <TechStackSection />
      <TestimonialsSection testimonials={testimonials as any[]} />
      <CTASection
        title={(homeSettings as any)?.ctaTitle}
        subtitle={(homeSettings as any)?.ctaSubtitle}
        buttonText={(homeSettings as any)?.ctaButtonText}
      />
    </>
  )
}
