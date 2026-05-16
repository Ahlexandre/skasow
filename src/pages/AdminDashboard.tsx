import { BrainCircuit, ClipboardList, MessageSquareText, SearchCheck, UserRoundCheck } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import AnalysisCard from '../components/AnalysisCard'
import DashboardTabs from '../components/DashboardTabs'
import FilterBar, { type ProspectFilters, type ProspectSortBy, type ProspectSortOrder } from '../components/FilterBar'
import ProspectTable from '../components/ProspectTable'
import StatCard from '../components/StatCard'
import { Button, EmptyState, SectionHeader, pageShell } from '../components/ui'
import { deleteAdminProspect, fetchAdminProspect, fetchAdminProspects, updateAdminProspectStatus } from '../services/prospectService'
import type { Prospect, ProspectStatus } from '../types/prospect'
import { readStorage, writeStorage } from '../utils/storage'

const VIEWED_PROSPECTS_KEY = 'ds-viewed-admin-prospects'

const allProspectStatuses: ProspectStatus[] = [
  'Favori',
  'Envoyé',
  'Prioritaire',
  'En cours de traitement',
  'Traité',
  'À recontacter',
  'À compléter',
  'Archivé',
]

const categories: Array<{ label: string; statuses: ProspectStatus[] }> = [
  { label: '0 - Dossier favoris', statuses: ['Favori'] },
  { label: '1 - Dossier prospects', statuses: allProspectStatuses },
  { label: '2 - Dossiers en cours', statuses: ['En cours de traitement'] },
  { label: '3 - Dossiers traités', statuses: ['Traité'] },
  { label: '4 - Dossiers à recontacter', statuses: ['À recontacter'] },
  { label: '5 - Dossiers incomplets', statuses: ['À compléter'] },
  { label: '6 - Dossier archivés', statuses: ['Archivé'] },
]
const tabs = categories.map((category) => category.label)
const initialFilters: ProspectFilters = {
  query: '',
  projectType: '',
  status: '',
  maturity: '',
  priority: '',
  minScore: '',
  bestOnly: false,
  sortBy: 'createdAt',
  sortOrder: 'desc',
}

export default function AdminDashboard() {
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [activeTab, setActiveTab] = useState('1 - Dossier prospects')
  const [filters, setFilters] = useState(initialFilters)
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [viewedProspectIds, setViewedProspectIds] = useState<string[]>(() =>
    readStorage<string[]>(VIEWED_PROSPECTS_KEY, []),
  )

  useEffect(() => {
    let ignore = false

    fetchAdminProspects()
      .then((nextProspects) => {
        if (ignore) return
        setProspects(nextProspects)
        setSelectedProspect((current) =>
          current
            ? nextProspects.find((prospect) => prospect.id === current.id) ?? nextProspects[0] ?? null
            : nextProspects[0] ?? null,
        )
        setError('')
      })
      .catch((err) => {
        if (ignore) return
        setProspects([])
        setSelectedProspect(null)
        setError(err instanceof Error ? err.message : 'Chargement impossible.')
      })
      .finally(() => {
        if (!ignore) setIsLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  const prioritizedProspects = useMemo(() =>
    prospects.filter((p) =>
      p.analysis.score >= 75 &&
      p.analysis.commercialPriority === 'Haute' &&
      (p.formData.urgency.startsWith('Immediate') || p.formData.urgency === 'Sous 3 mois') &&
      Boolean(p.user.email && p.user.phone)
    ), [prospects])

  const filteredProspects = useMemo(() => {
    const activeCategory = categories.find((category) => category.label === activeTab)
    const tabFiltered = prospects.filter((p) => {
      if (activeCategory) return activeCategory.statuses.includes(p.status)
      return allProspectStatuses.includes(p.status)
    })
    const filtered = tabFiltered.filter((p) => {
      const q = filters.query.trim().toLowerCase()
      const name = (p.user.firstName + ' ' + p.user.lastName).toLowerCase()
      return (
        (!q || name.includes(q) || p.user.email.toLowerCase().includes(q) || p.formData.location.toLowerCase().includes(q)) &&
        (!filters.projectType || p.formData.projectType === filters.projectType) &&
        (!filters.status || p.status === filters.status) &&
        (!filters.maturity || p.analysis.maturityLevel === filters.maturity) &&
        (!filters.priority || p.analysis.commercialPriority === filters.priority) &&
        (!filters.minScore || p.analysis.score >= Number(filters.minScore)) &&
        (!filters.bestOnly || prioritizedProspects.includes(p))
      )
    })

    return [...filtered].sort((a, b) => compareProspects(a, b, filters.sortBy, filters.sortOrder))
  }, [activeTab, filters, prioritizedProspects, prospects])

  const completedRate = prospects.length
    ? Math.round((prospects.filter((p) => p.analysis.score >= 75).length / prospects.length) * 100) : 0

  const newProspectIds = useMemo(
    () =>
      prospects
        .filter((prospect) => isNewProspect(prospect.createdAt) && !viewedProspectIds.includes(prospect.id))
        .map((prospect) => prospect.id),
    [prospects, viewedProspectIds],
  )

  const handleSelectProspect = async (prospect: Prospect) => {
    setSelectedProspect(prospect)
    setViewedProspectIds((current) => {
      if (current.includes(prospect.id)) return current
      const next = [...current, prospect.id]
      writeStorage(VIEWED_PROSPECTS_KEY, next)
      return next
    })
    try {
      const detail = await fetchAdminProspect(prospect.id)
      setSelectedProspect(detail)
      setProspects((current) =>
        current.map((item) => (item.id === detail.id ? detail : item)),
      )
    } catch {
      setSelectedProspect(prospect)
    }
  }

  const handleStatusChange = async (id: string, status: ProspectStatus) => {
    try {
      const updated = await updateAdminProspectStatus(id, status)
      setProspects((current) =>
        current.map((prospect) => (prospect.id === id ? updated : prospect)),
      )
      setSelectedProspect(updated)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Mise a jour du statut impossible.')
    }
  }

  const handleDeleteProspect = async (id: string) => {
    const confirmed = window.confirm('Supprimer definitivement ce dossier archive ?')
    if (!confirmed) return

    await deleteAdminProspect(id)
    setProspects((current) => current.filter((prospect) => prospect.id !== id))
    setSelectedProspect((current) => (current?.id === id ? null : current))
  }

  const handleSortChange = (sortBy: ProspectSortBy) => {
    setFilters((current) => ({
      ...current,
      sortBy,
      sortOrder: current.sortBy === sortBy
        ? toggleSortOrder(current.sortOrder)
        : getDefaultSortOrder(sortBy),
    }))
  }

  if (isLoading) {
    return (
      <section className={pageShell}>
        <SectionHeader
          eyebrow="Administration"
          title="Pilotage commercial DS Conseil"
          description="Chargement des dossiers depuis l'API admin."
        />
      </section>
    )
  }

  return (
    <section className={pageShell}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Administration"
          title="Pilotage commercial DS Conseil"
          description="Vue globale des prospects, scoring IA, segmentation par service et suivi des dossiers a traiter."
        />
        <span className="badge-gold">{filteredProspects.length} dossier(s) visibles</span>
      </div>

      {error && (
        <div className="mt-6 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="mt-6 space-y-3">
        <DashboardTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab)
            setFilters((current) => ({ ...current, status: '' }))
          }}
        />
        <FilterBar filters={filters} onChange={setFilters} />
        {filters.status && (
          <Button
            variant="ghost"
            className="mt-3"
            onClick={() => setFilters((current) => ({ ...current, status: '' }))}
          >
            Afficher tous les statuts
          </Button>
        )}
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Prospects"   value={String(prospects.length)}            detail="Dossiers enregistres"          icon={UserRoundCheck} />
        <StatCard label="Pre-analyses" value={String(prospects.length)}           detail="Analyses generees"             icon={BrainCircuit} />
        <StatCard label="Prioritaires" value={String(prioritizedProspects.length)} detail="Score eleve et contact complet" icon={ClipboardList} tone="accent" />
        <StatCard label="Completude"   value={completedRate + "%"}                detail="Dossiers forts"                icon={MessageSquareText} tone="dark" />
      </div>

      {/* Priority banner */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.5fr]">
        <div className="relative overflow-hidden rounded-[20px] p-7"
          style={{ background: 'linear-gradient(135deg, #111118, #16161F)', border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 0 40px rgba(201,168,76,0.05)' }}>
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#C9A84C]/8 blur-[40px]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C9A84C]/60">Prospects a fort potentiel</p>
          <h2 className="mt-3 font-display text-2xl text-[#F0EDE8]">{prioritizedProspects.length} dossier(s) a traiter en priorite</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#A8A49E]">Score superieur ou egal a 75, priorite haute, urgence proche et coordonnees completes.</p>
          <Button variant="secondary" className="mt-5" onClick={() => setFilters((c) => ({ ...c, bestOnly: true }))}>
            Voir les meilleurs
          </Button>
        </div>
        <div className="rounded-[20px] p-6" style={{ background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-start gap-4">
            <SearchCheck className="mt-1 shrink-0 text-[#C9A84C]" size={22} strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-[#F0EDE8]">Lecture rapide</p>
              <p className="mt-2 text-sm leading-7 text-[#A8A49E]">Les dossiers ressortent par score, statut et maturite pour eviter les decisions au hasard.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <ProspectTable
          prospects={filteredProspects}
          selectedId={selectedProspect?.id}
          newProspectIds={newProspectIds}
          sortBy={filters.sortBy}
          sortOrder={filters.sortOrder}
          sortLabel={getSortLabel(filters.sortBy, filters.sortOrder)}
          onSelect={(prospect) => void handleSelectProspect(prospect)}
          onSortChange={handleSortChange}
        />
        {selectedProspect
          ? (
            <AnalysisCard
              prospect={selectedProspect}
              isNew={newProspectIds.includes(selectedProspect.id)}
              onStatusChange={handleStatusChange}
              onDelete={handleDeleteProspect}
            />
          )
          : <EmptyState title="Aucun dossier selectionne" description="Selectionnez un prospect dans la liste pour afficher son analyse detaillee et mettre a jour son statut." />}
      </div>
    </section>
  )
}

function compareProspects(
  a: Prospect,
  b: Prospect,
  sortBy: ProspectSortBy,
  sortOrder: ProspectSortOrder,
) {
  const direction = sortOrder === 'asc' ? 1 : -1
  const value = getComparableValue(a, sortBy)
  const otherValue = getComparableValue(b, sortBy)

  if (typeof value === 'number' && typeof otherValue === 'number') {
    return (value - otherValue) * direction
  }

  return String(value).localeCompare(String(otherValue), 'fr', { sensitivity: 'base' }) * direction
}

function getComparableValue(prospect: Prospect, sortBy: ProspectSortBy) {
  switch (sortBy) {
    case 'createdAt':
      return new Date(prospect.createdAt).getTime()
    case 'score':
      return prospect.analysis.score
    case 'projectType':
      return prospect.formData.projectType
    case 'location':
      return prospect.formData.location
    case 'budget':
      return getBudgetSortValue(prospect.formData.budget)
    case 'priority':
      return getPriorityRank(prospect.analysis.commercialPriority)
    case 'maturity':
      return getMaturityRank(prospect.analysis.maturityLevel)
    case 'service':
      return prospect.analysis.recommendedService
    case 'status':
      return prospect.status
    case 'name':
      return `${prospect.user.firstName} ${prospect.user.lastName}`.trim()
    default:
      return prospect.analysis.score
  }
}

function getBudgetSortValue(budget: string) {
  const values = budget.match(/\d[\d\s]*/g)?.map((value) => Number(value.replace(/\s/g, ''))) ?? []
  if (!values.length) return -1
  if (values.length === 1) return values[0]
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function getPriorityRank(priority: string) {
  const ranks: Record<string, number> = { Haute: 3, Moyenne: 2, Basse: 1 }
  return ranks[priority] ?? 0
}

function getMaturityRank(maturity: string) {
  const ranks: Record<string, number> = { 'Élevé': 3, Eleve: 3, Moyen: 2, Faible: 1 }
  return ranks[maturity] ?? 0
}

function getSortLabel(sortBy: ProspectSortBy, sortOrder: ProspectSortOrder) {
  const labels: Record<ProspectSortBy, string> = {
    createdAt: 'tries par date',
    score: 'tries par score',
    projectType: 'tries par projet',
    location: 'tries par localisation',
    budget: 'tries par budget',
    priority: 'tries par priorite',
    maturity: 'tries par maturite',
    service: 'tries par service',
    status: 'tries par statut',
    name: 'tries par nom',
  }

  return `${labels[sortBy]} ${sortOrder === 'asc' ? 'croissant' : 'decroissant'}`
}

function toggleSortOrder(sortOrder: ProspectSortOrder): ProspectSortOrder {
  return sortOrder === 'asc' ? 'desc' : 'asc'
}

function getDefaultSortOrder(sortBy: ProspectSortBy): ProspectSortOrder {
  return ['createdAt', 'score', 'budget', 'priority', 'maturity'].includes(sortBy) ? 'desc' : 'asc'
}

function isNewProspect(createdAt: string) {
  const createdTime = new Date(createdAt).getTime()
  if (Number.isNaN(createdTime)) return false
  return Date.now() - createdTime <= 48 * 60 * 60 * 1000
}
