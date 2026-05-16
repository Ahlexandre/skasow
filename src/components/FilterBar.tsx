import { Search, SlidersHorizontal } from 'lucide-react'
import { inputClass, selectClass } from './ui'
import type { ProspectStatus } from '../types/prospect'

export type ProspectSortBy =
  | 'createdAt'
  | 'score'
  | 'projectType'
  | 'location'
  | 'budget'
  | 'priority'
  | 'maturity'
  | 'service'
  | 'status'
  | 'name'

export type ProspectSortOrder = 'asc' | 'desc'

export type ProspectFilters = {
  query: string
  projectType: string
  status: ProspectStatus | ''
  maturity: string
  priority: string
  minScore: string
  bestOnly: boolean
  sortBy: ProspectSortBy
  sortOrder: ProspectSortOrder
}
type FilterBarProps = { filters: ProspectFilters; onChange: (filters: ProspectFilters) => void }

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (field: keyof ProspectFilters, value: string | boolean) => onChange({ ...filters, [field]: value })
  return (
    <div className="rounded-[16px] p-4" style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mb-3 flex items-center gap-2">
        <SlidersHorizontal size={13} className="text-[#5E5B56]" strokeWidth={2} />
        <p className="label-mono">Filtres</p>
      </div>
      <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(5,1fr)_auto]">
        <label className="relative" aria-label="Recherche">
          <Search size={14} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5E5B56]" strokeWidth={2} />
          <input value={filters.query} onChange={(e) => update('query', e.target.value)}
            className={inputClass + ' w-full pl-10'} placeholder="Nom, email, quartier..." />
        </label>
        <select value={filters.projectType} onChange={(e) => update('projectType', e.target.value)} className={selectClass}>
          <option value="">Projet</option>
          <option>Acheter</option><option>Louer</option><option>Vendre</option><option>Investir</option>
        </select>
        <select value={filters.status} onChange={(e) => update('status', e.target.value)} className={selectClass}>
          <option value="">Statut</option>
          <option>Envoyé</option>
          <option>Favori</option>
          <option>En cours de traitement</option>
          <option>Prioritaire</option>
          <option>À compléter</option>
          <option>Traité</option>
          <option>À recontacter</option>
          <option>Archivé</option>
        </select>
        <select value={filters.maturity} onChange={(e) => update('maturity', e.target.value)} className={selectClass}>
          <option value="">Maturite</option>
          <option>Faible</option><option>Moyen</option><option value="Élevé">Eleve</option>
        </select>
        <select value={filters.priority} onChange={(e) => update('priority', e.target.value)} className={selectClass}>
          <option value="">Priorite</option>
          <option>Haute</option><option>Moyenne</option><option>Basse</option>
        </select>
        <input type="number" min="0" max="100" value={filters.minScore}
          onChange={(e) => update('minScore', e.target.value)}
          className={inputClass} placeholder="Score min." />
        <button type="button" onClick={() => update('bestOnly', !filters.bestOnly)}
          className={'min-h-[46px] rounded-full px-5 text-sm font-medium transition-all duration-200 focus:outline-none ' + (
            filters.bestOnly
              ? 'bg-[#C9A84C] text-[#09090E] shadow-[0 4px 24px rgba(201,168,76,0.22)]'
              : 'border border-white/10 text-[#5E5B56] hover:border-[#C9A84C]/25 hover:text-[#C9A84C]'
          )}>
          Meilleurs dossiers
        </button>
      </div>
    </div>
  )
}
