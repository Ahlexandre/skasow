import { History, Trash2, UserX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader, pageShell } from '../components/ui'
import {
  deleteAdminAccountDeletionHistory,
  deleteAdminAnalysisHistory,
  fetchAdminHistory,
  formatRequestStatus,
  type AccountDeletionRequestEntry,
  type AccountDeletionSnapshot,
  type AnalysisHistoryEntry,
} from '../services/adminHistoryService'

type Tab = 'analyses' | 'accounts'
const HISTORY_RETENTION_YEARS = 3

function snapshotLabel(snapshot: Record<string, unknown>) {
  const project = snapshot.projectType ? String(snapshot.projectType) : 'Projet'
  const city = snapshot.city ? ` - ${String(snapshot.city)}` : ''
  const score = snapshot.score !== undefined ? ` (score ${String(snapshot.score)})` : ''
  return `${project}${city}${score}`
}

function legacyValue(snapshot: Record<string, unknown>, key: string) {
  const value = snapshot[key]
  return typeof value === 'string' ? value : ''
}

function accountSnapshotSummary(snapshot: AccountDeletionSnapshot) {
  const firstName = snapshot.identity?.firstName ?? legacyValue(snapshot, 'firstName')
  const lastName = snapshot.identity?.lastName ?? legacyValue(snapshot, 'lastName')
  const fullName = snapshot.identity?.fullName ?? `${firstName} ${lastName}`.trim()
  const email = snapshot.contact?.email ?? legacyValue(snapshot, 'email')
  const phone = snapshot.contact?.phone ?? legacyValue(snapshot, 'phone')
  const role = snapshot.account?.role ?? legacyValue(snapshot, 'role')
  const analysesCount = typeof snapshot.analyses?.count === 'number' ? snapshot.analyses.count : undefined

  return {
    fullName: fullName || 'Utilisateur supprime',
    email: email || 'Email non renseigne',
    phone: phone || null,
    role: role || 'Role non renseigne',
    analysesCount,
    deletedBy: snapshot.deletion?.deletedBy,
  }
}

function addYears(date: Date, years: number) {
  const nextDate = new Date(date)
  nextDate.setFullYear(nextDate.getFullYear() + years)
  return nextDate
}

function formatRetentionLabel(sourceDate: string | null) {
  if (!sourceDate) return 'Suppression definitive : date de depart non renseignee'

  const startDate = new Date(sourceDate)
  if (Number.isNaN(startDate.getTime())) {
    return 'Suppression definitive : date de depart invalide'
  }

  const deletionDate = addYears(startDate, HISTORY_RETENTION_YEARS)
  const diffMs = deletionDate.getTime() - Date.now()
  const formattedDate = deletionDate.toLocaleDateString('fr-FR')

  if (diffMs <= 0) {
    return `Suppression definitive due depuis le ${formattedDate}`
  }

  const totalDays = Math.ceil(diffMs / (24 * 60 * 60 * 1000))
  const years = Math.floor(totalDays / 365)
  const months = Math.floor((totalDays % 365) / 30)
  const days = totalDays < 30 ? totalDays : totalDays % 30
  const parts = [
    years > 0 ? `${years} an${years > 1 ? 's' : ''}` : '',
    months > 0 ? `${months} mois` : '',
    years === 0 && days > 0 ? `${days} jour${days > 1 ? 's' : ''}` : '',
  ].filter(Boolean)

  return `A supprimer dans ${parts.join(' et ')} (${formattedDate})`
}

export default function AdminHistory() {
  const [tab, setTab] = useState<Tab>('analyses')
  const [analysisHistories, setAnalysisHistories] = useState<AnalysisHistoryEntry[]>([])
  const [accountRequests, setAccountRequests] = useState<AccountDeletionRequestEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAdminHistory()
      .then((data) => {
        setAnalysisHistories(data.analysisHistories)
        setAccountRequests(data.accountDeletionRequests)
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Chargement impossible.'))
      .finally(() => setIsLoading(false))
  }, [])

  const deleteAnalysisHistory = async (id: string) => {
    const confirmed = window.confirm('Supprimer definitivement cet historique de pre-analyse ?')
    if (!confirmed) return

    setDeletingId(`analysis:${id}`)
    setError('')
    try {
      await deleteAdminAnalysisHistory(id)
      setAnalysisHistories((current) => current.filter((entry) => entry.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Suppression definitive impossible.')
    } finally {
      setDeletingId(null)
    }
  }

  const deleteAccountHistory = async (id: string) => {
    const confirmed = window.confirm('Supprimer definitivement cet historique de compte ?')
    if (!confirmed) return

    setDeletingId(`account:${id}`)
    setError('')
    try {
      await deleteAdminAccountDeletionHistory(id)
      setAccountRequests((current) => current.filter((entry) => entry.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Suppression definitive impossible.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <section className={pageShell}>
      <SectionHeader
        eyebrow="Administration"
        title="Historique"
        description="Pre-analyses supprimees (donnees conservees) et demandes de suppression de compte utilisateur."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab('analyses')}
          className={
            'rounded-full px-4 py-2 text-sm font-medium transition ' +
            (tab === 'analyses' ? 'bg-[#C9A84C] text-[#09090E]' : 'bg-white/5 text-[#9E9A94] hover:text-[#EDEAE4]')
          }
        >
          Pre-analyses supprimees ({analysisHistories.length})
        </button>
        <button
          type="button"
          onClick={() => setTab('accounts')}
          className={
            'rounded-full px-4 py-2 text-sm font-medium transition ' +
            (tab === 'accounts' ? 'bg-[#C9A84C] text-[#09090E]' : 'bg-white/5 text-[#9E9A94] hover:text-[#EDEAE4]')
          }
        >
          Demandes compte ({accountRequests.filter((request) => request.status === 'PENDING').length} en attente)
        </button>
      </div>

      {error ? <p className="mt-6 text-sm text-red-300">{error}</p> : null}
      {isLoading ? <p className="mt-8 font-mono text-xs text-[#6B6760]">Chargement...</p> : null}

      {!isLoading && tab === 'analyses' && (
        <ul className="mt-8 flex flex-col gap-4">
          {analysisHistories.length === 0 ? (
            <li className="text-sm text-[#6B6760]">Aucune pre-analyse historisee.</li>
          ) : (
            analysisHistories.map((entry) => (
              <li
                key={entry.id}
                className="rounded-[16px] border border-white/6 p-5"
                style={{ background: '#111118' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-medium text-[#EDEAE4]">
                      <History size={14} className="text-[#C9A84C]" />
                      {snapshotLabel(entry.snapshot)}
                    </p>
                    <p className="mt-2 text-xs text-[#6B6760]">
                      {entry.userFirstName} {entry.userLastName} - {entry.userEmail}
                      {entry.userPhone ? ` - ${entry.userPhone}` : ''}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-[#5E5B56]">
                      ID {entry.originalAnalysisId} - supprime par {entry.deletedBy}
                    </p>
                    <p className="mt-2 rounded-[10px] border border-[#C9A84C]/15 bg-[#C9A84C]/8 px-3 py-2 text-xs text-[#DDB96A]">
                      {formatRetentionLabel(entry.deletedAt)}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <time className="font-mono text-[10px] text-[#5E5B56]">
                      {new Date(entry.deletedAt).toLocaleString('fr-FR')}
                    </time>
                    <button
                      type="button"
                      onClick={() => void deleteAnalysisHistory(entry.id)}
                      disabled={deletingId === `analysis:${entry.id}`}
                      className="inline-flex items-center gap-2 rounded-[10px] border border-red-500/20 bg-red-500/8 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/12 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Trash2 size={13} />
                      {deletingId === `analysis:${entry.id}` ? 'Suppression...' : 'Supprimer definitivement'}
                    </button>
                  </div>
                </div>
                <details className="mt-4">
                  <summary className="cursor-pointer text-xs text-[#C9A84C]">Voir toutes les donnees</summary>
                  <pre className="mt-3 max-h-48 overflow-auto rounded-[10px] bg-black/30 p-3 text-[10px] leading-5 text-[#9E9A94]">
                    {JSON.stringify(entry.snapshot, null, 2)}
                  </pre>
                </details>
              </li>
            ))
          )}
        </ul>
      )}

      {!isLoading && tab === 'accounts' && (
        <ul className="mt-8 flex flex-col gap-4">
          {accountRequests.length === 0 ? (
            <li className="text-sm text-[#6B6760]">Aucune demande de suppression.</li>
          ) : (
            accountRequests.map((request) => {
              const snap = request.userSnapshot
              const summary = accountSnapshotSummary(snap)

              return (
                <li
                  key={request.id}
                  className="rounded-[16px] border border-white/6 p-5"
                  style={{ background: '#111118' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-medium text-[#EDEAE4]">
                        <UserX size={14} className="text-red-400" />
                        {summary.fullName} - {summary.email}
                      </p>
                      <div className="mt-3 grid gap-2 text-xs text-[#6B6760] sm:grid-cols-2">
                        <p>Telephone : {summary.phone || 'Non renseigne'}</p>
                        <p>Role : {summary.role}</p>
                        <p>
                          Pre-analyses historisees:{' '}
                          {summary.analysesCount !== undefined ? summary.analysesCount : 'Non renseigne'}
                        </p>
                        <p>
                          Suppression:{' '}
                          {summary.deletedBy === 'admin'
                            ? 'Administrateur'
                            : summary.deletedBy === 'user'
                              ? 'Utilisateur'
                              : 'Non renseignee'}
                        </p>
                      </div>
                      {request.reason ? (
                        <p className="mt-2 text-sm text-[#9E9A94]">Motif : {request.reason}</p>
                      ) : (
                        <p className="mt-2 text-xs text-[#6B6760]">Aucun motif renseigne</p>
                      )}
                      <p className="mt-1 font-mono text-[10px] text-[#5E5B56]">
                        Statut : {formatRequestStatus(request.status)}
                      </p>
                      <p className="mt-2 rounded-[10px] border border-[#C9A84C]/15 bg-[#C9A84C]/8 px-3 py-2 text-xs text-[#DDB96A]">
                        {request.status === 'PENDING'
                          ? 'Suppression definitive : 3 ans apres traitement de la demande'
                          : formatRetentionLabel(request.processedAt ?? request.createdAt)}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 sm:items-end">
                      <time className="font-mono text-[10px] text-[#5E5B56]">
                        {new Date(request.createdAt).toLocaleString('fr-FR')}
                      </time>
                      <button
                        type="button"
                        onClick={() => void deleteAccountHistory(request.id)}
                        disabled={deletingId === `account:${request.id}`}
                        className="inline-flex items-center gap-2 rounded-[10px] border border-red-500/20 bg-red-500/8 px-3 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/12 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <Trash2 size={13} />
                        {deletingId === `account:${request.id}` ? 'Suppression...' : 'Supprimer definitivement'}
                      </button>
                    </div>
                  </div>
                  {request.status === 'PENDING' && (
                    <Link
                      to="/admin/users"
                      className="mt-4 inline-flex text-xs font-semibold text-[#C9A84C] hover:underline"
                    >
                      Traiter via gestion des utilisateurs
                    </Link>
                  )}
                  <details className="mt-4">
                    <summary className="cursor-pointer text-xs text-[#C9A84C]">Voir le snapshot structure</summary>
                    <pre className="mt-3 max-h-64 overflow-auto rounded-[10px] bg-black/30 p-3 text-[10px] leading-5 text-[#9E9A94]">
                      {JSON.stringify(snap, null, 2)}
                    </pre>
                  </details>
                </li>
              )
            })
          )}
        </ul>
      )}
    </section>
  )
}
