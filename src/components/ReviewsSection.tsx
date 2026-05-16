import { ArrowRight, Star, Trash2 } from 'lucide-react'
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/useAuth'
import {
  createMyReview,
  deleteMyReview,
  fetchMyReview,
  fetchPublicReviews,
  updateMyReview,
} from '../services/reviewService'
import type { Review } from '../types/review'
import { Button, Textarea, labelClass, secondaryButton } from './ui'

function RatingStars({
  value,
  onChange,
}: {
  value: number
  onChange?: (rating: number) => void
}) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${value} etoiles`}>
      {[1, 2, 3, 4, 5].map((rating) => {
        const active = rating <= value
        if (!onChange) {
          return (
            <Star
              key={rating}
              size={16}
              className={active ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-white/10'}
              strokeWidth={1.8}
            />
          )
        }

        return (
          <button
            key={rating}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.02] text-[#5E5B56] transition hover:border-[#C9A84C]/35 hover:text-[#C9A84C]"
            aria-label={`Choisir ${rating} etoiles`}
            onClick={() => onChange(rating)}
          >
            <Star
              size={17}
              className={active ? 'fill-[#C9A84C] text-[#C9A84C]' : ''}
              strokeWidth={1.8}
            />
          </button>
        )
      })}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[16px] border border-white/6 bg-[#0F0F16] p-6">
      <div className="flex items-center justify-between gap-4">
        <RatingStars value={review.rating} />
        <span className="text-xs font-medium text-[#5E5B56]">{review.authorName}</span>
      </div>
      <p className="mt-5 flex-1 text-sm leading-7 text-[#9E9A94]">"{review.comment}"</p>
    </article>
  )
}

type ReviewsSectionProps = {
  maxReviews?: number
  showAllLink?: boolean
}

export default function ReviewsSection({ maxReviews, showAllLink = false }: ReviewsSectionProps) {
  const { currentUser } = useAuth()
  const [reviews, setReviews] = useState<Review[]>([])
  const [myReview, setMyReview] = useState<Review | null>(null)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const allVisibleReviews = useMemo(
    () => reviews.filter((review) => review.rating >= 4),
    [reviews],
  )
  const visibleReviews = useMemo(
    () => allVisibleReviews.slice(0, maxReviews ?? allVisibleReviews.length),
    [allVisibleReviews, maxReviews],
  )

  useEffect(() => {
    let cancelled = false

    async function loadReviews() {
      try {
        const publicReviews = await fetchPublicReviews()
        if (!cancelled) setReviews(publicReviews)
      } catch {
        if (!cancelled) setReviews([])
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void loadReviews()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!currentUser) return

    let cancelled = false

    async function loadMine() {
      try {
        const review = await fetchMyReview()
        if (cancelled) return
        setMyReview(review)
        setRating(review?.rating ?? 5)
        setComment(review?.comment ?? '')
      } catch {
        if (!cancelled) setMyReview(null)
      }
    }

    void loadMine()

    return () => {
      cancelled = true
    }
  }, [currentUser])

  const refreshPublicReviews = async () => {
    const publicReviews = await fetchPublicReviews()
    setReviews(publicReviews)
  }

  const submitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!comment.trim()) {
      setError('Veuillez saisir votre avis.')
      return
    }

    setIsSaving(true)
    setError('')
    setMessage('')
    try {
      const savedReview = myReview
        ? await updateMyReview({ rating, comment })
        : await createMyReview({ rating, comment })

      setMyReview(savedReview)
      setRating(savedReview.rating)
      setComment(savedReview.comment)
      await refreshPublicReviews()
      setMessage(
        savedReview.rating >= 4
          ? 'Votre avis a ete publie.'
          : "Votre avis a ete enregistre, mais seuls les avis 4 et 5 etoiles sont affiches sur l'accueil.",
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Avis impossible a enregistrer.')
    } finally {
      setIsSaving(false)
    }
  }

  const removeReview = async () => {
    if (!myReview) return
    const confirmed = window.confirm('Supprimer votre avis ?')
    if (!confirmed) return

    setIsSaving(true)
    setError('')
    setMessage('')
    try {
      await deleteMyReview()
      setMyReview(null)
      setRating(5)
      setComment('')
      await refreshPublicReviews()
      setMessage('Votre avis a ete supprime.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Suppression impossible.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="border-t border-white/5 px-6 py-24 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <span className="label-mono">005 Avis clients</span>
          <h2 className="title-display title-2xl mt-5 text-[#EDEAE4]">
            Ce que nos clients<br />
            <span className="text-gold-gradient">pensent de nous</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-[#9E9A94]">
            Les avis publics affiches ici sont uniquement les notes 4 et 5 etoiles.
          </p>
        </div>

        <div className="w-full max-w-md rounded-[18px] border border-white/6 bg-[#111118] p-6">
          <h3 className="text-base font-semibold text-[#EDEAE4]">
            {currentUser && myReview ? 'Modifier mon avis' : 'Laisser un avis'}
          </h3>
          {currentUser ? (
            <form onSubmit={(event) => void submitReview(event)} className="mt-5 flex flex-col gap-5">
              <label className={labelClass}>
                Note
                <RatingStars value={rating} onChange={setRating} />
              </label>
              <label className={labelClass}>
                Avis
                <Textarea
                  required
                  rows={4}
                  maxLength={800}
                  value={comment}
                  onChange={(event) => {
                    setComment(event.target.value)
                    setError('')
                    setMessage('')
                  }}
                  placeholder="Partagez votre experience..."
                />
              </label>
              {error ? <p className="text-sm text-red-300">{error}</p> : null}
              {message ? <p className="text-sm text-emerald-300">{message}</p> : null}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" disabled={isSaving}>
                  {isSaving ? 'Enregistrement...' : myReview ? 'Modifier' : 'Publier'}
                </Button>
                {myReview ? (
                  <Button
                    type="button"
                    variant="danger"
                    disabled={isSaving}
                    onClick={() => void removeReview()}
                  >
                    <Trash2 size={15} />
                    Supprimer
                  </Button>
                ) : null}
              </div>
            </form>
          ) : (
            <div className="mt-5">
              <p className="text-sm leading-7 text-[#9E9A94]">
                Connectez-vous pour laisser, modifier ou supprimer votre avis.
              </p>
              <Link to="/auth" className={`${secondaryButton} mt-5`}>
                Se connecter
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-14">
        {isLoading ? (
          <p className="text-sm text-[#5E5B56]">Chargement des avis...</p>
        ) : visibleReviews.length === 0 ? (
          <p className="rounded-[16px] border border-dashed border-white/8 bg-white/[0.02] p-8 text-sm text-[#5E5B56]">
            Aucun avis pour le moment.
          </p>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibleReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            {showAllLink && allVisibleReviews.length > visibleReviews.length ? (
              <div className="mt-8 flex justify-center">
                <Link to="/avis" className={secondaryButton}>
                  Voir tous les avis
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  )
}
