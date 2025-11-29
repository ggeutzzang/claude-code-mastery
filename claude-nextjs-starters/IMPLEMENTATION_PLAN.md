# Next.js 16 범용 스타터킷 구현 계획

## 개요

Next.js 16 App Router, TypeScript, Tailwind CSS v4, ShadcnUI를 기반으로 하는 범용 모던 웹 스타터킷을 개발합니다. 이 스타터킷은 랜딩 페이지, 대시보드, 인증 페이지, 블로그 등 다양한 프로젝트에 즉시 적용 가능한 구조를 제공합니다.

## 프로젝트 현황

### 설치 완료 항목
- Next.js 16.0.5, React 19.2.0
- TypeScript 5.x
- Tailwind CSS v4 (PostCSS 기반)
- ShadcnUI 설정 (components.json)
- lucide-react 아이콘
- OKLch 색상 시스템 (다크모드 지원)

### 추가 설치 필요 항목
- next-themes (다크모드)
- zustand (상태 관리)
- react-hook-form, zod, @hookform/resolvers (폼 검증)
- framer-motion (애니메이션)
- date-fns (날짜 처리)
- recharts (차트 - ShadcnUI Chart용)

### 사용자 선택 사항
- **데이터 처리**: Mock 데이터만 사용 (API Routes 제외)
- **차트**: ShadcnUI Chart (Recharts 기반)
- **문서화**: 기본 README (설치, 실행, 구조 설명)

## 디렉토리 구조

```
claude-nextjs-starters/
├── app/
│   ├── (auth)/                    # 인증 라우트 그룹
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/               # 대시보드 라우트 그룹
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── analytics/page.tsx
│   │   └── settings/page.tsx
│   ├── (marketing)/               # 마케팅 라우트 그룹
│   │   ├── layout.tsx
│   │   ├── page.tsx              # 랜딩 페이지
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── docs/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── providers.tsx             # 전역 Provider
│   ├── layout.tsx                # 루트 레이아웃
│   └── globals.css
│
├── components/
│   ├── ui/                       # ShadcnUI 컴포넌트
│   ├── layouts/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── dashboard-sidebar.tsx
│   │   └── mobile-nav.tsx
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── blog/
│   │   ├── data-table/
│   │   └── landing/
│   └── common/
│       ├── theme-toggle.tsx
│       ├── logo.tsx
│       └── user-menu.tsx
│
├── hooks/
│   ├── use-mounted.ts
│   ├── use-media-query.ts
│   └── use-toast.ts
│
├── lib/
│   ├── utils.ts
│   ├── validations/
│   │   ├── auth.ts
│   │   └── user.ts
│   └── constants.ts
│
├── store/
│   ├── use-user-store.ts
│   ├── use-ui-store.ts
│   └── use-cart-store.ts
│
├── types/
│   ├── index.ts
│   ├── api.ts
│   └── user.ts
│
└── data/
    ├── blog-posts.ts
    ├── dashboard-stats.ts
    └── users.ts
```

## 구현 단계

### Stage 1: 기본 인프라 설정

**패키지 설치**
```bash
npm install zustand react-hook-form zod @hookform/resolvers next-themes framer-motion date-fns nanoid recharts
```

**ShadcnUI 컴포넌트 설치 (Phase 1 - 핵심 UI)**
```bash
npx shadcn@latest add button card input label separator
```

**파일 생성**
1. `types/index.ts` - 공통 타입 정의
2. `types/api.ts` - API 응답 타입
3. `types/user.ts` - 유저 관련 타입
4. `lib/constants.ts` - 앱 전역 상수
5. `app/providers.tsx` - ThemeProvider 포함
6. `app/layout.tsx` 수정 - Providers 적용, suppressHydrationWarning

### Stage 2: 다크모드 구현

**구현 사항**
1. `app/providers.tsx`에 ThemeProvider 추가 (next-themes)
2. `components/common/theme-toggle.tsx` 생성
   - Sun/Moon 아이콘 (lucide-react)
   - Button + DropdownMenu 사용
3. OKLch 색상 시스템 활용 (이미 globals.css에 설정됨)

**핵심 코드**
```typescript
// app/providers.tsx
'use client'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

### Stage 3: 공통 레이아웃 컴포넌트

**ShadcnUI Phase 3 설치**
```bash
npx shadcn@latest add navigation-menu sidebar sheet tabs breadcrumb dropdown-menu
```

**컴포넌트 생성**
1. `components/layouts/site-header.tsx`
   - 로고, 네비게이션, Theme Toggle, User Menu
   - 반응형: 데스크톱 NavigationMenu, 모바일 Sheet
2. `components/layouts/site-footer.tsx`
3. `components/layouts/mobile-nav.tsx`
4. `components/common/logo.tsx`
5. `components/common/user-menu.tsx`

### Stage 4: 랜딩 페이지

**라우트 그룹 및 레이아웃**
1. `app/(marketing)/layout.tsx` - SiteHeader, SiteFooter 포함
2. `app/(marketing)/page.tsx` - 기존 page.tsx 대체

**섹션 컴포넌트**
1. `components/features/landing/hero-section.tsx`
   - 큰 제목, 설명, CTA 버튼
   - Framer Motion fade-in 애니메이션
2. `components/features/landing/features-section.tsx`
   - 3-6개 카드 그리드 (아이콘 + 제목 + 설명)
3. `components/features/landing/cta-section.tsx`
4. `components/features/landing/testimonials-section.tsx` (선택)

### Stage 5: 인증 페이지 (UI만)

**ShadcnUI Phase 2 설치**
```bash
npx shadcn@latest add form select checkbox textarea radio-group
```

**파일 생성**
1. `lib/validations/auth.ts` - Zod 스키마 (loginSchema, registerSchema)
2. `components/features/auth/login-form.tsx`
   - React Hook Form + Zod
   - 제출 시 콘솔 로그 (실제 인증 제외)
3. `components/features/auth/register-form.tsx`
4. `app/(auth)/layout.tsx` - 중앙 정렬 카드
5. `app/(auth)/login/page.tsx`
6. `app/(auth)/register/page.tsx`

### Stage 6: 대시보드 레이아웃 및 사이드바

**컴포넌트 생성**
1. `components/layouts/dashboard-sidebar.tsx`
   - ShadcnUI Sidebar 활용
   - 메뉴: Dashboard, Analytics, Settings
   - 모바일 대응 (SidebarTrigger)
2. `app/(dashboard)/layout.tsx`
   - SidebarProvider + Sidebar + Main Content
3. `app/(dashboard)/dashboard/page.tsx` - 기본 페이지

### Stage 7: 대시보드 콘텐츠

**ShadcnUI Phase 4, 6 설치**
```bash
npx shadcn@latest add table badge avatar skeleton progress
```

**차트 라이브러리**
- ShadcnUI Chart 사용 (Recharts 기반)
- `npx shadcn@latest add chart` - 차트 컴포넌트 설치

**파일 생성**
1. `data/dashboard-stats.ts` - Mock 통계 데이터
2. `components/features/dashboard/stats-cards.tsx`
   - 4개 통계 카드 (사용자, 수익, 전환율 등)
3. `components/features/dashboard/charts/bar-chart.tsx`
4. `components/features/dashboard/charts/line-chart.tsx`
5. `components/features/dashboard/recent-activity.tsx`
6. `app/(dashboard)/dashboard/page.tsx` - Grid 레이아웃으로 통합

### Stage 8: 데이터 테이블

**ShadcnUI 설치**
```bash
npx shadcn@latest add pagination
```

**파일 생성**
1. `data/users.ts` - Mock 사용자 데이터 (20-50개)
2. `components/features/data-table/data-table.tsx`
   - TanStack Table 기반, 정렬/필터링
3. `components/features/data-table/columns.tsx`
4. `components/features/data-table/data-table-toolbar.tsx`
5. `components/features/data-table/data-table-pagination.tsx`
6. `app/(dashboard)/analytics/page.tsx`

### Stage 9: 블로그/문서 페이지

**파일 생성**
1. `data/blog-posts.ts` - Mock 블로그 데이터
2. `components/features/blog/blog-card.tsx`
3. `components/features/blog/blog-list.tsx`
4. `app/(marketing)/blog/page.tsx` - 목록 페이지
5. `app/(marketing)/blog/[slug]/page.tsx` - 상세 페이지 (generateStaticParams)
6. `app/(marketing)/docs/page.tsx`
7. `app/(marketing)/docs/[slug]/page.tsx`

### Stage 10: Zustand 상태 관리

**파일 생성**
1. `store/use-user-store.ts`
   - 유저 정보, login/logout 액션
   - persist 미들웨어 사용
2. `store/use-ui-store.ts`
   - 사이드바 상태
3. `store/use-cart-store.ts` - 예제
4. 대시보드 사이드바/헤더에서 스토어 사용

### Stage 11: README 작성

**파일 생성**
1. `README.md` - 프로젝트 개요
   - 기술 스택 소개
   - 설치 방법 (`npm install`)
   - 실행 방법 (`npm run dev`)
   - 디렉토리 구조 설명
   - 주요 기능 리스트
   - 포함된 페이지 설명
   - 커스터마이징 가이드 (색상, 폰트 변경 방법)
   - 라이선스

### Stage 12: 애니메이션 및 마무리

**ShadcnUI Phase 5 설치**
```bash
npx shadcn@latest add dialog popover tooltip toast alert
```

**구현 사항**
1. Framer Motion 애니메이션 추가
   - 랜딩 페이지 섹션 fade-in
   - 페이지 전환 효과
2. `hooks/use-media-query.ts` 생성
3. Toast 알림 통합
4. 각 페이지 metadata 추가 (SEO)

## 핵심 기술 구현 전략

### 다크모드
- **방식**: next-themes + OKLch CSS 변수
- **중요**: `<html>` 태그에 `suppressHydrationWarning` 필수
- **색상**: 이미 설정된 OKLch 변수가 `.dark` 클래스로 자동 전환

### 레이아웃 패턴
1. **마케팅**: 헤더/푸터, 전체 너비
2. **인증**: 중앙 정렬 카드
3. **대시보드**: 사이드바 + 메인 컨텐츠

### Server/Client Components 구분
- **Server**: 페이지 레이아웃, 데이터 페칭, 정적 컨텐츠
- **Client**: 인터랙티브 UI, 브라우저 API, React Hooks, next-themes/Zustand

```typescript
// Server Component
export default function Page() {
  return <ClientComponent />
}

// Client Component
'use client'
export function ClientComponent() {
  const [state, setState] = useState()
  return <motion.div>...</motion.div>
}
```

### 상태 관리 원칙
- 전역 UI 상태 → Zustand
- 폼 상태 → React Hook Form
- API 데이터 → Server Components 또는 클라이언트 fetch

### 데이터 처리
- **Mock 데이터 사용**: 모든 페이지에서 `/data` 디렉토리의 정적 데이터 사용
- **API Routes 제외**: 백엔드 의존성 없이 빠른 시작 가능
- **향후 확장 가능**: 필요시 API Routes나 Server Actions 추가 가능

## 모범 사례

### 타입 안전성
1. 모든 Props에 인터페이스 정의
2. Zod 스키마 → TypeScript 타입 추론 (`z.infer<>`)
3. API 응답 타입 정의 (`types/api.ts`)
4. strict mode 유지

### 재사용 컴포넌트 설계
1. Props 인터페이스 명확히 정의
2. 작은 컴포넌트 여러 개로 조합
3. `cn()` 유틸리티 적극 활용
4. ShadcnUI 컴포넌트는 필요시 커스터마이징 가능

### 성능 최적화
1. `next/image` 사용 (priority prop 활용)
2. `next/font` 사용 (이미 적용)
3. 무거운 컴포넌트는 동적 import
4. 각 페이지 metadata 최적화

### 접근성
1. ShadcnUI는 Radix UI 기반으로 접근성 우수
2. 시맨틱 HTML 사용
3. 아이콘 버튼에 `sr-only` 텍스트 추가
4. 키보드 네비게이션 확인

## 파일 명명 규칙
- 컴포넌트: `kebab-case.tsx`
- 페이지: `page.tsx`, `layout.tsx`
- 타입: `kebab-case.ts`
- 스토어: `use-*-store.ts`
- 훅: `use-*.ts`

## 구현 체크리스트

### 필수 (Must Have)
- [ ] 다크모드 전환
- [ ] 반응형 네비게이션
- [ ] 랜딩 페이지 (Hero + Features + CTA)
- [ ] 대시보드 (사이드바 + 통계 카드)
- [ ] 인증 페이지 (로그인/회원가입 UI)
- [ ] 블로그 목록 + 상세
- [ ] 폼 예제 (React Hook Form + Zod)
- [ ] 데이터 테이블

### 추천 (Should Have)
- [ ] Zustand 상태 관리
- [ ] Framer Motion 애니메이션
- [ ] Toast 알림
- [ ] 차트 컴포넌트 (ShadcnUI Chart)
- [ ] 기본 README 문서

### 선택 (Nice to Have)
- [ ] 문서 페이지
- [ ] 검색 기능
- [ ] 무한 스크롤

## 테스트 계획

### 빌드 테스트
```bash
npm run build
npm run start
```

### 타입 체크
```bash
npx tsc --noEmit
```

### 반응형 테스트
- 모바일 (375px)
- 태블릿 (768px)
- 데스크톱 (1280px+)

### 다크모드 테스트
- 모든 페이지에서 색상 전환 확인

### 브라우저 테스트
- Chrome, Firefox, Safari, Edge

### 접근성
- Lighthouse 점수 90+ 목표

## 예상 개발 시간

- Stage 1-2: 0.5일 (설정 + 다크모드)
- Stage 3-4: 1일 (레이아웃 + 랜딩)
- Stage 5: 0.5일 (인증)
- Stage 6-7: 1일 (대시보드)
- Stage 8: 0.5일 (데이터 테이블)
- Stage 9: 1일 (블로그/문서)
- Stage 10-12: 1일 (Zustand, 애니메이션, README)

**총 예상**: 5-6일 (풀타임 기준)

## 핵심 파일 수정 목록

### 수정 필요
1. `/app/layout.tsx` - Providers 적용, suppressHydrationWarning
2. `/app/page.tsx` → `/app/(marketing)/page.tsx`로 이동

### 신규 생성 (우선순위 높음)
1. `/app/providers.tsx`
2. `/components/common/theme-toggle.tsx`
3. `/components/layouts/site-header.tsx`
4. `/app/(marketing)/layout.tsx`
5. `/app/(dashboard)/layout.tsx`
