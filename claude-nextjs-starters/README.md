# Next.js Starter Kit

모던 웹 개발을 위한 완벽한 Next.js 스타터킷입니다. 최신 기술 스택과 베스트 프랙티스를 적용하여 빠르게 프로젝트를 시작할 수 있습니다.

## ✨ 주요 기능

- **Next.js 16** - App Router와 React 19 기반 최신 프레임워크
- **TypeScript** - 타입 안전성을 위한 완벽한 TypeScript 지원
- **Tailwind CSS v4** - OKLch 색상 시스템과 PostCSS 기반 스타일링
- **ShadcnUI** - 커스터마이징 가능한 고품질 UI 컴포넌트
- **다크모드** - next-themes를 사용한 시스템 연동 다크모드
- **폼 검증** - React Hook Form + Zod를 활용한 타입 안전 폼 검증
- **상태 관리** - Zustand를 사용한 간결한 전역 상태 관리
- **차트** - Recharts 기반 반응형 데이터 시각화
- **애니메이션** - Framer Motion을 활용한 부드러운 UI 애니메이션
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 완벽 지원

## 📦 기술 스택

### 핵심 프레임워크
- **Next.js 16.0.5** - React 기반 풀스택 프레임워크
- **React 19.2.0** - 최신 React 버전
- **TypeScript** - 타입 안전성

### 스타일링
- **Tailwind CSS v4** - 유틸리티 퍼스트 CSS 프레임워크
- **ShadcnUI** - Radix UI 기반 컴포넌트 라이브러리
- **Lucide React** - 아름다운 아이콘 세트

### 상태 관리 & 폼
- **Zustand** - 간결한 상태 관리 라이브러리
- **React Hook Form** - 고성능 폼 라이브러리
- **Zod** - TypeScript 우선 스키마 검증

### UI & 애니메이션
- **Framer Motion** - 프로덕션 레벨 애니메이션 라이브러리
- **next-themes** - 다크모드 지원
- **Recharts** - 반응형 차트 라이브러리

## 🚀 빠른 시작

### 설치

```bash
# 저장소 클론
git clone https://github.com/yourusername/nextjs-starter.git
cd nextjs-starter

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 사용 가능한 명령어

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 실행
npm run lint         # ESLint 실행
```

## 📁 프로젝트 구조

```
claude-nextjs-starters/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # 인증 관련 페이지 그룹
│   │   ├── login/                # 로그인 페이지
│   │   └── register/             # 회원가입 페이지
│   ├── (dashboard)/              # 대시보드 페이지 그룹
│   │   ├── analytics/            # 분석 페이지
│   │   ├── dashboard/            # 메인 대시보드
│   │   └── settings/             # 설정 페이지
│   ├── (marketing)/              # 마케팅 페이지 그룹
│   │   ├── blog/                 # 블로그
│   │   └── docs/                 # 문서
│   ├── globals.css               # 전역 스타일
│   ├── layout.tsx                # 루트 레이아웃
│   └── providers.tsx             # 전역 Provider
├── components/                   # React 컴포넌트
│   ├── common/                   # 공통 컴포넌트
│   │   ├── logo.tsx
│   │   ├── theme-toggle.tsx
│   │   └── user-menu.tsx
│   ├── features/                 # 기능별 컴포넌트
│   │   ├── auth/                 # 인증 관련
│   │   ├── blog/                 # 블로그 관련
│   │   ├── dashboard/            # 대시보드 관련
│   │   ├── data-table/           # 데이터 테이블
│   │   └── landing/              # 랜딩 페이지
│   ├── layouts/                  # 레이아웃 컴포넌트
│   │   ├── dashboard-sidebar.tsx
│   │   ├── mobile-nav.tsx
│   │   └── site-header.tsx
│   └── ui/                       # ShadcnUI 컴포넌트
├── data/                         # Mock 데이터
│   ├── blog-posts.ts
│   ├── dashboard-stats.ts
│   └── users.ts
├── hooks/                        # 커스텀 훅
│   ├── use-cart-store.ts
│   ├── use-ui-store.ts
│   └── use-user-store.ts
├── lib/                          # 유틸리티
│   ├── constants.ts
│   ├── utils.ts
│   └── validations/              # Zod 스키마
│       └── auth.ts
└── types/                        # TypeScript 타입
    └── index.ts
```

## 🎨 주요 페이지

### 랜딩 페이지 (`/`)
- Hero 섹션
- 주요 기능 소개
- CTA (Call To Action)

### 인증 페이지
- 로그인 (`/login`)
- 회원가입 (`/register`)
- React Hook Form + Zod 검증

### 대시보드 (`/dashboard`)
- 통계 카드
- 수익 및 사용자 차트
- 반응형 사이드바

### 분석 페이지 (`/analytics`)
- 데이터 테이블
- 검색 및 필터링 기능
- 정렬 기능

### 블로그 (`/blog`)
- 블로그 목록
- 블로그 상세 페이지
- 카테고리 및 태그 필터

### 문서 (`/docs`)
- 문서 홈
- 시작 가이드

## 🔧 커스터마이징

### 색상 테마 변경

`app/globals.css` 파일에서 OKLch 색상 값을 수정하세요:

```css
@theme {
  --color-primary: oklch(0.6 0.2 250);  /* 메인 색상 */
  --color-secondary: oklch(0.5 0.1 200); /* 보조 색상 */
}
```

### 새 ShadcnUI 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

예시:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add popover
```

### 라우트 추가

`app` 디렉토리 내에 새 폴더를 생성하여 라우트를 추가하세요:

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return <div>새 페이지</div>
}
```

### Zustand 스토어 사용

```typescript
'use client'
import { useUserStore } from '@/hooks/use-user-store'

export function MyComponent() {
  const { user, login, logout } = useUserStore()

  return (
    <div>
      {user ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <button onClick={() => login({ id: '1', name: '사용자', email: 'user@example.com', role: 'user' })}>
          로그인
        </button>
      )}
    </div>
  )
}
```

## 📝 폼 검증 예시

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('올바른 이메일을 입력하세요'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
})

type FormData = z.infer<typeof schema>

export function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* 폼 필드 */}
    </form>
  )
}
```

## 🌙 다크모드

다크모드는 시스템 설정과 자동으로 연동되며, 사용자가 수동으로 전환할 수도 있습니다.

```typescript
'use client'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <button onClick={() => setTheme('dark')}>다크모드</button>
  )
}
```

## 📊 차트 사용 예시

```typescript
import { Bar, BarChart } from 'recharts'
import { ChartContainer } from '@/components/ui/chart'

const data = [
  { month: '1월', value: 100 },
  { month: '2월', value: 200 },
]

export function MyChart() {
  return (
    <ChartContainer config={{}} className="h-[300px]">
      <BarChart data={data}>
        <Bar dataKey="value" fill="var(--color-primary)" />
      </BarChart>
    </ChartContainer>
  )
}
```

## 🚢 배포

### Vercel (권장)

가장 쉬운 배포 방법입니다:

1. GitHub에 저장소 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 임포트
3. 자동 배포 완료!

### 기타 플랫폼

- **Netlify**: Next.js 완벽 지원
- **AWS Amplify**: 클라우드 배포
- **Docker**: 컨테이너 기반 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 📚 학습 리소스

- [Next.js 문서](https://nextjs.org/docs) - Next.js 공식 문서
- [React 문서](https://react.dev) - React 공식 문서
- [Tailwind CSS 문서](https://tailwindcss.com) - Tailwind CSS 문서
- [ShadcnUI 문서](https://ui.shadcn.com) - ShadcnUI 컴포넌트 문서
- [Zustand 문서](https://zustand-demo.pmnd.rs) - Zustand 상태 관리 문서

## 🤝 기여하기

Pull Request는 언제나 환영합니다! 주요 변경사항의 경우 먼저 Issue를 열어 논의해주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 도움을 받았습니다:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadcnUI](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)
- [Zustand](https://zustand-demo.pmnd.rs)

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
