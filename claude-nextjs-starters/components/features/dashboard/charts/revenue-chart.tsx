/**
 * 수익 차트 컴포넌트
 */
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { monthlyData } from '@/data/dashboard-stats'

const chartConfig = {
  revenue: {
    label: '수익',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>월별 수익</CardTitle>
        <CardDescription>최근 6개월 수익 추이</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
