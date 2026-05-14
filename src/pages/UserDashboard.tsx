import { ArrowRight, Clock3, FileCheck2, LogOut, UserRound } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import StatCard from '../components/StatCard'
import {
  Badge,
  Button,
  Card,
  EmptyState,
  IconBadge,
  SectionHeader,
  pageShell,
  primaryButton,
} from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import { getProspectsByUser } from '../services/prospectService'

export default function UserDashboard() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const prospects = useMemo(
    () => (currentUser ? getProspectsByUser(currentUser.id) : []),
    [currentUser],
  )

  const latestProspect = prospects[0]

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  if (!currentUser) {
    return null
  }

  return (
    <section className={pageShell}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Mon espace"
          title="Votre dossier immobilier, en un coup d’œil"
          description="Retrouvez votre profil, vos pré-analyses, le statut de vos demandes et la prochaine action recommandée par DS Conseil."
        />
        <Button variant="dark" onClick={handleLogout}>
          <LogOut size={18} />
          Déconnexion
        </Button>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <Card>
          <div className="flex items-start gap-4">
            <IconBadge icon={UserRound} />
            <div>
              <Badge tone="accent">Profil client</Badge>
              <h2 className="mt-4 text-2xl font-semibold text-[#111111]">
                {currentUser.firstName} {currentUser.lastName}
              </h2>
              <div className="mt-5 space-y-2 text-sm leading-6 text-[#6B7280]">
                <p>{currentUser.email}</p>
                <p>{currentUser.phone || 'Téléphone à compléter'}</p>
                <p>
                  Compte créé le{' '}
                  {new Date(currentUser.createdAt).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#F5F5F3] p-5">
            <p className="text-sm font-semibold text-[#111111]">Prochaine action</p>
            <p className="mt-2 text-sm leading-7 text-[#6B7280]">
              {latestProspect
                ? latestProspect.analysis.nextAction
                : 'Lancez une pré-analyse pour structurer votre premier dossier.'}
            </p>
          </div>
          <Link to="/pre-analysis" className={`${primaryButton} mt-6 w-full`}>
            Nouvelle pré-analyse
            <ArrowRight size={18} />
          </Link>
        </Card>

        <div className="grid gap-5 sm:grid-cols-3">
          <StatCard
            label="Pré-analyses"
            value={String(prospects.length)}
            detail="Dossiers enregistrés"
            icon={FileCheck2}
          />
          <StatCard
            label="Prioritaires"
            value={String(
              prospects.filter((prospect) => prospect.status === 'Prioritaire').length,
            )}
            detail="À fort potentiel"
            icon={Clock3}
            tone="accent"
          />
          <StatCard
            label="À compléter"
            value={String(
              prospects.filter((prospect) => prospect.status === 'À compléter').length,
            )}
            detail="Informations manquantes"
            icon={UserRound}
          />
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">
              Mes pré-analyses
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#6B7280]">
              Chaque dossier conserve son score, son niveau de maturité et son
              statut de suivi.
            </p>
          </div>
          {latestProspect && <Badge tone="accent">Dernier statut: {latestProspect.status}</Badge>}
        </div>

        <div className="mt-6 grid gap-6">
          {prospects.map((prospect) => (
            <AnalysisCard key={prospect.id} prospect={prospect} />
          ))}
          {!prospects.length && (
            <EmptyState
              title="Aucun dossier enregistré"
              description="Commencez par une pré-analyse pour retrouver ici votre diagnostic et le prochain pas conseillé."
              action={
                <Link to="/pre-analysis" className={primaryButton}>
                  Faire une pré-analyse
                </Link>
              }
            />
          )}
        </div>
      </div>
    </section>
  )
}
