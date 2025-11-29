export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  coverImage: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs-16',
    title: 'Next.js 16 시작하기: App Router와 React 19',
    description: 'Next.js 16의 새로운 기능과 App Router를 사용한 모던 웹 개발 방법을 알아봅니다.',
    content: `
# Next.js 16 시작하기

Next.js 16은 React 19와 함께 출시된 최신 버전으로, 성능과 개발자 경험을 크게 향상시켰습니다.

## 주요 변경사항

### 1. App Router 안정화
App Router는 이제 완전히 안정화되어 프로덕션 환경에서 사용할 수 있습니다.

### 2. React Server Components
서버 컴포넌트를 기본으로 사용하여 초기 로딩 속도를 대폭 개선했습니다.

### 3. Turbopack 기본 탑재
개발 서버 속도가 10배 빨라진 Turbopack이 기본으로 제공됩니다.

## 시작하기

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

이제 여러분도 Next.js 16으로 최신 웹 애플리케이션을 개발할 수 있습니다!
    `,
    author: {
      name: '김개발',
      avatar: '/avatars/01.png',
    },
    category: 'Tutorial',
    tags: ['Next.js', 'React', 'Web Development'],
    publishedAt: '2024-03-15',
    readTime: '5분',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'tailwind-css-v4-new-features',
    title: 'Tailwind CSS v4의 새로운 기능들',
    description: 'Tailwind CSS v4에서 추가된 OKLch 색상 시스템과 새로운 기능들을 살펴봅니다.',
    content: `
# Tailwind CSS v4의 새로운 기능

Tailwind CSS v4는 PostCSS 기반으로 완전히 재작성되어 더 빠르고 강력해졌습니다.

## OKLch 색상 시스템

더 정확하고 일관된 색상을 위해 OKLch 색상 공간을 도입했습니다.

\`\`\`css
@theme {
  --color-primary: oklch(0.6 0.2 250);
}
\`\`\`

## 성능 개선

- 빌드 속도 3배 향상
- 번들 사이즈 20% 감소
- 런타임 성능 최적화

Tailwind CSS v4로 더 나은 개발 경험을 누려보세요!
    `,
    author: {
      name: '이디자인',
      avatar: '/avatars/02.png',
    },
    category: 'Design',
    tags: ['Tailwind CSS', 'CSS', 'Design System'],
    publishedAt: '2024-03-10',
    readTime: '4분',
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'typescript-best-practices-2024',
    title: '2024년 TypeScript 베스트 프랙티스',
    description: '타입스크립트를 효과적으로 사용하기 위한 최신 베스트 프랙티스를 소개합니다.',
    content: `
# TypeScript 베스트 프랙티스 2024

현대적인 TypeScript 프로젝트를 위한 필수 가이드입니다.

## Strict Mode 활성화

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
\`\`\`

## 타입 추론 활용

타입을 명시하기보다는 TypeScript의 강력한 타입 추론을 활용하세요.

\`\`\`typescript
// Good
const user = { name: "John", age: 30 }

// Avoid
const user: { name: string; age: number } = { name: "John", age: 30 }
\`\`\`

## 유틸리티 타입 활용

Pick, Omit, Partial 등의 유틸리티 타입으로 코드 재사용성을 높이세요.

타입 안전성과 개발 생산성을 동시에 높일 수 있습니다!
    `,
    author: {
      name: '박타입',
      avatar: '/avatars/03.png',
    },
    category: 'Programming',
    tags: ['TypeScript', 'Best Practices', 'Development'],
    publishedAt: '2024-03-05',
    readTime: '6분',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'react-hook-form-with-zod',
    title: 'React Hook Form과 Zod로 완벽한 폼 검증하기',
    description: 'React Hook Form과 Zod를 결합하여 타입 안전한 폼 검증을 구현하는 방법을 알아봅니다.',
    content: `
# React Hook Form + Zod 완벽 가이드

타입 안전하고 성능 좋은 폼 검증 솔루션을 만들어봅시다.

## 설치

\`\`\`bash
npm install react-hook-form zod @hookform/resolvers
\`\`\`

## 스키마 정의

\`\`\`typescript
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
\`\`\`

## 폼 구현

\`\`\`typescript
const form = useForm({
  resolver: zodResolver(loginSchema),
})
\`\`\`

성능과 타입 안전성을 모두 잡을 수 있는 최고의 조합입니다!
    `,
    author: {
      name: '최폼',
      avatar: '/avatars/04.png',
    },
    category: 'Tutorial',
    tags: ['React', 'Forms', 'Validation'],
    publishedAt: '2024-02-28',
    readTime: '7분',
    coverImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    slug: 'shadcn-ui-component-library',
    title: 'ShadcnUI: 복사 가능한 컴포넌트 라이브러리',
    description: 'ShadcnUI를 사용하여 커스터마이징 가능한 UI 컴포넌트를 프로젝트에 추가하는 방법을 알아봅니다.',
    content: `
# ShadcnUI 완벽 활용하기

npm 패키지가 아닌 복사 가능한 컴포넌트 라이브러리, ShadcnUI를 알아봅니다.

## 특징

- 완전한 커스터마이징 가능
- Radix UI 기반의 접근성
- Tailwind CSS 스타일링
- TypeScript 완벽 지원

## 컴포넌트 추가

\`\`\`bash
npx shadcn@latest add button
\`\`\`

## 커스터마이징

모든 컴포넌트가 프로젝트 내부에 있어 자유롭게 수정 가능합니다.

\`\`\`typescript
// components/ui/button.tsx
export function Button({ variant = "default", ...props }) {
  // 원하는 대로 수정 가능!
}
\`\`\`

진정한 의미의 커스터마이징 가능한 UI 라이브러리입니다!
    `,
    author: {
      name: '정컴포',
      avatar: '/avatars/05.png',
    },
    category: 'Design',
    tags: ['ShadcnUI', 'UI Components', 'Design System'],
    publishedAt: '2024-02-20',
    readTime: '5분',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    slug: 'framer-motion-animations',
    title: 'Framer Motion으로 매끄러운 애니메이션 만들기',
    description: 'React 애플리케이션에 Framer Motion을 사용하여 부드럽고 인터랙티브한 애니메이션을 추가하는 방법을 배웁니다.',
    content: `
# Framer Motion 애니메이션 가이드

React에서 가장 강력한 애니메이션 라이브러리를 활용해봅시다.

## 기본 애니메이션

\`\`\`typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Hello World
</motion.div>
\`\`\`

## 인터랙티브 애니메이션

\`\`\`typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  클릭하세요
</motion.button>
\`\`\`

## 복잡한 시퀀스

variants를 사용하여 복잡한 애니메이션 시퀀스를 만들 수 있습니다.

사용자 경험을 한 단계 업그레이드하세요!
    `,
    author: {
      name: '강애니',
      avatar: '/avatars/06.png',
    },
    category: 'Tutorial',
    tags: ['Framer Motion', 'Animation', 'React'],
    publishedAt: '2024-02-15',
    readTime: '8분',
    coverImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag))
}

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)))

export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
