import { apiRequest } from './apiClient'
import type { User } from '../types/user'

export type UpdateMyDataInput = {
  firstName: string
  lastName: string
  email: string
  currentPassword?: string
  newPassword?: string
}

type ApiUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  role: 'USER' | 'ADMIN'
  createdAt: string
  updatedAt?: string
}

function mapUser(user: ApiUser): User {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone ?? '',
    role: user.role === 'ADMIN' ? 'admin' : 'user',
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

export async function updateMyData(input: UpdateMyDataInput): Promise<User> {
  const body: Record<string, string> = {
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    email: input.email.trim().toLowerCase(),
  }

  if (input.newPassword) {
    body.currentPassword = input.currentPassword ?? ''
    body.newPassword = input.newPassword
  }

  const user = await apiRequest<ApiUser>('/users/me', {
    method: 'PATCH',
    body: JSON.stringify(body),
  })

  return mapUser(user)
}

export async function requestAccountDeletion(reason: string): Promise<{
  success: boolean
  requestId: string
  status: string
  message: string
}> {
  return apiRequest('/users/me/deletion-request', {
    method: 'POST',
    body: JSON.stringify({ reason: reason.trim() }),
  })
}
