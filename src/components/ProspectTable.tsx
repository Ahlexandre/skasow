import type { Prospect } from '../types/prospect'
import { cn } from '../utils/cn'
import { Badge, EmptyState } from './ui'

type ProspectTableProps = { prospects: Prospect[]; selectedId?: string; onSelect: (prospect: Prospect) => void }

export default function ProspectTable({ prospects, selectedId, onSelect }: ProspectTableProps) {
  if (!prospects.length) {
    return <EmptyState title="Aucun dossier trouve" description="Ajustez les filtres pour elargir la recherche." />
  }
  return (
    <div className="overflow-hidden rounded-[18px]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="px-6 py-4" style={{ background: '#0F0F16', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-sm font-semibold text-[#EDEAE4]">Dossiers prospects</p>
        <p className="mt-0.5 label-mono">{prospects.length} resultat(s) — tries par score</p>
      </div>
      <div className="flex flex-col gap-2 p-3 lg:hidden" style={{ background: '#1A1A24' }}>
        {prospects.map((p) => (
          <button key={p.id} type="button" onClick={() => onSelect(p)}
            className={cn('rounded-[12px] p-4 text-left transition-all duration-200',
              selectedId === p.id
                ? 'border border-[#C9A84C]/25 bg-[#C9A84C]/6'
                : 'border border-[rgba(255,255,255,0.06)] bg-[#0F0F16] hover:border-white/10')}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#EDEAE4]">{p.user.firstName} {p.user.lastName}</p>
                <p className="mt-0.5 text-xs text-[#5E5B56]">{p.formData.projectType} — {p.formData.location}</p>
              </div>
              <span className={'rounded-full px-2.5 py-1 text-xs font-bold ' + (p.analysis.score >= 75 ? 'bg-[#C9A84C]/12 text-[#C9A84C]' : 'bg-white/5 text-[#5E5B56]')}>
                {p.analysis.score}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Badge>{p.analysis.commercialPriority}</Badge>
              <Badge>{p.analysis.maturityLevel}</Badge>
              <Badge>{p.status}</Badge>
            </div>
          </button>
        ))}
      </div>
      <div className="hidden overflow-x-auto lg:block" style={{ background: '#1A1A24' }}>
        <table className="table-dark w-full min-w-[1080px] text-left">
          <thead>
            <tr>
              {['Prospect','Contact','Projet','Localisation','Budget','Score','Priorite','Maturite','Service','Date','Statut'].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prospects.map((p) => (
              <tr key={p.id} className={cn('cursor-pointer transition-colors', selectedId === p.id && 'selected')} onClick={() => onSelect(p)}>
                <td>
                  <p className="font-semibold text-[#EDEAE4]">{p.user.firstName} {p.user.lastName}</p>
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
                <td><Badge>{p.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
