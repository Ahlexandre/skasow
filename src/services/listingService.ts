import { API_URL, apiFormRequest, apiRequest } from './apiClient'
import type {
  Listing,
  ListingApplication,
  ListingApplicationInput,
  ListingApplicationStatus,
  ListingDetail,
  ListingInput,
} from '../types/listing'

function cleanListingInput(input: ListingInput) {
  return {
    title: input.title.trim(),
    description: input.description.trim(),
    propertyType: input.propertyType.trim(),
    city: input.city.trim(),
    district: input.district?.trim() || undefined,
    address: input.address?.trim() || undefined,
    surface: input.surface,
    price: input.price,
    priceLabel: input.priceLabel?.trim() || undefined,
    rooms: input.rooms,
    imageUrls: input.imageUrls ?? [],
    status: input.status,
  }
}

function cleanApplicationInput(input: ListingApplicationInput) {
  return {
    budget: input.budget.trim(),
    phone: input.phone.trim(),
    profession: input.profession?.trim() || undefined,
    maritalStatus: input.maritalStatus || undefined,
    hasChildren: input.hasChildren,
    childrenCount: input.hasChildren ? input.childrenCount : undefined,
    message: input.message?.trim() || undefined,
  }
}

export async function fetchListings(): Promise<Listing[]> {
  return apiRequest<Listing[]>('/listings')
}

export async function fetchListing(id: string): Promise<Listing> {
  return apiRequest<Listing>(`/listings/${id}`)
}

export async function applyToListing(
  listingId: string,
  input: ListingApplicationInput,
): Promise<ListingApplication> {
  return apiRequest<ListingApplication>(`/listings/${listingId}/applications`, {
    method: 'POST',
    body: JSON.stringify(cleanApplicationInput(input)),
  })
}

export async function fetchMyListingApplications(): Promise<ListingApplication[]> {
  return apiRequest<ListingApplication[]>('/listings/me/applications')
}

export async function updateMyListingApplication(
  id: string,
  input: ListingApplicationInput,
): Promise<ListingApplication> {
  return apiRequest<ListingApplication>(`/listings/me/applications/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(cleanApplicationInput(input)),
  })
}

export async function fetchAdminListings(): Promise<Listing[]> {
  return apiRequest<Listing[]>('/listings/admin/all')
}

export async function fetchAdminListing(id: string): Promise<ListingDetail> {
  return apiRequest<ListingDetail>(`/listings/admin/${id}`)
}

export async function createAdminListing(input: ListingInput): Promise<Listing> {
  return apiRequest<Listing>('/listings/admin', {
    method: 'POST',
    body: JSON.stringify(cleanListingInput(input)),
  })
}

export async function uploadListingImage(file: File): Promise<{
  url: string
  filename: string
  size: number
}> {
  const body = new FormData()
  body.append('image', file)

  return apiFormRequest('/listings/admin/uploads', {
    method: 'POST',
    body,
  })
}

export function resolveListingImageUrl(url: string) {
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `${API_URL}${url}`
}

export async function updateAdminListing(
  id: string,
  input: ListingInput,
): Promise<Listing> {
  return apiRequest<Listing>(`/listings/admin/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(cleanListingInput(input)),
  })
}

export async function deleteAdminListing(id: string): Promise<void> {
  await apiRequest<void>(`/listings/admin/${id}`, {
    method: 'DELETE',
  })
}

export async function updateListingApplicationStatus(
  id: string,
  status: ListingApplicationStatus,
): Promise<ListingApplication> {
  return apiRequest<ListingApplication>(`/listings/admin/applications/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  })
}
