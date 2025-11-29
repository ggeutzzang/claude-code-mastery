/**
 * 앱 전역 상수 정의
 */

export const APP_NAME = 'Next.js Starter'
export const APP_DESCRIPTION = '범용 모던 웹 스타터킷'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
  BLOG: '/blog',
  DOCS: '/docs',
} as const

export const NAV_ITEMS = [
  { href: ROUTES.HOME, label: '홈' },
  { href: ROUTES.BLOG, label: '블로그' },
  { href: ROUTES.DOCS, label: '문서' },
] as const

export const DASHBOARD_NAV_ITEMS = [
  { href: ROUTES.DASHBOARD, label: '대시보드', icon: 'LayoutDashboard' },
  { href: ROUTES.ANALYTICS, label: '분석', icon: 'BarChart' },
  { href: ROUTES.SETTINGS, label: '설정', icon: 'Settings' },
] as const

export const ITEMS_PER_PAGE = 10

export const DATE_FORMAT = 'yyyy-MM-dd'
export const DATETIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
