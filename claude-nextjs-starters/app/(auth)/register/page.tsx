/**
 * 회원가입 페이지
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RegisterForm } from '@/components/features/auth/register-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회원가입 | Next.js Starter Kit',
  description: '새 계정을 만드세요',
}

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
        <CardDescription>
          정보를 입력하여 새 계정을 만드세요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}
