import {
  ArrowRight,
  FileCheck2,
  LogOut,
  Pencil,
  Save,
  Shield,
  UserRound,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import {
  BudgetSelect,
  LocationSelect,
  MaritalStatusSelect,
  ProfessionSelect,
  PropertyTypeSelect,
  SurfaceSelect,
} from '../components/AnalysisFormSelects'
import {
  Button,
  EmptyState,
  Input,
  Select,
  Textarea,
  labelClass,
  primaryButton,
} from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import { fetchMyProspects, updateMyProspect } from '../services/prospectService'
import type { AnalysisFormData, ProjectType } from '../types/analysis'
import type { Prospect } from '../types/prospect'

const projectTypes: ProjectType[] = ['Acheter', 'Louer', 'Vendre', 'Investir']
const urgencyOptions = [
  "Immediate (moins d'1 mois)",
  'Sous 3 mois',
  'Dans 6 mois',
  'Exploration (pas de delai fixe)',
]

export default function UserDashboard() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<AnalysisFormData | null>(null)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!currentUser) return
    fetchMyProspects(currentUser)
      .then(setProspects)
      .catch(() => setProspects([]))
      .finally(() => setIsLoading(false))
  }, [currentUser])

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const startEdit = (prospect: Prospect) => {
    setEditingId(prospect.id)
    setEditForm({ ...prospect.formData, consent: true })
    setError('')
  }

  const updateEditField = (field: keyof AnalysisFormData, value: string | boolean) => {
    setEditForm((current) => (current ? { ...current, [field]: value } : current))
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(null)
    setError('')
  }

  const saveEdit = async (id: string) => {
    if (!currentUser || !editForm) return
    if (!editForm.location.trim() || !editForm.budget.trim() || !editForm.propertyType.trim()) {
      setError('Localisation, budget et type de bien sont obligatoires.')
      return
    }

    setSavingId(id)
    try {
      const updated = await updateMyProspect(id, currentUser, editForm)
      setProspects((current) => current.map((prospect) => (prospect.id === id ? updated : prospect)))
      cancelEdit()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Modification impossible.')
    } finally {
      setSavingId(null)
    }
  }

  if (!currentUser) return null

  if (isLoading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="font-mono text-sm text-[#6B6760]">Chargement de vos analyses...</p>
      </div>
    )
  }

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="mb-8 flex flex-col gap-5 border-b border-white/5 pb-6 sm:mb-10 sm:flex-row sm:items-start sm:justify-between sm:pb-8">
        <div className="min-w-0">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#6B6760] uppercase">Mon espace</span>
          <h1 className="mt-2 break-words font-display text-2xl tracking-[-0.03em] text-[#F0EDE8] sm:text-3xl">
            {currentUser.firstName} {currentUser.lastName}
          </h1>
          <p className="mt-1 break-all text-sm text-[#6B6760]">{currentUser.email}</p>
        </div>
        <Button variant="ghost" className="w-full sm:w-auto" onClick={handleLogout}>
          <LogOut size={15} strokeWidth={1.75} /> Deconnexion
        </Button>
      </div>

      <div className="mb-8 grid gap-3 sm:mb-10 sm:grid-cols-2">
        {[
          { icon: FileCheck2, label: 'Pre-analyses', value: String(prospects.length) },
          { icon: UserRound, label: 'À compléter', value: String(prospects.filter((p) => p.status === 'À compléter').length) },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-[16px] p-5" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}>
            <Icon size={16} className="text-[#C9A84C]" strokeWidth={1.75} />
            <p className="mt-4 font-display text-3xl text-[#F0EDE8]">{value}</p>
            <p className="mt-1 text-[10px] font-mono text-[#6B6760]">{label}</p>
          </div>
        ))}
      </div>

      <Link to="/pre-analysis" className={primaryButton + ' mb-4 w-full sm:mb-10 sm:w-fit'}>
        Nouvelle pre-analyse <ArrowRight size={15} strokeWidth={2} />
      </Link>

      <Link
        to="/mes-donnees"
        className="mb-10 flex w-full items-center justify-center gap-2 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/8 px-5 py-2.5 text-center text-sm font-semibold text-[#C9A84C] transition hover:bg-[#C9A84C]/14 sm:w-fit"
      >
        <Shield size={15} strokeWidth={1.75} />
        Gerer mes donnees et suppressions
        <ArrowRight size={14} />
      </Link>

      {error && (
        <div className="mb-6 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="border-t border-white/5 pt-8">
        <h2 className="mb-6 font-display text-xl text-[#F0EDE8]">Mes pre-analyses</h2>
        <div className="flex flex-col gap-5">
          {prospects.map((prospect) => (
            <div key={prospect.id} className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 rounded-[16px] border border-white/6 bg-[#111118] p-4 sm:flex-row sm:flex-wrap">
                <Button variant="secondary" className="w-full sm:w-auto" onClick={() => startEdit(prospect)} disabled={savingId === prospect.id}>
                  <Pencil size={15} strokeWidth={1.9} /> Modifier
                </Button>
              </div>

              {editingId === prospect.id && editForm && (
                <EditAnalysisForm
                  formData={editForm}
                  isSaving={savingId === prospect.id}
                  onChange={updateEditField}
                  onCancel={cancelEdit}
                  onSave={() => void saveEdit(prospect.id)}
                />
              )}

              <AnalysisCard prospect={prospect} showNextAction={false} />
            </div>
          ))}

          {!isLoading && !prospects.length && (
            <EmptyState
              title="Aucun dossier"
              description="Commencez par une pre-analyse pour retrouver ici votre diagnostic."
              action={<Link to="/pre-analysis" className={primaryButton}>Faire une pre-analyse</Link>}
            />
          )}
        </div>
      </div>
    </div>
  )
}

function EditAnalysisForm({
  formData,
  isSaving,
  onChange,
  onCancel,
  onSave,
}: {
  formData: AnalysisFormData
  isSaving: boolean
  onChange: (field: keyof AnalysisFormData, value: string | boolean) => void
  onCancel: () => void
  onSave: () => void
}) {
  return (
    <div className="rounded-[18px] border border-[#C9A84C]/16 bg-[#0F0F16] p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>
          Projet
          <Select value={formData.projectType} onChange={(event) => onChange('projectType', event.target.value)}>
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>{projectType}</option>
            ))}
          </Select>
        </label>
        <label className={labelClass}>
          Localisation
          <LocationSelect
            required
            value={formData.location}
            onChange={(value) => onChange('location', value)}
          />
        </label>
        <label className={labelClass}>
          Budget
          <BudgetSelect
            required
            value={formData.budget}
            onChange={(value) => onChange('budget', value)}
          />
        </label>
        <label className={labelClass}>
          Type de bien
          <PropertyTypeSelect
            required
            value={formData.propertyType}
            onChange={(value) => onChange('propertyType', value)}
          />
        </label>
        <label className={labelClass}>
          Surface
          <SurfaceSelect
            value={formData.surface}
            onChange={(value) => onChange('surface', value)}
          />
        </label>
        <label className={labelClass}>
          Urgence
          <Select value={formData.urgency} onChange={(event) => onChange('urgency', event.target.value)}>
            {urgencyOptions.map((urgency) => (
              <option key={urgency} value={urgency}>{urgency}</option>
            ))}
          </Select>
        </label>
        <label className={labelClass + ' md:col-span-2'}>
          Objectif et contraintes
          <Textarea rows={4} value={formData.objective} onChange={(event) => onChange('objective', event.target.value)} />
        </label>
        <label className={labelClass}>
          Metier (facultatif)
          <ProfessionSelect
            value={formData.profession}
            onChange={(value) => onChange('profession', value)}
          />
        </label>
        <label className={labelClass}>
          Situation familiale (facultatif)
          <MaritalStatusSelect
            value={formData.maritalStatus}
            onChange={(value) => onChange('maritalStatus', value)}
          />
        </label>
        <label className={labelClass}>
          Enfants (facultatif)
          <Select value={formData.hasChildren} onChange={(event) => onChange('hasChildren', event.target.value)}>
            <option value="">Non renseigne</option>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </Select>
        </label>
        <label className={labelClass}>
          Nombre d&apos;enfants (facultatif)
          <Input value={formData.childrenCount} onChange={(event) => onChange('childrenCount', event.target.value)} />
        </label>
        <label className={labelClass + ' md:col-span-2'}>
          Notes personnelles (facultatif)
          <Textarea rows={3} value={formData.personalNotes} onChange={(event) => onChange('personalNotes', event.target.value)} />
        </label>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button className="w-full sm:w-auto" onClick={onSave} disabled={isSaving}>
          <Save size={15} strokeWidth={1.9} /> {isSaving ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
        <Button variant="ghost" className="w-full sm:w-auto" onClick={onCancel} disabled={isSaving}>
          <X size={15} strokeWidth={1.9} /> Annuler
        </Button>
      </div>
    </div>
  )
}


