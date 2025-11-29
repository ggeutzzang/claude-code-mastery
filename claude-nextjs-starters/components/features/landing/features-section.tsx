/**
 * Features 섹션 컴포넌트
 * 주요 기능 소개
 */
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Zap,
  Palette,
  Code2,
  Shield,
  Smartphone,
  Box
} from 'lucide-react'

const features = [
  {
    title: '빠른 성능',
    description: 'Next.js 16 App Router와 React 19로 최적화된 초고속 성능을 경험하세요.',
    icon: Zap,
  },
  {
    title: '아름다운 디자인',
    description: 'Tailwind CSS v4와 ShadcnUI로 구현된 모던하고 세련된 UI 컴포넌트.',
    icon: Palette,
  },
  {
    title: '타입 안전성',
    description: 'TypeScript로 구현된 완벽한 타입 시스템으로 안전한 개발 경험 제공.',
    icon: Code2,
  },
  {
    title: '보안 우선',
    description: '최신 보안 모범 사례를 적용한 안전한 코드베이스.',
    icon: Shield,
  },
  {
    title: '반응형 디자인',
    description: '모든 디바이스에서 완벽하게 작동하는 반응형 레이아웃.',
    icon: Smartphone,
  },
  {
    title: '컴포넌트 라이브러리',
    description: '재사용 가능한 다양한 UI 컴포넌트와 훅을 즉시 사용 가능.',
    icon: Box,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
          강력한 기능들
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          현대적인 웹 애플리케이션 개발에 필요한 모든 것이 준비되어 있습니다.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={item}>
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
