import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Home,
  KeyRound,
  LockKeyhole,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import {
  Badge,
  Button,
  Card,
  IconBadge,
  Input,
  ProgressSteps,
  SectionHeader,
  Select,
  Textarea,
  labelClass,
  pageShell,
  primaryButton,
  secondaryButton,
} from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import { generateAnalysis } from '../services/analysisService'
import { saveProspect } from '../services/prospectService'
import type { AnalysisFormData, AnalysisResult, ProjectType } from '../types/analysis'
import type { Prospect } from '../types/prospect'
import { cn } from '../utils/cn'
import { readStorage, removeStorage, writeStorage } from '../utils/storage'

const DRAFT_KEY = 'ds-pending-analysis-draft'

const initialForm: AnalysisFormData = {
  projectType: 'Acheter',
  location: '',
  budget: '',
  propertyType: '',
  surface: '',
  urgency: 'Sous 3 mois',
  objective: '',
  name: '',
  email: '',
  phone: '',
  consent: false,
}

const steps = [
  'Votre projet',
  'Localisation',
  'Budget et bien',
  'Objectif',
  'Coordonnées',
  'Confirmation',
  'Analyse générée',
]

const projectOptions: Array<{
  value: ProjectType
  title: string
  text: string
  icon: typeof Home
}> = [
  {
    value: 'Acheter',
    title: 'Acheter',
    text: 'Trouver un bien fiable et adapté à votre budget.',
    icon: Home,
  },
  {
    value: 'Louer',
    title: 'Louer',
    text: 'Identifier un logement ou local avec des critères clairs.',
    icon: KeyRound,
  },
  {
    value: 'Vendre',
    title: 'Vendre',
    text: 'Structurer votre dossier pour mieux qualifier les prospects.',
    icon: ShieldCheck,
  },
  {
    value: 'Investir',
    title: 'Investir',
    text: 'Évaluer potentiel, quartier, rendement et niveau de risque.',
    icon: BrainCircuit,
  },
]

export default function PreAnalysis() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<AnalysisFormData>(() =>
    readStorage(DRAFT_KEY, initialForm),
  )
  const [currentStep, setCurrentStep] = useState(0)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [prospect, setProspect] = useState<Prospect | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [authRequired, setAuthRequired] = useState(false)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const [transmissionConsent, setTransmissionConsent] = useState(false)

  const completedRequiredFields = [
    formData.projectType,
    formData.location,
    formData.budget,
    formData.propertyType,
    formData.objective,
  ].filter(Boolean).length

  const progressStep = result ? 6 : awaitingConfirmation ? 5 : currentStep

  const updateField = (field: keyof AnalysisFormData, value: string | boolean) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setAuthRequired(false)
    setAwaitingConfirmation(false)
  }

  const canContinue =
    currentStep === 0 ||
    (currentStep === 1 && Boolean(formData.location.trim())) ||
    (currentStep === 2 &&
      Boolean(formData.budget.trim()) &&
      Boolean(formData.propertyType.trim())) ||
    (currentStep === 3 && Boolean(formData.objective.trim())) ||
    currentStep === 4 ||
    (currentStep === 5 && formData.consent)

  const goNext = () => {
    if (!canContinue) return
    setCurrentStep((step) => Math.min(step + 1, 5))
  }

  const goBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 0))
    setAuthRequired(false)
    setAwaitingConfirmation(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.consent) return

    writeStorage(DRAFT_KEY, formData)

    if (!currentUser) {
      setAuthRequired(true)
      return
    }

    setAwaitingConfirmation(true)
  }

  const handleAuthRedirect = () => {
    writeStorage(DRAFT_KEY, formData)
    navigate('/auth', { state: { from: '/pre-analysis' } })
  }

  const generateAndSave = async () => {
    if (!currentUser || !transmissionConsent) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 450))
    const enrichedFormData = {
      ...formData,
      name: formData.name || `${currentUser.firstName} ${currentUser.lastName}`.trim(),
      email: formData.email || currentUser.email,
      phone: formData.phone || currentUser.phone,
    }
    const analysis = generateAnalysis(enrichedFormData)
    const savedProspect = saveProspect(currentUser, enrichedFormData, analysis)
    setResult(analysis)
    setProspect(savedProspect)
    setAwaitingConfirmation(false)
    setIsLoading(false)
    removeStorage(DRAFT_KEY)
  }

  return (
    <section className={pageShell}>
      <SectionHeader
        eyebrow="Pré-analyse IA"
        title="Un diagnostic immobilier guidé, clair et actionnable"
        description="Répondez étape par étape. DS Conseil transforme vos informations en score, niveau de maturité, priorité commerciale et prochain pas."
        centered
      />

      <div className="mt-12">
        <ProgressSteps steps={steps} currentStep={progressStep} />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="border-b border-neutral-200 bg-[#FAFAF8] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Badge tone="accent">Étape {Math.min(progressStep + 1, 7)}/7</Badge>
                <h2 className="mt-4 text-2xl font-semibold text-[#111111]">
                  {steps[progressStep]}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
                  Les champs essentiels sont demandés au bon moment pour garder
                  le parcours léger et lisible.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#1E5E52] shadow-sm">
                {completedRequiredFields}/5 informations clés
              </div>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#EAE4D8]">
              <div
                className="h-full rounded-full bg-[#1E5E52] transition-all duration-500"
                style={{ width: `${(completedRequiredFields / 5) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {currentStep === 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {projectOptions.map((option) => (
                  <ChoiceCard
                    key={option.value}
                    active={formData.projectType === option.value}
                    icon={option.icon}
                    title={option.title}
                    text={option.text}
                    onClick={() => updateField('projectType', option.value)}
                  />
                ))}
              </div>
            )}

            {currentStep === 1 && (
              <div className="grid gap-6">
                <label className={labelClass}>
                  Ville ou quartier recherché
                  <Input
                    required
                    value={formData.location}
                    onChange={(event) => updateField('location', event.target.value)}
                    placeholder="Bamako, ACI 2000, Kalaban, Sotuba..."
                  />
                </label>
                <Card tone="muted" className="p-5">
                  <div className="flex gap-4">
                    <IconBadge icon={MapPin} />
                    <p className="text-sm leading-7 text-[#6B7280]">
                      Une localisation précise aide DS Conseil à mieux évaluer
                      cohérence du budget, disponibilité et urgence du dossier.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  Budget
                  <Input
                    required
                    value={formData.budget}
                    onChange={(event) => updateField('budget', event.target.value)}
                    placeholder="Ex. 35 000 000 FCFA"
                  />
                </label>
                <label className={labelClass}>
                  Type de bien
                  <Input
                    required
                    value={formData.propertyType}
                    onChange={(event) => updateField('propertyType', event.target.value)}
                    placeholder="Maison, terrain, appartement..."
                  />
                </label>
                <label className={labelClass}>
                  Surface souhaitée
                  <Input
                    value={formData.surface}
                    onChange={(event) => updateField('surface', event.target.value)}
                    placeholder="Ex. 300 m2"
                  />
                </label>
                <label className={labelClass}>
                  Urgence
                  <Select
                    value={formData.urgency}
                    onChange={(event) => updateField('urgency', event.target.value)}
                  >
                    <option>Immédiate</option>
                    <option>Sous 3 mois</option>
                    <option>Dans 6 mois</option>
                    <option>Exploration</option>
                  </Select>
                </label>
              </div>
            )}

            {currentStep === 3 && (
              <label className={labelClass}>
                Objectif et contraintes importantes
                <Textarea
                  required
                  rows={6}
                  value={formData.objective}
                  onChange={(event) => updateField('objective', event.target.value)}
                  placeholder="Décrivez votre besoin, vos contraintes, vos attentes, vos délais ou vos critères non négociables."
                />
              </label>
            )}

            {currentStep === 4 && (
              <div className="grid gap-5 md:grid-cols-3">
                <label className={labelClass}>
                  Nom
                  <Input
                    value={formData.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder="Facultatif"
                  />
                </label>
                <label className={labelClass}>
                  Email
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="Facultatif"
                  />
                </label>
                <label className={labelClass}>
                  Téléphone
                  <Input
                    value={formData.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    placeholder="+223..."
                  />
                </label>
              </div>
            )}

            {currentStep === 5 && (
              <div className="grid gap-6">
                <Card tone="muted" className="p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <SummaryItem label="Projet" value={formData.projectType} />
                    <SummaryItem label="Localisation" value={formData.location} />
                    <SummaryItem label="Budget" value={formData.budget} />
                    <SummaryItem label="Bien" value={formData.propertyType} />
                    <SummaryItem label="Urgence" value={formData.urgency} />
                    <SummaryItem
                      label="Contact"
                      value={formData.phone || formData.email || 'À compléter'}
                    />
                  </div>
                </Card>
                <label className="flex items-start gap-3 rounded-3xl border border-neutral-200 bg-white p-5 text-sm leading-6 text-[#6B7280]">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(event) => updateField('consent', event.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#1E5E52]"
                  />
                  J’accepte que ces informations soient utilisées pour préparer
                  ma pré-analyse immobilière.
                </label>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-neutral-200 bg-[#FAFAF8] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <Button
              type="button"
              variant="secondary"
              onClick={goBack}
              disabled={currentStep === 0 || Boolean(result)}
            >
              <ArrowLeft size={17} />
              Retour
            </Button>

            {currentStep < 5 ? (
              <Button type="button" onClick={goNext} disabled={!canContinue}>
                Continuer
                <ArrowRight size={17} />
              </Button>
            ) : (
              <button type="submit" disabled={!formData.consent} className={primaryButton}>
                <BrainCircuit size={18} />
                Obtenir mon analyse personnalisée
              </button>
            )}
          </div>
        </form>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Card>
            <div className="flex items-center gap-3">
              <IconBadge icon={result ? CheckCircle2 : LockKeyhole} />
              <div>
                <h2 className="text-2xl font-semibold text-[#111111]">
                  Analyse personnalisée
                </h2>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Score, maturité, priorité et prochaine action.
                </p>
              </div>
            </div>

            {authRequired && (
              <div className="mt-8 rounded-3xl bg-[#F5F5F3] p-6">
                <p className="font-bold text-[#111111]">
                  Connectez-vous ou créez un compte pour obtenir votre analyse.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  Le brouillon est conservé localement pour reprendre le
                  diagnostic après connexion.
                </p>
                <button
                  type="button"
                  onClick={handleAuthRedirect}
                  className={`${primaryButton} mt-6`}
                >
                  Se connecter / S’inscrire
                </button>
              </div>
            )}

            {awaitingConfirmation && currentUser && (
              <div className="mt-8 rounded-3xl bg-[#F5F5F3] p-6">
                <div className="flex gap-3">
                  <Clock className="mt-1 shrink-0 text-[#1E5E52]" size={20} />
                  <div>
                    <p className="font-bold text-[#111111]">
                      Confirmez l’envoi à DS Conseil.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                      Vos informations seront utilisées pour générer l’analyse
                      et permettre un suivi commercial.
                    </p>
                  </div>
                </div>
                <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#6B7280]">
                  <input
                    type="checkbox"
                    checked={transmissionConsent}
                    onChange={(event) => setTransmissionConsent(event.target.checked)}
                    className="mt-1 h-4 w-4 accent-[#1E5E52]"
                  />
                  J’accepte que mes informations soient transmises à DS Conseil
                  pour être recontacté.
                </label>
                <button
                  type="button"
                  disabled={!transmissionConsent || isLoading}
                  onClick={() => void generateAndSave()}
                  className={`${primaryButton} mt-6 w-full`}
                >
                  {isLoading ? 'Génération en cours...' : 'Envoyer et générer'}
                </button>
              </div>
            )}

            {prospect && result && (
              <div className="mt-8">
                <Link to="/mon-espace" className={secondaryButton}>
                  Voir mon espace
                </Link>
              </div>
            )}

            {!authRequired && !awaitingConfirmation && !result && (
              <div className="mt-8 grid gap-4">
                {[
                  'Aucune information sensible affichée publiquement.',
                  'Connexion demandée seulement avant la génération.',
                  'Résultat structuré pour faciliter le prochain échange.',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-[#6B7280]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#1E5E52]" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </aside>
      </div>

      {prospect && result && (
        <div className="mt-10">
          <AnalysisCard prospect={prospect} />
        </div>
      )}
    </section>
  )
}

function ChoiceCard({
  active,
  icon: Icon,
  title,
  text,
  onClick,
}: {
  active: boolean
  icon: typeof Home
  title: string
  text: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-3xl border p-5 text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10',
        active
          ? 'border-[#1E5E52] bg-[#F5F5F3]'
          : 'border-neutral-200 bg-white hover:border-[#1E5E52]/30 hover:bg-[#FAFAF8]',
      )}
    >
      <IconBadge icon={Icon} tone={active ? 'dark' : 'light'} />
      <p className="mt-5 text-lg font-semibold text-[#111111]">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#6B7280]">{text}</p>
    </button>
  )
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-[#111111]">{value || 'À préciser'}</p>
    </div>
  )
}
