/**
 * 최근 활동 컴포넌트
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { recentActivities } from '@/data/dashboard-stats'

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
        <CardDescription>최근 팀 활동 내역</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{activity.user}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <div className="text-sm text-muted-foreground">{activity.timestamp}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
