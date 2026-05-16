import { apiRequest } from './apiClient'

export type AdminUserRole = 'USER' | 'ADMIN'

export type AdminUserAnalysis = {
  id: string
  projectType: string
  city: string
  district: string | null
  score: number
  commercialPriority: string
  status: string
  createdAt: string
}

export type AdminUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  role: AdminUserRole
  createdAt: string
  updatedAt: string
  analysesCount: number
  activeSessionsCount: number
  analyses?: AdminUserAnalysis[]
}

type PaginatedAdminUsers = {
  items: AdminUser[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export async function fetchAdminUsers(params?: {
  search?: string
  role?: AdminUserRole | ''
}): Promise<AdminUser[]> {
  const query = new URLSearchParams({
    limit: '100',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  })

  if (params?.search?.trim()) query.set('search', params.search.trim())
  if (params?.role) query.set('role', params.role)

  const response = await apiRequest<PaginatedAdminUsers>(`/admin/users?${query}`)
  return response.items
}

export async function fetchAdminUser(id: string): Promise<AdminUser> {
  return apiRequest<AdminUser>(`/admin/users/${id}`)
}

export async function updateAdminUserRole(
  id: string,
  role: AdminUserRole,
): Promise<AdminUser> {
  return apiRequest<AdminUser>(`/admin/users/${id}/role`, {
    method: 'PATCH',
    body: JSON.stringify({ role }),
  })
}

export async function deleteAdminUser(id: string): Promise<void> {
  await apiRequest<{ success: boolean }>(`/admin/users/${id}`, {
    method: 'DELETE',
  })
}
