import { Building2, MapPin, MessageCircle, Ruler, Share2, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge, EmptyState, pageShell } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import {
  fetchListings,
  fetchMyListingApplications,
  resolveListingImageUrl,
} from '../services/listingService'
import type { Listing, ListingApplication } from '../types/listing'
import {
  buildListingWhatsAppUrl,
  getAbsoluteListingUrl,
} from '../utils/whatsapp'

export default function Listings() {
  const { currentUser } = useAuth()
  const [listings, setListings] = useState<Listing[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadListings() {
      const items = await fetchListings()
      if (!currentUser) return items

      const applications = await fetchMyListingApplications().catch(() => [])
      const applicationsByListingId = new Map(
        applications.map((application) => [application.listingId, application]),
      )

      return items.map((listing) => mapListingApplication(listing, applicationsByListingId))
    }

    loadListings()
      .then((items) => {
        setListings(items)
        setError('')
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Chargement impossible.'))
      .finally(() => setIsLoading(false))
  }, [currentUser])

  return (
    <section className={pageShell}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="label-mono mb-4">Annonces immobilieres</p>
          <h1 className="title-display title-xl text-[#EDEAE4]">Biens disponibles</h1>
          <p className="mt-5 text-base leading-8 text-[#9E9A94]">
            Consultez les annonces publiees par DS Conseil, ouvrez le detail du bien, puis postulez si le dossier correspond a votre budget.
          </p>
        </div>
        <Badge tone="gold">{listings.length} annonce(s)</Badge>
      </div>

      {error ? <p className="mt-6 rounded-[14px] border border-red-500/20 bg-red-500/8 p-4 text-sm text-red-300">{error}</p> : null}

      {isLoading ? (
        <p className="mt-10 text-sm text-[#5E5B56]">Chargement des annonces...</p>
      ) : listings.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="Aucune annonce pour le moment" description="Les annonces publiees par DS Conseil apparaitront ici." />
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </section>
  )
}

function mapListingApplication(
  listing: Listing,
  applicationsByListingId: Map<string, ListingApplication>,
) {
  const application = applicationsByListingId.get(listing.id)
  if (!application) return listing

  return {
    ...listing,
    myApplication: {
      id: application.id,
      status: application.status,
      createdAt: application.createdAt,
    },
  }
}

function ListingCard({ listing }: { listing: Listing }) {
  const location = [listing.city, listing.district].filter(Boolean).join(' - ')

  return (
    <article className="group flex h-full flex-col rounded-[18px] border border-white/6 bg-[#111118] p-6 transition hover:border-[#C9A84C]/25 hover:bg-[#14141C]">
      <Link to={`/annonces/${listing.id}`} className="flex flex-1 flex-col">
        {listing.imageUrls.length ? (
          <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[18px] bg-[#0F0F16]">
            <ListingCardImage
              url={listing.imageUrls[0]}
              title={listing.title}
              className="h-56 w-full"
            />
            {listing.imageUrls.length > 1 ? (
              <div className="flex gap-2 overflow-x-auto border-t border-white/6 p-2">
                {listing.imageUrls.slice(1, 5).map((url) => (
                  <ListingCardImage
                    key={url}
                    url={url}
                    title={listing.title}
                    className="h-16 w-20 shrink-0 rounded-[10px]"
                    small
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
        <p className="mt-4 line-clamp-4 flex-1 text-sm leading-7 text-[#9E9A94]">{listing.description}</p>
        <div className="mt-5 grid gap-3 text-sm text-[#9E9A94]">
          <Info icon={MapPin} value={location || 'Localisation non renseignee'} />
          <Info icon={Ruler} value={listing.surface ? `${listing.surface} m2` : 'Surface non renseignee'} />
          <Info icon={Building2} value={listing.priceLabel || (listing.price ? `${listing.price} FCFA` : 'Prix sur demande')} />
          <Info icon={UserRound} value={`${listing.applicationsCount} interesse(s)`} />
        </div>
      </Link>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        <Link
          to={`/annonces/${listing.id}`}
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-[#09090E] transition group-hover:bg-[#DDB96A]"
        >
          Voir les details
        </Link>
        <a
          href={buildListingWhatsAppUrl(listing, getAbsoluteListingUrl(listing.id))}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/16"
        >
          <Share2 size={14} />
          Partager
        </a>
      </div>
      <a
        href={buildListingWhatsAppUrl(listing, getAbsoluteListingUrl(listing.id))}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#06110B] transition hover:bg-emerald-400"
      >
        <MessageCircle size={15} />
        Contacter via WhatsApp
      </a>
    </article>
  )
}

function ListingCardImage({
  url,
  title,
  className,
  small = false,
}: {
  url: string
  title: string
  className: string
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
