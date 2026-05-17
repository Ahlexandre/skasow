/**
 * prospectService — pont entre le formulaire frontend et l'API backend /analyses.
 *
 * Mappage des valeurs françaises du formulaire vers les enums Prisma attendus par le backend :
 *   ProjectType : Acheter→BUY  Louer→RENT  Vendre→SELL  Investir→INVEST
 *   Urgency     : Immediate→HIGH  Sous 3 mois→MEDIUM  Dans 6 mois→LOW  Exploration→LOW
 *
 * Le localStorage n'est conservé que pour le dashboard admin (lecture seule, données locales).
 */

import {
  formatBudgetFromNumber,
  formatSurfaceFromNumber,
  parseBudgetRangeLabel,
  parseSurfaceRangeLabel,
} from '../data/analysisFormOptions'
import type {
  AnalysisFormData,
  AnalysisResult,
  ChildrenAnswer,
  MaritalStatusLabel,
} from '../types/analysis'
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

const API_PROJECT_TYPE_MAP: Record<string, AnalysisFormData['projectType']> = {
  BUY: 'Acheter',
  RENT: 'Louer',
  SELL: 'Vendre',
  INVEST: 'Investir',
}

const URGENCY_MAP: Record<string, string> = {
  "Immediate (moins d'1 mois)": 'HIGH',
  'Sous 3 mois': 'MEDIUM',
  'Dans 6 mois': 'LOW',
  'Exploration (pas de delai fixe)': 'LOW',
}

const API_URGENCY_MAP: Record<string, string> = {
  HIGH: "Immediate (moins d'1 mois)",
  MEDIUM: 'Sous 3 mois',
  LOW: 'Exploration (pas de delai fixe)',
}

const API_STATUS_MAP: Record<string, ProspectStatus> = {
  SENT: 'Envoyé',
  FAVORITE: 'Favori',
  IN_PROGRESS: 'En cours de traitement',
  PRIORITY: 'Prioritaire',
  INCOMPLETE: 'À compléter',
  PROCESSED: 'Traité',
  TO_RECONTACT: 'À recontacter',
  ARCHIVED: 'Archivé',
}

const MARITAL_STATUS_MAP: Record<Exclude<MaritalStatusLabel, ''>, string> = {
  'Célibataire': 'SINGLE',
  'Marié(e)': 'MARRIED',
  'En couple': 'PARTNERED',
  'Divorcé(e)': 'DIVORCED',
  'Veuf(ve)': 'WIDOWED',
  'Je préfère ne pas répondre': 'PREFER_NOT_TO_SAY',
}

const API_MARITAL_STATUS_MAP: Record<string, MaritalStatusLabel> = {
  SINGLE: 'Célibataire',
  MARRIED: 'Marié(e)',
  PARTNERED: 'En couple',
  DIVORCED: 'Divorcé(e)',
  WIDOWED: 'Veuf(ve)',
  PREFER_NOT_TO_SAY: 'Je préfère ne pas répondre',
}

const STATUS_API_MAP: Record<ProspectStatus, string> = {
  Envoyé: 'SENT',
  Favori: 'FAVORITE',
  'En cours de traitement': 'IN_PROGRESS',
  Prioritaire: 'PRIORITY',
  'À compléter': 'INCOMPLETE',
  Traité: 'PROCESSED',
  'À recontacter': 'TO_RECONTACT',
  Archivé: 'ARCHIVED',
}

// ---------------------------------------------------------------------------
// Mapper réponse API → Prospect local (pour affichage immédiat)
// ---------------------------------------------------------------------------

export type ApiAnalysis = {
  id: string
  userId: string
  projectType: string
  city: string
  district?: string | null
  budget?: number | null
  budgetRange?: string | null
  propertyType?: string | null
  surface?: number | null
  surfaceRange?: string | null
  urgency: string
  objective?: string | null
  message?: string | null
  profession?: string | null
  maritalStatus?: string | null
  hasChildren?: boolean | null
  childrenCount?: number | null
  personalNotes?: string | null
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

type PaginatedApiAnalyses = {
  items: ApiAnalysis[]
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

function mapApiStatus(api: ApiAnalysis): ProspectStatus {
  return API_STATUS_MAP[api.status] ?? mapStatus(api.commercialPriority, api.score)
}

function mapChildrenAnswer(value: ChildrenAnswer): boolean | undefined {
  if (value === 'oui') return true
  if (value === 'non') return false
  return undefined
}

function mapChildrenFromApi(value?: boolean | null): ChildrenAnswer {
  if (value === true) return 'oui'
  if (value === false) return 'non'
  return ''
}

function buildPersonalPayload(formData: AnalysisFormData) {
  const hasChildren = mapChildrenAnswer(formData.hasChildren)
  const childrenCount =
    hasChildren === true && formData.childrenCount.trim()
      ? Number.parseInt(formData.childrenCount, 10)
      : undefined

  return {
    profession: formData.profession.trim() || undefined,
    maritalStatus: formData.maritalStatus
      ? MARITAL_STATUS_MAP[formData.maritalStatus]
      : undefined,
    hasChildren,
    childrenCount:
      hasChildren === true && Number.isFinite(childrenCount)
        ? childrenCount
        : undefined,
    personalNotes: formData.personalNotes.trim() || undefined,
  }
}

function splitLocation(location: string) {
  const [city, district] = location
    .replace(/\s+[-–—]\s+/g, ' — ')
    .split(' — ')
    .map((item) => item.trim())

  return {
    city: city || location.trim(),
    district: district || undefined,
  }
}

function apiAnalysisToFormData(api: ApiAnalysis, user?: User): AnalysisFormData {
  return {
    projectType: API_PROJECT_TYPE_MAP[api.projectType] ?? 'Acheter',
    location: api.city + (api.district ? ` — ${api.district}` : ''),
    budget: api.budgetRange ?? formatBudgetFromNumber(api.budget),
    propertyType: api.propertyType ?? '',
    surface: api.surfaceRange ?? formatSurfaceFromNumber(api.surface),
    urgency: API_URGENCY_MAP[api.urgency] ?? api.urgency,
    objective: api.objective ?? api.message ?? '',
    profession: api.profession ?? '',
    maritalStatus: api.maritalStatus
      ? (API_MARITAL_STATUS_MAP[api.maritalStatus] ?? '')
      : '',
    hasChildren: mapChildrenFromApi(api.hasChildren),
    childrenCount:
      api.hasChildren === true && api.childrenCount != null
        ? String(api.childrenCount)
        : '',
    personalNotes: api.personalNotes ?? '',
    firstName: api.user.firstName,
    lastName: api.user.lastName,
    name: `${api.user.firstName} ${api.user.lastName}`.trim(),
    email: api.user.email,
    phone: api.user.phone ?? user?.phone ?? '',
    consent: true,
  }
}

function buildAnalysisPayload(formData: AnalysisFormData) {
  const budgetRange = formData.budget.trim() || undefined
  const surfaceRange = formData.surface.trim() || undefined

  return {
    budgetRange,
    surfaceRange,
    budget: parseBudgetRangeLabel(formData.budget),
    surface: parseSurfaceRangeLabel(formData.surface),
  }
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
    status: mapApiStatus(api),
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
  analysis: AnalysisResult, // conservé pour compatibilité de signature
): Promise<Prospect> {
  void analysis
  const projectType = PROJECT_TYPE_MAP[formData.projectType] ?? 'BUY'
  const urgency = URGENCY_MAP[formData.urgency] ?? 'LOW'
  const { city, district } = splitLocation(formData.location)

  const body = {
    projectType,
    city,
    district,
    propertyType: formData.propertyType || undefined,
    urgency,
    objective: formData.objective || undefined,
    consentAccepted: true,
    ...buildAnalysisPayload(formData),
    ...buildPersonalPayload(formData),
  }

  const api = await apiRequest<ApiAnalysis>('/analyses', {
    method: 'POST',
    body: JSON.stringify(body),
  })

  const prospect = apiAnalysisToProspect(api, {
    ...formData,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    name: `${user.firstName} ${user.lastName}`.trim(),
  })

  return prospect
}

/**
 * Récupère les analyses de l'utilisateur connecté depuis l'API.
 */
export async function fetchMyProspects(user: User): Promise<Prospect[]> {
  const analyses = await apiRequest<ApiAnalysis[]>('/analyses/my')
  return analyses.map((api) => apiAnalysisToProspect(api, apiAnalysisToFormData(api, user)))
}

export async function updateMyProspect(
  id: string,
  user: User,
  formData: AnalysisFormData,
): Promise<Prospect> {
  const projectType = PROJECT_TYPE_MAP[formData.projectType] ?? 'BUY'
  const urgency = URGENCY_MAP[formData.urgency] ?? 'LOW'
  const { city, district } = splitLocation(formData.location)

  const body = {
    projectType,
    city,
    district,
    propertyType: formData.propertyType || undefined,
    urgency,
    objective: formData.objective || undefined,
    consentAccepted: true,
    ...buildAnalysisPayload(formData),
    ...buildPersonalPayload(formData),
  }

  const api = await apiRequest<ApiAnalysis>(`/analyses/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  })

  return apiAnalysisToProspect(api, apiAnalysisToFormData(api, user))
}

export async function deleteMyProspect(id: string): Promise<void> {
  await apiRequest<{ success: boolean }>(`/analyses/${id}`, {
    method: 'DELETE',
  })
}

export async function fetchAdminProspects(): Promise<Prospect[]> {
  const response = await apiRequest<PaginatedApiAnalyses>(
    '/admin/analyses?limit=100&sortBy=score&sortOrder=desc',
  )

  return response.items.map((api) => apiAnalysisToProspect(api, apiAnalysisToFormData(api)))
}

export async function fetchAdminProspect(id: string): Promise<Prospect> {
  const api = await apiRequest<ApiAnalysis>(`/admin/analyses/${id}`)
  return apiAnalysisToProspect(api, apiAnalysisToFormData(api))
}

export async function updateAdminProspectStatus(
  id: string,
  status: ProspectStatus,
): Promise<Prospect> {
  const api = await apiRequest<ApiAnalysis>(`/admin/analyses/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status: STATUS_API_MAP[status] }),
  })

  return apiAnalysisToProspect(api, apiAnalysisToFormData(api))
}

export async function deleteAdminProspect(id: string): Promise<void> {
  await apiRequest<{ success: boolean }>(`/admin/analyses/${id}`, {
    method: 'DELETE',
  })
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
