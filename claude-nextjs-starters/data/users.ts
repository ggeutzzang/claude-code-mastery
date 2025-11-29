/**
 * 사용자 Mock 데이터
 */

export interface UserData {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  createdAt: string
}

export const users: UserData[] = [
  { id: '1', name: '김철수', email: 'kim@example.com', role: 'Admin', status: 'active', createdAt: '2024-01-15' },
  { id: '2', name: '이영희', email: 'lee@example.com', role: 'User', status: 'active', createdAt: '2024-02-20' },
  { id: '3', name: '박민수', email: 'park@example.com', role: 'User', status: 'active', createdAt: '2024-03-10' },
  { id: '4', name: '정수진', email: 'jung@example.com', role: 'Editor', status: 'inactive', createdAt: '2024-01-05' },
  { id: '5', name: '최동욱', email: 'choi@example.com', role: 'User', status: 'active', createdAt: '2024-04-12' },
  { id: '6', name: '강민지', email: 'kang@example.com', role: 'Admin', status: 'active', createdAt: '2024-02-28' },
  { id: '7', name: '윤서준', email: 'yoon@example.com', role: 'User', status: 'inactive', createdAt: '2024-03-15' },
  { id: '8', name: '임지현', email: 'lim@example.com', role: 'Editor', status: 'active', createdAt: '2024-01-22' },
]
