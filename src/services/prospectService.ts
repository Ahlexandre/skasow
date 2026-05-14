/**
 * prospectService — pont entre le formulaire frontend et l'API backend /analyses.
 *
 * Mappage des valeurs françaises du formulaire vers les enums Prisma attendus par le backend :
 *   ProjectType : Acheter→BUY  Louer→RENT  Vendre→SELL  Investir→INVEST
 *   Urgency     : Immediate→HIGH  Sous 3 mois→MEDIUM  Dans 6 mois→LOW  Exploration→LOW
 *
 * Le localStorage n'est conservé que pour le dashboard admin (lecture seule, données locales).
 */

import type { AnalysisFormData, AnalysisResult } from '../types/analysis'
import type { Prospect, ProspectStatus } from '../types/prospect'
import type { User } from '../types/user'
import { apiRequest } from './apiClient'
import { readStorage, writeStorage } from '../utils/storage'

const PROSPECTS_KEY = 'ds-prospects'

// ---------------------------------------------------------------------------
// Mappers FR → enums backend
// ---------------------------------------------------------------------------

const PROJECT_TYPE_MAP: Record<string, string> = {
  Acheter: 'BUY',
  Louer: 'RENT',
  Vendre: 'SELL',
  Investir: 'INVEST',
}

const URGENCY_MAP: Record<string, string> = {
  'Immediate (moins d 1 mois)': 'HIGH',
  'Sous 3 mois': 'MEDIUM',
  'Dans 6 mois': 'LOW',
  'Exploration (pas de delai fixe)': 'LOW',
}

// ---------------------------------------------------------------------------
// Mapper réponse API → Prospect local (pour affichage immédiat)
// ---------------------------------------------------------------------------

type ApiAnalysis = {
  id: string
  userId: string
  projectType: string
  city: string
  district?: string | null
  budget?: number | null
  propertyType?: string | null
  surface?: number | null
  urgency: string
  objective?: string | null
  score: number
  maturityLevel: string
  commercialPriority: string
  profileType: string
  recommendedService: string
  strengths: string[]
  missingInfo: string[]
  recommendations: string[]
  nextAction: string
  status: string
  createdAt: string
  updatedAt: string
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
  }
}

function mapMaturity(level: string): AnalysisResult['maturityLevel'] {
  if (level === 'HIGH') return 'Élevé'
  if (level === 'MEDIUM') return 'Moyen'
  return 'Faible'
}

function mapPriority(priority: string): AnalysisResult['commercialPriority'] {
  if (priority === 'HIGH') return 'Haute'
  if (priority === 'MEDIUM') return 'Moyenne'
  return 'Basse'
}

function mapStatus(priority: string, score: number): Prospect['status'] {
  if (priority === 'HIGH') return 'Prioritaire'
  if (score < 45) return 'À compléter'
  return 'Envoyé'
}

function apiAnalysisToProspect(api: ApiAnalysis, formData: AnalysisFormData): Prospect {
  const analysis: AnalysisResult = {
    score: api.score,
    maturityLevel: mapMaturity(api.maturityLevel),
    commercialPriority: mapPriority(api.commercialPriority),
    profileType: api.profileType as AnalysisResult['profileType'],
    recommendedService: api.recommendedService,
    strengths: api.strengths,
    clarifications: api.missingInfo,
    recommendations: api.recommendations,
    nextAction: api.nextAction,
    summary: `${api.profileType} — ${api.city}${api.district ? ', ' + api.district : ''}`,
  }

  return {
    id: api.id,
    userId: api.userId,
    user: {
      firstName: api.user.firstName,
      lastName: api.user.lastName,
      email: api.user.email,
      phone: api.user.phone ?? '',
    },
    formData,
    analysis,
    status: mapStatus(api.commercialPriority, api.score),
    createdAt: api.createdAt,
    updatedAt: api.updatedAt,
  }
}

// ---------------------------------------------------------------------------
// API publique
// ---------------------------------------------------------------------------

/**
 * Envoie le formulaire au backend, reçoit l'analyse générée côté serveur
 * et la persiste aussi en localStorage pour le dashboard admin local.
 */
export async function saveProspect(
  user: User,
  formData: AnalysisFormData,
  _analysis: AnalysisResult, // conservé pour compatibilité de signature
): Promise<Prospect> {
  const projectType = PROJECT_TYPE_MAP[formData.projectType] ?? 'BUY'
  const urgency = URGENCY_MAP[formData.urgency] ?? 'LOW'

  // Extraire ville et quartier depuis le champ location (format "Ville — Quartier" ou "Quartier")
  const locationParts = formData.location.split('—').map((s) => s.trim())
  const city = locationParts[0] || formData.location
  const district = locationParts[1] || undefined

  const body = {
    projectType,
    city,
    district,
    propertyType: formData.propertyType || undefined,
    urgency,
    objective: formData.objective || undefined,
    consentAccepted: true,
  }

  const api = await apiRequest<ApiAnalysis>('/analyses', {
    method: 'POST',
    body: JSON.stringify(body),
  })

  const prospect = apiAnalysisToProspect(api, {
    ...formData,
    email: formData.email || user.email,
    phone: formData.phone || user.phone,
    name: formData.name || `${user.firstName} ${user.lastName}`.trim(),
  })

  // Mise à jour du cache localStorage (dashboard admin)
  writeStorage(PROSPECTS_KEY, [prospect, ...getProspects()])

  return prospect
}

/**
 * Récupère les analyses de l'utilisateur connecté depuis l'API.
 */
export async function fetchMyProspects(user: User): Promise<Prospect[]> {
  const analyses = await apiRequest<ApiAnalysis[]>('/analyses/my')
  return analyses.map((api) =>
    apiAnalysisToProspect(api, {
      projectType: 'Acheter',
      location: api.city + (api.district ? ` — ${api.district}` : ''),
      budget: api.budget ? String(api.budget) : '',
      propertyType: api.propertyType ?? '',
      surface: api.surface ? String(api.surface) : '',
      urgency: api.urgency,
      objective: api.objective ?? '',
      name: `${api.user.firstName} ${api.user.lastName}`.trim(),
      email: api.user.email,
      phone: api.user.phone ?? user.phone,
      consent: true,
    }),
  )
}

// ---------------------------------------------------------------------------
// Fonctions localStorage (dashboard admin — données locales)
// ---------------------------------------------------------------------------

export function getProspects(): Prospect[] {
  return readStorage<Prospect[]>(PROSPECTS_KEY, [])
}

export function getProspectsByUser(userId: string): Prospect[] {
  return getProspects().filter((p) => p.userId === userId)
}

export function updateProspectStatus(id: string, status: ProspectStatus): Prospect | undefined {
  const prospects = getProspects().map((p) =>
    p.id === id ? { ...p, status, updatedAt: new Date().toISOString() } : p,
  )
  writeStorage(PROSPECTS_KEY, prospects)
  return prospects.find((p) => p.id === id)
}
