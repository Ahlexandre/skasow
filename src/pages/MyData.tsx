import { ArrowLeft, Shield, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import { Button, EmptyState, Textarea, labelClass, primaryButton } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import { deleteMyProspect, fetchMyProspects } from '../services/prospectService'
import { requestAccountDeletion } from '../services/userDataService'
import type { Prospect } from '../types/prospect'

export default function MyData() {
  const { currentUser } = useAuth()
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [reason, setReason] = useState('')
  const [isSubmittingAccount, setIsSubmittingAccount] = useState(false)
  const [accountMessage, setAccountMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!currentUser) return
    fetchMyProspects(currentUser)
      .then(setProspects)
      .catch(() => setProspects([]))
      .finally(() => setIsLoading(false))
  }, [currentUser])

  const deleteProspect = async (id: string) => {
    const confirmed = window.confirm(
      'Supprimer cette pre-analyse ?\n\nElle sera retiree de votre espace mais conservee dans l historique interne DS Conseil.',
    )
    if (!confirmed) return

    setSavingId(id)
    try {
      await deleteMyProspect(id)
      setProspects((current) => current.filter((p) => p.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Suppression impossible.')
    } finally {
      setSavingId(null)
    }
  }

  const submitAccountDeletion = async (event: React.FormEvent) => {
    event.preventDefault()
    const confirmed = window.confirm(
      'Envoyer une demande de suppression de compte ?\n\nUn administrateur traitera votre demande manuellement.',
    )
    if (!confirmed) return

    setIsSubmittingAccount(true)
    setError('')
    setAccountMessage('')
    try {
      const response = await requestAccountDeletion(reason)
      setAccountMessage(response.message)
      setReason('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Demande impossible.')
    } finally {
      setIsSubmittingAccount(false)
    }
  }

  if (!currentUser) return null

  return (
    <div className="px-6 py-10 lg:px-10 lg:py-12">
      <Link to="/mon-espace" className="mb-8 inline-flex items-center gap-2 text-sm text-[#6B6760] hover:text-[#C9A84C]">
        <ArrowLeft size={14} /> Retour a mon espace
      </Link>

      <header className="mb-10 border-b border-white/5 pb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B6760]">Donnees personnelles</span>
        <h1 className="mt-2 font-display text-3xl text-[#F0EDE8]">Mes donnees</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B6760]">
          Supprimez vos pre-analyses ou demandez la suppression de votre compte. Les informations sont historisees pour DS Conseil.
        </p>
      </header>

      {error ? <p className="mb-6 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">{error}</p> : null}
      {accountMessage ? <p className="mb-6 rounded-[14px] border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm text-emerald-300">{accountMessage}</p> : null}

      <section className="mb-12">
        <h2 className="mb-4 font-display text-xl text-[#F0EDE8]">Mes pre-analyses</h2>
        {isLoading ? (
          <p className="text-sm text-[#6B6760]">Chargement...</p>
        ) : prospects.length === 0 ? (
          <EmptyState
            title="Aucune pre-analyse"
            description="Vous n avez aucune pre-analyse a supprimer."
            action={<Link to="/pre-analysis" className={primaryButton}>Faire une pre-analyse</Link>}
          />
        ) : (
          <div className="flex flex-col gap-5">
            {prospects.map((prospect) => (
              <div key={prospect.id} className="flex flex-col gap-3">
                <Button
                  variant="danger"
                  className="w-fit"
                  onClick={() => void deleteProspect(prospect.id)}
                  disabled={savingId === prospect.id}
                >
                  <Trash2 size={15} />
                  {savingId === prospect.id ? 'Suppression...' : 'Supprimer cette pre-analyse'}
                </Button>
                <AnalysisCard prospect={prospect} showNextAction={false} />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-[18px] p-6" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-red-500/10 text-red-400">
            <Shield size={18} strokeWidth={1.75} />
          </span>
          <div>
            <h2 className="font-display text-xl text-[#F0EDE8]">Supprimer mon compte</h2>
            <p className="mt-2 text-sm leading-7 text-[#6B6760]">
              Remplissez le formulaire ci-dessous. Un administrateur traitera votre demande depuis la gestion des utilisateurs.
            </p>
          </div>
        </div>
        <form onSubmit={(e) => void submitAccountDeletion(e)} className="mt-6">
          <label className={labelClass}>
            Motif (facultatif)
            <Textarea
              rows={4}
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              placeholder="Precisez la raison si vous le souhaitez..."
            />
          </label>
          <Button type="submit" variant="danger" className="mt-4" disabled={isSubmittingAccount}>
            {isSubmittingAccount ? 'Envoi en cours...' : 'Demander la suppression du compte'}
          </Button>
        </form>
      </section>
    </div>
  )
}
