/**
 * 공통 타입 정의
 */

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type Status = 'active' | 'inactive' | 'pending' | 'archived'

export interface SelectOption {
  label: string
  value: string
}
