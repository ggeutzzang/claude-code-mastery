/**
 * CTA (Call To Action) 섹션 컴포넌트
 * 행동 유도 섹션
 */
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '@/lib/constants'

export function CTASection() {
  return (
    <section className="container py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[980px] flex-col items-center gap-8 rounded-2xl border bg-card p-12 text-center shadow-lg"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
          지금 바로 시작하세요
        </h2>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          몇 분 안에 프로젝트를 설정하고 아름다운 웹 애플리케이션을 만들어보세요.
          모든 도구와 컴포넌트가 준비되어 있습니다.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={ROUTES.DASHBOARD}>
              대시보드 시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={ROUTES.DOCS}>
              문서 보기
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
