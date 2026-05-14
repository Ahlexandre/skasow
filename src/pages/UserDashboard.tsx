import { ArrowRight, FileCheck2, LogOut, TrendingUp, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import { Button, EmptyState, primaryButton } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import { fetchMyProspects } from '../services/prospectService'
import type { Prospect } from '../types/prospect'

export default function UserDashboard() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const latestProspect = prospects[0]

  useEffect(() => {
    if (!currentUser) return
    setIsLoading(true)
    fetchMyProspects(currentUser)
      .then(setProspects)
      .catch(() => setProspects([]))
      .finally(() => setIsLoading(false))
  }, [currentUser])

  const handleLogout = async () => { await logout(); navigate('/') }

  if (!currentUser) return null

  if (isLoading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="font-mono text-sm text-[#6B6760]">Chargement de vos analyses...</p>
      </div>
    )
  }

  return (
    <div className="px-6 py-10 lg:px-10 lg:py-12">
      {/* Header */}
      <div className="mb-10 flex items-start justify-between border-b border-white/5 pb-8">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#6B6760] uppercase">Mon espace</span>
          <h1 className="mt-2 font-display text-3xl tracking-[-0.03em] text-[#F0EDE8]">
            {currentUser.firstName} {currentUser.lastName}
          </h1>
          <p className="mt-1 text-sm text-[#6B6760]">{currentUser.email}</p>
        </div>
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut size={15} strokeWidth={1.75} /> Deconnexion
        </Button>
      </div>

      {/* Stats row */}
      <div className="mb-10 grid grid-cols-3 gap-3">
        {[
          { icon: FileCheck2, label: 'Pre-analyses', value: String(prospects.length) },
          { icon: TrendingUp,  label: 'Prioritaires', value: String(prospects.filter((p) => p.status === 'Prioritaire').length) },
          { icon: UserRound,   label: 'A completer',  value: String(prospects.filter((p) => p.status === '\u00c0 compl\u00e9ter').length) },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-[16px] p-5" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}>
            <Icon size={16} className="text-[#C9A84C]" strokeWidth={1.75} />
            <p className="mt-4 font-display text-3xl text-[#F0EDE8]">{value}</p>
            <p className="mt-1 text-[10px] font-mono text-[#6B6760]">{label}</p>
          </div>
        ))}
      </div>

      {/* Prochaine action */}
      {latestProspect && (
        <div className="mb-10 rounded-[16px] p-6" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#C9A84C]/60 uppercase">Prochaine action</span>
          <p className="mt-2 text-sm leading-7 text-[#A8A49E]">{latestProspect.analysis.nextAction}</p>
        </div>
      )}

      {/* CTA nouvelle analyse */}
      <Link to="/pre-analysis" className={primaryButton + " mb-10 w-fit"}>
        Nouvelle pre-analyse <ArrowRight size={15} strokeWidth={2} />
      </Link>

      {/* Liste analyses */}
      <div className="border-t border-white/5 pt-8">
        <h2 className="mb-6 font-display text-xl text-[#F0EDE8]">Mes pre-analyses</h2>
        <div className="flex flex-col gap-5">
          {prospects.map((p) => <AnalysisCard key={p.id} prospect={p} />)}
          {!isLoading && !prospects.length && (
            <EmptyState title="Aucun dossier" description="Commencez par une pre-analyse pour retrouver ici votre diagnostic."
              action={<Link to="/pre-analysis" className={primaryButton}>Faire une pre-analyse</Link>} />
          )}
        </div>
      </div>
    </div>
  )
}
