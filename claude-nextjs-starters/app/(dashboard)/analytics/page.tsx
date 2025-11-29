/**
 * 분석 페이지
 */
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UsersTable } from '@/components/features/data-table/users-table'

export const metadata: Metadata = {
  title: '분석 | Next.js Starter Kit',
  description: '데이터 분석 및 리포트',
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">분석</h2>
        <p className="text-muted-foreground">
          데이터 분석 및 상세 리포트
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>
            전체 사용자 정보 및 현황
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UsersTable />
        </CardContent>
      </Card>
    </div>
  )
}
