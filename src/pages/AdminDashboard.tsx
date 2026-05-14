import {
  BrainCircuit,
  ClipboardList,
  MessageSquareText,
  SearchCheck,
  UserRoundCheck,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import AnalysisCard from '../components/AnalysisCard'
import DashboardTabs from '../components/DashboardTabs'
import FilterBar, { type ProspectFilters } from '../components/FilterBar'
import ProspectTable from '../components/ProspectTable'
import StatCard from '../components/StatCard'
import {
  Badge,
  Button,
  Card,
  EmptyState,
  SectionHeader,
  pageShell,
} from '../components/ui'
import { getProspects, updateProspectStatus } from '../services/prospectService'
import type { Prospect, ProspectStatus } from '../types/prospect'

const tabs = [
  'Vue globale',
  'Achat',
  'Location',
  'Vente',
  'Investissement',
  'Prospects prioritaires',
  'Dossiers à compléter',
  'Conversations chatbot',
  'Paramètres',
]

const initialFilters: ProspectFilters = {
  query: '',
  projectType: '',
  maturity: '',
  priority: '',
  minScore: '',
  bestOnly: false,
}

export default function AdminDashboard() {
  const [prospects, setProspects] = useState<Prospect[]>(() => getProspects())
  const [activeTab, setActiveTab] = useState('Vue globale')
  const [filters, setFilters] = useState(initialFilters)
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(
    prospects[0] ?? null,
  )

  const prioritizedProspects = useMemo(
    () =>
      prospects.filter(
        (prospect) =>
          prospect.analysis.score >= 75 &&
          prospect.analysis.commercialPriority === 'Haute' &&
          ['Immédiate', 'Sous 3 mois'].includes(prospect.formData.urgency) &&
          Boolean(prospect.user.email && prospect.user.phone),
      ),
    [prospects],
  )

  const filteredProspects = useMemo(() => {
    const tabFiltered = prospects.filter((prospect) => {
      if (activeTab === 'Achat') return prospect.formData.projectType === 'Acheter'
      if (activeTab === 'Location') return prospect.formData.projectType === 'Louer'
      if (activeTab === 'Vente') return prospect.formData.projectType === 'Vendre'
      if (activeTab === 'Investissement') return prospect.formData.projectType === 'Investir'
      if (activeTab === 'Prospects prioritaires') return prospect.status === 'Prioritaire'
      if (activeTab === 'Dossiers à compléter') return prospect.status === 'À compléter'
      return true
    })

    return tabFiltered
      .filter((prospect) => {
        const query = filters.query.trim().toLowerCase()
        const fullName =
          `${prospect.user.firstName} ${prospect.user.lastName}`.toLowerCase()
        const matchesQuery =
          !query ||
          fullName.includes(query) ||
          prospect.user.email.toLowerCase().includes(query) ||
          prospect.formData.location.toLowerCase().includes(query)
        const matchesProject =
          !filters.projectType || prospect.formData.projectType === filters.projectType
        const matchesMaturity =
          !filters.maturity || prospect.analysis.maturityLevel === filters.maturity
        const matchesPriority =
          !filters.priority || prospect.analysis.commercialPriority === filters.priority
        const matchesScore =
          !filters.minScore || prospect.analysis.score >= Number(filters.minScore)
        const matchesBest = !filters.bestOnly || prioritizedProspects.includes(prospect)

        return (
          matchesQuery &&
          matchesProject &&
          matchesMaturity &&
          matchesPriority &&
          matchesScore &&
          matchesBest
        )
      })
      .sort((a, b) => b.analysis.score - a.analysis.score)
  }, [activeTab, filters, prioritizedProspects, prospects])

  const completedRate = prospects.length
    ? Math.round(
        (prospects.filter((prospect) => prospect.analysis.score >= 75).length /
          prospects.length) *
          100,
      )
    : 0

  const handleStatusChange = (id: string, status: ProspectStatus) => {
    updateProspectStatus(id, status)
    const nextProspects = getProspects()
    setProspects(nextProspects)
    setSelectedProspect(nextProspects.find((prospect) => prospect.id === id) ?? null)
  }

  if (activeTab === 'Conversations chatbot') {
    return (
      <section className={pageShell}>
        <DashboardTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <Card className="mt-8">
          <SectionHeader
            eyebrow="Chatbot"
            title="Conversations chatbot"
            description="Les conversations ne sont pas sauvegardées afin de limiter la conservation de données personnelles."
          />
        </Card>
      </section>
    )
  }

  if (activeTab === 'Paramètres') {
    return (
      <section className={pageShell}>
        <DashboardTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <Card className="mt-8">
          <SectionHeader
            eyebrow="Paramètres"
            title="Préparation backend"
            description="Les services sont structurés pour remplacer localStorage par une API: authService, prospectService et analysisService."
          />
        </Card>
      </section>
    )
  }

  return (
    <section className={pageShell}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Administration"
          title="Pilotage commercial DS Conseil"
          description="Vue globale des prospects, scoring IA, segmentation par service et suivi des dossiers à traiter."
        />
        <Badge tone="accent" className="px-4 py-2 text-sm">
          {filteredProspects.length} dossier(s) visibles
        </Badge>
      </div>

      <div className="mt-10">
        <DashboardTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Prospects"
          value={String(prospects.length)}
          detail="Dossiers enregistrés"
          icon={UserRoundCheck}
        />
        <StatCard
          label="Pré-analyses"
          value={String(prospects.length)}
          detail="Analyses générées"
          icon={BrainCircuit}
        />
        <StatCard
          label="Prioritaires"
          value={String(prioritizedProspects.length)}
          detail="Score élevé et contact complet"
          icon={ClipboardList}
          tone="accent"
        />
        <StatCard
          label="Complétude"
          value={`${completedRate}%`}
          detail="Dossiers forts"
          icon={MessageSquareText}
          tone="dark"
        />
      </div>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.55fr]">
        <Card tone="dark">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                Prospects à fort potentiel
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                {prioritizedProspects.length} dossier(s) à traiter en priorité
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                Score supérieur ou égal à 75, priorité haute, urgence proche et
                coordonnées complètes.
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => setFilters((current) => ({ ...current, bestOnly: true }))}
              className="bg-white text-[#111111] hover:bg-[#EAE4D8]"
            >
              Voir les meilleurs
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <SearchCheck className="mt-1 text-[#1E5E52]" size={24} />
            <div>
              <p className="font-semibold text-[#111111]">Lecture rapide</p>
              <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                Les dossiers ressortent par score, statut et maturité pour
                éviter les décisions au hasard.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <div className="mt-8">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>

      <div className="mt-8 grid gap-8">
        <ProspectTable
          prospects={filteredProspects}
          selectedId={selectedProspect?.id}
          onSelect={setSelectedProspect}
        />

        {selectedProspect ? (
          <AnalysisCard
            prospect={selectedProspect}
            onStatusChange={handleStatusChange}
          />
        ) : (
          <EmptyState
            title="Aucun dossier sélectionné"
            description="Sélectionnez un prospect dans la liste pour afficher son analyse détaillée et mettre à jour son statut."
          />
        )}
      </div>
    </section>
  )
}
