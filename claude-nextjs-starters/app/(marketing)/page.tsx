/**
 * 랜딩 페이지
 * Hero, Features, CTA 섹션으로 구성
 */
import { HeroSection } from '@/components/features/landing/hero-section'
import { FeaturesSection } from '@/components/features/landing/features-section'
import { CTASection } from '@/components/features/landing/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
