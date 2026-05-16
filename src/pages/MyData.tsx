import { ArrowLeft, Shield, Trash2 } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard'
import { Button, EmptyState, Input, Textarea, labelClass, primaryButton } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import {
  accountDeletionReasons,
  buildAccountDeletionReason,
  type AccountDeletionReasonId,
} from '../data/accountDeletionReasons'
import { deleteMyProspect, fetchMyProspects } from '../services/prospectService'
import { requestAccountDeletion, updateMyData } from '../services/userDataService'
import type { Prospect } from '../types/prospect'

export default function MyData() {
  const { currentUser, updateCurrentUser } = useAuth()
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)
  const [profileForm, setProfileForm] = useState({
    firstName: currentUser?.firstName ?? '',
    lastName: currentUser?.lastName ?? '',
    email: currentUser?.email ?? '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isSavingProfile, setIsSavingProfile] = useState(false)
  const [profileMessage, setProfileMessage] = useState('')
  const [reasonId, setReasonId] = useState<AccountDeletionReasonId | ''>('')
  const [otherDetail, setOtherDetail] = useState('')
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

  const updateProfileField = (field: keyof typeof profileForm, value: string) => {
    setProfileForm((current) => ({ ...current, [field]: value }))
    setProfileMessage('')
    setError('')
  }

  const submitProfile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!profileForm.firstName.trim() || !profileForm.lastName.trim() || !profileForm.email.trim()) {
      setError('Nom, prenom et email sont obligatoires.')
      return
    }

    if (profileForm.newPassword || profileForm.confirmPassword || profileForm.currentPassword) {
      if (profileForm.newPassword !== profileForm.confirmPassword) {
        setError('Les nouveaux mots de passe ne correspondent pas.')
        return
      }
      if (!profileForm.currentPassword) {
        setError('Le mot de passe actuel est requis pour changer de mot de passe.')
        return
      }
    }

    setIsSavingProfile(true)
    setError('')
    setProfileMessage('')
    try {
      const user = await updateMyData({
        firstName: profileForm.firstName,
        lastName: profileForm.lastName,
        email: profileForm.email,
        currentPassword: profileForm.currentPassword || undefined,
        newPassword: profileForm.newPassword || undefined,
      })
      updateCurrentUser(user)
      setProfileForm((current) => ({
        ...current,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }))
      setProfileMessage('Vos informations ont ete mises a jour.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Mise a jour impossible.')
    } finally {
      setIsSavingProfile(false)
    }
  }

  const deleteProspect = async (id: string) => {
    const confirmed = window.confirm(
      "Supprimer cette pre-analyse ?\n\nElle sera retiree de votre espace mais conservee dans l'historique interne DS Conseil.",
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
    if (!reasonId) {
      setError('Veuillez selectionner un motif de suppression.')
      return
    }

    const confirmed = window.confirm(
      'Envoyer une demande de suppression de compte ?\n\nUn administrateur traitera votre demande manuellement.',
    )
    if (!confirmed) return

    setIsSubmittingAccount(true)
    setError('')
    setAccountMessage('')
    try {
      const reason = buildAccountDeletionReason(reasonId, otherDetail)
      const response = await requestAccountDeletion(reason)
      setAccountMessage(response.message)
      setReasonId('')
      setOtherDetail('')
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
      {profileMessage ? <p className="mb-6 rounded-[14px] border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm text-emerald-300">{profileMessage}</p> : null}
      {accountMessage ? <p className="mb-6 rounded-[14px] border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm text-emerald-300">{accountMessage}</p> : null}

      <section className="mb-12 rounded-[18px] p-6" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 className="font-display text-xl text-[#F0EDE8]">Informations du compte</h2>
        <form onSubmit={(event) => void submitProfile(event)} className="mt-6 grid gap-5 md:grid-cols-2">
          <label className={labelClass}>
            Prenom
            <Input
              required
              value={profileForm.firstName}
              onChange={(event) => updateProfileField('firstName', event.target.value)}
            />
          </label>
          <label className={labelClass}>
            Nom
            <Input
              required
              value={profileForm.lastName}
              onChange={(event) => updateProfileField('lastName', event.target.value)}
            />
          </label>
          <label className={labelClass + ' md:col-span-2'}>
            Email
            <Input
              required
              type="email"
              value={profileForm.email}
              onChange={(event) => updateProfileField('email', event.target.value)}
            />
          </label>
          <label className={labelClass}>
            Mot de passe actuel
            <Input
              type="password"
              value={profileForm.currentPassword}
              onChange={(event) => updateProfileField('currentPassword', event.target.value)}
              placeholder="Requis pour changer le mot de passe"
            />
          </label>
          <label className={labelClass}>
            Nouveau mot de passe
            <Input
              type="password"
              minLength={8}
              value={profileForm.newPassword}
              onChange={(event) => updateProfileField('newPassword', event.target.value)}
              placeholder="8 caracteres minimum"
            />
          </label>
          <label className={labelClass}>
            Confirmation du nouveau mot de passe
            <Input
              type="password"
              minLength={8}
              value={profileForm.confirmPassword}
              onChange={(event) => updateProfileField('confirmPassword', event.target.value)}
            />
          </label>
          <div className="flex items-end">
            <Button type="submit" disabled={isSavingProfile}>
              {isSavingProfile ? 'Enregistrement...' : 'Enregistrer mes informations'}
            </Button>
          </div>
        </form>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-display text-xl text-[#F0EDE8]">Mes pre-analyses</h2>
        {isLoading ? (
          <p className="text-sm text-[#6B6760]">Chargement...</p>
        ) : prospects.length === 0 ? (
          <EmptyState
            title="Aucune pre-analyse"
            description="Vous n'avez aucune pre-analyse a supprimer."
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
          <fieldset>
            <legend className={labelClass}>Motif de suppression</legend>
            <ul className="mt-3 flex flex-col gap-2">
              {accountDeletionReasons.map((option) => {
                const selected = reasonId === option.id
                return (
                  <li key={option.id}>
                    <label
                      className={
                        'flex cursor-pointer items-center gap-3 rounded-[12px] border px-4 py-3 text-sm transition ' +
                        (selected
                          ? 'border-[#C9A84C]/40 bg-[#C9A84C]/8 text-[#EDEAE4]'
                          : 'border-white/6 bg-white/[0.02] text-[#9E9A94] hover:border-white/10')
                      }
                    >
                      <input
                        type="radio"
                        name="deletion-reason"
                        value={option.id}
                        checked={selected}
                        onChange={() => {
                          setReasonId(option.id)
                          setError('')
                          if (option.id !== 'other') setOtherDetail('')
                        }}
                        className="h-4 w-4 accent-[#C9A84C]"
                      />
                      {option.label}
                    </label>
                  </li>
                )
              })}
            </ul>
          </fieldset>

          {reasonId === 'other' ? (
            <label className={`${labelClass} mt-5`}>
              Precisez (facultatif)
              <Textarea
                rows={3}
                value={otherDetail}
                onChange={(event) => setOtherDetail(event.target.value)}
                placeholder="Decrivez votre motif si vous le souhaitez..."
              />
            </label>
          ) : null}

          <Button
            type="submit"
            variant="danger"
            className="mt-5"
            disabled={isSubmittingAccount || !reasonId}
          >
            {isSubmittingAccount ? 'Envoi en cours...' : 'Demander la suppression du compte'}
          </Button>
        </form>
      </section>
    </div>
  )
}
