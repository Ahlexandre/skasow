export type ProjectType = 'Acheter' | 'Louer' | 'Vendre' | 'Investir'

export type MaturityLevel = 'Faible' | 'Moyen' | 'Élevé'
export type CommercialPriority = 'Haute' | 'Moyenne' | 'Basse'

export type ProfileType =
  | 'Acheteur résidentiel'
  | 'Locataire'
  | 'Investisseur'
  | 'Vendeur'
  | 'Professionnel'

export type MaritalStatusLabel =
  | ''
  | 'Célibataire'
  | 'Marié(e)'
  | 'En couple'
  | 'Divorcé(e)'
  | 'Veuf(ve)'
  | 'Je préfère ne pas répondre'

export type ChildrenAnswer = '' | 'oui' | 'non'

export type AnalysisFormData = {
  projectType: ProjectType
  location: string
  budget: string
  propertyType: string
  surface: string
  urgency: string
  objective: string
  profession: string
  maritalStatus: MaritalStatusLabel
  hasChildren: ChildrenAnswer
  childrenCount: string
  personalNotes: string
  name: string
  email: string
  phone: string
  consent: boolean
}

export function hasPersonalProfile(data: AnalysisFormData) {
  return Boolean(
    data.profession.trim() ||
      data.maritalStatus ||
      data.hasChildren ||
      data.childrenCount.trim() ||
      data.personalNotes.trim(),
  )
}

export function formatPersonalProfileLines(data: AnalysisFormData) {
  const lines: string[] = []

  if (data.profession.trim()) lines.push(`Metier : ${data.profession.trim()}`)
  if (data.maritalStatus) lines.push(`Situation : ${data.maritalStatus}`)
  if (data.hasChildren === 'oui') {
    lines.push(
      data.childrenCount.trim()
        ? `Enfants : oui (${data.childrenCount.trim()})`
        : 'Enfants : oui',
    )
  }
  if (data.hasChildren === 'non') lines.push('Enfants : non')
  if (data.personalNotes.trim()) lines.push(data.personalNotes.trim())

  return lines
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
