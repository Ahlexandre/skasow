import type { Listing } from '../types/listing'

export const DS_WHATSAPP_PHONE = '22370000000'
export const DS_WHATSAPP_DISPLAY = '+223 70 00 00 00'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${DS_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export function buildGeneralWhatsAppUrl() {
  return buildWhatsAppUrl(
    "Bonjour DS Conseil, je souhaite echanger avec vous au sujet d'un projet immobilier.",
  )
}

export function buildListingWhatsAppUrl(listing: Listing, listingUrl: string) {
  const location = [listing.city, listing.district].filter(Boolean).join(' - ')
  return buildWhatsAppUrl(
    [
      `Bonjour DS Conseil, je suis interesse par cette annonce : ${listing.title}.`,
      location ? `Localisation : ${location}.` : '',
      listing.priceLabel || listing.price ? `Prix : ${listing.priceLabel || `${listing.price} FCFA`}.` : '',
      `Lien : ${listingUrl}`,
    ].filter(Boolean).join('\n'),
  )
}

export function getAbsoluteListingUrl(listingId: string) {
  if (typeof window === 'undefined') return `/annonces/${listingId}`
  return `${window.location.origin}/annonces/${listingId}`
}
