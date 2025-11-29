/**
 * 사용자 차트 컴포넌트
 */
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { monthlyData } from '@/data/dashboard-stats'

const chartConfig = {
  users: {
    label: '사용자',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function UsersChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>월별 사용자</CardTitle>
        <CardDescription>최근 6개월 신규 사용자</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="users"
              stroke="var(--color-users)"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
