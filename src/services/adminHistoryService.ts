import { apiRequest } from './apiClient'

export type AnalysisHistoryEntry = {
  id: string
  originalAnalysisId: string
  userId: string | null
  userEmail: string
  userFirstName: string
  userLastName: string
  userPhone: string | null
  snapshot: Record<string, unknown>
  deletedBy: string
  deletedAt: string
}

export type AccountDeletionRequestEntry = {
  id: string
  userId: string
  reason: string | null
  status: 'PENDING' | 'PROCESSED' | 'CANCELLED'
  userSnapshot: Record<string, unknown>
  createdAt: string
  processedAt: string | null
  processedByAdminId: string | null
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    deletedAt: string | null
  } | null
}

export type AdminHistoryResponse = {
  analysisHistories: AnalysisHistoryEntry[]
  accountDeletionRequests: AccountDeletionRequestEntry[]
  recentActivity: Array<{
    id: string
    action: string
    entity: string
    entityId: string | null
    metadata: Record<string, unknown> | null
    createdAt: string
    user: { id: string; firstName: string; lastName: string; email: string } | null
  }>
}

export async function fetchAdminHistory(): Promise<AdminHistoryResponse> {
  return apiRequest<AdminHistoryResponse>('/admin/history')
}

export function formatRequestStatus(status: AccountDeletionRequestEntry['status']) {
  const labels = {
    PENDING: 'En attente',
    PROCESSED: 'Traitee',
    CANCELLED: 'Annulee',
  }
  return labels[status]
}
