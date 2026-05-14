export type UserRole = 'user' | 'admin'

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  role: UserRole
  createdAt: string
  updatedAt?: string
}

export type RegisterInput = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export type LoginInput = {
  email: string
  password: string
}

export type StoredUser = User & {
  password: string
}

export type AuthSession = {
  user: User
  accessToken: string
  refreshToken: string
}
