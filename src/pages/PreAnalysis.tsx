import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, Clock, Home, KeyRound, LockKeyhole, MapPin, ShieldCheck } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import PrivacyPolicyLink from '../components/PrivacyPolicyLink'
import {
  BudgetSelect,
  LocationSelect,
  MaritalStatusSelect,
  ProfessionSelect,
  PropertyTypeSelect,
  SurfaceSelect,
} from '../components/AnalysisFormSelects'
import { Button, Input, ProgressSteps, Select, Textarea, labelClass, primaryButton, secondaryButton } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import { generateAnalysis } from '../services/analysisService'
import { saveProspect } from '../services/prospectService'
import type { AnalysisFormData, AnalysisResult, ProjectType } from '../types/analysis'
import { hasPersonalProfile } from '../types/analysis'
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
  profession: '',
  maritalStatus: '',
  hasChildren: '',
  childrenCount: '',
  personalNotes: '',
  name: '',
  email: '',
  phone: '',
  consent: false,
}
const steps = ['Projet', 'Localisation', 'Budget', 'Objectif', 'Profil', 'Coordonnees', 'Confirmation', 'Resultat']

const projectOptions: Array<{ value: ProjectType; title: string; text: string; icon: typeof Home }> = [
  { value: 'Acheter',  title: 'Acheter',   text: 'Trouver un bien fiable et adapte a votre budget.',           icon: Home },
  { value: 'Louer',   title: 'Louer',     text: 'Identifier un logement ou local avec des criteres clairs.',  icon: KeyRound },
  { value: 'Vendre',  title: 'Vendre',    text: 'Structurer votre dossier pour mieux qualifier les prospects.',icon: ShieldCheck },
  { value: 'Investir',title: 'Investir',  text: 'Evaluer potentiel, quartier, rendement et risque.',          icon: BrainCircuit },
]

export default function PreAnalysis() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<AnalysisFormData>(() => ({
    ...initialForm,
    ...readStorage<Partial<AnalysisFormData>>(DRAFT_KEY, {}),
  }))
  const [currentStep, setCurrentStep] = useState(0)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [prospect, setProspect] = useState<Prospect | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [authRequired, setAuthRequired] = useState(false)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const [transmissionConsent, setTransmissionConsent] = useState(false)

  const completedFields = [formData.projectType, formData.location, formData.budget, formData.propertyType, formData.objective].filter(Boolean).length
  const progressStep = result ? 7 : awaitingConfirmation ? 6 : currentStep

  const updateField = (field: keyof AnalysisFormData, value: string | boolean) => {
    setFormData((c) => ({ ...c, [field]: value }))
    setAuthRequired(false); setAwaitingConfirmation(false)
  }

  const canContinue =
    currentStep === 0 ||
    (currentStep === 1 && Boolean(formData.location.trim())) ||
    (currentStep === 2 && Boolean(formData.budget.trim()) && Boolean(formData.propertyType.trim())) ||
    (currentStep === 3 && Boolean(formData.objective.trim())) ||
    currentStep === 4 ||
    currentStep === 5 ||
    (currentStep === 6 && formData.consent)

  const goNext = () => { if (!canContinue) return; setCurrentStep((s) => Math.min(s + 1, 6)) }
  const goBack = () => { setCurrentStep((s) => Math.max(s - 1, 0)); setAuthRequired(false); setAwaitingConfirmation(false) }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.consent) return
    writeStorage(DRAFT_KEY, formData)
    if (!currentUser) { setAuthRequired(true); return }
    setAwaitingConfirmation(true)
  }

  const generateAndSave = async () => {
    if (!currentUser || !transmissionConsent) return
    setIsLoading(true)
    try {
      const enriched = {
        ...formData,
        name: formData.name || `${currentUser.firstName} ${currentUser.lastName}`.trim(),
        email: formData.email || currentUser.email,
        phone: formData.phone || currentUser.phone,
      }
      // Génération locale pour affichage immédiat, puis envoi au backend
      const localAnalysis = generateAnalysis(enriched)
      const saved = await saveProspect(currentUser, enriched, localAnalysis)
      setResult(saved.analysis)
      setProspect(saved)
      setAwaitingConfirmation(false)
      removeStorage(DRAFT_KEY)
    } catch (err) {
      console.error('Erreur lors de la sauvegarde de l\'analyse :', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-6 py-16 lg:px-16 lg:py-24">
      {/* En-tete */}
      <div className="mb-12 border-b border-white/5 pb-10">
        <span className="text-[11px] font-mono tracking-[0.2em] text-[#6B6760] uppercase">003 — Analyse IA</span>
        <h1 className="mt-4 font-display text-4xl tracking-[-0.04em] text-[#F0EDE8] lg:text-5xl">
          Votre diagnostic<br />immobilier
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[#6B6760]">
          Repondez etape par etape. DS Conseil transforme vos informations en score, maturite et prochaine action.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-10">
        <ProgressSteps steps={steps} currentStep={progressStep} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="rounded-[20px]" style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111118' }}>
          {/* Header form */}
          <div className="flex items-center justify-between p-6 lg:p-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <span className="font-mono text-xs text-[#6B6760]">Etape {Math.min(progressStep + 1, 8)}/8</span>
              <h2 className="mt-1 font-display text-xl text-[#F0EDE8]">{steps[progressStep]}</h2>
            </div>
            <div className="text-right">
              <span className="font-display text-2xl text-[#C9A84C]">{completedFields}</span>
              <span className="text-sm text-[#6B6760]">/5</span>
              <p className="text-[10px] text-[#6B6760]">infos cles</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-[2px] bg-white/5">
            <div className="progress-gold h-full" style={{ width: ((completedFields / 5) * 100) + "%" }} />
          </div>

          {/* Corps */}
          <div className="p-6 lg:p-8">
            {currentStep === 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {projectOptions.map((opt) => (
                  <button key={opt.value} type="button" onClick={() => updateField('projectType', opt.value)}
                    className={cn(
                      'rounded-[14px] p-5 text-left transition-all duration-200 focus:outline-none',
                      formData.projectType === opt.value
                        ? 'border border-[#C9A84C]/40 bg-[#C9A84C]/8'
                        : 'border border-white/6 bg-[#1C1C27] hover:border-white/12',
                    )}>
                    <p className="font-semibold text-[#F0EDE8]">{opt.title}</p>
                    <p className="mt-1.5 text-xs leading-6 text-[#6B6760]">{opt.text}</p>
                  </button>
                ))}
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex flex-col gap-5">
                <label className={labelClass}>
                  Ville ou quartier
                  <LocationSelect
                    required
                    value={formData.location}
                    onChange={(value) => updateField('location', value)}
                  />
                </label>
                <div className="flex items-start gap-3 rounded-[12px] p-4" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.1)' }}>
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#C9A84C]" strokeWidth={2} />
                  <p className="text-xs leading-6 text-[#6B6760]">Une localisation precise aide DS Conseil a mieux evaluer la coherence du budget et l urgence du dossier.</p>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Budget (en FCFA)
                  <BudgetSelect
                    required
                    value={formData.budget}
                    onChange={(value) => updateField('budget', value)}
                  />
                </label>
                <label className={labelClass}>
                  Type de bien
                  <PropertyTypeSelect
                    required
                    value={formData.propertyType}
                    onChange={(value) => updateField('propertyType', value)}
                  />
                </label>
                <label className={labelClass}>
                  Surface souhaitee
                  <SurfaceSelect
                    value={formData.surface}
                    onChange={(value) => updateField('surface', value)}
                  />
                </label>
                <label className={labelClass}>
                  Urgence
                  <Select value={formData.urgency} onChange={(e) => updateField('urgency', e.target.value)}>
                    <option>Immediate (moins d 1 mois)</option>
                    <option>Sous 3 mois</option>
                    <option>Dans 6 mois</option>
                    <option>Exploration (pas de delai fixe)</option>
                  </Select>
                </label>
                <div className="col-span-2 flex items-start gap-3 rounded-[12px] p-4" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.1)' }}>
                  <p className="text-xs leading-6 text-[#6B6760]">Tous les montants sont en <strong className="text-[#C9A84C]">Francs CFA (FCFA)</strong>. Si votre budget est flexible, choisissez la tranche la plus proche ou "Budget a definir".</p>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <label className={labelClass}>Objectif et contraintes<Textarea required rows={6} value={formData.objective} onChange={(e) => updateField('objective', e.target.value)} placeholder="Decrivez votre besoin, vos contraintes, vos attentes..." /></label>
            )}
            {currentStep === 4 && (
              <div className="flex flex-col gap-5">
                <div className="rounded-[12px] p-4" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.1)' }}>
                  <p className="text-xs leading-6 text-[#6B6760]">
                    Ces informations sont <strong className="text-[#C9A84C]">facultatives</strong>. Elles aident DS Conseil a mieux comprendre votre contexte sans bloquer votre analyse.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Metier / activite professionnelle
                    <ProfessionSelect
                      value={formData.profession}
                      onChange={(value) => updateField('profession', value)}
                    />
                  </label>
                  <label className={labelClass}>
                    Situation familiale
                    <MaritalStatusSelect
                      value={formData.maritalStatus}
                      onChange={(value) => updateField('maritalStatus', value)}
                    />
                  </label>
                  <label className={labelClass}>
                    Enfants a charge
                    <Select
                      value={formData.hasChildren}
                      onChange={(e) => {
                        updateField('hasChildren', e.target.value)
                        if (e.target.value !== 'oui') updateField('childrenCount', '')
                      }}
                    >
                      <option value="">-- Non renseigne --</option>
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </Select>
                  </label>
                  {formData.hasChildren === 'oui' && (
                    <label className={labelClass}>
                      Nombre d&apos;enfants (facultatif)
                      <Input
                        type="number"
                        min={0}
                        max={20}
                        value={formData.childrenCount}
                        onChange={(e) => updateField('childrenCount', e.target.value)}
                        placeholder="Ex. 2"
                      />
                    </label>
                  )}
                </div>
                <label className={labelClass}>
                  Autres precisions personnelles
                  <Textarea
                    rows={4}
                    value={formData.personalNotes}
                    onChange={(e) => updateField('personalNotes', e.target.value)}
                    placeholder="Ex. projet en couple, besoin de proximite ecole, revenus variables..."
                  />
                </label>
              </div>
            )}
            {currentStep === 5 && (
              <div className="grid gap-5 sm:grid-cols-3">
                <label className={labelClass}>Nom<Input value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Facultatif" /></label>
                <label className={labelClass}>Email<Input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="Facultatif" /></label>
                <label className={labelClass}>
                  Telephone
                  <div className="flex">
                    <span className="flex items-center rounded-l-[14px] border border-r-0 border-white/12 bg-white/5 px-3 text-sm text-[#6B6760] whitespace-nowrap">+223</span>
                    <Input
                      value={formData.phone.replace(/^\+223\s?/, '')}
                      onChange={(e) => updateField('phone', e.target.value ? '+223 ' + e.target.value : '')}
                      placeholder="7X XX XX XX"
                      className="rounded-l-none"
                    />
                  </div>
                </label>
              </div>
            )}
            {currentStep === 6 && (
              <div className="flex flex-col gap-5">
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    ['Projet', formData.projectType],
                    ['Localisation', formData.location],
                    ['Budget', formData.budget],
                    ['Bien', formData.propertyType],
                    ['Urgence', formData.urgency],
                    ['Profil', hasPersonalProfile(formData) ? 'Renseigne' : 'Non renseigne (facultatif)'],
                    ['Contact', formData.phone || formData.email || 'A completer'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1 rounded-[10px] p-3" style={{ background: '#1C1C27' }}>
                      <span className="font-mono text-[10px] tracking-[0.15em] text-[#6B6760] uppercase">{label}</span>
                      <span className="text-sm font-semibold text-[#F0EDE8]">{value || 'A preciser'}</span>
                    </div>
                  ))}
                </div>
                <label className="flex items-start gap-3 text-sm leading-6 text-[#6B6760]">
                  <input type="checkbox" checked={formData.consent} onChange={(e) => updateField('consent', e.target.checked)} className="mt-1 h-4 w-4 accent-[#C9A84C]" />
                  <span>
                    J accepte que ces informations soient utilisees pour preparer ma pre-analyse, conformement a la{' '}
                    <PrivacyPolicyLink />.
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Footer form */}
          <div className="flex items-center justify-between p-6 lg:p-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Button type="button" variant="ghost" onClick={goBack} disabled={currentStep === 0 || Boolean(result)}>
              <ArrowLeft size={15} strokeWidth={2} /> Retour
            </Button>
            {currentStep < 6
              ? (
                <div className="flex items-center gap-3">
                  {currentStep === 4 && (
                    <Button type="button" variant="ghost" onClick={goNext}>
                      Passer cette etape
                    </Button>
                  )}
                  <Button type="button" onClick={goNext} disabled={!canContinue}>
                    Continuer <ArrowRight size={15} strokeWidth={2} />
                  </Button>
                </div>
              )
              : <button type="submit" disabled={!formData.consent} className={primaryButton}><BrainCircuit size={16} strokeWidth={1.75} />Obtenir mon analyse</button>}
          </div>
        </form>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[20px] p-6" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-3">
              <div className={"flex h-10 w-10 items-center justify-center rounded-[12px] " + (result ? "bg-[#C9A84C] text-[#0A0A0F]" : "bg-[#C9A84C]/12 text-[#C9A84C]")}>
                {result ? <CheckCircle2 size={20} strokeWidth={2} /> : <LockKeyhole size={20} strokeWidth={1.75} />}
              </div>
              <div>
                <p className="font-semibold text-[#F0EDE8]">Analyse personnalisee</p>
                <p className="text-xs text-[#6B6760]">Score, maturite, priorite, action.</p>
              </div>
            </div>

            {authRequired && (
              <div className="mt-6 rounded-[14px] p-5" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <p className="font-semibold text-[#F0EDE8]">Connexion requise</p>
                <p className="mt-2 text-xs leading-6 text-[#6B6760]">Le brouillon est conserve localement pour reprendre apres connexion.</p>
                <button type="button" onClick={() => { writeStorage(DRAFT_KEY, formData); navigate('/auth', { state: { from: '/pre-analysis' } }) }}
                  className={primaryButton + " mt-4 w-full"}>
                  Se connecter
                </button>
              </div>
            )}

            {awaitingConfirmation && currentUser && (
              <div className="mt-6 rounded-[14px] p-5" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 shrink-0 text-[#C9A84C]" size={16} strokeWidth={2} />
                  <p className="text-sm font-semibold text-[#F0EDE8]">Confirmez l envoi a DS Conseil.</p>
                </div>
                <label className="mt-4 flex items-start gap-3 text-xs leading-6 text-[#6B6760]">
                  <input type="checkbox" checked={transmissionConsent} onChange={(e) => setTransmissionConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#C9A84C]" />
                  J accepte que mes informations soient transmises a DS Conseil.
                </label>
                <button type="button" disabled={!transmissionConsent || isLoading} onClick={() => void generateAndSave()}
                  className={primaryButton + " mt-4 w-full"}>
                  {isLoading ? 'Generation...' : 'Envoyer et generer'}
                </button>
              </div>
            )}

            {prospect && result && (
              <Link to="/mon-espace" className={secondaryButton + " mt-6 w-full"}>Voir mon espace</Link>
            )}

            {!authRequired && !awaitingConfirmation && !result && (
              <div className="mt-6 flex flex-col gap-3">
                {['Aucune info sensible affichee publiquement.','Connexion demandee seulement avant la generation.','Resultat structure et actionnable.'].map((item) => (
                  <div key={item} className="flex gap-2.5 text-xs leading-6 text-[#6B6760]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#C9A84C]" size={14} strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>

      {prospect && result && (
        <div className="mt-10">
          <AnalysisCard prospect={prospect} showNextAction={false} />
        </div>
      )}
    </div>
  )
}
