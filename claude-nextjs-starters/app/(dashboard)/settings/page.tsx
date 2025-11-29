/**
 * 설정 페이지
 */
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '설정 | Next.js Starter Kit',
  description: '계정 및 애플리케이션 설정',
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">설정</h2>
        <p className="text-muted-foreground">
          계정 및 애플리케이션 설정 관리
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>프로필</CardTitle>
            <CardDescription>
              개인 정보 및 프로필 설정
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="홍길동" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <Button>저장</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>알림</CardTitle>
            <CardDescription>
              알림 및 이메일 설정
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              알림 설정 옵션이 여기에 표시됩니다
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
