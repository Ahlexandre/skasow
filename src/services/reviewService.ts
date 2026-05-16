import { apiRequest } from './apiClient'
import type { Review, ReviewInput } from '../types/review'

export async function fetchPublicReviews(): Promise<Review[]> {
  return apiRequest<Review[]>('/reviews/public')
}

export async function fetchMyReview(): Promise<Review | null> {
  return apiRequest<Review | null>('/reviews/me')
}

export async function createMyReview(input: ReviewInput): Promise<Review> {
  return apiRequest<Review>('/reviews/me', {
    method: 'POST',
    body: JSON.stringify({
      rating: input.rating,
      comment: input.comment.trim(),
    }),
  })
}

export async function updateMyReview(input: ReviewInput): Promise<Review> {
  return apiRequest<Review>('/reviews/me', {
    method: 'PATCH',
    body: JSON.stringify({
      rating: input.rating,
      comment: input.comment.trim(),
    }),
  })
}

export async function deleteMyReview(): Promise<void> {
  await apiRequest<void>('/reviews/me', {
    method: 'DELETE',
  })
}
