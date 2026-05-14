import type { Prospect } from '../types/prospect'
import { cn } from '../utils/cn'
import { Badge, EmptyState } from './ui'

type ProspectTableProps = {
  prospects: Prospect[]
  selectedId?: string
  onSelect: (prospect: Prospect) => void
}

export default function ProspectTable({
  prospects,
  selectedId,
  onSelect,
}: ProspectTableProps) {
  if (!prospects.length) {
    return (
      <EmptyState
        title="Aucun dossier trouvé"
        description="Ajustez les filtres ou désactivez la sélection des meilleurs dossiers pour élargir la recherche."
      />
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <div className="border-b border-neutral-200 bg-[#FAFAF8] px-6 py-5">
        <p className="text-sm font-semibold text-[#111111]">Dossiers prospects</p>
        <p className="mt-1 text-sm text-[#6B7280]">
          {prospects.length} résultat(s), triés par score décroissant.
        </p>
      </div>

      <div className="grid gap-3 p-4 lg:hidden">
        {prospects.map((prospect) => (
          <button
            key={prospect.id}
            type="button"
            onClick={() => onSelect(prospect)}
            className={cn(
              'rounded-3xl border p-4 text-left transition',
              selectedId === prospect.id
                ? 'border-[#1E5E52] bg-[#F5F5F3]'
                : 'border-neutral-200 bg-white hover:bg-[#FAFAF8]',
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-[#111111]">
                  {prospect.user.firstName} {prospect.user.lastName}
                </p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {prospect.formData.projectType} à {prospect.formData.location}
                </p>
              </div>
              <Badge tone={prospect.analysis.score >= 75 ? 'accent' : 'neutral'}>
                {prospect.analysis.score}
              </Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{prospect.analysis.commercialPriority}</Badge>
              <Badge>{prospect.analysis.maturityLevel}</Badge>
              <Badge>{prospect.status}</Badge>
            </div>
          </button>
        ))}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1080px] text-left text-sm">
          <thead className="border-b border-neutral-200 bg-[#F5F5F3] text-[#6B7280]">
            <tr>
              <th className="px-5 py-4 font-semibold">Prospect</th>
              <th className="px-5 py-4 font-semibold">Contact</th>
              <th className="px-5 py-4 font-semibold">Projet</th>
              <th className="px-5 py-4 font-semibold">Localisation</th>
              <th className="px-5 py-4 font-semibold">Budget</th>
              <th className="px-5 py-4 font-semibold">Score</th>
              <th className="px-5 py-4 font-semibold">Priorité</th>
              <th className="px-5 py-4 font-semibold">Maturité</th>
              <th className="px-5 py-4 font-semibold">Service</th>
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="px-5 py-4 font-semibold">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {prospects.map((prospect) => (
              <tr
                key={prospect.id}
                className={cn(
                  'cursor-pointer transition hover:bg-[#FAFAF8]',
                  selectedId === prospect.id && 'bg-[#F5F5F3]',
                )}
                onClick={() => onSelect(prospect)}
              >
                <td className="px-5 py-4">
                  <p className="font-semibold text-[#111111]">
                    {prospect.user.firstName} {prospect.user.lastName}
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280]">{prospect.user.email}</p>
                </td>
                <td className="px-5 py-4 text-[#6B7280]">{prospect.user.phone}</td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {prospect.formData.projectType}
                </td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {prospect.formData.location}
                </td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {prospect.formData.budget || 'À préciser'}
                </td>
                <td className="px-5 py-4">
                  <Badge tone={prospect.analysis.score >= 75 ? 'accent' : 'neutral'}>
                    {prospect.analysis.score}/100
                  </Badge>
                </td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {prospect.analysis.commercialPriority}
                </td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {prospect.analysis.maturityLevel}
                </td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {prospect.analysis.recommendedService}
                </td>
                <td className="px-5 py-4 text-[#6B7280]">
                  {new Date(prospect.createdAt).toLocaleDateString('fr-FR')}
                </td>
                <td className="px-5 py-4">
                  <Badge>{prospect.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
