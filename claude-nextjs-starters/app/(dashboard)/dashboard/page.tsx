/**
 * 대시보드 메인 페이지
 */
import { Metadata } from 'next'
import { StatsCards } from '@/components/features/dashboard/stats-cards'
import { RevenueChart } from '@/components/features/dashboard/charts/revenue-chart'
import { UsersChart } from '@/components/features/dashboard/charts/users-chart'
import { RecentActivity } from '@/components/features/dashboard/recent-activity'

export const metadata: Metadata = {
  title: '대시보드 | Next.js Starter Kit',
  description: '대시보드 홈',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
        <p className="text-muted-foreground">
          프로젝트 개요와 주요 지표를 확인하세요
        </p>
      </div>

      {/* 통계 카드 */}
      <StatsCards />

      {/* 차트 */}
      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart />
        <UsersChart />
      </div>

      {/* 최근 활동 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
