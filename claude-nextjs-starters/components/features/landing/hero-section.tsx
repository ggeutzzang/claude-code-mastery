/**
 * Hero 섹션 컴포넌트
 * 랜딩 페이지 메인 섹션
 */
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'
import { ROUTES } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-8 py-24 text-center md:py-32 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-[980px] flex-col items-center gap-4"
      >
        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          모던 웹 개발을 위한
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {' '}
            완벽한 스타터킷
          </span>
        </h1>

        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Next.js 16, TypeScript, Tailwind CSS v4, ShadcnUI로 구성된 프로덕션 레디 스타터킷입니다.
          바로 시작하고, 빠르게 구축하세요.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        <Button size="lg" asChild>
          <Link href={ROUTES.DASHBOARD}>
            시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 w-full max-w-5xl"
      >
        <div className="relative rounded-xl border bg-card p-2 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&q=80"
            alt="Next.js Starter Kit Dashboard Preview"
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
