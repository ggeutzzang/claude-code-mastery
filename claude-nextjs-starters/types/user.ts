/**
 * 유저 관련 타입 정의
 */

import { BaseEntity } from './index'

export interface User extends BaseEntity {
  name: string
  email: string
  avatar?: string
  role: UserRole
  status: UserStatus
}

export type UserRole = 'admin' | 'user' | 'guest'

export type UserStatus = 'active' | 'inactive' | 'suspended'

export interface UserProfile {
  bio?: string
  location?: string
  website?: string
  company?: string
}

export interface AuthUser {
  id: string
  name: string
  email: string
  avatar?: string
}
