/**
 * 통계 카드 컴포넌트
 */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, DollarSign, FolderKanban, TrendingUp } from 'lucide-react'
import { dashboardStats } from '@/data/dashboard-stats'

export function StatsCards() {
  const stats = [
    {
      title: '총 사용자',
      value: dashboardStats.totalUsers.toLocaleString(),
      icon: Users,
      description: '전월 대비 +12%',
      trend: 'up',
    },
    {
      title: '총 수익',
      value: `₩${(dashboardStats.totalRevenue / 10000).toFixed(0)}만`,
      icon: DollarSign,
      description: '전월 대비 +8%',
      trend: 'up',
    },
    {
      title: '활성 프로젝트',
      value: dashboardStats.activeProjects,
      icon: FolderKanban,
      description: '진행 중',
      trend: 'neutral',
    },
    {
      title: '전환율',
      value: `${dashboardStats.conversionRate}%`,
      icon: TrendingUp,
      description: '전월 대비 +0.5%',
      trend: 'up',
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
