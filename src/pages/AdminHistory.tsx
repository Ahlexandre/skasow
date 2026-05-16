import { History, UserX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  fetchAdminHistory,
  formatRequestStatus,
  type AccountDeletionRequestEntry,
  type AnalysisHistoryEntry,
} from '../services/adminHistoryService'
import { SectionHeader, pageShell } from '../components/ui'

type Tab = 'analyses' | 'accounts'

function snapshotLabel(snapshot: Record<string, unknown>) {
  const project = snapshot.projectType ? String(snapshot.projectType) : 'Projet'
  const city = snapshot.city ? ` — ${String(snapshot.city)}` : ''
  const score = snapshot.score !== undefined ? ` (score ${String(snapshot.score)})` : ''
  return `${project}${city}${score}`
}

export default function AdminHistory() {
  const [tab, setTab] = useState<Tab>('analyses')
  const [analysisHistories, setAnalysisHistories] = useState<AnalysisHistoryEntry[]>([])
  const [accountRequests, setAccountRequests] = useState<AccountDeletionRequestEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
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
          Demandes compte ({accountRequests.filter((r) => r.status === 'PENDING').length} en attente)
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
                      {snapshotLabel(entry.snapshot as Record<string, unknown>)}
                    </p>
                    <p className="mt-2 text-xs text-[#6B6760]">
                      {entry.userFirstName} {entry.userLastName} — {entry.userEmail}
                      {entry.userPhone ? ` — ${entry.userPhone}` : ''}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-[#5E5B56]">
                      ID {entry.originalAnalysisId} · supprime par {entry.deletedBy}
                    </p>
                  </div>
                  <time className="font-mono text-[10px] text-[#5E5B56]">
                    {new Date(entry.deletedAt).toLocaleString('fr-FR')}
                  </time>
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
              const snap = request.userSnapshot as Record<string, string>
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
                        {snap.firstName} {snap.lastName} — {snap.email}
                      </p>
                      {request.reason ? (
                        <p className="mt-2 text-sm text-[#9E9A94]">Motif : {request.reason}</p>
                      ) : (
                        <p className="mt-2 text-xs text-[#6B6760]">Aucun motif renseigne</p>
                      )}
                      <p className="mt-1 font-mono text-[10px] text-[#5E5B56]">
                        Statut : {formatRequestStatus(request.status)}
                      </p>
                    </div>
                    <time className="font-mono text-[10px] text-[#5E5B56]">
                      {new Date(request.createdAt).toLocaleString('fr-FR')}
                    </time>
                  </div>
                  {request.status === 'PENDING' && (
                    <Link
                      to="/admin/users"
                      className="mt-4 inline-flex text-xs font-semibold text-[#C9A84C] hover:underline"
                    >
                      Traiter via gestion des utilisateurs →
                    </Link>
                  )}
                </li>
              )
            })
          )}
        </ul>
      )}
    </section>
  )
}
