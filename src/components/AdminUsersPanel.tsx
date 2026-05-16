import { CalendarDays, Mail, Phone, Search, ShieldCheck, Trash2, UserRound } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../contexts/useAuth'
import {
  deleteAdminUser,
  fetchAdminUser,
  fetchAdminUsers,
  updateAdminUserRole,
  type AdminUser,
  type AdminUserRole,
} from '../services/adminUserService'
import { Badge, Button, EmptyState, Input, SectionHeader, Select } from './ui'

export default function AdminUsersPanel() {
  const { currentUser } = useAuth()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<AdminUserRole | ''>('')
  const [isLoading, setIsLoading] = useState(true)
  const [isMutating, setIsMutating] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    fetchAdminUsers({ search: query, role: roleFilter })
      .then((nextUsers) => {
        if (ignore) return
        setUsers(nextUsers)
        setSelectedUser((current) =>
          current
            ? nextUsers.find((user) => user.id === current.id) ?? nextUsers[0] ?? null
            : nextUsers[0] ?? null,
        )
        setError('')
      })
      .catch((err) => {
        if (ignore) return
        setUsers([])
        setSelectedUser(null)
        setError(err instanceof Error ? err.message : 'Chargement impossible.')
      })
      .finally(() => {
        if (!ignore) setIsLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [query, roleFilter])

  const stats = useMemo(
    () => ({
      total: users.length,
      admins: users.filter((user) => user.role === 'ADMIN').length,
      users: users.filter((user) => user.role === 'USER').length,
    }),
    [users],
  )

  const selectUser = async (user: AdminUser) => {
    setSelectedUser(user)
    const detail = await fetchAdminUser(user.id)
    setSelectedUser(detail)
    setUsers((current) =>
      current.map((item) => (item.id === detail.id ? { ...item, ...detail } : item)),
    )
  }

  const changeRole = async (role: AdminUserRole) => {
    if (!selectedUser) return
    setIsMutating(true)
    try {
      const updated = await updateAdminUserRole(selectedUser.id, role)
      setSelectedUser((current) => (current ? { ...current, ...updated } : updated))
      setUsers((current) =>
        current.map((user) => (user.id === updated.id ? { ...user, ...updated } : user)),
      )
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Mise a jour impossible.')
    } finally {
      setIsMutating(false)
    }
  }

  const deleteUser = async () => {
    if (!selectedUser) return
    const confirmed = window.confirm(`Supprimer le compte ${selectedUser.email} ?`)
    if (!confirmed) return

    setIsMutating(true)
    try {
      await deleteAdminUser(selectedUser.id)
      setUsers((current) => current.filter((user) => user.id !== selectedUser.id))
      setSelectedUser(null)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Suppression impossible.')
    } finally {
      setIsMutating(false)
    }
  }

  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Utilisateurs"
          title="Gestion des comptes"
          description="Consultez les comptes actifs, modifiez les permissions et supprimez les comptes a retirer."
        />
        <div className="flex flex-wrap gap-2">
          <Badge tone="gold">{stats.total} compte(s)</Badge>
          <Badge>{stats.admins} admin</Badge>
          <Badge>{stats.users} user</Badge>
        </div>
      </div>

      <div className="grid gap-3 rounded-[16px] p-4 lg:grid-cols-[1fr_220px]" style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.06)' }}>
        <label className="relative" aria-label="Recherche utilisateur">
          <Search size={14} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5E5B56]" strokeWidth={2} />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full pl-10"
            placeholder="Nom, email, telephone..."
          />
        </label>
        <Select
          value={roleFilter}
          onChange={(event) => setRoleFilter(event.target.value as AdminUserRole | '')}
        >
          <option value="">Tous les roles</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </Select>
      </div>

      {error && (
        <div className="rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="rounded-[18px] p-8 text-sm text-[#9E9A94]" style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.06)' }}>
          Chargement des comptes...
        </div>
      ) : users.length ? (
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[18px]" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="px-6 py-4" style={{ background: '#0F0F16', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-sm font-semibold text-[#EDEAE4]">Comptes actifs</p>
              <p className="mt-0.5 label-mono">{users.length} resultat(s)</p>
            </div>
            <div className="hidden overflow-x-auto lg:block" style={{ background: '#1A1A24' }}>
              <table className="table-dark w-full min-w-[760px] text-left">
                <thead>
                  <tr>
                    {['Utilisateur', 'Role', 'Telephone', 'Analyses', 'Sessions', 'Creation'].map((heading) => (
                      <th key={heading}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className={selectedUser?.id === user.id ? 'selected cursor-pointer' : 'cursor-pointer'}
                      onClick={() => void selectUser(user)}
                    >
                      <td>
                        <p className="font-semibold text-[#EDEAE4]">{user.firstName} {user.lastName}</p>
                        <p className="mt-0.5 text-xs text-[#5E5B56]">{user.email}</p>
                      </td>
                      <td><RoleBadge role={user.role} /></td>
                      <td>{user.phone ?? 'Non renseigne'}</td>
                      <td>{user.analysesCount}</td>
                      <td>{user.activeSessionsCount}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString('fr-FR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-2 p-3 lg:hidden" style={{ background: '#1A1A24' }}>
              {users.map((user) => (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => void selectUser(user)}
                  className="rounded-[12px] border border-white/6 bg-[#0F0F16] p-4 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#EDEAE4]">{user.firstName} {user.lastName}</p>
                      <p className="mt-0.5 text-xs text-[#5E5B56]">{user.email}</p>
                    </div>
                    <RoleBadge role={user.role} />
                  </div>
                  <p className="mt-3 text-xs text-[#5E5B56]">{user.analysesCount} analyse(s)</p>
                </button>
              ))}
            </div>
          </div>

          {selectedUser ? (
            <UserDetail
              user={selectedUser}
              isSelf={selectedUser.id === currentUser?.id}
              isMutating={isMutating}
              onRoleChange={changeRole}
              onDelete={deleteUser}
            />
          ) : (
            <EmptyState
              title="Aucun compte selectionne"
              description="Selectionnez un utilisateur pour afficher le detail du compte."
            />
          )}
        </div>
      ) : (
        <EmptyState
          title="Aucun compte trouve"
          description="Ajustez la recherche ou le filtre de role."
        />
      )}
    </div>
  )
}

function UserDetail({
  user,
  isSelf,
  isMutating,
  onRoleChange,
  onDelete,
}: {
  user: AdminUser
  isSelf: boolean
  isMutating: boolean
  onRoleChange: (role: AdminUserRole) => Promise<void>
  onDelete: () => Promise<void>
}) {
  return (
    <aside className="rounded-[18px]" style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="p-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0F0F16' }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <UserRound size={17} className="text-[#C9A84C]" strokeWidth={1.75} />
              <p className="label-mono">Detail du compte</p>
            </div>
            <h2 className="mt-4 font-display text-2xl text-[#EDEAE4]">{user.firstName} {user.lastName}</h2>
            <p className="mt-1 text-sm text-[#5E5B56]">{user.email}</p>
          </div>
          <RoleBadge role={user.role} />
        </div>
      </div>

      <div className="grid gap-3 p-6 sm:grid-cols-2">
        <Info icon={Mail} label="Email" value={user.email} />
        <Info icon={Phone} label="Telephone" value={user.phone ?? 'Non renseigne'} />
        <Info icon={CalendarDays} label="Creation" value={new Date(user.createdAt).toLocaleDateString('fr-FR')} />
        <Info icon={ShieldCheck} label="Sessions" value={`${user.activeSessionsCount} active(s)`} />
      </div>

      <div className="px-6 pb-6">
        <p className="label-mono mb-3">Permissions</p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={user.role === 'USER' ? 'primary' : 'secondary'}
            disabled={isMutating || (isSelf && user.role === 'ADMIN')}
            onClick={() => void onRoleChange('USER')}
          >
            USER
          </Button>
          <Button
            variant={user.role === 'ADMIN' ? 'primary' : 'secondary'}
            disabled={isMutating || user.role === 'ADMIN'}
            onClick={() => void onRoleChange('ADMIN')}
          >
            ADMIN
          </Button>
        </div>
        {isSelf && (
          <p className="mt-3 text-xs leading-6 text-[#5E5B56]">
            Votre propre role admin ne peut pas etre retire depuis cette interface.
          </p>
        )}
      </div>

      <div className="px-6 pb-6">
        <p className="label-mono mb-3">Dernieres analyses</p>
        {user.analyses?.length ? (
          <div className="flex flex-col gap-2">
            {user.analyses.map((analysis) => (
              <div key={analysis.id} className="rounded-[12px] bg-[#0F0F16] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#EDEAE4]">{analysis.projectType} - {analysis.city}</p>
                    <p className="mt-1 text-xs text-[#5E5B56]">
                      {analysis.district ?? 'Quartier non precise'} - {new Date(analysis.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <Badge tone={analysis.score >= 75 ? 'warning' : 'neutral'}>{analysis.score}/100</Badge>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-[12px] bg-[#0F0F16] p-4 text-sm text-[#5E5B56]">Aucune analyse rattachee.</p>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6 sm:flex-row" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0F0F16' }}>
        <Button
          variant="danger"
          disabled={isMutating || isSelf}
          onClick={() => void onDelete()}
        >
          <Trash2 size={15} strokeWidth={1.75} /> Supprimer le compte
        </Button>
      </div>
    </aside>
  )
}

function RoleBadge({ role }: { role: AdminUserRole }) {
  return <Badge tone={role === 'ADMIN' ? 'gold' : 'neutral'}>{role}</Badge>
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail
  label: string
  value: string
}) {
  return (
    <div className="rounded-[12px] bg-[#0F0F16] p-4">
      <div className="flex items-center gap-2">
        <Icon size={13} className="text-[#C9A84C]" strokeWidth={2} />
        <p className="label-mono">{label}</p>
      </div>
      <p className="mt-2 break-words text-sm font-medium text-[#EDEAE4]">{value}</p>
    </div>
  )
}
