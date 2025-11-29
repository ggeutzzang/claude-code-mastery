# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, ShadcnUI를 기반으로 하는 모던 웹 스타터킷입니다. 랜딩 페이지, 대시보드, 인증 페이지, 블로그 등 다양한 프로젝트에 즉시 적용 가능한 구조를 제공합니다.

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# ESLint 실행
npm run lint

# TypeScript 타입 체크 (빌드 없이 타입만 검증)
npx tsc --noEmit

# ShadcnUI 컴포넌트 추가
npx shadcn@latest add [component-name]
```

## 프로젝트 아키텍처

### 라우트 그룹 구조

Next.js App Router의 라우트 그룹 기능을 활용하여 페이지를 논리적으로 분리합니다:

- `(marketing)/` - 공개 페이지: 헤더/푸터 포함, 전체 너비 레이아웃
- `(auth)/` - 인증 페이지: 중앙 정렬 카드 레이아웃
- `(dashboard)/` - 대시보드: 사이드바 + 메인 컨텐츠 레이아웃

각 라우트 그룹은 자체 `layout.tsx`를 가지며, 서로 다른 레이아웃 구조를 적용합니다.

### Server/Client Components 패턴

React 19와 Next.js 16의 Server Components를 활용합니다:

**Server Components (기본):**
- 페이지 레이아웃 (`layout.tsx`, `page.tsx`)
- 정적 컨텐츠 렌더링
- 데이터 페칭 (Mock 데이터 import)
- SEO 메타데이터

**Client Components (`'use client'` 필수):**
- 인터랙티브 UI (버튼 클릭, 폼 제출 등)
- React Hooks (`useState`, `useEffect` 등)
- 브라우저 API 사용
- next-themes, Zustand 등 클라이언트 라이브러리 사용
- Framer Motion 애니메이션

### 상태 관리 전략

세 가지 상태 관리 방식을 목적에 맞게 활용합니다:

1. **Zustand** (`hooks/*-store.ts`)
   - 전역 UI 상태 관리 (사이드바 열림/닫힘, 테마 설정 등)
   - `persist` 미들웨어로 localStorage 자동 동기화
   - 사용 예: `use-user-store.ts`, `use-ui-store.ts`, `use-cart-store.ts`

2. **React Hook Form + Zod** (`lib/validations/`)
   - 폼 상태 관리 및 검증
   - TypeScript 타입 자동 추론 (`z.infer<typeof schema>`)
   - 폼 에러 핸들링 및 사용자 피드백

3. **Server Components**
   - Mock 데이터 직접 import 및 렌더링
   - 클라이언트 상태가 필요 없는 정적 데이터 처리

### 다크모드 구현

`next-themes` 라이브러리와 Tailwind CSS v4의 OKLch 색상 시스템을 조합:

- `app/providers.tsx`: ThemeProvider로 전체 앱 감싸기
- `app/layout.tsx`: `<html suppressHydrationWarning>` 필수
- `app/globals.css`: `@theme { --color-* }` 변수로 색상 정의
- `.dark` 클래스가 자동으로 적용되며, CSS 변수가 자동 전환됨
- `components/common/theme-toggle.tsx`에서 Light/Dark/System 모드 전환

### 타입 시스템

TypeScript strict mode 활성화 상태로, 다음과 같은 타입 구조를 따릅니다:

- `types/index.ts` - 공통 타입 및 유틸리티 타입
- `types/api.ts` - API 응답 타입 (현재는 Mock 데이터용)
- `types/user.ts` - 사용자 관련 타입
- `lib/validations/*` - Zod 스키마 정의 후 `z.infer`로 타입 추론

모든 컴포넌트 Props는 명시적 인터페이스 정의가 필요합니다.

### Path Alias

`tsconfig.json`에 `@/*` path alias 설정:

```typescript
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/hooks/use-user-store'
```

## ShadcnUI 컴포넌트 사용법

### 컴포넌트 추가
```bash
npx shadcn@latest add button card dialog table
```

### 컴포넌트 커스터마이징
`components/ui/` 디렉토리의 컴포넌트는 직접 수정 가능합니다. 모든 컴포넌트는 Radix UI 기반으로 접근성(a11y)이 내장되어 있습니다.

### 스타일링 패턴
`cn()` 유틸리티 함수를 사용하여 조건부 클래스 병합:

```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  "base-class",
  condition && "conditional-class",
  className // 외부에서 전달받은 className 병합
)} />
```

## 데이터 처리

현재 버전은 Mock 데이터만 사용하며, API Routes나 백엔드 연동이 없습니다:

- `data/blog-posts.ts` - 블로그 게시글 목록
- `data/dashboard-stats.ts` - 대시보드 통계 데이터
- `data/users.ts` - 사용자 목록 (테이블용)

필요시 `app/api/` 디렉토리에 API Routes를 추가하거나, Server Actions를 사용할 수 있습니다.

## 애니메이션

Framer Motion을 사용한 애니메이션 패턴:

```typescript
'use client'
import { motion } from 'framer-motion'

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  )
}
```

## 반응형 디자인

Tailwind CSS의 반응형 브레이크포인트:

- `sm:` - 640px 이상
- `md:` - 768px 이상
- `lg:` - 1024px 이상
- `xl:` - 1280px 이상
- `2xl:` - 1536px 이상

모바일 네비게이션은 `components/layouts/mobile-nav.tsx`에서 Sheet 컴포넌트로 구현됩니다.

## 폼 검증 예시

React Hook Form + Zod 조합:

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormData = z.infer<typeof schema>

export function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    console.log(data) // 실제 인증 로직은 구현되지 않음
  }

  return <form onSubmit={form.handleSubmit(onSubmit)}>...</form>
}
```

## 새 페이지 추가하기

1. 적절한 라우트 그룹 선택 (`(marketing)`, `(auth)`, `(dashboard)`)
2. 해당 디렉토리에 `page.tsx` 생성
3. 필요시 해당 라우트의 `layout.tsx` 확인 및 수정
4. SEO를 위해 `metadata` export 추가

```typescript
// app/(marketing)/new-page/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '페이지 제목',
  description: '페이지 설명',
}

export default function NewPage() {
  return <div>새 페이지 내용</div>
}
```

## 주의사항

- Zustand 스토어 사용 시 항상 `'use client'` 선언
- 다크모드 작동을 위해 `<html suppressHydrationWarning>` 유지
- 이미지 사용 시 `next/image` 컴포넌트 사용
- 폰트는 `next/font/google`로 이미 Geist, Geist Mono 설정됨
- 브라우저 API 사용 시 Server Component에서 분리하여 Client Component로 작성

## 파일 명명 규칙

- 컴포넌트 파일: `kebab-case.tsx`
- 페이지 파일: `page.tsx`, `layout.tsx`
- 타입 파일: `kebab-case.ts`
- Zustand 스토어: `use-*-store.ts`
- 커스텀 훅: `use-*.ts`
