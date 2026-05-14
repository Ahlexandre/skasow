import type { AnalysisFormData, AnalysisResult } from './analysis'
import type { User } from './user'

export type ProspectStatus =
  | 'Envoyé'
  | 'En cours de traitement'
  | 'Prioritaire'
  | 'À compléter'
  | 'Traité'
  | 'À recontacter'

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
