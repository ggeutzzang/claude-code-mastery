/**
 * 사이트 헤더 컴포넌트
 * 마케팅 페이지용 네비게이션
 */
import Link from 'next/link'
import { Logo } from '@/components/common/logo'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { MobileNav } from './mobile-nav'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS, ROUTES } from '@/lib/constants'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-6">
          <Logo />

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href={ROUTES.LOGIN}>로그인</Link>
            </Button>
            <Button asChild>
              <Link href={ROUTES.DASHBOARD}>대시보드</Link>
            </Button>
          </nav>

          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
