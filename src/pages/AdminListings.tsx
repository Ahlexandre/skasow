import { Building2, Edit3, Eye, ImagePlus, Save, Trash2, UsersRound, X } from 'lucide-react'
import { useEffect, useMemo, useState, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import {
  MALI_LOCATIONS,
  PROPERTY_TYPES,
} from '../data/analysisFormOptions'
import {
  createAdminListing,
  deleteAdminListing,
  fetchAdminListing,
  fetchAdminListings,
  resolveListingImageUrl,
  updateAdminListing,
  updateListingApplicationStatus,
  uploadListingImage,
} from '../services/listingService'
import type {
  Listing,
  ListingApplication,
  ListingApplicationStatus,
  ListingDetail,
  ListingInput,
  ListingStatus,
} from '../types/listing'
import { Badge, Button, EmptyState, Input, Select, Textarea, labelClass, pageShell } from '../components/ui'

const emptyListingForm: ListingInput = {
  title: '',
  description: '',
  propertyType: '',
  city: '',
  district: '',
  address: '',
  surface: undefined,
  price: undefined,
  priceLabel: '',
  rooms: undefined,
  imageUrls: [],
  status: 'DRAFT',
}

const listingStatuses: ListingStatus[] = ['DRAFT', 'PUBLISHED', 'ARCHIVED']
const applicationStatuses: ListingApplicationStatus[] = [
  'INTERESTED',
  'CONTACTED',
  'VISIT_SCHEDULED',
  'RESERVED',
  'REJECTED',
  'CANCELLED',
]

export default function AdminListings() {
  const [listings, setListings] = useState<Listing[]>([])
  const [selectedListing, setSelectedListing] = useState<ListingDetail | null>(null)
  const [form, setForm] = useState<ListingInput>(emptyListingForm)
  const [isLoading, setIsLoading] = useState(true)
  const [isMutating, setIsMutating] = useState(false)
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAdminListings()
      .then((items) => {
        setListings(items)
        setError('')
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Chargement impossible.'))
      .finally(() => setIsLoading(false))
  }, [])

  const stats = useMemo(
    () => ({
      total: listings.length,
      published: listings.filter((listing) => listing.status === 'PUBLISHED').length,
      applications: listings.reduce((sum, listing) => sum + listing.applicationsCount, 0),
    }),
    [listings],
  )

  const selectListing = async (listing: Listing) => {
    const detail = await fetchAdminListing(listing.id)
    setSelectedListing(detail)
    setForm(listingToForm(detail))
  }

  const resetForm = () => {
    setSelectedListing(null)
    setForm(emptyListingForm)
    setError('')
  }

  const saveListing = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.title.trim() || !form.description.trim() || !form.propertyType.trim() || !form.city.trim()) {
      setError('Titre, description, type de bien et ville sont obligatoires.')
      return
    }

    setIsMutating(true)
    setError('')
    try {
      const saved = selectedListing
        ? await updateAdminListing(selectedListing.id, form)
        : await createAdminListing(form)

      setListings((current) => {
        const exists = current.some((listing) => listing.id === saved.id)
        return exists
          ? current.map((listing) => (listing.id === saved.id ? { ...listing, ...saved } : listing))
          : [saved, ...current]
      })
      const detail = await fetchAdminListing(saved.id)
      setSelectedListing(detail)
      setForm(listingToForm(detail))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Enregistrement impossible.')
    } finally {
      setIsMutating(false)
    }
  }

  const removeListing = async () => {
    if (!selectedListing) return
    const confirmed = window.confirm(`Supprimer l'annonce "${selectedListing.title}" ?`)
    if (!confirmed) return

    setIsMutating(true)
    try {
      await deleteAdminListing(selectedListing.id)
      setListings((current) => current.filter((listing) => listing.id !== selectedListing.id))
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Suppression impossible.')
    } finally {
      setIsMutating(false)
    }
  }

  const changeApplicationStatus = async (
    application: ListingApplication,
    status: ListingApplicationStatus,
  ) => {
    const updated = await updateListingApplicationStatus(application.id, status)
    setSelectedListing((current) =>
      current
        ? {
            ...current,
            applications: current.applications.map((item) =>
              item.id === updated.id ? { ...item, ...updated } : item,
            ),
          }
        : current,
    )
  }

  const uploadImages = async (files: FileList | null) => {
    if (!files?.length) return

    setIsUploadingImage(true)
    setError('')
    try {
      const uploadedImages = await Promise.all(
        Array.from(files).map((file) => uploadListingImage(file)),
      )
      setForm((current) => ({
        ...current,
        imageUrls: [
          ...(current.imageUrls ?? []),
          ...uploadedImages.map((image) => image.url),
        ],
      }))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload image impossible.')
    } finally {
      setIsUploadingImage(false)
    }
  }

  const removeImage = (url: string) => {
    setForm((current) => ({
      ...current,
      imageUrls: (current.imageUrls ?? []).filter((imageUrl) => imageUrl !== url),
    }))
  }

  return (
    <section className={pageShell}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="label-mono mb-4">Administration</p>
          <h1 className="title-display title-xl text-[#EDEAE4]">Annonces immobilieres</h1>
          <p className="mt-5 text-base leading-8 text-[#9E9A94]">
            Creez les annonces, publiez les biens disponibles et suivez la liste des utilisateurs interesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="gold">{stats.total} annonce(s)</Badge>
          <Badge tone="success">{stats.published} publiee(s)</Badge>
          <Badge>{stats.applications} interesse(s)</Badge>
        </div>
      </div>

      {error ? <p className="mt-6 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">{error}</p> : null}

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <Button onClick={resetForm}>Nouvelle annonce</Button>
          {isLoading ? (
            <p className="text-sm text-[#5E5B56]">Chargement...</p>
          ) : listings.length === 0 ? (
            <EmptyState title="Aucune annonce" description="Creez une premiere annonce immobiliere." />
          ) : (
            <div className="flex flex-col gap-3">
              {listings.map((listing) => (
                <button
                  key={listing.id}
                  type="button"
                  onClick={() => void selectListing(listing)}
                  className={`rounded-[16px] border p-5 text-left transition ${
                    selectedListing?.id === listing.id
                      ? 'border-[#C9A84C]/40 bg-[#C9A84C]/7'
                      : 'border-white/6 bg-[#111118] hover:border-white/10'
                  }`}
                >
                  {listing.imageUrls.length ? (
                    <AdminListingImage
                      url={listing.imageUrls[0]}
                      title={listing.title}
                      className="mb-4 h-32 w-full rounded-[12px]"
                    />
                  ) : null}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-[#EDEAE4]">{listing.title}</p>
                      <p className="mt-1 text-sm text-[#5E5B56]">
                        {listing.city}{listing.district ? ` - ${listing.district}` : ''}
                      </p>
                    </div>
                    <StatusBadge status={listing.status} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>{listing.propertyType}</Badge>
                    <Badge>{listing.applicationsCount} interesse(s)</Badge>
                    {listing.surface ? <Badge>{listing.surface} m2</Badge> : null}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <form onSubmit={(event) => void saveListing(event)} className="rounded-[18px] border border-white/6 bg-[#111118] p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="label-mono">{selectedListing ? 'Modifier' : 'Creation'}</p>
                <h2 className="mt-2 text-xl font-semibold text-[#EDEAE4]">
                  {selectedListing ? selectedListing.title : 'Nouvelle annonce'}
                </h2>
              </div>
              {selectedListing ? <Badge tone="gold">{selectedListing.applications.length} interesse(s)</Badge> : null}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass + ' md:col-span-2'}>
                Titre
                <Input value={form.title} onChange={(event) => setFormValue('title', event.target.value, setForm)} required />
              </label>
              <label className={labelClass}>
                Type de bien
                <Select value={form.propertyType} onChange={(event) => setFormValue('propertyType', event.target.value, setForm)} required>
                  <option value="">Selectionner</option>
                  {PROPERTY_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                </Select>
              </label>
              <label className={labelClass}>
                Ville
                <Input
                  value={form.city}
                  list="listing-city-options"
                  onChange={(event) => setFormValue('city', event.target.value, setForm)}
                  required
                />
                <datalist id="listing-city-options">
                  {MALI_LOCATIONS.map((location) => <option key={location} value={location} />)}
                </datalist>
              </label>
              <label className={labelClass}>
                Quartier
                <Input value={form.district ?? ''} onChange={(event) => setFormValue('district', event.target.value, setForm)} />
              </label>
              <label className={labelClass}>
                Adresse
                <Input value={form.address ?? ''} onChange={(event) => setFormValue('address', event.target.value, setForm)} />
              </label>
              <label className={labelClass}>
                Surface m2
                <Input type="number" min={0} value={form.surface ?? ''} onChange={(event) => setFormNumberValue('surface', event.target.value, setForm)} />
              </label>
              <label className={labelClass}>
                Pieces
                <Input type="number" min={0} value={form.rooms ?? ''} onChange={(event) => setFormNumberValue('rooms', event.target.value, setForm)} />
              </label>
              <label className={labelClass}>
                Prix
                <Input type="number" min={0} value={form.price ?? ''} onChange={(event) => setFormNumberValue('price', event.target.value, setForm)} />
              </label>
              <label className={labelClass}>
                Libelle prix
                <Input value={form.priceLabel ?? ''} onChange={(event) => setFormValue('priceLabel', event.target.value, setForm)} placeholder="Ex: 35 000 000 FCFA" />
              </label>
              <label className={labelClass}>
                Statut
                <Select value={form.status} onChange={(event) => setFormValue('status', event.target.value as ListingStatus, setForm)}>
                  {listingStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
                </Select>
              </label>
              <label className={labelClass + ' md:col-span-2'}>
                Description
                <Textarea rows={5} value={form.description} onChange={(event) => setFormValue('description', event.target.value, setForm)} required />
              </label>
              <div className="md:col-span-2">
                <label className={labelClass}>
                  Images
                  <span className="flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-[16px] border border-dashed border-white/10 bg-white/[0.02] px-4 py-6 text-center text-sm text-[#9E9A94] transition hover:border-[#C9A84C]/35 hover:text-[#EDEAE4]">
                    <ImagePlus size={22} className="mb-2 text-[#C9A84C]" />
                    {isUploadingImage ? 'Upload en cours...' : 'Ajouter une ou plusieurs images'}
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      multiple
                      className="sr-only"
                      disabled={isUploadingImage}
                      onChange={(event) => void uploadImages(event.target.files)}
                    />
                  </span>
                </label>
                {form.imageUrls?.length ? (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {form.imageUrls.map((url) => (
                      <div key={url} className="group relative overflow-hidden rounded-[14px] border border-white/8 bg-[#0F0F16]">
                        <AdminListingImage
                          url={url}
                          title="Annonce"
                          className="h-32 w-full"
                        />
                        <button
                          type="button"
                          aria-label="Retirer l'image"
                          onClick={() => removeImage(url)}
                          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#09090E]/80 text-red-300 opacity-100 transition hover:bg-red-500/20 sm:opacity-0 sm:group-hover:opacity-100"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="submit" disabled={isMutating}>
                <Save size={15} />
                {isMutating ? 'Enregistrement...' : 'Enregistrer'}
              </Button>
              {selectedListing ? (
                <Button type="button" variant="danger" disabled={isMutating} onClick={() => void removeListing()}>
                  <Trash2 size={15} />
                  Supprimer
                </Button>
              ) : null}
            </div>
          </form>

          {selectedListing ? (
            <section className="rounded-[18px] border border-white/6 bg-[#111118] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="label-mono">Reservations / interesses</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#EDEAE4]">Liste des candidatures</h2>
                </div>
                <UsersRound size={22} className="text-[#C9A84C]" />
              </div>

              {selectedListing.applications.length === 0 ? (
                <p className="mt-6 rounded-[14px] border border-dashed border-white/8 bg-white/[0.02] p-6 text-sm text-[#5E5B56]">
                  Aucun interesse pour cette annonce.
                </p>
              ) : (
                <div className="mt-6 flex flex-col gap-3">
                  {selectedListing.applications.map((application) => (
                    <ApplicationRow
                      key={application.id}
                      application={application}
                      onStatusChange={(status) => void changeApplicationStatus(application, status)}
                    />
                  ))}
                </div>
              )}
            </section>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function AdminListingImage({
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
      <div className={`${className} flex items-center justify-center bg-[#0F0F16] text-xs text-[#5E5B56]`}>
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

function ApplicationRow({
  application,
  onStatusChange,
}: {
  application: ListingApplication
  onStatusChange: (status: ListingApplicationStatus) => void
}) {
  return (
    <article className="rounded-[14px] border border-white/6 bg-[#0F0F16] p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-semibold text-[#EDEAE4]">
            {application.user.firstName} {application.user.lastName}
          </p>
          <p className="mt-1 text-xs text-[#5E5B56]">{application.user.email} - {application.user.phone ?? 'Telephone non renseigne'}</p>
          <div className="mt-4 grid gap-2 text-sm text-[#9E9A94] md:grid-cols-2">
            <Info icon={Building2} label="Budget" value={application.budget} />
            <Info icon={Edit3} label="Metier" value={application.profession ?? 'Non renseigne'} />
            <Info icon={UsersRound} label="Famille" value={formatFamily(application)} />
            <Info icon={Eye} label="Date" value={new Date(application.createdAt).toLocaleDateString('fr-FR')} />
          </div>
        </div>
        <Select
          value={application.status}
          onChange={(event) => onStatusChange(event.target.value as ListingApplicationStatus)}
          className="lg:w-52"
        >
          {applicationStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
        </Select>
      </div>
      {application.message ? (
        <p className="mt-4 rounded-[12px] bg-white/[0.03] p-4 text-sm leading-7 text-[#9E9A94]">{application.message}</p>
      ) : null}
    </article>
  )
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2
  label: string
  value: string
}) {
  return (
    <div className="flex gap-2">
      <Icon size={14} className="mt-0.5 shrink-0 text-[#C9A84C]" />
      <span><span className="text-[#5E5B56]">{label}:</span> {value}</span>
    </div>
  )
}

function StatusBadge({ status }: { status: ListingStatus }) {
  if (status === 'PUBLISHED') return <Badge tone="success">Publiee</Badge>
  if (status === 'ARCHIVED') return <Badge>Archivee</Badge>
  return <Badge tone="warning">Brouillon</Badge>
}

function listingToForm(listing: Listing): ListingInput {
  return {
    title: listing.title,
    description: listing.description,
    propertyType: listing.propertyType,
    city: listing.city,
    district: listing.district ?? '',
    address: listing.address ?? '',
    surface: listing.surface ?? undefined,
    price: listing.price ? Number(listing.price) : undefined,
    priceLabel: listing.priceLabel ?? '',
    rooms: listing.rooms ?? undefined,
    imageUrls: listing.imageUrls ?? [],
    status: listing.status,
  }
}

function setFormValue<K extends keyof ListingInput>(
  key: K,
  value: ListingInput[K],
  setForm: Dispatch<SetStateAction<ListingInput>>,
) {
  setForm((current) => ({ ...current, [key]: value }))
}

function setFormNumberValue(
  key: 'surface' | 'price' | 'rooms',
  value: string,
  setForm: Dispatch<SetStateAction<ListingInput>>,
) {
  const parsed = value === '' ? undefined : Number(value)
  setForm((current) => ({ ...current, [key]: Number.isFinite(parsed) ? parsed : undefined }))
}

function formatFamily(application: ListingApplication) {
  const marital = application.maritalStatus ?? 'Non renseignee'
  if (!application.hasChildren) return marital
  return `${marital}, ${application.childrenCount ?? 0} enfant(s)`
}
