import type { AnalysisFormData, AnalysisResult } from '../types/analysis'
import type { Prospect, ProspectStatus } from '../types/prospect'
import type { User } from '../types/user'
import { readStorage, writeStorage } from '../utils/storage'

const PROSPECTS_KEY = 'ds-prospects'

export function getProspects() {
  return readStorage<Prospect[]>(PROSPECTS_KEY, [])
}

export function saveProspect(
  user: User,
  formData: AnalysisFormData,
  analysis: AnalysisResult,
) {
  const now = new Date().toISOString()
  const prospect: Prospect = {
    id: crypto.randomUUID(),
    userId: user.id,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: formData.email || user.email,
      phone: formData.phone || user.phone,
    },
    formData: {
      ...formData,
      email: formData.email || user.email,
      phone: formData.phone || user.phone,
      name: formData.name || `${user.firstName} ${user.lastName}`.trim(),
    },
    analysis,
    status:
      analysis.commercialPriority === 'Haute'
        ? 'Prioritaire'
        : analysis.score < 45
          ? 'À compléter'
          : 'Envoyé',
    createdAt: now,
    updatedAt: now,
  }

  writeStorage(PROSPECTS_KEY, [prospect, ...getProspects()])
  return prospect
}

export function getProspectsByUser(userId: string) {
  return getProspects().filter((prospect) => prospect.userId === userId)
}

export function updateProspectStatus(id: string, status: ProspectStatus) {
  const prospects = getProspects().map((prospect) =>
    prospect.id === id
      ? { ...prospect, status, updatedAt: new Date().toISOString() }
      : prospect,
  )

  writeStorage(PROSPECTS_KEY, prospects)
  return prospects.find((prospect) => prospect.id === id)
}
