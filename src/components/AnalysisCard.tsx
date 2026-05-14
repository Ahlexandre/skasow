import { ArrowRight, CheckCircle2, CircleAlert, ClipboardList, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Prospect, ProspectStatus } from '../types/prospect'
import { Badge, Button } from './ui'

type AnalysisCardProps = { prospect: Prospect; onStatusChange?: (id: string, status: ProspectStatus) => void }

export default function AnalysisCard({ prospect, onStatusChange }: AnalysisCardProps) {
  const score = prospect.analysis.score
  const scoreColor = score >= 75 ? '#C9A84C' : score >= 45 ? '#F0A030' : '#E05252'
  const r = 28; const circ = 2 * Math.PI * r; const dash = (score / 100) * circ

  return (
    <article className="overflow-hidden rounded-[20px]"
      style={{ border: '1px solid rgba(255,255,255,0.06)', background: '#1A1A24' }}>

      {/* Header */}
      <div className="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:p-8"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0F0F16' }}>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-gold">{prospect.formData.projectType}</span>
            <Badge>{prospect.formData.location || 'Localisation a preciser'}</Badge>
            <StatusBadge status={prospect.status} />
          </div>
          <h3 className="title-display mt-5 text-xl text-[#EDEAE4]">
            {prospect.user.firstName} {prospect.user.lastName}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9E9A94]">{prospect.analysis.summary}</p>
        </div>

        <div className="flex items-center gap-5 self-start rounded-[14px] p-5"
          style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center">
            <svg width="68" height="68" className="-rotate-90">
              <circle cx="34" cy="34" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
              <circle cx="34" cy="34" r={r} fill="none" stroke={scoreColor} strokeWidth="5"
                strokeLinecap="round" strokeDasharray={dash + ' ' + circ} className="score-ring" />
            </svg>
            <span className="title-display absolute text-lg" style={{ color: scoreColor }}>{score}</span>
          </div>
          <div>
            <p className="label-mono">Score IA</p>
            <p className="mt-1.5 text-sm font-medium text-[#EDEAE4]">
              {score >= 75 ? 'Dossier prioritaire' : score >= 45 ? 'A qualifier' : 'A completer'}
            </p>
            <div className="mt-2 h-1 w-20 overflow-hidden rounded-full bg-white/5">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: score + '%', background: scoreColor }} />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid gap-6 p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[['Profil', prospect.analysis.profileType], ['Maturite', prospect.analysis.maturityLevel], ['Priorite', prospect.analysis.commercialPriority]].map(([l, v]) => (
            <div key={l} className="rounded-[12px] p-4" style={{ background: '#0F0F16', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="label-mono">{l}</p>
              <p className="mt-2 text-sm font-medium text-[#EDEAE4]">{v}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[14px] p-5"
            style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}>
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#C9A84C] text-[#09090E]">
                <ClipboardList size={14} strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#EDEAE4]">Prochaine action</p>
                <p className="mt-1.5 text-sm leading-7 text-[#9E9A94]">{prospect.analysis.nextAction}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <List icon={<ArrowRight size={13} strokeWidth={2.5} />}   title="Recommandations" items={prospect.analysis.recommendations} />
            <List icon={<CheckCircle2 size={13} strokeWidth={2.5} />} title="Points forts"     items={prospect.analysis.strengths} accent />
            <List icon={<CircleAlert size={13} strokeWidth={2.5} />}  title="A clarifier"      items={prospect.analysis.clarifications} />
            <div className="rounded-[14px] p-5" style={{ background: '#0F0F16', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-[#C9A84C]" strokeWidth={2} />
                <p className="label-mono">Service conseille</p>
              </div>
              <p className="mt-3 text-sm font-semibold text-[#C9A84C]">{prospect.analysis.recommendedService}</p>
              <p className="mt-1.5 text-xs leading-6 text-[#5E5B56]">Orientation la plus coherente avec le projet declare.</p>
            </div>
          </div>
        </div>
      </div>

      {onStatusChange && (
        <div className="flex flex-col gap-3 p-6 sm:flex-row sm:flex-wrap lg:p-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0F0F16' }}>
          <Button onClick={() => onStatusChange(prospect.id, 'Trait\u00e9')}>Marquer comme traite</Button>
          <Button variant="secondary" onClick={() => onStatusChange(prospect.id, '\u00c0 recontacter')}>A recontacter</Button>
          <Button variant="secondary" onClick={() => onStatusChange(prospect.id, '\u00c0 compl\u00e9ter')}>Dossier incomplet</Button>
        </div>
      )}
    </article>
  )
}

function List({ icon, title, items, accent = false }: { icon: ReactNode; title: string; items: string[]; accent?: boolean }) {
  return (
    <div className="rounded-[14px] p-5"
      style={{ background: accent ? 'rgba(201,168,76,0.04)' : '#0F0F16', border: accent ? '1px solid rgba(201,168,76,0.10)' : '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center gap-2">
        <span className="text-[#C9A84C]">{icon}</span>
        <p className="label-mono">{title}</p>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#9E9A94]">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A84C]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StatusBadge({ status }: { status: ProspectStatus }) {
  const tone = status === 'Prioritaire' ? 'warning' : status === 'Trait\u00e9' ? 'success' : status === '\u00c0 compl\u00e9ter' ? 'danger' : 'neutral'
  return <Badge tone={tone}>{status}</Badge>
}
