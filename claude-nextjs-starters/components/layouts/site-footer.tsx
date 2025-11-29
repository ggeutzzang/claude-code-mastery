/**
 * 사이트 푸터 컴포넌트
 */
import Link from 'next/link'
import { Logo } from '@/components/common/logo'
import { Separator } from '@/components/ui/separator'
import { ROUTES } from '@/lib/constants'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 로고 및 설명 */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Next.js 16 기반의 모던 웹 스타터킷
            </p>
          </div>

          {/* 링크 섹션 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">페이지</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.HOME} className="text-muted-foreground hover:text-foreground transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href={ROUTES.BLOG} className="text-muted-foreground hover:text-foreground transition-colors">
                  블로그
                </Link>
              </li>
              <li>
                <Link href={ROUTES.DOCS} className="text-muted-foreground hover:text-foreground transition-colors">
                  문서
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">계정</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.LOGIN} className="text-muted-foreground hover:text-foreground transition-colors">
                  로그인
                </Link>
              </li>
              <li>
                <Link href={ROUTES.REGISTER} className="text-muted-foreground hover:text-foreground transition-colors">
                  회원가입
                </Link>
              </li>
              <li>
                <Link href={ROUTES.DASHBOARD} className="text-muted-foreground hover:text-foreground transition-colors">
                  대시보드
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">리소스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Next.js
                </a>
              </li>
              <li>
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  ShadcnUI
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>© {currentYear} Next.js Starter Kit. All rights reserved.</p>
          <p>
            Made with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
