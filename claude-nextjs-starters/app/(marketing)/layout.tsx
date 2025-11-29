/**
 * 마케팅 레이아웃
 * 헤더와 푸터를 포함하는 공개 페이지 레이아웃
 */
import { SiteHeader } from '@/components/layouts/site-header'
import { SiteFooter } from '@/components/layouts/site-footer'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
