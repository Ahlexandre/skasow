import { apiRequest } from './apiClient'

export type AdminActivityLog = {
  id: string
  action: string
  entity: string
  entityId: string | null
  metadata: Record<string, unknown> | null
  createdAt: string
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
  } | null
}

export async function fetchAdminActivity(): Promise<AdminActivityLog[]> {
  return apiRequest<AdminActivityLog[]>('/admin/activity')
}

export function formatActivityLabel(log: AdminActivityLog): string {
  const meta = log.metadata ?? {}
  if (log.action === 'ANALYSIS_DELETE') {
    const project = meta.projectType ? String(meta.projectType) : 'projet'
    const city = meta.city ? ` — ${String(meta.city)}` : ''
    return `Pre-analyse supprimee (${project}${city})`
  }
  if (log.action === 'ACCOUNT_DELETION_REQUESTED') {
    return 'Demande de suppression de compte'
  }
  if (log.action === 'USER_ACCOUNT_DELETE') {
    return 'Compte utilisateur supprime'
  }
  if (log.action === 'ADMIN_USER_DELETE') {
    return 'Compte supprime par un administrateur'
  }
  return log.action
}
