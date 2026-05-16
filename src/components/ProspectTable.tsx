import { ArrowDown, ArrowUp, ArrowUpDown, Star } from 'lucide-react'
import type { ProspectSortBy, ProspectSortOrder } from './FilterBar'
import type { Prospect, ProspectStatus } from '../types/prospect'
import { cn } from '../utils/cn'
import { Badge, EmptyState } from './ui'

type ProspectTableProps = {
  prospects: Prospect[]
  selectedId?: string
  newProspectIds?: string[]
  sortBy: ProspectSortBy
  sortOrder: ProspectSortOrder
  sortLabel?: string
  onSelect: (prospect: Prospect) => void
  onSortChange: (sortBy: ProspectSortBy) => void
}

export default function ProspectTable({
  prospects,
  selectedId,
  newProspectIds = [],
  sortBy,
  sortOrder,
  sortLabel = 'tri personnalise',
  onSelect,
  onSortChange,
}: ProspectTableProps) {
  if (!prospects.length) {
    return <EmptyState title="Aucun dossier trouve" description="Ajustez les filtres pour elargir la recherche." />
  }

  return (
    <div className="overflow-hidden rounded-[18px]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="px-6 py-4" style={{ background: '#0F0F16', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-sm font-semibold text-[#EDEAE4]">Dossiers prospects</p>
        <p className="mt-0.5 label-mono">{prospects.length} resultat(s) - {sortLabel}</p>
      </div>

      <div className="flex flex-col gap-2 p-3 lg:hidden" style={{ background: '#1A1A24' }}>
        {prospects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p)}
            className={cn(
              'rounded-[12px] p-4 text-left transition-all duration-200',
              selectedId === p.id
                ? 'border border-[#C9A84C]/25 bg-[#C9A84C]/6'
                : 'border border-[rgba(255,255,255,0.06)] bg-[#0F0F16] hover:border-white/10',
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#EDEAE4]">{p.user.firstName} {p.user.lastName}</p>
                <p className="mt-0.5 text-xs text-[#5E5B56]">{p.formData.projectType} - {p.formData.location}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                {p.status === 'Favori' && <FavoriteMark />}
                {newProspectIds.includes(p.id) && <Badge tone="success">Nouveau</Badge>}
                <span className={'rounded-full px-2.5 py-1 text-xs font-bold ' + (p.analysis.score >= 75 ? 'bg-[#C9A84C]/12 text-[#C9A84C]' : 'bg-white/5 text-[#5E5B56]')}>
                  {p.analysis.score}
                </span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Badge>{p.analysis.commercialPriority}</Badge>
              <Badge>{p.analysis.maturityLevel}</Badge>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-3 text-xs text-[#5E5B56]">
              Cree le {new Date(p.createdAt).toLocaleDateString('fr-FR')}
            </p>
          </button>
        ))}
      </div>

      <div className="hidden overflow-x-auto lg:block" style={{ background: '#1A1A24' }}>
        <table className="table-dark w-full min-w-[1080px] text-left">
          <thead>
            <tr>
              {tableColumns.map((column) => (
                <th key={column.label}>
                  {column.sortBy ? (
                    <button
                      type="button"
                      onClick={() => onSortChange(column.sortBy!)}
                      className={cn(
                        'inline-flex min-h-8 items-center gap-1.5 rounded-md px-1.5 text-left text-[inherit] transition-colors hover:text-[#C9A84C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/40',
                        sortBy === column.sortBy && 'text-[#C9A84C]',
                      )}
                      aria-label={`Trier par ${column.label}`}
                    >
                      <span>{column.label}</span>
                      <SortIcon active={sortBy === column.sortBy} order={sortOrder} />
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prospects.map((p) => (
              <tr key={p.id} className={cn('cursor-pointer transition-colors', selectedId === p.id && 'selected')} onClick={() => onSelect(p)}>
                <td>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-[#EDEAE4]">{p.user.firstName} {p.user.lastName}</p>
                    {p.status === 'Favori' && <FavoriteMark compact />}
                    {newProspectIds.includes(p.id) && <Badge tone="success">Nouveau</Badge>}
                  </div>
                  <p className="mt-0.5 text-xs text-[#5E5B56]">{p.user.email}</p>
                </td>
                <td>{p.user.phone}</td>
                <td>{p.formData.projectType}</td>
                <td>{p.formData.location}</td>
                <td>{p.formData.budget || 'A preciser'}</td>
                <td>
                  <span className={'rounded-full px-2.5 py-1 text-xs font-bold ' + (p.analysis.score >= 75 ? 'bg-[#C9A84C]/12 text-[#C9A84C]' : 'bg-white/5 text-[#5E5B56]')}>
                    {p.analysis.score}/100
                  </span>
                </td>
                <td>{p.analysis.commercialPriority}</td>
                <td>{p.analysis.maturityLevel}</td>
                <td>{p.analysis.recommendedService}</td>
                <td>{new Date(p.createdAt).toLocaleDateString('fr-FR')}</td>
                <td><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const tableColumns: Array<{ label: string; sortBy?: ProspectSortBy }> = [
  { label: 'Prospect', sortBy: 'name' },
  { label: 'Contact' },
  { label: 'Projet', sortBy: 'projectType' },
  { label: 'Localisation', sortBy: 'location' },
  { label: 'Budget', sortBy: 'budget' },
  { label: 'Score', sortBy: 'score' },
  { label: 'Priorite', sortBy: 'priority' },
  { label: 'Maturite', sortBy: 'maturity' },
  { label: 'Service', sortBy: 'service' },
  { label: 'Date', sortBy: 'createdAt' },
  { label: 'Statut', sortBy: 'status' },
]

function SortIcon({ active, order }: { active: boolean; order: ProspectSortOrder }) {
  if (!active) return <ArrowUpDown size={13} className="text-[#5E5B56]" strokeWidth={2} />
  if (order === 'asc') return <ArrowUp size={13} strokeWidth={2.2} />
  return <ArrowDown size={13} strokeWidth={2.2} />
}

function FavoriteMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={(compact ? 'h-6 w-6' : 'h-7 w-7') + ' inline-flex items-center justify-center rounded-full bg-[#C9A84C]/12 text-[#C9A84C]'}
      title="Dossier favori"
    >
      <Star size={compact ? 14 : 15} fill="currentColor" strokeWidth={1.8} />
    </span>
  )
}

function StatusBadge({ status }: { status: ProspectStatus }) {
  return <Badge tone={getStatusTone(status)}>{status}</Badge>
}

function getStatusTone(status: ProspectStatus) {
  if (status === 'Prioritaire' || status === 'À recontacter') return 'warning'
  if (status === 'Traité' || status === 'Favori') return 'success'
  if (status === 'À compléter') return 'danger'
  if (status === 'En cours de traitement') return 'gold'
  if (status === 'Archivé') return 'neutral'
  return 'neutral'
}
