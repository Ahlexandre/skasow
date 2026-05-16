import { History } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  fetchAdminActivity,
  formatActivityLabel,
  type AdminActivityLog,
} from '../services/adminActivityService'

export default function AdminActivityPanel() {
  const [logs, setLogs] = useState<AdminActivityLog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAdminActivity()
      .then(setLogs)
      .catch((err) => setError(err instanceof Error ? err.message : 'Chargement impossible.'))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div
      className="mb-8 rounded-[18px] p-6"
      style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-center gap-3">
        <History size={18} className="text-[#C9A84C]" strokeWidth={1.75} />
        <div>
          <h2 className="font-display text-lg text-[#F0EDE8]">Historique des demandes</h2>
          <p className="mt-1 text-xs text-[#6B6760]">
            Suppressions de pre-analyses et comptes enregistrees automatiquement.
          </p>
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-[12px] border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-300">{error}</p>
      ) : null}

      {isLoading ? (
        <p className="mt-6 font-mono text-xs text-[#6B6760]">Chargement de l historique...</p>
      ) : (
        <ul className="mt-6 flex max-h-64 flex-col gap-2 overflow-y-auto">
          {logs.length === 0 ? (
            <li className="text-sm text-[#6B6760]">Aucune activite recente.</li>
          ) : (
            logs.map((log) => (
              <li
                key={log.id}
                className="flex flex-wrap items-baseline justify-between gap-2 rounded-[12px] border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-[#EDEAE4]">{formatActivityLabel(log)}</p>
                  <p className="mt-1 text-xs text-[#6B6760]">
                    {log.user
                      ? `${log.user.firstName} ${log.user.lastName} — ${log.user.email}`
                      : 'Utilisateur inconnu'}
                  </p>
                </div>
                <time className="font-mono text-[10px] text-[#5E5B56]">
                  {new Date(log.createdAt).toLocaleString('fr-FR')}
                </time>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}

