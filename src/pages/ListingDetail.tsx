import { ArrowLeft, Building2, MapPin, MessageCircle, Ruler, Send, Share2, UserRound, X } from 'lucide-react'
import { useEffect, useMemo, useState, type FormEvent, type MouseEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge, Button, EmptyState, Input, Select, Textarea, labelClass, pageShell } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import {
  BUDGET_RANGES,
  MARITAL_OPTIONS,
  PROFESSION_OPTIONS,
} from '../data/analysisFormOptions'
import {
  applyToListing,
  fetchListing,
  fetchMyListingApplications,
  resolveListingImageUrl,
  updateMyListingApplication,
} from '../services/listingService'
import type { Listing, ListingApplication, ListingApplicationInput } from '../types/listing'
import {
  buildListingWhatsAppUrl,
  getAbsoluteListingUrl,
} from '../utils/whatsapp'
import { digitsOnly, numericPhoneInputProps, toMaliPhone } from '../utils/phone'

const MARITAL_API_VALUES = [
  'SINGLE',
  'MARRIED',
  'PARTNERED',
  'DIVORCED',
  'WIDOWED',
  'PREFER_NOT_TO_SAY',
] as const

const MARITAL_API_MAP: Record<string, string> = Object.fromEntries(
  MARITAL_OPTIONS.map((label, index) => [label, MARITAL_API_VALUES[index]]),
)

const API_MARITAL_LABEL_MAP: Record<string, string> = Object.fromEntries(
  MARITAL_OPTIONS.map((label, index) => [MARITAL_API_VALUES[index], label]),
)

const emptyApplication: ListingApplicationInput = {
  budget: '',
  phone: '',
  profession: '',
  maritalStatus: '',
  hasChildren: false,
  childrenCount: undefined,
  message: '',
}

export default function ListingDetail() {
  const { id } = useParams()
  const { currentUser } = useAuth()
  const [listing, setListing] = useState<Listing | null>(null)
  const [application, setApplication] = useState<ListingApplication | null>(null)
  const [form, setForm] = useState<ListingApplicationInput>(emptyApplication)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    const listingId = id

    async function loadListing() {
      const item = await fetchListing(listingId)
      setListing(item)
      setSelectedImage(item.imageUrls[0] ?? null)

      if (!currentUser) return

      const applications = await fetchMyListingApplications().catch(() => [])
      const currentApplication = applications.find((entry) => entry.listingId === listingId) ?? null
      setApplication(currentApplication)
      setForm(currentApplication ? applicationToForm(currentApplication) : {
        ...emptyApplication,
        phone: currentUser.phone,
      })
    }

    loadListing()
      .then(() => setError(''))
      .catch((err) => setError(err instanceof Error ? err.message : 'Annonce introuvable.'))
      .finally(() => setIsLoading(false))
  }, [currentUser, id])

  const location = useMemo(
    () => [listing?.city, listing?.district].filter(Boolean).join(' - '),
    [listing],
  )
  const listingWhatsAppUrl = listing
    ? buildListingWhatsAppUrl(listing, getAbsoluteListingUrl(listing.id))
    : ''

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!listing) return
    if (!form.budget.trim()) {
      setError('Veuillez renseigner votre budget.')
      return
    }
    if (!form.phone.trim()) {
      setError('Veuillez renseigner votre numero de telephone.')
      return
    }

    setIsSubmitting(true)
    setError('')
    setMessage('')
    try {
      const payload = {
        ...form,
        maritalStatus: form.maritalStatus ? MARITAL_API_MAP[form.maritalStatus] : undefined,
      }
      const saved = application
        ? await updateMyListingApplication(application.id, payload)
        : await applyToListing(listing.id, payload)

      setApplication(saved)
      setForm(applicationToForm(saved))
      setListing((current) =>
        current
          ? {
              ...current,
              applicationsCount: application
                ? current.applicationsCount
                : current.applicationsCount + 1,
              myApplication: {
                id: saved.id,
                status: saved.status,
                createdAt: saved.createdAt,
              },
            }
          : current,
      )
      setMessage(application ? 'Votre candidature a ete modifiee.' : 'Votre candidature a ete transmise a DS Conseil.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Candidature impossible.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <section className={pageShell}>
        <p className="text-sm text-[#5E5B56]">Chargement de l'annonce...</p>
      </section>
    )
  }

  if (!listing) {
    return (
      <section className={pageShell}>
        <EmptyState
          title="Annonce introuvable"
          description={error || "Cette annonce n'est plus disponible."}
          action={<Link to="/annonces" className="text-sm font-medium text-[#C9A84C]">Retour aux annonces</Link>}
        />
      </section>
    )
  }

  return (
    <section className={pageShell}>
      <Link to="/annonces" className="inline-flex items-center gap-2 text-sm font-medium text-[#9E9A94] transition hover:text-[#EDEAE4]">
        <ArrowLeft size={16} />
        Retour aux annonces
      </Link>

      <div className="mt-8 grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Badge tone="gold">{listing.propertyType}</Badge>
              <h1 className="title-display mt-4 break-words text-3xl text-[#EDEAE4] sm:text-4xl">{listing.title}</h1>
            </div>
            {application ? <Badge tone="success">Candidature envoyee</Badge> : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={listingWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#06110B] transition hover:bg-emerald-400"
            >
              <MessageCircle size={16} />
              Contacter rapidement
            </a>
            <a
              href={listingWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/16"
            >
              <Share2 size={16} />
              Partager sur WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-3">
            {selectedImage ? (
              <ListingImageButton
                url={selectedImage}
                title={listing.title}
                className="h-72 w-full rounded-[18px] sm:h-[420px]"
                onOpen={(event) => {
                  event.stopPropagation()
                  setPreviewImage({ url: selectedImage, title: listing.title })
                }}
              />
            ) : (
              <div className="flex h-72 items-center justify-center rounded-[18px] border border-dashed border-white/8 bg-[#0F0F16] text-sm text-[#5E5B56] sm:h-[320px]">
                Aucune image disponible
              </div>
            )}

            {listing.imageUrls.length > 1 ? (
              <div className="flex gap-2 overflow-x-auto">
                {listing.imageUrls.map((url) => (
                  <ListingImageButton
                    key={url}
                    url={url}
                    title={listing.title}
                    className={`h-20 w-24 shrink-0 rounded-[10px] ${selectedImage === url ? 'ring-2 ring-[#C9A84C]/55' : ''}`}
                    small
                    onClick={(event) => {
                      event.preventDefault()
                      setSelectedImage(url)
                      setPreviewImage({ url, title: listing.title })
                    }}
                    onOpen={(event) => {
                      event.stopPropagation()
                      setPreviewImage({ url, title: listing.title })
                    }}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-8 rounded-[18px] border border-white/6 bg-[#111118] p-6">
            <h2 className="text-xl font-semibold text-[#EDEAE4]">Detail du bien</h2>
            <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#9E9A94]">{listing.description}</p>
            <div className="mt-6 grid gap-3 text-sm text-[#9E9A94] sm:grid-cols-2">
              <Info icon={MapPin} value={location || 'Localisation non renseignee'} />
              <Info icon={Ruler} value={listing.surface ? `${listing.surface} m2` : 'Surface non renseignee'} />
              <Info icon={Building2} value={listing.priceLabel || (listing.price ? `${listing.price} FCFA` : 'Prix sur demande')} />
              <Info icon={UserRound} value={`${listing.applicationsCount} interesse(s)`} />
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[18px] border border-white/6 bg-[#111118] p-4 sm:p-6 xl:sticky xl:top-28">
          {error ? <p className="mb-5 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">{error}</p> : null}
          {message ? <p className="mb-5 rounded-[14px] border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm text-emerald-300">{message}</p> : null}

          <a
            href={listingWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex w-full min-h-[46px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#06110B] transition hover:bg-emerald-400"
          >
            <MessageCircle size={16} />
            Discuter sur WhatsApp
          </a>

          {currentUser ? (
            <form onSubmit={(event) => void submitApplication(event)} className="flex flex-col gap-5">
              <div>
                <p className="text-base font-semibold text-[#EDEAE4]">
                  {application ? 'Modifier ma candidature' : 'Postuler a cette annonce'}
                </p>
                {application ? (
                  <p className="mt-3 rounded-[12px] border border-white/8 bg-white/[0.02] p-3 text-xs leading-6 text-[#9E9A94]">
                    Candidature envoyee le {new Date(application.createdAt).toLocaleDateString('fr-FR')}. Vous pouvez modifier vos informations tant que le dossier n'est pas reserve.
                  </p>
                ) : null}
              </div>

              <label className={labelClass}>
                Budget
                <Select
                  required
                  value={form.budget}
                  onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
                >
                  <option value="">Selectionner</option>
                  {BUDGET_RANGES.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </label>
              <label className={labelClass}>
                Telephone
                <div className="flex">
                  <span className="flex items-center rounded-l-[14px] border border-r-0 border-white/12 bg-white/5 px-3 text-sm text-[#6B6760] whitespace-nowrap">+223</span>
                  <Input
                    required
                    {...numericPhoneInputProps}
                    value={digitsOnly(form.phone.replace(/^\+223\s?/, ''))}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        phone: toMaliPhone(event.target.value),
                      }))
                    }
                    placeholder="7X XX XX XX"
                    className="rounded-l-none"
                  />
                </div>
                <span className="text-[10px] leading-5 text-[#5E5B56]">
                  Ce numero sera transmis a DS Conseil pour vous recontacter.
                </span>
              </label>
              <label className={labelClass}>
                Metier
                <Select
                  value={form.profession ?? ''}
                  onChange={(event) => setForm((current) => ({ ...current, profession: event.target.value }))}
                >
                  <option value="">Non renseigne</option>
                  {PROFESSION_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </label>
              <label className={labelClass}>
                Situation familiale
                <Select
                  value={form.maritalStatus ?? ''}
                  onChange={(event) => setForm((current) => ({ ...current, maritalStatus: event.target.value }))}
                >
                  <option value="">Non renseignee</option>
                  {MARITAL_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </label>
              <label className="flex items-center gap-3 text-sm text-[#9E9A94]">
                <input
                  type="checkbox"
                  checked={Boolean(form.hasChildren)}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      hasChildren: event.target.checked,
                      childrenCount: event.target.checked ? current.childrenCount : undefined,
                    }))
                  }
                  className="h-4 w-4 accent-[#C9A84C]"
                />
                J'ai des enfants
              </label>
              {form.hasChildren ? (
                <label className={labelClass}>
                  Nombre d'enfants
                  <Select
                    value={form.childrenCount ? String(form.childrenCount) : ''}
                    onChange={(event) => setForm((current) => ({ ...current, childrenCount: Number(event.target.value) || undefined }))}
                  >
                    <option value="">Selectionner</option>
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </Select>
                </label>
              ) : null}
              <label className={labelClass}>
                Message optionnel
                <Textarea
                  rows={4}
                  value={form.message ?? ''}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Precisez vos contraintes, disponibilites ou questions..."
                />
              </label>
              <Button type="submit" disabled={isSubmitting}>
                <Send size={15} />
                {isSubmitting ? 'Envoi...' : application ? 'Enregistrer les modifications' : 'Envoyer ma candidature'}
              </Button>
            </form>
          ) : (
            <div>
              <p className="text-base font-semibold text-[#EDEAE4]">Connexion requise</p>
              <p className="mt-2 text-sm leading-7 text-[#9E9A94]">Connectez-vous pour postuler a cette annonce.</p>
              <Link to="/auth" className="mt-5 inline-flex min-h-[46px] items-center rounded-full border border-white/10 px-6 text-sm text-[#EDEAE4]">
                Se connecter
              </Link>
            </div>
          )}
        </aside>
      </div>

      {previewImage ? (
        <ImagePreview
          image={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      ) : null}
    </section>
  )
}

function applicationToForm(application: ListingApplication): ListingApplicationInput {
  return {
    budget: application.budget,
    phone: application.phone || application.user.phone || '',
    profession: application.profession ?? '',
    maritalStatus: application.maritalStatus
      ? API_MARITAL_LABEL_MAP[application.maritalStatus] ?? ''
      : '',
    hasChildren: Boolean(application.hasChildren),
    childrenCount: application.childrenCount ?? undefined,
    message: application.message ?? '',
  }
}

function ListingImageButton({
  url,
  title,
  className,
  onOpen,
  onClick,
  small = false,
}: {
  url: string
  title: string
  className: string
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  small?: boolean
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-[#0F0F16] px-2 text-center ${small ? 'text-[10px]' : 'text-sm'} text-[#5E5B56]`}>
        Image indisponible
      </div>
    )
  }

  return (
    <button
      type="button"
      aria-label={`Voir l'image de ${title}`}
      onClick={onClick ?? onOpen}
      onDoubleClick={onOpen}
      className={`${className} block overflow-hidden bg-[#0F0F16] transition hover:ring-2 hover:ring-[#C9A84C]/40`}
    >
      <img
        src={resolveListingImageUrl(url)}
        alt={title}
        className="h-full w-full object-contain"
        onError={() => setHasError(true)}
      />
    </button>
  )
}

function ImagePreview({
  image,
  onClose,
}: {
  image: { url: string; title: string }
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image de ${image.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090E]/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Fermer l'image"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#09090E]/85 text-[#EDEAE4] transition hover:bg-[#C9A84C] hover:text-[#09090E]"
        >
          <X size={18} />
        </button>
        <img
          src={resolveListingImageUrl(image.url)}
          alt={image.title}
          className="max-h-[86vh] w-full rounded-[16px] bg-[#0F0F16] object-contain"
        />
      </div>
    </div>
  )
}

function Info({ icon: Icon, value }: { icon: typeof MapPin; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={15} className="shrink-0 text-[#C9A84C]" strokeWidth={1.75} />
      <span>{value}</span>
    </div>
  )
}
