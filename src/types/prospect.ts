import type { AnalysisFormData, AnalysisResult } from './analysis'
import type { User } from './user'

export type ProspectStatus =
  | 'Envoyé'
  | 'Favori'
  | 'En cours de traitement'
  | 'Prioritaire'
  | 'À compléter'
  | 'Traité'
  | 'À recontacter'
  | 'Archivé'

export type Prospect = {
  id: string
  userId: string
  user: Pick<User, 'firstName' | 'lastName' | 'email' | 'phone'>
  formData: AnalysisFormData
  analysis: AnalysisResult
  status: ProspectStatus
  createdAt: string
  updatedAt: string
}
