import { Search } from 'lucide-react'
import { inputClass, selectClass } from './ui'

export type ProspectFilters = {
  query: string
  projectType: string
  maturity: string
  priority: string
  minScore: string
  bestOnly: boolean
}

type FilterBarProps = {
  filters: ProspectFilters
  onChange: (filters: ProspectFilters) => void
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (field: keyof ProspectFilters, value: string | boolean) => {
    onChange({ ...filters, [field]: value })
  }

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_repeat(4,1fr)_auto]">
        <label className="relative" aria-label="Recherche de prospect">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
          />
          <input
            value={filters.query}
            onChange={(event) => update('query', event.target.value)}
            className={`${inputClass} w-full pl-11`}
            placeholder="Nom, email, quartier..."
          />
        </label>
        <select
          value={filters.projectType}
          onChange={(event) => update('projectType', event.target.value)}
          className={selectClass}
        >
          <option value="">Projet</option>
          <option>Acheter</option>
          <option>Louer</option>
          <option>Vendre</option>
          <option>Investir</option>
        </select>
        <select
          value={filters.maturity}
          onChange={(event) => update('maturity', event.target.value)}
          className={selectClass}
        >
          <option value="">Maturité</option>
          <option>Faible</option>
          <option>Moyen</option>
          <option>Élevé</option>
        </select>
        <select
          value={filters.priority}
          onChange={(event) => update('priority', event.target.value)}
          className={selectClass}
        >
          <option value="">Priorité</option>
          <option>Haute</option>
          <option>Moyenne</option>
          <option>Basse</option>
        </select>
        <input
          type="number"
          min="0"
          max="100"
          value={filters.minScore}
          onChange={(event) => update('minScore', event.target.value)}
          className={inputClass}
          placeholder="Score min."
        />
        <button
          type="button"
          onClick={() => update('bestOnly', !filters.bestOnly)}
          className={`min-h-12 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10 ${
            filters.bestOnly
              ? 'bg-[#1E5E52] text-white'
              : 'border border-neutral-200 bg-white text-[#111111] hover:border-[#1E5E52]/30'
          }`}
        >
          Meilleurs dossiers
        </button>
      </div>
    </div>
  )
}
