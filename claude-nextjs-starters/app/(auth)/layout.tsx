/**
 * 인증 레이아웃
 * 중앙 정렬 카드 레이아웃
 */
import { Logo } from '@/components/common/logo'
import { ThemeToggle } from '@/components/common/theme-toggle'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* 우측 상단 테마 토글 */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* 상단 로고 */}
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>

      {/* 메인 컨텐츠 - 완전 중앙 정렬 */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </div>
  )
}
