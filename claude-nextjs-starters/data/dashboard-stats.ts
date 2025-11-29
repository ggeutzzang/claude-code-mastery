/**
 * 대시보드 Mock 데이터
 */

export const dashboardStats = {
  totalUsers: 2543,
  totalRevenue: 45231000,
  activeProjects: 12,
  conversionRate: 3.24,
}

export const monthlyData = [
  { month: '1월', revenue: 3500000, users: 189 },
  { month: '2월', revenue: 4200000, users: 215 },
  { month: '3월', revenue: 3800000, users: 201 },
  { month: '4월', revenue: 5100000, users: 267 },
  { month: '5월', revenue: 4900000, users: 289 },
  { month: '6월', revenue: 5800000, users: 321 },
]

export const categoryData = [
  { name: '제품 A', value: 4500 },
  { name: '제품 B', value: 3200 },
  { name: '제품 C', value: 2800 },
  { name: '제품 D', value: 1900 },
  { name: '기타', value: 1200 },
]

export const recentActivities = [
  {
    id: '1',
    user: '김철수',
    action: '새 프로젝트 생성',
    timestamp: '5분 전',
  },
  {
    id: '2',
    user: '이영희',
    action: '보고서 업로드',
    timestamp: '15분 전',
  },
  {
    id: '3',
    user: '박민수',
    action: '팀원 초대',
    timestamp: '1시간 전',
  },
  {
    id: '4',
    user: '정수진',
    action: '설정 변경',
    timestamp: '2시간 전',
  },
]
