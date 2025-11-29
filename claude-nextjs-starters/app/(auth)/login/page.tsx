/**
 * 로그인 페이지
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LoginForm } from '@/components/features/auth/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '로그인 | Next.js Starter Kit',
  description: '계정에 로그인하세요',
}

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">로그인</CardTitle>
        <CardDescription>
          이메일과 비밀번호를 입력하여 로그인하세요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
