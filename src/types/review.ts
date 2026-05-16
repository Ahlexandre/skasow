export type Review = {
  id: string
  userId: string
  rating: number
  comment: string
  authorName: string
  createdAt: string
  updatedAt: string
}

export type ReviewInput = {
  rating: number
  comment: string
}
