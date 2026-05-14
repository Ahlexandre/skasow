export type ProjectType = 'Acheter' | 'Louer' | 'Vendre' | 'Investir'

export type MaturityLevel = 'Faible' | 'Moyen' | 'Élevé'
export type CommercialPriority = 'Haute' | 'Moyenne' | 'Basse'

export type ProfileType =
  | 'Acheteur résidentiel'
  | 'Locataire'
  | 'Investisseur'
  | 'Vendeur'
  | 'Professionnel'

export type AnalysisFormData = {
  projectType: ProjectType
  location: string
  budget: string
  propertyType: string
  surface: string
  urgency: string
  objective: string
  name: string
  email: string
  phone: string
  consent: boolean
}

export type AnalysisResult = {
  score: number
  maturityLevel: MaturityLevel
  profileType: ProfileType
  commercialPriority: CommercialPriority
  recommendations: string[]
  strengths: string[]
  clarifications: string[]
  recommendedService: string
  nextAction: string
  summary: string
}
