import Link from 'next/link'
import { FileText, BookOpen, Code, Palette, Zap, Settings } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: '문서 - Next.js Starter',
  description: 'Next.js 스타터킷 사용 가이드 및 문서를 확인하세요.',
}

const docSections = [
  {
    title: '시작하기',
    description: '프로젝트 설치 및 초기 설정 방법',
    icon: Zap,
    href: '/docs/getting-started',
  },
  {
    title: '컴포넌트',
    description: '재사용 가능한 UI 컴포넌트 사용법',
    icon: Code,
    href: '/docs/components',
  },
  {
    title: '스타일링',
    description: 'Tailwind CSS 및 테마 커스터마이징',
    icon: Palette,
    href: '/docs/styling',
  },
  {
    title: '설정',
    description: '프로젝트 설정 및 환경 변수 관리',
    icon: Settings,
    href: '/docs/configuration',
  },
  {
    title: 'API 참조',
    description: '유틸리티 함수 및 훅 API 문서',
    icon: FileText,
    href: '/docs/api-reference',
  },
  {
    title: '가이드',
    description: '상세한 사용 가이드 및 튜토리얼',
    icon: BookOpen,
    href: '/docs/guides',
  },
]

export default function DocsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      {/* 헤더 */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">문서</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Next.js 스타터킷을 효과적으로 사용하기 위한 모든 정보를 제공합니다.
        </p>
      </div>

      {/* 문서 섹션 그리드 */}
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {docSections.map((section) => {
          const Icon = section.icon
          return (
            <Link key={section.href} href={section.href}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Quick Start 섹션 */}
      <div className="mx-auto mt-16 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>빠른 시작</CardTitle>
            <CardDescription>몇 가지 명령어로 프로젝트를 시작할 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">1. 프로젝트 클론</h3>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                <code>git clone https://github.com/yourusername/nextjs-starter.git</code>
              </pre>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">2. 의존성 설치</h3>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                <code>npm install</code>
              </pre>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">3. 개발 서버 실행</h3>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                <code>npm run dev</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
