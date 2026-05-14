import { BrainCircuit, ClipboardList, MessageSquareText, SearchCheck, UserRoundCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import AnalysisCard from '../components/AnalysisCard'
import DashboardTabs from '../components/DashboardTabs'
import FilterBar, { type ProspectFilters } from '../components/FilterBar'
import ProspectTable from '../components/ProspectTable'
import StatCard from '../components/StatCard'
import { Button, EmptyState, SectionHeader, pageShell } from '../components/ui'
import { getProspects, updateProspectStatus } from '../services/prospectService'
import type { Prospect, ProspectStatus } from '../types/prospect'

const tabs = ['Vue globale','Achat','Location','Vente','Investissement','Prospects prioritaires','Dossiers a completer','Conversations chatbot','Parametres']
const initialFilters: ProspectFilters = { query: '', projectType: '', maturity: '', priority: '', minScore: '', bestOnly: false }

export default function AdminDashboard() {
  const [prospects, setProspects] = useState<Prospect[]>(() => getProspects())
  const [activeTab, setActiveTab] = useState('Vue globale')
  const [filters, setFilters] = useState(initialFilters)
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(prospects[0] ?? null)

  const prioritizedProspects = useMemo(() =>
    prospects.filter((p) =>
      p.analysis.score >= 75 &&
      p.analysis.commercialPriority === 'Haute' &&
      ['Immediate', 'Sous 3 mois'].includes(p.formData.urgency) &&
      Boolean(p.user.email && p.user.phone)
    ), [prospects])

  const filteredProspects = useMemo(() => {
    const tabFiltered = prospects.filter((p) => {
      if (activeTab === 'Achat') return p.formData.projectType === 'Acheter'
      if (activeTab === 'Location') return p.formData.projectType === 'Louer'
      if (activeTab === 'Vente') return p.formData.projectType === 'Vendre'
      if (activeTab === 'Investissement') return p.formData.projectType === 'Investir'
      if (activeTab === 'Prospects prioritaires') return p.status === 'Prioritaire'
      if (activeTab === 'Dossiers a completer') return p.status === 'À compléter'
      return true
    })
    return tabFiltered.filter((p) => {
      const q = filters.query.trim().toLowerCase()
      const name = (p.user.firstName + ' ' + p.user.lastName).toLowerCase()
      return (
        (!q || name.includes(q) || p.user.email.toLowerCase().includes(q) || p.formData.location.toLowerCase().includes(q)) &&
        (!filters.projectType || p.formData.projectType === filters.projectType) &&
        (!filters.maturity || p.analysis.maturityLevel === filters.maturity) &&
        (!filters.priority || p.analysis.commercialPriority === filters.priority) &&
        (!filters.minScore || p.analysis.score >= Number(filters.minScore)) &&
        (!filters.bestOnly || prioritizedProspects.includes(p))
      )
    }).sort((a, b) => b.analysis.score - a.analysis.score)
  }, [activeTab, filters, prioritizedProspects, prospects])

  const completedRate = prospects.length
    ? Math.round((prospects.filter((p) => p.analysis.score >= 75).length / prospects.length) * 100) : 0

  const handleStatusChange = (id: string, status: ProspectStatus) => {
    updateProspectStatus(id, status)
    const next = getProspects()
    setProspects(next)
    setSelectedProspect(next.find((p) => p.id === id) ?? null)
  }

  if (activeTab === 'Conversations chatbot') {
    return (
      <section className={pageShell}>
        <DashboardTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <div className="mt-8 rounded-[20px] p-8" style={{ background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)' }}>
          <SectionHeader eyebrow="Chatbot" title="Conversations chatbot"
            description="Les conversations ne sont pas sauvegardees afin de limiter la conservation de donnees personnelles." />
        </div>
      </section>
    )
  }

  if (activeTab === 'Parametres') {
    return (
      <section className={pageShell}>
        <DashboardTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <div className="mt-8 rounded-[20px] p-8" style={{ background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)' }}>
          <SectionHeader eyebrow="Parametres" title="Preparation backend"
            description="Les services sont structures pour remplacer localStorage par une API : authService, prospectService et analysisService." />
        </div>
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

      <div className="mt-10">
        <DashboardTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
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

      <div className="mt-6">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <ProspectTable prospects={filteredProspects} selectedId={selectedProspect?.id} onSelect={setSelectedProspect} />
        {selectedProspect
          ? <AnalysisCard prospect={selectedProspect} onStatusChange={handleStatusChange} />
          : <EmptyState title="Aucun dossier selectionne" description="Selectionnez un prospect dans la liste pour afficher son analyse detaillee et mettre a jour son statut." />}
      </div>
    </section>
  )
}
