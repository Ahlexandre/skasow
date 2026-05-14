import type {
  AnalysisFormData,
  AnalysisResult,
  CommercialPriority,
  MaturityLevel,
  ProfileType,
} from '../types/analysis'

export function generateAnalysis(data: AnalysisFormData): AnalysisResult {
  const score = calculateScore(data)
  const maturityLevel = getMaturity(score)
  const commercialPriority = getPriority(score)
  const profileType = getProfileType(data)
  const recommendedService = getRecommendedService(data)

  return {
    score,
    maturityLevel,
    profileType,
    commercialPriority,
    recommendedService,
    summary: `${profileType} avec un projet ${data.projectType.toLowerCase()} à ${data.location || 'localisation à préciser'}, budget ${data.budget || 'non renseigné'}.`,
    recommendations: [
      getBudgetRecommendation(data),
      'Préparer les documents utiles avant la prise de contact.',
      'Comparer le quartier ciblé avec au moins deux alternatives proches.',
    ],
    strengths: getStrengths(data, score),
    clarifications: getClarifications(data),
    nextAction:
      commercialPriority === 'Haute'
        ? 'Planifier un rappel prioritaire sous 24 heures.'
        : commercialPriority === 'Moyenne'
          ? 'Compléter les informations manquantes puis proposer un échange.'
          : 'Envoyer une première orientation et demander des précisions.',
  }
}

function calculateScore(data: AnalysisFormData) {
  let score = 0

  if (data.budget.trim()) score += 20
  if (data.phone.trim()) score += 15
  if (data.email.trim()) score += 10
  if (['Immédiate', 'Sous 3 mois'].includes(data.urgency)) score += 20
  if (['Acheter', 'Investir'].includes(data.projectType)) score += 15
  if (data.location.trim()) score += 10
  if (data.surface.trim() || data.propertyType.trim()) score += 10

  return Math.min(score, 100)
}

function getMaturity(score: number): MaturityLevel {
  if (score >= 75) return 'Élevé'
  if (score >= 45) return 'Moyen'
  return 'Faible'
}

function getPriority(score: number): CommercialPriority {
  if (score >= 75) return 'Haute'
  if (score >= 45) return 'Moyenne'
  return 'Basse'
}

function getProfileType(data: AnalysisFormData): ProfileType {
  if (data.objective.toLowerCase().includes('bureau')) return 'Professionnel'
  if (data.projectType === 'Acheter') return 'Acheteur résidentiel'
  if (data.projectType === 'Louer') return 'Locataire'
  if (data.projectType === 'Investir') return 'Investisseur'
  return 'Vendeur'
}

function getRecommendedService(data: AnalysisFormData) {
  const services = {
    Acheter: 'Achat',
    Louer: 'Location',
    Vendre: 'Vente',
    Investir: 'Investissement',
  }

  return services[data.projectType]
}

function getBudgetRecommendation(data: AnalysisFormData) {
  if (!data.budget.trim()) {
    return 'Préciser une enveloppe budgétaire pour mieux qualifier le dossier.'
  }

  return 'Valider la cohérence entre budget, quartier et type de bien ciblé.'
}

function getStrengths(data: AnalysisFormData, score: number) {
  const strengths: string[] = []

  if (data.location.trim()) strengths.push('Localisation cible renseignée')
  if (data.budget.trim()) strengths.push('Budget communiqué')
  if (data.phone.trim() && data.email.trim()) strengths.push('Coordonnées complètes')
  if (score >= 75) strengths.push('Dossier à fort potentiel commercial')

  return strengths.length ? strengths : ['Intention immobilière clairement exprimée']
}

function getClarifications(data: AnalysisFormData) {
  const clarifications: string[] = []

  if (!data.surface.trim()) clarifications.push('Surface souhaitée à préciser')
  if (!data.propertyType.trim()) clarifications.push('Type de bien à confirmer')
  if (!data.phone.trim()) clarifications.push('Téléphone manquant pour rappel rapide')
  if (!data.budget.trim()) clarifications.push('Budget à cadrer')

  return clarifications.length ? clarifications : ['Aucun point bloquant identifié']
}
