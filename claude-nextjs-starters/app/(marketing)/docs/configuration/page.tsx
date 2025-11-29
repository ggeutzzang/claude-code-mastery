import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Construction } from 'lucide-react'

export const metadata = {
  title: '설정 - Next.js Starter',
  description: '프로젝트 설정 및 환경 변수 관리',
}

export default function ConfigurationPage() {
  return (
    <div className="container py-12">
      {/* 뒤로 가기 */}
      <Link href="/docs">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          문서 목록으로
        </Button>
      </Link>

      {/* 준비 중 메시지 */}
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Construction className="h-8 w-8 text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl">설정</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6 text-muted-foreground">
              이 페이지는 현재 준비 중입니다.
              <br />
              곧 유용한 콘텐츠로 채워질 예정입니다.
            </p>
            <Link href="/docs">
              <Button>문서 목록으로 돌아가기</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
