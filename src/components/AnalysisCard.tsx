import { ArrowRight, CheckCircle2, CircleAlert, ClipboardList } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Prospect, ProspectStatus } from '../types/prospect'
import { Badge, Button } from './ui'

type AnalysisCardProps = {
  prospect: Prospect
  onStatusChange?: (id: string, status: ProspectStatus) => void
}

export default function AnalysisCard({
  prospect,
  onStatusChange,
}: AnalysisCardProps) {
  const score = prospect.analysis.score

  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <div className="grid gap-6 border-b border-neutral-200 bg-[#FAFAF8] p-6 lg:grid-cols-[1fr_auto] lg:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent">{prospect.formData.projectType}</Badge>
            <Badge>{prospect.formData.location || 'Localisation à préciser'}</Badge>
            <StatusBadge status={prospect.status} />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-[#111111]">
            {prospect.user.firstName} {prospect.user.lastName}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B7280]">
            {prospect.analysis.summary}
          </p>
        </div>

        <div className="flex items-center gap-5 rounded-3xl border border-neutral-200 bg-white p-5">
          <ScoreRing score={score} />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">
              Score IA
            </p>
            <p className="mt-2 text-sm font-semibold text-[#111111]">
              {score >= 75 ? 'Dossier prioritaire' : score >= 45 ? 'À qualifier' : 'À compléter'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Metric label="Profil" value={prospect.analysis.profileType} />
          <Metric label="Maturité" value={prospect.analysis.maturityLevel} />
          <Metric label="Priorité" value={prospect.analysis.commercialPriority} />
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-neutral-200 bg-[#F5F5F3] p-5">
            <div className="flex items-start gap-3">
              <ClipboardList className="mt-0.5 text-[#1E5E52]" size={20} />
              <div>
                <p className="text-sm font-bold text-[#111111]">Prochaine action</p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  {prospect.analysis.nextAction}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <List
              icon={<ArrowRight size={18} />}
              title="Recommandations"
              items={prospect.analysis.recommendations}
            />
            <List
              icon={<CheckCircle2 size={18} />}
              title="Points forts"
              items={prospect.analysis.strengths}
            />
            <List
              icon={<CircleAlert size={18} />}
              title="Points à clarifier"
              items={prospect.analysis.clarifications}
            />
            <div className="rounded-3xl border border-neutral-200 bg-white p-5">
              <p className="text-sm font-bold text-[#111111]">Service conseillé</p>
              <p className="mt-3 text-lg font-semibold text-[#1E5E52]">
                {prospect.analysis.recommendedService}
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                Orientation commerciale la plus cohérente avec le projet déclaré.
              </p>
            </div>
          </div>
        </div>
      </div>

      {onStatusChange && (
        <div className="flex flex-col gap-3 border-t border-neutral-200 bg-[#FAFAF8] p-6 sm:flex-row sm:flex-wrap lg:p-8">
          <Button onClick={() => onStatusChange(prospect.id, 'Traité')}>
            Marquer comme traité
          </Button>
          <Button
            variant="secondary"
            onClick={() => onStatusChange(prospect.id, 'À recontacter')}
          >
            À recontacter
          </Button>
          <Button
            variant="secondary"
            onClick={() => onStatusChange(prospect.id, 'À compléter')}
          >
            Dossier incomplet
          </Button>
        </div>
      )}
    </article>
  )
}

function ScoreRing({ score }: { score: number }) {
  return (
    <div
      className="grid h-20 w-20 shrink-0 place-items-center rounded-full"
      style={{
        background: `conic-gradient(#1E5E52 ${score * 3.6}deg, #EAE4D8 0deg)`,
      }}
    >
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white">
        <span className="text-xl font-semibold text-[#111111]">
          {score}
        </span>
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-[#111111]">{value}</p>
    </div>
  )
}

function List({
  icon,
  title,
  items,
}: {
  icon: ReactNode
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5">
      <div className="flex items-center gap-2 text-[#1E5E52]">
        {icon}
        <p className="text-sm font-bold text-[#111111]">{title}</p>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6B7280]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E5E52]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StatusBadge({ status }: { status: ProspectStatus }) {
  const tone =
    status === 'Prioritaire'
      ? 'warning'
      : status === 'Traité'
        ? 'success'
        : status === 'À compléter'
          ? 'danger'
          : 'neutral'

  return <Badge tone={tone}>{status}</Badge>
}
