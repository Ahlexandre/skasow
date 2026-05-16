import { apiRequest } from './apiClient'

export async function requestAccountDeletion(reason?: string): Promise<{
  success: boolean
  requestId: string
  status: string
  message: string
}> {
  return apiRequest('/users/me/deletion-request', {
    method: 'POST',
    body: JSON.stringify({ reason: reason?.trim() || undefined }),
  })
}
