export type ListingStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'

export type ListingApplicationStatus =
  | 'INTERESTED'
  | 'CONTACTED'
  | 'VISIT_SCHEDULED'
  | 'RESERVED'
  | 'REJECTED'
  | 'CANCELLED'

export type Listing = {
  id: string
  title: string
  description: string
  propertyType: string
  city: string
  district: string | null
  address: string | null
  surface: number | null
  price: string | null
  priceLabel: string | null
  rooms: number | null
  imageUrls: string[]
  status: ListingStatus
  createdAt: string
  updatedAt: string
  applicationsCount: number
  myApplication?: {
    id: string
    status: ListingApplicationStatus
    createdAt: string
  } | null
}

export type ListingApplication = {
  id: string
  listingId: string
  userId: string
  budget: string
  phone: string
  profession: string | null
  maritalStatus: string | null
  hasChildren: boolean | null
  childrenCount: number | null
  message: string | null
  status: ListingApplicationStatus
  createdAt: string
  updatedAt: string
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
  }
  listing?: Listing
}

export type ListingDetail = Listing & {
  applications: ListingApplication[]
}

export type ListingInput = {
  title: string
  description: string
  propertyType: string
  city: string
  district?: string
  address?: string
  surface?: number
  price?: number
  priceLabel?: string
  rooms?: number
  imageUrls?: string[]
  status?: ListingStatus
}

export type ListingApplicationInput = {
  budget: string
  phone: string
  profession?: string
  maritalStatus?: string
  hasChildren?: boolean
  childrenCount?: number
  message?: string
}
