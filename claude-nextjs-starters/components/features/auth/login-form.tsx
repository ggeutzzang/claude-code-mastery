/**
 * 로그인 폼 컴포넌트
 * React Hook Form + Zod 검증
 */
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema, type LoginFormData } from '@/lib/validations/auth'
import { ROUTES } from '@/lib/constants'

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginFormData) {
    setIsLoading(true)

    // 실제 인증 로직은 제외하고 콘솔에만 로그 출력
    console.log('로그인 데이터:', data)

    // 시뮬레이션을 위한 딜레이
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    alert('로그인 성공! (데모)')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  type="email"
                  autoComplete="email"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{' '}
          <Link href={ROUTES.REGISTER} className="font-medium text-primary hover:underline">
            회원가입
          </Link>
        </p>
      </form>
    </Form>
  )
}
