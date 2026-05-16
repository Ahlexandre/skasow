import { Building2, MapPin, Ruler, Send, UserRound } from 'lucide-react'
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  BUDGET_RANGES,
  MARITAL_OPTIONS,
  PROFESSION_OPTIONS,
} from '../data/analysisFormOptions'
import { useAuth } from '../contexts/useAuth'
import {
  applyToListing,
  fetchListings,
  fetchMyListingApplications,
  resolveListingImageUrl,
  updateMyListingApplication,
} from '../services/listingService'
import type { Listing, ListingApplication, ListingApplicationInput } from '../types/listing'
import { Badge, Button, EmptyState, Select, Textarea, labelClass, pageShell } from '../components/ui'

const MARITAL_API_MAP: Record<string, string> = {
  'CÃ©libataire': 'SINGLE',
  'MariÃ©(e)': 'MARRIED',
  'En couple': 'PARTNERED',
  'DivorcÃ©(e)': 'DIVORCED',
  'Veuf(ve)': 'WIDOWED',
  'Je prÃ©fÃ¨re ne pas rÃ©pondre': 'PREFER_NOT_TO_SAY',
}

const emptyApplication: ListingApplicationInput = {
  budget: '',
  profession: '',
  maritalStatus: '',
  hasChildren: false,
  childrenCount: undefined,
  message: '',
}

const API_MARITAL_LABEL_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(MARITAL_API_MAP).map(([label, apiValue]) => [apiValue, label]),
)

export default function Listings() {
  const { currentUser } = useAuth()
  const [listings, setListings] = useState<Listing[]>([])
  const [activeListingId, setActiveListingId] = useState<string | null>(null)
  const [form, setForm] = useState<ListingApplicationInput>(emptyApplication)
  const [myApplications, setMyApplications] = useState<ListingApplication[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadListings() {
      const items = await fetchListings()
      if (!currentUser) return items

      const applications = await fetchMyListingApplications().catch(() => [])
      setMyApplications(applications)
      const applicationsByListingId = new Map(
        applications.map((application) => [application.listingId, application]),
      )

      return items.map((listing) => {
        const application = applicationsByListingId.get(listing.id)
        return application
          ? {
              ...listing,
              myApplication: {
                id: application.id,
                status: application.status,
                createdAt: application.createdAt,
              },
            }
          : listing
      })
    }

    loadListings()
      .then((items) => {
        setListings(items)
        setError('')
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Chargement impossible.'))
      .finally(() => setIsLoading(false))
  }, [currentUser])

  const activeListing = useMemo(
    () => listings.find((listing) => listing.id === activeListingId) ?? null,
    [activeListingId, listings],
  )
  const activeApplication = useMemo(
    () =>
      activeListing
        ? myApplications.find((application) => application.listingId === activeListing.id) ?? null
        : null,
    [activeListing, myApplications],
  )

  const openListingPanel = (listing: Listing) => {
    setActiveListingId(listing.id)
    setError('')
    setMessage('')

    const application = myApplications.find((item) => item.listingId === listing.id)
    setForm(application ? applicationToForm(application) : emptyApplication)
  }

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!activeListing) return
    if (!form.budget.trim()) {
      setError('Veuillez renseigner votre budget.')
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
      const application = activeApplication
        ? await updateMyListingApplication(activeApplication.id, payload)
        : await applyToListing(activeListing.id, payload)
      setMyApplications((current) => {
        const exists = current.some((item) => item.id === application.id)
        return exists
          ? current.map((item) => (item.id === application.id ? { ...item, ...application } : item))
          : [application, ...current]
      })
      setListings((current) =>
        current.map((listing) =>
          listing.id === activeListing.id
            ? {
                ...listing,
                applicationsCount: activeApplication
                  ? listing.applicationsCount
                  : listing.applicationsCount + 1,
                myApplication: {
                  id: application.id,
                  status: application.status,
                  createdAt: application.createdAt,
                },
              }
            : listing,
        ),
      )
      setForm(applicationToForm(application))
      setMessage(activeApplication ? 'Votre candidature a ete modifiee.' : 'Votre candidature a ete transmise a DS Conseil.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Candidature impossible.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={pageShell}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="label-mono mb-4">Annonces immobilieres</p>
          <h1 className="title-display title-xl text-[#EDEAE4]">Biens disponibles</h1>
          <p className="mt-5 text-base leading-8 text-[#9E9A94]">
            Consultez les annonces publiees par DS Conseil et postulez sur les biens qui correspondent a votre budget.
          </p>
        </div>
        <Badge tone="gold">{listings.length} annonce(s)</Badge>
      </div>

      {error ? <p className="mt-6 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">{error}</p> : null}
      {message ? <p className="mt-6 rounded-[14px] border border-emerald-500/20 bg-emerald-500/8 p-4 text-sm text-emerald-300">{message}</p> : null}

      {isLoading ? (
        <p className="mt-10 text-sm text-[#5E5B56]">Chargement des annonces...</p>
      ) : listings.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="Aucune annonce pour le moment" description="Les annonces publiees par DS Conseil apparaitront ici." />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_420px]">
          <div className="grid gap-5 md:grid-cols-2">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                active={listing.id === activeListingId}
                onApply={() => {
                  openListingPanel(listing)
                }}
              />
            ))}
          </div>

          <aside className="h-fit rounded-[18px] border border-white/6 bg-[#111118] p-6 xl:sticky xl:top-32">
            {activeListing ? (
              currentUser ? (
                (
                  <form onSubmit={(event) => void submitApplication(event)} className="flex flex-col gap-5">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-[#EDEAE4]">
                            {activeApplication ? 'Modifier ma candidature' : 'Postuler'}
                          </p>
                          <p className="mt-1 text-sm text-[#5E5B56]">{activeListing.title}</p>
                        </div>
                        {activeApplication ? <Badge tone="gold">{activeApplication.status}</Badge> : null}
                      </div>
                      {activeApplication ? (
                        <p className="mt-4 rounded-[12px] border border-white/8 bg-white/[0.02] p-3 text-xs leading-6 text-[#9E9A94]">
                          Candidature envoyee le {new Date(activeApplication.createdAt).toLocaleDateString('fr-FR')}. Vous pouvez modifier vos informations tant que le dossier n'est pas reserve.
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
                      {isSubmitting ? 'Envoi...' : activeApplication ? 'Enregistrer les modifications' : 'Envoyer ma candidature'}
                    </Button>
                  </form>
                )
              ) : (
                <div>
                  <p className="text-base font-semibold text-[#EDEAE4]">Connexion requise</p>
                  <p className="mt-2 text-sm leading-7 text-[#9E9A94]">Connectez-vous pour postuler a cette annonce.</p>
                  <Link to="/auth" className="mt-5 inline-flex min-h-[46px] items-center rounded-full border border-white/10 px-6 text-sm text-[#EDEAE4]">
                    Se connecter
                  </Link>
                </div>
              )
            ) : (
              <div>
                <p className="text-base font-semibold text-[#EDEAE4]">Selectionnez une annonce</p>
                <p className="mt-2 text-sm leading-7 text-[#9E9A94]">Le formulaire de candidature apparaitra ici.</p>
              </div>
            )}
          </aside>
        </div>
      )}
    </section>
  )
}

function applicationToForm(application: ListingApplication): ListingApplicationInput {
  return {
    budget: application.budget,
    profession: application.profession ?? '',
    maritalStatus: application.maritalStatus
      ? API_MARITAL_LABEL_MAP[application.maritalStatus] ?? ''
      : '',
    hasChildren: Boolean(application.hasChildren),
    childrenCount: application.childrenCount ?? undefined,
    message: application.message ?? '',
  }
}

function ListingCard({
  listing,
  active,
  onApply,
}: {
  listing: Listing
  active: boolean
  onApply: () => void
}) {
  const location = [listing.city, listing.district].filter(Boolean).join(' - ')
  return (
    <article className={`rounded-[18px] border p-6 transition ${active ? 'border-[#C9A84C]/40 bg-[#C9A84C]/7' : 'border-white/6 bg-[#111118]'}`}>
      {listing.imageUrls.length ? (
        <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[18px] bg-[#0F0F16]">
          <ListingImage
            url={listing.imageUrls[0]}
            title={listing.title}
            className="h-56 w-full"
          />
          {listing.imageUrls.length > 1 ? (
            <div className="flex gap-2 overflow-x-auto border-t border-white/6 p-2">
              {listing.imageUrls.slice(1, 5).map((url) => (
                <img
                  key={url}
                  src={resolveListingImageUrl(url)}
                  alt={listing.title}
                  className="h-16 w-20 shrink-0 rounded-[10px] bg-[#09090E] object-contain"
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge tone="gold">{listing.propertyType}</Badge>
          <h2 className="mt-4 text-xl font-semibold text-[#EDEAE4]">{listing.title}</h2>
        </div>
        {listing.myApplication ? <Badge tone="success">Postule</Badge> : null}
      </div>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#9E9A94]">{listing.description}</p>
      <div className="mt-5 grid gap-3 text-sm text-[#9E9A94]">
        <Info icon={MapPin} value={location || 'Localisation non renseignee'} />
        <Info icon={Ruler} value={listing.surface ? `${listing.surface} m2` : 'Surface non renseignee'} />
        <Info icon={Building2} value={listing.priceLabel || (listing.price ? `${listing.price} FCFA` : 'Prix sur demande')} />
        <Info icon={UserRound} value={`${listing.applicationsCount} interesse(s)`} />
      </div>
      <Button className="mt-6 w-full" onClick={onApply}>
        {listing.myApplication ? 'Voir ma candidature' : 'Je suis interesse'}
      </Button>
    </article>
  )
}

function ListingImage({
  url,
  title,
  className,
}: {
  url: string
  title: string
  className: string
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-[#0F0F16] text-sm text-[#5E5B56]`}>
        Image indisponible
      </div>
    )
  }

  return (
    <img
      src={resolveListingImageUrl(url)}
      alt={title}
      className={`${className} bg-[#0F0F16] object-contain`}
      onError={() => setHasError(true)}
    />
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
